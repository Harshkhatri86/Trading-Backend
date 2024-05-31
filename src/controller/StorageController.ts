import { Request, Response } from "express";
import { Attachments, User } from "../models/index";
import { handleUploadErrorMessage } from "../utils/lib/storage/error";
import { StorageFactory } from "../utils/lib/storage/factory";
import { uploadMiddleWare } from "../utils/lib/storage/multer";

const storageIns = StorageFactory.createStorage();

// Create a new Comment with an optional order
export const uploadSingle = async (req: Request, res: Response): Promise<void> => {1
  uploadMiddleWare.single("uploads")(req , res, async (err: any) => {
    if (err) {
      const error = handleUploadErrorMessage(err);
      console.log( "Error in multer callback", err);
      return res.status(404).json(error);
    }
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const userId = req.headers['user-id'] ;
    
      const findUser = await User.findOne({where : {id : userId}})
      if(!findUser){
        res.status(404).json({message : "User not found"})
        return ; 
      }

      const result = await storageIns.uploadSingle(file);

      const attachment = {
        ...result,
        user_id: userId,
      };

      await Attachments.create(attachment);

      res.status(200).json({
        message: "Uploaded successfully",
        data: attachment,
      });
    } catch (error: any) {
      console.error("upload error:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
