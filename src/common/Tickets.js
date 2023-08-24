import React, {useState, useMemo } from 'react'
import { Table } from 'components/ui'
import { getClass, setTableData } from 'store/readability/readabilitySlice'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import {setSortedColumn } from 'store/readability/readabilityStateSlice'
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
			
				<span  className="font-bold">Subject</span>
				
			)
		},
		accessor: 'bookName',
		Cell: props => {
			const row = props?.row?.original
			//console.log('book url',row.bookImage);
			return (
				<div className="flex">
				
				<div className="">
			
					<span  className="w-full">{ row?.subject }</span>
					
				</div>
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				
				<span  className="font-bold">Percentage</span>
				
			)
		},
		accessor: 'datecreated',
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					{ row?.percentage }
				</div>
			)
		},
	},
	{
		Header: props => {			
			return (
				<div className="flex items-center">
						<span className="font-bold">Count</span>
				</div>	
			)
		},
		accessor: 'Grade',
		sortable: true,
		Cell: props => {
			const row = props?.row?.original
			return (
				<div className="flex items-center">
					
					<span className="ml-2 rtl:mr-2 capitalize">{ row?.count }</span>
				</div>
			)
		},
	},


]

    const Books = (props) => {
		const dispatch = useDispatch()
		const drawerWidth = props.width
		const [timeRange, setTimeRange] = useState(['weekly']);
            const bookData =[
				{
					"id": "1",
					"subject": "CANCELLED - I simply can’t afford Readability right now",
					"percentage":"5.7 %",
					"count":"860"
				},
				{
					"id": "2",
					"subject": "CANCELLED - The voice recognition did not work for my child	",
					"percentage":"4.5 %",
					"count":"680"
				},
				{
					"id": "3",
					"subject": "CANCELLED - Readability is not right for my child’s needs.	",
					"percentage":"4.5 %",
					"count":"668"
				},
				{
					"id": "4",
					"subject": "CANCELED - I simply can’t afford Readability right now.	",
					"percentage":"4.1 %",
					"count":"619"
				}
			]
	         
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