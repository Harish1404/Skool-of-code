import React from "react";
import mascotImage from "../assets/shinchan.png"; // Adjust the path if needed

const lessons = [
  {
    title: "1️⃣ Print Statements",
    description:
      "The print() function helps us display text on the screen. It's like making the computer talk!",
    example: `print("Hello, world!")`,
    output: `Hello, world!`,
  },
  {
    title: "2️⃣ Variables",
    description:
      "Variables store information, like a box holding a toy. We give them a name and put a value inside!",
    example: `name = "Alice"
print(name)`,
    output: `Alice`,
  },
  {
    title: "3️⃣ User Input",
    description:
      "The input() function lets us ask users for information, like their name or age.",
    example: `age = input("How old are you? ")
print("You are", age, "years old!")`,
    output: `How old are you? 10
You are 10 years old!`,
  },
  {
    title: "4️⃣ If Statements",
    description:
      "An 'if' statement checks conditions, like asking if it’s raining before taking an umbrella!",
    example: `age = 10
if age > 5:
    print("You're a big kid!")`,
    output: `You're a big kid!`,
  },
  {
    title: "5️⃣ Loops",
    description:
      "Loops repeat actions multiple times, just like counting or singing a song over and over!",
    example: `for i in range(3):
    print("Python is fun!")`,
    output: `Python is fun!
Python is fun!
Python is fun!`,
  },
];

const Lesson = () => {
  return (
    <div style={{ margin: "0", padding: "20px", textShadow: "2px 6px 4px #000" }}>
      <h2 style={{ color: "white", fontSize: "2rem" }}>📖 Lessons</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
        }}
      >
        {lessons.map((lesson, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url('https://img.freepik.com/free-vector/blank-sign-template-with-kids-grass_1308-33356.jpg?ga=GA1.1.1134196909.1721028436&semt=ais_hybrid')`, // Cartoon background
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "15px",
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
              color: "white",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "rgb(237, 184, 115)", fontSize: "1.2rem", textShadow: "2px 2px 4px #000" }}>{lesson.title}</h3>
            <p style={{ color: "#fff", fontWeight: "bold", textShadow: "2px 2px 4px #000" }}>{lesson.description}</p>
            
            {/* Python Code Block */}
            <div
              style={{
                background: "#1e1e1e",
                color: "limegreen",
                padding: "10px",
                borderRadius: "5px",
                fontFamily: "monospace",
                textAlign: "left",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
              }}
            >
              <pre>{lesson.example}</pre>
            </div>

            <p style={{ marginTop: "10px", color: "#FFD700", fontSize: "1.2rem", fontWeight: "bold", textShadow: "2px 2px 4px #000" }}>
              Output:
            </p>

            {/* Output Block */}
            <div
              style={{
                background: "#000",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                fontFamily: "monospace",
                textAlign: "left",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
              }}
            >
              <pre>{lesson.output}</pre>
            </div>
          </div>
        ))}

        {/* Add PNG to Fill Empty Space */}
        <div
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          <img
            src={mascotImage}
            alt="Mascot"
            style={{
              maxWidth: "250px",
              margin: "0 auto",
              borderRadius: "15px",
            }}
          />
          <p style={{ marginTop: "10px", color: "white", fontSize: "1.2rem" }}>
            Hi Fi 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
