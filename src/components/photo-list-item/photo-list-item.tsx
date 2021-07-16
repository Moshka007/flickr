import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

interface PhotoListItemProps {
    bookMark: boolean,
    url: string,
    tags: string[],
    id: number,
    setBookMarkArray(arr: { id: number, url_s: string, tags: string[] }[]): void
}

const PhotoListItem: React.FC<PhotoListItemProps> = (props) => {
    
    function clickAddHandler(id: number, url_s: string, tags: string[]): void {
        let bookmarkArray: { id: number, url_s: string, tags: string[] }[] = JSON.parse(localStorage.getItem('bookmark') || '[]');
        const index: number = bookmarkArray.findIndex((el) => el.id === id);
        if (index === -1) {
            bookmarkArray.push({ id, url_s, tags });
            localStorage.setItem('bookmark', JSON.stringify(bookmarkArray));
            props.setBookMarkArray(JSON.parse(localStorage.getItem('bookmark') || '[]'))
        }
    }

    function clickRemoveHandler(id: number): void {
        let bookmarkArray: { id: number, url_s: string, tags: string[] }[] = JSON.parse(localStorage.getItem('bookmark') || '[]');
        const index: number = bookmarkArray.findIndex((el) => el.id === id);
        bookmarkArray.splice(index, 1);
        localStorage.setItem('bookmark', JSON.stringify(bookmarkArray));
        props.setBookMarkArray(JSON.parse(localStorage.getItem('bookmark') || '[]'))
    }

    return (
        <Col key={props.id} md={4} className="pt-5">
            <Card style={{height: '100%'}}>
                <div style={{height: 'calc(100% - 6.5em)'}}>
                <Card.Img style={{height: '100%', width: '100%', padding: '1em', paddingTop: '1.5em', paddingBottom: '0px', objectFit: 'cover' }} variant="top" src={props.url} />
                </div>
                
                <Card.Body>
                    {
                        props.bookMark ?
                            <Button
                                variant="light"
                                style={{ cursor: 'pointer', border: '1px solid black', opacity: 0.7 }}
                                onClick={() => clickRemoveHandler(props.id)}

                            >
                                Remove it
                            </Button>
                            :
                            <Button
                                variant="light"
                                style={{ cursor: 'pointer', border: '1px solid black', opacity: 0.7 }}
                                onClick={() => clickAddHandler(props.id, props.url, props.tags)}
                            >
                                Bookmark it!
                            </Button>
                    }


                    {
                        props.bookMark ||
                        <Card.Text className="mt-2 p-1 pl-2" style={{ border: '1px solid black', opacity: 0.7, borderRadius: '5px' }}>
                            {props.tags.map(tag => `#${tag} `)}
                        </Card.Text>
                    }

                </Card.Body>
            </Card>
        </Col>
    );
};

export default PhotoListItem;