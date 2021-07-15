import React from 'react';
import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../..';
import PhotoListItem from '../photo-list-item/photo-list-item';
import './photo-list.css'

interface PhotoListProps {
    bookMark: boolean
    setBookMarkArray(arr: {id: number, url_s: string, tags: string[]}[]): void 
}

const PhotoList: React.FC<PhotoListProps> = (props) => {
    const photo = useContext(Context);

    return (
        <Row className="photo-list" style={{overflowY: 'scroll', overflowX: 'hidden'}}>
            { 
                photo.getPhoto.length !== 0 &&
                photo.getPhoto.map(el => {
                    const tagsArr: string[] = el.tags.split(' ', 3);
                    return <PhotoListItem id={el.id} tags={tagsArr} url={el.url_s} bookMark={props.bookMark} setBookMarkArray={props.setBookMarkArray}/>
                }) 
            }
            
        </Row>
    );
};

export default PhotoList;