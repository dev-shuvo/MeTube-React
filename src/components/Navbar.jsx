import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";

const Navbar = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <Link
        to={"/MeTube-React/"}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={logo} alt="logo" width={"180px"} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
