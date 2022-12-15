import { Router } from "express";

const health_router = Router();

health_router.get('/ping', (req: Request, res: Response) => res.status(200).json("pong"));

export default health_router;
