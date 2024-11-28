import React from "react";
import { Box } from "@mui/material";

interface LiquidButtonProps {
  text: string;
  textColor?: string;
  hoverTextColor?: string;
  backgroundColor?: string;
  animationDuration?: string;
}

const LiquidButton: React.FC<LiquidButtonProps> = ({
  text,
  textColor = "#000",
  hoverTextColor = "#fff",
  backgroundColor = "#000",
  animationDuration = "0.3s",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        cursor: "pointer",
        padding: "12px 24px",
        color: "textColor", //#000
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
        border: `2px solid ${textColor}`,
        // borderRadius: "8px",
        backgroundColor: "transparent",
        transition: `color ${animationDuration} ease-in-out`,
        "&:hover": {
          color: hoverTextColor,
        },
        "&:hover .fill": {
          transform: "translateX(0)",
        },
      }}
    >
      <span
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {text}
      </span>
      <Box
        className="fill"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: backgroundColor,
          transform: "translateX(-100%)",
          transition: `transform ${animationDuration} ease-in-out`,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default LiquidButton;
