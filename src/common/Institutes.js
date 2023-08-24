import React, { useMemo }  from 'react'
import { Table } from 'components/ui'
import { DataTable } from 'components/shared'
import { setTableData } from 'store/readability/readabilitySlice'
import {  Tooltip } from 'components/ui'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from 'views/institution/store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy } from 'react-table'
import { MdPersonAddAlt1,MdEmail,MdMenuBook,MdModeEdit,MdOutlineStackedBarChart } from 'react-icons/md';
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
					<span className="">{ row?.id }</span>
				</div>
			)
		},
	},

	{

		Header: props => {			
			return (
			
		<span className="font-bold">Institution</span>
				
			)
		},
		accessor: 'institution',
		sortable: true,
		Cell: props => {
			const row = props.row.original
		    const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
		
			return (
				<div className="flex items-cente">
					
						{row?.img!== undefined &&row?.img?.length > 0 ? (
						<Link to={"/institution/1"}>
						<div className="mr-2 box-border flex justify-center items-center  h-10 w-10 uppercase borderClass">
											
						<img src={row?.img}></img>
						
					</div>
					</Link>
						) : (
							<Link to={"/institution/1"}>
							<div className="mr-2 box-border flex justify-center items-center  h-10 w-10  uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>
							{ row?.name?.charAt(0) }
							
						</div>
						</Link>
						)}
				
				
				<div className="">
				
				  <span  className="font-bold w-full">{ row?.name }</span>
				 
				</div>
			
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				
			<span className="font-bold">Access</span>
				
			)
		},
		accessor: 'access',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			return (
				<div className="flex">
					  <Link to={"/teacher/1"}>
				<div className="mr-2 box-border borderflex flex justify-center items-center h-10 w-10 uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>
						{ row?.name?.charAt(0) }
					</div>
					</Link>
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
			
			<span className="font-bold ">Location</span>
			
			)
		},
		accessor: 'country',
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
			
				<span className="font-bold">Teachers</span>
				
			)
		},
		accessor: 'teachers',
		sortable: true,
		Cell: props => {
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color
			const row = props.row.original
			return (
				<div className="mr-2 box-border cursor-pointer flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }}>
					{ row?.teachers }
				
				</div>
	
			)
		},
	},

	{
		Header: props => {		
			
			return (
				
				<span className="font-bold">Students</span>
				
			)
		},
		accessor: 'students',
		sortable: true,
		Cell: props => {
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color	
			const row = props.row.original
			return (
				<div className="mr-2 box-border cursor-pointer flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }}>
					{ row?.students }			
				</div>
	
			)
		},
	},

	{
		Header: props => {		
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color	
			return (
				
				<span className="font-bold">classess</span>
				
			)
		},
		accessor: 'classess',
		sortable: true,
		Cell: props => {
			const color = getRandomObject()
			let bgcolor= color.bg
			let boxColor = color.color	
			const row = props.row.original
			return (
			
				<div className="mr-2 box-border flex cursor-pointer justify-center items-center h-10 w-10 uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>

                { row?.classess }
				
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
			const row = props.row.original
			return (
				<div className="flex items-center">
				<Tooltip title={'Resend Welcome Email'} wrapperClass="mr-1"><Button shape="circle" variant="plain" size="md" icon={<MdEmail />} /></Tooltip>
				<Tooltip title={'Add Teacher'} wrapperClass="mr-1"><Button shape="circle" variant="plain" size="md" icon={<MdPersonAddAlt1 />} /></Tooltip>
				<Tooltip title={'Edit'} wrapperClass="mr-1"><Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} />
				</Tooltip>
				</div>
			)
		},
	},
]


const Institutes = (props) => {
			const dispatch = useDispatch()
            const instituteData = props.data
            const data = instituteData

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

export default Institutes