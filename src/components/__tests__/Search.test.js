// import { fireEvent, render ,screen} from "@testing-library/react";
// import MOCKDATA from "../mocks/mockRestListData.json";
// import Body from "../Body";
// import "@testing-library/jest-dom"
// import { BrowserRouter } from "react-router-dom";
// import { act } from "react-dom/test-utils";

// global.fetch = jest.fn(()=> {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(MOCKDATA)
//         },
//     });
// });

// // it("should search res List for Burgr text Input",  )

// it("It should render the Body Component with Search", async () => {
//     await act(async ()=>
//         render(<BrowserRouter><Body/></BrowserRouter> )
//     )

     
     
//     const searchBtn  = screen.getByRole("button",{name:"Search"});
//     const searchInput = screen.getByTestId("searchInput");
//     fireEvent.change(searchInput,{target: {value : "Pizza"}});
//     fireEvent.click(searchBtn);
//     const cards =screen.getAllByTestId("resCard");
//     expect(cards.length).toBe(2);
// })