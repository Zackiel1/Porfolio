import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import DevicesIcon from "@mui/icons-material/Devices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import navListLink from "./NavListLink";

const NavListDrawer = ({setOpen}) => {
  return (
    <Box sx={{width: "250px", p: "6px", bgcolor: "primary" }}>
      <nav>
        <List>
          {navListLink.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
