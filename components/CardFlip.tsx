import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, Container, useTheme } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface CardFlipProps {
  frontIcon: React.ReactNode; 
  frontText: React.ReactNode;
  path: string;
}

// Styled components defined outside the main component
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

const CardFace = styled("div")<{
  theme: any;
}>(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "15px",
  padding: "20px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const CardFlip: React.FC<CardFlipProps> = ({
  frontIcon,
  frontText,
  path,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = useTheme();

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
          <CardFace theme={theme} sx={{ width: "300px", height: "400px" }}>
            {frontIcon}
            <div style={{
              top: 95,
              fontSize: 25,
              position: 'relative',
              fontWeight: '700',
              fontStyle: 'normal',
              userSelect: 'none'
            }}>{frontText}</div>
          </CardFace>
          <CardFace
            theme={theme}
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
                <ArrowDownwardIcon sx={{
                  fontSize: '160px',
                  marginLeft: '5px',
                  animation: '1s bounce infinite'
                }}/>
                <Button variant="contained" href={path} sx={{
                  marginTop: "80px",
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.light,
                  },
                }}>
                  Zarejestruj się
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
