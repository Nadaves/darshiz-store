import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userRedux";
import { Link } from "react-router-dom";
import Fade from "@mui/material/Fade";

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

function MainMenu() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="תפריט">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <MenuIcon
              sx={{ width: 32, height: 32, color: "rgb(46, 51, 51);" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <TextContainer>
            <Typography>מוצרים</Typography>
            <FavoriteIcon />
          </TextContainer>
        </MenuItem>
        <MenuItem>
          <TextContainer>
            <Typography>משלוחים</Typography>
            <ShoppingCartIcon />
          </TextContainer>
        </MenuItem>
        <MenuItem>
          <TextContainer>
            <Typography>מבצעים</Typography>
            <ShoppingCartIcon />
          </TextContainer>
        </MenuItem>
        <MenuItem>
          <TextContainer>
            <Typography>שאלות נפוצות</Typography>
            <ShoppingCartIcon />
          </TextContainer>
        </MenuItem>
        <MenuItem>
          <TextContainer>
            <Typography>צור קשר</Typography>
            <ShoppingCartIcon />
          </TextContainer>
        </MenuItem>
        <Divider />
        {user && (
          <MenuItem onClick={handleLogout}>
            <TextContainer>
              התנתק
              <Logout />
            </TextContainer>
          </MenuItem>
        )}
        {!user && (
          <>
            <Link
              to="/login"
              style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
            >
              <MenuItem>
                <TextContainer>
                  התחברות
                  <PersonIcon />
                </TextContainer>
              </MenuItem>
            </Link>
            <Link
              to="/register"
              style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
            >
              <MenuItem>
                <TextContainer>
                  הרשמה
                  <PersonIcon />
                </TextContainer>
              </MenuItem>
            </Link>
          </>
        )}
      </Menu>
    </React.Fragment>
  );
}

export default MainMenu;
