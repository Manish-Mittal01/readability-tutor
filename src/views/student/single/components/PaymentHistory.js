import React, { useState,useMemo } from 'react';
import { Table, Badge,Tooltip } from 'components/ui'
import { useTable, useSortBy } from 'react-table'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { setTableData } from 'store/readability/readabilitySlice'
import { setSortedColumn } from 'store/readability/readabilityStateSlice'
import { useParams } from 'react-router-dom';
import CustomersTableToolsSingle from 'views/student/components/CustomersTableToolsSingleBooks'
import { DataTable } from 'components/shared'
import dayjs from 'dayjs'
import { Pagination } from 'components/ui'
import {  Button,Avatar } from 'components/ui'
import { Segment } from 'components/ui';
import { DatePicker } from 'components/ui'
import { Link } from 'react-router-dom'
import { MdMenuBook ,MdPostAdd ,MdListAlt ,MdFilterAlt,MdHistory,MdHelpOutline} from 'react-icons/md';
import { Switcher } from 'components/ui'
import cloneDeep from 'lodash/cloneDeep'

const { Tr, Th, Td, THead, TBody, Sorter } = Table


const columns = [

	{
		Header: props => {			
			return (
				
			<span className="font-bold">ID</span>
				
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
				
			<span className="font-bold" style={{color: "#00c3b8"}}>Title</span>
				
			)
		},
		accessor: 'name',
		Cell: props => {
			const row = props.row.original
			return (
				<div className='flex'>
				
				<Link to={"/book/1"}>
				 <div className="mr-2 box-border flex justify-center items-center h-12 w-10 borderClass">
				 <Avatar shape="normal" src={row?.img} />
				 </div>
				 </Link>
				<div>
					<div className="font-bold">
					{ row?.title }
					</div>
					
					<div>
					<span className="cursor-pointer">{ row?.author }</span>
					</div>
					
				</div>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				
			<span className="font-bold">Sumarry Date</span>
				
			)
		},
		id: 'summary',
		accessor: 'summary',
		Cell: props => {
			const row = props.row.original
			return (
				<div className='mr-4 p-2 box-border flex justify-center items-center borderClass bg-cyan-100 uppercase'>
					<span className="cursor-pointer" style={{color: "#00c3b8"}}>{ row?.summary_date }</span>
				</div>
			)
		},
	
	},

	{
		Header: props => {			
			return (
				
		<span className="font-bold">Start </span>
				
			)
		},
		id: 'start',
		accessor: 'start',
		Cell: props => {
			const row = props.row.original
			return (
				<div className='mr-4 p-2  flex justify-center items-center'>
				<span className="cursor-pointer">	{ row?.start }</span>
			</div>
				
				
			)
		},
	
	},

	{
		Header: props => {			
			return (
				<div className='w-full'>
					<span className="font-bold">Finish </span>
				</div>
		
				
			)
		},
		id: 'finish',
		accessor: 'finish',
		Cell: props => {
			const row = props.row.original
			return (
				<div>
					<span className="cursor-pointer">{ row?.finish }</span>
				</div>
			)
		},
	
	},
	{
		Header: props => {			
			return (
				
		<span className="font-bold">Duration </span>
				
			)
		},
		id: 'duration',
		accessor: 'duration',
		Cell: props => {
			const row = props.row.original
			return (
				<div>
					<span className="cursor-pointer">{ row?.duration }</span>
				</div>
			)
		},
	
	},
	{
		Header: props => {			
			return (
				
			<span className="font-bold">Accuracy </span>
				
			)
		},
		id: 'accuracy',
		accessor: 'accuracy',
		Cell: props => {
			const row = props.row.original
			return (
				<div>
					<span className="cursor-pointer">{ row?.accuracy }</span>
				</div>
			)
		},
	
	},
	{
		Header: props => {			
			return (
				
		<span className="font-bold">WPM </span>
				
			)
		},
		id: 'wpm',
		accessor: 'wpm',
		Cell: props => {
			const row = props.row.original
			return (
				<div>
					<span className="cursor-pointer">{ row?.wpm }</span>
				</div>
			)
		},
	
	},
	{
		Header: props => {			
			return (
				
		<span className="font-bold">Vocabulary </span>
				
			)
		},
		id: 'vocabulary',
		accessor: 'vocabulary',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase">
				{ row?.vocabulary }			
			</div>
				
	
			)
		},
	
	},

	{
		Header: props => {			
			return (
				
		<span className="font-bold">Comprehension </span>
				
			)
		},
		id: 'Comprehension',
		accessor: 'Comprehension',
		Cell: props => {
			const row = props.row.original
			
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase">
				{ row?.comprehension }			
			</div>
				
	
			)
		},
	
	},


	
]

const PaymentHistory = () => {
	const params = useParams(); 
	const id = params?.id
	console.log('id',id); 
	const dispatch = useDispatch()
	const [timeRange, setTimeRange] = useState(['weekly']);
	const data = useSelector((state) => state.readability.paymentHistoryData)

  const loading = useSelector((state) => state?.readability?.loading)
  const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.tableData)
 
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

  const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }, useSortBy)

	return (
		<div className="mb-8">
        
                    <div className="flex">
                        <h5 className="mt-2 mb-2 mobile-padding">Books</h5>
					
                    </div>
					<div>			
           
        </div>
		
			
			<CustomersTableToolsSingle />
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
			
			
		</div>
		
	)
}

export default PaymentHistory
