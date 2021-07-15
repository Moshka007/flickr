import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe('Testing <Footer/>', () => {
    it('Footer have rendered correctly', () => {
        const footer = render(<Footer/>);
        expect(footer).toMatchSnapshot();
    });

    it('Footer have text "Copyrights"', () => {
        render(<Footer/>);
        expect(screen.getByText(/copyrigths/i)).toBeInTheDocument();
    })
})