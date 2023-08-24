import React from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

export const categories = [
	{ label: 'Bags', value: 'bags'},
	{ label: 'Cloths', value: 'cloths'},
	{ label: 'Devices', value: 'devices'},
	{ label: 'Shoes', value: 'shoes'},
	{ label: 'Watches', value: 'watches'}
]

const BasicInformationFields = props => {

	const { touched, errors } = props

	return (
		<AdaptableCard className="mb-4" divider>
			{/* <h5>Institution </h5> */}
			<p className="mb-6"></p>
			<FormItem
				label="Institution Name"
				asterisk
				invalid={errors.insname && touched.insname}
				errorMessage={errors.insname}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="insname" 
					placeholder="Institution Name" 
					component={Input}
				/>
			</FormItem>
			<FormItem
				label="Address"
				asterisk
				invalid={errors.address && touched.address}
				errorMessage={errors.address}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="address" 
					placeholder="Address" 
					component={Input}
				/>
			</FormItem>
			
		</AdaptableCard>
	)
}

export default BasicInformationFields