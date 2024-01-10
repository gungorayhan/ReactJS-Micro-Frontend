import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// import Header from "ankara/Header";
//yüklü ve zor yüklenen durumlarında loading göstemrek istediğimiz durumda lazy ile import işlemi gerçekleştiririz

const Header = React.lazy(() => import("ankara/Header"))
const Datatable = React.lazy(() => import("ankara/Datatable"))
import { data, columns } from "./data/data";
import addRow from "ankara/addRow"

const App = () => {
const [allData,setAllData]=useState(data)

useEffect(()=>{
  if(data){
    setAllData(data);
  }
},[])
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading</div>}>
        <Header />
        <button onClick={()=>addRow(allData,setAllData,{
      id:allData.length+1,
      title:'FunctionDataIstanbul',
      year:'1984',
      model:'2023',
      section:'function'
    })} className="border px-3 text-sm cursor-pointer hover:bg-gray-100">Ekle</button>
        <Datatable data={allData} columns={columns} />
      </Suspense>
      <div>Name: istanbul</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
