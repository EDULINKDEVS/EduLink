import React, { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Event } from './Calendar'; 
import { format, parseISO } from 'date-fns';

interface DayViewProps {
  selectedDate: Date;
  events: Event[];
  onClose: () => void;
  onDelete: (event: Event) => void;
  onEdit: (event: Event) => void;
}

const DayView: React.FC<DayViewProps> = ({ selectedDate, events, onClose, onDelete, onEdit }) => {
  const [editEvent, setEditEvent] = useState<Event | null>(null);

  const handleSave = () => {
    if (editEvent) {
      onEdit(editEvent);
      setEditEvent(null);
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{`Wydarzenia dnia ${format(selectedDate, 'yyyy-MM-dd')}`}</DialogTitle>
      <DialogContent>
        <List>
          {events.filter(event => parseISO(event.date).toDateString() === selectedDate.toDateString()).map((event, index) => (
            <ListItem key={index} secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" onClick={() => setEditEvent(event)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(event)}>
                  <Delete />
                </IconButton>
              </>
            }>
              <ListItemText primary={event.title} secondary={`${event.description} - ${event.date}`} />
            </ListItem>
          ))}
        </List>
        {editEvent && (
          <Box mt={2}>
            <TextField
              fullWidth
              label="Tytuł"
              margin="normal"
              value={editEvent.title}
              onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
            />
            <TextField
              fullWidth
              label="Opis"
              margin="normal"
              value={editEvent.description}
              onChange={(e) => setEditEvent({ ...editEvent, description: e.target.value })}
            />
            <TextField
              fullWidth
              type="datetime-local"
              label="Data i godzina"
              margin="normal"
              value={editEvent.date}
              onChange={(e) => setEditEvent({ ...editEvent, date: e.target.value })}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Zamknij</Button>
        {editEvent && <Button onClick={handleSave}>Zapisz</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default DayView;
