import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Trigger the scale animation every time the count changes
  useEffect(() => {
    if (count !== 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 200); // matches transition time
      return () => clearTimeout(timer);
    }
  }, [count]);

  // --- Inline Styles ---
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      width: "300px",
      margin: "50px auto",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#333",
      margin: "10px 0 20px 0",
      transition: "transform 0.15s ease-in-out",
      transform: animate ? "scale(1.2)" : "scale(1)",
      display: "inline-block",
    },
    buttonContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
    btnBase: {
      padding: "10px 20px",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      {/* Dynamic style tag injected just for the disabled/hover states smoothly */}
      <style>{`
        .btn-add { background-color: #4CAF50; }
        .btn-add:hover { background-color: #45a049; transform: translateY(-2px); }
        
        .btn-reduce { background-color: #f44336; }
        .btn-reduce:hover:not(:disabled) { background-color: #da190b; transform: translateY(-2px); }
        .btn-reduce:disabled { background-color: #e0e0e0; color: #a6a6a6; cursor: not-allowed; }
        
        .btn-reset { background-color: #2196F3; }
        .btn-reset:hover { background-color: #0b7dda; transform: translateY(-2px); }
        
        .btn-base:active { transform: translateY(0px) !important; }
      `}</style>

      {/* The number itself scales up/down when it changes */}
      <h1 style={styles.heading}>
        Count : <span style={{ color: count > 0 ? "#4CAF50" : count === 0 ? "#333" : "#f44336" }}>{count}</span>
      </h1>

      <div style={styles.buttonContainer}>
        <button 
          className="btn-base btn-add" 
          style={styles.btnBase} 
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
        
        <button 
          className="btn-base btn-reduce" 
          style={styles.btnBase} 
          disabled={count < 1} 
          onClick={() => setCount(count - 1)}
        >
          Reduce
        </button>
        
        <button 
          className="btn-base btn-reset" 
          style={styles.btnBase} 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;