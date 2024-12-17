import express from "express";
import { Request, Response } from "express";
import Prisma from "../../../lib/prisma";

const prisma = Prisma;

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const data = await prisma.data.findMany({
        where: {}
    })
    res.json(data)
})

router.get("/:id", async (req: Request, res: Response) => {
    const data = await prisma.data.findMany({
        where: { id: req.params.id }
    })
    res.json(data);
})

router.post("/", async (req: Request, res: Response) => {
    const userInputData = req.body;
    const data = await prisma.data.create({
        data: {
            title: userInputData.title,
            content: userInputData.content,
        }
    })
    res.json(data)
})

router.delete("/:id", async (req: Request, res: Response) => {
    const data = await prisma.data.delete({
        where: { id: req.params.id }
    })
    res.json(data)
})

router.patch("/", async (req: Request, res: Response) => {
    const userInputData = req.body;
    await prisma.data.update({
        where: { id: userInputData.dataId },
        data: {
            title: userInputData.title,
            content: userInputData.content,
        }
    })

    res.json({ sucess: true })
})

export default router