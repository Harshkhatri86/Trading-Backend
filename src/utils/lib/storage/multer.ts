import multer, { MulterError, memoryStorage } from 'multer'
import config, { StorageType } from '../../../common/config'
import { Request } from 'express'
import { findMimeTypeConfig, generateFileName, mb2bytes } from './uploads';

const fileStorage = multer.diskStorage({
    destination : config.storage.disk.localStorageRootFolderPath,
    filename : (req : any , file : Express.Multer.File , callback : any) =>{
        callback(null , generateFileName(file.originalname)); 
    } 
})

const getStorageType = () =>{
    if(config.storage.type === StorageType.Disk){
        return fileStorage ; 
    }
    return memoryStorage(); 
}

export const uploadMiddleWare = multer({
    storage : getStorageType() , 
    limits : {
        files : mb2bytes(config.limitFileCount), 
        fileSize : mb2bytes(config.limitFileSize)
    }, 
    fileFilter : (req : Request , file : Express.Multer.File, callback : any) =>{
        const mimeTypeConfig = findMimeTypeConfig(file.mimetype) ; 
        if(!mimeTypeConfig){
            return callback(new MulterError("LIMIT_UNEXPECTED_FILE") , false) ; 
        }
        return callback(null , mimeTypeConfig)
    }
})