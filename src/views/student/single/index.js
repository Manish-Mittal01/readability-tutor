import React, {useEffect } from 'react';
import { AdaptableCard, Loading, Container, DoubleSidedImage } from 'components/shared'
import CustomerProfile from './components/CustomerProfile'
import PaymentHistory from './components/PaymentHistory'
import CurrentSubscription from './components/CurrentSubscription'
import PaymentMethods from './components/PaymentMethods'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomer } from './store/dataSlice'
import reducer from './store'
import { injectReducer } from 'store/index'
import isEmpty from 'lodash/isEmpty'
import useQuery from 'utils/hooks/useQuery'
import { useParams } from 'react-router-dom';
import { MdAccessTime ,MdTimeline ,MdVpnKey } from 'react-icons/md';
import {FaTransgender} from 'react-icons/fa';

import {  Button } from 'components/ui'

import { Progress } from 'components/ui'
import { Segment } from 'components/ui';
import { DatePicker } from 'components/ui'

injectReducer('crmCustomerDetails', reducer)

const CustomerDetail = () => {
	
	const dispatch = useDispatch()

	const query = useQuery()
	const params = useParams(); 
	const data = useSelector((state) => state.crmCustomerDetails.data.profileData)
	const loading = false; //useSelector((state) => state.crmCustomerDetails.data.loading)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params?.id])
	
	const fetchData = () => {
		const id = params?.id || 7; //query.get('id')
		if (id) {
			dispatch(getCustomer({id}))
		}
	}

	return (
		<Container className="h-full">
			<Loading loading={loading}>
				{!isEmpty(data) && (
					<div className="xl:grid grid-cols-6 gap-4">
						<div className='xl:col-span-2'>
							<div className=''>
							<CustomerProfile data={data} />
							</div>
							<div className="">
			                 <div className="progressBar pt-4 card-border-top bg-white">
								<div className="flex px-2 py-2 items-center">
								<div className=''>
								<Button shape="circle" style={{color: "#F778A1"}} variant="plain" size="lg" icon={<MdAccessTime />} />
								</div>
								
								<div className='w-full pr-2'>
                                    <span className='font-bold'>Total Reading Duraion</span>
									<Progress color="pink-400" percent={81} />
								</div>
								</div>
								<div className="flex px-2 py-2 items-center">
								<div>
								<Button style={{color: "#FFAA1D"}} shape="circle" variant="plain" size="lg" icon={<MdTimeline />} />
									
								</div>
								<div className='w-full pr-2'>
								<span className='font-bold'>Average Accuracy</span>
									<Progress color="yellow-400" percent={68} />
								</div>
								</div>
								<div className="flex px-2 py-2 items-center">
								<div>
								<Button style={{color: "#00c3b8"}} shape="circle" variant="plain" size="lg" icon={<FaTransgender/>} />
								</div>
								<div className='w-full pr-2'>
								
									<span className='font-bold'>Comprehension</span>
									<Progress color="cyan-500" percent={31} />
								</div>
								</div>
								</div>
								</div>
			            
						</div>
						<div className="col-span-4">
							<AdaptableCard>
								{/* <CurrentSubscription /> */}
							
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
