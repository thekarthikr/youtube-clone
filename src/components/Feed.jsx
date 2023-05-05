import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";

import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Spinner from "./Spinner";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const [videos, setVidoes] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVidoes(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid hsl(0, 0%, 18.92%)",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box
        p={2}
        sx={{
          overflow: "auto",
          height: "90vh",
          flex: 2,
          mr: "5px",
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
