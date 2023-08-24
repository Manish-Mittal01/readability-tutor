import React, { useState, useEffect } from "react";
import {
  AdaptableCard,
  Loading,
  Container,
  DoubleSidedImage,
} from "components/shared";
import PaymentHistory from "./components/PaymentHistory";
import PaymentMethods from "./components/PaymentMethods";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer, getProjectDashboardData } from "./store/dataSlice";
import reducer from "./store";
import { injectReducer } from "store/index";
import isEmpty from "lodash/isEmpty";
import useQuery from "utils/hooks/useQuery";
import { Card, Avatar, Button, Notification, toast } from "components/ui";
import { useNavigate } from "react-router-dom";
import { MdSchool } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { FaFileImport } from "react-icons/fa";
import DemoBoxContent from "components/docs/DemoBoxContent";
import { deleteCustomer } from "./store/dataSlice";
import { openEditCustomerDetailDialog } from "./store/stateSlice";
import { ConfirmDialog } from "components/shared";
import EditCustomerProfile from "./components/EditCustomerProfile.js";
import { useParams } from "react-router-dom";
import NumberFormat from 'react-number-format'
import { MdHouse,MdMenuBook} from 'react-icons/md'; 
import { GrowShrinkTag, MediaSkeleton } from 'components/shared'
import Graph from 'common/Graph'
injectReducer("crmCustomerDetails", reducer);

