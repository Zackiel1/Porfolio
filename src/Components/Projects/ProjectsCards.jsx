import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProjectsCards = (props) => {
  return (
    <Card sx={{maxWidth: "300px"}}>
      <CardMedia
        component="img"
        alt={props.title}
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam
          consequuntur voluptate delectus molestiae quasi totam commodi eos in
          eveniet ea maxime unde quaerat placeat id libero quibusdam, accusamus
          nulla?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">GitHub</Button>
        <Button size="small">Page</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectsCards;
