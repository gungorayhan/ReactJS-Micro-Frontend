import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { data, columns } from "./data/data";

import "./index.scss";
import Header from "./components/Header";
import Datatable from "./components/Datatable";
import addRow from "./utils/addRow";

const App = () => {
const [allData,setAllData]=useState(data);

useEffect(() => {
if(data){
  setAllData(data);
}
}, [])

return ( <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <button onClick={()=>addRow(allData,setAllData,{
      id:allData.length+1,
      title:'FunctionData',
      year:'1984',
      model:'2023',
      section:'function'
    })} className="border px-3 text-sm cursor-pointer hover:bg-gray-100">Ekle</button>
    <Datatable data={allData} columns={columns}/>
    <div>Name: ankara</div>
  </div>)
};
ReactDOM.render(<App />, document.getElementById("app"));
