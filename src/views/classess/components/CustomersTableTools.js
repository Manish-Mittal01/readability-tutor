import React, { useRef } from 'react'
import { Button ,Tooltip} from 'components/ui'
import { getCustomers, setTableData, setFilterData } from 'store/readability/readabilitySlice'
import CustomerTableSearch from './CustomerTableSearch'
import { MdListAlt ,MdFilterAlt,MdAutorenew} from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'

const CustomersTableTools = () => {

	const dispatch = useDispatch()

	const inputRef = useRef()

	const tableData = useSelector((state) => state?.readability?.tableData)

	const handleInputChange = (val) => {
		const newTableData = cloneDeep(tableData)
		newTableData.query = val
		newTableData.pageIndex = 1
		if(typeof val === 'string' && val.length > 1) {
			fetchData(newTableData)
		}

		if(typeof val === 'string' && val.length === 0) {
			fetchData(newTableData)
		}
	}

	const fetchData = data => {
		dispatch(setTableData(data))
		dispatch(getCustomers(data))
	}

	const onClearAll = () => {
		const newTableData = cloneDeep(tableData)
		newTableData.query = ''
		inputRef.current.value = ''
		dispatch(setFilterData({status: ''}))
		fetchData(newTableData)
	}

	return (
		<div className="lg:flex xl:flex items-center justify-between mb-4">
			<div className="justify-center flex flex-wrap lg:flex xl:flex md:flex items-center gap-2">
				<div className='flex items-center justify-center'>
					<h5 className="">Classes</h5>
					<div className='px-1'>|</div>
					<span className="text-dark-50 font-weight-bold _SearchTotalCountBox">
						<span className="text-[#7E8299] mr-1">12 Total</span>  
						<span className="text-[#3699FF]">(in 0.047 sec)
						</span>
					</span>
				</div>
				<div className='flex items-center justify-center py-2'>
					<CustomerTableSearch className="" ref={inputRef} onInputChange={handleInputChange} />
				
					<div className='md:flex'>
					<Tooltip title={'Filter'} wrapperClass="mr-1"><Button className="mx-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdFilterAlt />} />	
					</Tooltip>
						<Button className="mr-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdAutorenew />} />
						<Button className="lg:invisible xl:invisible bg-[#F3F6F9] text-[#FFA800]" shape="normal" variant="plain" size="sm" icon={<MdListAlt />} />
					</div>
			</div>
			</div>
			<div className="flex items-center justify-center">
			
				<div className='mr-2 hide-on-mobile'>
				<Button className="invisible md:visible lg:visible xl:visible bg-[#F3F6F9] text-[#FFA800]" shape="normal" variant="plain" size="sm" icon={<MdListAlt />} />
				</div>
				
			</div>
		</div>
	)
}

export default CustomersTableTools