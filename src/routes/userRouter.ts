import ControllerFactory from "../generators/Factories/ControllerFactory";
import UserModel from "../data/models/userModel";
import RouteType from "../generators/CommonTypes/RouteType";
import RouterFactory from "../generators/Factories/RouterFactory";

const config: RouteType[] = [
    {
        type:       "GET",
        uri:        "/getOneById/:id",
        middleware: ControllerFactory.create("GET_BY_ID", UserModel),
    },
    {
        type:       "GET",
        uri:        "/getAll",
        middleware: ControllerFactory.create("GET_ALL", UserModel),
    },
    {
        type:       "GET",
        uri:        "/getCount",
        middleware: ControllerFactory.create("GET_COUNT", UserModel),
    },
    {
        type:       "POST",
        uri:        "/postOne",
        middleware: ControllerFactory.create("POST_ONE", UserModel),
    },
    {
        type:       "PATCH",
        uri:        "/updateOneById/:id",
        middleware: ControllerFactory.create("UPDATE_BY_ID", UserModel),
    },
    {
        type:       "DELETE",
        uri:        "/deleteOneById/:id",
        middleware: ControllerFactory.create("DELETE_BY_ID", UserModel),
    },
];

const UserRoutes = RouterFactory.createRoute(config);

export default UserRoutes;
