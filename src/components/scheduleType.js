import React, {Component} from "react";
import "../css/scheduleType.css"
class ScheduleType extends Component{

   detailedschedule =e=>{
        this.props.history.push("/detailed-schedule")
     }
     premadeschedule =e=>{
        this.props.history.push("/premade-scheduletype")
     }
    render(){
        return(
            <div class="v160_86">
                <div class="name"></div> 
           
                <div class="v160_96"onClick={this.premadeschedule}></div>
                <div class="v160_117"onClick={this.detailedschedule}></div>
                <span class="v160_97" onClick={this.detailedschedule}>Create Your Own schedule </span>
                <span class="v160_98"onClick={this.premadeschedule}>Pick an existing Scheduling</span></div>
        );
    }

}
export default ScheduleType;