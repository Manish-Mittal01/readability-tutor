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
		
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="col-span-1">
					<FormItem
						label="Country"
						invalid={errors.category && touched.category}
						errorMessage={errors.category}
					>
						<Field name="category">
							{({ field, form }) => (
								<Select
									field={field}
									form={form}
									options={categories}
									value={categories.filter(category => category.value === values.category)}
									onChange={option => form.setFieldValue(field.name, option.value)}
								/>
							)}
						</Field>
					</FormItem>
				</div>
				<div className="col-span-1">
					<FormItem
						label="State"
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
						label="District"
						invalid={errors.district && touched.district}
						errorMessage={errors.district}
					>
						<Field name="tags">
							{({ field, form }) => (
								<Select
									componentAs={CreatableSelect}
									isMulti
									field={field}
									form={form}
									options={district}
									value={values.district}
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