import React, { useState } from "react";
import BookInfo from "./BookInfo";
import Page1 from "./Page1";
import Pages from "./Pages";
import Comprehension from "./Comprehension";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import styles from "./kycForm.module.css";
import { Button } from "@mui/material";
import BaseService from "services/BaseService";
import { Alert, Notification, toast } from "components/ui";
import useTimeOutMessage from "utils/hooks/useTimeOutMessage";

function SaveBook() {
  const [coverImages, setCoverImages] = useState([]);
  const [aiFormData, setAiFormData] = useState({});
  const [newPreview, setNewPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [exportableJSON, setExportableJSON] = useState({});
  const [editingImage, setEditingImage] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [newBookImage, setNewBookImage] = useState("");
  const [newPageImage, setNewPageImage] = useState("");
  const [message, setMessage] = useTimeOutMessage();
  const [exportingJson, setExportingJson] = useState(false);
  let [apiCallNumber, setApiCallNumber] = useState(0);

  const generateImage = async (
    coverImageData,
    editing = null,
    multipleGenerate = null
  ) => {
    setLoading(true);
    setEditingImage(editing);
    // setNewBookImage([]);
    const bookReqData = {
      imageCount: coverImageData.imageCount,
      imageFormat: "url",
      imageSize: "512x512",
      text: coverImageData.text,
    };
    const resp = await axios.post(
      "https://predev-api.readabilitytutor.com/AI/v1/GenerateImage",
      bookReqData
    );

    if (editing === 1) {
      //page
      setNewPageImage(resp.data.Data.Urls[0]);
    } else if (editing === 2) {
      //book single image from bookinfo regenerate image
      setNewImage(resp.data.Data.Urls);
      setNewBookImage(resp.data.Data.Urls);
      setCoverImages(resp.data.Data.Urls);
    } else {
      setNewBookImage(resp.data.Data.Urls);
      setCoverImages(resp.data.Data.Urls);
    }

    if (multipleGenerate > 0 && resp?.data?.Data && resp?.data?.Data?.Urls) {
      setNewPageImage(resp.data.Data.Urls[0]);
    }

    setLoading(false);
    return resp.data.Data.Urls[0];
    // setEditingImage(false);
  };

  const NoApiJson = (data) => {
    let formResp = JSON.parse(data);
    formResp = {
      ...formResp,
      LexileLevelMin: formResp.LexileLevelMin.replace(/[^\d.-]/g, ""),
      LexileLevelMax: formResp.LexileLevelMax.replace(/[^\d.-]/g, ""),
    };
    setAiFormData(formResp);

    if (!!formResp && !!formResp.Story) {
    } else {
      alert("Please check your Json Again as something is missing");
    }
  };

  const getFormData = async (formData, coverImageData, myImage) => {
    try {
      setLoading(true);
      const formReqData = formData;
      const formResp = await axios.post(
        "https://predev-api.readabilitytutor.com/AI/v1/ChatCompletions",
        formReqData
      );

      const data = formResp.data.Data;
      console.log("formResp", formResp);

      if ((!data || formResp.status === 500) && apiCallNumber < 4) {
        setApiCallNumber(apiCallNumber + 1);
        toast.push(
          <Notification title={"Retrying"} type="warning">
            Request is still in progress, please wait
          </Notification>
        );
        return getFormData(formData, coverImageData, myImage);
      } else if ((!data || formResp.status === 500) && apiCallNumber >= 4) {
        toast.push(
          <Notification title={"Error"} type="error">
            Error: Some issue on API side, Please try again
          </Notification>
        );
        setMessage(
          "Error: Some issue on API side to generate book data, please try again"
        );
        alert(
          "Some issue on API side to generate book data, please refresh the page and try again"
        );
      }
      const response = data
        ? {
            ...data,
            LexileLevelMin: data.LexileLevelMin.replace(/[^\d.-]/g, ""),
            LexileLevelMax: data.LexileLevelMax.replace(/[^\d.-]/g, ""),
          }
        : data;
      // setAiFormData(response);
      setLoading(false);
      let body = "";
      let arr = [];
      //    console.log(coverImageData);
      formResp.data.Data.Story &&
        formResp.data.Data.Story.map((item) => {
          body += item.PageText;
          let value = {
            ...item,
            illustration:
              coverImageData !== undefined && coverImageData.illustration
                ? myImage
                : "",
          };
          arr.push(value);
        });
      setAiFormData({
        ...response,
        Story: arr,
      });

      getNewPreview(body);
      setApiCallNumber(0);
    } catch (err) {
      console.log(err);
    }
  };

  const getbookData = async (coverImageData, formData) => {
    setLoading(true);
    setNewBookImage([]);
    setNewImage([]);
    setCoverImages([]);
    //setExportingJson(false);
    //setAiFormData({});
    //setNewPreview("");
    //setExportableJSON({});
    setEditingImage(null);
    setNewPageImage("");

    try {
      let myImage = "";
      if (coverImageData !== undefined && coverImageData.getCoverImage) {
        myImage = await generateImage(coverImageData, null, 3);
      }
      await getFormData(formData, coverImageData, myImage);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const getNewPreview = (preview) => {
    setNewPreview(preview);
  };

  const setImagesIndex = (image) => {
    setNewImage(image);
  };

  const exportJson = async () => {
    setExportingJson(true);
    const {
      ARScore,
      Genre,
      Grade,
      LexileLevelMax,
      LexileLevelMin,
      SightWords,
      Tags,
      Title,
      Story,
    } = aiFormData;

    let bookURL = "";

    if (!!newImage && Array.isArray(newImage) && newImage.length > 0) {
      bookURL = newImage[0];
    } else if (!!newImage && newImage !== "") {
      bookURL = newImage;
    } else if (
      !!coverImages &&
      Array.isArray(coverImages) &&
      coverImages.length > 0
    ) {
      bookURL = coverImages[0];
    } else if (!!coverImages && coverImages !== "") {
      bookURL = coverImages;
    }

    let fileName = bookURL;

    if (!!bookURL && bookURL !== "" && !Array.isArray(bookURL)) {
      fileName = bookURL?.split("/") || "";
      fileName = fileName?.pop();
    } else if (
      !!bookURL &&
      Array.isArray(bookURL) &&
      bookURL.length > 0 &&
      bookURL[0] !== ""
    ) {
      fileName = bookURL[0]?.split("/") || "";
      fileName = fileName?.pop();
    }
    //    console.log(fileName);

    let docList = [
      {
        fileName: fileName,
        FilePath: bookURL,
        DocumentTypeId: 2,
        DocumentPurposeTypeId: 1,
        DocumentForId: 2,
      },
    ];
    if (
      coverImages === null ||
      coverImages === undefined ||
      coverImages.length < 1
    ) {
      docList = null;
    }
    let ExtraList = [];
    let Extra2List = [];
    //    console.log(Story);
    Story.length > 0 &&
      Story.forEach((story, index) => {
        const title = `Chapter ${index + 1} : ${
          Array.isArray(Title) ? Title[0] : Title
        }`;

        let storyDocList = null;
        let storyBookURL = "";
        let storyFileName = "";
        if (!!story.illustration && story.illustration.length > 0) {
          storyBookURL = story.illustration[0];
        } else if (!!story.illustration && story.illustration !== "") {
          storyBookURL = story.illustration;
        }

        if (!!storyBookURL && storyBookURL !== "") {
          storyBookURL = storyBookURL?.split("/") || "";
          storyBookURL = storyBookURL?.pop();
          storyFileName = storyBookURL;
          storyDocList = [
            {
              fileName: storyFileName,
              FilePath: story.illustration,
              DocumentTypeId: 2,
              DocumentPurposeTypeId: 1,
              DocumentForId: 2,
            },
          ];
        }

        ExtraList.push({
          Title: title,
          PageNumber: index + 1,
          Text: `${story.PageText}\r\n`,
          IsActive: true,
          DocumentList: storyDocList,
        });

        story.Questions.forEach((qes) => {
          let Question = qes?.Question;
          let Answer = qes.Answer;
          Extra2List.push({
            BookChapterQuestionId: "",
            Title: title,
            Question: Question,
            Answer: Answer,
            Scope: Question,
            ScopeStartIndex: "0",
            ScopeEndIndex: "0",
            IsInline: true,
            IsEndOfBook: true,
            IsActive: true,
            IsAICheck: "true",
            PassageCode: "901447004ad30749ee14d2f42d759811",
            ExtraJSON: "true",
          });
        });
      });

    //    console.log(docList);
    const json = {
      Title: Array.isArray(Title) ? Title.join(", ") : Title,
      Tags: Array.isArray(Tags) ? Tags.join(", ") : Tags,
      Genre: Array.isArray(Genre) ? Genre.join(", ") : Genre,
      Grade: Array.isArray(Grade) ? Grade.toString() : Grade,
      SightWords: Array.isArray(Title) ? SightWords.join(", ") : SightWords,
      ARScore: ARScore.toString(),
      LexileLevelMin: LexileLevelMin,
      LexileLevelMax: LexileLevelMax,
      BookId: "",
      Credits: "Capstone",
      OptionalWords: "Manushkin,Fran",
      LexileLevelStart: LexileLevelMin,
      LexileLevelEnd: LexileLevelMax,
      IsActive: false,
      DocumentList: docList,
      ExtraJSON: "",
      BookChapterList: ExtraList,
      BookChapterQuestionAndAnswerList: Extra2List,
      BookURL: coverImages[0],
    };
    setExportableJSON(json);
    setLoading(true);
    try {
      const resp = await BaseService({
        url: "/Book/ePubImportSave",
        method: "POST",
        data: JSON.stringify(json),
        headers: {
          "Content-Type": "application/json",
          UserToken:
            "DGj+TUGtk9GERZJMnE0yy7NKGyMtAnntAliL/ysncrTMy7AesbCuRm47xGRboG/yny1rw6YPkEpheA/xfrF4sKyLJvUjLObOXLkrHFqveuwzxq14iP/0daHWGrPT0bR5siVqO7SKbTDsCansW5+6kSSkQfKJ+V7VCLlyJMeKXWJgMdy4hhUad4Y6oqgQnXZVJJF3lZQrMwLWrgVQpFZvRNVygJ9q03ALLVnw71Pwrac=",
          AcitivityIds: "1",
          FingerPrintKey: "readability",
        },
      });
      if (resp?.data?.Data?.BookId > 0) {
        toast.push(
          <Notification title={"Book Exported"} type="success">
            Book Data Saved successfully
          </Notification>
        );
        setMessage("Book Data Saved successfully");
      } else {
        toast.push(
          <Notification title={"Error"} type="error">
            Error: Some issue on API side
          </Notification>
        );
        setMessage("Error: Some issue on API side");
      }
    } catch (err) {
      toast.push(
        <Notification title={"Error"} type="error">
          Error: Some issue on API side
        </Notification>
      );
      setMessage("Error: Some issue on API side");
    }

    setExportingJson(false);
    setLoading(false);
    setCoverImages([]);
    setAiFormData({});
    setNewPreview("");
    setExportableJSON({});
    setEditingImage(null);
    setNewImage("");
    setNewBookImage("");
    setNewPageImage("");
    setExportingJson(false);
    setApiCallNumber(0);
  };

  const updateExportableJson = (newData) => {
    console.log("newdata", newData);
    if (newData.Story.illustration) {
      delete newData.Story["illustration"];
    }
    setAiFormData({
      ...newData,
    });
  };

  return (
    <div style={{ marginRight: "2%" }}>
      <LoadingOverlay
        active={loading}
        spinner
        className={loading ? styles.loader : ""}
      >
        <>
          <Page1
            getbookData={getbookData}
            newPreview={newPreview}
            NoApiJson={NoApiJson}
          />
          {aiFormData.Story && (
            <>
              <BookInfo
                coverImages={newBookImage}
                aiFormData={aiFormData}
                setAiFormData={setAiFormData}
                getNewPreview={getNewPreview}
                generateImage={generateImage}
                loading={loading}
                setImagesIndex={setImagesIndex}
                setCoverImages={setCoverImages}
                updateExportableJson={updateExportableJson}
              />
              <Pages
                pageData={aiFormData}
                illustration={newPageImage}
                generateImage={generateImage}
                loading={loading}
                updateExportableJson={updateExportableJson}
              />
              <Comprehension
                pageData={aiFormData}
                updateExportableJson={updateExportableJson}
              />
              <Button
                className={styles.exportBtn}
                disabled={aiFormData?.Title || !exportingJson ? false : true}
                onClick={exportJson}
              >
                Export JSON
              </Button>
            </>
          )}
        </>
      </LoadingOverlay>
      {message && (
        <Alert className="mb-4" showIcon>
          {message}
        </Alert>
      )}
    </div>
  );
}

export default SaveBook;
