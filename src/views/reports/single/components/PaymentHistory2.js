import React from 'react'
import { Table, Badge } from 'components/ui'
import { useTable, useSortBy } from 'react-table'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { MdMenuBook } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import {HiOutlineArrowsExpand } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdOutlineStackedBarChart } from 'react-icons/md';
import {  Button } from 'components/ui'
import { Link } from 'react-router-dom'
const { Tr, Th, Td, THead, TBody, Sorter } = Table

const studentSinglePage = () => {

	window.location.href = "/student/15";

  }
  
const statusColor = {
	paid: 'bg-emerald-500',
	pending: 'bg-amber-400',
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
			const row = props.row.original
			return (
				<div className="flex">
				<div className="cursor-pointer mr-2 box-border flex justify-center items-center h-10 w-10 border-2 bg-cyan-100 uppercase">
						{ row?.name?.charAt(0) }
					</div>
				<div className="cursor-pointer">
								
				<Link to={`/student/15`}>
				  <span  className="font-bold w-full">{ row?.name }</span>
				  </Link>
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
			const row = props.row.original
			return (
				<div className="flex items-center">
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
			const row = props.row.original
			return (
				<div className="flex items-center">
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
			return (
				<div className="flex items-center">
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
		accessor: 'created_date',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase">
					{ row?.student }			
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
				
				<Button shape="circle" variant="plain" size="md" icon={<MdOutlineStackedBarChart />} />
				<Button shape="circle" variant="plain" size="md" icon={<MdEmail />} />
				<Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} />
				</div>
			)
		},
	},


]

const PaymentHistory = (props) => {

	const expandTable = (e) => {
		props.handleChangeGrid(e);
	  
	   
	  }
	const data = useSelector((state) => state?.readability?.paymentHistoryData)

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
				<div>
				<Button onClick={expandTable} shape="circle" variant="plain" size="md" icon={<HiOutlineArrowsExpand />} />

				</div>
			</div>
		
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
