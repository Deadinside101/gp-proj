import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { toast } from "react-hot-toast";

const TIMER_DEFAULT_IN_SECONDS = 10;
const LEVEL_DEFAULT = 0;
const LEVELS_FROM_INDEX_ZERO = 4;
const TIMER_END = 0;
const emojiiName = ["happy", "sadness", "anger", "neutral", "surprise"];
const adjs = {
  happy: "Happy",
  sadness: "Sad",
  anger: "Angry",
  neutral: "neutral",
  surprise: "Surprised",
};
const emojiList = ["😀", "😢", "😡", "😐", "😮"];

const Classifier = () => {
  var [timer, setTimer] = useState(TIMER_DEFAULT_IN_SECONDS);
  var [level, setLevel] = useState(LEVEL_DEFAULT);
  const canvasRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();
  const [endGame, setEndGame] = useState(false);
  const [text, setText] = useState("");
  const [emojii, setEmojii] = useState({
    emoji: emojiList[LEVEL_DEFAULT],
    name: emojiiName[LEVEL_DEFAULT],
  });

  const resetGame = () => {
    setLevel(LEVEL_DEFAULT);
    setTimer(TIMER_DEFAULT_IN_SECONDS);
    setEmojii({
      emoji: emojiList[LEVEL_DEFAULT],
      name: emojiiName[LEVEL_DEFAULT],
    });
    setEndGame(false);
  };

  const updateLevel = () => {
    level !== LEVELS_FROM_INDEX_ZERO ? setLevel(++level) : setEndGame(true);
    setTimer(TIMER_DEFAULT_IN_SECONDS);
    setEmojii({ emoji: emojiList[level], name: emojiiName[level] });
  };

  useEffect(() => {
    async function getCameraStream() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }

    getCameraStream();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      captureImageFromCamera();
      if (imageRef.current) {
        const formData = new FormData();
        formData.append("image", imageRef.current);

        const response = await fetch("http://127.0.0.1:8000/detect-emotion", {
          method: "POST",
          body: formData,
        });
        if (response.status === 200) {
          var res = await response.text();
          res = res.slice(1, -1);
          setText(res);
          console.log(res);
          if (!endGame) {
            if (timer > TIMER_END) {
              if (text === emojiiName[level]) {
                updateLevel();
                toast.success("Well done", {
                  icon: "🌟🌟🌟",
                  style: {
                    fontSize: "1.5rem",
                    borderRadius: "10px",
                    background: "#1e2025",
                    color: "#fff",
                  },
                });
              } else {
                setTimer(--timer);
              }
            } else {
              updateLevel();
            }
          } else {
            resetGame();
          }
        } else setTimer(--timer);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [level, timer, text, endGame]);

  const playCameraStream = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const captureImageFromCamera = () => {
    const context = canvasRef.current.getContext("2d");
    const { videoWidth, videoHeight } = videoRef.current;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

    canvasRef.current.toBlob((blob) => {
      imageRef.current = blob;
    });
  };

  return (
    <>
      <header style={{ maxHeight: "19vh" }}>
        <h1
          style={{
            fontSize: "90px",
            color: "black",
            textAlign: "center",
          }}
        >
          {emojii.emoji} {adjs[emojii.name]}
        </h1>
      </header>
      <main style={{ display: "flex" }}>
        <video
          style={{
            borderRadius: "2rem",
            width: "clamp(250px, 103%, 95vh)",
            margin: "auto",
          }}
          ref={videoRef}
          onCanPlay={() => playCameraStream()}
          id="video"
        />
        <canvas ref={canvasRef} hidden></canvas>
      </main>
      <div style={{ width: "clamp(250px, 103%, 95vh)", margin: "0.5rem auto" }}>
        <ProgressBar now={100 - timer * 10} />
      </div>
    </>
  );
};

export default Classifier;
