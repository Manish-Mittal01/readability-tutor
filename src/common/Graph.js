import React,{useState}  from 'react'
import { Chart } from 'components/shared';
import { COLORS ,gradeWisecolor,compreColor,accuracyColor} from 'constants/chart.constant';
const Graph = (props) => {
	const [timeRange, setTimeRange] = useState(['weekly']);	
	const dash = props?.data
	const range = props?.range
	const accuracy = props?.accuracy
	const chartType = props?.type
	const stackedCheck = props?.stacked
	const comprehension =  props?.comprehension
	const wcmGraph =  props?.wcmGraph
	const xaxisDateTime= props?.xaxisDateTime
	const multiColorStack=props?.multiColorStack

	return ( 
	
		
		                   		  <>
		                         {stackedCheck === false && <div> 
								 
                            <Chart 
														series={dash?.chart[timeRange[0]]?.series} 
														xAxis={dash?.chart[timeRange[0]]?.range}
														type={chartType}
														customOptions={{colors: [COLORS[0], COLORS[2]], legend: {show: false}}}
											/>
											</div> }
											{stackedCheck === true && <div> 
										   <Chart 
														series={dash}
														 xAxis={range}
														type={chartType}
														customOptions={
														{colors: [COLORS[0], "#2ebeb3"], 
														legend: {show: false}, 
														stacked: true,
														chart: {
															type: 'bar',
															height: 350,
															stacked: true,
														  },
														
														plotOptions: {
														  bar: {
															horizontal: false,
															barHeight: '80%',
															borderRadius: 2 ,  
															borderRadiusApplication: "around" ,
															borderRadiusWhenStacked: "all" ,
															columnWidth:   "20"
															

														  },
														},
														dataLabels: {
														  enabled: false
														},
														stroke: {
														  width: 1,
														  colors: ["#fff"]
														},
														grid: {
														  xaxis: {
															lines: {
															  show: false
															}
														  }
														},
														yaxis: {
														  min: 0,
														  max: 25,
														},
														xaxis: { 
														  labels: {
															formatter: function (val) {
															  return Math.abs(Math.round(val)) + "%"
															}
														  }
														},
														}}
													/>
									</div> }


									{multiColorStack === true && <div> 
										<Chart
						options={{
							chart: {
								stacked: true,
								toolbar: {
									show: true
								},
								zoom: {
									enabled: true
								}
							},
							colors: accuracyColor,
							legend: {
								show: true,
								showForSingleSeries: true,
						  },
							legend: {
								show: true,
								showForSingleSeries: true,
						  },
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
								type: 'datetime',
								categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
									'01/05/2011 GMT', '01/06/2011 GMT'
								],
							},
						
							fill: {
								opacity: 1
							}
						}}
						series={dash}
						type="bar"
						height= {300}
					/>
									</div> }


								{comprehension === true && <div> 
									<Chart
                              options={{
                                dataLabels: {
                                  enabled: false,
                                },
                                colors: compreColor,
                                stroke: {
                                  curve: "smooth",
                                },
                                xaxis: {
                                  type: "datetime",
                                  categories: [
                                    "2018-09-19T00:00:00.000Z",
                                    "2018-09-19T01:30:00.000Z",
                                    "2018-09-19T02:30:00.000Z",
                                    "2018-09-19T03:30:00.000Z",
                                    "2018-09-19T04:30:00.000Z",
                                    "2018-09-19T05:30:00.000Z",
                                    "2018-09-19T06:30:00.000Z",
                                  ],
                                },
                                tooltip: {
                                  x: {
                                    format: "dd/MM/yy HH:mm",
                                  },
                                },
                              }}
                              series={dash}
                              type="area"
                              height={300}
                            />
									</div> }
						{accuracy === true && <div> 
										<Chart
                              options={{
                                chart: {
                                  stacked: true,
                                  toolbar: {
                                    show: true,
                                  },
                                  zoom: {
                                    enabled: false,
                                  },
                                },
                                colors: gradeWisecolor,
                                responsive: [
                                  {
                                    breakpoint: 480,
                                    options: {
                                      legend: {
                                        position: "bottom",
                                        offsetX: -10,
                                        offsetY: 0,
                                      },
                                    },
                                  },
                                ],
                                plotOptions: {
                                  bar: {
                                    horizontal: false,
                                  },
                                },
                                xaxis: {
                                  type: "datetime",
                                  categories: [
                                    "01/01/2023 GMT",
                                    "01/02/2023 GMT",
                                    "01/03/2023 GMT",
                                    "01/04/2023 GMT",
                                    "01/05/2023 GMT",
                                    "01/06/2023 GMT",
                                    "01/07/2023 GMT",
                                    "01/10/2023 GMT",
                                    "01/13/2023 GMT",
                                  ],
                                },
                                legend: {
                                  position: "right",
                                  offsetY: 40,
                                },
                                fill: {
                                  opacity: 1,
                                },
                              }}
                              series={dash}
                              type="bar"
                              height={300}
                            />
									</div> }


									{wcmGraph === true && <div> 
										<Chart
                              series={dash}
                              type="bar"
                              customOptions={{
                                colors: ["#008080", "#00BFFF"],
                                xaxis: {
                                  type: "datetime",
                                  categories: [
                                    "2018-09-19T00:00:00.000Z",
                                    "2018-09-19T00:00:00.000Z",
                                    "2018-09-19T00:00:00.000Z",
                                    "2018-09-19T01:30:00.000Z",
                                    "2018-09-19T02:30:00.000Z",
                                    "2018-09-19T03:30:00.000Z",
                                    "2018-09-19T04:30:00.000Z",
                                    "2018-09-19T05:30:00.000Z",
                                    "2018-09-19T06:30:00.000Z",
                                  ],
                                },
                                legend: { show: false },
                                stacked: true,
                                chart: {
                                  type: "bar",
                                  height: 350,
                                  stacked: true,
                                },

                                plotOptions: {
                                  bar: {
                                    horizontal: false,
                                    barHeight: "80%",
                                    borderRadius: 2,
                                    borderRadiusApplication: "around",
                                    borderRadiusWhenStacked: "all",
                                    columnWidth: "20",
                                  },
                                },
                                dataLabels: {
                                  enabled: false,
                                },
                                stroke: {
                                  width: 1,
                                  colors: ["#fff"],
                                },
                                grid: {
                                  xaxis: {
                                    lines: {
                                      show: false,
                                    },
                                  },
                                },
                                yaxis: {
                                  min: 0,
                                  max: 25,
                                },
                              }}
                            />
									</div> }

									{xaxisDateTime === true && <div> 
										<Chart
                              series={dash}
                              type="bar"
                              customOptions={{
                                colors: ["#008080", "#00BFFF"],
                                xaxis: {
                                  type: "datetime",
                                  categories: [
                                    "2018-09-19T00:00:00.000Z",
                                    "2018-09-19T00:00:00.000Z",
                                    "2018-09-19T00:00:00.000Z",
                                    "2018-09-19T01:30:00.000Z",
                                    "2018-09-19T02:30:00.000Z",
                                    "2018-09-19T03:30:00.000Z",
                                    "2018-09-19T04:30:00.000Z",
                                    "2018-09-19T05:30:00.000Z",
                                    "2018-09-19T06:30:00.000Z",
                                  ],
                                },
                                legend: { show: false },
                                stacked: true,
                                chart: {
                                  type: "bar",
                                  height: 350,
                                  stacked: true,
                                },

                                plotOptions: {
                                  bar: {
                                    horizontal: false,
                                    barHeight: "80%",
                                    borderRadius: 2,
                                    borderRadiusApplication: "around",
                                    borderRadiusWhenStacked: "all",
                                    columnWidth: "20",
                                  },
                                },
                                dataLabels: {
                                  enabled: false,
                                },
                                stroke: {
                                  width: 1,
                                  colors: ["#fff"],
                                },
                                grid: {
                                  xaxis: {
                                    lines: {
                                      show: false,
                                    },
                                  },
                                },
                                yaxis: {
                                  min: 0,
                                  max: 25,
                                },
                              }}
                            />
									</div> }

									</>
								
	)
}
export default Graph