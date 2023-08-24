import React, { useState, useEffect } from "react";
import {
  AdaptableCard,
  Loading,
  Container,
  DoubleSidedImage,
} from "components/shared";
import CustomerProfile from "./components/CustomerProfile";
import PaymentHistory from "./components/PaymentHistory";
import PaymentHistory2 from "./components/PaymentHistory2";
import PaymentMethods from "./components/PaymentMethods";
import CurrentSubscriptionStrip from "./components/CurrentSubscriptionStrip";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer, getProjectDashboardData } from "./store/dataSlice";
import reducer from "./store";
import { injectReducer } from "store/index";
import isEmpty from "lodash/isEmpty";
import useQuery from "utils/hooks/useQuery";
import { Chart } from "components/shared";
import { Card, Avatar, Button, Notification, toast } from "components/ui";
import { useNavigate } from "react-router-dom";
import { MdSchool } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { HiPencil } from "react-icons/hi";
import { FaFileImport } from "react-icons/fa";
import DemoBoxContent from "components/docs/DemoBoxContent";
import { deleteCustomer } from "./store/dataSlice";
import { openEditCustomerDetailDialog } from "./store/stateSlice";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import { ConfirmDialog } from "components/shared";
import EditCustomerProfile from "./components/EditCustomerProfile.js";
import { useParams } from "react-router-dom";
import NumberFormat from 'react-number-format'
import { MdPublic, MdHouse,MdMenuBook,MdPeopleAlt,MdPeopleOutline} from 'react-icons/md'; 
//injectReducer('crmCustomerDetails', reducer)
import { GrowShrinkTag, MediaSkeleton } from 'components/shared'
import Graph from 'common/Graph'

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
	
  const [repaint, setRepaint] = useState(false);
  const query = useQuery();
  const params = useParams();
  
  const data=[
    {
    "id": "1",
    "name": "Namrata ",
    "teacherphone": "+91 98903 54960",
    "email": "namratapotdaraaaaaaa@yopmail.com",
    "teachername": "mamta",
    "instituteemail": "jj.s11@yopmail.com",
    "institution": "JJ School of Arts",
    "instittuteph": "9960221626",
    "teacheremail": "mamtafromjj@yopmail.com",
    "books": "0",
    "age": "8 yrs",
    "grade": "pre-k",
    "class": "carolyn_h@hotmail.com",
    "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
    "signup_date": "today",
    "img": "/img/avatars/thumb-10.jpg",
    "imgAlt": "/img/avatars/jj.jpg",
    "role": "Admin",
    "lastOnline": 1623430400,
    "status": "active",
    "personalInfo": {
        "location": "New York, US",
        "title": "Product Manager",
        "birthday": "10/10/1992",
        "phoneNumber": "+12-123-1234",
        "facebook": "facebook.com/sample",
        "twitter": "twitter.com/sample",
        "pinterest": "pinterest.com/sample",
        "linkedIn": "linkedin/sample"
    },
    "orderHistory": [
        {
            "id": "#36223",
            "title": "I Can Climb!",
            "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
            "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
            "summary_date": "30JUN,2022",
            "comprehension": "2/2",
            "start": "07:20 AM",
            "finish": "07:22 AM",
            "duration": "2 min(s)",
            "accuracy": "96.09%",
            "wpm": "54",
            "vocabulary": "3",
            "status": "pending",
            "amount": 39.9,
            "date": 1639132800
        },
        {
            "id": "#34283",
            "title": "Car Race",
            "comprehension": "3/3",
            "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
            "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
            "summary_date": "7 jAN,2022",
            "start": "05:23 AM",
            "finish": "05:26 AM",
            "duration": "3 min(s)",
            "accuracy": "79.33%",
            "wpm": "0",
            "vocabulary": "3",
            "status": "pending",
            "amount": 39.9,
            "date": 1639132800
        },
        {
            "id": "#32234",
            "comprehension": "1/1",
            "title": "Alphi Blows Bubbles",
            "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
            "author": "by Tony J Moon",
            "summary_date": "5 JUN,2022",
            "start": "02:20 AM",
            "finish": "02:22 AM",
            "duration": "2 min(s)",
            "accuracy": "54.09%",
            "wpm": "54",
            "vocabulary": "3",
            "status": "pending",
            "amount": 39.9,
            "date": 1639132800
        },
        {
            "id": "#31354",
            "title": "Finbo",
            "comprehension": "1/2",
            "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
            "author": "Written & Illustrated by Janaki Sooriyarachchi",
            "summary_date": "30JUN,2022",
            "start": "07:20 AM",
            "finish": "07:22 AM",
            "duration": "2 min(s)",
            "accuracy": "96.09%",
            "wpm": "54",
            "vocabulary": "3",
            "status": "pending",
            "amount": 39.9,
            "date": 1639132800
        }
    ],
    "paymentMethod": [
        {
            "cardHoldername": "Carolyn Perkins",
            "cardType": "VISA",
            "expMonth": "12",
            "expYear": "25",
            "last4Number": "0392",
            "primary": true
        },
        {
            "cardHoldername": "Carolyn Perkins",
            "cardType": "MASTER",
            "expMonth": "06",
            "expYear": "25",
            "last4Number": "8461",
            "primary": false
        }
    ],
    "subscription": [
        {
            "plan": "Business board pro",
            "status": "active",
            "billing": "monthly",
            "nextPaymentDate": 1639132800,
            "amount": 59.9
        }
    ]
},{
  "id": "2",
  "name": "Namrata ",
  "teacherphone": "+91 98903 54960",
  "email": "namratapotdaraaaaaaa@yopmail.com",
  "teachername": "mamta tyyy",
  "instituteemail": "jj.s11@yopmail.com",
  "institution": "JJ School of Arts",
  "instittuteph": "9960221626",
  "teacheremail": "mamtafromjj@yopmail.com",
  "books": "0",
  "age": "8 yrs",
  "grade": "pre-k",
  "class": "carolyn_h@hotmail.com",
  "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
  "signup_date": "today",
  "img": "/img/avatars/thumb-10.jpg",
  "imgAlt": "/img/avatars/jj.jpg",
  "role": "Admin",
  "lastOnline": 1623430400,
  "status": "active",
  "personalInfo": {
      "location": "New York, US",
      "title": "Product Manager",
      "birthday": "10/10/1992",
      "phoneNumber": "+12-123-1234",
      "facebook": "facebook.com/sample",
      "twitter": "twitter.com/sample",
      "pinterest": "pinterest.com/sample",
      "linkedIn": "linkedin/sample"
  },
  "orderHistory": [
      {
          "id": "#36223",
          "title": "I Can Climb!",
          "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
          "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
          "summary_date": "30JUN,2022",
          "comprehension": "2/2",
          "start": "07:20 AM",
          "finish": "07:22 AM",
          "duration": "2 min(s)",
          "accuracy": "96.09%",
          "wpm": "54",
          "vocabulary": "3",
          "status": "pending",
          "amount": 39.9,
          "date": 1639132800
      },
      {
          "id": "#34283",
          "title": "Car Race",
          "comprehension": "3/3",
          "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
          "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
          "summary_date": "7 jAN,2022",
          "start": "05:23 AM",
          "finish": "05:26 AM",
          "duration": "3 min(s)",
          "accuracy": "79.33%",
          "wpm": "0",
          "vocabulary": "3",
          "status": "pending",
          "amount": 39.9,
          "date": 1639132800
      },
      {
          "id": "#32234",
          "comprehension": "1/1",
          "title": "Alphi Blows Bubbles",
          "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
          "author": "by Tony J Moon",
          "summary_date": "5 JUN,2022",
          "start": "02:20 AM",
          "finish": "02:22 AM",
          "duration": "2 min(s)",
          "accuracy": "54.09%",
          "wpm": "54",
          "vocabulary": "3",
          "status": "pending",
          "amount": 39.9,
          "date": 1639132800
      },
      {
          "id": "#31354",
          "title": "Finbo",
          "comprehension": "1/2",
          "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
          "author": "Written & Illustrated by Janaki Sooriyarachchi",
          "summary_date": "30JUN,2022",
          "start": "07:20 AM",
          "finish": "07:22 AM",
          "duration": "2 min(s)",
          "accuracy": "96.09%",
          "wpm": "54",
          "vocabulary": "3",
          "status": "pending",
          "amount": 39.9,
          "date": 1639132800
      }
  ],
  "paymentMethod": [
      {
          "cardHoldername": "Carolyn Perkins",
          "cardType": "VISA",
          "expMonth": "12",
          "expYear": "25",
          "last4Number": "0392",
          "primary": true
      },
      {
          "cardHoldername": "Carolyn Perkins",
          "cardType": "MASTER",
          "expMonth": "06",
          "expYear": "25",
          "last4Number": "8461",
          "primary": false
      }
  ],
  "subscription": [
      {
          "plan": "Business board pro",
          "status": "active",
          "billing": "monthly",
          "nextPaymentDate": 1639132800,
          "amount": 59.9
      }
  ]
}]
console.log('idddd',params?.id);
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
		//console.log('handle chage grid',handleChangeGrid);
		
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

    //console.log('edit data',data);
    return (
      <>
       
        <div className="flex justify-end justify-end items-center w-full">
          <Button
            onClick={onEdit}
            className="xl:mr-0 mr-4 hover:bg-[#00c3b8] mt-4 lg:mt-0 xl:mt-0 2xl:mt-0"
            variant="plain"
            size="xs"
            icon={<MdBorderColor className="text-white hover:text-black" />}
          />
        </div>

        {/* </Button> */}
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
               <div className="max-w-md">
               <CustomerProfileAction id={data.id} />
               </div>
               
                
                <Avatar size={90} shape="circle" src={data?.imgAlt} />
               
               
                <div className="flex items-center justify-center">
                  <div className="mr-2 pt-2">
                  <Avatar size={30} shape="circle" src='/img/logo/logo-light-full.png'/>
                  </div>
                 
                <div>
                <h4 className="font-bold text-white">{data.institution}</h4>
                </div>
                
                </div>
                

                <h6 className="font-bold text-white">{data.instituteemail}</h6>
                <h6 className="font-bold text-white">{data.instittuteph}</h6>
                <h6 className="font-bold text-white">Level 2</h6>
              
              
              </div>

           
            </div>
          </div>
        </div>
        <div className="md:col-span-3 pb-2 lg:pb-0">
          <div className="info-boxes">
            <div className="w-full">
              <div className="xl:grid grid-rows-1 xl:grid-cols-4 lg:grid grid-rows-1 lg:grid-cols-4 md:grid grid-rows-2 md:grid-cols-2 grid grid-rows-2 grid-cols-2  gap-3  xl:pr-5 xl:py-0 py-2 lg:py-0 px-3">
                <div
                  className=""
                  onClick={(e) => compGraph("compGraphDataTotalReading")}
                >
                  <div className="h-full clickable-hover-effect cursor-pointer flex justify-between  xl:mx-0 xl:my-0 items-center  rounded-lg  text-white bg-teal-400  px-4 py-4">                    
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
                  <div className="h-full clickable-hover-effect cursor-pointer flex justify-between  xl:mx-0  xl:my-0  rounded-lg items-center  text-white bg-teal-400  px-4 py-4">
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
                <div
                  className=""
                  onClick={(e) => compGraph("compGraphData")}
                >
                <div className="h-full clickable-hover-effect cursor-pointer flex justify-between  xl:mx-0  xl:my-0 items-center  rounded-lg  text-white bg-teal-400  px-4 py-4">
                
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
                <div
                  className=""
                  onClick={(e) => compGraph("wcmGraphdata")}
                >
                <div className="h-full clickable-hover-effect cursor-pointer flex justify-between  xl:mx-0  xl:my-0  rounded-lg items-center  text-white bg-teal-400 px-4 py-4">
                
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
				label=" Minutes Read"
				value={statisticData?.totalCustomers?.value}
				growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/>
        <StatisticCard 
				icon={<MdPublic />} 
				avatarClass="!bg-indigo-600"
				label="Students"
				value={1200}
				growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/>

<StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-green-200"
				label="On Platform"
				value="500"
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
		<StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-green-200"
				label="Not on Platform"
				value="400"
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
				label="Active"
				value="750"
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
          <StatisticCard 
				icon={<MdPeopleOutline />} 
				avatarClass="!bg-red-400"
				label="Inactive"
				value="800"
				growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
      <StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-orange-300"
				label="Open Seats"
				value="12"
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
       <StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-orange-300"
				label="Avg Reading minutes/Day"
				value="17"
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
        <StatisticCard 
				icon={<MdMenuBook />} 
				avatarClass="!bg-orange-300"
				label="Avg Books read/day"
				value="12"
				growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
		</div>
            <div className={`xl:grid grid-cols-${expandTableData} gap-4 px-4`}>
              <div className="w-full border-2 p-2">
                <AdaptableCard>
                  <PaymentHistory  handleChangeGrid={ handleChangeGrid } />
                  <PaymentMethods data={data?.paymentMethod} />
                </AdaptableCard>
              </div>

              <div className="w-full border-2 p-2">
                <AdaptableCard>
                  <PaymentHistory2 handleChangeGrid={ handleChangeGrid }/>
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
      {console.log(activeGraph, "")}

      <div className="xl:grid grid-cols-2 gap-4 px-4">
       
      </div>
    </Container>
  );
};

export default CustomerDetail;
