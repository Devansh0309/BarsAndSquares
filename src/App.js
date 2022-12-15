import Contexts from "./Contexts";
import SquareGrid from "./Square Grid Box/SquareGrid";
import MyVerticallyCenteredModal from "./NewNavbar/OptionsDialogBox"
import MyVerticallyCenteredModal2 from "./AboutGame/AboutDialogBox";
import NewNavbar from "./NewNavbar/NewNavbar";
import './Square Grid Box/SquareGrid.css'

function App() {
  return (
    <div className="App" style={{backgroundColor:'wheat',minHeight:'100vh'}}>
      <Contexts>
        <NewNavbar/>
        <MyVerticallyCenteredModal/>
        <MyVerticallyCenteredModal2/>
        <SquareGrid/>
      </Contexts>
    </div>
  );
}
export default App;
