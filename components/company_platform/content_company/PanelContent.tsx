import { optionsEnum } from "@/pages/userpanel";
import { Box, Typography } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import Calendar from "../calendar_company/Calendar";
import Profile from "../profile_company/Profile";
import Messages from "../messages_company/Messages";
import Search from "../search_company/Search";
import Settings from "../settings_company/Settings";
import ShowAnim from "../helpers_company/ShowAnim";

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
