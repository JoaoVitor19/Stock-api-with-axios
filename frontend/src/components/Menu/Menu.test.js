import "jest-dom/extend-expect";
import React from "react";
import ReactDOM from "react-dom";

it("renderizar sem crashar",() => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
})

it("renderizar o botão corretamente",() => {
    const {getByTestId} = render(<Button label="aperte aqui"></Button>)
    expect(getByTestId('button')).toHaveTextContent("aperte aqui")
})