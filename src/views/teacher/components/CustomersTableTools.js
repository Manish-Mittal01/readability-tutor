import React, { useRef } from 'react'
import { Button,Tooltip } from 'components/ui'
import { getCustomers, setTableData, setFilterData } from 'store/readability/readabilitySlice'
import CustomerTableSearch from './CustomerTableSearch'
import CustomerTableFilter from './CustomerTableFilter'
import { openEditCustomerBooksDialog } from 'store/readability/readabilitySlice'
import ReadabilityDrawer from 'common/ReadabilityDrawer'
import { MdSmartphone ,MdPostAdd ,MdListAlt ,MdAdd,MdFilterAlt,MdAutorenew} from 'react-icons/md';
import { Link } from 'react-router-dom'
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
		if(typeof val === 'string' && val?.length > 1) {
			fetchData(newTableData)
		}

		if(typeof val === 'string' && val?.length === 0) {
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
	const handleShowMoreDetail = (contentType) => {
		const contentObj={ contentType  }
		   dispatch(openEditCustomerBooksDialog(contentObj))
		
	   }
	return (
	<>
		<ReadabilityDrawer  />
		<div className="lg:flex xl:flex items-center justify-between mb-4">
			<div className="justify-center flex flex-wrap lg:flex xl:flex md:flex items-center gap-2">
				<div className='flex items-center justify-center'>
					<h5 className="">Teacher</h5>
					<div className='px-1'>|</div>
					<span className="text-dark-50 font-weight-bold _SearchTotalCountBox">
						<span className="text-[#7E8299] mr-1">24 Total</span>  
						<span className="text-[#3699FF]">(in 20.01 sec)
						</span>
					</span>
				</div>
				<div className='flex items-center justify-center py-2'>
					<CustomerTableSearch className="" ref={inputRef} onInputChange={handleInputChange} />
					<div className='md:flex'>
						<Button className="mx-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdFilterAlt />} />	
					
						<Button className="mr-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdAutorenew />} />
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
				<Tooltip  title={'Add Teacher using Page'} wrapperClass="mr-1">
				<Link 
					className="block lg:inline-block md:mb-0 mb-4"
					to="/add-teacher" 
					> 
					<div className='flex text-[#3699FF] bg-[#E1F0FF] mr-2 cursor-pointer'>
						<div>	
							<Button className="hover:text-[#3699FF] hover:bg-[#E1F0FF] text-[#3699FF]" shape="normal" variant="plain" size="sm" icon={<MdAdd />}/>
						</div>
						<div className='pt-2 mr-2 font-bold'>
							<span className='mt-2'>Add Teacher</span>
						</div>
			
					</div>
				</Link>
				</Tooltip>
				<Tooltip  title={'Add Teacher using Panel'} wrapperClass="mr-1">
				<div onClick={() => handleShowMoreDetail('addteacher')} className='flex text-[#3699FF] bg-[#E1F0FF] mr-2 cursor-pointer'>
				    <div>	
						<Button className="hover:text-[#3699FF] hover:bg-[#E1F0FF] text-[#3699FF]" shape="normal" variant="plain" size="sm" icon={<MdAdd />}/>
					</div>
					<div className='pt-2 mr-2 font-bold'>
                    	<span className='mt-2'>Add Teacher</span>
					</div>
				</div>
				</Tooltip>
			
			</div>
		</div>
	</>
	)
}

export default CustomersTableTools