export class AuthenticationError extends Error {
  constructor () {
    super('Authenticaiton failed')
    this.name = 'AuthenticaionError'
  }
}
