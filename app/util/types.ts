

export interface IFetchHeaderConfig {
    method?: string, // *GET, POST, PUT, DELETE, etc.
    mode: string, // no-cors, *cors, same-origin
    cache: string, // *default, no-cache, reload, force-cache, only-if-cached
    credentials: string, // include, *same-origin, omit
    headers: {
      "Content-Type": string,
      // 'Content-Type': 'application/x-www-form-urlencoded', "application/json",
    },
    body?: any //TODO fix this 
}

export interface IGenericFetchProps {
    isMock : boolean,
    url : string,
    endpoint : string,
    headerConfig: IFetchHeaderConfig,
    
}


