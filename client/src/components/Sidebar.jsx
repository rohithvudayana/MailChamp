import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";

const SideBar = ({ openDrawer }) => {

  return (
    <Drawer
      anchor='left'
      open={ openDrawer }
      hideBackdrop={true}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
          width: 200,
          borderRight: 'none',
          background: '#33c9dc',
          marginTop: '64px',
          height: 'calc(100vh - 64px)',
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default SideBar;
