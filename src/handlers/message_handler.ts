import { NextFunction, Request, Response } from "express";

function post_message(req: Request, res: Response, next: NextFunction) {
    next();
}

const message_handler = { post_message };

export default  message_handler;
