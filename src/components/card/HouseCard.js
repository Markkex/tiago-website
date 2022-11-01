import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
export default function HouseCard({
  cardImage,
  cardTitle,
  numberOfPeople,
  tipology,
  cardDescription,
  cardLink,
}) {
  return (
    <Card sx={{ maxWidth: 380 }} style={{ marginTop: "5rem" }}>
      <CardMedia component="img" height="140" image={cardImage} alt="casa um" />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <div style={{ display: "flex" }}>
            <div className="px-4">
              <PeopleIcon style={{ color: "#579C9E" }} />
              <span style={{ marginLeft: "10px" }}>{numberOfPeople}</span>
            </div>
            <div>
              <ZoomInMapIcon style={{ color: "#579C9E" }} />
              <span style={{ marginLeft: "10px" }}>T{tipology}</span>
            </div>
          </div>
        </div>
        <Typography variant="body2" color="text.secondary">
          {cardDescription}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="small" className="button-reservation">
          <Link to={cardLink}>Reservar</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
