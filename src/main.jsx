import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageChanger from './lec2001/hookimage';
// import ListSimulation from './lec1801/hookArray';
// import CountdownTimer from './lec1801/hooktimer';
// import StateExample3 from './lec0601/hookexmp3';
// import ApiSimulation from './lec1801/hookuseeffect';
// import StateExample2 from './lec0601/hookexmp2';
// import FuncComp1 from './lec3112/hookcomp1';
// import StateExample from './lec0601/hookexmp';
//import Component1 from "./componentFolder/component1";
//import InputTest from "./componentFolder/component3";
//import TimeTable from "./componentFolder/component4";
// import StateABC from "./lec3012/statement1";
// import StateXYZ from './lec3012/statement2';
// import StateMerge from './lec3012/statement3';
// import MyComponent from './lec3112/combined';
// import Purefunct from './lec3112/purefunct';
// import MyButton3 from './lec3112/purefunct2';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1 />  */}
    {/* <InputTest /> */}
    {/* <TimeTable /> */}
    {/* <StateABC /> */}
    {/* <StateXYZ/> */}
    {/* <StateMerge/> */}
    {/* <MyComponent/> */}
    {/* <Purefunct abc={true} xyz={"Hello"} />
    <Purefunct abc={false} xyz={"How"} />
    <Purefunct abc={true} xyz={"Are You"} /> */}
    {/* <MyButton3 /> */}
    {/* <MyButton3 abc={true} def={"You"} />
    <MyButton3 abc={true} />
    <MyButton3 def={"World"} /> */}
    {/* <FuncComp1 /> */}
    {/* <StateExample /> */}
    {/* <StateExample2/> */}
    {/* <StateExample3/> */}
    {/* <ApiSimulation/> */}
    {/* <CountdownTimer /> */}
    {/* <ListSimulation /> */}
    <ImageChanger />
  </StrictMode>,
);
