import React, {Component} from "react";
import "../css/styles.css"

class LoginPage extends Component{

    
    signup =e=>{
        this.props.history.push("/sing-in-page")
     }
 
    login=e=>{
       this.props.history.push("/daily-workout-overview")
    }


    render(){
        return(  
            <div class="v120_25">
                <div class="v120_26"></div>
                <span class="v120_27">Log in</span>
                <input type="password" class="v120_28"></input>
                <input  class="v120_29"></input>
                <button class="v120_30"onClick={this.signup}>Sign up</button>
                <button class="v120_38" onClick={this.login}>login</button>
            </div>

        );
    }

}
export default LoginPage;