import axios from "axios";
import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const AudiotoMp3 = () => {
  // Mic-Recorder-To-MP3
  const recorder = useRef(null); //Recorder
  const audioPlayer = useRef(null); //Ref for the HTML Audio Tag
  const [blobURL, setBlobUrl] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [isRecording, setIsRecording] = useState(null);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    //Declares the recorder object and stores it inside of ref
    recorder.current = new MicRecorder({ bitRate: 128 });
  }, []);

  const startRecording = () => {
    // Check if recording isn't blocked by browser
    recorder.current.start().then(() => {
      setIsRecording(true);
    });
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
      })
      .catch((e) => console.log("error", e));
  };

  useEffect(() => {
    if (!listening && transcript.length > 0) {
      stopRecording();
    }
  }, [listening]);

  return (
    <div>
      <div>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button
          onClick={() => {
            SpeechRecognition.startListening();
            startRecording();
          }}
        >
          Start
        </button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
      <audio ref={audioPlayer} src={blobURL} controls="controls" />
    </div>
  );
};

export default AudiotoMp3;
