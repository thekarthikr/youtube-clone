import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
} from "./components";
const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "hsl(0, 0%, 7%)" }}>
        <Navbar />

        <Routes>
          <Route path='/' element={<Feed />} />

          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
