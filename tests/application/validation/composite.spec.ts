import { mock, MockProxy } from 'jest-mock-extended'

interface Validator {
  validade: () => Error | undefined
}

class ValidationComposite {
  constructor (
    private readonly validators: Validator[]
  ) {}

  validate (): undefined {
    return undefined
  }
}
describe('ValidationComposiite', () => {
  let sut: ValidationComposite
  let validator1: MockProxy<Validator>
  let validator2: MockProxy<Validator>
  let validators: Validator[]

  beforeAll(() => {
    validator1 = mock<Validator>()
    validator1.validade.mockReturnValue(undefined)
    validator2 = mock<Validator>()
    validator2.validade.mockReturnValue(undefined)
    validators = [validator1, validator2]
  })
  beforeEach(() => {
    sut = new ValidationComposite(validators)
  })
  it('should return undefined if all Validatorns return undefined', () => {
    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
