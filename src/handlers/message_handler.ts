import { NextFunction, Request, Response } from "express";

import message_model from "../data/models/message_model";

function is_empty(data: any) {
    return Object.keys(data).length === 0;
}

async function post_message(req: Request, res: Response) {
    const data = req.body;

    if (is_empty(data)) {
        res.status(400).json("Post request has empty body");
        return;
    }

    const is_valid: any = await message_model.validate(data);

    if( !is_valid ) {
        res.status(400).json("Post request has a invalid body");
        return;
    }

    const message = await message_model.create(data);

    if (is_empty(message)) {
        res.status(300).json("Message could not be posted");
        return;
    }

    res.status(200).json({msg: "success", data: message});

    return;
}

const message_handler = { post_message };

export default  message_handler;
