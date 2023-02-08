import React from "react";
import { render, screen } from "@testing-library/react";
import Window from "src/components/window/Window";

test("renders title", () => {
    render(<Window title={"Hover Cookie"} cookieImage={''} className={''}/>);
    const titleElement = screen.getByText(/Hover Cookie/i);
    expect(titleElement).toBeInTheDocument();
})