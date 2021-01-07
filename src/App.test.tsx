import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const findByTestAttr = (component: any, attr:string) => {
  const wrapper = component.find(`[data-test="${attr}"]`)
  return wrapper;
}

describe("App component render", () => {
  
  let container = shallow(<App />)

  it("should render a BrowserRouter", () => {
    expect(findByTestAttr(container, "BrowserRouter").length).toEqual(1)
  })

  it("should render a Navbar Component", () => {
    expect(findByTestAttr(container, "Nav").length).toEqual(1)
  })

  it("should render Switch tag", () => {
    expect(findByTestAttr(container, "Switch").length).toEqual(1)
  })

  it("should render Home Component", () => {
    expect(findByTestAttr(container, "HomePage").length).toEqual(1)
  })
  
  it("should render a Launches Page", () => {
    expect(container.find("LaunchesContainer").length).toEqual(1)
  })
  
  it("should render a Launch Detail Page", () => {
    expect(container.find("LaunchDetailContainer").length).toEqual(1)
  })

})