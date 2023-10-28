
import { Component } from "react";
import Usersfl from './Usersfl';
class Registration extends Component{    
    constructor(){
        super();
        this.state={
            users:[]
        }
        this.addUser=this.addUser.bind(this);

    }
    componentDidMount(){  
        for(var i=0;i<sessionStorage.length;i++){
            var key=sessionStorage.key(i);
            var value=sessionStorage.getItem(key);
            this.state.users.push(new Usersfl(key,value));
        }
        this.setState({users:this.state.users});
    }

    addUser(){
        var firstname=document.getElementById("firstname").value;
        var lastname=document.getElementById("lastname").value;
        sessionStorage.setItem(firstname, lastname );
        this.state.users.push(new Usersfl(firstname,lastname));
        this.setState({users:this.state.users});
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
    }

    render(){
        return(
            <div align="center">
                <input type="text" placeholder='First Name' id="firstname"/>
                <input type="text" placeholder='Last Name' id="lastname"/>
                <input type="button" value="Add User" onClick={this.addUser}/>
                <table border={"5px"} align="center" class="tableClass">
                    {this.state.users.map((user,index)=>{
                        return(
                            <tr key={index}><td>{user.firstname}</td> <td>{user.lastname}</td>
                            <td><input type="button" value="Delete"  onClick={() =>{sessionStorage.removeItem(user.firstname);this.state.users.splice(index,1);this.setState({users:this.state.users});}}/></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }

    componentWillUnmount() { 
        this.state.users=[];
        this.setState({users:this.state.users});
}
}

export default Registration;