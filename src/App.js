import logo from './logo.svg';
import './App.css';
// import CalendarComponent from './CalendarComponent';
// import CustomCalendar from './CustomCalendar';
import TmhCalendar from './TmhCalendar'


import Register from './Register';
import CalendarData from './CalendarData';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Emplisting from './Emplisting';

function App() {
  return (
    <div className="App">
    {/* <Register/> */}
    {/* <CalendarComponent/> */}
    {/* <calendarImage/> */}
    <TmhCalendar/>
    {/* <CalendarData/> */}
    {/* <Calendar/> */}
    {/* <CustomCalendar/> */}
    </div>
  );
  // <BrowserRouter>
  // <Routes>
  //   <Route path='/' element = {<Emplisting/>}></Route>  
  // </Routes>
  // </BrowserRouter>
}

export default App;
