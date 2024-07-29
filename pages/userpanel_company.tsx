import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import PanelContent from '@/components/company_platform/content_company/PanelContent';
import UserOptionWraper from '@/components/company_platform/userpanel_company/nav/UserOptionWraper';

export const optionsEnum = {
  SETTINGS: 'settings',
  MESSAGES: 'messages',
  SEARCH: 'search',
  CALENDAR: 'calendar',
  PROFILE: 'profile',
  PLUS_OFFER_COMPANY: 'plusOffer',
  WATCH_OFFER: 'watchOffer'
}

const options = [
  { id: "watchOffer", label: "Przejrzyj swoje oferty" },
  { id: "plusOffer", label: "Dodaj ofertę" },
  { id: 'settings', label: 'Ustawienia profilu' },
  { id: 'messages', label: 'Wiadomości' },
  { id: 'search', label: 'Szukaj pracowników' },
  { id: 'calendar', label: 'Kalendarz' },
  { id: 'profile', label: 'Profil' },
];

enum optionsFBEnum {
  COLUMN = 'column',
  ROW = 'row'
}

const UserPanel: React.FC = () => {
  const [optionsFD, setOptionFD] = useState<optionsFBEnum>(optionsFBEnum.ROW);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleIconClick = (id: string) => {
    const option = options.find(opt => opt.id === id);
    if (option) {
      setSelectedOption(option.id);
      option?.label ? setOptionFD(optionsFBEnum.COLUMN) : setOptionFD(optionsFBEnum.ROW);
    }
  };

  return (

  );
};

export default UserPanel;
