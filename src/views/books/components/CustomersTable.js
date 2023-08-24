import React, { useEffect ,useCallback ,useMemo} from 'react'
import Books from 'common/Books'
import { getBooks,setTableData} from 'store/readability/readabilitySlice'
import { setSelectedCustomer, setDrawerOpen, setSortedColumn } from 'store/readability/readabilityStateSlice'

import { useDispatch, useSelector } from 'react-redux'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'


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
	const data = useSelector((state) => state?.crmCustomers?.data?.booksList);

	const state = useSelector((state) => state);
	const filterData = useSelector((state) => state?.crmCustomers?.data?.filterData)

	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state?.crmCustomers?.data?.tableData)

	const fetchData = useCallback(() => {
		dispatch(getBooks({pageIndex, pageSize, sort, query, filterData}))
	
	}, [pageIndex, pageSize, sort, query, filterData, dispatch])

	useEffect(() => {
		fetchData()
		
	}, [fetchData, pageIndex, pageSize, sort, filterData,window.location.href])

	const tableData = useMemo(() => 
		({pageIndex, pageSize, sort, query, total}), 
	[pageIndex, pageSize, sort, query, total])
	
	return (
		<>{data &&
			<Books data={data}/>
		}
			<CustomerEditDialog />
		</>
	)
}

export default Customers
