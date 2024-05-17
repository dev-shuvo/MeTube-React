import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        scrollbarWidth: "none",
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            onClick={() => {
              return setSelectedCategory(category.name);
            }}
            style={{
              background: category.name === selectedCategory && "red",
              color: category.name === selectedCategory && "white",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
