import React, { useEffect } from 'react'
import { Card, Avatar } from 'components/ui'
import { GrowShrinkTag, MediaSkeleton, Loading } from 'components/shared'
import { getTeacherStatistic } from 'views/institution/store/dataSlice'
import { HiOutlineUserGroup, HiOutlineUserAdd, HiOutlineUsers } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import { MdPublic,MdAutoStories,MdFamilyRestroom, MdHouse,MdMenuBook} from 'react-icons/md';
const StatisticCard = props => {

	const { icon, avatarClass, label,subText, value, growthRate, loading } = props

	const avatarSize = 55

	return (
		<Card bordered>
			<Loading 
				loading={loading} 
				customLoader={
					<MediaSkeleton 
						avatarProps={
							{
								className: 'rounded',
								width: avatarSize,
								height: avatarSize
							}
						} 
					/>
				}
			>
				<div className="flex  justify-between items-center">
					<div className="mobileWidthDash flex items-center gap-4">
						<Avatar className={avatarClass} size={avatarSize} icon={icon} />
						<div>
							<span className='font-bold label-text'>{label}</span>
							{/* <h3>
								<NumberFormat
									displayType="text"
									value={value}
									thousandSeparator
								/>
							</h3> */}
							<div className='des'>{subText}</div>
						</div>
					</div>
					<div>
							{/* <span className='font-bold'>{label}</span> */}
							<div className='cursor-pointer ml-4 box-border flex justify-center items-center h-10 w-10 borderClass text-[#1BC5BD] font-bold bg-[#C9F7F5] uppercase'>
								<NumberFormat
									displayType="text"
									value={value}
									thousandSeparator
								/>
							</div>
						</div>
				</div>
			</Loading>
		</Card>
	)
}

const CustomerStatistic = () => {

	const dispatch = useDispatch()

	const statisticData = useSelector((state) => state?.crmCustomers?.data?.statisticTeacherData)
	const loading = useSelector((state) => state?.crmCustomers?.data?.statisticLoading)
//console.log('project static',statisticData);
	useEffect(() => {
		//dispatch(getTeacherStatistic())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 px-4 py-4">
			{/* <StatisticCard 
				icon={<img src="/img/dashboard/globe_icon.svg" />} 
				avatarClass="image-size"
				label="Our Reach"
				subText="Country Where Our Application Use"
				// value={statisticData?.totalCustomers?.value}
				value={247}
				growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/> */}
			
			<StatisticCard 
				icon={<img src="/img/dashboard/books_icon.svg" />} 
				avatarClass="image-size"
				label="Books Library"
				subText="List of Books"
				// value={statisticData?.activeCustomers?.value}
				value={58}
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<img src="/img/dashboard/reading_icon.svg" />} 
				avatarClass="image-size"
				label="Avg Reading Hours/Day"
				// subText="Daily Reading Time"
				// value={statisticData?.newCustomers?.value}
				value={58}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<img src="/img/dashboard/school_icon.svg" />} 
				avatarClass="image-size"
				label="Schools"
				subText="List of Schools"
				// value={statisticData?.totalCustomers?.value}
				value={24}
				growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<img src="/img/dashboard/parents_icon.svg" />} 
				avatarClass="image-size"
				label="Parents"
				//subText="We delight to have actual users"
				// value={statisticData?.activeCustomers?.value}
				value={6475}
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<img src="/img/dashboard/teacher_icon.svg" />} 
				avatarClass="image-size "
				label="Teachers"
				// subText="Recommended by expert"
				// value={statisticData?.newCustomers?.value}
				value={109}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<img src="/img/dashboard/growth_icon.svg" />} 
				avatarClass="image-size "
				label="Not On Platform"
				subText="Not On Platform"
				// value={statisticData?.newCustomers?.value}
				value={750}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
				/>
                <StatisticCard 
				icon={<img src="/img/dashboard/student_icon.png" />} 
				avatarClass="image-size "
				label="Leveled Up"
				subText="Level Up"
				// value={statisticData?.newCustomers?.value}
				value={500}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
                
				  <StatisticCard 
				icon={<img src="/img/dashboard/student_icon.png" />} 
				avatarClass="image-size "
				label="Leveled Down"
				subText="Level Down"
				// value={statisticData?.newCustomers?.value}
				value={750}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
				/>
				  <StatisticCard 
				icon={<img src="/img/dashboard/teacher_icon.svg" />} 
				avatarClass="image-size "
				label="Open Seats"
                                subText="Number of Unused Seats"
				// value={statisticData?.newCustomers?.value}
				value={200}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
				/>
				  <StatisticCard 
				icon={<img src="/img/dashboard/growth_icon.svg" />} 
				avatarClass="image-size "
				label="Active"
				// value={statisticData?.newCustomers?.value}
				value={50}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
				/>
				  <StatisticCard 
				icon={<img src="/img/dashboard/growth_icon.svg" />} 
				avatarClass="image-size "
				label="Inactive"
				// value={statisticData?.newCustomers?.value}
				value={75}
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
				/>
		</div>
		
	)
}

export default CustomerStatistic