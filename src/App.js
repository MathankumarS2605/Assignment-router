import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard';
import Home from './Home';
import AboutUs from './AboutUs';
import Registration from './Registration';
import Contact from './Contact';
 import  {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
 import {createContext} from 'react'
 import UserHeader from './UserHeader';

import User from './User';
import { Component } from 'react';
export const sharedData =new createContext();
class App extends Component{
  sharedData;
  userName=""
   propsUsername="";
   state={
     isLogin:false,
     isShown:true,
     username:""
   }
   userArray = [];
   constructor(){
    //sessionStorage.clear();
    super();
    this.checkUser = this.checkUser.bind(this);
    }
   componentDidMount() {
  this.userArray.push(new User("Mathan","Kumar") )
  this.userArray.push(new User("Sri","Vishnu"))
  this.userArray.push(new User("Aakash","12345"))
  this.userArray.push(new User("Asfaq","Bikini"))
  this.userArray.push(new User("Santhosh","sandy"))
  this.userArray.push(new User("Aravind","12345"))
   }
   checkUser(){
    var bool=false;
    var div=document.getElementById("div");
    var navDiv=document.getElementById("na");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Please Wait.....")
    for(var i of this.userArray){
      if(i.username==username && i.password==password){
       // propsUsername = username;
      this.userName=i.username;
       bool = true;
       this.setState({isLogin: true});
        console.log("Login Success");
        this.setState({username: username})
        div.innerHTML = "";
        //navDiv.style.visibility="visible";
        console.log(this.state.isLogin);
       
        this.render();
        this.setState({isShown: false});
      }}
      if(bool == false){
        alert("Invalid password")
      }
    }
   render(){
    
    if(this.state.isLogin == false && window.location.pathname != "/home"  && window.location.pathname != "/contact"  && window.location.pathname != "/aboutUs"  && window.location.pathname != "/Registration"){
      
      return(
      <div>
      <div id="div">
        <input type="text" placeholder='Username' id="username"/>
        <input type="password" placeholder='Password' id="password"/>
        <input type="button" value="Login"  onClick={this.checkUser} />
      </div>
      
      </div>
    );
      }
      else{
        if(this.state.isShown == false){
          return(
            <BrowserRouter>
            <div  class="topnav" id="na" >
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/Registration">Registration</Link>
            <sharedData.Provider value={this.userName}>
              <UserHeader />
              </sharedData.Provider>
            </div>
           <Routes>
            <Route path="home" element={<Home username={this.state.username} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutUs" element={<AboutUs companyName="GavsTech" companyAddress="Chennai" />} />
            <Route path="Registration" element={<Registration />} />
            </Routes>
           </BrowserRouter> 
            );
           }
          }
        }
   }

export default App;


