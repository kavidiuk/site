import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
import image from "../assets/images/samsung.jpg";
const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "2rem", md: "4rem" },
          backgroundColor: "#F9F9F9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {/* Titolo principale */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "#333",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Chi siamo
        </Typography>

        {/* Introduzione */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            color: "#555",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.6,
          }}
        >
          Siamo un team giovane e appassionato specializzato nello sviluppo di
          applicazioni web. Con un focus su tecnologie moderne come React,
          Angular e Java, trasformiamo le tue idee in esperienze digitali
          uniche.
        </Typography>

        {/* Immagine del team o di te stesso */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <img
            src={image}
            alt="Il nostro team"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>

        {/* Descrizione dettagliata */}
        <Box
          sx={{
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            La nostra missione
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.6,
            }}
          >
            Crediamo nel potere del digitale per cambiare il mondo. La nostra
            missione è creare soluzioni web innovative e accessibili, aiutando
            aziende e privati a crescere e a raggiungere i loro obiettivi
            online. Collaboriamo con i nostri clienti per garantire risultati
            che superino le aspettative.
          </Typography>
        </Box>

        {/* Avatar per personalizzazione (opzionale) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Avatar
            alt="Fondatore"
            src="https://via.placeholder.com/150" // Cambia con una tua immagine
            sx={{
              width: 150,
              height: 150,
              marginBottom: "1rem",
            }}
          />
          <Typography variant="h6" fontWeight="bold" color="#333">
            [Il tuo nome]
          </Typography>
          <Typography variant="body2" color="#555">
            Sviluppatore Full Stack e fondatore
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default AboutUs;
