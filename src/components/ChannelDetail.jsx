import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      return setChannelDetail(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        return setVideos(data?.items);
      }
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            backgroundColor: "#e5e5f7",
            opacity: 0.8,
            backgroundImage:
              "linear-gradient(135deg, rgba(255,0,0,1) 25%, transparent 25%), linear-gradient(225deg, rgba(255,0,0,1) 25%, transparent 25%), linear-gradient(45deg, rgba(255,0,0,1) 25%, transparent 25%), linear-gradient(315deg, rgba(255,0,0,1) 25%, #e5e5f7 25%)",
            backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
            height: "300px",
            position: "relative",
            zIndex: "-1",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-96px"} />
      </Box>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
