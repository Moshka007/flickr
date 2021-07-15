import React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "./side-bar";
import userEvent from "@testing-library/user-event";


let bookMark: boolean = false;
function setBookMark(bookmarkSetValue: boolean): void {
    bookMark = bookmarkSetValue;
};

describe('Testing <SideBar/>', () => {
    it('SideBar have rendered correctly', () => {
        const footer = render(<SideBar setBookMark={setBookMark} bookMark={bookMark}/>);
        expect(footer).toMatchSnapshot();
    });

    it('SideBar have 2 images', () => {
        render(<SideBar setBookMark={setBookMark} bookMark={bookMark}/>);
        const img = screen.getAllByRole('img');
        expect(img.length).toEqual(2);
    })

    it('First photo have default class "active"', () => {
        render(<SideBar setBookMark={setBookMark} bookMark={bookMark}/>);
        const img = screen.getAllByRole('img');
        expect(img[0]).toHaveClass('active');
    })
})

describe('Testing change state Bookmark', () => {
    it('Testing change state Bookmark true', () => {
        render(<SideBar setBookMark={setBookMark} bookMark={bookMark}/>);
        const img = screen.getAllByRole('img');
        
        userEvent.click(img[1]);
        expect(bookMark).toEqual(true);
    })

    it('Testing change state Bookmark false', () => {
        render(<SideBar setBookMark={setBookMark} bookMark={bookMark}/>);
        const img = screen.getAllByRole('img');
        
        userEvent.click(img[0]);
        expect(bookMark).toEqual(false);
    })
})