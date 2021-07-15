import React from "react";
import { render, screen } from "@testing-library/react";
import Bookmark from "./bookmark";


const bookmarkArray: {id: number, url_s: string, tags: string[]}[] = [
    {
        id: 1,
        url_s: '#',
        tags: ['1', '2', '3']
    },
    {
        id: 1,
        url_s: '#',
        tags: ['1', '2', '3']
    }],

    setB = jest.fn();


describe('Testing <Bookmark/>', () => {
    it('Bookmark have rendered correctly', () => {
        const pages = render(<Bookmark bookMark={true} bookmarkArray={bookmarkArray} setBookMarkArray={setB} />);
        expect(pages).toMatchSnapshot();
    });

    it('PhotoListItem render correctly', () => {
        render(<Bookmark bookMark={true} bookmarkArray={bookmarkArray} setBookMarkArray={setB} />);
        expect(screen.getAllByRole('img').length).toEqual(2);
    })
})
