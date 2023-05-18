import { GenericFetchProps } from "./types";
import fsPromises from 'fs/promises'
import path from 'path'



const genericFetch = async <T>(props : GenericFetchProps): Promise<T> => {
    if (props.isMock) {
        const filePath = path.join(process.cwd(), `${props.endpoint}data.json`)
        const jsonData = await fsPromises.readFile(filePath)
        if (jsonData !== null) {
            const objectData = JSON.parse(jsonData.toString())
            return objectData
        } else {
            throw new Error
        }
    } else {
        // TODO fix this shit with proper error handling etc.
        // Consider making an endpoint to both knives and stones 
        const data = await fetch(props.url)
        const res = await data.json()
        return res
    }
}

export { genericFetch }