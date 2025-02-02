import React from "react";
import mascotImage from "../assets/dora.png";

const exercises = [
  {
    question: "1️⃣ Print 'Hello, World!' on the screen.",
    hint: "Use the print() function.",
  },
  {
    question: "2️⃣ Create a variable named 'age' and store your age inside it.",
    hint: "Use the assignment operator (=).",
  },
  {
    question: "3️⃣ Ask the user for their name and print a greeting message.",
    hint: "Use the input() function.",
  },
  {
    question: "4️⃣ Write an 'if' statement that prints 'You are an adult!' if age is greater than 18.",
    hint: "Use if condition with comparison operator >.",
  },
  {
    question: "5️⃣ Write a loop that prints 'Python is fun!' three times.",
    hint: "Use a for loop with range().",
  },
];

const Exercises = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}>
      <div style={{ 
        maxWidth: "800px", 
        margin: "0", 
        padding: "20px",
      }}>
        <h2 style={{ color: "White", fontSize: "2rem", textShadow: "2px 6px 4px #000" }}>📝 Exercises</h2>
        <div>
          {exercises.map((exercise, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "2px 3px 5px 2px rgba(0, 0, 0, 0.66)",
                marginBottom: "20px",
              }}
            >
              <p style={{ fontWeight: "bold", color: "#333" }}>{exercise.question}</p>
              <p style={{ fontStyle: "italic", color: "#666" }}>💡 Hint: {exercise.hint}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "20px", fontSize: "14px", fontSize: "1rem", color: "White", textShadow: "2px 6px 5px #000" }}>
          💡 Use our AI Chatbot for logic explanations, question breakdowns, and extra help!
        </p>
      </div>

      <img 
        src={mascotImage}
        alt="Dora and Friend" 
        style={{
          width: "700px",
          height: "auto",
          marginTop: "100px",
        }}
      />
    </div>
  );
};

export default Exercises;