import { Request, Response } from "express";
import asyncHandler from "../../helper/asyncHandler";
import Authorization from "../../middleware/Authorization";
import BuildResponse from "../../modules/Response/BuildResponse";
import routes from "../../routes/public";
import UserService from "./service";


routes.get(
  "/user/:id",
  Authorization,
  asyncHandler(async function getOne(req: Request, res: Response) {
    const { id } = req.params;

    const data = await UserService.getOne(id);
    const buildResponse = BuildResponse.get(data);

    return res.status(200).json(buildResponse);
  })
);

// /forget/:email
routes.get(
  "/auth/forget/:email",
  asyncHandler(async function forgetPsssword(req: Request, res: Response) {
    const email = req.params.email;
    const data = await UserService.sendFrogetPasswordToken(email);
    return res.json(data);
  })
);



