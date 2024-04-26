import path from "path"
import fs from 'node:fs/promises'
import { getCurrentDirname } from "../file-system/file-system.js"
import { Enoent } from "../errors/errors.js"

const CURRENT_MODULE_URL = import.meta.url
const CURRENT_DIRECTORY_PATH = getCurrentDirname(CURRENT_MODULE_URL)

export const getWebPageContent: (fileName:string) => Promise<string> = (fileName:string) => {
    try{
        const absoluteFilePath = path.join(CURRENT_DIRECTORY_PATH, "../../pages", fileName)
        return fs.readFile(absoluteFilePath, {encoding: 'utf-8'})
    }catch(error){
        throw new Enoent()
    }
}

