import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, Dialog, TextField, Button, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { pl } from 'date-fns/locale';
import DayView from './DayView';

export interface Event {
  date: string;
  title: string;
  description: string;
}

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ date: '', title: '', description: '' });
  const [optionDialogOpen, setOptionDialogOpen] = useState(false);
  const [dayViewOpen, setDayViewOpen] = useState(false);

  const renderHeader = () => (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <IconButton onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        <ArrowBack />
      </IconButton>
      <Typography variant="h4">{format(currentMonth, 'MMMM yyyy', { locale: pl })}</Typography>
      <IconButton onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        <ArrowForward />
      </IconButton>
    </Box>
  );

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(startOfMonth(currentMonth), { locale: pl });
    for (let i = 0; i < 7; i++) {
      days.push(
        <Box key={i} flex={1} textAlign="center">
          <Typography variant="body1">{format(addDays(startDate, i), 'EEE', { locale: pl })}</Typography>
        </Box>
      );
    }
    return <Box display="flex">{days}</Box>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const hasEvents = events.some(event => isSameDay(parseISO(event.date), cloneDay));
        days.push(
          <Box
            key={day.toString()}
            flex={1}
            textAlign="center"
            border={isSameMonth(day, monthStart) ? '1px solid #ddd' : '1px solid #f5f5f5'}
            bgcolor={
              isSameDay(day, new Date()) ? '#cfe8fc' :
              hasEvents ? '#ffeb3b' :  // Highlight days with events in yellow
              isSameMonth(day, monthStart) ? 'white' : '#f5f5f5'
            }
            p={1}
            onClick={() => {
              setSelectedDate(cloneDay);
              setOptionDialogOpen(true);
            }}
          >
            <Typography variant="body2">{format(day, 'd')}</Typography>
            {events.filter(event => isSameDay(parseISO(event.date), cloneDay)).map((event, index) => (
              <Typography key={index} variant="caption" display="block" noWrap>
                {event.title}
              </Typography>
            ))}
          </Box>
        );
        day = addDays(day, 1);
      }
      rows.push(<Box key={day.toString()} display="flex">{days}</Box>);
      days = [];
    }
    return <Box>{rows}</Box>;
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ date: '', title: '', description: '' });
    setOpen(false);
  };

  const handleViewDay = () => {
    setOptionDialogOpen(false);
    setDayViewOpen(true);
  };

  const handleAddNote = () => {
    setOpen(true);
    setOptionDialogOpen(false);
  };

  const handleDeleteEvent = (event: Event) => {
    setEvents(events.filter(e => e !== event));
  };

  const handleEditEvent = (updatedEvent: Event) => {
    setEvents(events.map(event => (event.date === updatedEvent.date ? updatedEvent : event)));
  };

  return (
    <Box>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dodaj Wydarzenie</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Tytuł"
            margin="normal"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <TextField
            fullWidth
            label="Opis"
            margin="normal"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
          <TextField
            fullWidth
            type="datetime-local"
            label="Data i godzina"
            margin="normal"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Anuluj</Button>
          <Button onClick={handleAddEvent}>Dodaj</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={optionDialogOpen} onClose={() => setOptionDialogOpen(false)}>
        <DialogTitle>Opcje</DialogTitle>
        <DialogActions>
          <Button onClick={handleViewDay}>Zobacz dzień</Button>
          <Button onClick={handleAddNote}>Dodaj notatkę</Button>
        </DialogActions>
      </Dialog>
      {dayViewOpen && selectedDate && (
        <DayView
          selectedDate={selectedDate}
          events={events}
          onClose={() => setDayViewOpen(false)}
          onDelete={handleDeleteEvent}
          onEdit={handleEditEvent}
        />
      )}
    </Box>
  );
};

export default Calendar;
