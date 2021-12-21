import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import Logo from "../../assets/NoBG.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DenseAppBar() {
  const LinksContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    font-size: 15px;
  `;
  const IconsContainer = styled.div``;
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 3, zIndex: 0 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "White",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "right",
        }}
      >
        <Toolbar variant="dense">
          <img src={Logo} alt="Darshiz-baby" style={{ maxHeight: "100px" }} />
        </Toolbar>
        <LinksContainer>
          <Link to="/products" style={{ textDecoration: "inherit" }}>
            <Toolbar>
              <MenuItem>
                <Typography sx={{ color: "black", fontSize: "25px" }}>
                  מוצרים
                </Typography>
              </MenuItem>
            </Toolbar>
          </Link>{" "}
          <Link to="/products" style={{ textDecoration: "inherit" }}>
            <Toolbar>
              <MenuItem>
                <Typography sx={{ color: "black", fontSize: "25px" }}>
                  משלוחים
                </Typography>
              </MenuItem>
            </Toolbar>
          </Link>
          <Link to="/products" style={{ textDecoration: "inherit" }}>
            <Toolbar>
              <MenuItem>
                <Typography sx={{ color: "black", fontSize: "25px" }}>
                  מבצעים
                </Typography>
              </MenuItem>
            </Toolbar>
          </Link>
          <Link to="/products" style={{ textDecoration: "inherit" }}>
            <Toolbar>
              <MenuItem>
                <Typography sx={{ color: "black", fontSize: "25px" }}>
                  תנאי שימוש
                </Typography>
              </MenuItem>
            </Toolbar>
          </Link>
          <Link to="/products" style={{ textDecoration: "inherit" }}>
            <Toolbar>
              <MenuItem>
                <Typography sx={{ color: "black", fontSize: "25px" }}>
                  עלינו
                </Typography>
              </MenuItem>
            </Toolbar>
          </Link>
        </LinksContainer>
        <IconsContainer></IconsContainer>
      </AppBar>
    </Box>
  );
}
