import React, { useState,useCallback,useEffect,useMemo } from 'react'
import { Table, Badge ,Tooltip} from 'components/ui'
import { useTable, useSortBy } from 'react-table'
import { Segment } from 'components/ui';
import { DatePicker } from 'components/ui'
import Students from 'common/Students'
import { getCustomers,setStudentTableData} from 'store/readability/readabilitySlice'
import CustomersTableToolsSingle from 'views/teacher/components/CustomersTableToolsSingle'
import NumberFormat from 'react-number-format'
import { useSelector,useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import { MdMenuBook ,MdModeEdit,MdEmail,MdOutlineStackedBarChart,MdHelpOutline,MdPostAdd,MdListAlt,MdFilterAlt} from 'react-icons/md';
import {HiOutlineArrowsExpand } from 'react-icons/hi';
import {  Button } from 'components/ui'
import { Link } from 'react-router-dom'
const { Tr, Th, Td, THead, TBody, Sorter } = Table

const getRandomObject = () => {
	const array = [{bg: "#FFF4DE", color: "#FFA800"},{bg: "#C9F7F5", color: "#1BC5BD"},{bg: "#EEE5FF", color: "#8950FC"},{bg: "#FFF4DE", color: "#FFA800"},{bg: "#FFF4DE", color: "#FFA800"},{bg: "#FFF4DE", color: "#FFA800"}]
	const randomObject = array[Math.floor(Math.random() * array.length)];
	return randomObject;
  }

  


const columns = [
	{
		Header: props => {			
			return (
				
		<span  className="font-bold" style={{color: "#00c3b8"}}>ID</span>
			
			)
		},
		accessor: 'id',
		Cell: props => {
			const row = props.row.original
			return (
				<div>
					<span className="cursor-pointer">{row.id}</span>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				
		<span  className="font-bold">Student</span>
					
			)
		},
		accessor: 'item',
		Cell: props => {
			const row = props?.row.original
		    const color = getRandomObject()
			let bgcolor= color?.bg
			let boxColor = color?.color
			return (
				<div className="flex">
					<Link to={`/student/15`}>
				<div className="cursor-pointer mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }}>
						{ row?.name?.charAt(0) }
					</div>
					</Link>
				<div className="">
								
				
				  <span  className="font-bold w-full">{ row?.name }</span>
				
					<div  className="flex">
					<div className="">
					<Button shape="circle" variant="plain" size="xs" icon={<MdEmail />} />
					</div>
					<div className="">
				
					{ row?.email }
					</div>
					</div>
				</div>
			
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				
		<Button shape="circle" variant="plain" size="xs" icon={<MdMenuBook />} />
				
			)
		},
		id: 'reading-book',
		accessor:'readingbook',
		Cell: props => {
			const row = props?.row?.original
			const color = getRandomObject()
			let bgcolor= color?.bg
			let boxColor = color?.color
			return (
				<div className="mr-2 box-border flex justify-center items-center  h-10 w-10  uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>
				{ row?.books }	
				
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				
			<span className="font-bold">Age</span>
				
			)
		},
		accessor: 'age',
		Cell: props => {
			const row = props?.row.original
			const color = getRandomObject()
			let bgcolor= color?.bg
			let boxColor = color?.color
			return (
				<div className="mr-2 box-border flex justify-center items-center  h-10 w-10  uppercase borderClass">
				{ row?.age }	
				</div>
				
	             
			)
		},
	},
	{
		Header: props => {			
			return (
				
		<span className="font-bold">Grade</span>
				
			)
		},
		accessor: 'grade',
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="mr-2 justify-center items-center  h-10 w-10  uppercase borderClass">
				{ row?.grade }
				
				</div>
				
	             
			)
		},
	},
	{
		Header: props => {			
			return (
			
		<span className="font-bold">Pending Days</span>
				
			)
		},
		accessor: 'pedning-days',
		Cell: props => {
		
			return (
				<>
				<div className="flex items-center">
					
				<div className="segment">
				<button className="segment-item segment-item-default h-9 px-3 py-2 text-sm">M
				</button>
				<button className="segment-item segment-item-default segment-item-active h-9 px-3 py-2 text-sm">T</button>
				<button className="segment-item segment-item-default h-9 px-3 py-2 text-sm">W
				</button>
				<button style={{background: "#00c3b8"}} className="segment-item segment-item-default h-9 px-3 py-2 text-sm">T</button>
				<button style={{background: "#00c3b8"}} className="segment-item segment-item-default h-9 px-3 py-2 text-sm">F</button>
				<button className="segment-item segment-item-default h-9 px-3 py-2 text-sm">S</button>
				<button className="segment-item segment-item-default h-9 px-3 py-2 text-sm">S</button>
				</div>
            </div>
						
		   20 Min(s)/Day @ 10:30 PM
		   </>
	             
			)
		},
	},
	
	{
		Header: props => {			
			return (
				<div className="flex items-center">
			<span className="font-bold">Signup Date</span>
				</div>	
			)
		},
		accessor: 'signupdate',
		sortable: false,
		Cell: props => {
			const row = props?.row?.original
		
			const color = getRandomObject()
			let bgcolor= color?.bg
			let boxColor = color?.color
			return (
				<div className="flex justify-center items-center uppercase">
					{ row?.signup_date }			
				</div>
	
			)
		},
	},
	
	{
		Header: props => {			
			return (
				
		<span className="font-bold">Active</span>
					
			)
		},
		accessor: 'act',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
				
				<label className="switch">
				<input type="checkbox" id="" name="allselect" value="" className='text-red-300'></input>
				<span className="slider round"></span>
				</label>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				
			<span className="font-bold">Actions</span>
				
			)
		},
		accessor: 'actions',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
				<Tooltip title={'Send Report'} wrapperClass="mr-1">
				<Button shape="circle" variant="plain" size="md" icon={<MdOutlineStackedBarChart />} />
				</Tooltip>
				<Tooltip title={'Resend Welcome Email'} wrapperClass="mr-1"><Button shape="circle" variant="plain" size="md" icon={<MdEmail />} />
				</Tooltip>
				<Tooltip title={'Edit'} wrapperClass="mr-1">
				<Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} />
				</Tooltip>
				</div>
			)
		},
	},


]

const PaymentHistory = (props) => {
	const [timeRange, setTimeRange] = useState(['weekly']);
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

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }, useSortBy)

	return (
		<div className="mb-8">
				<div className='flex items-center justify-between'>
				<div>
				<h6 className="mb-4">Students</h6>
				</div>
		
			</div>
		
			<CustomersTableToolsSingle />
			<Table {...getTableProps()}>
				<THead>
					{headerGroups.map(headerGroup => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<Th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span>
										<Sorter sort={column.isSortedDesc}/>
									</span>
								</Th>
							))}
						</Tr>
					))}
				</THead>
				<TBody {...getTableBodyProps()}>
					{rows.map(
						(row, i) => {
						prepareRow(row)
						return (
							<Tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
									<Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
									)
								})}
							</Tr>
						)}
					)}
				</TBody>
			</Table>
		
		</div>
	)
}

export default PaymentHistory
