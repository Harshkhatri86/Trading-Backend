import path from "path";
import {v4 as uuidv4} from 'uuid' ;
import { AVAILABLE_ATTACHMENT_MIMES } from "./interface";

export function generateFileName(fileName : string , width? : number){
    const sufixName = uuidv4() ;
    const {name , ext } = path.parse(fileName) ; 
    if(width){
        return `${name}_${sufixName}_${width}${ext}`
    } 
    return `${name}_${sufixName}_${width}`
}

export function findMimeTypeConfig(mimeType: string) {
    for (const [key, value] of Object.entries(AVAILABLE_ATTACHMENT_MIMES)) {
      if (value.mineType.includes(mimeType)) {
        return { [key]: value };
      }
    }
    return null;
  }
  

export function mb2bytes(mb : number){
    return mb * 1024 * 1024 ; 
}