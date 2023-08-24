import React, { useEffect } from 'react'
import { Table } from 'components/ui'
import Books from 'common/Books'
import { useSelector } from 'react-redux'
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import {  Button,Avatar } from 'components/ui'
const { Tr, Th, Td, THead, TBody, Sorter } = Table



const PaymentHistory = (props) => {
	useEffect(() => {
	
		
	}, [])

	const expandTable = (e) => {
		props.handleChangeGrid(e);
	  
	   
	  }

	const data = useSelector((state) => state?.readability?.paymentHistoryData)
	

	return (
		<div className="mb-8">
			<div className='flex items-center justify-between'>
				<div>
				<h6 className="mb-4">Books</h6>
				</div>
				<div>
				<Button onClick={expandTable} shape="circle" variant="plain" size="md" icon={<HiOutlineArrowsExpand />} />

				</div>
			</div>
		
		
			<Books data={data}/>
		</div>
	)
}

export default PaymentHistory
