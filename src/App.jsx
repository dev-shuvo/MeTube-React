import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/MeTube-React/" exact element={<Feed />} />
          <Route path="/MeTube-React/video/:id" element={<VideoDetail />} />
          <Route path="/MeTube-React/channel/:id" element={<ChannelDetail />} />
          <Route
            path="/MeTube-React/search/:keyword"
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
