import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import "./Drawer.css"

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function LeftDrawer({setSelect}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navItems=[{title:'New Game',icon:<SportsEsportsIcon/>}, {title:'How to Play?',icon:<LightbulbIcon/>},{title:'Options',icon:<SettingsIcon/>}, {title:'Exit',icon:<LogoutIcon/>}]

  const handleNavClicks=(title)=>{
    if(title==='New Game'){
        setSelect('Select size here')
    }
    else if(title==='Exit'){
        window.close()
    }
    else if(title==='Options'){
        alert('Open options dialog')
    }
    else{
        alert('Open How to play? dialog')
    }
  }

  return (
    <Box sx={{ display: 'flex',}} >
      <CssBaseline />
      <AppBar position="fixed" sx={{backgroundColor:"#4A00E0"}} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >

          <button class="button-29" role="button"><MenuIcon /></button>  
            
          </IconButton>
          
          {/* //dot and box name code here  */}
         
<div className="cont">
        <Typography  variant="h4"  noWrap component="div" className="typewriter">
          𝕯𝖔𝖙 & 𝕭𝖔𝖝 𝕲𝖆𝖒𝖊
          </Typography>
          <img width="50" height='40'
           src="https://media.giphy.com/avatars/jaaaamesperrett/Dx0SbsMf7gjn.gif"/>
          </div>
          
<Typography component="div"
 sx={{alignItems:"right",display:"flex",gap:"20px"}}>      
<Typography sx={{ display: { xs: 'none', sm: 'block'  } }} className="Navbartxt" variant="h6" noWrap component="div">New 𝕲ame</Typography>
<Typography sx={{ display: { xs: 'none', sm: 'block' } }} className="Navbartxt" variant="h6" noWrap component="div">About 𝕲ame</Typography>
</Typography>



        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navItems.map((ele) => (
            <ListItem key={ele.title} disablePadding>
               <ListItemButton onClick={()=>{handleNavClicks(ele.title)}}>
                <ListItemIcon>
                  {ele.icon}
                </ListItemIcon>
                <ListItemText primary={ele.title} />
               </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          
        </Typography>
        <Typography paragraph>
          
        </Typography>
      </Main>
    </Box>
  );
}
export default LeftDrawer;