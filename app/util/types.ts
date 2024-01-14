

export interface IFetchHeaderConfig {
    method?: string, // *GET, POST, PUT, DELETE, etc.
    cache?: string,
    headers: {
      "Content-Type": string, // 'application/x-www-form-urlencoded', "application/json",
    },
    body?: any //TODO fix this crap
}

export interface IGenericFetchProps {
    endpoint : string,
    queryParam?: string,
    headerConfig: IFetchHeaderConfig,
}


