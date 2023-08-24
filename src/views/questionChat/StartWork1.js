import { Box, Typography } from "@mui/material";
import React from "react";

export default function StartWork1() {
  return (
    <>
      <center>
        <Box marginTop={9}>
          <img src="/img/question-chat/Sequence 07 1.svg"></img>

          <Typography variant="h4" sx={{ font: "33px" }}>
            <b>You're awesome!</b>
          </Typography>
          <Typography>you answered all questions.</Typography>
        </Box>
        <Box>
          <img src="/img/question-chat/star.png"></img>
          <Typography variant="h5">1 Star</Typography>
        </Box>
      </center>
    </>
  );
}
