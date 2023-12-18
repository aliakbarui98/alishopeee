import routes from "../../routes/public";
import asyncHandler from "../../helper/asyncHandler";
import AuthService from "./service";
import BuildResponse from "../../modules/Response/BuildResponse";
import { Request, Response } from "express";

require("dotenv").config;

// sign-up
routes.post(
  "/auth/sign-up",
  asyncHandler(async function signUp(req: Request, res: Response) {
    const formData = req.body;
    const data = await AuthService.signUp(formData);
    const buildResponse = BuildResponse.get(data);

    return res.status(201).json(buildResponse);
  })
);
// sign-in
routes.post(
  "/auth/sign-in",
  asyncHandler(async function signIn(req: Request, res: Response) {
    const formData = req.body;
    // if (formData.email && !formData.email) formData.email = formData.email;
    const result = await AuthService.signIn(req, formData);
    // if (formData.email === 'googleuser') {
    // } else {
    // }
    // let data;
    // data = await AuthService.signInWithGoogle(req, formData);
    // const buildResponse = BuildResponse.get(data);

    // return res
    //   .cookie('token', data.access_token, {
    //     maxAge: Number(data.expiresIn) * 1000, // 7 Days
    //     httpOnly: true,
    //     path: '/v1',
    //     secure: process.env.NODE_ENV === 'production',
    //   })
    // .json(buildResponse)
   return res.status(200).json(result);
  })
);


routes.post(
  '/auth/forget-confirm',
  asyncHandler(async function forgetPasswordCodeConfirmation(req: Request, res: Response) {
    const formData = req.body
    const result = await AuthService.confirmForgetPasswordToken(formData)
    return res.json(result)
  })
)

