import React, {useState, useMemo } from 'react'
import { Table } from 'components/ui'
import { getClass, setTableData } from 'store/readability/readabilitySlice'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import {setSortedColumn } from 'store/readability/readabilityStateSlice'
import {  Tooltip } from 'components/ui'
import { MdMenuBook,MdModeEdit} from 'react-icons/md';
import {  Button,Avatar } from 'components/ui'
import { Link } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
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
		sortable: true,
		Cell: props => {
			const row = props.row.original
			//console.log('rowww teachher',row);	
			return (
				<div className="flex items-center">
					<span className="cursor-pointer">{row.id}</span>
				</div>
			)
		},
	},
	{
		Header: props => {	
				
			return (
			
				<span  className="font-bold">Title</span>
				
			)
		},
		accessor: 'bookName',
		Cell: props => {
			const row = props?.row?.original
			//console.log('book url',row.bookImage);
			return (
				<div className="flex">
				<Link to={"/book/1"}>
				<div className="cursor-pointer mr-2 box-border flex justify-center items-center h-10 w-10 borderClass  uppercase">
						
						{/* <img src={ row?.bookImage? }></img> */}
								
					<Avatar size={30} shape=" normal" src={row?.bookImage} />
					</div>
					</Link>
				<div className="">
			
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
				
				<span  className="font-bold">Date Created</span>
				
			)
		},
		accessor: 'datecreated',
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					{ row?.created_date }
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Grade</span>
				</div>	
			)
		},
		accessor: 'Grade',
		sortable: true,
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.grade }</span>
				</div>
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Question</span>
				</div>	
			)
		},
		accessor: 'state',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.question }</span>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Words</span>
				</div>	
			)
		},
		accessor: 'country',
		sortable: true,
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.words }</span>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Chapters</span>
				</div>	
			)
		},
		accessor: 'students',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase" style={{ color: boxColor,background:bgcolor }}>
					{ row?.chapters }			
				</div>
	
			)
		},
	},

	


	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Vocabulary</span>
				</div>	
			)
		},
		accessor: 'Vocabulary',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
			
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase" style={{ color: boxColor,background:bgcolor }}>

            { row?.voabulary }
				
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
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase" style={{ color: boxColor,background:bgcolor }}>
				{ row?.comprehension }			
			</div>
				
	
			)
		},
	
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Lexible Level</span>
				</div>	
			)
		},
		accessor: 'Lexible',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
			
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase" style={{ color: boxColor,background:bgcolor }}>

            { row?.level }
				
				</div>
	
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">AR Score</span>
				</div>	
			)
		},
		accessor: 'AR',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
			
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase" style={{ color: boxColor,background:bgcolor }}>

            { row?.arscore }
				
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
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass bg-cyan-100 uppercase" style={{ color: boxColor,background:bgcolor }}>
					{ row?.books }			
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
				<Tooltip title={'Edit'} wrapper className="mr-1"><Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} />
				</Tooltip>
				</div>
			)
		},
	},


]

    const Books = (props) => {
		const dispatch = useDispatch()
		const drawerWidth = props.width
		const [timeRange, setTimeRange] = useState(['weekly']);
            const bookData = props?.data || []
	
            const data = bookData
			const loading = useSelector((state) => state?.readability?.loading)
			const filterData = useSelector((state) => state?.readability?.filterData)
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
		
            </>
            )

            }

export default Books