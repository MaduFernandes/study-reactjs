import React from "react";

//imports material-ui
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Study ReactJS</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
