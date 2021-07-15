import React from "react";
import { render, screen } from "@testing-library/react";
import Pages from "./pagination";
import userEvent from "@testing-library/user-event";


let page: number = 1;
function setPage(pageSetValue: number): void {
    page = pageSetValue;
};

describe('Testing <Pages/>', () => {
    it('Pages have rendered correctly', () => {
        const pages = render(<Pages page={page} setPage={setPage}/>);
        expect(pages).toMatchSnapshot();
    });

    it('Pages have buttons: <Forward, Next>', () => {
        render(<Pages page={page} setPage={setPage}/>)
        expect(screen.queryByText(/< back/i)).toBeInTheDocument();
        expect(screen.queryByText(/forward >/i)).toBeInTheDocument();
    })
})

describe('Testing state pages', () => {
    it('onClick "< back" working correctly', () => {
        render(<Pages page={page} setPage={setPage}/>)

        userEvent.click(screen.getByText(/< back/i));
        expect(page).toEqual(1);
    })

    it('onClick "forward >" working correctly', () => {
        render(<Pages page={page} setPage={setPage}/>)

        userEvent.click(screen.getByText(/Next/i));
        expect(page).toEqual(1);
    })

})
