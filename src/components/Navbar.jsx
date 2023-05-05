import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchBar from "../components/SearchBar";
function Navbar() {
  return (
    <Stack
      direction='row'
      p={2}
      justifyContent='space-between
    '
      alignItems='center'
      position='sticky'
      top='0'
      sx={{ backgroundColor: "hsl(0, 0%, 7%)" }}
    >
      <Link to='/'>
        <img width='100px' src={logo} alt='Youtube logo' />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
