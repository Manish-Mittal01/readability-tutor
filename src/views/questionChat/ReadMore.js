import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./chat.module.css";

export default function ReadMore() {
  return (
    <>
      <center className={styles.finalPage}>
        <Box>
          <img src="/img/question-chat/Sequence 07 1.svg"></img>
          <Typography variant="h4">
            <b>Want to read more ?</b>
          </Typography>
          <Typography>
            I would love to read another book with you. Let's pick one !
          </Typography>
        </Box>
        <div style={{ flexGrow: 1 }}></div>
        <Box style={{ marginBottom: "24px" }}>
          <Typography>
            <Button
              sx={{
                backgroundColor: "#40E0D0",
                textAlign: "center",
                color: "white",
                width: "30%",
                height: "5vh",
                borderRadius: "22px",
              }}
            >
              Got to library{" "}
            </Button>
          </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              textAlign: "center",
              font: "44px",
              color: "#40E0D0",
              border: "1px solid #40E0D0",
              width: "30%",
              height: "5vh",
              borderRadius: "22px",
              marginTop: "18px",
            }}
          >
            Done
          </Button>
        </Box>
      </center>
    </>
  );
}
