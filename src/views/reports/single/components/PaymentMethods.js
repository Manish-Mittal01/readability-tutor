import React from 'react'
import EditPaymentMethod from './EditPaymentMethod'
import DeletePaymentMethod from './DeletePaymentMethod'
import { useDispatch, useSelector } from 'react-redux'
import { 
	openDeletePaymentMethodDialog,
	openEditPaymentMethodDialog,
	updateSelectedCard
} from 'store/readability/readabilityStateSlice'



const PaymentMethods = () => {

	const dispatch = useDispatch()

	const data = useSelector((state) => state?.readability?.paymentMethodData)	

	

	return (
		<>
			{(data.length > 0) && (
				<div>
				{/* bottom */}
					
				</div>
			)}
			<EditPaymentMethod />
			<DeletePaymentMethod />
		</>
	)
}

export default PaymentMethods
