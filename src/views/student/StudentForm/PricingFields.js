import React, {useState} from 'react'

import { AdaptableCard,DoubleSidedImage } from 'components/shared'
import { Input, FormItem ,FormContainer,Select,Radio,Switcher } from 'components/ui'
import CreatableSelect from 'react-select/creatable'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'


import { Field } from 'formik'

const withIcon = (component) => {
    return <div className="text-lg">{component}</div>
}
export const tags = [
	{ label: 'PRE-k', value: 'pre-k'},
	{ label: 'K.G', value: 'kg'},
	{ label: '1', value: '1'},
	{ label: '2', value: '2'},
	{ label: '3', value: '3'},
	{ label: '4', value: '4'},
	{ label: '5', value: '5'},
]


const PricingFields = props => {



	
	const [value, setValue] = useState('storyTime')

	const onChange = (val) => {
        setValue(val)
    }
	const [size, setSize] = useState(['md'])

    const onSizeChange = (val) => {
        setSize(val)
    }
	return (
	<FormContainer>
			<AdaptableCard className="mb-4" divider>	
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
					<div className="col-span-1">
						<FormItem
						asterisk
						label="Teacher Name"	
						>
						<Field 
							type="text" 
							autoComplete="off" 
							name="Teacher Name" 
							placeholder="Teacher Name" 
							component={Input}
						/>
						
						</FormItem>
						 </div>
						 <div className="col-span-1">
						 <FormItem
						label="Age"	
						asterisk
						>
					
						<input
						type="range"
						min="0"
						max="1000"
						className="thumb thumb--zindex-3"
					/>
					
						</FormItem>
					</div>
				<div className="col-span-1">
						<FormItem
							label="Grade/Classs"
							asterisk	
							>
						<Select
							componentAs={CreatableSelect}
							isMulti
							options={tags}			
							/>	
						</FormItem>		
				</div>
				<div className="col-span-1">
							<FormItem
							label="Class Section"	
							>
							<Field 
							type="text" 
							autoComplete="off" 
							name="Class Section" 
							placeholder="Class Section" 
							component={Input}
						/>	
							</FormItem>
				</div>
				<div className="col-span-1">
							<FormItem
							label="Level"
							asterisk	
							>
				
							   <input
								type="range"
								min="0"
							
								max="1000"
								className="thumb 
								"
							/>

							</FormItem>
				</div>
				<div className="col-span-1">
							<FormItem
							label="Reading Format"
							asterisk	
							>
							<Radio.Group vertical value={value} onChange={onChange}>
								<Radio value={'advanced'}>Advanced (Sentence by sentence)</Radio>
								<Radio value={'beginner'}>Beginner (Word by word)</Radio>
								<Radio  value={'storyTime'}>Story Time</Radio>
							</Radio.Group>
							</FormItem>
				</div>
				<div className="col-span-1">
							<FormItem
							label="Reading Minutes Per/day"	
							>
							<Field 
							type="number" 
							autoComplete="off" 
							name="reading" 
							placeholder="10" 
							component={Input}
						/>	
							</FormItem>
				</div>
				<div className="col-span-1">
							<FormItem
							label="Show Comprehension?"	
							>
						  <Switcher
						    className="swithercustom bg-[#00c3b8]"
							unCheckedContent={withIcon()}
							checkedContent={withIcon(<BsCheck />)}
              				/>
							<p>Comprehension will show to reader while reading</p>

							</FormItem>
				</div>
				<div className="col-span-1">
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
				<div className="col-span-1">
							<FormItem
							label="Reading Days (Total Minutes Per Week: 70)">
								<div className="flex items-center">
						{/* { row?.reading_shedule } */}
				<div className="segment">
				<button style={{background: "#00c3b8"}} className="text-[#fff] segment-item segment-item-default h-9 px-3 py-2 text-sm">M
				</button>
				<button style={{background: "#00c3b8"}} className="text-[#fff] segment-item segment-item-default segment-item-active h-9 px-3 py-2 text-sm">T</button>
				<button style={{background: "#00c3b8"}} className="text-[#fff] segment-item segment-item-default h-9 px-3 py-2 text-sm">W
				</button>
				<button style={{background: "#00c3b8"}} className="text-[#fff] segment-item segment-item-default h-9 px-3 py-2 text-sm">T</button>
				<button style={{background: "#00c3b8"}} className="text-[#fff] segment-item segment-item-default h-9 px-3 py-2 text-sm">F</button>
				<button style={{background: "#00c3b8"}} className="text-[#fff] segment-item segment-item-default h-9 px-3 py-2 text-sm">S</button>
				<button style={{background: "#00c3b8"}} className="text-[#fff] segment-item segment-item-default h-9 px-3 py-2 text-sm">S</button>
				</div>
            </div>
							</FormItem>
				</div>
				<div className="col-span-1">
							<FormItem
							label="Daily Reminder?">
						  <Switcher
						   className="swithercustom bg-[#00c3b8]"
							unCheckedContent={withIcon()}
							checkedContent={withIcon(<BsCheck />)}
              				/>
                        <p>If book is deactive than that user can't see this book in this application</p>
							</FormItem>
				</div>

			</div>
		</AdaptableCard>				
	</FormContainer>
	)
}

export default PricingFields