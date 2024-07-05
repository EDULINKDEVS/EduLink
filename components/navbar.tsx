import * as React from "react";
import { PaletteMode } from "@mui/material";
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
import { fontStyle, fontWeight } from "@mui/system";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";
import CardFlip from "./CardFlip";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

// Definicja komponentu funkcyjnego AppAppBar przyjmującego propsy mode i toggleColorMode
function AppAppBar() {
  // Deklaracja stanu open, który będzie informował czy panel boczny jest otwarty
  const [open, setOpen] = React.useState(false);

  // Funkcja toggleDrawer służąca do otwierania/zamykania panelu bocznego
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Funkcja scrollToSection służąca do przewijania do danej sekcji
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  // Renderowanie komponentu AppBar z użyciem elementów Material-UI
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "dark"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
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
              {/* Renderowanie logo */}
              {/* <img
                src={
                  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
                }
                style={logoStyle}
                alt="logo of sitemark"
              /> */}

             <Button>
              <Box
                component={SchoolIcon}
                sx={{
                  //   ...logoStyle, // Zachowaj pozostałe style z logoStyle
                  color: "black", // Zmień kolor ikony na czerwony
                  fontSize: 58, // Zmień rozmiar ikony na 48 pikseli
                  
                }}
                onClick={() => scrollToSection("page")}
              />
              </Button>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {/* Renderowanie opcji menu */}
                <MenuItem
                  onClick={() => scrollToSection("features")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontWeight: "600" }}
                  >
                    O nas
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("testimonials")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontWeight: "600" }}
                  >
                    Współpraca
                  </Typography>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => scrollToSection('highlights')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Highlights
                  </Typography>
                </MenuItem> */}
                <MenuItem
                  onClick={() => scrollToSection("pricing")}
                  
                >
                <Link href={'#pricing'} scroll={false}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontWeight: "600" }}
                  >
                    Abonamenty
                  </Typography>
                  </Link>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem> */}
              </Box>
            </Box>
            {/* Renderowanie przycisków zaloguj i zarejestruj */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >

              <Button
                color="primary" // Kolor tekstu zostaje zmieniony na fioletowy (domyślnie)
                variant="text" // Ustawienie wariantu na "text"
                size="small" // Rozmiar przycisku
                component="a" // Element HTML, na który będzie odnośnik (a - oznacza odnośnik)
                // href="/material-ui/getting-started/templates/sign-in/" // Adres URL, do którego prowadzi odnośnik
                // href= "#CardFlip"
                target="_blank" // Otwiera link w nowej karcie przeglądarki
                sx={{
                  color: "black", // Ustawienie koloru tekstu na czarny
                }}
                onClick={() => scrollToSection("cardflip")}
                
              >
                Rejestracja
              </Button>
            



              <Button
                color="primary" // Kolor tekstu zostaje zmieniony na biały (domyślnie)
                variant="contained" // Ustawienie wariantu na "contained"
                size="small" // Rozmiar przycisku
                component="a" // Element HTML, na który będzie odnośnik (a - oznacza odnośnik)
                // href="/material-ui/getting-started/templates/sign-up/" // Adres URL, do którego prowadzi odnośnik
                target="_blank" // Otwiera link w nowej karcie przeglądarki
                sx={{
                  backgroundColor: "#9B30FF", // Ustawienie tła jako gradientu liniowego
                  color: "white", // Ustawienie koloru tekstu na biały
                  '&: hover' : {
                    opacity: "0.5",
                    backgroundColor: 'white',
                    color: 'black'
                  }
                }}
                onClick={() => scrollToSection("cardflip")}
                
              >
                Logowanie
              </Button>
            </Box>
            {/* Renderowanie ikony menu na mniejszych ekranach */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              {/* Renderowanie panelu bocznego na mniejszych ekranach */}
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
                  <MenuItem onClick={() => scrollToSection("features")}>
                    Features
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("testimonials")}>
                    Testimonials
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("highlights")}>
                    Highlights
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("pricing")}>
                    Pricing
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("faq")}>
                    FAQ
                  </MenuItem>
              
                  {/* Linia podziału w panelu bocznym */}
                  <Divider />
                  {/* Przycisk zarejestruj w panelu bocznym */}
                  <MenuItem>
                    <Button
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{
                        width: "100%",
                        backgroundColor:
                          "linear-gradient(380deg, #6B1B9A, #9B30FF)",
                        color: "black",
                      }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  {/* Przycisk zaloguj w panelu bocznym */}
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

// Eksportowanie komponentu AppAppBar
export default AppAppBar;
