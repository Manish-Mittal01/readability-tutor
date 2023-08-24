import React, {useState, useRef } from 'react'
import { Button ,Tooltip} from 'components/ui'
import { getCustomers, setTableData, setFilterData } from 'store/readability/readabilitySlice'
import CustomerTableSearch from './CustomerTableSearch'
import { MdHelpOutline ,MdKeyboardArrowDown,MdPostAdd ,MdListAlt ,MdAdd,MdFilterAlt,MdAutorenew} from 'react-icons/md';
import { DatePicker } from 'components/ui'
import { Select } from 'components/ui'
import { components } from 'react-select'
import { Segment } from 'components/ui';
import CustomerTableFilter from './CustomerTableFilter'
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
	const [timeRange, setTimeRange] = useState(['weekly']);
	const [repaint, setRepaint] = useState(false)

	const dateRangeValues = [
		{ value: 'Today', label: 'Today', color: '#00B8D9' },
		{ value: 'Yesterday', label: 'Yesterday', color: '#0052CC'},
		{ value: 'This week', label: 'This week', color: '#5243AA' },
		{ value: 'Last week', label: 'Last week', color: '#FF5630' },
		{ value: 'Last 7 Days', label: 'Last 7 Day', color: '#FF8B00' },
		{ value: 'This Month', label: 'This Month', color: '#FFC400' },
		{ value: 'Last Month', label: 'Last Month', color: '#36B37E' },
		{ value: 'Last 30 Days', label: 'Last 30 Days', color: '#00875A' },
		{ value: 'Last Quarter', label: 'Last Quarter', color: '#253858' },
		{ value: 'This Year', label: 'This Year', color: '#666666' },
		{ value: 'Last Year', label: 'Last Yearilver', color: '#666666' },
		{ value: 'Custom Date', label: 'Custom Date', color: '#666666' },
	  ]

	  const groupByValues = [
		{ value: 'Parent', label: 'Parent', color: '#00B8D9' },
		{ value: 'School', label: 'School', color: '#0052CC'},
		{ value: 'Country', label: 'Country', color: '#5243AA' },
		{ value: 'State', label: 'State', color: '#FF5630' },
		{ value: 'District', label: 'District', color: '#FF8B00' },
		{ value: 'Teacher', label: 'Teacher', color: '#FF8B00' },
		{ value: 'Grade', label: 'Grade', color: '#FF8B00' },
		
	  ]

	  const [toggle, setToggle] = useState(false)
	const countryOptions = [
		{ value: 'us', label: 'United State', imgPath: '/img/countries/us.png' },
		{ value: 'cn', label: 'China', imgPath: '/img/countries/cn.png' },
		{ value: 'jp', label: 'Japan', imgPath: '/img/countries/jp.png' },
		{ value: 'fr', label: 'French', imgPath: '/img/countries/fr.png' },
	]
	const { Control } = components
	return (
		<>
		<div className="md:flex flex-wrap lg:flex x:flex justify-between items-end py-4">
				<div className='pr-2'>
				    <div className='pb-2'>From Date</div>
					<DatePicker placeholder="01/17/2023" size="sm" />
				
					
				</div>
				<div className='pr-2'>
				<div className='pb-2'>To Date</div>
				<DatePicker placeholder="02/16/2023" size="sm" />
					
				</div>
				<div className='flex flex-wrap'>
				<div className='pr-2'>
				<div className='pb-2'>Date Range</div>
				<Select size="sm" className="" placeholder="This Month" options={dateRangeValues}></Select>
					
				</div>
			
			<div className='pr-2'>
				<div className='pb-2'>Group By </div>
				<Select 
				isMulti
				placeholder="Group By"
				size="sm"
				defaultValue={[groupByValues[5], groupByValues[6]]}
				options={groupByValues}
			/>
					
				</div>
			
				</div>
				
			</div>
		<div className="lg:flex xl:flex md:flex flex-wrap items-center justify-between mb-4">
			<div className="justify-center flex flex-wrap lg:flex xl:flex md:flex items-center gap-2">
				<div className='flex items-center justify-center'>
					<h5 className="">Student Report</h5>
					<div className='px-1'>|</div>
					<span className="text-dark-50 font-weight-bold _SearchTotalCountBox">
						<span className="text-[#7E8299] mr-1">34 Total</span>  
						<span className="text-[#3699FF]">(in 20.01 sec)
						</span>
					</span>
				</div>
				<div className='flex items-center justify-center py-2'>
					<CustomerTableSearch className="" ref={inputRef} onInputChange={handleInputChange} />
					{/* <CustomerTableFilter /> */}
					<div className='md:flex'>
					<Tooltip title={'Filter'} wrapperClass="mr-1"><Button onClick={() => setToggle(!toggle)} className="mx-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdFilterAlt />} />	
					</Tooltip>
					<Tooltip title={'Clear Filter'} wrapperClass="mr-1"><Button className="mr-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdAutorenew />} />
					</Tooltip>
					</div>
			</div>
			</div>
			<div className="flex items-center justify-center">
				
				<div className='mr-2'>
				<Button className="bg-[#F3F6F9] text-[#FFA800]" shape="normal" variant="plain" size="sm" icon={<MdListAlt />} />
				</div>
				
				<div className='flex text-[#3699FF] bg-[#E1F0FF] mr-2'>
				    <div className='mt-2 px-2 font-bold'>	
					 <span className='mt-2'>Actions</span>
					</div>
					<div className='mr-2 font-bold'>
                   
					<Button className="text-[#3699FF]" shape="normal" variant="plain" size="sm" icon={<MdKeyboardArrowDown />}/>
					</div>
					
				
				</div>
				
			</div>
		</div>
		{toggle && (
			<div className="lg:flex xl:flex items-center justify-between mb-4">
				<div>
				<lable>From Date</lable>
			<CustomerTableSearch className="" placeholder ="From Date" ref={inputRef} onInputChange={handleInputChange} />

				</div>

			<div>

			<lable>To Date</lable>
			<CustomerTableSearch className="" placeholder ="To Date" ref={inputRef} onInputChange={handleInputChange} />
			</div>
			
			
		</div>
		 )}
		</>
	)
}

export default CustomersTableTools