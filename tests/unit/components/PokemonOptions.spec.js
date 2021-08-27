import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions', () => {
  it('debe hacer mach con el snapshot', async () => {
    const wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
        toDisable: false
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('debe renderizar correctamente las 4 opciones', async () => {
    const wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
        toDisable: false
      }
    })

    const lis = wrapper.findAll('li')
    lis.map((li, index) => {
      expect(li.text()).toBe(pokemons[index].name)
    })
  })

  it('debe emitir "selector"', async () => {
    const wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
        toDisable: false
      }
    })

    const [li1] = wrapper.findAll('li')

    li1.trigger('click')

    expect(wrapper.emitted('selector')[0]).toStrictEqual([1])
  })
})
