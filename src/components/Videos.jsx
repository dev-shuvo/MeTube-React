import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      display={{ xs: "block", lg: "flex" }}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
    >
      {videos.map((item, index) => {
        return (
          (item.id.videoId || item.id.channelId) && (
            <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )
        );
      })}
    </Stack>
  );
};

export default Videos;
