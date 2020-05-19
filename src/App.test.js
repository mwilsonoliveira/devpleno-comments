import React from 'react';
import App from './App';

import { shallow, mount, render } from 'enzyme'

describe('<App />', () => {
  const base = {
    syncState: jest.fn()
  }
  it('Renderiza sem explodir! =)', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.length).toBe(1)
  })
  it('Tem que ter uma classe .container', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })
  it('mostra Comments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it('mostra NewComment', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })
  it('adiciona um novo comentário ao estado quando postNewComment é chamado', () => {
    const wrapper = mount(<App base={base} />)
    wrapper.instance().postNewComment({ comment: 'teste!' })
    wrapper.instance().postNewComment({ comment: 'teste!' })
    wrapper.instance().postNewComment({ comment: 'teste!' })
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
    //expect(wrapper.find('NewComment').length).toBe(1)
  })
  
/*it('Mostra o <App />', () =>{
    const wrapperShallow = shallow(<App />)
    const wrapperMount = mount(<App />)
    const wrapperRender = render(<App />)

    console.log(wrapperShallow.debug())
    console.log(wrapperMount.debug())
    console.log(wrapperRender.html())
    
    
  })*/
})