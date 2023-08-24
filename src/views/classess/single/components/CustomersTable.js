import React, { useEffect, useCallback, useMemo } from 'react'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers, setStudentTableData } from 'store/readability/readabilitySlice'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from 'store/readability/readabilityStateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
import { MdModeEdit,MdEmail,MdMenuBook,MdOutlineStackedBarChart } from 'react-icons/md';
import {  Button ,Tooltip} from 'components/ui'
import { Link } from 'react-router-dom'

import cloneDeep from 'lodash/cloneDeep'


const getRandomObject = () => {
	const array = [{bg: "#FFF4DE", color: "#FFA800"},{bg: "#C9F7F5", color: "#1BC5BD"},{bg: "#EEE5FF", color: "#8950FC"},{bg: "#FFF4DE", color: "#FFA800"},{bg: "#FFF4DE", color: "#FFA800"},{bg: "#FFF4DE", color: "#FFA800"}]
	const randomObject = array[Math.floor(Math.random() * array.length)];
	return randomObject;
  }



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
					  <input type="checkbox" id="" name="" value=""></input>
				</div>	
			)
		},
		id: 'checkbox',
		accessor:'checkbox',
		Cell: props => {
		
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
		id: 'id',
		accessor: (row) => row,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
				
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.id }</span>
				</div>
			)
		},
	},

	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span  className="font-bold">Student</span>
				</div>	
			)
		},
		accessor: 'student',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="flex">
				{row?.img!== undefined &&row?.img?.length > 0 ? (
						<div className="cursor-pointer mr-2 box-border flex justify-center items-center  h-10 w-10 uppercase borderClass">
											
						<img src={row?.img}></img>
						
					</div>
						) : (
							<div className="cursor-pointer mr-2 box-border flex justify-center items-center  h-10 w-10  uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>
							{ row?.name?.charAt(0) }
							
						</div>
						)}
				<div className="cursor-pointer">
				<Link to={"/student/15"}>
				  <span  className="font-bold w-full">{ row?.name }</span>
				  </Link>
				
                                  <div  className="flex">
                                            <Tooltip  className="flex" title={ row?.email }> 

                                                <div className="">
                                                    <Button shape="circle" variant="plain" size="xs" icon={<MdEmail />} />
                                                </div>
                                                <div className="truncate w-32">
                                                        { row?.email }
                                                </div> 

                                            </Tooltip>
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
						<span  className="font-bold">Teacher</span>
				</div>	
			)
		},
		accessor: 'teacher',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="flex">
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }}>
						{ row?.name?.charAt(0) }
					</div>
				<div className="cursor-pointer">
				
				  <span  className="font-bold w-full">{ row?.name }</span>
				  
                                        
                                        <div  className="flex">
                                            <Tooltip  className="flex" title={ row?.email }> 

                                                <div className="">
                                                    <Button shape="circle" variant="plain" size="xs" icon={<MdEmail />} />
                                                </div>
                                                <div className="truncate w-32">
                                                        { row?.email }
                                                </div> 

                                            </Tooltip>
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
		accessor: 'books',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }} >
					{ row?.books }			
				</div>
	
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span  className="font-bold">Age/Grade</span>
				</div>	
			)
		},
		accessor: 'age',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return ( 
                                
                                <div>	
                                    <div className="flex items-center w-full">
                                        <span className="mr-2 capitalize font-semibold">	{ row?.age }</span>
                                    </div>
                                    <div className="flex items-center w-full">
                                        <span className="mr-2 capitalize  w-full"> { row?.grade }</span>
                                    </div> 
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
		accessor: 'signup_date',
		sortable: false,
		Cell: props => {
			const row = props.row.original
			return (
			 <div>
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
		accessor: 'stats',
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
				<div className="flex items-center">
						<span  className="font-bold">Actions</span>
				</div>	
			)
		},
		id: 'action',
		accessor: (row) => row,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
			
			<Tooltip title={'Send Report'} wrapperClass="mr-1"><Button shape="circle" variant="plain" size="md" icon={<MdOutlineStackedBarChart />} />
			</Tooltip>
				<Tooltip title={'Resend Welcome Email'} wrapperClass="mr-1">	<Button shape="circle" variant="plain" size="md" icon={<MdEmail />} />
				</Tooltip>
				<Tooltip title={'Edit'} wrapperClass="mr-1">	<Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} />
				
				</Tooltip>
				</div>
			)
		},
	},
]


const Customers = () => {

	const dispatch = useDispatch()
	const data = useSelector((state) => state?.readability?.customerList)
	const state = useSelector((state) => state);

	const loading = useSelector((state) => state.readability?.loading)
	const studentFilterData = useSelector((state) => state?.readability?.studentFilterData)
	
	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.studentTableData)

	const fetchData = useCallback(() => {
		dispatch(getCustomers({pageIndex, pageSize, sort, query, studentFilterData}))
	}, [pageIndex, pageSize, sort, query, studentFilterData, dispatch])

	useEffect(() => {
		fetchData()
	}, [fetchData, pageIndex, pageSize, sort, studentFilterData,window.location.href])

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
