import React, { useEffect } from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getProjectDashboardData } from './store/dataSlice'
import { Loading } from 'components/shared'
import ProjectDashboardHeader from './components/ProjectDashboardHeader'
import TaskOverview from './components/TaskOverview'
import CustomerStatistic from './components/CustomerStatistic'
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'react-apexcharts'
import {
	COLOR_2,COLOR_3,
	gradeWisecolorNew,
	bookReadcolorNew,
  } from "constants/chart.constant";
injectReducer('projectDashboard', reducer)

const ProjectDashboard = () => {


	const straightlineData = [{
		name: "Survey_2:0",
		data: [0, 0, 0, 0, 0, 0]
	}]

	const booksData = [{
		name: 'Book Reading count',
		data: [			
				{y:16, x: "14 Jan"},
				{y: 17, x: "15 Jan"},
				{y: 17, x: "15 Jan"},
				{y: 17, x: "16 Jan"},
				{y: 17, x: "17 Jan"},
				{y: 14, x: "18 Jan"},
				{y: 14, x: "19 Jan"},
				{y: 13, x: "20 Jan"},
				{y: 11, x: "21 Jan"},
				{y: 14, x: "22 Jan"},
				{y: 10, x: "23 Jan"},
				{y: 16, x: "24 Jan"},
				{y: 16, x: "25 Jan"},
				{y: 19, x: "26 Jan"},
				{y: 19, x: "27 Jan"},
				{y: 15, x: "28 Jan"},
				{y: 16, x: "29 Jan"},
				{y: 16, x: "30 Jan"},
				{y: 17, x: "31 Jan"},
				{y: 22, x: "1 Feb"},
				{y: 18, x: "2 Feb"},
				{y: 18, x: "3 Feb"},
				{y: 13, x: "4 Feb"},
				{y: 17, x: "5 Feb"},
				{y: 19, x: "6 Feb"},
				{y: 20, x: "7 Feb"},
				{y: 21, x: "8 Feb"},
				{y: 23, x: "9 Feb"},
				{y: 19, x: "10 Feb"},
				{y: 19, x: "11 Feb"},
				{y: 18, x: "12 Feb"},
				{y: 20, x: "13 Feb"},
			]
	}]

	const gardeWiseData = [{
		
		name: 'Prek',
		data: [44, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43,41, 67, 22, 43,41, 67, 22, 43]
	}, {
		name: 'K',
		data: [13, 23, 20, 8, 13, 27,13, 23, 20, 8, 13, 27, 20, 8, 13, 27,20, 8, 13, 27]
	}, {
		name: 'Grade 1 ',
		data: [11, 17, 15, 15, 21, 14,11, 17, 15, 15, 21, 14,15, 15, 21, 14,15, 15, 21, 14]
	},{
		name: 'Grade 2 ',
		data: [11, 17, 15, 15, 21, 14,11, 17, 15, 15, 21, 14,15, 15, 21, 14,15, 15, 21, 14]
	},
	{
		
		name: 'Grade 3',
		data: [44, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43,41, 67, 22, 43,41, 67, 22, 43]
	},
	{
		
		name: 'Grade 4',
		data: [44, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43,41, 67, 22, 43,41, 67, 22, 43]
	}, {
		name: 'Grade 5',
		data: [13, 23, 20, 8, 13, 27,13, 23, 20, 8, 13, 27, 20, 8, 13, 27,20, 8, 13, 27]
	},
	{
		name: 'Grade 6 ',
		data: [11, 17, 15, 15, 21, 14,11, 17, 15, 15, 21, 14,15, 15, 21, 14,15, 15, 21, 14]
	}

]


	

	const dispatch = useDispatch()

	const {
		userName,
		taskCount,
		projectOverviewData,
	
	} = useSelector((state) => state.projectDashboard.data.dashboardData)
	const loading = useSelector((state) => state.projectDashboard.data.loading)

	useEffect(() => {
		fetchData()
	
	}, [])
	
	const fetchData = () => {
		dispatch(getProjectDashboardData())
	}

	return (
    <div className="flex flex-col gap-4 h-full">
			<Loading loading={loading}>
				<ProjectDashboardHeader data={{userName, taskCount}} />
				<div className='mr-4 ml-4'>
					<CustomerStatistic />
				</div>
			
				<div className="flex flex-col xl:flex-row gap-4 mr-4 ml-4">
					<div className="flex flex-col gap-4 flex-auto">
						<TaskOverview data={projectOverviewData} />
					
					</div>
				
				</div>
                                <div className="flex sm:flex-row flex-col md:items-center justify-between ml-6 gap-4">
                                    <h4 className="text-xl">Reading Report</h4>
                            </div>
				<div className="xl:grid grid-cols-2 gap-4 px-4">
					 
				
			
					<div className='first_graph'>
					<h4 className="text-base ml-2 text-orange-400">Paid VS Trailers Book Read</h4>
						<Chart
							options={{
								dataLabels: {
									enabled: false
								},
								legend: {
									show: true,
									showForSingleSeries: true,
							  },
								plotOptions: {
									bar: {
										horizontal: false,
										columnWidth: '72%',
										endingShape: 'rounded'
									},
								},
								colors: bookReadcolorNew,
                                                                responsive: [{
                                                                        breakpoint: 480,
                                                                        options: {
                                                                                legend: {
                                                                                        position: 'bottom',
                                                                                        offsetX: -10,
                                                                                        offsetY: 0
                                                                                }
                                                                        }
                                                                }],
								dataLabels: {
									enabled: false
								},
								stroke: {
									show: true,
									width: 2,
									colors: ['transparent']
								}, 
								fill: {
									opacity: 1
								},
								tooltip: {
									y: {
										formatter: val => (`${val}`)
									}
								}
							}}
							series={booksData}
							height= {300}
							type="bar"
						/>
					</div>
				
					 
				<div className='second_graph'>
					<h4 className="text-base ml-2 text-orange-400">Books Read by Grade </h4>
					<Chart
						options={{
							chart: {
								stacked: true,
								toolbar: {
									show: false
								},
								zoom: {
									enabled: false
								}
							},
							colors: gradeWisecolorNew,
							responsive: [{
								breakpoint: 480,
								options: {
									legend: {
										position: 'bottom',
										offsetX: -10,
										offsetY: 0
									}
								}
							}],
							plotOptions: {
								bar: {
									horizontal: false,
								},
							},
							xaxis: {
								type: 'category',
								
								categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
							
								tickAmount: '20',
								axisTicks: {
									show: true,
									borderType: 'solid',
									color: '#78909C',
									height: 6,
									offsetX: 0,
									offsetY: 0
								},
							},
							// legend: {
							// 	position: 'right',
							// 	offsetY: 40
							// },
							fill: {
								opacity: 1
							}
						}}
						series={gardeWiseData}
						type="bar"
						height= {300}
					/>
				</div> 
	         </div> 
			  
		   </Loading>
		   <div className="xl:grid grid-cols-2 gap-4 px-4">
			<div>
			<h4 className="text-base ml-2 text-orange-400">Trial Expiration</h4>
                        
			<Chart
			options={{
				chart: {
					type: 'line',
					zoom: {
						enabled: false
					}
				},
				plotOptions: {
					bar: {
					
					  horizontal: true,
					}
				  },
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth',
					width: 3,
				},
				colors: [COLOR_2],
				xaxis: {
					categories: ['22 Jan', '25 Jan', '28 Jan', '3 Feb', '6 Feb', '9 Feb', '12 Feb', '15 Feb', '18 Feb'],
				},
				yaxis: {
					min: -2,
					max: 2,
					
				  }
			}}
			series={straightlineData}
			height= {300}
		/>

			</div>
		 
		 
			<div>
			<h4 className="text-base ml-2 text-orange-400">Canceled Notficiation</h4>

			<Chart
			options={{
				chart: {
					type: 'line',
					zoom: {
						enabled: false
					}
				},
				plotOptions: {
					bar: {
					
					  horizontal: true,
					}
				  },
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth',
					width: 3,
				},
				colors: [COLOR_3],
				xaxis: {
					categories: ['22 Jan', '25 Jan', '28 Jan', '3 Feb', '6 Feb', '9 Feb', '12 Feb', '15 Feb', '18 Feb'],
				},
				yaxis: {
					min: -1,
					max: 1,
					
				  }
			}}
			series={straightlineData}
			height= {300}
		/>

			</div>
		<div></div>
		</div>
     </div>
	)
}

export default ProjectDashboard