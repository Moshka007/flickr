import React from 'react';
import { Container, Image } from 'react-bootstrap';
import cloud from '../../resources/assets/cloud.png'
import book from '../../resources/assets/book.png'
import './side-bar.css'

interface SideBarProps {
    setBookMark(bookMark: boolean): void,
    bookMark: boolean
}

const SideBar: React.FC<SideBarProps> = props => {

    function changeBookMarkCloud():void {
        props.setBookMark(false);
    }

    function changeBookMarkBook():void {
        props.setBookMark(true);
    }
    return (
        <Container className="side-bar p-0">
            <Container className="icons-wrapper">
                <Image onClick={changeBookMarkCloud} className={`icon cloud ${props.bookMark || 'active'}`} src={cloud}/>
                <Image onClick={changeBookMarkBook} className={`icon book ${props.bookMark && 'active'}`} src={book}/>
            </Container>
        </Container>
        
    );
};

export default SideBar;