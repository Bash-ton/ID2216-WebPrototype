import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ChooseSchedule from './components/chooseSchedule';
import DailyWorkoutOverview from './components/dailyWorkoutOverview';
import DetailedSchedule from './components/detailedSchedule';
import LoginPage from './components/loginPage';
import OvervieSchedule from './components/overviewSchedule';
import PremadeScheduleType from './components/premadeScheduleType';
import ScheduleType from './components/scheduleType';
import SinginPage from './components/signInPage';
import StatsView from './components/statsView';
import Tutorial from './components/tutorial';

class App extends Component {
  render(){
    return(
      <Router>
         <Route exact path = "/" component ={LoginPage}/>
        <Route exact path = "/choose-schedule" component ={ChooseSchedule}/>
        <Route exact path = "/daily-workout-overview" component ={DailyWorkoutOverview}/>
        <Route exact path = "/detailed-schedule" component ={DetailedSchedule}/>
        <Route exact path = "/overvie-schedule" component ={OvervieSchedule}/>
        <Route exact path = "/premade-scheduletype" component ={PremadeScheduleType}/>
        <Route exact path = "/schedule-type" component ={ScheduleType}/>
        <Route exact path = "/sing-in-page" component ={SinginPage}/>
        <Route exact path = "/stats-view" component ={StatsView}/>
        <Route exact path = "/tutorial" component ={Tutorial}/>
      </Router>
    );
  }
}

export default App;
