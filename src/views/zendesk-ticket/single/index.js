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
import {  MdHouse,MdMenuBook,MdPeopleAlt,MdPeopleOutline} from 'react-icons/md'; 
//injectReducer('crmCustomerDetails', reducer)
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
	
  const [repaint, setRepaint] = useState(false);
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
    //alert("Great Shot!");
  };

  const CustomerProfileAction = ({ id }) => {
    const dispatch = useDispatch();
    const [dialogOpen, setDialogOpen] = useState(false);

    const navigate = useNavigate();

    const onDialogClose = () => {
      setDialogOpen(false);
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
       
      </>
    );
  };

  return (
    <Container className="h-full">
     

      <Loading loading={loading}>
        {!isEmpty(data) && (
          <>
            
          
            <div className={`xl:grid grid-cols-1 gap-4 px-4`}>
              <div className="w-full border-2 p-2">
                <AdaptableCard>
                  <PaymentHistory  handleChangeGrid={ handleChangeGrid } />
              
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
