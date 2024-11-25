import { Box, Typography, Button } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8')`,
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

        {/* Contenuto */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "#fff",
            padding: "0 10%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Trasforma le tue <br />
            <span style={{ color: "#FFD700" }}>idee</span> in realtà
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
    </>
  );
}
