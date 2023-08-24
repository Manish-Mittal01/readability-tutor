import React, { useState, useEffect } from "react";
import { Card, Badge, Tooltip } from "components/ui";
import { Loading } from "components/shared";
import { Chart } from "components/shared";
import { DatePicker } from "components/ui";
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
import isEmpty from "lodash/isEmpty";
import { useSelector, useDispatch } from "react-redux";
import { Segment } from "components/ui";
import { Button } from "components/ui";
import { HiPhone } from "react-icons/hi";
import {
  MdMenuBook,
  MdPostAdd,
  MdListAlt,
  MdFilterAlt,
  MdHistory,
  MdHelpOutline,
} from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import { HiQuestionMarkCircle } from "react-icons/hi";

import dayjs from "dayjs";
import { Tag } from "components/ui";
const { DatePickerRange } = DatePicker;
const dateFormat = "MMM DD, YYYY";

const durationData = [
  {
    name: "Duration",
    type: "column",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Average Duration Block",
    type: "line",
    color: "#fde366",
    data: [13, 55, 26, 30, 56, 90, 95, 99, 94],
  },
];

const accuracyData = [
  {
    name: "< 85 ",
    data: [
      44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 41, 67, 22, 43, 41, 67,
      22, 43,
    ],
  },
  {
    name: "85-95",
    data: [
      13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27, 20, 8, 13, 27, 20, 8, 13,
      27,
    ],
  },
  {
    name: "> 95",
    data: [
      11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 15, 15, 21, 14, 15, 15,
      21, 14,
    ],
  },
];

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

