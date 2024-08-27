import React, { useState, useEffect } from "react";

const Loader = ({ loading }) => {
  const messages = ["नमस्ते", "Hello", "Hola", "Hallo", "Bonjour", "Ciao", "Olá"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [delay, setDelay] = useState(500); // Default delay for the first three messages
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade out animation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % messages.length;

        // Adjust the speed based on the index
        if (newIndex < 3) {
          setDelay(500); // Slow down for the first three messages (500ms)
        } else {
          setDelay(100); // Speed up for the rest (100ms)
        }

        return newIndex;
      });
    }, delay); // Use the dynamic delay

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [delay, messages.length]); // Only depend on `delay` and `messages.length`

  useEffect(() => {
    if (!loading) {
      setFadeOut(true);
    }
  }, [loading]);

  const styles = {
    container: {
      position: "fixed", // Ensure the loader covers the entire page
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0E100F", // Background color similar to your screenshot
      zIndex: 1000, // Ensure the loader stays on top of other content
      opacity: fadeOut ? 0 : 1,
      transform: fadeOut ? "translateY(-100%)" : "translateY(0)",
      transition: "opacity 1s ease-out, transform 1s ease-out" // Transition for fade out and slide up
    },
    textContainer: {
      display: "flex",
      alignItems: "center",
    },
    dot: {
      fontSize: "4rem", // Adjust the size of the dot to match the text
      marginRight: "0.5rem", // Space between the dot and the text
      color: "#FFFFE3", // Same color as the text
    },
    text: {
      color: "#FFFFE3", // Light grey text color
      fontSize: "4rem", // Font size
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <span style={styles.dot}>•</span>
        <span style={styles.text}>{messages[currentMessageIndex]}</span>
      </div>
    </div>
  );
};

export default Loader;
