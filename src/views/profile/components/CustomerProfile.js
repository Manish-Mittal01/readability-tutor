import React, { useState } from 'react'
import { Card, Avatar, Button, Notification, toast } from 'components/ui'
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { ConfirmDialog } from 'components/shared'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteCustomer } from '../store/dataSlice'
import { openEditCustomerDetailDialog } from '../store/stateSlice'
import EditCustomerProfile from './EditCustomerProfile'
import DemoBoxContent from 'components/docs/DemoBoxContent'
import { HiMail } from 'react-icons/hi';
const CustomerInfoField = ({title, value}) => {
	return (
		<div>
			<span>{title}</span>
			<p className="text-gray-700 dark:text-gray-200 font-semibold">{value}</p>
		</div>
	)
}

const CustomerProfileAction = ({id}) => {

	const dispatch = useDispatch()
	const [dialogOpen, setDialogOpen] = useState(false)

	const navigate = useNavigate()

	const onDialogClose = () => {
		setDialogOpen(false)
	}

	const onDialogOpen = () => {
		setDialogOpen(true)
	}

	const onDelete = () => {
		setDialogOpen(false)
		dispatch(deleteCustomer({id}))
		navigate('/app/crm/customers')
		toast.push(
			<Notification title={"Successfuly Deleted"} type="success">
				Customer successfuly deleted
			</Notification>
		)
	}

	const onEdit = () => {
		dispatch(openEditCustomerDetailDialog())
	}

	return (
		<>
			<Button 
				block 
				icon={<HiOutlineTrash />}
				onClick={onDialogOpen}
			>
				Delete
			</Button>
			<Button 
				icon={<HiPencilAlt/>} 
				block 
				variant="solid"
				onClick={onEdit} 
			>	
				Edit
			</Button>
			<ConfirmDialog
				isOpen={dialogOpen}
				onClose={onDialogClose}
				onRequestClose={onDialogClose}
				type="danger"
				title="Delete customer"
				onCancel={onDialogClose}
				onConfirm={onDelete}
				confirmButtonColor="red-600"
			>
				<p>
					Are you sure you want to delete this customer? 
					All record related to this customer will be deleted as well. 
					This action cannot be undone.
				</p>
			</ConfirmDialog>
			<EditCustomerProfile />
		</>
	)
}

const CustomerProfile = ({data = {}}) => {
	return (
		<>
		<Card>
			<div className="flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
				<div className="flex xl:flex-col items-center gap-4">
					<Avatar size={90} shape="circle" src={data.img} />
					<h4 className="font-bold">{data.name}</h4>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8">
			  <span className="school-name">Newman Publich School</span>
			  <span className="email">wj@mail.com</span>
			  <span className="phone">310-(000)-000</span>
				</div>
				<div className="mt-4 flex flex-col xl:flex-row gap-2">
					<CustomerProfileAction id={data.id} />
			
				</div>
			
			</div>
		
		</Card>
		<div className="grid grid-rows-2 grid-flow-col gap-4">
			<DemoBoxContent className="row-span-2 bg-fuchsia-300 grid place-content-center">
			<Button shape="circle" variant="plain" size="xs" icon={<HiMail />} /> 
				Welcome Email
			</DemoBoxContent>
			<DemoBoxContent className="row-span-2 bg-fuchsia-300 grid place-content-center">
			<Button shape="circle" variant="plain" size="xs" icon={<HiMail />} /> 
				Add Student
			</DemoBoxContent>
			
		  </div>

		  <div className="grid grid-rows-2 grid-flow-col gap-4">
			<DemoBoxContent className="row-span-2 bg-fuchsia-300 grid place-content-center">
			<Button shape="circle" variant="plain" size="xs" icon={<HiMail />} /> 
			Import Stuents
			</DemoBoxContent>
			<DemoBoxContent className="row-span-2 bg-fuchsia-300 grid place-content-center">
			<Button shape="circle" variant="plain" size="xs" icon={<HiMail />} /> 
			Institutes
			</DemoBoxContent>
			
		  </div>
		</>
	)
}

export default CustomerProfile
