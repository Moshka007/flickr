import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '../..';
import './pagination.css'

interface PagesProps {
    page: number,
    setPage(page: number): void
}

const Pages: React.FC<PagesProps> = (props) => {
    const photo = useContext(Context);

    function paginationPrev(): void {
        if (props.page > 1) {
            props.setPage(props.page - 1)
            document.querySelector('.photo-list')!.scrollTop = 0;
        }
    }

    function paginationNext(): void {
        if (props.page < photo.getPagesCount) {
            props.setPage(props.page + 1)
            document.querySelector('.photo-list')!.scrollTop = 0;
        }
    }

    return (
        <div className="div">
            <Pagination className="ml-auto" style={{fontSize: '0.85rem'}}>
            <Pagination.Prev 
                onClick={paginationPrev}>
                {'<'} Back
            </Pagination.Prev>
            <Pagination.Item>Page {props.page} of {photo.getPagesCount}</Pagination.Item>
            <Pagination.Next onClick={paginationNext}>
                Forward {'>'}
            </Pagination.Next>
        </Pagination>
        </div>
        
    );
};

export default Pages;