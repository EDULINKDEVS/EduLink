import React, { useContext, useEffect, useState } from "react";
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
import { useSchoolsData } from "@/context/schoolsData/SchoolsDataProvider";
import { RegisterContext } from "@/context/register/RegisterContext";

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
      borderColor: "primary",
    },
    "&:hover fieldset": {
      borderColor: "primary",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary",
    },
  },
  "& .MuiInputBase-input": {
    color: "primary",
  },
  "& .MuiInputLabel-root": {
    color: "primary",
  },
  width: "100%",
});

const StyledButton = styled(Button)({
  backgroundColor: "primary",
  color: "#fff",
  marginTop: 20,
  "&:hover": {
    backgroundColor: "#9342a0",
  },
});

const TraitSelector = ({ setStep, type }: { setStep: (value: number) => void, type: 'traits' | 'hard' }) => {
  const registerContext = useContext(RegisterContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [amountOfTraits, setAmountOfTraits] = useState(12);
  const [allTraits, setAllTraits] = useState<string[]>([]);
  useEffect(()=>{
    registerContext?.getSkillsDB(type);
  }, [])
  useEffect(()=>{
    const getTr = async ()=>{
      if(type === "hard"){
        
        registerContext && setAllTraits(registerContext?.hardSkillsDB.map(el => el.name))
      }
      else{
        registerContext && setAllTraits(registerContext?.traitsDB.map(el => el.name))

      }
    }
    getTr();
  },[registerContext?.traitsDB, registerContext?.hardSkillsDB]);

  useEffect(()=>{
    if(registerContext){
      if(type === 'hard'){
        setSelectedTraits(registerContext?.hard_skills);
      }
      else{
        setSelectedTraits(registerContext?.traits)
      }
    }
  },[]);

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
        color="primary"
        align="center"
        gutterBottom
        fontWeight={"bold"}
      >
        Wybierz swoje umiejętności {type === 'traits' ? 'miękkie' : 'twarde'}
      </Typography>
      <StyledPaper>
        <StyledTextField
          label="Wpisz umiejętność..."
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
                      ? "primary"
                      : "#fff",
                    color: selectedTraits.includes(trait) ? "#fff" : "primary",
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
              border: "1px solid primary",
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
            <Typography variant="h6" color="primary" gutterBottom>
              Wybrane umiejętności:
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
        {
          type === 'traits' ?
          <StyledButton onClick={()=>{
            registerContext?.setTraits(selectedTraits);
            setStep(3)
          }}>Dalej</StyledButton>
          :
          <StyledButton onClick={()=>{
              registerContext?.setHardSkills(selectedTraits);
            setStep(4)
          }}>Dalej</StyledButton>

        }
      </StyledPaper>
    </Box>
  );
};

export default TraitSelector;
