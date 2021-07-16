import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../components/side-bar/side-bar';
import { Col } from 'react-bootstrap';
import SearchPanel from '../../components/search-panel/search-panel';
import Pages from '../../components/pagination/pagination';
import PhotoList from '../../components/photo-list/photo-list';
import { fetchPhoto } from '../../resources/api/flickrAPI';
import { useContext } from 'react';
import { Context } from '../..';
import { useEffect } from 'react';
import useDebounce from '../../resources/hooks/debouncing';
import './main.css'
import { observer } from 'mobx-react-lite';
import Bookmark from '../bookmark/bookmark';

const Main: React.FC = observer(() => {
    const photo = useContext(Context);
    const [bookMarkArr, setBookMarkArr] = useState<{ id: number, url_s: string, tags: string[] }[]>(JSON.parse(localStorage.getItem('bookmark')|| '[]'));
    const [bookMark, setBookMark] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isSearching, setIssSearching] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const debounchSearchTerm = useDebounce(searchTerm, 500);

    
    useEffect(() => {
        if (debounchSearchTerm) {
            setIssSearching(true);

            fetchPhoto(searchTerm, page).then(data => {
                setIssSearching(false);
                photo.setPagesCount = data.photos.pages;
                photo.setPhoto = data.photos.photo;
                setPage(1);
            });
        }
    },
        [debounchSearchTerm]
    );

    useEffect(() => {
        if (searchTerm) {
            fetchPhoto(searchTerm, page).then(data => {
                photo.setPagesCount = data.photos.pages;
                photo.setPhoto = data.photos.photo;
                console.log(photo.getPhoto)
            });
        }

    }, [page])

    return (
        <div className="content">
            <Col className="side-bar-col p-0">
                <SideBar bookMark={bookMark} setBookMark={setBookMark} />
            </Col>
            <Col className="content-col p-0">
                {bookMark || <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}

                {bookMark ?
                    <Bookmark bookMark={bookMark} bookmarkArray={bookMarkArr} setBookMarkArray={setBookMarkArr}/>
                    :
                    isSearching ?
                        <div>Searching...</div>
                        :
                        photo.getPhoto.length !== 0 ?
                            <>
                                <Pages page={page} setPage={setPage} />
                                <PhotoList bookMark={bookMark}  setBookMarkArray={setBookMarkArr}/>
                            </>
                            :
                            <div className="not-found-text">
                                No images here. Would you to try search for anything else?
                            </div>
                }

            </Col>
        </div>

    );
});

export default Main;