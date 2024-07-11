import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledPaper = styled(Paper)({
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "none",
  marginTop: 20,
  padding: 20,
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#A758B5",
    },
    "&:hover fieldset": {
      borderColor: "#A758B5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#A758B5",
    },
  },
  "& .MuiInputBase-input": {
    color: "#A758B5",
  },
  "& .MuiInputLabel-root": {
    color: "#A758B5",
  },
  width: "100%",
});

const StyledButton = styled(Button)({
  backgroundColor: "#A758B5",
  color: "#fff",
  marginTop: 20,
  "&:hover": {
    backgroundColor: "#9342a0",
  },
});

const TraitSelector = ({ setStep }: { setStep: (value: number) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [amountOfTraits, setAmountOfTraits] = useState(12);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 599) {
        setAmountOfTraits(12);
      } else {
        setAmountOfTraits(3);
      }
    };
    handleResize();7
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const allTraits = [
    "Inteligentny",
    "Kreatywny",
    "Pracowity",
    "Gracz zespołowy",
    "Zorganizowany",
    "Punktualny",
    "Elastyczny",
    "Niezawodny",
    "Lider",
    "Przyjazny",
    "Zmotywowany",
    "Wydajny",
    "Ambitny",
    "Komunikatywny",
    "Cierpliwy",
    "Dokładny",
    "Odpowiedzialny",
    "Uczciwy",
    "Innowacyjny",
    "Przystosowujący się",
    "Proaktywny",
    "Empatyczny",
    "Zdeterminowany",
    "Samodzielny",
    "Analityczny",
    "Sumienny",
    "Uważny",
    "Inspirujący",
    "Zrównoważony",
    "Zorganizowany",
    "Spostrzegawczy",
    "Entuzjastyczny",
    "Przewidujący",
    "Zdolny do negocjacji",
    "Opanowany",
    "Kulturalny",
    "Techniczny",
    "Kreatywny myśliciel",
    "Dyplomatyczny",
    "Otwartość umysłu",
    "Zorientowany na szczegóły",
    "Skrupulatny",
    "Lojalny",
    "Optymistyczny",
    "Systematyczny",
    "Wszechstronny",
    "Wspierający",
    "Perswazyjny",
    "Rzetelny",
    "Zdolny do pracy pod presją",
    "Zaradny",
    "Zdolności przywódcze",
    "Zorientowany na klienta",
    "Zdolny do multitaskingu",
    "Przewidywalny",
    "Elokwentny",
    "Zdolny do nauki",
    "Inicjatywny",
    "Oszczędny",
    "Skuteczny komunikator",
    "Entuzjasta technologii",
    "Zorientowany na cel",
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTraitClick = (trait: string) => {
    setSelectedTraits((prevSelectedTraits) => {
      if (!prevSelectedTraits.includes(trait)) {
        return [...prevSelectedTraits, trait];
      }
      return prevSelectedTraits;
    });
  };

  const handleRemoveTrait = (trait: string) => {
    setSelectedTraits((prevSelectedTraits) =>
      prevSelectedTraits.filter((selectedTrait) => selectedTrait !== trait)
    );
  };

  const filteredTraits = allTraits
    .filter((trait) => trait.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((trait) => !selectedTraits.includes(trait));

  const initialTraits = filteredTraits.slice(0, amountOfTraits);

  return (
    <Box sx={{ animation: ".7s showAnim forwards", width: "clamp(250px, 95%, 700px"}}>
      <Typography
        variant="h4"
        color="#A758B5"
        align="center"
        gutterBottom
        fontWeight={"bold"}
      >
        Wybierz swoje cechy
      </Typography>
      <StyledPaper>
        <StyledTextField
          label="Wpisz cechę..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          marginTop={4}
          sx={{
            minHeight: {xs: '400px',
              sm: 'unset',
            }
            }}

          
        >
          <Box
            sx={{
              order: { xs: 2, sm: 1 },
              flex: 1,
              marginRight: { sm: 2, xs: 0 },
              marginTop: { xs: 2, sm: 0 },
       
            }}
          >
            <Box
              sx={{
                width:{
                  xs: 'unset',
                  sx: '320px',
                  md: '520px'
                }
              }}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={2}
            

            >
              {initialTraits.map((trait, index) => (
                <Paper
                  key={index}
                  onClick={() => handleTraitClick(trait)}
                  sx={{
                    width: {xs: 'unset', sm: '160px'},
                    padding: 2,
                    textAlign: "center",
                    fontSize: ".9em",
                    cursor: "pointer",
                    backgroundColor: selectedTraits.includes(trait)
                      ? "#A758B5"
                      : "#fff",
                    color: selectedTraits.includes(trait) ? "#fff" : "#A758B5",
                    "&:hover": {
                      backgroundColor: selectedTraits.includes(trait)
                        ? "#9342a0"
                        : "#f0e6f6",
                    },
                  }}
                >
                    {trait}
                </Paper>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              order: { xs: 1, sm: 2 },
              flex: 1,
              border: "1px solid #A758B5",
              padding: 2,         
              height: "400px",
              overflow: 'auto',
              maxHeight:{ xs: '200px', sm: 'unset'},
              minHeight: {xs: '200px', sm: 'unset'},
              maxWidth: {
                xs:'unset',
                sm:'250px'
              },
              minWidth:{
                xs:'unset',
                sm:'250px'
              }, 
            }}
          >
            <Typography variant="h6" color="#A758B5" gutterBottom>
              Wybrane cechy:
            </Typography>
            <List>
              {selectedTraits.map((trait, index) => (
                <ListItem key={index}>
                  <ListItemText primary={trait} />
                  <IconButton
                    edge="end"
                    onClick={() => handleRemoveTrait(trait)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <StyledButton>Zarejestruj</StyledButton>
      </StyledPaper>
    </Box>
  );
};

export default TraitSelector;
