import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid hsl(0, 0%, 18.82%)",
        borderRadius: 10,
        backgroundColor: "hsl(0, 0%, 7%)",
      }}
    >
      <input
        type='text'
        className='search-bar'
        value={searchTerm}
        placeholder='Search..'
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          backgroundColor: "transparent",
          paddingLeft: "10px",
          fontSize: ".9rem",
          color: "hsla(0, 100%, 100%, 0.88)",
          boxShadow: "inset 0 1px 2px hsla(0, 0%, 0%, 0)",
        }}
      />

      <IconButton>
        <Search
          sx={{
            color: "hsla(0, 100%, 100%, 0.48)",
          }}
        />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
