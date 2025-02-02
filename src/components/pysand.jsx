import React, { useState, useEffect } from "react";
import mascotImage from "../assets/bheem.png";

const PythonSandbox = () => {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Loading Pyodide...");

  useEffect(() => {
    const loadPyodide = async () => {
      try {
        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
        });
        await pyodideInstance.runPython(`
          import sys
          from io import StringIO
          sys.stdout = StringIO()
        `);
        setPyodide(pyodideInstance);
        setOutput("Pyodide Loaded. Ready to execute!");
      } catch (error) {
        console.error("Failed to load Pyodide:", error);
        setOutput("Error: Pyodide failed to load.");
      }
    };
    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput('Pyodide is still loading...');
      return;
    }

    try {
      setOutput('');

      const outputBuffer = [];
      pyodide.globals.set('print', (value) => {
        outputBuffer.push(value);
      });

      await pyodide.runPythonAsync(code);

      setOutput(outputBuffer.join('\n'));
      console.log(outputBuffer.join('\n'));

    } catch (error) {
      setOutput('Error executing Python code: ' + error.message);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.header}>🖥️ Practice Yourself</h2>

        <div style={styles.editorOutputContainer}>
          <textarea
            style={styles.textarea}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your Python code here..."
          />

          <img
              src={mascotImage}
              alt="Practice Illustration"
              style={styles.image}
          />

          <div style={styles.output}>
            <h3 style={{ color: "white", margin: "0px" }}>Output:</h3>
            <pre>{output}</pre>
          </div>
        </div>
        <button style={styles.button} onClick={runCode}>Run Code</button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#282c34",
  },
  container: {
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#1e1e1e",
  },
  header: {
    color: "white",
    fontSize: "2rem",
    margin: "10px",
    textShadow: "2px 6px 4px #000",
  },
  editorOutputContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  textarea: {
    flex: 1,
    height: "250px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#121212",
    color: "#fff",
  },
  image: {
    flex: "0 0 200px",
    height: "200px",
    objectFit: "contain",
    borderRadius: "10px",
    maxwidth: "200px",
  },
  output: {
    flex: 1,
    height: "250px",
    padding: "10px",
    backgroundColor: "black",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflowY: "auto",
    color: "white",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    fontweight: "bold",
    fontSize: "1rem",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    width: "15%",
  },
};

export default PythonSandbox;
