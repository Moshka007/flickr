import React from 'react';
import { Row } from 'react-bootstrap';
import PhotoListItem from '../../components/photo-list-item/photo-list-item';

interface BookmarkProps {
    bookMark: boolean
    bookmarkArray: {id: number, url_s: string, tags: string[]}[]
    setBookMarkArray(arr: {id: number, url_s: string, tags: string[]}[]): void
    
}
const Bookmark: React.FC<BookmarkProps> = (props) => {
    
    return (
        <Row className="photo-list" style={{overflowY: 'scroll', overflowX: 'hidden', height: 'calc(100vh - 8em)', marginTop: '1em'}}>
            { 
                props.bookmarkArray.length !== 0 &&
                props.bookmarkArray.map(el => {
                    return <PhotoListItem id={el.id} tags={el.tags} url={el.url_s} bookMark={props.bookMark} setBookMarkArray={props.setBookMarkArray}/>
                }) 
            }
            
        </Row>
    );
};

export default Bookmark ;