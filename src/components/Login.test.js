import Login from "./Login";
import {fireEvent, render, screen} from "@testing-library/react";

test("username input should be rendered", ()=> {
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i);
        expect(userInput).toBeInTheDocument()
})
test("password input should be rendered", ()=> {
    render(<Login/>)
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument()
})
test("button input should be rendered", ()=> {
    render(<Login/>)
    const buttonInput = screen.getByRole("button")
    expect(buttonInput).toBeInTheDocument()
})

test("username input should be empty", ()=> {
    render(<Login/>)
    const userInput= screen.getByPlaceholderText(/username/i)
    expect(userInput.value).toBe("")
})

test("button should be disabled", ()=> {
    render(<Login/>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
})

test("error message should not be visible", ()=> {
    render(<Login/>)
    const error = screen.getByTestId("error")
    expect(error).not.toBeVisible()
})

test("username input should change", ()=> {
    render(<Login/>)
    const username = screen.getByPlaceholderText(/username/i)
    const testValue = "test"
    fireEvent.change(username, {target:{value:testValue}})
    expect(username.value).toBe(testValue)
})

test("password input should change", ()=> {
    render(<Login/>)
    const password = screen.getByPlaceholderText(/password/i)
    const testValue = "test"
    fireEvent.change(password, {target:{value:testValue}})
    expect(password.value).toBe(testValue)
})

test("button should not be disabled when input exists", ()=> {
    render(<Login/>)
    const button = screen.getByRole("button")
    const password = screen.getByPlaceholderText(/password/i)
    const username = screen.getByPlaceholderText(/username/i)
    const testValue = "test"
    fireEvent.change(username, {target:{value:testValue}})
    fireEvent.change(password, {target:{value:testValue}})
    expect(button).not.toBeDisabled()
})



