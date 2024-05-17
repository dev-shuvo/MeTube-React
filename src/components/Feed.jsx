import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      return setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", lg: "92vh" },
          borderRight: "1px solid #e3e3e3",
          p: { sx: 0, md: 3 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5 }}>
          &copy; 2024 M. D. H. Shuvo
        </Typography>
      </Box>
      <Box
        p={5}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          scrollbarWidth: "none",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"} mb={2}>
          {selectedCategory} <span style={{ color: "red" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
