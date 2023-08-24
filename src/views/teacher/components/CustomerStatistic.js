import React, { useEffect } from 'react'
import { Card, Avatar } from 'components/ui'
import { GrowShrinkTag, MediaSkeleton, Loading } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import { MdPublic, MdHouse,MdMenuBook,MdPeopleAlt,MdPeopleOutline} from 'react-icons/md';

const StatisticCard = props => {

	const { icon, avatarClass, label, value, growthRate, loading } = props

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
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-4">
						<Avatar className={avatarClass} size={avatarSize} icon={icon} />
						<div>
							<span>{label}</span>
							<h3>
								<NumberFormat
									displayType="text"
									value={value}
									thousandSeparator
								/>
							</h3>
						</div>
					</div>
					<GrowShrinkTag value={growthRate} suffix="%" />
				</div>
			</Loading>
		</Card>
	)
}

const CustomerStatistic = () => {

	const dispatch = useDispatch()

	const statisticData = useSelector((state) => state?.readability?.statisticTeacherData)
	const loading = useSelector((state) => state?.readability?.statisticLoading)
	useEffect(() => {
		
	}, [])

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 px-4 py-4">
			  <StatisticCard 
				icon={<MdPublic />} 
				avatarClass="!bg-blue-500"
				label="Teachers"
				value={statisticData?.totalCustomers?.value}
				growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/>
      	<StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-pink-400"
				label="Books Read"
				value={statisticData?.activeCustomers?.value}
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/> 
      <StatisticCard 
				icon={<MdPublic />} 
				avatarClass="!bg-indigo-600"
				label="Students"
				value={statisticData?.totalCustomers?.value}
				growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/>
		<StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-green-200"
				label="Not on Platform"
				value="500"
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
      
			<StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-orange-300"
				label="Grades/Classes"
				value="12"
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<MdHouse />} 
				avatarClass="!bg-amber-400"
				label="Level Up"
				value="500"
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
        <StatisticCard 
				icon={<MdPublic />} 
				avatarClass="!bg-yellow-400"
				label="Level Down"
				value="700"
				growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/>
			
			<StatisticCard 
				icon={<MdPeopleAlt />} 
				avatarClass="!bg-cyan-400"
				label="Students Active"
				value="700"
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
          <StatisticCard 
				icon={<MdPeopleOutline />} 
				avatarClass="!bg-red-400"
				label="Students Inactive"
				value="800"
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
		</div>
	)
}

export default CustomerStatistic