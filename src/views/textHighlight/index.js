import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function TextHighlight() {
  const { transcript, listening, resetTranscript, isMicrophoneAvailable } =
    useSpeechRecognition();
  const [totalText, setTotalText] = useState(
    `Nothing goes to waste in a forest. Nothing at all! Everything gets cleaned up. Absolutely everything! When leopards don’t finish their food, Who eats the rest? The vultures and the hyenas! And the hungry wild boar. GRUNT! GRUNT! When the vultures and the hyenas waste their food, Who gobbles it up? The flies and the maggots! And the hungry wild boar. GRUNT! GRUNT! When elephants poop in the forest, Who snacks on that? The dung beetles! And the hungry wild boar. GRUNT! GRUNT! When branches, leaves, and rain fall on the ground, Who feasts on it all? The termites and the fungi! And the hungry wild boar. GRUNT! GRUNT! When the air gets dirty with smoke, Who sucks it all in? The trees! Ummm, but not the hungry wild boar. GRUNT! GRUNT!`
  );
  const [spokenText, setSpokenText] = useState("");
  const [remainingText, setRemainingText] = useState(totalText);
  const [input, setInput] = useState(transcript);

  useEffect(() => {
    if (
      !listening &&
      remainingText.toLocaleLowerCase().startsWith(transcript)
    ) {
      let spoken = spokenText + remainingText.slice(0, `${transcript}`.length);
      let remaining = remainingText.slice(`${transcript}`.length);

      var indexInSuffix = remaining.slice(0).search(/[a-zA-Z0-9]/);
      spoken = spoken + remaining.slice(0, indexInSuffix);
      remaining = remaining.slice(indexInSuffix);

      setSpokenText(spoken);
      setRemainingText(remaining);
      console.log("first");
      resetTranscript();
    } else {
      setSpokenText(spokenText);
      setRemainingText(remainingText);
      console.log("second");
    }
  }, [listening]);

  const reset = () => {
    resetTranscript();
    setRemainingText(totalText);
    setSpokenText("");
  };

  console.log("spoken", spokenText);
  console.log("remaining", remainingText);

  return (
    <div>
      <div style={{ padding: 16 }}>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button
          style={{
            backgroundColor: "green",
            color: "#fff",
            margin: 8,
            padding: 6,
          }}
          onClick={SpeechRecognition.startListening}
        >
          Start
        </button>

        <button
          style={{
            backgroundColor: "green",
            color: "#fff",
            margin: 8,
            padding: 6,
          }}
          onClick={reset}
        >
          Reset
        </button>
        <br />
        <b>Search Text: {`${transcript}`}</b>
      </div>
      <div style={{ padding: 16 }}>
        <span style={{ backgroundColor: "yellow" }}>{spokenText}</span>
        <span>{remainingText}</span>
      </div>
    </div>
  );
}
