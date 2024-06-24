import { fireEvent, render , screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("Should load Header com ponent",()=> {
    render(
        <BrowserRouter> 
             <Provider store={appStore} >
            <Header/>
            </Provider>
    </BrowserRouter>
     )

     const loginButton = screen.getByRole("button", {name:"Login"});
     expect(loginButton).toBeInTheDocument();
});

test("Should load Coart item By zero",()=> {
    render(
    <BrowserRouter> 
             <Provider store={appStore} >
            <Header/>
            </Provider>
    </BrowserRouter>
     )

     const cartItems = screen.getByText(/cart/);
     expect(cartItems).toBeInTheDocument();
})

test("Should change loin to logout",()=> {
    render(
    <BrowserRouter> 
             <Provider store={appStore} >
            <Header/>
            </Provider>
    </BrowserRouter>
     )

      const loginButton = screen.getByRole("button", {name: "Login"});
      fireEvent.click(loginButton);
      const logoutButton = screen.getByRole("button", {name:"Logout"});
    //   expect(logoutButton).toBeInTheDocument();
      

})