import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const pages = [
  { name: "Home", link: "#" },
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" },
];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const [visibile, setVisibile] = React.useState(false);
  const prevScrollY = React.useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setVisibile(false);
    } else {
      setVisibile(true);
    }
    prevScrollY.current = currentScrollY;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "none",
        transition: "transform 0.3s ease",
        transform: visibile ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#0070f3",
              textDecoration: "none",
              mr: 2,
              "&:hover": { color: "#0056b3" },
            }}
          >
            MyBrand
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Apri menu"
              onClick={() => toggleDrawer(true)}
              sx={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Drawer (Mobile Menu) */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: "60%", // Larghezza del drawer
                height: "100vh", // Altezza del drawer
                margin: "auto",
                //borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                //textAlign: "center",
                fontWeight: "bold",
                marginBottom: 2,
                color: "#0070f3",
              }}
            >
              Menu
            </Typography>
            <List>
              {pages.map((page, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => toggleDrawer(false)}
                  sx={{
                    justifyContent: "center",
                    //borderRadius: "8px",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  <ListItemText
                    primary={page.name}
                    sx={{
                      //textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: "#000",
                      "&:hover": { color: "#0070f3" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.link}
                sx={{
                  color: "#000",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  mx: 2,
                  position: "relative",
                  "&:hover": {
                    color: "#0070f3",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Contattaci Button */}
          <Button
            href="#contact"
            sx={{
              backgroundColor: "#0070f3",
              color: "#fff",
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
              py: 1,
              borderRadius: "20px",
              boxShadow: "0px 4px 6px rgba(0, 112, 243, 0.3)",
              "&:hover": {
                backgroundColor: "#0056b3",
                boxShadow: "0px 6px 8px rgba(0, 112, 243, 0.5)",
              },
            }}
          >
            Contattaci
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
