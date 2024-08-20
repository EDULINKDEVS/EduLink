import React, { useState, MouseEvent, ReactNode, useContext } from 'react';
import { Box, Button, IconButton, Avatar, Menu, MenuItem, Typography, Fade, Paper, Grid, FormControlLabel, Checkbox, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BackgroundPhoto from './profile/components/BackgroundPhoto';
import ProfilePhoto from './profile/components/ProfilePhoto';
import InformationSection from './profile/components/InformationSection';
import SliderEditor from './profile/editor/SliderEditor';
import PhotoEditor from './profile/editor/PhotoEditor';
import TextSectionEditor from './profile/editor/TextSectionEditor';
import TitleEditor from './profile/editor/TitleEditor';
import { ProfileContext } from '@/context/profile/ProfileContext';
import { DescriptionLayouts, TableEnum } from '@/context/profile/exampleDat';
import OneColumnWithHeader from './profile/components/textSections/OneColumnWithHeader';
import OneColumn from './profile/components/textSections/OneColumn';
import Photo from './profile/components/Photo';
import Slider from './profile/components/Slider';
interface Section {
  type: 'image' | 'slider' | 'swiper' | 'text' | 'title';
}

const ProfileUser: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const data = useContext(ProfileContext);
  const [editedSection, setEditedSection] = useState<ReactNode | null>(null);
  const handleAddSectionClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddSection = (type: Section['type']) => {
    switch(type){
        case 'image':
            setEditedSection(<PhotoEditor />);
            break;
        case 'slider':
            setEditedSection(<SliderEditor />);
            break;    
        case 'text':
            setEditedSection(<TextSectionEditor />);
            break;
        case 'title':

            setEditedSection(<TitleEditor />);
            break;
        default:
            setEditedSection(null);
    }
    handleMenuClose();
  };

  
  return (
    <Paper elevation={3} sx={{ width: 'clamp(300px, 100%, 1200px)', pb: 2, borderRadius: 2, bgcolor: '#f5f5f5' }}>
      <Box sx={{ position: 'relative' }}>
        <BackgroundPhoto />
        <ProfilePhoto />
      </Box>  
      <Box sx={{ marginTop: '150px' }}>
        <InformationSection />
        <Box sx={{ marginTop: 2 }}>
          {
            data?.state.map((element) => {
              if(element.type === TableEnum.DESCRIPTION){
                if(element.layout === DescriptionLayouts.HEADER_WITH_COLUMN){
                  <OneColumnWithHeader header={element.header} header_font_size={element.header_font_size} text={element.text} text_font_size={element.text_font_size} />
                }
                if(element.layout === DescriptionLayouts.ONE_COLUMN){
                  <OneColumn text={element.text} size={element.text_font_size} />
                }
                if(element.layout === DescriptionLayouts.HEADER_WITH_COLUMN){
                  <OneColumnWithHeader header={element.header} header_font_size={element.header_font_size} text={element.text} text_font_size={element.text_font_size} />
                }
                if(element.layout === DescriptionLayouts.HEADER_WITH_COLUMN){
                  <OneColumnWithHeader header={element.header} header_font_size={element.header_font_size} text={element.text} text_font_size={element.text_font_size} />
                }
              }
              if(element.type === TableEnum.PHOTO){
                <Photo path={element.path} brightness={element.brightness} alt='PHOTO ERROR' b_radius={element.borderRadius} size={element.width} />
                
              }
              if(element.type === TableEnum.SLIDER){
                <Slider enableSwipe={element.swiper} autoScrollInterval={element.auto_scroll} slides={element.pathTable} enableArrowNavigation={element.ability_to_scroll} enableNumericNavigation={element.numeric_nav} />
              }
              if(element.type === TableEnum.TITLE){
                  
              }
              
              return null;
            })
          }
        </Box>
        <Box sx={{ paddingTop: 4 }}>
         
          <Box sx={{ paddingTop: 6, textAlign: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleAddSectionClick}
            >
              Dodaj sekcję
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleAddSection('image')}>Zdjęcie</MenuItem>
              <MenuItem onClick={() => handleAddSection('slider')}>Slider</MenuItem>
              <MenuItem onClick={() => handleAddSection('text')}>Opis</MenuItem>
              <MenuItem onClick={() => handleAddSection('title')}>Tytuł</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProfileUser;
