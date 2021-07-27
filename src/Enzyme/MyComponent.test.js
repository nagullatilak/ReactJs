import React from 'react';
import Enzyme, { configure,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme';
import {render} from '@testing-library/react'
import MyComponent  from './MyComponent';
Enzyme.configure({adapter : new Adapter()});
describe("MyComponent", () => {
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<MyComponent />);
    })
  test("should render my component", () => {
    //const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('h1').text()).toContain("Hello Tilak")
    // console.log(wrapper.debug())
    // const{getByText} = render(<MyComponent />)
    // const linkElement = getByText("Hello Tilak")
    // expect(linkElement).toBeInTheDocument();
  });
  test('Render a button with text of increment',()=>{
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  })
  test('Render the initial value in div',()=>{
 
    expect(wrapper.find('#counter').text()).toBe('0')
  })
  test('Render the click event button and click event value',()=>{
      wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter').text()).toBe('1')
  })
  test('Renedr the click event button on decrement button',()=>{
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter').text()).toBe('1')
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter').text()).toBe('0')
  })
});