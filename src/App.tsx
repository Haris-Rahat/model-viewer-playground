import "@google/model-viewer";
import { ModelViewerElement } from "@google/model-viewer";
import { useEffect, useRef } from "react";

function App() {
  const modelViewerRef = useRef<ModelViewerElement>(null);

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
      src={"/Raven-forExport-4.glb"}
      ar-modes="webxr scene-viewer quick-look"
      touch-action="pan-y"
    />
  );
}

export default App;
