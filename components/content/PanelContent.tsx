import { Box, Typography } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import Calendar from "../calendar/Calendar";
import Profile from "../profile/Profile";
import Messages from "../messages/Messages";
import Search from "../search/Search";
import Settings from "../settings/Settings";
import PlusOfferCompany from "../company_platform/plus_offer_company/plus_offer";
import WatchOffer from "../company_platform/watch_offer_company/WatchOffer";
import { optionsEnum } from "../UserPanel";

const PanelContent = ({ id, type }: { id: string, type:string }) => {
    const [acContent, setAcContent] = useState<ReactNode | null>(null);
    useEffect(()=>{
        switch(id){
            case optionsEnum.SETTINGS: 
                setAcContent(<Settings />)
                break;
            case optionsEnum.PROFILE: 
                setAcContent(<Profile />)
                break;
            case optionsEnum.MESSAGES: 
                setAcContent(<Messages type={type}/>)
                break;
            case optionsEnum.SEARCH: 
                setAcContent(<Search />)
                break;
            case optionsEnum.PLUS_OFFER_COMPANY:
                setAcContent(<PlusOfferCompany />)
                break;
            case optionsEnum.WATCH_OFFER:
                setAcContent(<WatchOffer />)
                break;
            case optionsEnum.BACK:
                setAcContent(null);
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
