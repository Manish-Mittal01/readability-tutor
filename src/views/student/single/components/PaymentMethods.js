import React from 'react'
import EditPaymentMethod from './EditPaymentMethod'
import DeletePaymentMethod from './DeletePaymentMethod'
import { useDispatch, useSelector } from 'react-redux'
import { 
	openDeletePaymentMethodDialog,
	openEditPaymentMethodDialog,
	updateSelectedCard
} from '../store/stateSlice'



const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const PaymentMethods = () => {

	const dispatch = useDispatch()

	const data = useSelector((state) => state.crmCustomerDetails.data.paymentMethodData)	

	const onEditPaymentMethodDialogOpen = (card) => {
		dispatch(updateSelectedCard(card))
		dispatch(openEditPaymentMethodDialog())
	}

	const onDeletePaymentMethodDialogOpen = (card) => {
		dispatch(updateSelectedCard(card))
		dispatch(openDeletePaymentMethodDialog())
	}

	return (
		<>
			
			<EditPaymentMethod />
			<DeletePaymentMethod />
		</>
	)
}

export default PaymentMethods
