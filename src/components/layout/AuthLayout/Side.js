import React, { cloneElement } from 'react'
import { Avatar } from 'components/ui'
import Logo from 'components/template/Logo'
import { APP_NAME } from 'constants/app.constant'

const Side = ({children, content, ...rest }) => {
	return (
		<div className="grid lg:grid-cols-3 h-full">
			
			<div style={{"backgroundImage":"url(\"https://predev.readabilitytutor.com/Images/readability-backgroud-image-2.jpg\")","backgroundRepeat":"no-repeat","backgroundAttachment":"fixed","backgroundPosition":"center","backgroundSize":"cover"}} className="col-span-3 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
				
                                <div className="p-5 border border-gray-300 bg-white rounded-xl xl:min-w-[450px] px-8">
					<Logo mode="light" imgClass="m-auto"/>
                                        <div className="mb-8">
						{content}
					</div>
					{children ? cloneElement(children, { ...rest }) : null}
				</div>
                                <span className="text-white">Copyright  &copy;  {`${new Date().getFullYear()}`} <span className="font-semibold">All rights reserved. [] Readability</span> </span>
			
			</div>
		</div>
	)
}

export default Side