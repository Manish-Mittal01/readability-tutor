import React, { useEffect , useCallback, useMemo } from 'react'
import Institutes from 'common/Institutes'
import { useDispatch, useSelector } from 'react-redux'
import { getInstitutions ,setTableData} from '../store/dataSlice'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
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



const Customers = () => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state?.crmCustomers?.data?.institutionList);
	const state = useSelector((state) => state);
	
	const filterData = useSelector((state) => state?.crmCustomers?.data?.filterData)

	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.crmCustomers?.data?.tableData)
	
  
	const fetchData = useCallback(() => {
		dispatch(getInstitutions({pageIndex, pageSize, sort, query, filterData}))
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
			<Institutes data={data}/>
			<CustomerEditDialog />
		</>
	)
}

export default Customers
