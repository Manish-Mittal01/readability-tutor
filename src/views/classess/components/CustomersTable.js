import React, { useEffect, useCallback, useMemo } from 'react'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getClass, setTableData } from 'store/readability/readabilitySlice'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from 'store/readability/readabilityStateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
import { HiAcademicCap } from 'react-icons/hi';
import { Tooltip } from 'components/ui'
import {  Button } from 'components/ui'
import { Link } from 'react-router-dom'
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
						<div className="classheading" style={{color: "#00c3b8"}}>GRADE/CLASSES</div>
				</div>	
			)
		},
		accessor: 'name',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
				<Link to={"/KG-101"}>
				<div className="">
				<Button shape="circle" className="text-2xl text-[#B5B5C3] graduation-cap" variant="plain" size="2xl" icon={<HiAcademicCap />} />
				</div>
				</Link>
				<div className=''>
			
				<span  className="font-bold cursor-pointer">{ row?.name }</span>
					
				<span  className="font-normal text-[#B5B5C3] text-sm"> Grade/Class</span> 
                <Tooltip  className="flex" title={ row?.email }> 
						   
				</Tooltip>
				</div>				 
				</div>
			)
		},
	},

 
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Sections</span>
				</div>	
			)
		},
		accessor: 'sections',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
			
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase">

            { row?.sections }
				
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
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase">
					{ row?.students }			
				</div>
	
			)
		},
	},

	

	
	
]


const Customers = () => {

	const dispatch = useDispatch()
	const data = [
		{
			"id": "1",
			"name": "KG",
			"sections": "2",
			"students": "28"
		},
		{
			"id": "2",
			"name": "1 st",
			"sections": "1",
			"students": "6"
		},
		{
			"id": "3",
			"name": "2 nd",
			"sections": "1",
			"students": "8"
		},
		{
			"id": "4",
			"name": "3 rd",
			"sections": "7",
			"students": "77"
		},
		{
			"id": "5",
			"name": "4 th",
			"sections": "3",
			"students": "15"
		},
		{
			"id": "6",
			"name": "5 th",
			"sections": "1",
			"students": "1"
		},
		{
			"id": "7",
			"name": "6 th",
			"sections": "1",
			"students": "1"
		},
		{
			"id": "8",
			"name": "7 th",
			"sections": "2",
			"students": "26"
		},
		{
			"id": "9",
			"name": "8 th",
			"sections": "1",
			"students": "1"
		},
		{
			"id": "10",
			"name": "9 th",
			"sections": "1",
			"students": "6"
		},
		{
			"id": "11",
			"name": "11 th",
			"sections": "1",
			"students": "3"
		},
		{
			"id": "12",
			"name": "PRE-K",
			"sections": "5",
			"students": "18"
		},
		{
			"id": "13",
			"name": "KG",
			"sections": "2",
			"students": "28"
		},
		{
			"id": "14",
			"name": "PRE-K",
			"sections": "4",
			"students": "20"
		},
		{
			"id": "15",
			"name": "KG",
			"sections": "2",
			"students": "28"
		}
	]
	const state = useSelector((state) => state)
	console.log('data classess', data);
	const loading = useSelector((state) => state?.readability?.loading)
	const filterData = useSelector((state) => state?.readability?.filterData)

	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.tableData)

	const fetchData = useCallback(() => {
		dispatch(getClass({pageIndex, pageSize, sort, query, filterData}))
	}, [pageIndex, pageSize, sort, query, filterData, dispatch])

	useEffect(() => {
		fetchData()
	}, [fetchData, pageIndex, pageSize, sort, filterData,window.location.href])

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
