import React from 'react'
import Datatables from "react-data-table-component"
const Datatable = ({columns,data}) => {
  return (
    <Datatables columns={columns} data={data} />
  )
}

export default Datatable