const compreshenData = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const gardeWiseData = [
  {
    name: "Prek",
    data: [
      44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 41, 67, 22, 43, 41, 67,
      22, 43,
    ],
  },
  {
    name: "K",
    data: [
      13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27, 20, 8, 13, 27, 20, 8, 13,
      27,
    ],
  },
  {
    name: "Grade 1 ",
    data: [
      11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 15, 15, 21, 14, 15, 15,
      21, 14,
    ],
  },
  {
    name: "Grade 2 ",
    data: [
      11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 15, 15, 21, 14, 15, 15,
      21, 14,
    ],
  },
  {
    name: "Grade 3",
    data: [
      44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 41, 67, 22, 43, 41, 67,
      22, 43,
    ],
  },
  {
    name: "Grade 4",
    data: [
      44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 41, 67, 22, 43, 41, 67,
      22, 43,
    ],
  },
  {
    name: "Grade 5",
    data: [
      13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27, 20, 8, 13, 27, 20, 8, 13,
      27,
    ],
  },
  {
    name: "Grade 6 ",
    data: [
      11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 15, 15, 21, 14, 15, 15,
      21, 14,
    ],
  },
]
const wcmGraphdata = [
  {
    name: "Males",
    data: [3, 8, 4, 2, 3, 4, 3, 1, 2, 6],
  },
  {
    name: "Females",
    data: [5, 4, 10, 8, 4, 4, 6, 8, 9, 16],
  },
]
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
const CustomerDetail = () => {
  const stackData = [
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
  const dispatch = useDispatch();

  const [timeRange, setTimeRange] = useState(["weekly"]);
  const statisticData = useSelector((state) => state?.readability?.statisticTeacherData)
	
  const [repaint] = useState(false);
  const query = useQuery();
  const params = useParams();
  const data = useSelector(
    (state) => state?.crmCustomerDetails?.data?.profileData
  );
  const dash = useSelector(
    (state) =>
      state?.crmCustomerDetails?.data?.dashboardData?.projectOverviewData
  );

  const loading = useSelector(
    (state) => state?.crmCustomerDetails?.data?.loading
  );
  const [expandTableData, setTableData] = useState(2);

	const handleChangeGrid = () => {
		setTableData(prev => prev === 2 ? 1 : 2);
	
		
	}
  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = () => {
    dispatch(getProjectDashboardData());
  };

  useEffect(() => {
    fetchData();
  }, [params?.id]);

  const fetchData = () => {
    const id = params?.id || 7; //query.get('id')
    if (id) {
      dispatch(getCustomer({ id }));
    }
  };
  const CustomerInfoField = ({ title, value }) => {
    return (
      <div>
        <span>{title}</span>
        <p className="text-gray-700 dark:text-gray-200 font-semibold">
          {value}
        </p>
      </div>
    );
  };

  const [activeGraph, setActiveGraph] = useState("");
  const compGraph = (graphName) => {
    setActiveGraph(graphName);
   
  };

  const CustomerProfileAction = ({ id }) => {
    const dispatch = useDispatch();
    const [dialogOpen, setDialogOpen] = useState(false);

    const navigate = useNavigate();

    const onDialogClose = () => {
      setDialogOpen(false);
    };

    const onDialogOpen = () => {
      setDialogOpen(true);
    };

    const onDelete = () => {
      setDialogOpen(false);
      dispatch(deleteCustomer({ id }));
      navigate("/app/crm/customers");
      toast.push(
        <Notification title={"Successfuly Deleted"} type="success">
          Customer successfuly deleted
        </Notification>
      );
    };

    const onEdit = () => {
      dispatch(openEditCustomerDetailDialog());
    };

    return (
      <>
      
        <div className="flex justify-end items-center w-full btneditIns">
          <Button
            onClick={onEdit}
            className="xl:mr-0 mr-4 text-black bg-neutral-100"
            shape="sequare"
            variant="plain"
            size="xs"
            icon={<MdBorderColor className="text-black" />}
          />
        </div>
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
            Are you sure you want to delete this customer? All record related to
            this customer will be deleted as well. This action cannot be undone.
          </p>
        </ConfirmDialog>
        <EditCustomerProfile />
      </>
    );
  };

  return (
    <Container className="h-full">
      <div className="xl:grid grid-cols-4 gap-4 bg-primary-color  lg:pt-8 xl:pt-8">
        <div className="md:col-span-1">
          <div className="mb-4">
            <div className="text-center flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
              <div className="md:flex-col items-center gap-4">
             
                <Avatar size={90} shape="circle" src={data?.imgAlt} />
                 <CustomerProfileAction id={data.id} />
                <div className="flex items-center justify-center">
                  <div className="mr-2 pt-2">
                  <Avatar size={30} shape="circle" src='/img/logo/logo-light-full.png'/>
                  </div>
                 
                <div>
                <h4 className="font-bold text-white">Pedro Goes Wild!</h4>
                </div>              
                </div>

                <h6 className="font-bold text-white">Level 2</h6> 
              
              </div>     
            </div>
          </div>
        </div>
        <div className="md:col-span-3 pb-4 lg:pb-0">
          <div className="info-boxes">
            <div className="w-full">
              <div className="xl:grid grid-rows-1 xl:grid-cols-4 lg:grid grid-rows-1 lg:grid-cols-4 md:grid grid-rows-2 md:grid-cols-2 grid grid-rows-2 grid-cols-2  gap-4  xl:pr-5 xl:py-0 py-2 lg:py-0">
                <div
                  className=""
                  onClick={(e) => compGraph("compGraphDataTotalReading")}
                >
                  <div className="clickable-hover-effect cursor-pointer flex justify-between  xl:mx-0 mx-4 px-4 py-2 my-2 xl:my-0 items-center h-full  rounded-lg  text-white bg-teal-400">
                    <div className="reading-text">
                      <p className="text-white">Total Reading</p>
                      <p className="text-white">120 Minutes</p>
                    </div>
                    <div className="reading-icon">
                      <Button
                        className="text-white hoverNone"
                        shape="circle"
                        variant="plain"
                        size="xs"
                        icon={<SlGraph className="text-white" />}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  onClick={(e) => compGraph("compGraphDataAvgAccurecy")}
                >
                  <div className="clickable-hover-effect cursor-pointer flex justify-between  xl:mx-0 mx-4 my-2 xl:my-0 px-4 py-2 rounded-lg items-center h-full  text-white bg-teal-400">
                    <div className="reading-text">
                      <p className="text-white">Average Accuracy</p>
                      <p className="text-white">95%</p>
                    </div>
                    <div className="reading-icon">
                      <Button
                        className="text-white hoverNone"
                        shape="circle"
                        variant="plain"
                        size="xs"
                        icon={<SlGraph className="text-white" />}
                      />
                    </div>
                  </div>
                </div>
                <div className="clickable-hover-effect cursor-pointer" onClick={(e) => compGraph("compGraphData")}>
                  <div className="flex justify-between clickable-hover-effect xl:mx-0 mx-4 my-2 xl:my-0 px-4 py-2 rounded-lg items-center h-full  text-white bg-teal-400">
                    <div className="reading-text">
                      <p className="text-white">Comprehension</p>
                      <p className="text-white">99%</p>
                    </div>
                    <div className="reading-icon">
                      <Button
                        className="text-white hoverNone"
                        shape="circle"
                        variant="plain"
                        size="xs"
                        icon={<SlGraph className="text-white" />}
                      />
                    </div>
                  </div>
                </div>
                <div className="clickable-hover-effect cursor-pointer" onClick={(e) => compGraph("wcmGraphdata")}>
                  <div className="flex justify-between clickable-hover-effect  xl:mx-0 mx-4 my-2 xl:my-0 px-4 py-2 rounded-lg items-center h-full text-white bg-teal-400">
                    <div className="reading-text">
                      <p className="text-white">Total WCPM</p>
                      <p className="text-white">96%</p>
                    </div>
                    <div className="reading-icon">
                      <Button
                        className="text-white hoverNone"
                        shape="circle"
                        variant="plain"
                        size="xs"
                        icon={<SlGraph className="text-white" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Loading loading={loading}>
        {!isEmpty(data) && (
          <>
            <div className="xl:grid grid-cols-4 mobile-reverse-col">
              <div className="col-span-1">
                <div className="info-boxes">
                  <Card className="bg-color-box bg-neutral-100">
                    <div className="xl:grid grid-rows-2 xl:grid-cols-2 lg:grid grid-rows-2 lg:grid-cols-2 md:grid grid-rows-2 md:grid-cols-2 grid grid-rows-2 grid-cols-2  gap-4">
                      <div>
                        <DemoBoxContent className="row-span-2 my-2 h-full bg-white  grid place-content-center">
                          <div className="center">
                            <Button
                              shape="circle"
                              variant="plain"
                              size="xs"
                              icon={<HiMail />}
                            />{" "}
                          </div>
                          <div className="center text-black">Welcome Email</div>
                        </DemoBoxContent>
                      </div>
                      <div>
                        <DemoBoxContent className="row-span-2 my-2 h-full bg-white grid place-content-center">
                          <div className="center">
                            <Button
                              shape="circle"
                              variant="plain"
                              size="xs"
                              icon={<FaFileImport />}
                            />{" "}
                          </div>
                          <div className="center text-black">Add Student</div>
                        </DemoBoxContent>
                      </div>
                      <div>
                        <DemoBoxContent className="row-span-2 my-2  h-full bg-white grid place-content-center">
                          <div className="center">
                            <Button
                              shape="circle"
                              variant="plain"
                              size="xs"
                              icon={<FaFileImport />}
                            />{" "}
                          </div>
                          <div className="center text-black">
                            Import Stuents
                          </div>
                        </DemoBoxContent>
                      </div>
                      <div>
                        <DemoBoxContent className="row-span-2 h-full my-2 bg-white grid place-content-center">
                          <div className="center">
                            <Button
                              shape="circle"
                              variant="plain"
                              size="xs"
                              icon={<MdSchool />}
                            />{" "}
                          </div>
                          <div className="center text-black">Institute</div>
                        </DemoBoxContent>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="md:col-span-3 relative md:col-span-3 relative graph-margin">
                {!isEmpty(dash) && !repaint && (
                  <>
                    <div className="xl:grid grid-cols-6 gap-4">
                      <div className="md:bg-white xl:py-16 rounded col-span-4">
                        {activeGraph === "compGraphDataAvgAccurecy" ? (
                          <div>
                           <Graph data={gardeWiseData} type={'bar'} accuracy={true} />
                          </div>
                        ) : activeGraph === "compGraphData" ? (
                          <div>
                           <Graph data={compreshenData} type={'area'} comprehension={true} />
                          </div>
                        ) : activeGraph === "wcmGraphdata" ? (
                          <div className="md:bg-white xl:py-16 rounded col-span-2 mr-4">
                            <Graph data={wcmGraphdata} type={'bar'} wcmGraph={true} />
                          </div>
                        ) : (
                        	<Graph data={dash} type={'bar'} stacked={false}/>
                        )}
                      </div>
                      <div className="md:bg-white xl:py-16 rounded col-span-2 mr-4">
                      <Graph data={stackData} type={'bar'} stacked={true} range={dash?.chart[timeRange[0]]?.range} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 px-4 py-4">
            <StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-pink-400"
				label="Books Read"
				value={statisticData?.activeCustomers?.value}
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<MdHouse />} 
				avatarClass="!bg-emerald-500"
				label="Schools"
				value={statisticData?.newCustomers?.value}
				growthRate={statisticData?.newCustomers?.growShrink}
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
		</div>
            <div className={`xl:grid grid-cols-1 gap-4 px-4`}>
              <div className="w-full border-2 p-2">
                <AdaptableCard>
                  <PaymentHistory  handleChangeGrid={ handleChangeGrid } />
                  <PaymentMethods data={data?.paymentMethod} />
                </AdaptableCard>
              </div>
            </div>
          </>
        )}
      </Loading>
      {!loading && isEmpty(data) && (
        <div className="h-full flex flex-col items-center justify-center">
          <DoubleSidedImage
            src="/img/others/img-2.png"
            darkModeSrc="/img/others/img-2-dark.png"
            alt="No user found!"
          />
          <h3 className="mt-8">No user found!</h3>
        </div>
      )}
     
    </Container>
  );
};

export default CustomerDetail;
