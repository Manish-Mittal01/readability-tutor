import React from 'react'
import { Tag, Button } from 'components/ui'
import EditPaymentMethod from './EditPaymentMethod'
import DeletePaymentMethod from './DeletePaymentMethod'
import { useDispatch, useSelector } from 'react-redux'
import { 
	openDeletePaymentMethodDialog,
	openEditPaymentMethodDialog,
	updateSelectedCard
} from '../store/stateSlice'
import isLastChild from 'utils/isLastChild'
import classNames from 'classnames'
import { HiPencilAlt } from 'react-icons/hi'


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
