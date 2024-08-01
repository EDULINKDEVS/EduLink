import { Box, Typography } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import Calendar from "../calendar/Calendar";
import Profile from "../profile/Profile";
import Messages from "../messages/Messages";
import Search from "../search/Search";
import Settings from "../settings/Settings";
import ShowAnim from "../helpers/ShowAnim";
import { optionsEnum } from "../userpanel/Employer";

const PanelContent = ({ id }: { id: string }) => {
    const [acContent, setAcContent] = useState<ReactNode | null>(null);
    useEffect(()=>{
        switch(id){
            case optionsEnum.CALENDAR:
                setAcContent(<Calendar/>)
                break;
            case optionsEnum.SETTINGS: 
                setAcContent(<Settings />)
                break;
            case optionsEnum.PROFILE: 
                setAcContent(<Profile />)
                break;
            case optionsEnum.MESSAGES: 
                setAcContent(<Messages />)
                break;
            case optionsEnum.SEARCH: 
                setAcContent(<Search />)
                break;
            default:
                setAcContent(null);
                break;
        }
    },[id])
  return (
    <Box p={2} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        {acContent}
    </Box>
  );
};

export default PanelContent;
