import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);

  function hundlePlaceCircle(e) {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  }

  function handleUndo() {
    if (points.length === 0) return;
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  }

  function handleRedo() {
    if (popped.length === 0) return;
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  }

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="App" onClick={hundlePlaceCircle}>
        {points.map((point, index) => (
          <div
            className="point"
            key={index}
            style={{ left: point.x, top: point.y }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
