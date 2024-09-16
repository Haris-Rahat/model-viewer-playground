// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useRef } from "react";

function App() {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    if (modelViewer) {
      modelViewer.style.width = "100dvw";
      modelViewer.style.height = "100dvh";
      modelViewer.ar = true;
    }
  }, []);

  return (
    <model-viewer
      id="model-viewer"
      camera-controls
      alt={"A 3D model of a gun"}
      ref={modelViewerRef}
      src={"/battle_station.glb"}
      touch-action="pan-y"
    />
  );
}

export default App;
