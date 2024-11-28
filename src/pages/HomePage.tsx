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
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Gif from "../assets/utils/Gif";
import AnimatedButton from "../components/AnimatedButton";

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
          height: { md: "34vh", xs: "33vh", lg: "30vh", xl: "38vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          py: { xl: "0rem", sm: "3rem", xs: "2rem" },
          px: { xs: "1rem", md: "9rem", lg: "15rem" },
          gap: { md: "0", sm: "1.5rem", xs: "1rem" },
        }}
      >
        {/* Primo blocco: Titolo e descrizione */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            width: { xs: "100%", sm: "60%", md: "50%" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="black"
            sx={{ marginBottom: "1rem" }}
          >
            Lorem Ipsum
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", opacity: 0.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            rem cupiditate architecto dolore consectetur voluptatem officiis,
            pariatur vel non, neque, facere eos amet voluptatibus impedit
            laudantium quas. Illo, illum aspernatur?
          </Typography>
        </Box>
        {/* Secondo blocco: Bottone */}
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
            //  marginTop: { xs: "0", md: "0" },
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
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          // justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          height: { xs: "auto", md: "60vh" }, // 50vh
          padding: "2rem",
          gap: { xs: "2rem", md: "3rem" },
        }}
      >
        <Box
          sx={{
            // padding: "0 2rem",
            margin: "2rem 0", // 0
            display: "flex",
            justifyContent: "center",
            width: {
              xl: "35rem",
              lg: "30rem",
              md: "27rem",
              sm: "22rem",
              xs: "19rem",
            },
          }}
        >
          <Gif />
        </Box>
        <Box
          sx={{
            padding: "2rem", //3
            textAlign: { xs: "center", md: "left" }, //
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="h5"
            color="black"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Crea un lorem ipsum
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", marginBottom: "1.5rem", lineHeight: 1.6 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            officiis dolorum sequi eos deserunt tenetur alias. Natus minima,
            consectetur suscipit, repudiandae ducimus
          </Typography>
          <Typography
            variant="h5"
            color="black"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Crea un lorem Ipsum
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", marginBottom: "2rem", lineHeight: 1.6 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            officiis dolorum sequi eos deserunt tenetur alias. Natus minima,
            consectetur suscipit, repudiandae ducimus
          </Typography>
          <AnimatedButton text={"Hover me"} />
        </Box>
      </Box>
    </>
  );
}
