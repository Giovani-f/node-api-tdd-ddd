export interface HttpGetClient {
  get: (params: HttpGetClient.Params) => Promise<HttpGetClient.Result>
}

export namespace HttpGetClient {
  export type Params = {
    url: string
    params: object
  }

  export type Result = {
    access_token: any
  }
}
