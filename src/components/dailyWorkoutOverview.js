import React from "react";
import './css/daliyWorkoutOverview.css'


const DailyWorkoutOverview = () =>{




        const handleShowMoreBtn = () => {
                if(document.querySelector(".test-hidden")){
                        document.querySelector(".test-hidden").className = "test";
                }else{
                        document.querySelector(".test").className = "test-hidden";
                }
        }

        const handleStatsButton = () =>{
                window.location="/stats-view";
        }

    return(
        <div className="v120_44">

            <span className="v120_50">What to do</span>
            <span className="v120_51">2021-01-25</span>
            <div  className="v142_2"></div>
            <span className="v142_3">ÖvningNamn</span>

        <table className="test-hidden">
                <thead>
                        <tr>
                                <th>sets</th>
                                <th>reps</th>
                                <th>weight</th>
                                <th>speed</th>
                                <th>time</th>
                                <th>distance</th>
                                <button onClick={() => {handleStatsButton()}}>Stats</button>
                        </tr>
                </thead>
                <tbody>
                <tr>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                </tr>
                <tr>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                </tr>

                </tbody>
        </table>
            <div className="v142_6"></div>

            <div className="name"></div>
            <div className="v151_22"></div>
            <div onClick={() => {handleShowMoreBtn()}} className="v151_78"></div>
            <span className="v151_79">ÖvningNamn</span>
            <div className="v151_80"></div>
            <div className="v151_81"></div>
            <div className="v151_74"></div>
            <span className="v151_75">ÖvningNamn</span>
            <div className="v151_76"></div>
            <div className="v151_77"></div>
            <div className="name"></div>
            <div className="v151_413"></div>
            <div className="v151_414"></div>
            <div className="v151_415"></div>
            <div className="v151_416"></div>
            <div className="v196_1"></div>
            <span className="v196_2">mark all </span>
            <div className="v242_2"></div>
            <div className="v242_3"></div>
            <div className="name"></div>
            <div className="name"></div>
            <span className="v242_6">Välj pass</span>
        </div>
    );

}
export default DailyWorkoutOverview;
