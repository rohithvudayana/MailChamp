import { useState } from "react"
import { Box, Button,styled ,List, ListItem} from "@mui/material"
import { CreateOutlined } from "@mui/icons-material"
import { SIDEBAR_DATA } from "../config/sidebar.config"
import ComposeMail from "./ComposeMail"
import { useParams, NavLink } from "react-router-dom" 
import { routes } from "../routes/routes"

const ComposeButton = styled(Button) ({
    background:'#212121',
    color: '#c2e7ff',
    padding: 12,
    borderRadius: 16,
    minWidth: 120,
    textTransform: 'none',
    marginTop: 10,
    marginLeft: 14
})

const SideContainer = styled(Box) ({
    padding: 10,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        '& > a':{
            textDecoration: "none",
            color: "inherit"
        }
    },
    '& > ul > a > li > svg':{
        marginRight: 15
    }
})

const SideBarContent = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const { type } = useParams();
    const ToggleDialog = () => {
        setOpenDialog(true)
    }

    return(
        <SideContainer>
            <ComposeButton onClick={() => ToggleDialog()}>
                <CreateOutlined /> Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={ type === data.name.toLowerCase() ? {
                                backgroundColor: '#f8bbd0',
                                borderRadius: '16px 16px 16px 16px'
                            } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                        </NavLink>
                    ))
                }
            </List>
            <ComposeMail openDialog = {openDialog}  setOpenDialog={setOpenDialog}/>
        </SideContainer>
    )
}

export default SideBarContent;