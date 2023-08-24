import React, { useState }  from 'react'
import { Table, Badge } from 'components/ui'
import { useTable, useSortBy } from 'react-table'
import { useSelector } from 'react-redux'
import { MdModeEdit } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaFileImport } from 'react-icons/fa';
import { HiAcademicCap,HiOutlineArrowsExpand } from 'react-icons/hi';
import { MdMenuBook } from 'react-icons/md';
import {  Button,Avatar } from 'components/ui'

const { Tr, Th, Td, THead, TBody, Sorter } = Table


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
			//console.log('rowww teachher',row);	
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
			
				<span  className="font-bold">Books</span>
				
			)
		},
		accessor: 'bookName',
		Cell: props => {
			const row = props?.row?.original
			//console.log('book url',row.bookImage);
			return (
				<div className="flex">
				<div className=" cursor-pointer mr-2 box-border flex justify-center items-center h-10 w-10 border-2  uppercase">								
					<Avatar size={30} shape=" normal" src={row?.bookImage} />
					</div>
				<div className="cursor-pointer">
				
					<span  className="font-bold w-full">{ row?.bookName }</span>
					<div  className="flex">
					
					<div className="">
					
						 { row?.bookAuthor }  
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
				
				<span  className="font-bold">Institution</span>
				
			)
		},
		accessor: 'status',
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					{ row?.institution }
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">District</span>
				</div>	
			)
		},
		accessor: 'district',
		sortable: true,
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.district }</span>
				</div>
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">State</span>
				</div>	
			)
		},
		accessor: 'state',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.state }</span>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Country</span>
				</div>	
			)
		},
		accessor: 'country',
		sortable: true,
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.country }</span>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Students</span>
				</div>	
			)
		},
		accessor: 'students',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 border-2 bg-cyan-100 uppercase">
					{ row?.student }			
				</div>
	
			)
		},
	},

	
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="xs" icon={<MdMenuBook />} />
				</div>	
			)
		},
		accessor: 'books',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 border-2 bg-cyan-100 uppercase">
					{ row?.books }			
				</div>
	
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">classess</span>
				</div>	
			)
		},
		accessor: 'classess',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
			
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 border-2 bg-cyan-100 uppercase">

            { row?.class }
				
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Date Created</span>
				</div>	
			)
		},
		accessor: 'created_date',
		sortable: false,
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 border-2 bg-cyan-100 uppercase">
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
		accessor: 'stats',
		Cell: props => {
			const row = props?.row?.original
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
		id: 'action',
		accessor: (row) => row,
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
				
				<Button  shape="circle" variant="plain" size="md" icon={<MdEmail />} />
				<Button shape="circle" variant="plain" size="md" icon={<HiAcademicCap />} />
			
				<Button shape="circle" variant="plain" size="md" icon={<FaFileImport />} />
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
	//console.log('single teacher',data);
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
				<h6 className="mb-4">Books</h6>
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
