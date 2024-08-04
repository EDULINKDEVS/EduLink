import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

type TemplateOption = {
  label: string;
  template: string;
};

const options: TemplateOption[] = [
  {
    label: 'two_columns',
    template: 
`
+-------------------+-------------------+
|   Kolumna 1       |   Kolumna 2       |
|   Tekst           |   Tekst           |
|   w pierwszej     |   w drugiej       |
|   kolumnie.       |   kolumnie.       |
+-------------------+-------------------+
`
  },
  {
    label: 'one_column_with_header',
    template: 
`
+-------------------+
|   Mały nagłówek   |
+-------------------+
|                   |
|   Tekst pod       |
|   spodem.         |
|                   |
+-------------------+
`
  },
  {
    label: 'one_column',
    template: 
`
+-------------------+
|                   |
|   Jeden duży      |
|   kawałek tekstu. |
|                   |
+-------------------+
`
  }
];

const TextSectionEditor: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [headerText, setHeaderText] = useState<string>('');
  const [headerFontSize, setHeaderFontSize] = useState<number | string>('');
  const [text, setText] = useState<string>('');
  const [textFontSize, setTextFontSize] = useState<number | string>('');
  const [column1Text, setColumn1Text] = useState<string>('');
  const [column2Text, setColumn2Text] = useState<string>('');
  const [columnFontSize, setColumnFontSize] = useState<number | string>('');

  const handleTemplateSelect = (label: string) => {
    setSelectedTemplate(label);
  };

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-around" mb={2}>
        {options.map((option) => (
          <Card
            key={option.label}
            onClick={() => handleTemplateSelect(option.label)}
            sx={{
              cursor: 'pointer',
              border: selectedTemplate === option.label ? '2px solid blue' : '1px solid grey',
              boxShadow: selectedTemplate === option.label ? 6 : 3
            }}
          >
            <CardContent>
              <pre>{option.template}</pre>
            </CardContent>
          </Card>
        ))}
      </Box>

      {selectedTemplate === 'one_column_with_header' && (
        <Box mt={2}>
          <TextField
            label="Nagłówek"
            value={headerText}
            onChange={(e) => setHeaderText(e.target.value)}
            fullWidth
          />
          <TextField
            label="Rozmiar czcionki nagłówka"
            value={headerFontSize}
            onChange={(e) => setHeaderFontSize(Number(e.target.value))}
            fullWidth
            type="number"
            margin="normal"
          />
          <TextField
            label="Tekst"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            label="Rozmiar czcionki tekstu"
            value={textFontSize}
            onChange={(e) => setTextFontSize(Number(e.target.value))}
            fullWidth
            type="number"
            margin="normal"
          />
        </Box>
      )}

      {selectedTemplate === 'two_columns' && (
        <Box mt={2}>
          <TextField
            label="Kolumna 1"
            value={column1Text}
            onChange={(e) => setColumn1Text(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            label="Kolumna 2"
            value={column2Text}
            onChange={(e) => setColumn2Text(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            label="Rozmiar czcionki"
            value={columnFontSize}
            onChange={(e) => setColumnFontSize(Number(e.target.value))}
            fullWidth
            type="number"
            margin="normal"
          />
        </Box>
      )}

      {selectedTemplate === 'one_column' && (
        <Box mt={2}>
          <TextField
            label="Tekst"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            label="Rozmiar czcionki"
            value={textFontSize}
            onChange={(e) => setTextFontSize(Number(e.target.value))}
            fullWidth
            type="number"
            margin="normal"
          />
        </Box>
      )}

      <Box mt={4}>
        <Typography variant="h6">Podgląd:</Typography>
        {selectedTemplate === 'one_column_with_header' && (
          <Box>
            <Typography style={{ fontSize: `${headerFontSize}px` }}>
              {headerText}
            </Typography>
            <Typography style={{ fontSize: `${textFontSize}px` }}>
              {text}
            </Typography>
          </Box>
        )}

        {selectedTemplate === 'two_columns' && (
          <Box display="flex">
            <Box width="50%" pr={1}>
              <Typography style={{ fontSize: `${columnFontSize}px` }}>
                {column1Text}
              </Typography>
            </Box>
            <Box width="50%" pl={1}>
              <Typography style={{ fontSize: `${columnFontSize}px` }}>
                {column2Text}
              </Typography>
            </Box>
          </Box>
        )}

        {selectedTemplate === 'one_column' && (
          <Typography style={{ fontSize: `${textFontSize}px` }}>
            {text}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TextSectionEditor;
