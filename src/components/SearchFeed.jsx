import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${keyword}`).then((data) => {
      return setVideos(data.items);
    });
  }, [keyword]);
  return (
    <Box
      px={2}
      py={{ md: 4, xs: 5 }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h4" fontWeight={"bold"} mb={2}>
        Search Results For: <span style={{ color: "red" }}>{keyword}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
