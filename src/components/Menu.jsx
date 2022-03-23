import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QuizIcon from "@mui/icons-material/Quiz";
import CallIcon from "@mui/icons-material/Call";
import CreateIcon from "@mui/icons-material/Create";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userRedux";
import { Link } from "react-router-dom";
import Fade from "@mui/material/Fade";

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const IconContainer = styled.div`
  width: 30%;
  margin-left: 0.5em;
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
        <Link
          to="/products/All"
          style={{ textDecoration: "inherit", color: "black" }}
        >
          <MenuItem>
            <TextContainer>
              <Typography>מוצרים</Typography>
            </TextContainer>
            <IconContainer>
              <LoyaltyIcon />
            </IconContainer>
          </MenuItem>
        </Link>
        <Link
          to="/products/All"
          style={{ textDecoration: "inherit", color: "black" }}
        >
          <MenuItem>
            <TextContainer>
              <Typography>מבצעים</Typography>
            </TextContainer>
            <IconContainer>
              <LocalFireDepartmentIcon />
            </IconContainer>
          </MenuItem>
        </Link>
        <Link
          to="/Shipping"
          style={{ textDecoration: "inherit", color: "black" }}
        >
          <MenuItem>
            <TextContainer>
              <Typography>משלוחים</Typography>
            </TextContainer>
            <IconContainer>
              <LocalShippingIcon />
            </IconContainer>
          </MenuItem>
        </Link>
        <Link to="/FAQ" style={{ textDecoration: "inherit", color: "black" }}>
          <MenuItem>
            <TextContainer>
              <Typography>שאלות נפוצות</Typography>
            </TextContainer>
            <IconContainer>
              <QuizIcon />
            </IconContainer>
          </MenuItem>
        </Link>
        <Link
          to="/Testimonials"
          style={{ textDecoration: "inherit", color: "black" }}
        >
          <MenuItem>
            <TextContainer>
              <Typography>לקוחות מספרים</Typography>
            </TextContainer>
            <IconContainer>
              <CallIcon />
            </IconContainer>
          </MenuItem>
        </Link>
        {/* <Divider />
        {user && (
          <MenuItem onClick={handleLogout}>
            <TextContainer>התנתק</TextContainer>
            <IconContainer>
              <Logout />
            </IconContainer>
          </MenuItem>
        )} */}
        {/* {!user && (
          <>
            <Link
              to="/login"
              style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
            >
              <MenuItem>
                <TextContainer>התחברות</TextContainer>
                <IconContainer>
                  <PersonIcon />
                </IconContainer>
              </MenuItem>
            </Link>
            <Link
              to="/register"
              style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
            >
              <MenuItem>
                <TextContainer>הרשמה</TextContainer>
                <IconContainer>
                  <CreateIcon />
                </IconContainer>
              </MenuItem>
            </Link>
          </>
        )} */}
      </Menu>
    </React.Fragment>
  );
}

export default MainMenu;
