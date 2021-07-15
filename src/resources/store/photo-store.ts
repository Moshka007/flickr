import {makeAutoObservable} from 'mobx';

export default class PhotoStore {
    private _photo: {url_s: string, tags: string, id: number}[];
    private _pagesCount: number;

    constructor() {
        this._photo = []
        this._pagesCount = 0
        makeAutoObservable(this);
    }
    
    public set setPagesCount(pagesCount: number) {
        this._pagesCount = pagesCount
    }

    public set setPhoto(photo: {url_s: string, tags: string, id: number}[]) {
        this._photo = photo
    }

    public get getPhoto() {
        return this._photo;
    }

    public get getPagesCount() {
        return this._pagesCount
    }
}