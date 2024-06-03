import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models";
import { createJWTToken } from "../utils/Authentication/jwt";
import { Op } from "sequelize";

const Login = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    const trimmedUserName = userName.trim();
    const isExistingUser = await User.findOne({
      where: { userName: trimmedUserName },
    });

    if (!isExistingUser) {
      res
        .status(404)
        .json({ status: 404, errorMesssage: "User does not exist" });
      return;
    }

    const comparePassword = await bcrypt.compare(
      password,
      isExistingUser.password
    );
    if (!comparePassword) {
      res.status(401).json({ status: 401, errorMessage: "Invalid password" });
      return;
    }

    const data = isExistingUser as any;
    data.password = undefined;
    const generateJwtToken = createJWTToken(userName, password);
    res.status(200).json({
      status: 200,
      message: "logged in successfully",
      data: { data, token: generateJwtToken },
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, errorMessage: `Internal Server Error ${error}` });
  }
};

const Register = async (req: Request, res: Response) => {
  try {
    const { userName, password, name, email, phoneNo } = req.body;

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ userName }, { email }, { phoneNo }],
      },
    });

    if (existingUser) {
      let errorMessage = "";
      if (existingUser.userName === userName) {
        errorMessage = "Username already exists";
      } else if (existingUser.email === email) {
        errorMessage = "Email already exists";
      } else if (existingUser.phoneNo === phoneNo) {
        errorMessage = "Phone number already exists";
      }

      return res.status(409).json({
        status: 409,
        errorMessage,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      email,
      phoneNo,
      password: hashPassword,
      userName,
      name,
    });
    const data = createdUser as any;
    data.password = undefined;
    const generateJwtToken = createJWTToken(userName, password);
    res.status(201).json({
      status: 201,
      message: "Registration Successful",
      data: { data, token: generateJwtToken },
    });
  } catch (error: any) {
    res
      .status(500)
      .json({ status: 500, errorMessage: `Internal Server Error ${error}` });
  }
};

export { Login, Register };
