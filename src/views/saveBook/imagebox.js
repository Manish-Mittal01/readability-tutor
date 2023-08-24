import React from "react";
import styles from "./kycForm.module.css";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

export default function Imagebox({ onClick, url, value = "" }) {
  return (
    <div className={styles.Imagebox_main} onClick={() => onClick()}>
      <img src={url} />
      <FormControlLabel value={value} control={<Radio />} />
      <p>Set as book cover</p>
    </div>
  );
}
