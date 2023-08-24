import React, { forwardRef, useState } from 'react'
import { FormContainer, Button, hooks } from 'components/ui'
import { StickyFooter, ConfirmDialog } from 'components/shared'
import { Form, Formik } from 'formik'
import BasicInformationFields from './BasicInformationFields'
import PricingFields from './PricingFields'
import OrganizationFields from './OrganizationFields'
import ProductImages from './ProductImages'
import { BsArrowLeft} from 'react-icons/bs';
import { MdAdd} from 'react-icons/md';
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name Required'),
	studentid: Yup.string().required('Student Id Required'),
	email: Yup.number().required('Email Required'),
	password: Yup.string().required('Password Required'),
})

const DeleteProductButton = ({ onDelete }) => {

	const [dialogOpen, setDialogOpen] = useState(false)

	const onConfirmDialogOpen = () => {
		setDialogOpen(true)
	}

	const onConfirmDialogClose = () => {
		setDialogOpen(false)
	}

	const handleConfirm = () => {
		onDelete?.(setDialogOpen)
	}

	return (
		<>
			<Button 
				className="text-red-600" 
				variant="plain" 
				size="sm" 
				icon={<HiOutlineTrash />}
				type="button"
				onClick={onConfirmDialogOpen}
			>
				Delete
			</Button>
			<ConfirmDialog
				isOpen={dialogOpen}
				onClose={onConfirmDialogClose}
				onRequestClose={onConfirmDialogClose}
				type="danger"
				title="Delete product"
				onCancel={onConfirmDialogClose}
				onConfirm={handleConfirm}
				confirmButtonColor="red-600"
			>
				<p>
					Are you sure you want to delete this product? 
					All record related to this product will be deleted as well. 
					This action cannot be undone.
				</p>
			</ConfirmDialog>
		</>
	)
}

const StudentForm = forwardRef((props, ref) => {

	const { type, initialData, onFormSubmit, onDiscard, onDelete } = props
	
	const newId = useUniqueId('product-')
	
	const [formArray, setFormArray] = useState([]);
	
	
	const handleAccess = () => {
		let accessElements = [...formArray];
		const obj= { name: 'test1', email: 'abc.com' }
		accessElements.push(obj)
		setFormArray(accessElements)
		//console.log('array',accessElements);
		// <PricingFields touched={touched} errors={errors} values={values} />
		 
		
	  }
	return (
		<>
			<Formik
				innerRef={ref}
				initialValues={{
					...initialData,
					tags: initialData?.tags ? initialData.tags.map(value => ({label: value, value})) : []
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					const formData = cloneDeep(values)
					formData.tags = formData.tags.map(tag => tag.value)
					if (type === 'new') {
						formData.id = newId
						if (formData.imgList.length > 0) {
							formData.img = formData.imgList[0].img
						}
					}
					onFormSubmit?.(formData, setSubmitting)
				}}
			>
				{({values, touched, errors, isSubmitting}) => (
					<>
					<div className='flex flex-wrap justify-between items-center px-4'>
						<div className='flex flex-wrap  justify-between items-center'>
						<div className='mr-2'><h5 className='items-center'>Student </h5></div>
						<div><p className='text-[##B5B5C3]'>Add Student</p></div>
							
						</div>
						<div>
						<StickyFooter 
								className="px-8 flex items-center justify-between py-4"
								stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"						
							>
								<div>
									{type === 'edit' && <DeleteProductButton onDelete={onDelete} / >}
								</div>
								<div className="md:flex items-center">
									<Button 
										size="sm" 
										className="ltr:mr-3 rtl:ml-3 text-[#3699FF] bg-[#E1F0FF]"
										icon={<BsArrowLeft />}
										onClick={() => onDiscard?.()}
										type="button"
									>
									Back
									</Button>
									<Button 
										size="sm" 
										variant="solid" 
										loading={isSubmitting} 
										icon={<AiOutlineSave />}
										type="submit"
										className="bg-[#00c3b8] hover:bg-[#00c3b8] "
									>
										Save
									</Button>
								</div>
							</StickyFooter>
						</div>
					
					</div>
					
					
					<Form className='formpadding px-4'>
						
						<FormContainer>
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
			                   
								<div className="lg:col-span-1">
									<ProductImages touched={touched} errors={errors} values={values} />
								</div>
								<div className="lg:col-span-2">
									<BasicInformationFields touched={touched} errors={errors} values={values} />
								
									<OrganizationFields touched={touched} errors={errors} values={values} />
								
								</div>
								
							</div>
							
				</FormContainer>
					<div className=''>
					<h5 className='mb-6'>Student Details:</h5>
					<PricingFields touched={touched} errors={errors} values={values} />
				
			  
				</div>
				
			</Form>
		</>
	)}
				
</Formik>
				
</>
)
})

StudentForm.defaultProps = {
	type: 'edit',
	initialData: {
		id: '',
		name: '',
		productCode: '',
		img: '',
		imgList: [],
		category: '',
		price: 0,
		stock: 0,
		status: 0,
		costPerItem: 0,
		bulkDiscountPrice: 0,
		taxRate: 6,
		tags: [],
		email: '',
		vendor: '',
		description: '',
	}
}

export default StudentForm