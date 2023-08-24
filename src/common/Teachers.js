import React, { useMemo ,useState}  from 'react'
import { Table ,Tooltip} from 'components/ui'
import { Drawer, Button} from 'components/ui'
import ReadabilityDrawer from 'common/ReadabilityDrawer'
import {MdAdd, MdMenuBook,MdModeEdit ,MdPostAdd ,MdListAlt ,MdFilterAlt,MdHistory,MdHelpOutline} from 'react-icons/md';
import { Segment } from 'components/ui';
import { DatePicker } from 'components/ui'
import { openEditCustomerBooksDialog } from 'store/readability/readabilitySlice'
import { setTableData } from 'store/readability/readabilitySlice'
import { setSortedColumn } from 'store/readability/readabilityStateSlice'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useSortBy } from 'react-table'
import { MdEmail } from 'react-icons/md';
import { FaFileImport } from 'react-icons/fa';
import CustomersTableToolsSingle from 'views/institution/components/CustomersTableToolsSingleTeachers';
import { Link } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
const { Tr, Th, Td, THead, TBody, Sorter } = Table


const getRandomObject = () => {
	const array = [{bg: "#FFF4DE", color: "#FFA800"},{bg: "#C9F7F5", color: "#1BC5BD"},{bg: "#EEE5FF", color: "#8950FC"},{bg: "#FFF4DE", color: "#FFA800"},{bg: "#FFF4DE", color: "#FFA800"},{bg: "#FFF4DE", color: "#FFA800"}]
	const randomObject = array[Math.floor(Math.random() * array.length)];
	return randomObject;
  }



const Teachers = (props) => {
	const dispatch = useDispatch()
	const handleShowMoreDetail = (id,contentType) => {
		
		 const contentObj={ id,contentType  }
		dispatch(openEditCustomerBooksDialog(contentObj))	
	}
            const teacherData = props.data
            const data = teacherData
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
							<div className="flex items-center">
									<span className="font-bold">Teacher</span>
							</div>	
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
							{row?.img!== undefined &&row?.img?.length > 0 ? (
							<Link to={`/teacher/1`}>
							<div className="mr-2 box-border flex justify-center items-center  h-10 w-10 uppercase borderClass">
												
							<img src={row?.img}></img>
							
							</div>
							</Link>
							) : (
								<Link to={`/teacher/1`}>
								<div className="mr-2 box-border flex justify-center items-center  h-10 w-10  uppercase borderClass" style={{ color: boxColor,background:bgcolor }}>
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
							<div   onClick={() => handleShowMoreDetail(row.id,'students')} className="cursor-pointer  mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase"  style={{ color: boxColor,background:bgcolor }}>
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
							<div onClick={() => handleShowMoreDetail(row.id,'books')}  className="cursor-pointer mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" style={{ color: boxColor,background:bgcolor }}>
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
						// const color = getRandomObject()
						// let bgcolor= color.bg
						// let boxColor = color.color
						return (
						
							<div className="mr-2 box-border flex justify-center items-center h-10 w-10 borderClass uppercase" >
			
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
							  <Tooltip title={'Resend Welcome Email'} wrapperClass="mr-1">  <Button  shape="circle" variant="plain" size="md" icon={<MdEmail />} /></Tooltip>
							  <Tooltip title={'Add Student'} wrapperClass="mr-1">  <Button shape="circle" variant="plain" size="md" icon={<MdAdd />} /></Tooltip>
							  <Tooltip title={'Import Students'} wrapperClass="mr-1">  <Button shape="circle" variant="plain" size="md" icon={<FaFileImport />} /></Tooltip> 
							  <Tooltip title={'Edit'} wrapperClass="mr-1">    <Button shape="circle" variant="plain" size="md" icon={<MdModeEdit />} /></Tooltip> 
								</div>
						)
					},
				},
			
			
			]
		
			const [timeRange, setTimeRange] = useState(['weekly']);
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
			  <ReadabilityDrawer  />
            </>
            )

            }

export default Teachers