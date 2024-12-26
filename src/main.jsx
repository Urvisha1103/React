import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Component1 from "./componentFolder/component1";
//import InputTest from "./componentFolder/component3";
import TimeTable from "./componentFolder/component4";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1 />  */}
    {/* <InputTest /> */}
    <TimeTable />
  </StrictMode>,
);
