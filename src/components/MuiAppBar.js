import React, { useContext } from "react";
import { AppBar, Toolbar, styled, alpha, Box, Typography, InputBase } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { SearchContext } from "../pages/Home";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const MuiAppBar = ({ setSearch, search }) => {
  const searchContext = useContext(SearchContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            WEBINK
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchRoundedIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                searchContext.setValue(e.target.value);
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
