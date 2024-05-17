import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", lg: "350px" },
        boxShadow: "none",
        borderRadius: "0",
        mb: { xs: 2, lg: 0 },
      }}
    >
      <Link to={`/MeTube-React/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", lg: "350px" }, height: "180px" }}
        />
      </Link>
      <CardContent
        sx={{
          background: "#e3e3e3",
          height: "100px",
          width: { xs: "100%", lg: "350px" },
        }}
      >
        <Link to={`/MeTube-React/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/MeTube-React/channel/${snippet?.channelId}`}>
          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            color={"gray"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
