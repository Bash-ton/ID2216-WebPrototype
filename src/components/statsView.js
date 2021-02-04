import React from "react";
//css
import './css/statsView.css'


const handleGoToStatsButton = () =>{
    window.location="/stats-view";
}


const handleGoToHomeButton = () =>{
    window.location="/daily-workout-overview";
}

const handleGoEditScheduleButton = () =>{
    window.location="/overview-schedule";
}

const StatsView = () => {

    return(
        <div>
        <div class="v151_179">
            <div class="v160_2"></div>
            <div class="name"></div>
                </div>
            <span class="v160_5">Choose exercise</span>
            <div class="v160_7"></div>
            <div class="v160_23"></div>
            <span class="v160_34">-</span>
            <span class="v160_30">-</span>
            <span class="v160_32">-</span>
            <span class="v160_33">-</span>
            <span class="v160_20">Current max speed M/S</span>
            <span class="v160_15">Current max</span>
            <span class="v160_9">Goal max</span>
            <span class="v160_18">Goal max</span>
            <span class="v160_22">Goal speed M/S</span>
            <span class="v160_10">Current max</span>
            <span class="v160_12">Next target max</span>
            <span class="v160_16">Next target max</span>
            <span class="v160_17">Next target max</span>
            <span class="v160_21">Next target speed M/S</span>
            <span class="v160_13">Weight</span>
            <span class="v160_14">Reps</span>
            <span class="v160_19">Kardio</span>
            <span class="v160_24">Current max distance</span>
            <span class="v160_25">Next target distance</span>
            <span class="v160_26">Goal distance</span>
            <span class="v160_28">-</span>
            <span class="v160_31">-</span>
            <div class="name"></div>

            <div onClick={() => {handleGoToStatsButton()}} class="v151_385"></div>
            <div  onClick={() => {handleGoToHomeButton()}} class="v151_386"></div>
            <div  onClick={() => {handleGoToHomeButton()}} class="v151_387"></div>
            <div  onClick={() => {handleGoEditScheduleButton()}} class="v151_388"></div>
        </div>
    );
}
export default StatsView;
