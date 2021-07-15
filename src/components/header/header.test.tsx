import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe('Testing <Header/>', () => {
    it('Header have rendered correctly', () => {
        const header = render(<Header/>);
        expect(header).toMatchSnapshot();
    });

    it('Header have text "Image Finder"', () => {
        render(<Header/>);
        expect(screen.getByText(/image finder/i)).toBeInTheDocument();
    })

    it('Header have profile image', () => {
        render(<Header/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
})