import React, { useState } from 'react'
import { Card, Button, Notification, toast } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteCustomer } from '../store---/dataSlice'
import { openEditCustomerDetailDialog } from '../store---/stateSlice'
import EditCustomerProfile from './EditCustomerProfile'
import DemoBoxContent from 'components/docs/DemoBoxContent'
import { HiMail } from 'react-icons/hi';
import { FaFileImport } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'

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

	    <div className='info-boxes'>
		<Card className="bg-color-box bg-neutral-100">
			<div className="grid grid-rows-2 grid-cols-2 gap-4 ">
				<div>
					<DemoBoxContent className="row-span-2 bg-white  grid place-content-center">
						<div className="center"><Button shape="circle" variant="plain" size="xs" icon={<HiMail />} /> </div>
						<div className="center text-black">Welcome Email</div>
					</DemoBoxContent>
				</div>
				<div>
					<DemoBoxContent className="row-span-2 bg-white grid place-content-center">
						<div className="center"><Button shape="circle" variant="plain" size="xs" icon={<FaFileImport />} /> </div>
						<div className="center text-black">Add Student</div>
					</DemoBoxContent>
				</div>
				<div>
					<DemoBoxContent className="row-span-2 bg-white grid place-content-center">
						
						<div className="center"><Button shape="circle" variant="plain" size="xs" icon={<FaFileImport />} /> </div>
						<div className="center text-black">Import Stuents</div>
					</DemoBoxContent>
				</div>
				<div>
					<DemoBoxContent className="row-span-2 bg-white grid place-content-center">
						<div className="center"><Button shape="circle" variant="plain" size="xs" icon={<MdSchool />} /> </div>
						<div className="center text-black">Institute</div>
					</DemoBoxContent>
				</div>
				
				
			</div>
		  </Card>
		  </div>
		 
		</>
	)
}

export default CustomerProfile
