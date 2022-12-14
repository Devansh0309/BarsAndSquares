import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext,useState } from 'react';
import { GridContext } from "../Contexts";
import SettingsIcon from '@mui/icons-material/Settings';
import { ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 42px;
`;
function MyVerticallyCenteredModal() {
    const {modalShow,setModalShow}=useContext(GridContext)
    const onHide=() => setModalShow(false)
    const [value, setValue] = useState(200);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <Modal
      show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" style={{
      zIndex:'1800'
    }}
      centered
      >
      <Modal.Header onClick={onHide} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <ListItemIcon style={{display:'flex',alignItems:'center',gap:'3px',color:'black'}}>
          <SettingsIcon/>
          Options
        </ListItemIcon>
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Music
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;