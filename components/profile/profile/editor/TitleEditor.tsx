import React, { useState, ChangeEvent } from 'react';
import { Box, TextareaAutosize, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

const TitleEditor: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [fontSize, setFontSize] = useState<number>(16);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => setText(event.target.value);
  const handleTextColorChange = (event: ChangeEvent<HTMLInputElement>) => setTextColor(event.target.value);
  const handleBgColorChange = (event: ChangeEvent<HTMLInputElement>) => setBgColor(event.target.value);
  const handleFontSizeChange = (event: SelectChangeEvent<number>) => setFontSize(Number(event.target.value));

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto', animation: '1s showAnimLev1 forwards' }}>
      <TextareaAutosize
        minRows={3}
        style={{ width: '100%', margin: '1rem 0', padding: '1rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'none' }}
        placeholder="Wpisz tutaj tekst"
        value={text}
        onChange={handleTextChange}
      />
      <TextField
        label="Kolor napisu"
        type="color"
        fullWidth
        margin="normal"
        value={textColor}
        onChange={handleTextColorChange}
      />
      <TextField
        label="Kolor tła"
        type="color"
        fullWidth
        margin="normal"
        value={bgColor}
        onChange={handleBgColorChange}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Rozmiar czcionki</InputLabel>
        <Select
          value={fontSize}
          onChange={handleFontSizeChange}
          label="Rozmiar czcionki"
        >
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={44}>44</MenuItem>
        </Select>
      </FormControl>

      <Box
        sx={{
          mt: 3,
          p: 2,
          border: '1px solid #ccc',
          textAlign: 'center',
          color: textColor,
          backgroundColor: bgColor,
          fontSize: `${fontSize}px`,
          borderRadius: 2,
          width: '100%',
          maxWidth: '100%',
          whiteSpace: 'pre-wrap', // Zapewnia, że nowa linia będzie respektowana
          wordWrap: 'break-word',
        }}
      >
        {text || 'Podgląd napisu'}
      </Box>
    </Box>
  );
};

export default TitleEditor;
