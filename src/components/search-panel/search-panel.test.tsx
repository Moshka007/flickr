import React from "react";
import { render, screen } from "@testing-library/react";
import SearchPanel from "./search-panel";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();
const  val = 'test';
describe('Testing <SearchPanel/>', () => {
    it('SearchPanel have rendered correctly', () => {
        const searchPanel = render(<SearchPanel setSearchTerm={onChange} searchTerm={val}/>);
        expect(searchPanel).toMatchSnapshot();
    });

    it('SearchPanel have placeholder "find images"', () => {
        render(<SearchPanel setSearchTerm={onChange} searchTerm={val}/>);
        expect(screen.getByPlaceholderText(/find images/i)).toBeInTheDocument();
    })

    it('Onchange works', () => {
         render(<SearchPanel setSearchTerm={onChange} searchTerm={val}/>);
        userEvent.type(screen.getByRole('textbox'), 'test');

        expect(onChange).toHaveBeenCalledTimes(4);
    })
})