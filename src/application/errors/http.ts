export class ServerError extends Error {
  constructor (error?: Error) {
    super('Internal server error. Try again soon')
    this.name = 'ServerError'
    this.stack = error?.stack
  }
}
