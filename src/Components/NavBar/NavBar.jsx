import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import navListLink from "./NavListLink";
import { Box } from "@mui/system";

const NavBar = ({onContactClick, onLandingClick, onSkillsClick, onProjectsClick}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "26px",
              flexGrow: 1,
              ml: "40px",
            }}
          >
            Alejo.Dev
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" }, m: "auto" }}>
            
              <Button color="inherit" key="Inicio" onClick={onLandingClick}>
                Inicio
              </Button>

              <Button color="inherit" key="acerca de mi" onClick={onSkillsClick}>
                Acerca de mi
              </Button>

              <Button color="inherit" key="Projectos" onClick={onProjectsClick}>
                Projectos
              </Button>

              <Button color="inherit" key="Contact0" onClick={onContactClick}>
                Contacto
              </Button>
            
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default NavBar;
