import * as React from 'react';
import { useContext,useState } from 'react';
import { GridContext } from '../Contexts';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
import "./NewNavbar.css"
import HomeIcon from '@mui/icons-material/Home';
import ButtonSound1 from "./ButtonSound/buttons.mp3"
import ButtonSound2 from "./ButtonSound/button1.mp3"


const drawerWidth = 190;
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

function NewNavbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const audio1=new Audio(ButtonSound1)
const audio2=new Audio(ButtonSound2)


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const {sel,setSelect,setBox,setModalShow,setModalShow2,start,setStart}=useContext(GridContext)

  const navItems=[{title:'New Game',icon:<SportsEsportsIcon/>}, 
  {title:'How to Play?',icon:<LightbulbIcon/>},
  {title:'Options',icon:<SettingsIcon/>}, 
  {title:'Exit',icon:<LogoutIcon/>}]
  
  const makeBox=(e)=>{
    setBox([])
    setSelect(e.target.value)
  }
  const handleNavClicks=(title)=>{
    if(title==='New Game' && sel!=='Select size here'){
        setSelect('Select size here')
    }
    else if(title==='New Game' && sel==='Select size here'){
      alert('Click Start Game or Select Size')
    }
    else if(title==='Exit'){
        window.close()
    }
    else if(title==='Options'){
        setModalShow(true)
    }
    else if(title==='How to Play?'){
        setModalShow2(true)
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

          <button className="button-29" role="button"><MenuIcon /></button>  
            
          </IconButton>
          
          {/* //bars and boxes game code here  */}
    
<div className="cont" onClick={()=>{}}>
  <Typography  variant="h4"  noWrap component="div" className="typewriter" >
      Bars & Boxes Game
  </Typography>
  <img width="50" height='40' src="https://media.giphy.com/avatars/jaaaamesperrett/Dx0SbsMf7gjn.gif"/>
</div>
        
        
<Typography component="div"
 sx={{alignItems:"right",display:"flex",gap:"40px"}}>
  <Typography sx={{ display: { xs: 'none', sm: 'block'  },overflow:'visible'}} className="Navbartxt" variant="h6" noWrap 
    component="div" title='New Game' onClick={(e)=>{handleNavClicks(e.target.title);audio2.play()}} >New Game
  </Typography>
  {start?
    <select onChange={(e)=>{makeBox(e)
     }} value={sel} style={{color:'white',border:'none',background:'#4A00E0'}}>
      <option value='Select size here'>Select Size here</option>
      <option value="2*3">2 x 3</option>
      <option value="3*4">3 x 4</option>
      <option value="4*5">4 x 5</option>
      <option value="5*6">6 x 7</option>
      <option value="7*8">7 x 8</option>
    </select>:
    <button type='button' className='Navbartxt' onClick={()=>setStart(true)} style={{overflow:'visible'}}>Start Game</button>}
  <Typography sx={{ display: { xs: 'none', sm: 'block' },overflow:'visible'}} 
    className="Navbartxt" variant="h6" noWrap component="div" 
    title='How to Play?' 
    onClick={(e)=>{handleNavClicks(e.target.title);audio2.play()}}>
      How to Play?
  </Typography>
</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          color:'white',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#4A00E0'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:'white'}}/> : <ChevronRightIcon sx={{color:'white'}}/>}
          </IconButton>
        </DrawerHeader>
        <List sx={{color:'white'}}>
          {navItems.map((ele) => (
            <ListItem key={ele.title} disablePadding>
               <ListItemButton onClick={()=>{handleNavClicks(ele.title);audio1.play()}}>
                <ListItemIcon sx={{color:'white'}}>
                  {ele.icon}
                </ListItemIcon>
                <ListItemText primary={ele.title} />
               </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
export default NewNavbar;




