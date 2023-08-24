import React from 'react'
import { AdaptableCard,DoubleSidedImage } from 'components/shared'
import { Input, FormItem ,FormContainer,Upload,Select} from 'components/ui'
import CreatableSelect from 'react-select/creatable'
import { Field } from 'formik'


export const tags = [
	{ label: 'Albania', value: 'Albania'},
	{ label: 'Algeria', value: 'Algeria'},
	{ label: 'West Virginia	', value: 'wv'},
	{ label: 'American Samoa', value: 'American Samoa'},
	{ label: 'Andorra', value: 'Andorra'},
]



const PricingFields = props => {


	return (
	<FormContainer>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					<div className="lg:col-span-1">
						<AdaptableCard className="">
								<FormItem>
								<>
								<Upload
							
								showList={false}
								draggable
							>
									<div className="my-4 text-center">
									
										<DoubleSidedImage
											className="mx-auto"
											src="/img/others/upload.png"
											darkModeSrc="/img/others/upload-dark.png"
										/>
										
										<span className="text-gray-800 dark:text-white">Profile Image of User </span>
									</div>
									</Upload>
								</>
							
							</FormItem>
						</AdaptableCard>
					</div>
			<div className="lg:col-span-2">
				<AdaptableCard className="mb-4" divider>
					<p className="mb-6"></p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
					<div className="col-span-1">
						<FormItem
						label="Email"	
						>
						<Field 
							type="text" 
							autoComplete="off" 
							name="Email" 
							placeholder="Email" 
							component={Input}
						/>
						
						</FormItem>
						 </div>
						 <div className="col-span-1">
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
					</div>
						<div className="col-span-1">
						<FormItem
							label="Name"	
							>
						<Field 
							type="text" 
							autoComplete="off" 
							name="Name" 
							placeholder="Name" 
							component={Input}
						/>
						</FormItem>		
						</div>
						<div className="col-span-1">
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
						</div>
				</AdaptableCard>	
		</div>
		</div>	
	</FormContainer>
	)
}

export default PricingFields