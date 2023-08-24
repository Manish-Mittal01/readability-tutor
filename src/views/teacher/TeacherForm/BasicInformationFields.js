import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem,Select} from 'components/ui'
import CreatableSelect from 'react-select/creatable'
import { Field } from 'formik'

export const categories = [
	{ label: 'Bags', value: 'bags'},
	{ label: 'Cloths', value: 'cloths'},
	{ label: 'Devices', value: 'devices'},
	{ label: 'Shoes', value: 'shoes'},
	{ label: 'Watches', value: 'watches'}
]
export const tags = [
	{ label: 'Albania', value: 'Albania'},
	{ label: 'Algeria', value: 'Algeria'},
	{ label: 'West Virginia	', value: 'wv'},
	{ label: 'American Samoa', value: 'American Samoa'},
	{ label: 'Andorra', value: 'Andorra'},
]

const BasicInformationFields = props => {

	const { touched, errors } = props

	return (
		<AdaptableCard className="mb-4" divider>
		
			<p className="mb-6"></p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
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
				label="Teacher Name"
				asterisk
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="name" 
					placeholder="Teacher Name" 
					component={Input}
				/>
			</FormItem>
			         <FormItem
						label="Email"
						asterisk
						invalid={errors.email && touched.email}
						errorMessage={errors.email}
							>
							<Field 
								type="text" 
								autoComplete="off" 
								name="email" 
								placeholder="Email" 
								component={Input}
							/>
							
							</FormItem>

							<FormItem
							label="Password"	
							>
							<Field 
								type="password" 
								autoComplete="off" 
								name="Password" 
								placeholder="Password" 
								component={Input}
							/>
						</FormItem>
						<FormItem
							label="Address"	
							>
							<Field 
								type="text" 
								autoComplete="off" 
								name="email" 
								placeholder="Email" 
								component={Input}
							/>
							
							</FormItem>
							<FormItem
							label="Mobile No"	
							>
							<Select
							componentAs={CreatableSelect}
							isMulti
							options={tags}			
							/>	
							</FormItem>
			</div>
		</AdaptableCard>
	)
}

export default BasicInformationFields