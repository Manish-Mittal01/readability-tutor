import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from './components/CustomersTable'
import CustomersTableTools from './components/CustomersTableTools'
import CustomerStatistic from './components/CustomerStatistic'

const Customers = () => {
	return (
		<>
			<CustomerStatistic />
			<AdaptableCard className="h-full" bodyClass="h-full ml-4 report-page">
				<CustomersTableTools />
				<CustomersTable />
			</AdaptableCard>
		</>
	)
}

export default Customers
