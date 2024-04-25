import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4004;
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//trc20usdt.ts routes
import trc20usdt from '../routes/trc20usdt';
import bep20usdt from '../routes/bep20usdt';
import jwroute from '../routes/jw';
app.use('/api/v1/trc20usdt',trc20usdt)
app.use('/api/v1/bep20usdt',bep20usdt)
app.use('/api/v1/jw',jwroute)