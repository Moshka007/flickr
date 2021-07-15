import { render, screen } from "@testing-library/react";
import React from "react";
import PhotoList from "./photo-list";
import { Context } from "../..";

const photo = {
    photo: [{
        id: 1,
        tags: '1 2 3',
        url_s: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }, 
    {
        id: 2,
        tags: '2 3 4',
        url_s: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }],
    get getPhoto(){
        return this.photo;
    }
}

const bookMark: boolean = false,
      setB = jest.fn(),
      customRender = (ui: any, providerProps: any) => {
          return render(
            <Context.Provider value={providerProps}>{ui}</Context.Provider>
          )
      }

describe('Testing <PhotoList/>', () => {
    it('PhotoList have rendered correctly', () => {
        const photoList = render(<PhotoList bookMark={bookMark} setBookMarkArray={setB}/>)
        expect(photoList).toMatchSnapshot();
    })

    it('Testing Photolistitem in photolist component', () => {
        customRender(<PhotoList bookMark={bookMark} setBookMarkArray={setB}/>, photo);
        expect(screen.getByText(/#1 #2 #3/)).toBeInTheDocument();
        expect(screen.getByText(/#2 #3 #4/)).toBeInTheDocument();
    })
})