import { Request, Response } from "express";

const LoginRouter = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "logged in successfully" });
  } catch (error) {
    console.log(`Error in login controller`);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: `${error}` });
  }
};

export { LoginRouter };
