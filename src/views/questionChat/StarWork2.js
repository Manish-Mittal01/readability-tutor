import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./chat.module.css";

export default function StarWork2() {
  return (
    <>
      <Box className={styles.page3}>
        <center>
          <img src="/img/question-chat/star.png"></img>
          <Typography variant="h5">5 Star</Typography>
        </center>
      </Box>
    </>
  );
}
