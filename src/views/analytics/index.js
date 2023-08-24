import React, { useEffect, useState } from "react";
import ApiForm from "./apiForm";
import Records from "./records";
import { Button } from "@mui/material";
import styles from "./analytics.module.css";
import Graph from "./Graph";

export default function Analytics() {
  const deafultData = [
    {
      endpointTitle: "Bussiness analyses",
      endpointUrl:
        "https://predev-api.readabilitytutor.com/API/v1/bussiness/analyses",
      description: "Analyses of bussiness's financial situation and assets ",
      requestType: "GET",
      isActive: true,
      authorizationType: "BEARER",
      authorization: {
        userId: "",
        password: "",
        token: "kjfnyco92y5o3rhl3q2yr8t3ythcow8tywb87cwtoyb",
      },
      headers: {
        Accept: "application/json",
      },
    },
    {
      endpointTitle: "Country Records",
      endpointUrl:
        "https://predev-api.readabilitytutor.com/API/v1/country_data",
      description: "All required data of a country",
      requestType: "GET",
      isActive: true,
      authorizationType: "BASIC",
      authorization: {
        userId: "hstd8w23ji",
        password: "Test1",
        token: "",
      },
      headers: {
        Accept: "application/json",
      },
    },
    {
      endpointTitle: "Budget Plan",
      endpointUrl: "https://predev-api.readabilitytutor.com/API/v1/cost",
      description: "Planning budget according to cost in every department",
      requestType: "GET",
      isActive: true,
      authorizationType: "BASIC",
      authorization: {
        userId: "usd72k9wg3",
        password: "Test1",
        token: "",
      },
      headers: {
        Accept: "application/json",
      },
    },
    {
      endpointTitle: "Student Records",
      endpointUrl: "https://predev-api.readabilitytutor.com/API/v1/cost",
      description: "Records of students performence",
      requestType: "GET",
      isActive: true,
      authorizationType: "BASIC",
      authorization: {
        userId: "ahsy73k0su6",
        password: "Test4",
        token: "",
      },
      headers: {
        Accept: "application/json",
      },
    },
    {
      endpointTitle: "Group Details",
      endpointUrl: "https://predev-api.readabilitytutor.com/API/v1/cost",
      description: "Expenses details of the groups",
      requestType: "GET",
      isActive: true,
      authorizationType: "BEARER",
      authorization: {
        userId: "",
        password: "",
        token: "lsiyr9we8yrcn9pgh8qo7tg8wygwghdj948dkwgfk",
      },
      headers: {
        Accept: "application/json",
      },
    },
  ];
  const data = localStorage.getItem("apiRecords")
    ? JSON.parse(localStorage.getItem("apiRecords"))
    : deafultData;

  const [records, setRecords] = useState(data);
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(false);
  const [getEndPoint, setGetEndPoint] = useState(false);

  const selectedEndPoint = (value) => {
    setGetEndPoint(value);
  };
  useEffect(() => {
    localStorage.setItem("apiRecords", JSON.stringify(deafultData));
  }, []);

  return (
    <div style={{ marginInline: "2%" }}>
      {pageNumber === 1 && (
        <>
          <ApiForm records={records} setRecords={setRecords} />
          <Records
            records={records}
            setPageNumber={setPageNumber}
            selectedEndPoint={selectedEndPoint}
          />
          <Button
            className={styles.pageEndBtn}
            onClick={() => {
              setOpen(true);
              setPageNumber(2);
            }}
          >
            Add New Chart
          </Button>
        </>
      )}
      {pageNumber === 2 && (
        <>
          <Graph
            records={records}
            open={open}
            setOpen={setOpen}
            setPageNumber={setPageNumber}
            getEndPoint={getEndPoint}
          />
        </>
      )}
    </div>
  );
}
