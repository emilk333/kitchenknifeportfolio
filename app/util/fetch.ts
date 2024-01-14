import { IFetchHeaderConfig, IGenericFetchProps } from "./types";

const defaultHeaderConfig = {

	headers: {
		"Content-Type": "application/json" // 'Content-Type': 'application/x-www-form-urlencoded', "application/json",
	}
}

const genericFetch = async <T>(props: IGenericFetchProps): Promise<T> => {
	const { headerConfig, queryParam } = props
	// TODO fix this shit with proper error handling etc.
	let url = `${process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : ''}${props.endpoint}`

	if (headerConfig.method === "DELETE" || headerConfig.method === "GET" && queryParam) {
		url = `${url}/${queryParam}`
	}
	
    const data = await fetch(url, headerConfig as RequestInit)
	const res = await data.json()
	return JSON.parse(res)
}

export { genericFetch, defaultHeaderConfig }