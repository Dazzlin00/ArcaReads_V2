import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';

import {
  Share,
} from "react-native";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
  marginLeft: '0px',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Post({ post, onLike, onDislike }) {
  const [comment, setComment] = useState("");

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Mira este post: ${post.title} - ${post.content}`,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleComment = () => {
    // Aquí puedes agregar la lógica para guardar el comentario en la base de datos o en el estado de la aplicación.
    console.log(comment);
    setComment("");
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar src={post.avatar} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={post.name}
      subheader={post.createdAt}
    />
    <CardMedia
      component="img"
      height="194"
      image={post.image}
      alt=""
    />
    <CardActions disableSpacing >
      <Badge badgeContent={post.likes} color="primary" >
        <FavoriteIcon color="action"/>
      </Badge>

      <Badge sx={{ml: 1.5}} badgeContent={post.commnents} color="secondary">
        <ModeCommentRoundedIcon color="action" />
      </Badge>
    </CardActions>

    <CardContent >
      <Typography sx={{ mb: 0, mt:-3 }}  variant="subtitle2"  display="block" gutterBottom>
       {post.content}
      </Typography>
    </CardContent>

  </Card>


  );
}