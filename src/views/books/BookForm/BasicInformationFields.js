import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem,Switcher} from 'components/ui'
import { BsCheck } from 'react-icons/bs'
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
	const withIcon = (component) => {
		return <div className="text-lg">{component}</div>
	}
	return (
		<AdaptableCard className="mb-4" divider>
			
			<p className="mb-6"></p>
			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
			<FormItem
				label="Title"
				asterisk
				invalid={errors.title && touched.title}
				errorMessage={errors.title}
			>
				<Field 
					type="text"
					asterisk 
					autoComplete="off" 
					name="title" 
					placeholder="Title" 
					component={Input}
				/>
			</FormItem>
			<FormItem
				label="Credits"
				asterisk
				invalid={errors.credits && touched.credits}
				errorMessage={errors.credits}
			>
				<Field 
					textArea
					autoComplete="off" 
					name="credits" 
					placeholder="Credits " 
					component={Input}
				/>
			</FormItem>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
			<FormItem
				label="Grade"
				asterisk
				invalid={errors.productCode && touched.productCode}
				errorMessage={errors.productCode}
			>
				<Field 
					type="number" 
					autoComplete="off" 
					name="grade" 
					placeholder="1" 
					component={Input}
				/>
			</FormItem>

			<FormItem
				label="Genres"
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="genres" 
					placeholder="Genres" 
					component={Input}
				/>
			</FormItem>
			         <FormItem
						label="Tags"	
						>
						<Field 
							type="text" 
							autoComplete="off" 
							name="tags" 
							placeholder="Tags" 
							component={Input}
						/>
						
						</FormItem>

						<FormItem
						label="BookURL"	
						>
						<Field 
							type="text" 
							autoComplete="off" 
							name="bookurl" 
							placeholder="BookURL" 
							component={Input}
						/>
					</FormItem>
					<FormItem
						label="Optional Words
						"	
						>
						<Field 
							type="text" 
							autoComplete="off" 
							name="words" 
							placeholder="Optional Words" 
							component={Input}
						/>
						
						</FormItem>
						<FormItem
							label="AR Score"	
							>
							<Field 
							type="text" 
							autoComplete="off" 
							name="AR Score" 
							placeholder="AR Score" 
							component={Input}
						/>	
							</FormItem>
							<FormItem
							label="Lexile Level Start"	
							>
							<Field 
							type="text" 
							autoComplete="off" 
							name="Lexile Level Start" 
							placeholder="Lexile Level Start" 
							component={Input}
						/>	
							</FormItem>
							<FormItem
							label="Lexile Level End"	
							>
							<Field 
							type="text" 
							autoComplete="off" 
							name="Lexile Level End" 
							placeholder="Lexile Level End" 
							component={Input}
						/>	
							</FormItem>
							<FormItem
							label="Is Active?">
							 <Switcher
							 className="swithercustom bg-[#00c3b8]"
							 defaultChecked 
							unCheckedContent={withIcon()}
							checkedContent={withIcon(<BsCheck />)}
              				/>
							<p>If deactive than that reader can't login in this application</p>
							</FormItem>
			</div>
		</AdaptableCard>
	)
}

export default BasicInformationFields