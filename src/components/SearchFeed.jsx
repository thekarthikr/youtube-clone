import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function SearchFeed() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const [videos, setVidoes] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVidoes(data.items)
    );
  }, [searchTerm]);

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

export default SearchFeed;
