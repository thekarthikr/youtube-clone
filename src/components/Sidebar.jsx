import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: "transparent",
            outline: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: category.name === selectedCategory && "#282828",
            color: "#f1f1f1",
          }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
