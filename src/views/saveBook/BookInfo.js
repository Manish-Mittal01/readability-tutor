import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Imagebox from "./imagebox";
import styles from "./kycForm.module.css";
import LoadingOverlay from "react-loading-overlay";
import BaseService from "services/BaseService";
import axios from "axios";

const BookInfo = (props) => {
  const {
    coverImages,
    aiFormData,
    getNewPreview,
    generateImage,
    loading,
    setImagesIndex,
    setCoverImages,
    updateExportableJson,
  } = props;

  const [coverImage, setCoverImage] = useState(
    "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
  );
  const [imageRow, setImageRow] = useState({ start: 0, end: 8 });
  const [formData, setFormData] = useState(aiFormData || {});
  const [coverImagesRow, setCoverImagesRow] = useState([]);
  const [newImageTitle, setNewImageTitle] = useState("");

  useEffect(() => {
    setCoverImage(coverImages[0]);
    let coverImageRow = coverImages.slice(imageRow.start, imageRow.end);
    setCoverImagesRow(coverImageRow);
  }, [coverImages]);

  useEffect(() => {
    setImagesIndex(coverImage);
  }, [coverImage]);

  useEffect(() => {
    let body = "";
    aiFormData.Story &&
      aiFormData.Story.length > 0 &&
      aiFormData.Story.map((item) => {
        body += item.PageText;
      });

    setFormData({
      ...aiFormData,
      body: body,
    });
  }, [aiFormData]);

  const getImageUrl = (e) => {
    var file = e.target.files[0];
    const data = new FormData();
    data.append("Filedata", file);
    setCoverImage("#");

    const resp = BaseService({
      url: "/Upload",
      method: "POST",
      data: data,
      headers: {
        UserToken:
          "DGj+TUGtk9GERZJMnE0yy7NKGyMtAnntAliL/ysncrTMy7AesbCuRm47xGRboG/yny1rw6YPkEpheA/xfrF4sKyLJvUjLObOXLkrHFqveuwzxq14iP/0daHWGrPT0bR5siVqO7SKbTDsCansW5+6kSSkQfKJ+V7VCLlyJMeKXWJgMdy4hhUad4Y6oqgQnXZVJJF3lZQrMwLWrgVQpFZvRNVygJ9q03ALLVnw71Pwrac=",
        AcitivityIds: "1",
        FingerPrintKey: "readability",
      },
    })
      .then((response) => {
        console.log("img response", response.data);
        const img = `https://dev-app.readabilitytutor.com/imgs${response.data.Data.FilePath.slice(
          6
        )}`;
        setCoverImagesRow([img]);
        setCoverImage(img);
        setCoverImages([img]);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <LoadingOverlay
        active={loading}
        spinner
        className={loading ? styles.loader : ""}
      >
        <Box
          sx={{
            // border: "1px solid #333",
            marginLeft: "2%",
            height: "auto",
            marginTop: "3%",
            paddingTop: "8px",
          }}
        >
          <Box marginLeft={2} marginRight={2}>
            <Typography>
              <b>Generated Content </b>
            </Typography>
            <Typography variant="h6">Book Info</Typography>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className={styles.inputLabel}>
                    {" "}
                    OpenAI id#
                  </Typography>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={styles.boxInput}
                  />
                  <Typography
                    style={{ fontWeight: "bold", color: "lightGrey" }}
                  >
                    For Future reference call
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={styles.inputLabel}>
                    Book Title:
                  </Typography>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={formData.Title}
                    onChange={(e) => {
                      const newData = {
                        ...formData,
                        Title: e.target.value,
                      };
                      setFormData({
                        ...newData,
                      });
                      updateExportableJson(newData);
                    }}
                    className={styles.boxInput}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mb={3}>
              <Typography className={styles.inputLabel}>Body</Typography>
              <textarea
                value={formData.body}
                onChange={(e) => {
                  getNewPreview(e.target.value);
                  setFormData({
                    ...formData,
                    body: e.target.value,
                  });
                }}
                className={styles.Boxborder}
                style={{
                  width: "90%",
                  height: "20vh",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              ></textarea>
            </Box>

            <Box>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box mb={2}>
                    <Typography className={styles.inputLabel}>
                      AR Score:
                    </Typography>
                    <TextField
                      type="number"
                      variant="outlined"
                      fullWidth
                      value={formData.ARScore}
                      onChange={(e) => {
                        // setFormData({
                        //   ...formData,
                        //   ARScore: e.target.value,
                        // });
                        const newData = {
                          ...formData,
                          ARScore: e.target.value,
                        };
                        setFormData({
                          ...newData,
                        });
                        updateExportableJson(newData);
                      }}
                      className={styles.boxInput}
                    />
                  </Box>
                  <Box mb={2}>
                    <Typography className={styles.inputLabel}>
                      {" "}
                      Genres:
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.Genre}
                      onChange={(e) => {
                        // setFormData({
                        //   ...formData,
                        //   Genre: e.target.value,
                        // });
                        const newData = {
                          ...formData,
                          Genre: e.target.value,
                        };
                        setFormData({
                          ...newData,
                        });
                        updateExportableJson(newData);
                      }}
                      className={styles.boxInput}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box mb={2}>
                    <Typography className={styles.inputLabel}>
                      {" "}
                      Lexile Start:
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.LexileLevelMin}
                      onChange={(e) => {
                        // setFormData({
                        //   ...formData,
                        //   LexileLevelMin: e.target.value,
                        // });
                        const newData = {
                          ...formData,
                          LexileLevelMin: e.target.value,
                        };
                        setFormData({
                          ...newData,
                        });
                        updateExportableJson(newData);
                      }}
                      className={styles.boxInput}
                    />
                  </Box>
                  <Box mb={2}>
                    <Typography className={styles.inputLabel}>
                      Vocab words:
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.Vocabulary}
                      onChange={(e) => {
                        // setFormData({
                        //   ...formData,
                        //   Vocabulary: e.target.value,
                        // });
                        const newData = {
                          ...formData,
                          Vocabulary: e.target.value,
                        };
                        setFormData({
                          ...newData,
                        });
                        updateExportableJson(newData);
                      }}
                      className={styles.boxInput}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box mb={2}>
                    <Typography className={styles.inputLabel}>
                      Lexile End:
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.LexileLevelMax}
                      onChange={(e) => {
                        // setFormData({
                        //   ...formData,
                        //   LexileLevelMax: e.target.value,
                        // });
                        const newData = {
                          ...formData,
                          LexileLevelMax: e.target.value,
                        };
                        setFormData({
                          ...newData,
                        });
                        updateExportableJson(newData);
                      }}
                      className={styles.boxInput}
                    />
                  </Box>
                  <Box>
                    <Typography className={styles.inputLabel}>
                      {" "}
                      Sight words:
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.SightWords}
                      onChange={(e) => {
                        // setFormData({
                        //   ...formData,
                        //   SightWords: e.target.value,
                        // });
                        const newData = {
                          ...formData,
                          SightWords: e.target.value,
                        };
                        setFormData({
                          ...newData,
                        });
                        updateExportableJson(newData);
                      }}
                      className={styles.boxInput}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                  <Typography>Cover Image</Typography>
                  <Box>
                    <img
                      width={"130px"}
                      src={
                        coverImage ||
                        "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={8} md={4}>
                  <Typography className={styles.inputLabel}>
                    Cover Image:
                  </Typography>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={newImageTitle}
                    onChange={(e) => {
                      setNewImageTitle(e.target.value);
                    }}
                    className={styles.boxInput}
                  />
                  <Box sx={{ marginBlock: "24px" }}>
                    <Button
                      style={{
                        marginRight: "4%",
                        backgroundColor: "#40e0d0",
                        color: "#fff",
                      }}
                      onClick={() => {
                        if (!newImageTitle) {
                          return alert("image title is required");
                        }
                        generateImage(
                          {
                            imageCount: "1",
                            imageFormat: "url",
                            imageSize: "512x512",
                            text: newImageTitle,
                          },
                          2
                        );
                      }}
                    >
                      Regenerate
                    </Button>
                    <Button
                      sx={{
                        marginTop: { xs: "0", sm: "0px" },
                        backgroundColor: "#40E0D0",
                        color: "white",
                      }}
                      onClick={() => {
                        var input = document.createElement("input");
                        input.type = "file";
                        input.style.display = "none";
                        input.onchange = function (e) {
                          getImageUrl(e);
                        };
                        document.body.appendChild(input);
                        input.click();
                        document.body.removeChild(input);
                      }}
                    >
                      Upload
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid container style={{ marginBlock: "16px" }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    name="radio-buttons-group"
                    style={{ display: "flex", flexDirection: "row" }}
                    value={coverImage}
                    onChange={(e) => {
                      setCoverImage(e.target.value);
                    }}
                  >
                    {coverImages.length > 8 && (
                      <p
                        style={{
                          cursor: "pointer",
                          fontSize: "35px",
                          marginTop: "8%",
                          marginRight: "4px",
                        }}
                        onClick={() => {
                          if (imageRow.start > 0) {
                            const start = imageRow.start - 1;
                            const end = imageRow.end - 1;
                            setImageRow((prev) => ({
                              start: prev.start - 1,
                              end: prev.end - 1,
                            }));
                            const newImagesRow = coverImages.slice(start, end);
                            setCoverImagesRow(newImagesRow);
                          }
                        }}
                      >
                        {"<"}
                      </p>
                    )}
                    {coverImagesRow.length > 0 && (
                      <>
                        {coverImagesRow.map((item) => (
                          <Imagebox
                            onClick={() => setCoverImage(item)}
                            key={item}
                            url={item}
                            value={item}
                          />
                        ))}
                      </>
                    )}
                    {coverImages.length > 8 && (
                      <p
                        style={{
                          cursor: "pointer",
                          fontSize: "35px",
                          marginTop: "8%",
                          marginLeft: "4px",
                        }}
                        onClick={() => {
                          if (imageRow.end < coverImages.length) {
                            const start = imageRow.start + 1;
                            const end = imageRow.end + 1;
                            setImageRow((prev) => ({
                              start: prev.start + 1,
                              end: prev.end + 1,
                            }));
                            const newImagesRow = coverImages.slice(start, end);
                            setCoverImagesRow(newImagesRow);
                          }
                        }}
                      >
                        {">"}
                      </p>
                    )}
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* {coverImagesRow.length > 0 && (
                <div
                  className="myRow"
                  style={{
                    width: "40px",
                    justifyContent: "space-between",
                    marginLeft: "8px",
                  }}
                >
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (imageRow.start > 0) {
                        const start = imageRow.start - 1;
                        const end = imageRow.end - 1;
                        setImageRow((prev) => ({
                          start: prev.start - 1,
                          end: prev.end - 1,
                        }));
                        const newImagesRow = coverImages.slice(start, end);
                        setCoverImagesRow(newImagesRow);
                      }
                    }}
                  >
                    {"<"}
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (imageRow.end < coverImages.length) {
                        const start = imageRow.start + 1;
                        const end = imageRow.end + 1;
                        setImageRow((prev) => ({
                          start: prev.start + 1,
                          end: prev.end + 1,
                        }));
                        const newImagesRow = coverImages.slice(start, end);
                        setCoverImagesRow(newImagesRow);
                      }
                    }}
                  >
                    {">"}
                  </p>
                </div>
              )} */}
            </Box>
          </Box>
        </Box>
      </LoadingOverlay>
    </>
  );
};

export default BookInfo;
