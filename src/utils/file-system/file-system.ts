import path from "path";
import { fileURLToPath } from "url";

export const getCurrentFilename: (moduleUrl: string) => string = 
    (modulerUrl:string) => fileURLToPath(modulerUrl);

export const getCurrentDirname: (moduleUrl: string) => string = 
    (modulerUrl:string) => path.dirname(getCurrentFilename(modulerUrl))