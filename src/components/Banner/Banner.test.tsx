import React from "react";
import {shallow} from "enzyme";
import Banner from "./index"

const findByTestAttr = (component: any, attr:string) => {
    const wrapper = component.find(`[data-test="${attr}"]`)
    return wrapper;
}

describe("Test banner Component", ()=> {
    let container = shallow(<Banner/>)
    it("Render Banner Container", () => {
        expect(findByTestAttr(container, "container").length).toBe(1)
    })
    it("Render Banner Sections", () => {
        expect(findByTestAttr(container, "sections").length).toBeGreaterThanOrEqual(1)
    })
    it("Render Banner Btn", () => {
        expect(container.find(".bannerBTN").simulate("click"))
    })
    it("Render Banner Social Links", () => {
        expect(container.find(`[data-test="socialLinks"]`).length).toBe(3)
    })
    it("Render Banner Sections", () => {
        expect(findByTestAttr(container, "astronaut").length).toEqual(1)
    })
})