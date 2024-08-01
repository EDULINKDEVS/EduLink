import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

interface CardFlipProps {
  frontIcon: React.ReactNode; 
  frontText: React.ReactNode;
  path: string;
}

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

const CardFlip: React.FC<CardFlipProps> = ({
  frontIcon,
  frontText,
  path,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container id="cardflip" >
      <FlipCard onClick={handleClick}>
        <FlipCardInner
          className="Card"
          style={
            !isFlipped
              ? { transform: "rotateY(0)" }
              : { transform: "rotateY(180deg)" }
          }
        >
          <CardFace sx={{ width: "300px", height: "400px" }}>
            {frontIcon}
            <div style={{
                top: 95,
                fontSize: 25,
                position: 'relative',
                fontFamily: 'playfair-display, sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
                userSelect: 'none'
              }}>{frontText}</div>
          </CardFace>
          <CardFace
            style={{
              justifyContent: 'center',
              display: 'flex',
              transform: "rotateY(180deg)",
              width: "300px",
              height: "400px",
            }}
          >
            <Box>
              <div>
              <Typography variant="body2" gutterBottom> 
                Zarejestruj się używając klawisza poniżej
                </Typography>
                <Button variant="contained" href={path}>
                  Zarejestruj
                </Button>
                </div>
            </Box>
            
          </CardFace>
        </FlipCardInner>
      </FlipCard>
    </Container>
  );
};

export default CardFlip;
