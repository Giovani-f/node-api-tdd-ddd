export interface LoadFacebookUse {
  loadUser: (token: LoadFacebookUse.Input) => Promise<LoadFacebookUse.Output>
}

export namespace LoadFacebookUse {
  export type Input = {
    token: string
  }

  export type Output = undefined | {
    name: string
    email: string
    facebookId: string
  }
}
