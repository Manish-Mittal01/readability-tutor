import React, { useState,useEffect } from 'react'
import { AdaptableCard, Loading, Container, DoubleSidedImage } from 'components/shared'
import CustomerProfile from './components/CustomerProfile'
import PaymentHistory from './components/PaymentHistory'
import PaymentMethods from './components/PaymentMethods'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomer, getProjectDashboardData  } from './store/dataSlice'
import reducer from './store'
import { injectReducer } from 'store/index'
import isEmpty from 'lodash/isEmpty'
import useQuery from 'utils/hooks/useQuery'
import { Chart } from 'components/shared';
import { COLORS } from 'constants/chart.constant';
import { useParams } from 'react-router-dom';
//import {  } from 'views/institution/store/dataSlice'
injectReducer('crmCustomerDetails', reducer)


const CustomerDetail = () => {
//console.log('customer detail profile folder');
	const dispatch = useDispatch()
	const [timeRange, setTimeRange] = useState(['weekly']);
	
	const [repaint, setRepaint] = useState(false)
	const query = useQuery();
	const params = useParams(); 
	const data = useSelector((state) => state.crmCustomerDetails.data.profileData)
	const dash = useSelector((state) => state.crmCustomerDetails?.data?.dashboardData?.projectOverviewData
	)

	const loading = useSelector((state) => state.crmCustomerDetails.data.loading)
	useEffect(() => {
		fetchChartData()
		
	}, [])
	
	const fetchChartData = () => {
	
		dispatch(getProjectDashboardData())
	}

	useEffect(() => {
		fetchData()
		
	}, [params?.id])
	
	const fetchData = () => {
		
		const id = params?.id || 7;// query.get('id')
		if (id) {
			dispatch(getCustomer({id}))
		}
	}

	return (
		<Container className="h-full">
			<Loading loading={loading}>
				{!isEmpty(data) && (
					<div className="flex flex-col xl:flex-row gap-4">
						<div>
							<CustomerProfile data={data} />
						</div>
						<div className="w-full">
							<AdaptableCard>
								
								{(!isEmpty(dash) && !repaint) && (
								<>
									<div>
										<Chart 
											series={dash.chart[timeRange[0]].series} 
											xAxis={dash.chart[timeRange[0]].range}
											type="bar"
											customOptions={{colors: [COLORS[0], COLORS[2]], legend: {show: false}}}
										/>
									</div>
								</>
							)
						}
								<PaymentHistory />
								<PaymentMethods data={data.paymentMethod} />
							</AdaptableCard>
						</div>
					</div>
				)}
			</Loading>
			{(!loading && isEmpty(data)) && (
				<div className="h-full flex flex-col items-center justify-center">
					<DoubleSidedImage 
						src="/img/others/img-2.png"
						darkModeSrc="/img/others/img-2-dark.png"
						alt="No user found!"
					/>
					<h3 className="mt-8">No user found!</h3>
				</div>
			)}
		</Container>
	)
}

export default CustomerDetail
