import React, { useRef,useState } from 'react'
import { Button,Tooltip,Avatar } from 'components/ui'
import { getCustomers, setTableData } from 'store/readability/readabilitySlice'
import CustomerTableSearch from './CustomerTableSearch'
import { MdListAlt ,MdAdd,MdFilterAlt,MdAutorenew} from 'react-icons/md';
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
					{/* <CustomerTableFilter /> */}
					<div className='md:flex'>
					<Tooltip title={'Filter'} wrapperClass="mr-1"><Button onClick={() => setToggle(!toggle)} className="mx-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdFilterAlt />} />	
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
	{toggle && (
			<div className="lg:flex xl:flex items-center justify-between mb-4">
				<div>
				<lable>Teacher</lable>
			<CustomerTableSearch className="" placeholder ="Teacher" ref={inputRef} onInputChange={handleInputChange} />

				</div>

			<div>

			<lable>School</lable>
			<CustomerTableSearch className="" placeholder ="School" ref={inputRef} onInputChange={handleInputChange} />
			</div>
			
		

			<div>
			<lable>District</lable>
			<CustomerTableSearch className="" placeholder ="District" ref={inputRef} onInputChange={handleInputChange} />
			</div>

			<div>
			<lable>State</lable>
			<CustomerTableSearch className="" placeholder ="State" ref={inputRef} onInputChange={handleInputChange} />
			</div>

			
		</div>
		 )}
	</>
	)
}

export default CustomersTableTools