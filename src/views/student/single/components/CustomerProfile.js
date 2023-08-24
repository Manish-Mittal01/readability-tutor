import React, { useState ,useEffect} from 'react'
import { Card, Avatar, Button, Notification, toast } from 'components/ui'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { ConfirmDialog } from 'components/shared'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteCustomer } from '../store/dataSlice'
import { openEditCustomerDetailDialog } from '../store/stateSlice'
import EditCustomerProfile from './EditCustomerProfile'
import isEmpty from 'lodash/isEmpty'
import { Link } from 'react-router-dom'
import {FaTransgender} from 'react-icons/fa';
import { Chart } from 'components/shared';
import {
	COLORS,
	COLOR_2,
	compreColor,
	gradeWisecolor,
	durationColor,
	userBookcolor,
	accuracyColor,
	bookReadcolor,
  } from "constants/chart.constant";
import { MdAccessTime ,MdTimeline ,MdVpnKey,MdPowerSettingsNew,MdKeyboardArrowRight,MdKeyboardArrowDown } from 'react-icons/md';
import { getCustomer, getProjectDashboardData  } from '../store/dataSlice.js'
import Graph from 'common/Graph'
const stackdata =[
	{
	  name: 'Males',
	  data: [3, 8, 4, 2, 3, 4, 3 
	  ]
	},
	{
	  name: 'Females',
	  data: [5, 4, 10, 8, 4, 4, 6 
	  ]
	}
  ]
const CustomerInfoField = ({title, value}) => {
	return (
		<div>
			<span className='font-semibold' >{title}</span>
			<p className="">{value}</p>
		</div>
	)
}

const CustomerProfileAction = ({id}) => {
	
	const dispatch = useDispatch()
	const [dialogOpen, setDialogOpen] = useState(false)

	const navigate = useNavigate()

	const onDialogClose = () => {
		setDialogOpen(false)
	}

	const onDialogOpen = () => {
		setDialogOpen(true)
	}

	const onDelete = () => {
		setDialogOpen(false)
		dispatch(deleteCustomer({id}))
		navigate('/app/crm/customers')
		toast.push(
			<Notification title={"Successfuly Deleted"} type="success">
				Customer successfuly deleted
			</Notification>
		)
	}

	const onEdit = () => {
		dispatch(openEditCustomerDetailDialog())
	}

	return (
		<>
			<Button 
				block 
				icon={<HiOutlineTrash />}
				onClick={onDialogOpen}
			>
				Delete
			</Button>
			<Button 
				icon={<HiPencilAlt/>} 
				block 
				variant="solid"
				onClick={onEdit} 
			>	
				Edit
			</Button>
			<ConfirmDialog
				isOpen={dialogOpen}
				onClose={onDialogClose}
				onRequestClose={onDialogClose}
				type="danger"
				title="Delete customer"
				onCancel={onDialogClose}
				onConfirm={onDelete}
				confirmButtonColor="red-600"
			>
				<p>
					Are you sure you want to delete this customer? 
					All record related to this customer will be deleted as well. 
					This action cannot be undone.
				</p>
			</ConfirmDialog>
			<EditCustomerProfile />
		</>
	)
}

