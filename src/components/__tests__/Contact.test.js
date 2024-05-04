import {render, screen} from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load the contact us  component", ()=>{
    
    render(<ContactUs />);   //It's written in JSX

    const heading =screen.getByRole("heading");

    expect(heading).toBeInTheDocument();


});



//Testiing - For button
test("Should load button inside  contact us  component", ()=>{
    
    render(<ContactUs />);   //It's written in JSX


    //Querying
    const button =screen.getByRole("button");

     //Assertion
    expect(button).toBeInTheDocument();


});


//Testiing - For Inputs
test("Should Know Inputs inside contact us  component", ()=>{
    
    render(<ContactUs />);   //It's written in JSX

     //Querying
    const inputBoxes = screen.getAllByRole("textbox");
           
     //console.log(inputBoxes.length);

     //Assertion
    expect(inputBoxes.length).toBe(4);


});


