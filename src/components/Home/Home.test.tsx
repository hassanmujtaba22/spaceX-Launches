import React from "react";
import {shallow} from "enzyme";
import Home from "./index"

const findByTestAttr = (component: any, attr:string) => {
    const wrapper = component.find(`[data-test="${attr}"]`)
    return wrapper;
}

describe("Test Home Component", ()=> {
    let container = shallow(<Home/>)
    it("Render Banner Container in Home", () => {
        expect(findByTestAttr(container, "Banner").length).toBe(1)
    })
})