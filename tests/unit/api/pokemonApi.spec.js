import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {
  it('url axios', async () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      'https://pokeapi.co/api/v2/pokemon'
    )
  })
})
