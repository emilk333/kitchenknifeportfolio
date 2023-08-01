import { IFetchHeaderConfig, IGenericFetchProps } from "./types";
import fsPromises from 'fs/promises'
import path from 'path'


const defaultHeaderConfig: IFetchHeaderConfig = {
    mode: "same-origin", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json" // 'Content-Type': 'application/x-www-form-urlencoded', "application/json",
    }
}

const genericFetch = async <T>(props : IGenericFetchProps): Promise<T> => {
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
        console.log("weeeeeee", props.headerConfig)
        const data = await fetch(props.url)
        const res = await data.json()
        return res
    }
}

export { genericFetch, defaultHeaderConfig }