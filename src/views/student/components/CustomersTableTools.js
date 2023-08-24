import React, { useRef,useState } from 'react'
import { Button ,Tooltip,Select,Avatar} from 'components/ui'
import { getCustomers, setStudentTableData, setStudentFilterData } from 'store/readability/readabilitySlice'
import CustomerTableSearch from './CustomerTableSearch'
import { openEditCustomerBooksDialog } from 'store/readability/readabilitySlice'
import ReadabilityDrawer from 'common/ReadabilityDrawer'
import { Link } from 'react-router-dom'
import { MdSmartphone ,MdPostAdd ,MdListAlt ,MdAdd,MdFilterAlt,MdAutorenew} from 'react-icons/md';
import { HiCheck } from 'react-icons/hi'
import { components } from 'react-select'

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
		console.log('student',dispatch(getCustomers(data)));
	}

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
	
	const [toggle, setToggle] = useState(false)
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
					<Tooltip title={'Filter'} wrapperClass="mr-1">	<Button onClick={() => setToggle(!toggle)}  className="mx-2 bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdFilterAlt />} />	
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
				<Button  className="bg-[#F3F6F9] text-[#FFA800]" shape="normal" variant="plain" size="sm" icon={<MdListAlt />} />
				</div>
				<div className='mr-2'>
				<Button className="bg-[#F3F6F9] text-[#B5B5C3]" shape="normal" variant="plain" size="sm" icon={<MdSmartphone />} />
				
				</div>
				<Tooltip  title={'Add Student using Page'} wrapperClass="mr-1">
				<Link 
						className="block lg:inline-block md:mb-0 mb-4"
						to="/add-student" 
						> 
				<div className='cursor-pointer flex text-[#3699FF] bg-[#E1F0FF] mr-2'>
				    <div>	
					<Button className="hover:text-[#3699FF] hover:bg-[#E1F0FF] text-[#3699FF]" shape="normal" variant="plain" size="sm" icon={<MdAdd />}/>
					</div>
					<div className='pt-2 mr-2 font-bold'>
                    <span className='mt-2'>Add Student</span>
					</div>
					
				
				</div>
				</Link>
				</Tooltip>
				<Tooltip  title={'Add Student using Panel'} wrapperClass="mr-1">
				<div onClick={() => handleShowMoreDetail('addstudent')} className='cursor-pointer flex text-[#3699FF] bg-[#E1F0FF] mr-2'>
				    <div>	
					<Button className="hover:text-[#3699FF] hover:bg-[#E1F0FF] text-[#3699FF]" shape="normal" variant="plain" size="sm" icon={<MdAdd />}/>
					</div>
					<div className='pt-2 mr-2 font-bold'>
                    <span className='mt-2'>Add Student</span>
					</div>
					
				
				</div>
				</Tooltip>
			
			</div>
		</div>
		{toggle && (
			<div className="lg:flex xl:flex items-center justify-between mb-4">
				<div>
				<lable>Student Id</lable>
			<CustomerTableSearch className="" placeholder ="Student Id" ref={inputRef} onInputChange={handleInputChange} />

				</div>
				<div>
				<lable>Student</lable>
			<CustomerTableSearch className="" placeholder ="Student" ref={inputRef} onInputChange={handleInputChange} />
				</div>
			<div>
			<lable>Teacher</lable>
			<CustomerTableSearch className="" placeholder ="Teacher" ref={inputRef} onInputChange={handleInputChange} />
			</div>
			
		</div>
		 )}
		</>
	)
}

export default CustomersTableTools