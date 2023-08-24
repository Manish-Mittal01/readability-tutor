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
		
			<p className="mb-6"></p>
			<FormItem
				label="Name"
				asterisk
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="name" 
					placeholder="Name" 
					component={Input}
				/>
			</FormItem>
		
			
		</AdaptableCard>
	)
}

export default BasicInformationFields