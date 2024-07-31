import { Box } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import Calendar from "../calendar_company/Calendar";
import Profile from "../profile_company/Profile";
import Messages from "../messages_company/Messages";
import Search from "../search_company/Search";
import Settings from "../settings_company/Settings";
import PlusOfferCompany from "../plus_offer_company/plus_offer";
import WatchOffer from "@/components/company_platform/watch_offer_company/WatchOffer";
import { optionsEnum } from "@/components/userpanel/Employer";

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
            case optionsEnum.PLUS_OFFER_COMPANY:
                setAcContent(<PlusOfferCompany />)
                break;
            case optionsEnum.WATCH_OFFER:
                setAcContent(<WatchOffer />)
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
