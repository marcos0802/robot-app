import { useState } from "react";
const Robot = ({ robot }) => {
  const [showDetail, setShowDetail] = useState(false);
  const imgUrl = `https://robohash.org/${robot.id}`;
  return (
    <div className="card" onClick={() => setShowDetail(!showDetail)}>
      {showDetail ? (
        <div className="robot-detail">
          <h3>Robot Detail</h3>
          <div></div>
          <h4>
            <span>Name</span>:{robot.name}
          </h4>
          <h4>
            <span>Username</span>: {robot.username}
          </h4>
          <h4>
            <span>Email</span>: {robot.email}
          </h4>
          <h4>Address</h4>
          <h5 style={{ fontSize: "11px" }}>
            {" "}
            <span style={{ fontStyle: "italic", color: "#111" }}>
              {" "}
              City:{" "}
            </span>{" "}
            {robot.address.city}
          </h5>
          <h5 style={{ fontSize: "11px" }}>
            {" "}
            <span style={{ fontStyle: "italic", color: "#111" }}>
              {" "}
              Street:{" "}
            </span>
            {robot.address.street}{" "}
          </h5>
          <h5 style={{ fontSize: "11px" }}>
            {" "}
            <span style={{ fontStyle: "italic", color: "#111" }}> Suite: </span>
            {robot.address.suite}{" "}
          </h5>
          <h4>
            <span>Phone</span>: {robot.phone}
          </h4>
          <h4>
            <span>Website</span>: {robot.website}
          </h4>
          <h4>Company</h4>
          <h5 style={{ fontSize: "11px" }}>
            {" "}
            <span style={{ fontStyle: "italic", color: "#111" }}>
              Name:{" "}
            </span>{" "}
            {robot.company.name}
          </h5>
          <h5 style={{ fontSize: "11px" }}>
            <span style={{ fontStyle: "italic", color: "#111" }}>
              Catch Phrase:{" "}
            </span>
            {robot.company.catchPhrase}{" "}
          </h5>
          <h5 style={{ fontSize: "11px" }}>
            {" "}
            <span style={{ fontStyle: "italic", color: "#111" }}>Bs: </span>
            {robot.company.bs}{" "}
          </h5>
          <span
            style={{
              textWeight: "bold",
              fontSize: "10px",
              color: "darkblue",
              textAlign: "center",
            }}
          ><br/>
            Click to see Profile
          </span>
        </div>
      ) : (
        <>
          {" "}
          <img src={imgUrl} alt="User" />
          <h3>{robot.name}</h3>
          <h4>{robot.email}</h4>
          <span
            style={{ textWeight: "bold", fontSize: "10px", color: "darkblue" }}
          >
            Click to see Details
          </span>
        </>
      )}
    </div>
  );
};

export default Robot;
