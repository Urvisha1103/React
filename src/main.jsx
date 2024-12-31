import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Component1 from "./componentFolder/component1";
//import InputTest from "./componentFolder/component3";
//import TimeTable from "./componentFolder/component4";
// import StateABC from "./lec3012/statement1";
// import StateXYZ from './lec3012/statement2';
// import StateMerge from './lec3012/statement3';
// import MyComponent from './lec3112/combined';
import Purefunct from './lec3112/purefunct';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1 />  */}
    {/* <InputTest /> */}
    {/* <TimeTable /> */}
    {/* <StateABC /> */}
    {/* <StateXYZ/> */}
    {/* <StateMerge/> */}
    {/* <MyComponent/> */}
    <Purefunct abc={true} xyz={"Hello"} />
    <Purefunct abc={false} xyz={"How"} />
    <Purefunct abc={true} xyz={"Are You"} />
  </StrictMode>,
);
