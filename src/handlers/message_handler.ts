import { Request, Response } from "express";

import message_model from "../data/models/message_model";

function is_empty(data: any) {
    return Object.keys(data).length === 0;
}

function get_messages(req: Request, res: Response) {
    const messages_data = message_model.find();

    messages_data.exec((err, messages) => {
        if(err) {
            res.status(502).json({msg: "error", data: err});
            return;
        }

        res.status(201).json({msg: "success", data: messages});
    });
}

function patch_message(req: Request, res: Response) {}

function get_message(req: Request, res: Response) {
    const message_id = req.query.id;

    if (!message_id) {
        res.status(400).json({msg: "Get request has empty body", data: message_id});
        return;
    }

    const message_data = message_model.findById(message_id);

    message_data.exec((err, message) => {
        if(err) {
            res.status(502).json({msg: "Get request has invalid query id", data: err});
            return;
        }

        res.status(201).json({msg: "success", data: message});
    });
}

async function post_message(req: Request, res: Response) {
    const data = req.body;

    if (is_empty(data)) {
        res.status(400).json({msg: "Post request has empty body", data: data});
        return;
    }

    const message = await message_model.create(data);

    if (is_empty(message)) {
        res.status(502).json({msg: "Bad Gateway: failed to query MongoDB instance", data: message});
        return;
    }

    // ISSUE: pretty sure this is a security breach
    if( req.headers["in-testing-env"] ) {
        res.status(201).json({msg: "success", data: message});
        return;
    }

    res.status(201).json("success");

    return;
}

const message_handler = { patch_message, post_message, get_message, get_messages };

export default message_handler;
