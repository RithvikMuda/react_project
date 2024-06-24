import { render ,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
describe("Contact Page", () => {
    test("Should Load contact us Component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    })
    
    test("Should Load Button Component", () => {
        render(<Contact/>); 
        const Button = screen.getByText("SubMit");
        expect(Button).toBeInTheDocument();
    })
    
    test("Should imput name inside contact Component working", () => {
        render(<Contact/>); 
        const inputName= screen.getByPlaceholderText("Name");
        // expect(inputName).toBeInTheDocument();
    })
    
})
 

