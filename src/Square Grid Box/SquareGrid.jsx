import React,{useContext,useEffect} from 'react'
import './SquareGrid.css'
import { GridContext } from '../Contexts';
import ButtonSound2 from '../NewNavbar/ButtonSound/button1.mp3'

function SquareGrid() {
    const {sel,setSelect,row,setRow,col,setCol,Box,setBox,player,setPlayer,horizontalButtons,setHorizontalButtons,verticalButtons,setVerticalButtons,player1Score,setPlayer1Score,player2Score,setPlayer2Score,squaresColors,setSquareColors,numberOfSquares,setNumberOfSquares,areAllClicked,setClick,won,setWon,setStart} = useContext(GridContext)

    const audio2=new Audio(ButtonSound2)

    useEffect(()=>{
        setCol(sel.split("*").map(Number)[1])
        setRow(sel.split("*").map(Number)[0])
      }
    ,[sel])

    useEffect(()=>{
        let arr=[];
        let horizontal=[]
        let vertical=[]
        let squares=[]
        for(let i=0;i<=row*col+row+col;i++){
          arr.push(i)
        }
        for(let i=0;i<row*col+col;i++){
          horizontal.push({key:i,type:'horizontal',isClicked:false,btncolor:"lightgrey",active:false})
        }
        for(let i=0;i<row*col+row;i++){
          vertical.push({key:i,type:'vertical',isClicked:false,btncolor:"lightgrey",active:false})
        }
        for(let i=0;i<row*col;i++){
          squares.push({allClicked:false,squarecolor:"grey",active:false})
        }
        setHorizontalButtons(horizontal)
        setVerticalButtons(vertical)
        setSquareColors(squares)
        setBox(arr)
        setNumberOfSquares(0)
        setPlayer1Score(0)
        setPlayer2Score(0)
        setPlayer('1')
      },[row,col])  
      
    useEffect(()=>{
        setSelect('Select size here')
      if(player1Score>0||player2Score>0)setWon(`Player${player1Score>player2Score?'1':(player1Score===player2Score && player1Score>0)?'s Tied and no one':'2'} won!`)
      },[numberOfSquares>0 && numberOfSquares===row*col]) 

    useEffect(()=>{setStart(false)},[sel==='Select size here' && won!==''])  

  return (
    <div className="Appe">
    {sel!=='Select size here' && won===''?
    (<div>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'50px'}}>
      <div style={{backgroundColor:'green'}}>Player1: {player1Score}</div> 
      <div style={{backgroundColor:'red'}}>Player2: {player2Score}</div>
      </div>
      <br/>
      <div>
        Player {player} chance
      </div>
      <div className='gridBox' 
      style={{height: `${80*(row+1)}px`,
        width: `${80*(col+1)}px`,display:"grid",
      gridTemplateColumns:`repeat(${col+1},1fr)`,
      gridTemplateRows:`repeat(${row+1},1fr)`}}
      >
      {
      Box.map((item)=>
      item%(col+1) ===col && item<row*col+row+col?
        <div className='twobox' style={{display:'flex',flexDirection:'column'}}>
          <div style={{backgroundColor:'black',width:'20%',height:'20%'}}>
          </div>
          <button className='sidelastbtn'
          style={{
            backgroundColor:
            `${verticalButtons[item].btncolor}`,
          border:`${verticalButtons[item].active?'1px solid white':'none'}`}}
    
          key={item} disabled={verticalButtons[item].isClicked} onClick={()=>{setClick(item,'vertical');areAllClicked(item,'vertical',player);audio2.play()}}></button>
        </div>
      : 
        item>=row*(col+1)?
          item<row*col+row+col?
            <div className='twobox'  style={{display:'flex'}}>
              <div style={{backgroundColor:'black',width:'20%',height:'20%'}}>
              </div>
              <button className='lowerbtn' 
              style={{
                backgroundColor:
                `${horizontalButtons[item-Math.floor(item/(col+1))].btncolor}`,
                border:`${horizontalButtons[item-Math.floor(item/(col+1))].active?'1px solid white':'none'}`}}
    
               key={item-Math.floor(item/(col+1))}  disabled={horizontalButtons[item-Math.floor(item/(col+1))].isClicked} onClick={()=>{setClick(item-Math.floor(item/(col+1)),'horizontal');areAllClicked(item-Math.floor(item/(col+1)),'horizontal',player);audio2.play()}}></button>
            </div>
          :
            <div style={{backgroundColor:'black',width:'20%',height:'20%'}}>
            </div>
        :
          <div key={item} className='onebox'>
          <div  style={{display:"flex",height:"20%"}}>
            <div style={{backgroundColor:'black',width:'20%'}}>
            </div>
            <button className='upperbtn' 
    
            style={{
              backgroundColor:
              `${horizontalButtons[item-Math.floor(item/(col+1))].btncolor}`,
              border:`${horizontalButtons[item-Math.floor(item/(col+1))].active?'1px solid white':'none'}`
            }}
    
             key={item-Math.floor(item/(col+1))}
             disabled={horizontalButtons[item-Math.floor(item/(col+1))].isClicked} 
             onClick={()=>{setClick(item-Math.floor(item/(col+1)),'horizontal');
             areAllClicked(item-Math.floor(item/(col+1)),'horizontal',player);audio2.play()}}></button>
          </div>
          
          <div  style={{display:"flex",height:"80%",width:'100%'}}>
    
            <button className='sidebtn'
             style={{
              backgroundColor:`${verticalButtons[item].btncolor}`,
              border:`${verticalButtons[item].active?'1px solid white':'none'}`}}
    
             key={item} disabled={verticalButtons[item].isClicked} onClick={()=>{setClick(item,'vertical');areAllClicked(item,'vertical',player);audio2.play()}}></button>
            
    
            <div className='innerBox' style={{backgroundColor:squaresColors[item-Math.floor(item/(col+1))].squarecolor,border:squaresColors[item-Math.floor(item/(col+1))].active?'1px solid white':'none'}}>
              {(squaresColors[item-Math.floor(item/(col+1))].squarecolor==="green"?"Player-1":null)||
              (squaresColors[item-Math.floor(item/(col+1))].squarecolor==="red"?"Player-2":null)}</div>
            
          </div>
          </div>
      )
      }
      </div>
      </div>
      )
    :sel==='Select size here' && won!==''?
    <h3>{won}</h3>
     :sel!=='Select size here' && won!==''?
     setWon(''):
     <div>
      <audio controls src={ButtonSound2}>
        Your browser does not support the audio element.
      </audio>
      <button type='button' onClick={()=>setSelect('2*3')}>Start 2 x 3 game</button>
     </div>
    }
       {/* Idea for rendering square color on click of all neighbouring buttons: Create react components for four buttons surrounding innerbox or square which is to be colored and pass 'isClicked' prop to Button component i.e. <Button isClicked={}/> and from Button Component pass result of isClicked to a function in App.js whose result of allButtons clicked is passed as a prop to innerBox React component and then if allButtons clicked is true then change color of innerBox from innerBox react component there itself  */}
      </div>
  )
}

export default SquareGrid