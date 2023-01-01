import ControllerFactory from "../generators/Factories/ControllerFactory";
import MessageModel from "../data/models/messageModel";
import RouteType from "../generators/CommonTypes/RouteType";
import RouterFactory from "../generators/Factories/RouterFactory";

const config: RouteType[] = [
    {
        type:       "GET",
        uri:        "/getOneById/:id",
        middleware: ControllerFactory.create("GET_BY_ID", MessageModel),
    },
    {
        type:       "GET",
        uri:        "/getAll",
        middleware: ControllerFactory.create("GET_ALL", MessageModel),
    },
    {
        type:       "GET",
        uri:        "/getCount",
        middleware: ControllerFactory.create("GET_COUNT", MessageModel),
    },
    {
        type:       "POST",
        uri:        "/postOne",
        middleware: ControllerFactory.create("POST_ONE", MessageModel),
    },
    {
        type:       "PATCH",
        uri:        "/updateOneById/:id",
        middleware: ControllerFactory.create("UPDATE_BY_ID", MessageModel),
    },
    {
        type:       "DELETE",
        uri:        "/deleteOneById/:id",
        middleware: ControllerFactory.create("DELETE_BY_ID", MessageModel),
    },
];

const MessageRoutes = RouterFactory.createRoute(config);

export default MessageRoutes;
