import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box, border, textAlign } from "@mui/system";

const SkillsCard = (props) => {
  return (
    <Card sx={{ p: "5px", boxShadow: "none" }}>
      <CardMedia
        component="img"
        image={props.img}
        alt={props.title}
        height="70px"
        width="100px"
      />

      <Typography align="center">{props.title}</Typography>
    </Card>
  );
};

export default SkillsCard;
