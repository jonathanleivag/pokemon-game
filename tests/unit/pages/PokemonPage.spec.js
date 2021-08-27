import PokemonPage from '@/pages/PokemonPage'
import { shallowMount } from '@vue/test-utils'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage', () => {
  it('Inicio de componente', async () => {
    const wrapper = shallowMount(PokemonPage)
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Cargando....')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('debe llamar a "mixPokemonArray" al montar', async () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      'mixPokemonArray'
    )
    shallowMount(PokemonPage)

    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })

  it('debe hacer mach con el snapshot', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAswer: false,
          message: null,
          toDisable: false
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('debe mestrar "PokemonPictureVue" y "PokemonOptionsVue" con sus atributos', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAswer: false,
          message: null,
          toDisable: false
        }
      }
    })

    const picture = wrapper.find('pokemon-picture-vue-stub')
    expect(picture.exists()).toBe(true)
    expect(picture.attributes('pokemonid')).toBe(pokemons[0].id.toString())
    expect(picture.attributes('showpokemon')).toBe('false')

    const options = wrapper.find('pokemon-options-vue-stub')
    expect(options.exists()).toBe(true)
    expect(options.attributes('todisable')).toBe('false')
    expect(options.attributes('pokemons')).toBeTruthy()
    expect(options.attributes('pokemons')).toStrictEqual(expect.any(String))
  })

  it('checkAnswer', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAswer: false,
          message: null,
          toDisable: false
        }
      }
    })

    await wrapper.vm.checkAnswer(1)

    expect(wrapper.vm.showPokemon).toBe(true)
    expect(wrapper.vm.showAswer).toBe(true)
    expect(wrapper.vm.toDisable).toBe(true)
    expect(1).toBe(wrapper.vm.pokemon.id)
    expect(wrapper.vm.message).toBe(`Correcto, es ${wrapper.vm.pokemon.name}`)

    await wrapper.vm.checkAnswer(2)
    expect(2).not.toBe(wrapper.vm.pokemon.id)
    expect(wrapper.vm.message).toBe(`Oops, era ${wrapper.vm.pokemon.name}`)

    const wrapper0 = shallowMount(PokemonPage, {
      data () {
        return {
          pokemons,
          pokemon: pokemons[1],
          showPokemon: false,
          showAswer: false,
          message: null,
          toDisable: false
        }
      }
    })

    await wrapper0.vm.checkAnswer(2)
    expect(2).toBe(wrapper0.vm.pokemon.id)
  })

  it('boton siguiente', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemons,
          pokemon: pokemons[0],
          showPokemon: true,
          showAswer: true,
          message: '',
          toDisable: true
        }
      }
    })

    wrapper.vm.checkAnswer(1)

    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      'mixPokemonArray'
    )

    await wrapper.find('button').trigger('click')

    expect(wrapper.vm.showPokemon).toBe(false)
    expect(wrapper.vm.showAswer).toBe(false)
    expect(wrapper.vm.toDisable).toBe(false)
    expect(wrapper.vm.pokemons).toStrictEqual([])
    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })
})
