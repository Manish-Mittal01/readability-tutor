import React from 'react'
import classNames from 'classnames'
import { Container } from 'components/shared'
import { APP_NAME } from 'constants/app.constant'
import { PAGE_CONTAINER_GUTTER_X } from 'constants/theme.constant' 

const FooterContent = () => {
	return (
		<div className="px-4 md:flex lg:flex xl:flex items-center justify-between flex-auto w-full">
		<div className='mobileResposnive'>	
		<a className="text-gray" target="_blank" href="https://www.readabilitytutor.com/support/" onClick={e => e.preventDefault()}>Support</a>
				<span className="mx-2 text-muted"> </span>
                <a className="text-gray" target="_blank" href="https://www.readabilitytutor.com/edu/faqs/" onClick={e => e.preventDefault()}>FAQs</a>
			
		</div>
		<div className="mobileResposnive">
			<span>Copyright  &copy;  {`${new Date().getFullYear()}`} <span className="font-semibold">
				{/* {`${APP_NAME}`} */}
				</span> All rights reserved.|| Readability</span>
		</div>
		</div>
	)
}

export default function Footer ({ pageContainerType }) {
	
	return (
		<footer 
			className={
				classNames(
					`footer flex flex-auto items-center h-16 ${PAGE_CONTAINER_GUTTER_X}`,
				)
			}
		>
			{
				pageContainerType === 'contained' 
				? 
				<Container>
					<FooterContent />
				</Container>
				:
				<FooterContent />
			}
		</footer>
	)
}

