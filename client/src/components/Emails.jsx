import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom"
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";

const Emails = () => {
    const { openDrawer } = useOutletContext();
    const { type } = useParams();
    const getEmailService = useApi(API_URLS.getEmailFromType)

    useEffect(() => {
        getEmailService.call({}, type);
    }, [type])
    return (
        <div style= { openDrawer ? { marginLeft: 200, width: '100%'} : { width: '100%'}}>
             hello from emails 
        </div>
    )
}

export default Emails