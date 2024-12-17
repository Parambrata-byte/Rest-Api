import { Request, Response, NextFunction } from "express";
import express from "express";
import router from "./routes/api/v1/index"

const PORT = 3002;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
})

app.listen(PORT, () => console.log(`server has started at http://localhost:${PORT}`))