import React, { useEffect, useRef, useState } from "react";
import styles from "./chat.module.css";
import Icon from "./Icon";
import { Card, Select } from "components/ui";
import { Bars, ThreeDots } from "react-loader-spinner";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { BsMic } from "react-icons/bs";
import StartWork1 from "./StartWork1";
import StarWork2 from "./StarWork2";
import Gift from "./Gift";
import Student from "./Student";
import ReadMore from "./ReadMore";
import axios from "axios";
import { chat_Type } from "constants/constants";
import MicRecorder from "mic-recorder-to-mp3";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { startQuestions } from "../../mock/data/questionChatData";

export default function QuestionChat() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [text, setText] = useState("");
  const [chatPage, setChatPage] = useState(1);
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const [recordingAnswer, setRecordingAnswer] = useState(0);
  const [loadingAnswer, setLoadingAnswer] = useState(false);
  const [chatData, setChatData] = useState({
    bookText: startQuestions[0].value,
    instructions: "",
    chatMessages: [],
  });
  const [userAnswer, setUserAnswer] = useState("");
  const [isQuestioningCompleted, setIsQuestioningCompleted] = useState(false);
  const [answerStartedAt, setAnswerStartedAt] = useState(null);

  const recorder = useRef(null); //Recorder
  const [blobURL, setBlobUrl] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [isRecording, setIsRecording] = useState(null);
  const [startQuestion, setStartQuestion] = useState();

  const { transcript, listening, resetTranscript, isMicrophoneAvailable } =
    useSpeechRecognition();

  const synth = window.speechSynthesis;
  const u = new SpeechSynthesisUtterance(text);
  let permission = {};

  useEffect(() => {
    setUtterance(u);
    if (text) {
      synth.speak(u);
      setIsSpeaking(true);
    }

    return () => {
      synth.cancel();
    };
  }, [text]);

  const getTextAnswer = async (recordedAnswer) => {
    if (Date.now() - answerStartedAt > 60000) {
      setRecordingAnswer(1);
      return alert("answer length cannot be longer than 60 seconds");
    }
    setAnswerStartedAt(null);
    setLoadingAnswer(true);
    try {
      setUserAnswer("");
      const data = new FormData();
      data.append("audioFile", recordedAnswer);

      const response = await axios.post(
        "https://comprehension-service-kywp6ez3tq-wl.a.run.app/speech-to-text",
        data,
        {
          headers: {
            authorization:
              "Bearer eyJ1c2VyIjogInJlYWRhYmlsaXR5LXR1dG9yIiwgInJvbGUiOiAic2VydmljZS1hY2NvdW50In0=",
          },
        }
      );
      if (response.status == 429 || response.status == 500) {
        getTextAnswer(recordedAnswer);
        return "";
      }

      const answer = response.data.text;
      setUserAnswer(answer);
      const newChat = chatData.chatMessages;
      newChat.push({
        role: "user",
        content: answer,
      });
      const updatedChat = {
        ...chatData,
        chatMessages: newChat,
      };
      setChatData(updatedChat);
      getQuestion(updatedChat);
    } catch (err) {
      console.log(err);
      if (
        err.response &&
        err.response?.data?.message ===
          "The audio file could not be processed, please try again!"
      ) {
        alert("Please record your answer once again");
        setRecordingAnswer(1);
      }
    }
    setLoadingAnswer(false);
  };

  useEffect(() => {
    recorder.current = new MicRecorder({ bitRate: 128 });
    getQuestion(chatData);
  }, [startQuestion]);

  const startRecording = async () => {
    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //   return;
    // }

    try {
      permission = await navigator.permissions.query({
        name: "microphone",
      });
      // await navigator.getUserMedia(
      //   { audio: true },
      //   () => {
      //     console.log("Permission Granted");
      //     permission.state = "granted";
      //   },
      //   () => {
      //     console.log("Permission Denied");
      //     permission.state = "denied";
      //   }
      // );
    } catch (err) {
      console.log(err);
    }
    if (permission.state === "denied") {
      setRecordingAnswer(1);
      return alert("microphone permission is required");
    }

    recorder.current.start().then(() => {
      setIsRecording(true);
    });
    SpeechRecognition.startListening();
    // if (permission.state === "granted") {
    setRecordingAnswer(2);
    setAnswerStartedAt(Date.now());
    // }
  };

  const stopRecording = () => {
    recorder.current
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, "audio.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });
        const newBlobUrl = URL.createObjectURL(blob);
        setBlobUrl(newBlobUrl);
        setIsRecording(false);
        setAudioFile(file);
        getTextAnswer(file);
      })
      .catch((e) => console.log("error", e));
    setRecordingAnswer(0);
    resetTranscript();
  };

  u.onend = (event) => {
    setIsSpeaking(false);
    if (isQuestioningCompleted) {
      setRecordingAnswer(0);
    } else {
      setTimeout(function () {
        startRecording();
      }, 10);
      setRecordingAnswer(1);
    }
  };

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    synth.speak(utterance);
    setIsSpeaking(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsSpeaking(false);
  };

  const getQuestion = async (oldChat) => {
    setLoadingQuestion(true);
    const data = oldChat;
    const response = await axios.post(
      "https://comprehension-service-kywp6ez3tq-wl.a.run.app/questions",
      data,
      {
        headers: {
          authorization:
            "Bearer eyJ1c2VyIjogInJlYWRhYmlsaXR5LXR1dG9yIiwgInJvbGUiOiAic2VydmljZS1hY2NvdW50In0=",
        },
      }
    );
    if (response.status == 429 || response.status == 500) {
      getQuestion(oldChat);
      return "";
    }

    const chats = response.data.chatMessages;
    setChatData({
      ...chatData,
      chatMessages: chats,
    });
    setLoadingQuestion(false);
    const lastQuestion = chats[chats.length - 1].content;
    if (lastQuestion.endsWith("-end-comprehension")) {
      setIsSpeaking(true);
      setIsQuestioningCompleted(true);
      setText(lastQuestion.replace("-end-comprehension", ""));
      setRecordingAnswer(0);
    } else {
      setText(chats[chats.length - 1].content);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      interval && clearInterval(interval);
      if (!isSpeaking && isQuestioningCompleted && chatPage < 6) {
        setChatPage(chatPage + 1);
      }
    }, 3000);
  }, [chatPage, isQuestioningCompleted, isSpeaking]);

  useEffect(() => {
    if (!listening && recorder.current.activeStream && recordingAnswer === 2) {
      stopRecording();
    }
    return () => {
      setIsSpeaking(false);
      if (recorder.current.activeStream) {
        stopRecording();
      }
      if (isSpeaking) {
        handleStop();
      }
    };
  }, [listening]);

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: "url(/img/question-chat/chat-background.jpg)",
      }}
    >
      {chatPage === 1 ? (
        <>
          <div className={styles.startQuestionWrapper}>
            <Select
              defaultValue={startQuestions[0]}
              options={startQuestions}
              value={startQuestion}
              onChange={(value) => {
                setStartQuestion(value);
                handleStop();
                setChatData({
                  bookText: value.value,
                  chatMessages: [],
                });
              }}
              isSearchable={false}
            />
          </div>
          <div
            className={styles.startQuestionWrapper}
            style={{ margin: "10px auto" }}
          >
            <label>Instructions</label>
            <input
              value={chatData.instructions}
              onChange={(e) => {
                setChatData({
                  ...chatData,
                  instructions: e.target.value,
                });
              }}
            />
          </div>

          {chatData.chatMessages.length === 0 && loadingQuestion && (
            <div className="myRow">
              <Icon
                customStyle={{ width: 64, height: 64 }}
                icon={"/img/avatars/speaker-icon.png"}
                alt={"assistant"}
              />
              <Card className={styles.questionLoader}>
                <ThreeDots
                  height="auto"
                  width="80"
                  radius="9"
                  color="#4fa94d"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </Card>
            </div>
          )}

          {chatData.chatMessages.length > 0 &&
            chatData.chatMessages.map((chat, index) => (
              <div key={index}>
                {chat.role === chat_Type.assistant && (
                  <div className="myRow">
                    <>
                      <Icon
                        customStyle={{ width: 64, height: 64 }}
                        icon={"/img/avatars/speaker-icon.png"}
                        badge={
                          index === chatData.chatMessages.length - 1 ? (
                            isSpeaking ? (
                              <GiSpeaker />
                            ) : (
                              <GiSpeakerOff />
                            )
                          ) : (
                            ""
                          )
                        }
                        onClick={(e) => {
                          if (index === chatData.chatMessages.length - 1) {
                            if (isSpeaking) {
                              handleStop();
                              if (isQuestioningCompleted) {
                                setRecordingAnswer(0);
                              } else {
                                setRecordingAnswer(1);
                              }
                            } else {
                              if (isQuestioningCompleted) {
                                handlePlay();
                                setRecordingAnswer(0);
                              }
                            }
                          }
                        }}
                        alt={"assistant"}
                      />
                      {loadingQuestion &&
                      index === chatData.chatMessages.length - 1 ? (
                        <Card className={styles.questionLoader}>
                          <ThreeDots
                            height="auto"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          />
                        </Card>
                      ) : (
                        <Card
                          bordered
                          style={{ width: "50%", height: "auto" }}
                          className={styles.questionLoader}
                        >
                          <p>
                            {chat.content.endsWith("-end-comprehension")
                              ? chat.content.replace("-end-comprehension", "")
                              : chat.content}
                          </p>
                        </Card>
                      )}
                    </>
                  </div>
                )}

                {chat.role === chat_Type.user && (
                  <div className="myRow" style={{ justifyContent: "flex-end" }}>
                    {loadingAnswer &&
                    index === chatData.chatMessages.length - 1 ? (
                      <Card className={styles.questionLoader}>
                        <ThreeDots
                          height="auto"
                          width="80"
                          radius="9"
                          color="#4fa94d"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName=""
                          visible={true}
                        />
                      </Card>
                    ) : (
                      <Card
                        bordered
                        style={{
                          width: "50%",
                          height: "auto",
                          borderRadius: "1rem 0px 1rem 1rem",
                          backgroundColor: "#2FC0B5",
                          color: "#fff",
                        }}
                        className={styles.questionLoader}
                      >
                        <p>{chat.content}</p>
                      </Card>
                    )}
                    <Icon
                      icon={"/img/avatars/user-icon.png"}
                      customStyle={{ width: 64, height: 64 }}
                      alt={"user"}
                    />
                  </div>
                )}

                {index === chatData.chatMessages.length - 1 ? (
                  chat.role === chat_Type.assistant && loadingAnswer ? (
                    <div
                      className="myRow"
                      style={{ justifyContent: "flex-end" }}
                    >
                      <Card className={styles.questionLoader}>
                        <ThreeDots
                          height="auto"
                          width="80"
                          radius="9"
                          color="#4fa94d"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName=""
                          visible={true}
                        />
                      </Card>
                      <Icon
                        icon={"/img/avatars/user-icon.png"}
                        customStyle={{ width: 64, height: 64 }}
                        alt={"user"}
                      />
                    </div>
                  ) : (
                    chat.role === chat_Type.user &&
                    loadingQuestion && (
                      <div className="myRow">
                        <Icon
                          customStyle={{ width: 64, height: 64 }}
                          icon={"/img/avatars/speaker-icon.png"}
                          alt={"assistant"}
                        />
                        <Card className={styles.questionLoader}>
                          <ThreeDots
                            height="auto"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          />
                        </Card>
                      </div>
                    )
                  )
                ) : (
                  ""
                )}
              </div>
            ))}

          <div style={{ flexGrow: 1 }}></div>

          {recordingAnswer === 0 ? (
            <div
              className={styles.micIcon}
              style={{
                marginBottom:
                  SpeechRecognition.browserSupportsSpeechRecognition()
                    ? "30px"
                    : "0px",
              }}
            >
              <BsMic />
            </div>
          ) : recordingAnswer === 1 ? (
            <div
              className={styles.micIcon}
              style={{
                marginBottom:
                  SpeechRecognition.browserSupportsSpeechRecognition()
                    ? "30px"
                    : "0px",
              }}
            >
              <BsMic
                style={{ backgroundColor: "#2fc0b5", cursor: "pointer" }}
                onClick={() => {
                  startRecording();
                  handleStop();
                }}
              />
            </div>
          ) : (
            <>
              <div
                className={`${styles.micIcon} ${styles.recordingIcon}`}
                style={{
                  width: "fit-content",
                  marginInline: "auto",
                  cursor: "pointer",
                  marginBottom:
                    SpeechRecognition.browserSupportsSpeechRecognition()
                      ? "30px"
                      : "0px",
                }}
                onClick={() => {
                  stopRecording();
                }}
              >
                <Bars
                  height="56"
                  width="56"
                  color="#fff"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  className={`${styles.micIcon} ${styles.recordingIcon}`}
                />
              </div>
              {!SpeechRecognition.browserSupportsSpeechRecognition() && (
                <p className={styles.micOffText}>
                  Please turn off mic when you finish answering
                </p>
              )}
            </>
          )}
        </>
      ) : chatPage === 2 ? (
        <>
          <StartWork1 />
        </>
      ) : chatPage === 3 ? (
        <>
          <StarWork2 />
        </>
      ) : chatPage === 4 ? (
        <>
          <Gift />
        </>
      ) : chatPage === 5 ? (
        <>
          <Student />
        </>
      ) : (
        <>
          <ReadMore />
        </>
      )}
    </div>
  );
}
