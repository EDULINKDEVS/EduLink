import * as React from "react";
import { PaletteMode, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";
import { useRouter } from "next/router";
 
const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();
  return (
    <div>
      <AppBar
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
        }}
      >
          <Toolbar
            
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              backdropFilter: "blur(24px)",
              color:'black',
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >

             <Link href='#top'>
              <Box
                component={SchoolIcon}
                sx={{
                  color: "black", 
                  fontSize: 58, 
                  
                }}
                
              />
              </Link>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                  href="#"
                >
                
                  
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "600" }}
                  >
                    O nas
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                  href="#"
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "600" }}
                  >
                    Współpraca
                  </Typography>
                </MenuItem>
                <MenuItem
                  href="#pricing"
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "600" }}
                  >
                    Abonamenty
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >

              <Button
            color="primary"
            variant="contained" 
            size="small"
            component="a"
            href="#register"
            sx={{
              backgroundColor: "white",
              color: "black",
              '&: hover' : {
                opacity: "0.5",
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark
              }
            }}
              >
                Rejestracja
              </Button>
            



              <Button
                color="primary" // Kolor tekstu zostaje zmieniony na biały (domyślnie)
                variant="contained" // Ustawienie wariantu na "contained"
                size="small" // Rozmiar przycisku
                component="a" // Element HTML, na który będzie odnośnik (a - oznacza odnośnik)
                sx={{
                  backgroundColor: "black", // Ustawienie tła jako gradientu liniowego
                  color: "secondary", // Ustawienie koloru tekstu na biały
                  '&: hover' : {
                    opacity: "0.5",
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.dark
                  }
                }}
                href="/login"                  
              >
                Logowanie
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon sx={{
                  color: "custom",
                }} />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem >
                    O nas 
                  </MenuItem>
                  <MenuItem >
                    Współpraca
                  </MenuItem>
                  <MenuItem href="#pricing">
                    Abonamenty
                  </MenuItem>
              
                  <Divider />
                  <MenuItem>
                    <Button
                      variant="contained"
                      component="a"
                      href="/register"
                      sx={{
                        width: "100%",
                        color: "secondary",
                        fontWeight: 'bold',
                        backgroundColor: "primary",
                        border: '0px solid',
                        boxShadow: 'none'
                      }}
                    >
                      Rejestracja
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      
                      variant="outlined"
                      component="a"
                      href="/login"
                      sx={{ width: "100%",
                        color: "secondary",
                        fontWeight: 'bold',
                        backgroundColor: "primary",
                        border: '1px solid',
                        boxShadow: 'none'
                       }}
                      >
                      Logowanie
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
