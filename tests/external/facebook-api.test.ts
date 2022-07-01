import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: FacebookApi

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
  })

  it('should return a Facebook User if token is valid', async () => {
    const fbUser = await sut.loadUser({ token: 'EAAKRG5oXz6kBAHjrqXD7xCBVGpXZAg9ijwBJ6SlTPJgMn04KUAgI8ioEfU14wHTWVs20m1BAT3vYF8ev1K2fJv2YbFbYbZA6CNSwU84BPDj1yUKAv6f0xQjBZBKrEpCFt7LGSbHsTbKPqZANZBuifJTAN0BtVsJTQ0lMPNyIu4W10yVZAxin2KLO4xUoGFvbrClGOnhMRVazSi7JsyScsJ' })

    expect(fbUser).toEqual({
      facebookId: '100954482684294',
      email: 'mango_pfiylou_curso@tfbnw.net',
      name: 'Mango Curso'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
