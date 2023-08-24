import React, { useMemo,useState }  from 'react'
import { Table ,Tooltip} from 'components/ui'
import CustomersTableToolsSingle from 'views/institution/components/CustomersTableToolsSingleStudents';
import { DataTable } from 'components/shared'
import { setStudentTableData } from 'store/readability/readabilitySlice'
import { setSortedColumn } from 'store/readability/readabilityStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy } from 'react-table'
import { MdEmail,MdMenuBook,MdModeEdit,MdOutlineStackedBarChart } from 'react-icons/md';
import {  Button } from 'components/ui'
import cloneDeep from 'lodash/cloneDeep'
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
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			
			return (
				<div className="flex">
				{row?.img!== undefined &&row?.img?.length > 0 ? (
				<Link to={`/student/15`}>
				<div className="cursor-pointer mr-2 box-border flex justify-center items-center  h-10 w-10 uppercase borderClass">
									
				<img src={row?.img}></img>
				
				</div>
				</Link>
				) : (
					<Link to={`/student/15`}>
					<div className="cursor-pointer mr-2 box-border flex justify-center items-center  h-10 w-10  uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>
					{ row?.name?.charAt(0) }
					
				  </div>
				</Link>
   				 )}
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
				<div className="flex items-center">
					<Button shape="circle" variant="plain" size="xs" icon={<MdMenuBook />} />
					</div>
			)
		},
		id: 'reading-book',
		accessor:'readingbook',
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
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
				 <div>{ row?.grade }</div>
				
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
					<Tooltip title={'Resend Welcome Email'} wrapperClass="mr-1">
							<Button shape="circle" variant="plain" size="md" icon={<MdEmail />} />
							</Tooltip>
							<Tooltip title={'Edit'} wrapperClass="mr-1">
				<Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} />
				</Tooltip>
				</div>
			)
		},
	},

	
]

    	const Students = (props) => {
			const [timeRange, setTimeRange] = useState(['weekly']);
			const dispatch = useDispatch()
            const studentData = props.data
   
            const data = studentData

			const loading = useSelector((state) => state?.readability?.loading)
			   //console.log('loading',loading);
            const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.tableData)
            const tableData = useMemo(() => 
            ({pageIndex, pageSize, sort, query, total}), 
             [pageIndex, pageSize, sort, query, total])

          
			 const onPaginationChange = page => {
				const newTableData = cloneDeep(tableData)
				newTableData.pageIndex =  page
				dispatch(setStudentTableData(newTableData))
			}
		
			const onSelectChange = value => {
				const newTableData = cloneDeep(tableData)
				newTableData.pageSize =  Number(value)
				newTableData.pageIndex = 1
				dispatch(setStudentTableData(newTableData))
			}
		
			const onSort = (sort, sortingColumn) => {
				const newTableData = cloneDeep(tableData)
				newTableData.sort = sort
				dispatch(setStudentTableData(newTableData))
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
	
             <>         
             
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
                   
            </>
            )

            }

export default Students