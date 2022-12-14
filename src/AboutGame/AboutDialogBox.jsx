import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { GridContext } from "../Contexts";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { ListItemIcon } from '@mui/material';
import About from './About.mp4'

function MyVerticallyCenteredModal2() {
    console.log('hi')
    const {modalShow2,setModalShow2}=useContext(GridContext)
    const onHide=() => setModalShow2(false)
  return(
    <Modal
      show={modalShow2} size="lg" aria-labelledby="contained-modal-title-vcenter" style={{
      zIndex:'3000'
    }}
      centered
      >
      <Modal.Header onClick={onHide} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <ListItemIcon style={{display:'flex',alignItems:'center',gap:'3px',color:'black'}}>
          <LightbulbIcon/>
           About Game
        </ListItemIcon>
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>How to Play?</h4>
        <p>
        ᴘʟᴀʏᴇʀꜱ ᴛᴀᴋᴇ ᴛᴜʀɴꜱ ᴄᴏɴɴᴇᴄᴛɪɴɢ 2 ᴜɴᴊᴏɪɴᴇᴅ ʜᴏʀɪᴢᴏɴᴛᴀʟʟʏ ᴏʀ ᴠᴇʀᴛɪᴄᴀʟʟʏ ᴀᴅᴊᴀᴄᴇɴᴛ ᴅᴏᴛꜱ. ᴀ ᴘʟᴀʏᴇʀ ᴡʜᴏ ᴄᴏᴍᴘʟᴇᴛᴇꜱ ᴛʜᴇ ꜰᴏᴜʀᴛʜ ꜱɪᴅᴇ ᴏꜰ ᴀ 1x1 ʙᴏx ᴇᴀʀɴꜱ ᴏɴᴇ ᴘᴏɪɴᴛ ᴀɴᴅ ᴍᴜꜱᴛ ᴛᴀᴋᴇ ᴀɴᴏᴛʜᴇʀ ᴛᴜʀɴ.
        
        ᴛʜᴇ ɢᴀᴍᴇ ᴇɴᴅꜱ ᴡʜᴇɴ ᴀʟʟ ʟɪɴᴇꜱ ᴀʀᴇ ᴅʀᴀᴡɴ ᴀɴᴅ ʙᴏxᴇꜱ ᴀʀᴇ ᴄʟᴀɪᴍᴇᴅ. ᴛʜᴇ ᴘʟᴀʏᴇʀ ᴡɪᴛʜ ᴛʜᴇ ᴍᴏꜱᴛ ᴘᴏɪɴᴛꜱ ᴡɪɴꜱ. ɪꜰ ᴍᴏʀᴇ ᴛʜᴀɴ ᴏɴᴇ ᴘʟᴀʏᴇʀ ʜᴀꜱ ᴛʜᴇ ꜱᴀᴍᴇ ʜɪɢʜ ꜱᴄᴏʀᴇ, ᴛʜᴇ ɢᴀᴍᴇ ɪꜱ ᴀ ᴛɪᴇ.
        </p>
        <h4>Video</h4>
        <video width="320" height="240" controls>
          <source src={About} type="video/mp4"/>
          {/* <source src="mov_bbb.ogg" type="video/ogg"/> */}
          Your browser does not support HTML video.
        </video>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal2;