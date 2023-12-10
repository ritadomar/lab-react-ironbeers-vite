import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ image, title, sx }) {
  return (
    <Card sx={sx}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`${title} photo`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dolor doloremque ipsum, enim similique aspernatur accusamus!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
