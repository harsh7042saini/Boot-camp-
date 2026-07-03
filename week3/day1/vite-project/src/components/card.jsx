import Avatar from "./Avatar";

function Card({ user }) {
  return (
    <div
      style={{
        width: "320px",
        background: "#fff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        position: "relative",
      }}
    >
      <Avatar />

      {/* Badge */}
      <div
        style={{
          position: "absolute",
          top: "110px",
          right: "30px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#3b82f6",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        5+
      </div>

      <div style={{ marginTop: "25px" }}>
        <p>
          <strong>Name :</strong> {user.name}
        </p>

        <p>
          <strong>Age :</strong> {user.age}
        </p>

        <p>
          <strong>Hobby :</strong>{" "}
          {user.hobby.map((item, index) => (
            <span
              key={index}
              style={{
                background: "#e5e7eb",
                padding: "4px 10px",
                borderRadius: "10px",
                marginRight: "8px",
              }}
            >
              {item}
            </span>
          ))}
        </p>
      </div>

      <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          border: "none",
          borderRadius: "12px",
          background: "#111827",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Know More
      </button>
    </div>
  );
}

export default Card;