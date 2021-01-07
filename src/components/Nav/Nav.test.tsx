import React from "react";
import { shallow } from "enzyme";
import Nav from "./index"

const findByTestAttr = (component: any, attr: string) => {
    const wrapper = component.find(`[data-test="${attr}"]`)
    return wrapper;
}

describe("Test Nav Bar Component", () => {
    let container = shallow(<Nav />)
    it("Render Nav Container", () => {
        expect(container.find("nav").length).toBe(1)
    })
    it("Render Logo", () => {
        expect(findByTestAttr(container, "logo").length).toEqual(1)
    })
    it("Render Navbar Links", () => {
        expect(container.find("NavLink").length).toBe(4)
    })
    it("Render Search Box", () => {
        expect(container.find(".search").length).toBe(1)
    })
})