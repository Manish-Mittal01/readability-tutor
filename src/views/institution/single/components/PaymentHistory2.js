import React, { useCallback,useEffect } from 'react'
import { Table } from 'components/ui'
import { getCustomers} from 'store/readability/readabilitySlice'
import Students from 'common/Students'
import { useSelector,useDispatch } from 'react-redux'
import {HiOutlineArrowsExpand } from 'react-icons/hi';
import {  Button } from 'components/ui'
const { Tr, Th, Td, THead, TBody, Sorter } = Table


const PaymentHistory = (props) => {

	const expandTable = (e) => {
		props.handleChangeGrid(e);
	  
	   
	  }

	  const data = useSelector((state) => state?.readability?.customerList)
	  const studentFilterData = useSelector((state) => state?.readability?.studentFilterData)
		const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.studentTableData)
		const dispatch = useDispatch()
	

		const fetchData = useCallback(() => {
			dispatch(getCustomers({pageIndex, pageSize, sort, query, studentFilterData}))
		}, [pageIndex, pageSize, sort, query, studentFilterData, dispatch])

		useEffect(() => {
			fetchData()
		}, [fetchData, pageIndex, pageSize, sort, studentFilterData,window.location.href])

	

	return (
		<div className="mb-8">
				<div className='flex items-center justify-between'>
				<div>
				<h6 className="mb-4">Students</h6>
				</div>
				<div>
				<Button onClick={expandTable} shape="circle" variant="plain" size="md" icon={<HiOutlineArrowsExpand />} />

				</div>
			</div>
		
			
			<Students data={data}/>
		</div>
	)
}

export default PaymentHistory
