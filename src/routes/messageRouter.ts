import ControllerFactory from "../generators/Factories/ControllerFactory";
import MessageModel from "../data/models/messageModel";
import RouteType from "../generators/CommonTypes/RouteType";
import RouterFactory from "../generators/Factories/RouterFactory";

function createMessageMiddleware(type: string) {
    return ControllerFactory.create(type, MessageModel);
}

const config: RouteType[] = [
    {
        type:       "GET",
        uri:        "/getOneById/:id",
        middleware: createMessageMiddleware("GET_BY_ID"),
    },
    {
        type:       "GET",
        uri:        "/getAll",
        middleware: createMessageMiddleware("GET_ALL"),
    },
    {
        type:       "GET",
        uri:        "/getCount",
        middleware: createMessageMiddleware("GET_COUNT"),
    },
    {
        type:       "POST",
        uri:        "/postOne",
        middleware: createMessageMiddleware("POST_ONE"),
    },
    {
        type:       "PATCH",
        uri:        "/updateOneById/:id",
        middleware: createMessageMiddleware("UPDATE_BY_ID"),
    },
    {
        type:       "DELETE",
        uri:        "/deleteOneById/:id",
        middleware: createMessageMiddleware("DELETE_BY_ID"),
    },
];

const MessageRoutes = RouterFactory.createRoute(config);

export default MessageRoutes;
