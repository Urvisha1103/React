import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Component1 from "./componentFolder/component1";
//import InputTest from "./componentFolder/component3";
//import TimeTable from "./componentFolder/component4";
// import StateABC from "./lec3012/statement1";
// import StateXYZ from './lec3012/statement2';
import StateMerge from './lec3012/statement3';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1 />  */}
    {/* <InputTest /> */}
    {/* <TimeTable /> */}
    {/* <StateABC /> */}
    {/* <StateXYZ/> */}
    <StateMerge/>
  </StrictMode>,
);
