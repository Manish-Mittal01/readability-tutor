import React, { useEffect, useCallback, useMemo } from 'react'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import {setTableData,getReport } from 'store/readability/readabilitySlice'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from 'store/readability/readabilityStateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
import { BsFillPersonCheckFill,BsPersonXFill,BsEyeSlash } from 'react-icons/bs';
import { MdMenuBook ,MdAreaChart,MdAccessTime,MdOutlineStackedBarChart,MdVisibility} from 'react-icons/md';
import { FaSignal} from 'react-icons/fa';
import { TbChartHistogram } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import {  Button } from 'components/ui'
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
				<div className="flex cursor-pointer">
				<div className="cursor-pointer">
				<div className='font-semibold text-xl text-[#FFA800]'>{ row?.name }</div> 
				</div>
			</div>
	
			)
		},
	},
	
	
	
	{
		Header: props => {			
			return (
				<div className="flex items-center">
					{/* <div className='px-4'><span className="font-bold"> ID</span></div> */}
					
					<div>
					<span className="font-bold"> Reader</span>
						</div>	
				</div>	
			)
		},
		accessor: 'name',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex cursor-pointer">
					<div className="cursor-pointer">
					<h5 className='text-[#FFA800]'></h5>
					</div>
				</div>
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center font-bold">
						Total
				</div>	
			)
		},
		accessor: 'total',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2  flex justify-center items-center h-10 w-10">
					{ row?.total }			
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
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.books }			
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<MdVisibility />} />
				</div>	
			)
		},
		accessor: 'onPlatfomr',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.onplatform }			
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<BsEyeSlash />} />
				</div>	
			)
		},
		accessor: 'notOnPlatform',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.notOnPlatform }			
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<BsFillPersonCheckFill />} />
				</div>	
			)
		},
		accessor: 'active',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.active }			
				</div>
	
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<BsPersonXFill />} />
				</div>	
			)
		},
		accessor: 'NotActive',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.notActive }			
				</div>
	
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<MdAccessTime />} />
				</div>	
			)
		},
		accessor: 'minutesRead',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.minutesRead }			
				</div>
	
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<MdAreaChart />} />
				</div>	
			)
		},
		accessor: 'averageAccuracy',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.averageAccuracy }			
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<img className='report-img' src="/img/table-header/QuestionAndAnswerSmallIcon3.png"></img>
				</div>	
			)
		},
		accessor: 'comprehension',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.comprehension }			
				</div>
	
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<AiFillApi />} />
				</div>	
			)
		},
		accessor: 'speed',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.speed }			
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<FaSignal />} />
				</div>	
			)
		},
		accessor: 'movedLevelUp',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.movedLevelUp }			
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<Button shape="circle" variant="plain" size="md" icon={<MdOutlineStackedBarChart />} />
				</div>	
			)
		},
		accessor: 'movedLevelDown',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10">
					{ row?.movedLevelDown }			
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
           
				</div>
			)
		},
	},
]


const Customers = () => {

	const dispatch = useDispatch()
	const data = useSelector((state) => state?.readability?.reportList)
	const state = useSelector((state) => state)

	const loading = useSelector((state) => state?.readability?.loading)
	const filterData = useSelector((state) => state?.readability?.filterData)

	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.tableData)

	const fetchData = useCallback(() => {
		dispatch(getReport({pageIndex, pageSize, sort, query, filterData}))
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
