import React, {Component} from "react";
import "../css/tutorial.css"
class Tutorial extends Component{
    handleclick=e=>{
        this.props.history.push("/schedule-type")
     }
    render(){
        return(
            <div class="v120_45">
                <div class="v180_44"></div>
                <span class="v180_46" onClick={this.handleclick}>Create your first schedule</span>
                    <div class="v180_48"></div><div class="v180_49"></div>
                    <span class="v180_51">Tutorial image</span>
                    <span class="v180_50">Tutorial image</span>
             </div>    
              
        );
    }

}
export default Tutorial;