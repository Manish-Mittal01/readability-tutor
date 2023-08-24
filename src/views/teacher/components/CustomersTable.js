import React, { useEffect, useCallback, useMemo } from 'react'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getTeachers, setTableData } from 'store/readability/readabilitySlice'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from 'store/readability/readabilityStateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
import { MdModeEdit } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaFileImport } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { HiAcademicCap } from 'react-icons/hi';
import { Tooltip } from 'components/ui'
import {  Button } from 'components/ui'
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
						<span className="font-bold">Teacher</span>
				</div>	
			)
		},
		accessor: 'name',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="flex">
			{row?.img!== undefined &&row?.img?.length > 0 ? (
				<Link to={`/teacher/${ row?.id}`}>
						<div className=" cursor-pointer mr-2 box-border flex justify-center items-center  h-10 w-10 uppercase borderClass">
											
						<img src={row?.img}></img>
						
					</div>
					</Link>
						) : (
							<Link to={`/teacher/${ row?.id}`}>
							<div className=" cursor-pointer mr-2 box-border flex justify-center items-center  h-10 w-10  uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>
							{ row?.name?.charAt(0) }
							
						</div>
						</Link>
						)}
				<div className="">
				 
				  <span  className="font-bold w-full">{ row?.name }</span>
				
				  
					
					<div  className="flex">
                             <Tooltip  className="flex" title={ row?.email }> 

                                                <div className="">
                                                    <Button shape="circle" variant="plain" size="xs" icon={<MdEmail />} />
                                                </div>
                                                <div className="truncate w-40">
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
			
				<div className="">
					<span className="">{ row?.institution }</span>
				</div>
			
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Location</span>
				</div>	
			)
		},
		accessor: 'district',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
			<div>	
                            <div className="flex items-center w-full">
                                <span className="mr-2 capitalize">	{ row?.state },</span>
                            </div>
                            <div className="flex items-center w-full">
                                <span className="mr-2 capitalize  w-full">	{ row?.district },</span>
                            </div>
                            
                            
                             <span className="mr-2 capitalize">	{ row?.country }</span>
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
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }}>
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
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }}>
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
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
			
				<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }} >

            { row?.classess }
				
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
			const row = props.row.original
			return (
				<div className="flex justify-center items-center uppercase">
					{ row?.created_date }			
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
                <Button  shape="circle" variant="plain" size="md" icon={<MdEmail />} />
				<Button shape="circle" variant="plain" size="md" icon={<HiAcademicCap />} />
			
				<Button shape="circle" variant="plain" size="md" icon={<FaFileImport />} />
				<Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} />
				</div>
			)
		},
	},
]


const Customers = () => {

	const dispatch = useDispatch()
	const data = useSelector((state) => state?.readability?.teachersList)
	const state = useSelector((state) => state)
	const loading = useSelector((state) => state?.readability?.loading)
	const filterData = useSelector((state) => state?.readability?.filterData)

	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.readability?.tableData)

	const fetchData = useCallback(() => {
		dispatch(getTeachers({pageIndex, pageSize, sort, query, filterData}))
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
