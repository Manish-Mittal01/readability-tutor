import React, { useState,useEffect,useCallback,useMemo }  from 'react'
import { Table } from 'components/ui'
import Teachers from 'common/Ticket-details'
import { getTeachers } from 'store/readability/readabilitySlice'
import { useDispatch, useSelector } from 'react-redux'


const { Tr, Th, Td, THead, TBody, Sorter } = Table


const PaymentHistory = (props) => {

	const expandTable = (e) => {
		props.handleChangeGrid(e);
	  
	   
	  }
	  const dispatch = useDispatch()
	  const data = useSelector((state) => state?.readability?.teachersList)
	  const state = useSelector((state) => state)

	  const loading = useSelector((state) => state?.readability?.loading)
	  const filterData = useSelector((state) => state?.readability?.filterData)
  
	  const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.tableData)
  
	  const fetchData = useCallback(() => {
		  dispatch(getTeachers({pageIndex, pageSize, sort, query, filterData}))
	  }, [pageIndex, pageSize, sort, query, filterData, dispatch])
  
	  useEffect(() => {
		  fetchData()
	  }, [fetchData, pageIndex, pageSize, sort, filterData,window.location.href])

	  const tableData = useMemo(() => 
		({pageIndex, pageSize, sort, query, total}), 
	[pageIndex, pageSize, sort, query, total])

	return (
		<>	
		<div className="mb-8">
			<Teachers data={data}/>	
		</div>
		</>
	)
}

export default PaymentHistory
