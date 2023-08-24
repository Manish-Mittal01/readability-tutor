import React from 'react'
import StudentForm from 'views/student/StudentForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateSalesProduct } from 'services/SalesService'

const ProductNew = () => {

	const navigate = useNavigate()

	const addProduct = async (data) => {
		const response = await apiCreateSalesProduct(data)
		return response.data
	}

	const handleFormSubmit = async (values, setSubmitting) => {
		setSubmitting(true)
		const success = await addProduct(values)
		setSubmitting(false)
		if (success) {
			toast.push(
				<Notification title={'Successfuly added'} type="success" duration={2500}>
					Product successfuly added
				</Notification>
				,{
					placement: 'top-center'
				}
			)
			navigate('/students/all')
		}
		
	}

	const handleDiscard = () => {
		navigate('/students/all')
	}

	return (
		<>
			<StudentForm 
				type="new"
				onFormSubmit={handleFormSubmit}
				onDiscard={handleDiscard}
				
			/>
		</>
	)
}

export default ProductNew