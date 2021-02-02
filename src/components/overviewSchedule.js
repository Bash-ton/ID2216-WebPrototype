import React from "react";
import './css/overviewSchedule.js.css'

const OverviewSchedule = () => {

        const handleAddSchedule = () =>{
            window.location = '/detailed-schedule';
        }

        return(
            <div className="v180_13">
                    <div className="name"></div>

                    <div className="v180_17"></div>
                    <div className="v180_18"></div>
                    <div className="v180_19"></div>
                    <div className="v180_20"></div>

                    <div className="v180_21"></div>
                    <div onClick={() =>{handleAddSchedule()}} className="v180_22"></div>
                    <div className="v180_23"></div>
                    <div className="v180_24"></div>
                    <div className="v180_25"></div>
                    <span className="v180_26">schedule 2</span><span className="v180_27">schedule 1</span>
                    <div className="v180_28"></div>
                    <div className="v180_29"></div>
                    <span className="v180_30">schedul 3</span>
                    <span className="v180_31">Choose active schedule</span>
                    <span className="v180_32">schedule 4</span>
                    <div className="v180_33"></div>
                    <div className="v180_34"></div>
                    <div className="v180_35"></div>
            </div>
        );


}
export default OverviewSchedule;