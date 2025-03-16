import React, { useRef, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Link } from "react-router-dom";
// import DelayLink from "react-delay-link";


const getAuther = ()=>{
  if(localStorage.getItem("data"))
    {
      return JSON.parse(localStorage.getItem("data"));

    }
}

const Game1 = () => {
  const { unityProvider, sendMessage, requestFullscreen, unload, isLoaded } =
    useUnityContext({
          loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });
  const [user, setUser] = useState(null)
  useEffect(() =>{
    setUser(getAuther())
  }, [])
  const iframeRef = useRef();
  const unityFrameRef = useRef();

  var firstLog = false;
  useEffect( () => {
    
    if(user) 
    {const userId = user.id
    console.log(userId);
    sendMessage('prefsManager', 'SetUserId', userId);}
  }, [user])
  useEffect(() => {
    console.log("use effect content:");
    return () => {
      if (iframeRef !== null) {
        if (firstLog) {
          console.log("CleanUp function called");
          /*unload();*/
          window.document
            .getElementById("iframeContainer")
            .removeChild(iframeRef.current);
        }

        firstLog = true;
        if (firstLog) {
          console.log("first log activated");
        }
      }
    };
  }, []);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  function takeMeAway() {
    unload();
    window.location.replace("http://localhost:3000/");
    console.log("clickAction invoked");
  }

  return (
    <>
      <div id="iframeContainer" ref={iframeRef}>
        { user && <Unity
          unityProvider={unityProvider}
          style={{ width: 960, height: 540 }}
          ref={unityFrameRef}
          className="game"
        />}
      </div>
      <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button>;
      <button onClick={takeMeAway} >Close Game</button>;
    </>
  );
};

export default Game1;