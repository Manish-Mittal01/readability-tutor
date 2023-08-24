import React from 'react'
import { 
	Input, 
	Avatar,
	Upload,
	Button,
	Select,
	Switcher,
	Notification, 
	toast,
	FormContainer 
} from 'components/ui'
import FormDesription from './FormDesription'
import {apiSaveProfile } from 'services/AuthService'
import FormRow from './FormRow'
import { Field, Form, Formik } from 'formik'
import { components } from 'react-select'
import { 
	HiOutlineUserCircle, 
	HiOutlineMail, 
	HiOutlineBriefcase, 
	HiOutlineUser, 
	HiCheck,
	HiOutlineGlobeAlt
} from 'react-icons/hi'
import {FaLock,FaPhoneAlt} from 'react-icons/fa'

import * as Yup from 'yup'

const { Control } = components

const validationSchema = Yup.object().shape({
	
	DisplayName: Yup?.string().min(3, 'Too Short!').max(12, 'Too Long!').required('User Name Required'),
	email: Yup?.string().email('Invalid email').required('Email Required'),
	password: Yup?.string().required('Password Required'),
	MobileNo: Yup?.string().min(10, 'Too Short!').max(13, 'Too Long!')
	
	// lang:  Yup.string(),
	// timeZone:  Yup.string(),
	// syncData: Yup.bool()
})

const langOptions = [
	{ value: 'en', label: 'English (US)', imgPath: '/img/countries/us.png' },
	{ value: 'ch', label: '中文', imgPath: '/img/countries/cn.png' },
	{ value: 'jp', label: '日本语', imgPath: '/img/countries/jp.png' },
	{ value: 'fr', label: 'French', imgPath: '/img/countries/fr.png' }
]

const CustomSelectOption = ({innerProps, label, data, isSelected}) => {
	return (
		<div 
			className={`flex items-center justify-between p-2 ${isSelected ? 'bg-gray-100 dark:bg-gray-500' : 'hover:bg-gray-50 dark:hover:bg-gray-600'}`} 
			{...innerProps}
		>
			<div className="flex items-center">
				<Avatar shape="circle" size={20} src={data?.imgPath} />
				<span className="ml-2 rtl:mr-2">{label}</span>
			</div>
			{isSelected && <HiCheck className="text-emerald-500 text-xl" />}
		</div>
	)
}

const CustomControl = ({ children, ...props }) => {	 
	const selected = props?.getValue()[0]
	return (
		<Control {...props}>
			{selected && <Avatar className="ltr:ml-4 rtl:mr-4" shape="circle" size={18} src={selected.imgPath} />}
			{children}
		</Control>
	)
}

const Profile = ({data}) => {
	
	const onSetFormFile = (form, field, file) => {
		form.setFieldValue(field?.name, URL?.createObjectURL(file[0]))
	}

	const onFormSubmit = (values, setSubmitting) => {
		const payload  = {
			"email": values?.email,
			"password": values?.password,
			"displayName": values?.DisplayName,
			"countryId": 0,
			"mobileNo": values?.MobileNo,
		}
	  
		apiSaveProfile(payload).then((response) => {
			
			
			if(response.data.ResultCode=='Success'){
				toast.push(
					<Notification title={"Profile updated"} type="success" />
				,{
					placement: 'top-center'
				})
				  setSubmitting(false)

			} else{
				toast.push(
					<Notification title={"Something went wrong"} type="success" />
				,{
					placement: 'top-center'
				})

				setSubmitting(false)
			}
			
		  }
		  ).catch(err => {
			
			toast.push(
				
				<Notification title={err?.response?.data?.ResultDescription} type="danger" />
			,{
				placement: 'top-center'
			})

			setSubmitting(false)
           
		
        }
		
		)
		
		
	}

	return (
		<Formik
			initialValues={data}
			enableReinitialize
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				
				setSubmitting(true)
				
				setTimeout(() => {
					onFormSubmit(values, setSubmitting)
				}, 1000)
			
			}}
		>
			{({values, touched, errors, isSubmitting, resetForm}) => {
				const validatorProps = {touched, errors}
				return (
					<Form>
						<FormContainer>
							<FormDesription 
								title="General"
								desc="Basic info, like your name and address that will displayed in public"
							/>
							<FormRow name="DisplayName" label="Display Name" {...validatorProps} >
								<Field 
									type="text" 
									autoComplete="off" 
									name="DisplayName" 
									placeholder="Display Name" 
									component={Input}
									prefix={<HiOutlineUserCircle className="text-xl" />}
								/>
							</FormRow>
							<FormRow name="email" label="Email" {...validatorProps} >
								<Field 
									type="email"
									autoComplete="off"
									name="email"
									placeholder="Email"
									component={Input}
									prefix={<HiOutlineMail className="text-xl" />}
								/>
							</FormRow>
							<FormRow name="password" label="Password" {...validatorProps} >
								<Field 
									type="password"
									autoComplete="off"
									name="password"
									placeholder="Password"
									component={Input}
									prefix={<FaLock className="text-xl" />}
								/>
							</FormRow>
							
							<FormRow name="MobileNo" label="Mobile No" {...validatorProps} border={false} >
								<Field
									type="text" 
									autoComplete="off" 
									name="MobileNo" 
									placeholder="Mobile No" 
									component={Input}
									prefix={<FaPhoneAlt className="text-xl" />}
								/>
							</FormRow>
							
							<div className="mt-4 ltr:text-right">
								<Button className="ltr:mr-2 rtl:ml-2" type="button" onClick={resetForm}>Reset</Button>
								<Button variant="solid" loading={isSubmitting} type="submit">
									{isSubmitting ? 'Updating' : 'Update'}
								</Button>
							</div>
						</FormContainer>
					</Form>
				)
			}}
		</Formik>
	)
}

	export default Profile