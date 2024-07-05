import React, { useState } from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/material";

// Interfejs props dla komponentu CardFlip
interface CardFlipProps {
  frontIcon: React.ReactNode; // Ikona przedniej strony karty
  frontText: React.ReactNode; // Tekst przedniej strony karty
  backText: React.ReactNode; // Tekst tylnej strony karty
}

// Styled components dla komponentu CardFlip
const FlipCard = styled("div")({
  perspective: "1000px",
  overflow: "visible",
  height: '100%',

});

const FlipCardInner = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "1s",
  transformStyle: "preserve-3d",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'

});

const CardFace = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "15px",
  padding: "20px",
  backgroundColor: "#A758B5",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

// Komponent CardFlip
const CardFlip: React.FC<CardFlipProps> = ({
  frontIcon,
  frontText,
  backText,

}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container id="cardflip">
      <FlipCard onClick={handleClick}>
        <FlipCardInner
          className="Card"
          style={
            !isFlipped
              ? { transform: "rotateY(0)" }
              : { transform: "rotateY(180deg)" }
          }
        >
          {/* Przednia strona karty */}
          <CardFace sx={{ width: "300px", height: "400px" }}>
            {frontIcon}
            <div>{frontText}</div>
          </CardFace>
          {/* Tylna strona karty */}
          <CardFace
            style={{
              justifyContent: 'center',
              display: 'flex',
              transform: "rotateY(180deg)",
              width: "300px",
              height: "400px",
            }}
          >
            <div>{backText}</div>
        
          </CardFace>
        </FlipCardInner>
      </FlipCard>
    </Container>
  );
};

export default CardFlip;
