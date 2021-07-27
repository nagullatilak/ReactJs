import React from 'react' 
import ReactDom  from 'react-dom'
import Button from '../button'
import { render,cleanup } from '@testing-library/react'
import "@testing-library/jest-dom";

afterEach(cleanup)
describe('Button Component',()=>{
it('renders with out crashing',()=>{
    const div = document.createElement("div")
    ReactDom.render(<Button></Button>,div)
})
it("renders button correctly",()=>{
    const {getByTestId} = render(<Button label = "Click me please"></Button>)
     expect(getByTestId('button')).toHaveTextContent("Click me please")

})
it("renders button Incorrectly",()=>{
    const {getByTestId} = render(<Button label = "Save"></Button>)
     expect(getByTestId('button')).toHaveTextContent("Save")
})
})