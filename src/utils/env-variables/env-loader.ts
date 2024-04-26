import fs from 'node:fs'
import { getCurrentDirname } from '../file-system/file-system.js';
import path from 'node:path';


const getRidOffDoubleQuotes = (value:string) => value.replace(/^"(.*)"$/, "$1");

// Synchronously load .env file variable
export const dotEnv = () => {
    const dirPath = getCurrentDirname(import.meta.url)
    const data:string = fs.readFileSync(path.resolve(dirPath, "env"), {encoding: 'utf-8'});
    data.split('/n').forEach(dataPair => {
        const [key, value] = dataPair.split("=")
        process.env[key] = getRidOffDoubleQuotes(value)
    })

}