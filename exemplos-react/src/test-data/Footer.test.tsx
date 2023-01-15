import { render } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer", ()=>{

    it("should match snapshot", ()=>{

         jest.useFakeTimers()
         jest.setSystemTime(new Date("2022/04/24"))

        const {container} = render(<Footer/>)

        expect(container).toMatchSnapshot()

         jest.useRealTimers()
    })
})