const CustomerProfile = ({data = {}}) => {
	const dispatch = useDispatch()
const dash = useSelector((state) => state.crmCustomerDetails?.data?.dashboardData?.projectOverviewData
)

const [repaint, setRepaint] = useState(false)
const [timeRange, setTimeRange] = useState(['weekly']);

useEffect(() => {
    fetchChartData()
}, [])

const fetchChartData = () => {
    dispatch(getProjectDashboardData())
}



const [activeGraph, setActiveGraph] = useState("graph1");
const compGraph = (graphName) => {
  setActiveGraph(graphName);
 
};
const accuracyData = [{
		
	name: '< 85 ',
	data: [44, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43,41, 67, 22, 43,41, 67, 22, 43]
}, {
	name: '85-95',
	data: [13, 23, 20, 8, 13, 27,13, 23, 20, 8, 13, 27, 20, 8, 13, 27,20, 8, 13, 27]
}, {
	name: '> 95',
	data: [11, 17, 15, 15, 21, 14,11, 17, 15, 15, 21, 14,15, 15, 21, 14,15, 15, 21, 14]
}

]

const xaxisDateTimeData =[
	{
	  name: "Males",
	  data: [3, 8, 4, 2, 3, 4, 3, 1, 2, 6],
	},
	{
	  name: "Females",
	  data: [5, 4, 10, 8, 4, 4, 6, 8, 9, 16],
	},
  ]

const compreshenData = [
	{
	  name: "series1",
	  data: [31, 40, 28, 51, 42, 109, 100],
	},
	{
	  name: "series2",
	  data: [11, 32, 45, 32, 34, 52, 41],
	},
  ]
	return (
		<>
	
		<Card className='bg-[#19195c] student-main-card'>
			<div className="text-center flex-col xl:justify-between h-full 2xl:min-w-[300px] mx-auto">
				<div className="xl:flex-col items-center gap-4 justify-between">
					
					<div className='justify-between items-center'>
					
					<div>
					<Avatar size={80} shape="circle" src={data.img} />
					</div>
					
					</div>
					
					<h4 className="font-100 text-white">{data.name}</h4>
                                        {/* <h6 className="text-white">Teacher: {data.teachername}</h6> */}
                                        <h7 className="text-white">Grade/Class: {data.grade}</h7>
				</div>
				<div className='flex justify-between items-center'>
				<div className='infoIcon'>
			
				</div>
				<div className='font-100 text-white items-center justify-between'>
					<div className='flex justify-between items-center'> 
					</div>
				
				</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  mt-6">
				
					<div className="col-span-3">
							{(!isEmpty(dash) && !repaint) && (
										<>
										<div className='grid grid-cols-6 gap-4'>
												

												<div className="rounded col-span-6 mr-4">
												{activeGraph === "graph1" && <div> 
													<>
													<Graph data={stackdata} type={'bar'} stacked={true} range={dash?.chart[timeRange[0]]?.range} />
													</>
										</div>}


						{activeGraph === "graph2" && <div> 
									<>
						<Graph data={accuracyData} type={'bar'} multiColorStack={true} />
								
								</>
							</div> }
										{activeGraph === "graph3" && <div> 
													<>
											<Graph data={compreshenData} type={'area'} comprehension={true} />
										</>
										</div> }

										{activeGraph === "graph4" && <div> 
													<>
													
											<Graph data={xaxisDateTimeData} type={'bar'} xaxisDateTime={true} />
										</>
										</div> }
										</div>
									</div>
									</>
									)
								}
							</div>
				<div className="flex justify-between items-center  student-graphBlock">
				<div className="flex">
	
				<div onClick={(e) => compGraph("graph1") }>
			     <div className='pr-2'>
				 <Button  shape="circle" className="bg-white hover-btn-graph" style={{color: "#000"}} variant="plain" size="sm" icon={<MdAccessTime />} />
				 </div>
				 </div>
				 <div onClick={(e) => compGraph("graph2") }>
				<div  className='pr-2'>
				<Button shape="circle" className="bg-white hover-btn-graph" style={{color: "#000"}} variant="plain" size="sm" icon={<MdTimeline />} />
				</div>
				</div>
				<div onClick={(e) => compGraph("graph3") }>
				<div  className='pr-2'>
                <Button shape="circle"  className="bg-indigo-500" style={{color: "#fff"}} variant="plain" size="sm" icon={<FaTransgender/>} />
				</div>
				</div>
				<div onClick={(e) => compGraph("graph4") }>
				<div  className='pr-2'>
				<Button shape="circle"  className="bg-white hover-btn-graph" style={{color: "#000"}} variant="plain" size="sm" icon={<MdAccessTime />} />
				</div>
				</div>
				{/* <Button shape="circle" variant="plain" size="md" icon={<MdDelete />} /> */}
				</div>
				
				</div>
					
				</div>
				
			</div>
			
		</Card>
		</>
	)
}

export default CustomerProfile
