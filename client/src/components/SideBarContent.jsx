import { useState } from "react"
import { Box, Button,styled ,List, ListItem} from "@mui/material"
import { CreateOutlined } from "@mui/icons-material"
import { SIDEBAR_DATA } from "../config/sidebar.config"
import ComposeMail from "./ComposeMail"

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
        cursor: 'pointer'
    },
    '& > ul > li > svg':{
        marginRight: 15
    }
})

const SideBarContent = () => {
    const [openDialog, setOpenDialog] = useState(false);

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
                        <ListItem>
                            <data.icon fontSize="small"/>{data.title}
                        </ListItem>
                    ))
                }
            </List>
            <ComposeMail openDialog = {openDialog}  setOpenDialog={setOpenDialog}/>
        </SideContainer>
    )
}

export default SideBarContent;