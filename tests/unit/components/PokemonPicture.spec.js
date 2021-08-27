import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture.vue'

describe('PokemonPicture', () => {
  it('debe hacer mach con el snapshot', async () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('debe mostrar la imagen oculta y el pokemon 100', async () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    })

    const [img1, img2] = wrapper.findAll('img')
    expect(img1.exists()).toBe(true)
    expect(img1.classes('hidden-pokemon')).toBe(true)
    expect(img2).toBe(undefined)
    expect(img1.attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
    )
  })

  it('debe mostrar el pokemon si showPokemon: true', async () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    })

    const [img1, img2] = wrapper.findAll('img')
    expect(img1.exists()).toBe(true)
    expect(img1.classes('hidden-pokemon')).toBe(true)
    expect(img2).toBe(undefined)
  })
})
