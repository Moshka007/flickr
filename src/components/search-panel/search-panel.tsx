import React from 'react';
import { Form } from 'react-bootstrap'
import './search-panel.css'

interface SearchPanelProps {
    searchTerm: string,
    setSearchTerm(searchTerm: string): void
}

const SearchPanel: React.FC<SearchPanelProps> = (props) => {
    return (
        <Form.Group className="mt-3">
            <Form.Control 
            value={props.searchTerm}  
            onChange={(e) => props.setSearchTerm(e.target.value)}
            type="text" 
            placeholder="Find images" />
        </Form.Group>
    );
};

export default SearchPanel;