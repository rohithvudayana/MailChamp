import { AppBar, Toolbar, styled, InputBase,Box } from '@mui/material';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { gmailLogo } from '../constants/constant';
import { Search, Tune, Help ,Settings, Apps, AccountCircle} from "@mui/icons-material";

const StyledAppBar = styled(AppBar)({
    background: '#33c9dc',
    boxShadow : "none"
});

const SearchWrapper = styled(Box) ({
    background: '#f8bbd0',
    marginLeft: 80,
    borderRadius: 8,
    minWidth: 690, 
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    padding: '0  20px 0 20px',
    '& > div': {
        width: '100%',
        padding: '0 10px'
    }
})

const OptionsWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > .MuiSvgIcon-root': {
        marginLeft: 10, 
    },

});

const Header = ({ toggleDrawer }) => {
    return (
            <StyledAppBar position='static'>
                <Toolbar>
                    <AutoAwesomeMosaicOutlinedIcon color='action' onClick={toggleDrawer}/>
                    <img src={gmailLogo} alt = "logo" style={{ width: 110, marginLeft: 20}}/>
                    <SearchWrapper> 
                        <Search color='action'/>
                        <InputBase
                            placeholder='search center'
                        />
                        <Tune color='action'/>
                    </SearchWrapper>
                    <OptionsWrapper>
                        <Help color='action'/>
                        <Settings color = 'action'/>
                        <Apps color = "action"/>
                        <AccountCircle color = "action"/>
                    </OptionsWrapper>
                </Toolbar>
            </StyledAppBar>
    );
};

export default Header;
