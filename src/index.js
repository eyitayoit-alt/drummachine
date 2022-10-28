import React from 'react';
import ReactDOM from 'react-dom';


   const asrc=
[{"url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
     "id":"Heater1","label":"Q"},
{"url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3 ","id":"Heater 2","label":"W"}
, {"url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","id":"Heater 3","label":"E"},
  {"url":" https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","id":"Heater 4","label":"A"},
 {"url":"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","id":"Heater 6","label":"S"},
    
{"url":"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","id":"drums","label":"D"},
{"url":"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","id":"kick n hat","label":"Z"},
  {"url":"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","id":"Kick","label":"X"},
 {"url":"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","id":"drums","label":"C"}

]

class Button extends React.Component{
  constructor(props){
    super(props)
   this.handleClick=this.handleClick.bind(this)
    this.handleKey=this.handleKey.bind(this)
 } 
  componentDidMount(){
   window.addEventListener('keypress', this.handleKey);
}
handleClick=(e)=>{
  let audio=document.getElementById(this.props.label).play()

  this.props.updateDisplay(this.props.id)
}
 handleKey=(e)=>{
   const keys=["Q","W","E","A","S","D","Z","X","C"]
   
  const val= keys.filter(function(element){
    return element==e.key.toUpperCase()  
   })
  document.getElementById(val).click()
 } 

  render(){
  return(  
    <>
    <button id={this.props.id} className="drum-pad"   onClick={this.handleClick}><audio className="clip" id={this.props.label}  src={this.props.url} >{this.props.id}</audio>{this.props.label}</button>
         
   </> 
    )
    }
  
  
  }
class DrumMachine extends React.Component{
 constructor(props){
   
 super(props)
  this.state={
    "display":" "
    }
   this.updateDisplay=this.updateDisplay.bind(this)
   }
   updateDisplay=(id)=>{
  this.setState({"display":id})   
     }
  render(){
    
    
      return(
   <>
       <div id="drum-machine">
               
      {this.props.data.map(item=>(
           <Button   label={item.label} url={item.url} id={item.id}  updateDisplay={this.updateDisplay}  />))}
         <div id="display"> {this.state.display}</div>
         
        </div>
        </>
      )
    
    }
  
  }
  
ReactDOM.render(<DrumMachine data={asrc} />, document.getElementById("root"))
  


