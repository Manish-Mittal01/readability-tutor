import React, { useEffect, useCallback, useMemo } from 'react'
import { Avatar } from 'components/ui'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers, setTableData } from '../store---/dataSlice'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from '../store---/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
import { MdPerson } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { MdEmail,MdOpenInFull } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import {  Button } from 'components/ui'
import { Link } from 'react-router-dom'
// import dayjs from 'dayjs'
import cloneDeep from 'lodash/cloneDeep'


const ActionColumn = ({row}) => {
	const { textTheme } = useThemeClass()
	const dispatch = useDispatch()

	const onEdit = () => {
		dispatch(setDrawerOpen())
		dispatch(setSelectedCustomer(row))
	}

	return (
		<div 
			className={`${textTheme} cursor-pointer select-none font-semibold`}
			onClick={onEdit}
		>
			Edit
		</div>
	)
}



const columns = [

	{
		Header: props => {			
			return (
				<div className="flex items-center">
					  <input type="checkbox" id="" name="id" value=""></input>
				</div>	
			)
		},
		id: 'checkbox',
		accessor:'checkbox',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					  <input type="checkbox" id="" name="" value=""></input>
				
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span  className="font-bold" style={{color: "#00c3b8"}}>ID</span>
				</div>	
			)
		},
		accessor: 'id',
		Cell: props => {
			const row = props.row.original
			return (
				<div>
					<span className="cursor-pointer">{ row?.id }</span>
				</div>
			)
		},
	},

	{

		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Institution</span>
				</div>	
			)
		},
		accessor: 'institution',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
				<div className="box-border h-7 w-7 py-1 px-2 border-2 bg-cyan-100">
					 M	
				</div>
				<div className="">
					<span className="font-bold w-full">{ row?.name }</span>
				</div>
			
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Access</span>
				</div>	
			)
		},
		accessor: 'access',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex">
				<div className="box-border h-7 w-7 py-1 px-2 border-2 bg-cyan-100">
					 M	
				</div>
				<div className="">
				
					<span className="font-bold w-full">{ row?.name }</span>
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
				<div className="flex items-center">
						<span className="font-bold">Country</span>
				</div>	
			)
		},
		accessor: 'country',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">India</span>
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
					
					<span className="ml-2 rtl:mr-2 capitalize">Rajasthan</span>
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
			const row = props.row.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">jaipur</span>
				</div>
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Teachers</span>
				</div>	
			)
		},
		accessor: 'teachers',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="box-border h-7 w-7 py-1 px-2 border-2 bg-cyan-100">
					 2
				
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
				<div className="box-border h-7 w-7 py-1 px-2 border-2 bg-cyan-100">
					1				
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
			
				<div className="box-border h-7 w-7 py-1 px-2 border-2 bg-cyan-100">

				    0
				
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Actions</span>
				</div>	
			)
		},
		id: 'action',
		accessor: (row) => row,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
				
				<Button shape="circle" variant="plain" size="xs" icon={<MdPerson />} />
				<Button shape="circle" variant="plain" size="xs" icon={<MdModeEdit />} />
				<Button shape="circle" variant="plain" size="xs" icon={<MdDelete />} />
				</div>
			)
		},
	},
]


const Customers = () => {

	const dispatch = useDispatch()
	const data = useSelector((state) => state.crmCustomers.data.customerList)
	const loading = useSelector((state) => state.crmCustomers.data.loading)
	const filterData = useSelector((state) => state.crmCustomers.data.filterData)

	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.crmCustomers.data.tableData)

	const fetchData = useCallback(() => {
		dispatch(getCustomers({pageIndex, pageSize, sort, query, filterData}))
	}, [pageIndex, pageSize, sort, query, filterData, dispatch])

	useEffect(() => {
		fetchData()
	}, [fetchData, pageIndex, pageSize, sort, filterData])

	const tableData = useMemo(() => 
		({pageIndex, pageSize, sort, query, total}), 
	[pageIndex, pageSize, sort, query, total])

	const onPaginationChange = page => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageIndex =  page
		dispatch(setTableData(newTableData))
	}

	const onSelectChange = value => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageSize =  Number(value)
		newTableData.pageIndex = 1
		dispatch(setTableData(newTableData))
	}

	const onSort = (sort, sortingColumn) => {
		const newTableData = cloneDeep(tableData)
		newTableData.sort = sort
		dispatch(setTableData(newTableData))
		dispatch(setSortedColumn(sortingColumn))
	}
	
	return (
		<>
			<DataTable
				columns={columns} 
				data={data}
				skeletonAvatarColumns={[0]}
				skeletonAvatarProps={{width: 28, height: 28 }}
				loading={loading}
				pagingData={{ pageIndex, pageSize, sort, query, total }}
				onPaginationChange={onPaginationChange}
				onSelectChange={onSelectChange}
				onSort={onSort}
			/>
			<CustomerEditDialog />
		</>
	)
}

export default Customers
