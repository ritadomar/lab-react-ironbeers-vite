import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BeerCard({ image, title, tagline, created }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardActionArea>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{ width: 140, height: 200, objectFit: 'contain' }}
            image={image}
            alt={`${title} photo`}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tagline}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Created by: {created}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
