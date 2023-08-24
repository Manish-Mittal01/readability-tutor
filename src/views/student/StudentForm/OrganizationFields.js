import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Select } from 'components/ui'
import CreatableSelect from 'react-select/creatable'
import { Field } from 'formik'

export const categories = [
	{ label: 'United Kingdom', value: 'uk'},
	{ label: 'Zimbabwe', value: 'Zimbabwe'},
	{ label: 'Zambia', value: 'Zambia'},
	{ label: 'Yuslavia', value: 'Yuslavia'},
	{ label: 'Wallis And Futuna Islands', value: 'wfa'}
]

export const tags = [
	{ label: 'Karnataka', value: 'Karnataka'},
	{ label: 'Wyoming', value: 'Wyoming'},
	{ label: 'West Virginia	', value: 'wv'},
	{ label: 'Wisconsin', value: 'Wisconsin'},
	{ label: 'Washington', value: 'Washington'},
]

export const district = [
	{ label: 'NA', value: 'NA'},
	{ label: 'NA', value: 'NA'},
	{ label: 'NA	', value: 'NA'},
	{ label: 'NA', value: 'NA'},
	{ label: 'NA', value: 'NA'},
]


const OrganizationFields =  props => {

	const { values, touched, errors } = props

return (
	<AdaptableCard className="mb-4" divider isLastChild>
			{/* <h5>Organizations</h5>
			<p className="mb-6">Section to config the product attribute</p> */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="col-span-1">
					<FormItem
					label="Student ID"
					asterisk
					invalid={errors.studentid && touched.studentid}
					errorMessage={errors.studentid}
					>
						<Field 
							type="text" 
							autoComplete="off" 
							name="studentid" 
							placeholder="Student ID" 
							component={Input}
						/>
				</FormItem>
				</div>
				<div className="col-span-1">
					<FormItem
					label="PIN"
					asterisk
					invalid={errors.password && touched.password}
					errorMessage={errors.password}	
					>
						<Field 
							type="password" 
							autoComplete="off" 
							name="password" 
							placeholder="Password" 
							component={Input}
						/>
					</FormItem>
				</div>
				<div className="col-span-1">
					<FormItem
					label="Email (default) "
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
				</div>
			<div className="col-span-1">
					<FormItem
						label="Contact No (default) "
						invalid={errors.tags && touched.tags}
						errorMessage={errors.tags}
					>
						<Field name="tags">
							{({ field, form }) => (
								<Select
									componentAs={CreatableSelect}
									isMulti
									field={field}
									form={form}
									options={tags}
									value={values.tags}
									onChange={option => form.setFieldValue(field.name, option)}
								/>
							)}
						</Field>
					</FormItem>
			</div>
			<div className="col-span-1">
				<FormItem
				label="Email2"
				invalid={errors.email2 && touched.email2}
				errorMessage={errors.email2}
			>
					<Field 
						type="text" 
						autoComplete="off" 
						name="Email2" 
						placeholder="Email2" 
						component={Input}
					/>
				</FormItem>
					</div>
			<div className="col-span-1">
					<FormItem
						label="Cell Phone"
						invalid={errors.tags && touched.tags}
						errorMessage={errors.tags}
					>
						<Field name="tags">
							{({ field, form }) => (
								<Select
									componentAs={CreatableSelect}
									isMulti
									field={field}
									form={form}
									options={tags}
									value={values.tags}
									onChange={option => form.setFieldValue(field.name, option)}
								/>
							)}
						</Field>
					</FormItem>
			</div>
			<div className="col-span-1">
				<FormItem
				label="Email3"
				invalid={errors.Email3 && touched.Email3}
				errorMessage={errors.Email3}
			>
					<Field 
						type="text" 
						autoComplete="off" 
						name="Email3" 
						placeholder="Email3" 
						component={Input}
					/>
			</FormItem>
			</div>
			<div className="col-span-1">
				<FormItem
						label="Cell Phone"
						invalid={errors.tags && touched.tags}
						errorMessage={errors.tags}
					>
						<Field name="tags">
							{({ field, form }) => (
								<Select
									componentAs={CreatableSelect}
									isMulti
									field={field}
									form={form}
									options={tags}
									value={values.tags}
									onChange={option => form.setFieldValue(field.name, option)}
								/>
							)}
						</Field>
				</FormItem>
			</div>
		</div>
			
			
	</AdaptableCard>
	)
}

export default OrganizationFields