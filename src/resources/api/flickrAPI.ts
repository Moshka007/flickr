import axios from 'axios';

export const fetchPhoto = async (searchTerm: string, page: number) => {
    const {data} = await axios.get('https://www.flickr.com/services/rest/', {params: {
        method: "flickr.photos.search",
        api_key:"da1cfeaed68e0dfb536fcdd9597bcab9",
        tags: searchTerm,
        extras: "url_s,tags",
        format: "json",
        nojsoncallback: 1,
        per_page: 12,
        page
    }})
    return data
}