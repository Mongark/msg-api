import { NextFunction, Request, Response } from "express";

function is_empty(data: any) {
    return Object.keys(data).length === 0;
}

function post_message(req: Request, res: Response, next: NextFunction) {
    const data = req.body;

    if (is_empty(data)) {
        res.status(400).json("Post request has empty body");
        next();
    }

    res.status(200).json("success");

    next();
}

const message_handler = { post_message };

export default  message_handler;
