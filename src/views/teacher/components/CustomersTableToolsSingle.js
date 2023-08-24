import React, { useRef,useState } from 'react'
import { Button,Tooltip,Select,Avatar } from 'components/ui'
import { getCustomers, setTableData, setFilterData } from 'store/readability/readabilitySlice'
import CustomerTableSearch from './CustomerTableSearch'
import CustomerTableFilter from './CustomerTableFilter'
import { MdHelpOutline,MdSmartphone ,MdPostAdd ,MdListAlt ,MdAdd,MdFilterAlt,MdAutorenew} from 'react-icons/md';
import { DatePicker } from 'components/ui'
import { Segment } from 'components/ui';
import { HiCheck } from 'react-icons/hi'
import { components } from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'

const CustomersTableTools = () => {
	const [timeRange, setTimeRange] = useState(['weekly']);
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


	const [toggle, setToggle] = useState(false)
	const countryOptions = [
		{ value: 'us', label: 'United State', imgPath: '/img/countries/us.png' },
		{ value: 'cn', label: 'China', imgPath: '/img/countries/cn.png' },
		{ value: 'jp', label: 'Japan', imgPath: '/img/countries/jp.png' },
		{ value: 'fr', label: 'French', imgPath: '/img/countries/fr.png' },
	]
	const { Control } = components
	const CustomControl = ({ children, ...props }) => {
		const selected = props.getValue()[0]
		return (
			<Control {...props}>
				{selected && (
					<Avatar
						className="ltr:ml-4 rtl:mr-4"
						shape="circle"
						size={18}
						src={selected.imgPath}
					/>
				)}
				{children}
			</Control>
		)
	}
	

	const CustomSelectOption = ({ innerProps, label, data, isSelected }) => {
		return (
			<div
				className={`flex items-center justify-between p-2 ${
					isSelected
						? 'bg-gray-100 dark:bg-gray-500'
						: 'hover:bg-gray-50 dark:hover:bg-gray-600'
				}`}
				{...innerProps}
			>
				<div className="flex items-center">
					<Avatar shape="circle" size={20} src={data.imgPath} />
					<span className="ml-2 rtl:mr-2">{label}</span>
				</div>
				{isSelected && <HiCheck className="text-emerald-500 text-xl" />}
			</div>
		)
	}
	return (
		<>
		<div className="overflow-filter md:flex lg:flex xl:flex justify-between items-end py-4">
		<div className='pr-2'>
		<div className='pb-2'>From</div>
		<DatePicker placeholder="01/17/2023" size="sm" />

	
		</div>
		<div className='pr-2'>
		<div className='pb-2'>To</div>
		<DatePicker placeholder="02/16/2023" size="sm" />
	
		</div>
		<div className='flex mobile-wrap'>
		<div className='pr-2 mt-4'>

		<Segment 
			value={timeRange} 
			onChange={val => setTimeRange(val)} 
			size="sm"
		>
			<Segment.Item value="daily">View</Segment.Item>
			<Segment.Item className="bg-[#3699FF] text-white" value="daily">D</Segment.Item>
			<Segment.Item value="weekly">W</Segment.Item>
			<Segment.Item value="monthly">M</Segment.Item>
			<Segment.Item value="mon">Q</Segment.Item>
		</Segment> 
		</div>
		<div className='mobileSwitch lg:flex xl:flex mt-4 flex'>
		<div className='pr-2'>

		<Button className="bg-[#F3F6F9]" shape="normal" variant="plain" size="sm" icon={<MdHelpOutline />} />
		</div>
		<div className='swicherParent  mt-1 mr-2'>
		<label className="switch mb-1">
		<input type="checkbox" id="" name="allselect" value="Parent" className='text-red-300'></input>
		<span className="slider rounds"></span>
		</label>
		</div>
		<div className='flex'>

		<Button className="bg-[#F3F6F9] mr-2 text-[#FFA800]" shape="normal" variant="plain" size="sm" icon={<MdPostAdd />} />

		<Button  className="bg-[#F3F6F9] mr-2 text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdListAlt />} />	
		<Tooltip title={'Filter'} wrapperClass="mr-1">
		<Button onClick={() => setToggle(!toggle)} className="bg-[#F3F6F9] mr-2" shape="normal" variant="plain" size="sm" icon={<MdFilterAlt />} />
		</Tooltip>
		</div>
	</div>
	</div>
			
	</div>
	{toggle && (
			<div className="lg:flex xl:flex items-center justify-between mb-4">
				<div>
				<lable>Name</lable>
			<CustomerTableSearch className="" placeholder ="Name" ref={inputRef} onInputChange={handleInputChange} />

				</div>

			<div>

			<lable>Email</lable>
			<CustomerTableSearch className="" placeholder ="Email" ref={inputRef} onInputChange={handleInputChange} />
			</div>
			
		

			<div>
			<lable>Contact Phone No</lable>
			<CustomerTableSearch className="" placeholder ="Contact Phone No" ref={inputRef} onInputChange={handleInputChange} />
			</div>

			<div>
			<lable>Institution</lable>
			<CustomerTableSearch className="" placeholder ="Institution" ref={inputRef} onInputChange={handleInputChange} />
			</div>

			
		</div>
		 )}
	</>
	)
}

export default CustomersTableTools