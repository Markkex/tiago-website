import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./Menu.css";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Lato",

              color: "inherit",
              textDecoration: "none",
            }}
          >
            Casas da Vila
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/iguarias-da-vila"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      mr: 2,
                      color: "black",
                      textDecoration: "none",
                    }}
                    color="white"
                  >
                    Iguarias da Vila
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/organic" target="_blank" rel="noopener noreferrer">
                  <Typography
                    textAlign="center"
                    sx={{
                      mr: 2,
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Organic
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/warriors-prophecy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      mr: 2,
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Warrior's Prophecy
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            Casas da Vila
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className="menu-buttons"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/iguarias-da-vila"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iguarias da Vila
              </Link>
            </Button>
            <Button
              className="menu-buttons"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/organic" target="_blank" rel="noopener noreferrer">
                Organic
              </Link>
            </Button>
            <Button
              className="menu-buttons"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/warriors-prophecy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Warrior's prophecy
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button className="reservation-button" onClick={handleOpenUserMenu}>
              <Link
                style={{ color: "white" }}
                to="/bookings"
                rel="noopener noreferrer"
              >
                Reservar
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
