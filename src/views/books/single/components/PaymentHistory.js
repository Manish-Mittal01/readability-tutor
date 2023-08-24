import React, { useState,useEffect,useCallback,useMemo }  from 'react'
import { Table } from 'components/ui'
import Teachers from 'common/Teachers'
import { getTeachers, setTableData } from 'store/readability/readabilitySlice'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import {  Button } from 'components/ui'

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
			
			<div className='flex items-center justify-between'>
				<div>
				<h6 className="mb-4">Teachers</h6>
				
				</div>
				<div>
				<Button onClick={expandTable} shape="circle" variant="plain" size="md" icon={<HiOutlineArrowsExpand />} />

				</div>
			</div>
		
			<Teachers data={data}/>
		
		
		</div>
		</>
	)
}

export default PaymentHistory
