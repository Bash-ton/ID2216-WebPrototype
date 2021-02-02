import React, {Component} from "react";
import "../css/styles.css"
class SinginPage extends Component{


    signup =e=>{
        this.props.history.push("/tutorial")
     }
 
    login=e=>{
       this.props.history.push("/")
    }
    render(){
        return(
            <div class="v120_25">
            <div class="v120_26"></div>
            <span class="v120_27">Sign up</span>
            <input class="v120_28"></input>
            <input class="v120_29"></input>
            <button class="v120_30"onClick={this.login}>Log in</button>
            <button class="v120_38" onClick={this.signup}>Sign up</button>
        </div>
        );
    }

}
export default SinginPage;