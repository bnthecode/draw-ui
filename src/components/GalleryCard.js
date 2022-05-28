import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({ image, dispatch }) {
    const navigate = useNavigate();


    const handleClick = (img) => {
        dispatch({ type: 'select-drawing', payload: image.imgUrl })
        navigate(`/draw/${image._id}`)
    }

  return (
    <Card onClick={handleClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={image.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {image.title || 'no title'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {image.description || 'no descrtiptiop'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}