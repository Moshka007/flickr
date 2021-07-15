import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoListItem from './photo-list-item'
import userEvent from "@testing-library/user-event";

const url: string = 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      tags: string[] = ['test', 'small'],
      id: number = 1,
      setF = jest.fn();

describe('Testing <PhotoListItem/>', () => {
    it('PhotoListItem have "bookMark it" (main page)', () => {
        render(<PhotoListItem url={url} tags={tags} id={id} bookMark={false} setBookMarkArray={setF}/>);
        expect(screen.getByText(/bookmark it/i)).toBeInTheDocument();
    })

    it('PhotoListItem have "Remove it" (bookmark page)', () => {
        render(<PhotoListItem url={url} tags={tags} id={id} bookMark={true} setBookMarkArray={setF}/>);
        expect(screen.getByText(/remove it/i)).toBeInTheDocument();
    })

    it('PhotoListItem have some tags', () => {
        render(<PhotoListItem url={url} tags={tags} id={id} bookMark={false} setBookMarkArray={setF}/>);
        expect(screen.getByText(/#test/i)).toBeInTheDocument();
        expect(screen.getByText(/#small/i)).toBeInTheDocument();
    })

    it('PhotoListItem have img', () => {
        render(<PhotoListItem url={url} tags={tags} id={id} bookMark={false} setBookMarkArray={setF}/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })

    it('PholoListItem have rendered correctly', () => {
        const photoListItem = render(<PhotoListItem url={url} tags={tags} id={id} bookMark={false} setBookMarkArray={setF}/>);
        expect(photoListItem).toMatchSnapshot();
    })
})
describe('Tescting onClick buttons', () => {
    it('Testing onClick handler "bookmark it"',() => {
        render(<PhotoListItem url={url} tags={tags} id={id} bookMark={false} setBookMarkArray={setF}/>);
        userEvent.click(screen.getByRole('button'));

        expect(setF).toHaveBeenCalled();
    })

    it('Testing onClick handler "Remove it"',() => {
        render(<PhotoListItem url={url} tags={tags} id={id} bookMark={true} setBookMarkArray={setF}/>);
        userEvent.click(screen.getByRole('button'));

        expect(setF).toHaveBeenCalled();
    })
})
