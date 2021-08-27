import getPokemonOptions, {
  getPokemons,
  pokemonName
} from '@/helpers/getPokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'

describe('getPokemonOptions', () => {
  it('debe regresar un arreglo de números', async () => {
    const pokemon = getPokemons()
    expect(pokemon.length).toBe(650)
  })

  it('debe de retornar un arreglo de 4 elemento con nombres de pokemones ', async () => {
    const pokemons0 = await pokemonName([1, 2, 3, 4])
    expect(pokemons0).toStrictEqual(pokemons)
  })

  it('getPokemonOptions debe retornar un arreglo mezclado', async () => {
    const pokemons = await getPokemonOptions()
    expect(pokemons).toStrictEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) }
    ])
  })
})
