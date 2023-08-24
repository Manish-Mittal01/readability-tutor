import {
  Box,
  Button,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./kycForm.module.css";
import { MdCancel } from "react-icons/md";

const Comprehension = ({ pageData, updateExportableJson }) => {
  const [data, setData] = useState(pageData?.Story);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState([null, null]);
  const [newValues, setNewValues] = useState({
    Question: "",
    Answer: "",
  });

  useEffect(() => {
    setData(pageData?.Story);
  }, [pageData]);

  return (
    <>
      <Box
        sx={{
          marginLeft: "2%",
          height: "auto",
        }}
      >
        <Typography my={4} variant="h4">
          Comprehension
        </Typography>
        <Box>
          <table className={`table table-bordered border-dark ${styles.table}`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Page Text</th>
                <th scope="col">Correct Answer</th>
                <th scope="col">Reference page</th>
                {/* <th scope="col">OpenAI Id</th> */}
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) =>
                  item.Questions.map((value, i) => (
                    <tr key={value.Question}>
                      <th>{i + 1}</th>
                      <td>{value.Question}</td>
                      <td>{value.Answer}</td>
                      <td>{index + 1}</td>
                      {/* <td>{"@"}</td> */}
                      <td>
                        <button
                          onClick={() => {
                            setEditing(true);
                            setEditIndex([index, i]);
                            setNewValues({
                              Question: value.Question,
                              Answer: value.Answer,
                            });
                          }}
                          style={{ color: "blue" }}
                        >
                          Edit
                        </button>
                        <br />
                        <button
                          onClick={() => {
                            data[index].Questions.splice(i, 1);
                            setData([...data]);
                            const newData = {
                              ...pageData,
                              Story: data,
                            };
                            updateExportableJson(newData);
                          }}
                          style={{ color: "blue" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center" }}>
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Box>

        {editing && (
          <>
            <SwipeableDrawer
              anchor={"top"}
              open={true}
              className={styles.drawer}
              style={{ width: "100%" }}
              // onClose={setEditing(false)}
              // onOpen={setEditing(true)}
            >
              <MdCancel
                className={styles.crossIcon}
                onClick={() => setEditing(false)}
              />
              <Box style={{ padding: "40px" }}>
                <Typography variant="h5">Edit Question:</Typography>
                <Typography>Page#:</Typography>
                <TextField
                  type="text"
                  variant="outlined"
                  value={editIndex[0] + 1}
                  disabled
                  inputProps={{
                    style: {
                      height: "28px",
                      padding: 0,
                      paddingLeft: "4px",
                    },
                  }}
                />
                <Typography>Question:</Typography>
                <TextField
                  style={{
                    border: "1px solid #333",
                    minHeight: "30px",
                    minWidth: "40%",
                  }}
                  value={newValues.Question}
                  onChange={(e) => {
                    setNewValues({
                      ...newValues,
                      Question: e.target.value,
                    });
                  }}
                />
                <Typography>Correct Answer:</Typography>
                <TextField
                  style={{
                    border: "1px solid #333",
                    minHeight: "30px",
                    minWidth: "40%",
                  }}
                  value={newValues.Answer}
                  onChange={(e) => {
                    setNewValues({
                      ...newValues,
                      Answer: e.target.value,
                    });
                  }}
                />
                <Button
                  style={{
                    backgroundColor: "#40E0D0",
                    marginRight: "4%",
                    color: "white",
                    font: "16px",
                  }}
                  onClick={() => {
                    const item = {
                      ...data[editIndex[0]].Questions[editIndex[1]],
                      Question: newValues.Question,
                      Answer: newValues.Answer,
                    };
                    data[editIndex[0]].Questions.splice(editIndex[1], 1, item);
                    setData([...data]);
                    setEditing(false);
                    const newData = {
                      ...pageData,
                      Story: data,
                    };
                    updateExportableJson(newData);
                    // updateExportableJson(data);
                  }}
                >
                  UPDATE
                </Button>
              </Box>
            </SwipeableDrawer>
          </>
        )}
      </Box>
    </>
  );
};

export default Comprehension;
