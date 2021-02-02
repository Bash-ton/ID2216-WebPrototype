import React, {Component} from "react";
import "../styles.css"

class LoginPage extends Component{

    handleClick=e=>{
       this.props.history.push("/daily-workout-overview")
    }


    render(){
        return(  
            <div class="v120_25">
                <div class="v120_26"></div>
                <span class="v120_27">Log in</span>
                <div class="v120_28"></div>
                <span class="v120_37">*******</span>
                <div class="v120_29"></div>
                <span class="v120_35">balbalba@test.se</span>
                <button class="v120_30">Sign up</button>
                <button class="v120_38" onClick={this.handleClick}>login</button>
            </div>

        );
    }

}
export default LoginPage;