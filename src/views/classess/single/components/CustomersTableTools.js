import React, { useRef } from 'react'
import { Button ,Tooltip} from 'components/ui'
import { getCustomers, setStudentTableData, setStudentFilterData } from 'store/readability/readabilitySlice'
import CustomerTableSearch from './CustomerTableSearch'
import { MdSmartphone ,MdPostAdd ,MdListAlt ,MdAdd,MdFilterAlt,MdAutorenew} from 'react-icons/md';
import CustomerTableFilter from './CustomerTableFilter'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'

const CustomersTableTools = () => {

	const dispatch = useDispatch()

	const inputRef = useRef()

	const studentTableData = useSelector((state) => state?.readability?.studentTableData)

	const handleInputChange = (val) => {
		const newTableData = cloneDeep(studentTableData)
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
		dispatch(setStudentTableData(data))
		dispatch(getCustomers(data))
	}

	const onClearAll = () => {
		const newTableData = cloneDeep(studentTableData)
		newTableData.query = ''
		inputRef.current.value = ''
		dispatch(setStudentFilterData({status: ''}))
		fetchData(newTableData)
	}

	return (
		<div className="lg:flex xl:flex items-center justify-between mb-4">
			<div className="justify-center flex flex-wrap lg:flex xl:flex md:flex items-center gap-2">
				<div className='flex items-center justify-center'>
					<h5 className="">Student</h5>
					<div className='px-1'>|</div>
					<span className="text-dark-50 font-weight-bold _SearchTotalCountBox">
						<span className="text-[#7E8299] mr-1">204 Total</span>  
						<span className="text-[#3699FF]">(in 12.13 sec)
						</span>
					</span>
				</div>
				<div className='flex items-center justify-center py-2'>
					<CustomerTableSearch className="" ref={inputRef} onInputChange={handleInputChange} />
					<div className='md:flex'>
					<Tooltip title={'Filter'} wrapperClass="mr-1">	<Button className="mx-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdFilterAlt />} />	
					</Tooltip>
					<Tooltip title={'Clear Filter'} wrapperClass="mr-1">
						<Button className="mr-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdAutorenew />} />
						</Tooltip>
					</div>
			</div>
			</div>
			<div className="flex items-center justify-center">
				<div className='mr-2'>
				<Button className="bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdPostAdd />} />
				</div>
				<div className='mr-2'>
				<Button className="bg-[#F3F6F9] text-[#FFA800]" shape="normal" variant="plain" size="sm" icon={<MdListAlt />} />
				</div>
				<div className='mr-2'>
				<Button className="bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdSmartphone />} />
				
				</div>
				<div className='flex text-[#3699FF] bg-[#E1F0FF] mr-2'>
				    <div>	
					<Button className="text-[#3699FF]" shape="normal" variant="plain" size="sm" icon={<MdAdd />}/>
					</div>
					<div className='pt-2 mr-2 font-bold'>
                    <span className='mt-2'>Add Student</span>
					</div>
		
				</div>
				
			</div>
		</div>
	)
}

export default CustomersTableTools