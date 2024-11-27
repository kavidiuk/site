import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import image from "../assets/images/samsung.jpg";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpenMenu(open);
  };

  return (
    <>
      {/* Primo blocco */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          onClick={() => toggleDrawer(true)}
          sx={{
            color: "#fff",
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 2,
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {/* Drawer (Menu) */}
      <Drawer
        anchor="left"
        open={openMenu}
        onClose={() => toggleDrawer(false)}
        sx={{
          width: "100%",
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "100vh",
            backgroundColor: "#fff",
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Menu
          </Typography>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Servizi" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Chi siamo" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contatti" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(
            "https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
          )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Overlay per migliorare contrasto */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)", // Più scuro per migliore leggibilità
          }}
        ></Box>
        {/* Da Rivedere */}
        {/* Contenuto */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "#fff",
            padding: "0 5%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Trasforma le tue <br />
            <span
              style={{ color: "#FFD700" }} // Da cambiare
            >
              idee
            </span>
            in realtà
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              mb: 4,
              opacity: 0.8,
            }}
          >
            Creiamo esperienze digitali uniche e personalizzate per ogni tua
            esigenza.
          </Typography>

          {/* Call-to-Action */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "#000",
              padding: "10px 20px",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#FFC107",
              },
            }}
          >
            Scopri di più
          </Button>
        </Box>
      </Box>
      {/* secondo blocco */}
      <Box
        sx={{
          backgroundColor: "#EDEDED",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          padding: "5%",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: "50%" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="black"
            sx={{ marginBottom: "1rem" }}
          >
            Lorem Ipsum
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", opacity: 0.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Obcaecati rem cupiditate architecto dolore consectetur <br />
            voluptatem officiis, pariatur vel non, neque, facere <br />
            eos amet voluptatibus impedit laudantium quas. Illo, <br />
            illum aspernatur?
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFD700",
            color: "black",
            fontWeight: "bold",
            padding: "10px 25px",
            fontSize: "1rem",
            textTransform: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#FFC107",
              boxShadow: "0px 6px 10px rba(0, 0, 0, 0.2)",
            },
            mt: { xs: "20px", md: 0 }, // margine aggiunto per mobile
          }}
        >
          Scopri di più
        </Button>
      </Box>
      {/* Terzo blocco */}
      <Box
        sx={{
          backgroundColor: "#E8E4E4",
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          height: { xs: "50vh", md: "60vh" },
        }}
      >
        <Box
          sx={{
            padding: "0 2rem",
            margin: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt="Foto video template"
            style={{
              width: "40rem",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
