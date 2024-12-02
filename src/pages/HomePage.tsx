import { Box, Typography, Button } from "@mui/material";
import Gif from "../assets/utils/Gif";
import AnimatedButton from "../components/AnimatedButton";

const HomePage = () => (
  <>
    {/* Primo blocco - Hero Section */}
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay scuro
        }}
      />
      {/* Contenuto del blocco */}
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
            style={{
              color: "#FFD700", // Cambia il colore se necessario
            }}
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
          Sei alla ricerca di un partner per trasformare le tue idee in
          soluzioni digitali all'avanguardia? offriamo servizi di sviluppo web
          personalizzati, ideali, per portare la tua attività online e farla
          crescere. `
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
          onClick={() => {
            window.scrollTo({
              top: 700,
              behavior: "smooth",
            });
          }}
        >
          Scopri di più
        </Button>
      </Box>
    </Box>

    {/* Secondo blocco - Sezione descrittiva */}
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
      {/* Contenuto: Titolo e descrizione */}
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
          Soluzioni su misura
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", opacity: 0.8 }}>
          Con anni di esperienza nello sviluppo di applicazioni web, offriamo
          soluzioni su misura per migliorare la tua esperienza digitale. Dai
          siti web interattivi alle piattaforme gestionali, il nostro obiettivo
          è creare esperienze intuitive e di impatto.
        </Typography>
      </Box>

      {/* Bottone con call-to-action */}
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
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        Scopri di più
      </Button>
    </Box>

    {/* Terzo blocco - Sezione GIF e descrizione */}
    <Box
      sx={{
        backgroundColor: "#E8E4E4",
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        height: { xs: "auto", md: "60vh" },
        padding: "2rem",
        gap: { xs: "2rem", md: "3rem" },
      }}
    >
      <Box
        sx={{
          margin: "2rem 0",
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
          padding: "2rem",
          textAlign: { xs: "center", md: "left" },
          maxWidth: "500px",
        }}
      >
        <Typography variant="h5" color="black" fontWeight="bold" sx={{ mb: 2 }}>
          innovazione su musura
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "gray", marginBottom: "1.5rem", lineHeight: 1.6 }}
        >
          Grazie alla nostra competenza in tecnologie moderne, garantiamo
          prodotti affidabili, scalabili e dal design curato, Qualunque sia la
          tua esigenza - un sito web, un'applicazione aziendale o una
          piattaforma per la gestione dei tuoi dati - siamo pronti a
          realizzarla.
        </Typography>
        <AnimatedButton
          text="Hover me"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </Box>
    </Box>

    {/* Quarto blocco - Sezione finale */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "auto", md: "50vh" },
        padding: { xs: "4rem", md: "5rem", xl: "8rem" },
        gap: { xs: "1rem", md: "3rem" },
      }}
    >
      <Typography variant="h4" color="initial" fontWeight="150">
        Pronto a iniziare?
      </Typography>

      <Box>
        <Typography
          variant="h6"
          color="initial"
          sx={{
            mb: { xs: "1rem", md: "3rem" },
            fontWeight: { xs: "80", md: "130" },
          }}
        >
          Offriamo servizi completi, dalla progettazione alla realizzazione, per
          creare prodotti digitali che si distinguono. Che tu sia un
          imprenditore, un professionista o una PMI, le nostre soluzione sono
          pensate per adattarsi perfettamente alle tue esigenze.
        </Typography>
        <AnimatedButton
          text="Vedi"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </Box>
    </Box>
  </>
);

export default HomePage;
