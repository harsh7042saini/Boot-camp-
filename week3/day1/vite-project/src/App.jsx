import React, { useState } from 'react';
import Counter from './components/Counter';
import User from "./components/User";

// Reusable Card Component with Inline Animations
function Card({ name, age, hobby, image }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "#fff",
        width: "280px",
        padding: "25px",
        borderRadius: "24px",
        textAlign: "center",
        boxShadow: isHovered 
          ? "0 20px 40px rgba(0,0,0,0.15)" 
          : "0 8px 24px rgba(0,0,0,0.06)",
        border: "1px solid #f0f0f0",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease",
      }}
    >
      {/* Image Container with Scale Effect */}
      <div 
        style={{ 
          width: "110px", 
          height: "110px", 
          margin: "0 auto 20px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid #3b82f6",
          padding: "3px",
          background: "#fff"
        }}
      >
        <img
          src={image}
          alt={`${name}'s profile`}
          style={{
            width: "100%",
            height: "100%",
            objectCover: "cover",
            borderRadius: "50%",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Profile Details */}
      <h3 style={{ margin: "5px 0", fontSize: "20px", color: "#1f2937", fontFamily: "sans-serif" }}>
        {name}
      </h3>
      <p style={{ margin: "5px 0", color: "#6b7280", fontSize: "14px", fontFamily: "sans-serif" }}>
        <strong>Age:</strong> {age}
      </p>
      <p style={{ margin: "5px 0", color: "#6b7280", fontSize: "14px", fontFamily: "sans-serif" }}>
        <strong>Hobby:</strong> {hobby}
      </p>

      {/* Animated Action Button */}
      <button
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          border: "none",
          borderRadius: "12px",
          background: isBtnHovered ? "#2563eb" : "#111827",
          color: "#fff",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "600",
          boxShadow: isBtnHovered ? "0 4px 12px rgba(37, 99, 235, 0.3)" : "none",
          transition: "all 0.2s ease-in-out",
        }}
      >
        Know More
      </button>
    </div>
  );
}

// Main App Container displaying both cards side-by-side
function App() {
  return (
    <div 
      style={{ 
        minHeight: "100vh", 
        background: "#f9fafb", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        gap: "40px",
        flexWrap: "wrap",
        padding: "40px"
      }}
    >
      <Card 
        name="Lionel Messi" 
        age={39} 
        hobby="Football" 
        image="https://upload.wikimedia.org/wikipedia/commons/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg" 
      />

      <Card 
        name="Ultron" 
        age={11} 
        hobby="Coding & AI" 
        image="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13075519/UltonPrime_face_cheek2.0.0.1430846227.jpg?quality=90&strip=all&crop=16.675,0,66.65,100" 
      />

      <Counter />
    </div>
  );
}

export default App;