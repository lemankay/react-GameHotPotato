import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import f from './components/Counter.module.css';

class HotPot extends Component {   
       render() {
           return (        
   <Fragment>
       <div className="App">
           <div className="container">            
           <React.Fragment>
           <div className={f.component}>  
               <div className={f.component1}>
                   <div className={f.component_count }>
                           <p>{this.props.title} </p>
                           <p> { this.props.names.join(' ')}</p>
                   </div>
               </div>  
               <div className={f.component1}>
                   <div className={f.component_count}>
                       <p>{this.props.title2}</p> 
                       <p>{this.props.hotPotato}</p>
                      
                   </div>                                          
               </div>
               </div>            
           </React.Fragment>  
           </div>
       </div>
   </Fragment>  
           )
       }
   }
const Coment = (props) => {    
           return (
            <div className={f.component}>  
               <div className={f.component1}>
                   <div className={f.component_count }>
                        <p> {props.title3}  </p>
                        <p>{props.arr.join(' ')}</p>                   
                  </div>
               </div>  
                <div className={f.component1}>
                     <h4> "Введите число" </h4> 
                   <div className={f.component_btn}>
                       
                        <button  onClick={props.inc}>+</button> 
                       
                        <p> {props.count}  </p>   
                        <button onClick={props.dec}>-</button>   
                  </div>                                          
               </div>
               <div className={f.component1}>
                   <div className={f.component_count}>
                       <label>Вышел из игры</label>
                      <input value={props.arr} />
                  </div>                                          
               </div>
             </div> 
       )
   } 
class App extends Component {   
   
    state = {
        p : [],
        arr: [],
        names :['Вася','Петя','Зина','Коля','Зера','Гуля'],
        qUeue: [],
        title: 'Участники игры',
        title2: 'В ИГРЕ ПОБЕДИЛ',
        title3: ' Вышел из  мгры',
        count: 1   
    }
  
    hotPotato = (names) => {	
            for (let i = 0; i < names.length ; ++i )
            this.state.qUeue.push(names[i]);
               this.elimenatedFunc(this.state.count)
            return this.state.qUeue.shift();
    }
    elimenatedFunc = (num) => {
            while (this.state.qUeue.length>1) { 

            for(let i=0;i<num;++i)
            this.state.qUeue.push(this.state.qUeue.shift());
            this.state.arr.push(this.state.qUeue.shift());       
        }  if(this.state.arr.length > this.state.names.length){
            return this.state.arr.splice(0,this.state.names.length-1) 
        }
            return this.state.arr.join(' ');                    
    } 
   
    inc = () => this.setState(({count}) => ({count: count + 1}))
    dec = () => this.setState(({count}) => ({count: count - 1}))
    render() {
        return (      
            <Fragment>
                <div className="App">
                    <div className="container">           
                    <React.Fragment>
                        <Header/>
                        <HotPot title={this.state.title}
                                names={this.state.names} 
                                title2 = {this.state.title2}  
                                hotPotato = {this.hotPotato(this.state.names)}                                                      
                        />
                   <Coment
                        title3 = {this.state.title3}
                        arr = {this.state.arr}
                        inc = {this.inc}
                        count = {this.state.count}
                        dec = {this.dec}
                  />   
                    </React.Fragment>
                    </div>
                </div>
            </Fragment>
       )
    }
}
export default App;
