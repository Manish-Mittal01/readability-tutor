import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./chat.module.css";

export default function Student() {
  return (
    <>
      <Box className={styles.page3}>
        <center>
          <Typography variant="h4" sx={{ font: "33px", marginBottom: "60px" }}>
            <b> New badge unclocked!</b>
          </Typography>
          <img src="/img/question-chat/Badge.svg"></img>
        </center>
      </Box>
    </>
  );
}