const booksData = [
  {
    name: "Book Reading count",
    data: [
      { y: 16, x: "14 Jan" },
      { y: 17, x: "15 Jan" },
      { y: 17, x: "15 Jan" },
      { y: 17, x: "16 Jan" },
      { y: 17, x: "17 Jan" },
      { y: 14, x: "18 Jan" },
      { y: 14, x: "19 Jan" },
      { y: 13, x: "20 Jan" },
      { y: 11, x: "21 Jan" },
      { y: 14, x: "22 Jan" },
      { y: 10, x: "23 Jan" },
      { y: 16, x: "24 Jan" },
      { y: 16, x: "25 Jan" },
      { y: 19, x: "26 Jan" },
      { y: 19, x: "27 Jan" },
      { y: 15, x: "28 Jan" },
      { y: 16, x: "29 Jan" },
      { y: 16, x: "30 Jan" },
      { y: 17, x: "31 Jan" },
      { y: 22, x: "1 Feb" },
      { y: 18, x: "2 Feb" },
      { y: 18, x: "3 Feb" },
      { y: 13, x: "4 Feb" },
      { y: 17, x: "5 Feb" },
      { y: 19, x: "6 Feb" },
      { y: 20, x: "7 Feb" },
      { y: 21, x: "8 Feb" },
      { y: 23, x: "9 Feb" },
      { y: 19, x: "10 Feb" },
      { y: 19, x: "11 Feb" },
      { y: 18, x: "12 Feb" },
      { y: 20, x: "13 Feb" },
    ],
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
];

const PriorityTag = (props) => {
  const { priority } = props;
  const handleClick = (e, name) => {
    console.log(name, " ---------- ");
    props.onClick(e, name);
  };
  switch (priority) {
    case 0:
      return (
        <div onClick={(e) => handleClick(e, "graph1")}>
          <Tag className="overflowContentHandle cursor-pointer py-4 w-full text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0">
            <Button
              shape="circle"
              variant="plain"
              size="xs"
              icon={<MdHistory />}
            />
            Duration
          </Tag>
        </div>
      );
    case 1:
      return (
        <div onClick={(e) => handleClick(e, "graph2")}>
          <Tag
            className="overflowContentHandle cursor-pointer py-4 w-full text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0"
            onClick={(e) => handleClick(e, "graph2")}
          >
            <Button
              shape="circle"
              variant="plain"
              size="xs"
              icon={<HiCheck />}
            />
            Accuracy
          </Tag>
        </div>
      );
    case 2:
      return (
        <div onClick={(e) => handleClick(e, "graph3")}>
          <Tag className="overflowContentHandle cursor-pointer py-4 w-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0">
            <Button
              shape="circle"
              variant="plain"
              size="xs"
              icon={<HiQuestionMarkCircle />}
            />
            Comprehension
          </Tag>
        </div>
      );
    case 3:
      return (
        <div onClick={(e) => handleClick(e, "graph4")}>
          <Tag className="overflowContentHandle cursor-pointer py-4 w-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0">
            <Button
              shape="circle"
              variant="plain"
              size="xs"
              icon={<MdMenuBook />}
            />
            Books Read
          </Tag>
        </div>
      );
    case 4:
      return (
        <div onClick={(e) => handleClick(e, "graph5")}>
          <Tag className="overflowContentHandle cursor-pointer py-4 w-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0">
            <Button
              shape="circle"
              variant="plain"
              size="xs"
              icon={<MdMenuBook />}
            />
            Gade Wise Books Read
          </Tag>
        </div>
      );
    default:
      return null;
  }
};

const TaskOverview = ({ data = {}, className }) => {
  const [activeGraph, setActiveGraph] = useState("graph1");
  const handleChangeTag = (e, graphName) => {
    // alert(graphName);
    setActiveGraph(graphName);
  };

  const [startDate, setStartDate] = useState(
    dayjs().subtract(7, "days").toDate()
  ); //useSelector((state) => state?.salesDashboard?.state?.startDate);

  const [endDate, setEndDate] = useState(new Date()); //useSelector((state) => state?.salesDashboard?.state?.endDate);

  const [timeRange, setTimeRange] = useState(["weekly"]);

  const [repaint, setRepaint] = useState(false);

  const sideNavCollapse = useSelector(
    (state) => state.theme.layout.sideNavCollapse
  );

  const handleDateChange = (value) => {
    setStartDate(value[0]);
    setEndDate(value[1]);
  };

  useEffect(() => {
    setRepaint(true);
    const timer1 = setTimeout(() => setRepaint(false), 300);

    return () => {
      clearTimeout(timer1);
    };
  }, [data, sideNavCollapse]);

  return (
    <Card className={className}>
      <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
        <h4>Reading Report</h4>
      </div>
      <div className="md:flex lg:flex xl:flex justify-between items-end py-4">
        <div className="pr-2">
          <div className="pb-2">From</div>
          <DatePicker placeholder="01/17/2023" size="sm" />
        </div>
        <div className="pr-2">
          <div className="pb-2">To</div>
          <DatePicker placeholder="02/16/2023" size="sm" />
        </div>
        <div className="flex mobile-wrap">
          <div className="pr-2 mt-4">
            <Segment
              value={timeRange}
              onChange={(val) => setTimeRange(val)}
              size="sm"
            >
              <Segment.Item value="daily">View</Segment.Item>
              <Segment.Item className="bg-[#3699FF] text-white" value="daily">
                D
              </Segment.Item>
              <Segment.Item value="weekly">W</Segment.Item>
              <Segment.Item value="monthly">M</Segment.Item>
              <Segment.Item value="mon">Q</Segment.Item>
            </Segment>
          </div>

          <div className="mobileSwitch lg:flex xl:flex mt-4 flex">
            <div className="pr-2">
              <Button
                className="bg-[#F3F6F9]"
                shape="normal"
                variant="plain"
                size="sm"
                icon={<MdHelpOutline />}
              />
            </div>
            <div className="swicherParent  mt-1 mr-2">
              <label className="switch mb-1">
                <input
                  type="checkbox"
                  id=""
                  name="allselect"
                  value="Parent"
                  className="text-red-300"
                ></input>
                <span className="slider rounds"></span>
              </label>
            </div>
            <div className="flex">
              <Button
                className="bg-[#F3F6F9] mr-2 text-[#FFA800]"
                shape="normal"
                variant="plain"
                size="sm"
                icon={<MdPostAdd />}
              />
              <Button
                className="bg-[#F3F6F9] mr-2 text-[#B5B5C3]"
                shape="normal"
                variant="plain"
                size="sm"
                icon={<MdListAlt />}
              />
              <Tooltip title={"Filter"} wrapperClass="mr-1">
                <Button
                  className="bg-[#F3F6F9] mr-2"
                  shape="normal"
                  variant="plain"
                  size="sm"
                  icon={<MdFilterAlt />}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
            {/* { console.log(activeGraph, " >>>> ")} */}
            {activeGraph === "graph1" && (
              <div>
                {!isEmpty(data) && !repaint && (
                  <>
                    <div>
                      <Chart
                        options={{
                          plotOptions: {
                            bar: {
                              horizontal: false,
                              columnWidth: "55%",
                              endingShape: "rounded",
                            },
                          },
                          legend: {
                            show: true,
                            showForSingleSeries: true,
                          },
                          colors: durationColor,
                          dataLabels: {
                            enabled: false,
                          },
                          stroke: {
                            show: true,
                            width: 2,
                            colors: ["transparent"],
                          },
                          xaxis: {
                            categories: [
                              "Feb",
                              "Mar",
                              "Apr",
                              "May",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                              "Oct",
                            ],
                          },
                          fill: {
                            opacity: 1,
                          },
                          tooltip: {
                            y: {
                              formatter: (val) => `Accuracy${val} `,
                            },
                          },
                        }}
                        series={durationData}
                        height={300}
                        type="bar"
                      />
                    </div>
                  </>
                )}
              </div>
            )}
            {activeGraph === "graph2" && (
              <div>
                {!isEmpty(data) && !repaint && (
                  <>
                    <div>
                      <Chart
                        options={{
                          chart: {
                            stacked: true,
                            toolbar: {
                              show: true,
                            },
                            zoom: {
                              enabled: true,
                            },
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
                              "01/01/2011 GMT",
                              "01/02/2011 GMT",
                              "01/03/2011 GMT",
                              "01/04/2011 GMT",
                              "01/05/2011 GMT",
                              "01/06/2011 GMT",
                            ],
                          },

                          fill: {
                            opacity: 1,
                          },
                        }}
                        series={accuracyData}
                        type="bar"
                        height={300}
                      />
                    </div>{" "}
                    )
                  </>
                )}
              </div>
            )}
            {activeGraph === "graph3" && (
              <div>
                {!isEmpty(data) && !repaint && (
                  <>
                    <div>
                      <Chart
                        options={{
                          dataLabels: {
                            enabled: false,
                          },
                          legend: {
                            show: true,
                            showForSingleSeries: true,
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
                        series={compreshenData}
                        type="area"
                        height={300}
                      />
                    </div>{" "}
                    )
                  </>
                )}
              </div>
            )}
            {activeGraph === "graph4" && (
              <div>
                {!isEmpty(data) && !repaint && (
                  <>
                    <div>
                      <Chart
                        options={{
                          dataLabels: {
                            enabled: false,
                          },
                          legend: {
                            show: true,
                            showForSingleSeries: true,
                          },
                          plotOptions: {
                            bar: {
                              horizontal: false,
                              columnWidth: "72%",
                              endingShape: "rounded",
                            },
                          },
                          colors: bookReadcolor,
                          dataLabels: {
                            enabled: false,
                          },
                          stroke: {
                            show: true,
                            width: 2,
                            colors: ["transparent"],
                          },

                          fill: {
                            opacity: 1,
                          },
                          tooltip: {
                            y: {
                              formatter: (val) => `${val}`,
                            },
                          },
                        }}
                        series={booksData}
                        height={300}
                        type="bar"
                      />
                    </div>{" "}
                    )
                  </>
                )}
              </div>
            )}
            {activeGraph === "graph5" && (
              <div>
                {!isEmpty(data) && !repaint && (
                  <>
                    <div>
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
                          legend: {
                            show: true,
                            showForSingleSeries: true,
                          },
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

                          fill: {
                            opacity: 1,
                          },
                        }}
                        series={gardeWiseData}
                        type="bar"
                        height={300}
                      />
                    </div>{" "}
                    )
                  </>
                )}
              </div>
            )}
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
              <div className="tablet-margin">
                <PriorityTag
                  onClick={(e, name) => handleChangeTag(e, name)}
                  className="tab-margin"
                  priority={0}
                />
              </div>

              <div className="tablet-margin">
                <PriorityTag
                  priority={1}
                  onClick={(e, name) => handleChangeTag(e, name)}
                />
              </div>
              <div className="tablet-margin">
                <PriorityTag
                  priority={2}
                  onClick={(e, name) => handleChangeTag(e, name)}
                />
              </div>
              <div className="tablet-margin">
                <PriorityTag
                  priority={3}
                  onClick={(e, name) => handleChangeTag(e, name)}
                />
              </div>
              <div className="tablet-margin">
                <PriorityTag
                  priority={4}
                  onClick={(e, name) => handleChangeTag(e, name)}
                />
              </div>
              <div className="tablet-margin">
                <PriorityTag
                  priority={5}
                  onClick={(e, name) => handleChangeTag(e, name)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loading loading={repaint} type="cover">
        {repaint && <div className="h-[300px]" />}
      </Loading>
    </Card>
  );
};

export default TaskOverview;
