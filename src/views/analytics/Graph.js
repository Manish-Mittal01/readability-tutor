import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./analytics.module.css";
import { MdCancel } from "react-icons/md";
import { Checkbox, Select } from "components/ui";
import { Chart, Loading } from "components/shared";
import { COLORS, compreColor } from "constants/chart.constant";
import { useEffect } from "react";
import { analyticsData } from "mock/data/analyticsData";
import { Alert, Notification, toast } from "components/ui";

const graphTypes = [
  {
    label: "Line Chart",
    value: "line",
  },
  {
    label: "Area Chart",
    value: "area",
  },
  {
    label: "Bar Chart",
    value: "bar",
  },
  {
    label: "Pie Chart",
    value: "donut",
  },
];

export default function Graph({
  open,
  setOpen,
  setPageNumber,
  records,
  getEndPoint,
}) {
  const defaultSeries = {
    name: "",
    type: graphTypes[1].value,
    data: [],
  };
  const defaultChartsData = {
    title: "",
    type: graphTypes[1].value,
    description: "",

    axisData: {
      xAxis: {
        title: "",
        name: "",
        values: [],
      },
      yAxis: {
        leftYAxis: {
          title: "",
          name: "",
          min: "",
          max: "",
          steps: "",
        },
        rightYAxis: {
          title: "",
          name: "",
          min: "",
          max: "",
          steps: "",
        },
      },
    },
    series: [defaultSeries],
  };
  const [endPoints, setEndPoints] = useState({});
  const [showTable, setShowTable] = useState(false); //dummy state (can be removed after api is implemented on endpoint selection)
  const [chartsData, setChartsData] = useState(defaultChartsData);
  const [myCharts, setMyCharts] = useState([]);
  const [endPointTableData, setEndPointTableData] = useState({});
  const [apiData, setApiData] = useState({});
  const [allCharts, setAllCharts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [defaultYAxis, setDefaultYAxis] = useState(false);

  const allEndPoints = [];

  records &&
    records.length > 0 &&
    records.map((item) => {
      const value = {
        value: item.endpointUrl,
        label: item.endpointTitle,
      };
      allEndPoints.push(value);
    });

  const handleClose = () => {
    setOpen(false);
    !endPoints.value && setPageNumber(1);
  };

  const selectedEndpoints = (value) => {
    setLoading(true);

    setTimeout(() => {
      //
      // let selectedIndex;
      // allEndPoints.map((item, i) => {
      //   if (item.label === value.label) selectedIndex = i;
      // });

      // const endNumbers = [1, 2, 3];
      // const firstNumber = endNumbers[0];
      // const lastNumber = endNumbers.slice(-1)[0];
      // const urlEnd = {};

      // allEndPoints.map((_, index) => {
      //   const lastValue = Object.values(urlEnd).pop();
      //   if (!lastValue || lastValue === lastNumber) {
      //     urlEnd[index] = firstNumber;
      //   } else {
      //     urlEnd[index] = endNumbers[endNumbers.indexOf(lastValue) + 1];
      //   }
      // });

      // let url = `https://healthcare.digital4design.in/api/json/columns/${urlEnd[selectedIndex]}`;
      // axios
      //   .get(url)
      //   .then((resp) => {
      //     const { data } = resp;
      //
      // const data = analyticsData.Data;
      let data = {};

      analyticsData.Data.map((values, index) => {
        Object.keys(values).map((item) => {
          if (data[item] && Array.isArray(data[item])) {
            data[item] = [...data[item], values[item]];
          } else {
            data[item] = [values[item]];
          }
        });
      });
      console.log("newData", data);

      setApiData(data);
      const d = Object.values(data);
      setEndPointTableData({
        headers: Object.keys(data),
        body: d[0].map((column, i) => d.map((values, r) => values[i])),
      });
      setShowTable(true);

      const charts = localStorage.getItem("allApiCharts")
        ? JSON.parse(localStorage.getItem("allApiCharts"))
        : [];

      const myCharts =
        Array.isArray(charts) && charts.length > 0
          ? charts.filter((item) => item.endPointTitle === value.label)
          : [];
      const chartArr = [];
      myCharts.map((item) => {
        chartArr.push(item.chartsData);
      });
      setMyCharts([...chartArr]);
      setAllCharts([...charts]);

      //
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      //
      setTimeout(() => {
        setEndPoints(value);
        setOpen(false);
        setLoading(false);
      });
    });
  };

  const addNewChart = () => {
    const newSeries = chartsData.series.filter((item) => item.data.length > 0);
    const newChartsData = {
      ...chartsData,
      series: newSeries,
    };
    myCharts.push(newChartsData);
    setMyCharts([...myCharts]);
    allCharts.push({
      endPointTitle: endPoints.label,
      newChartsData,
    });
    setChartsData(defaultChartsData);
    localStorage.setItem("allApiCharts", JSON.stringify(allCharts));
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
    toast.push(
      <Notification title={"Success"} type="success">
        new grapgh added successfully
      </Notification>
    );
  };

  useEffect(() => {
    const value = {
      value: getEndPoint.endpointUrl,
      label: getEndPoint.endpointTitle,
      index: getEndPoint.index,
    };
    getEndPoint && selectedEndpoints(value);
  }, []);

  return (
    <Loading
      loading={loading}
      type={"default"}
      className={styles.loader}
      // className={loading ? styles.loader : ""}
    >
      <Box>
        {showTable && (
          <>
            <Typography variant="h4" my={2}>
              {endPoints.label}
            </Typography>
            <Box
            // style={{ border: "1px solid #333" }}
            >
              <Box className={styles.tableWrapper}>
                <table
                  className={`table table-bordered border-dark ${styles.table}`}
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      {endPointTableData.headers &&
                        endPointTableData.headers.length > 0 &&
                        endPointTableData.headers.map((header, i) => (
                          <th key={header + 1}>{header}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {endPointTableData.body &&
                      endPointTableData.body.length > 0 &&
                      endPointTableData.body.map((row, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          {row.map((cellData, i) => (
                            <td key={cellData + `${i}`}>{cellData}</td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Box>
            </Box>

            <Grid
              container
              my={2}
              style={{
                height: "fit-content",
              }}
            >
              <Grid item xs={5}>
                <Box className={styles.gridBox}>
                  <Typography className={styles.inputLabel}>
                    Chart Title
                  </Typography>
                  <TextField
                    type="text"
                    variant="outlined"
                    placeholder="Chart Title"
                    className={`${styles.boxInput}`}
                    value={chartsData.title}
                    onChange={(e) => {
                      setChartsData({
                        ...chartsData,
                        title: e.target.value,
                      });
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <Typography className={styles.inputLabel}>
                  Chart Type
                </Typography>
                <select
                  className={`${styles.dropdown}`}
                  value={chartsData.type}
                  onChange={(e) => {
                    const type = e.target.value;
                    setChartsData({ ...chartsData, type: type });
                  }}
                >
                  {graphTypes.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </Grid>
            </Grid>

            <Grid container my={2}>
              <Grid item xs={5}>
                <Box>
                  <Typography className={styles.inputLabel}>
                    Y-Axis configs
                  </Typography>
                  <Box className={styles.headersBox}>
                    <Typography
                      className={`${styles.inputLabel} ${styles.internalLabel}`}
                      style={{ display: "flex" }}
                    >
                      Axis values
                      <Checkbox
                        checked={defaultYAxis}
                        onChange={(e) => {
                          setDefaultYAxis(!defaultYAxis);
                        }}
                        className={styles.checkBox}
                      />
                      Default Values
                    </Typography>
                    <Grid item xs={12}>
                      <Typography className={styles.inputLabel}>
                        Left Axis
                      </Typography>
                      <Grid item xs={12} className={styles.headersBox}>
                        <Grid item xs={12}>
                          <Box>
                            <Typography
                              className={`${styles.inputLabel} ${styles.internalLabel}`}
                            >
                              Axis title
                            </Typography>
                            <TextField
                              type="text"
                              variant="outlined"
                              placeholder="Axis Title"
                              className={`${styles.boxInput}`}
                              // value={chartsData.axisTitle.yAxis}
                              value={chartsData.axisData.yAxis.leftYAxis.title}
                              onChange={(e) => {
                                const newChartsData = {
                                  ...chartsData,
                                  axisData: {
                                    ...chartsData.axisData,
                                    yAxis: {
                                      ...chartsData.axisData.yAxis,
                                      leftYAxis: {
                                        ...chartsData.axisData.yAxis.leftYAxis,
                                        title: e.target.value,
                                      },
                                    },
                                  },
                                };
                                setChartsData({
                                  ...newChartsData,
                                });
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid container>
                          <Grid item xs={4}>
                            <Box>
                              <Typography
                                className={`${styles.inputLabel} ${styles.internalLabel}`}
                              >
                                Min
                              </Typography>
                              <TextField
                                type="number"
                                variant="outlined"
                                placeholder="min values"
                                disabled={defaultYAxis}
                                className={`${styles.boxInput}`}
                                value={chartsData.axisData.yAxis.leftYAxis.min}
                                onChange={(e) => {
                                  const newChartsData = {
                                    ...chartsData,
                                    axisData: {
                                      ...chartsData.axisData,
                                      yAxis: {
                                        ...chartsData.axisData.yAxis,
                                        leftYAxis: {
                                          ...chartsData.axisData.yAxis
                                            .leftYAxis,
                                          min: e.target.value,
                                        },
                                      },
                                    },
                                  };
                                  setChartsData({
                                    ...newChartsData,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={4} style={{ paddingInline: "12px" }}>
                            <Box>
                              <Typography
                                className={`${styles.inputLabel} ${styles.internalLabel}`}
                              >
                                Max
                              </Typography>
                              <TextField
                                type="number"
                                variant="outlined"
                                disabled={defaultYAxis}
                                placeholder="max value"
                                className={`${styles.boxInput}`}
                                value={chartsData.axisData.yAxis.leftYAxis.max}
                                onChange={(e) => {
                                  const newChartsData = {
                                    ...chartsData,
                                    axisData: {
                                      ...chartsData.axisData,
                                      yAxis: {
                                        ...chartsData.axisData.yAxis,
                                        leftYAxis: {
                                          ...chartsData.axisData.yAxis
                                            .leftYAxis,
                                          max: e.target.value,
                                        },
                                      },
                                    },
                                  };
                                  setChartsData({
                                    ...newChartsData,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box>
                              <Typography
                                className={`${styles.inputLabel} ${styles.internalLabel}`}
                              >
                                Steps
                              </Typography>
                              <TextField
                                type="number"
                                variant="outlined"
                                placeholder="steps"
                                disabled={defaultYAxis}
                                className={`${styles.boxInput}`}
                                value={
                                  chartsData.axisData.yAxis.leftYAxis.steps
                                }
                                onChange={(e) => {
                                  const newChartsData = {
                                    ...chartsData,
                                    axisData: {
                                      ...chartsData.axisData,
                                      yAxis: {
                                        ...chartsData.axisData.yAxis,
                                        leftYAxis: {
                                          ...chartsData.axisData.yAxis
                                            .leftYAxis,
                                          steps: e.target.value,
                                        },
                                      },
                                    },
                                  };
                                  setChartsData({
                                    ...newChartsData,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        className={styles.inputLabel}
                        style={{ marginTop: "12px" }}
                      >
                        Right Axis
                      </Typography>
                      <Grid item xs={12} className={styles.headersBox}>
                        <Grid item xs={12}>
                          <Box>
                            <Typography
                              className={`${styles.inputLabel} ${styles.internalLabel}`}
                            >
                              Axis title
                            </Typography>
                            <TextField
                              type="text"
                              variant="outlined"
                              placeholder="Axis Title"
                              className={`${styles.boxInput}`}
                              value={chartsData.axisData.yAxis.rightYAxis.title}
                              onChange={(e) => {
                                const newChartsData = {
                                  ...chartsData,
                                  axisData: {
                                    ...chartsData.axisData,
                                    yAxis: {
                                      ...chartsData.axisData.yAxis,
                                      rightYAxis: {
                                        ...chartsData.axisData.yAxis.rightYAxis,
                                        title: e.target.value,
                                      },
                                    },
                                  },
                                };
                                setChartsData({
                                  ...newChartsData,
                                });
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid container>
                          <Grid item xs={4}>
                            <Box>
                              <Typography
                                className={`${styles.inputLabel} ${styles.internalLabel}`}
                              >
                                Min
                              </Typography>
                              <TextField
                                type="number"
                                variant="outlined"
                                placeholder="min values"
                                disabled={defaultYAxis}
                                className={`${styles.boxInput}`}
                                value={chartsData.axisData.yAxis.rightYAxis.min}
                                onChange={(e) => {
                                  const newChartsData = {
                                    ...chartsData,
                                    axisData: {
                                      ...chartsData.axisData,
                                      yAxis: {
                                        ...chartsData.axisData.yAxis,
                                        rightYAxis: {
                                          ...chartsData.axisData.yAxis
                                            .rightYAxis,
                                          min: e.target.value,
                                        },
                                      },
                                    },
                                  };
                                  setChartsData({
                                    ...newChartsData,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={4} style={{ paddingInline: "12px" }}>
                            <Box>
                              <Typography
                                className={`${styles.inputLabel} ${styles.internalLabel}`}
                              >
                                Max
                              </Typography>
                              <TextField
                                type="number"
                                variant="outlined"
                                disabled={defaultYAxis}
                                placeholder="max value"
                                className={`${styles.boxInput}`}
                                value={chartsData.axisData.yAxis.rightYAxis.max}
                                onChange={(e) => {
                                  const newChartsData = {
                                    ...chartsData,
                                    axisData: {
                                      ...chartsData.axisData,
                                      yAxis: {
                                        ...chartsData.axisData.yAxis,
                                        rightYAxis: {
                                          ...chartsData.axisData.yAxis
                                            .rightYAxis,
                                          max: e.target.value,
                                        },
                                      },
                                    },
                                  };
                                  setChartsData({
                                    ...newChartsData,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box>
                              <Typography
                                className={`${styles.inputLabel} ${styles.internalLabel}`}
                              >
                                Steps
                              </Typography>
                              <TextField
                                type="number"
                                variant="outlined"
                                placeholder="steps"
                                disabled={defaultYAxis}
                                className={`${styles.boxInput}`}
                                value={
                                  chartsData.axisData.yAxis.rightYAxis.steps
                                }
                                onChange={(e) => {
                                  const newChartsData = {
                                    ...chartsData,
                                    axisData: {
                                      ...chartsData.axisData,
                                      yAxis: {
                                        ...chartsData.axisData.yAxis,
                                        rightYAxis: {
                                          ...chartsData.axisData.yAxis
                                            .rightYAxis,
                                          steps: e.target.value,
                                        },
                                      },
                                    },
                                  };
                                  setChartsData({
                                    ...newChartsData,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={5}>
                <Box>
                  <Typography className={styles.inputLabel}>
                    X-Axis configs
                  </Typography>
                  <Box className={styles.headersBox}>
                    <Typography
                      className={`${styles.inputLabel} ${styles.internalLabel}`}
                    >
                      Axis title
                    </Typography>
                    <Grid item xs={8}>
                      <TextField
                        type="text"
                        variant="outlined"
                        placeholder="X-axis Title"
                        className={`${styles.boxInput}`}
                        // value={chartsData.axisTitle.xAxis}
                        value={chartsData.axisData.xAxis.title}
                        onChange={(e) => {
                          const newChartsData = {
                            ...chartsData,
                            axisData: {
                              ...chartsData.axisData,
                              xAxis: {
                                ...chartsData.axisData.xAxis,
                                title: e.target.value,
                              },
                            },
                          };
                          setChartsData({
                            ...newChartsData,
                          });
                        }}
                      />
                    </Grid>
                    <Typography
                      className={`${styles.inputLabel} ${styles.internalLabel}`}
                    >
                      Axis values
                    </Typography>
                    <Grid item xs={8}>
                      <select
                        className={`${styles.dropdown}`}
                        value={chartsData.axisData.xAxis.name || ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          const labels = apiData[value];

                          const newChartsData = {
                            ...chartsData,
                            axisData: {
                              ...chartsData.axisData,
                              xAxis: {
                                ...chartsData.axisData.xAxis,
                                values: labels,
                                name: value,
                              },
                            },
                          };
                          setChartsData({
                            ...newChartsData,
                          });
                        }}
                      >
                        <option value="" disabled>
                          Select x-axis Labels
                        </option>
                        {endPointTableData.headers &&
                          endPointTableData.headers.length > 0 &&
                          endPointTableData.headers.map((header, i) => (
                            <option key={header + 1}>{header}</option>
                          ))}
                      </select>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container my={2} xs={5}>
              <Box style={{ width: "100%" }}>
                <Typography className={styles.inputLabel}>
                  Graph Values
                </Typography>
                <Box className={`${styles.headersBox}`}>
                  {chartsData.series &&
                    chartsData.series.length > 0 &&
                    chartsData.series.map((values, i) => (
                      <Grid container key={i} my={1}>
                        <Grid item xs={11} pr={2}>
                          <select
                            className={`${styles.dropdown}`}
                            value={values.name}
                            onChange={(e) => {
                              const value = e.target.value;
                              const series = {
                                name: value,
                                type: chartsData.type,
                                data: apiData[value],
                              };
                              chartsData.series.splice(i, 1, series);
                              setChartsData({
                                ...chartsData,
                              });
                            }}
                          >
                            <option value="" disabled>
                              Select {`series-${i + 1}`}
                            </option>
                            {endPointTableData.headers &&
                              endPointTableData.headers.length > 0 &&
                              endPointTableData.headers.map((header, i) => (
                                <option key={header + 1}>{header}</option>
                              ))}
                          </select>
                        </Grid>
                        {
                          <Grid item xs={1} style={{ alignSelf: "center" }}>
                            {i === chartsData.series.length - 1 && (
                              <Typography
                                className={styles.headerActionBtn}
                                onClick={() => {
                                  chartsData.series.push(defaultSeries);
                                  setChartsData({ ...chartsData });
                                }}
                              >
                                +
                              </Typography>
                            )}
                            {chartsData.series.length - 1 === i && i > 0 && (
                              <Typography
                                className={styles.headerActionBtn}
                                onClick={() => {
                                  const newaxisColumns = chartsData.series;
                                  newaxisColumns.splice(i, 1);
                                  setChartsData({ ...chartsData });
                                }}
                              >
                                -
                              </Typography>
                            )}
                          </Grid>
                        }
                      </Grid>
                    ))}
                </Box>
              </Box>
            </Grid>
            <Grid container xs={5} my={2}>
              <Box className={styles.gridBox}>
                <Typography className={styles.inputLabel}>
                  Description :
                </Typography>
                <Box>
                  <textarea
                    id="instruction"
                    name="previewData"
                    className={styles.previewData}
                    value={chartsData.description}
                    onChange={(e) => {
                      setChartsData({
                        ...chartsData,
                        description: e.target.value,
                      });
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Button
              className={styles.pageEndBtn}
              style={{
                marginRight: "16px",
              }}
              disabled={
                chartsData.series.filter((item) => item.data.length > 0)
                  .length <= 0
              }
              onClick={() => {
                addNewChart();
              }}
            >
              Add Chart
            </Button>
            <Button
              className={styles.pageEndBtn}
              style={{
                marginRight: "16px",
              }}
              onClick={() => {
                setMyCharts([]);
                const newCharts = allCharts.filter(
                  (item) => item.endPointTitle !== endPoints.label
                );
                setAllCharts([...newCharts]);
                setChartsData(defaultChartsData);
                localStorage.setItem("allApiCharts", JSON.stringify(newCharts));
              }}
              disabled={myCharts.length <= 0}
            >
              Reset All
            </Button>

            {/* <CanvasJSChart options={graphData} /> */}

            {myCharts.map((item, index) => (
              <div
                style={{
                  marginTop: "32px",
                  width: "900px",
                  height: "450px",
                  marginInline: "auto",
                }}
                key={index}
              >
                <Chart
                  options={{
                    title: { text: item.title },
                    colors:
                      item.type === graphTypes[1].value ? compreColor : COLORS,
                    stroke: {
                      curve: "smooth",
                    },
                    fill: {
                      type: "gradient",
                    },
                    xaxis: {
                      title: {
                        text: item.axisData.xAxis.title,
                        offsetY: 80,
                      },
                      categories: item.axisData.xAxis.values,
                    },
                    yaxis: [
                      {
                        ...item.axisData.yAxis.leftYAxis,
                        title: { text: item.axisData.yAxis.leftYAxis.title },
                      },
                      {
                        ...item.axisData.yAxis.rightYAxis,
                        opposite: true,
                        title: { text: item.axisData.yAxis.rightYAxis.title },
                      },
                    ],
                    chart: {
                      toolbar: {
                        show: true,
                        offsetX: 0,
                        offsetY: 0,
                        tools: {
                          download: true,
                          zoom: true,
                          zoomin: true,
                          zoomout: true,
                          pan: false,
                          reset: false,
                          customIcons: [],
                        },
                      },
                    },
                    dataLabels: {
                      enabled: item.type === graphTypes[3].value ? true : false,
                    },
                  }}
                  series={
                    item.type === graphTypes[3].value
                      ? item.series[0].data
                      : item.series
                  }
                  type={item.type}
                  height={300}
                />
              </div>
            ))}
          </>
        )}

        <Dialog onClose={handleClose} open={open} className={styles.dialogBox}>
          <MdCancel
            className={styles.crossIcon}
            onClick={() => handleClose()}
          />
          <DialogTitle style={{ paddingLeft: "12px" }}>
            Select Endpoint Title
          </DialogTitle>
          <Grid container style={{ padding: "12px" }}>
            <Select
              styles={{
                container: (baseStyles) => ({
                  ...baseStyles,
                  width: "400px",
                }),
                menuPortal: (baseStyles) => ({
                  ...baseStyles,
                  zIndex: 100000,
                }),
              }}
              menuPortalTarget={document.body}
              defaultValue={allEndPoints[0]}
              options={allEndPoints}
              value={endPoints}
              onChange={(value) => {
                selectedEndpoints(value);
              }}
              isSearchable={false}
            />
          </Grid>
        </Dialog>
      </Box>
    </Loading>
  );
}
