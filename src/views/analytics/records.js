import React, { useState } from "react";
import styles from "./analytics.module.css";
import { setDrawerOpen } from "store/readability/readabilityStateSlice";
import { Dialog, DialogTitle, Grid, Typography } from "@mui/material";
import { MdCancel } from "react-icons/md";

export default function Records({ records, setPageNumber, selectedEndPoint }) {
  const [open, setOpen] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.listWrapper}>
      <table className={`table table-bordered border-dark ${styles.table}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Endpoint Title</th>
            <th scope="col">Endpoint Url</th>
            <th scope="col">Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records && records.length > 0 ? (
            records.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.endpointTitle}</td>
                  <td>{item.endpointUrl}</td>
                  <td>{item.description}</td>
                  <td style={{ width: "20%" }}>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setDetailsIndex(index);
                      }}
                      className={styles.viewBtn}
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        setPageNumber(2);
                        selectedEndPoint(item);
                      }}
                      className={styles.viewBtn}
                    >
                      Add Chart
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                No Data Found{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Dialog onClose={handleClose} open={open} className={styles.dialogBox}>
        <MdCancel className={styles.crossIcon} onClick={() => handleClose()} />
        <DialogTitle>API details</DialogTitle>

        <Grid container style={{ padding: "12px" }}>
          {Object.entries(records[detailsIndex] || {}).map((item, i) => (
            <Grid container my={1} key={i}>
              <Grid item xs={4} style={{ fontWeight: 600 }}>
                {item[0].slice(0, 1).toUpperCase()}
                {item[0].slice(1)} :
              </Grid>
              <Grid item xs={6}>
                {typeof item[1] === "object"
                  ? Object.entries(item[1]).map((value, i) => (
                      <Grid container key={i}>
                        <Grid item xs={6} style={{ fontWeight: 600 }}>
                          {value[0].slice(0, 1).toUpperCase()}
                          {value[0].slice(1)}
                        </Grid>
                        <Typography> {value[1]}</Typography>
                      </Grid>
                    ))
                  : item[1]}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Dialog>
    </div>
  );
}
