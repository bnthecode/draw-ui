import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleryCard from '../components/GalleryCard';

import Grid from '@mui/material/Grid';





const Gallery = ({ dispatch }) => {


    const [gallery, setGallery] = useState([]);

const fetchArtwork = async () => {
    const { data } = await axios.get('http://localhost:8080/api/drawings');
        setGallery(data);
}

    useEffect(() => {
    fetchArtwork()
    }, [])

    return gallery.length > 0 && (<Grid container spacing={8} style={{ padding: 20, overflow: 'scroll'}}>
<div style={{ width: '100%', textAlign: 'center'}}>     <h1 style={{ marginTop: 120}}>Gallery</h1></div>
        
        { gallery.reverse().map(drawing => drawing.imgUrl && (
            <Grid item xs={4}>
           <GalleryCard dispatch={dispatch} image={drawing} />
           </Grid>
        )) }
    </Grid>)
}

export default Gallery