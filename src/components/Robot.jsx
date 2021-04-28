import Modal from "react-modal";
import React from "react";
import Button from "./Button";

const Robot = ({ robot }) => {
  Modal.setAppElement("#root");
  const imgUrl = `https://robohash.org/${robot.id}`;
  const [showModal, setShowModal] = React.useState(false);
  function openModal() {
    setShowModal(true);
  }

  return (
    <div className="card" id="card">
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(!showModal)}
        contentLabel="Example Modal"
      >
        <div className="robot-detail">
          <div className="col robot-detail-image">
            <img src={imgUrl} alt="User" />
          </div>
          <div className="col robot-detail-info">
            <h4>
              <span>Name:</span>
              {robot.name}
            </h4>
            <h4>
              <span>Userame:</span>
              {robot.username}
            </h4>
            <h4>
              <span>Email:</span>
              {robot.email}
            </h4>
            <h4>
              <span>Address:</span>
            </h4>
            <h4>
              <span>- City:</span> {robot.address.city}
              <span> - Street:</span> {robot.address.street}
              <span> - Suite:</span> {robot.address.suite}
              <br/>
               <span> - Lat:</span> {robot.address.geo.lat}
              <span> - Lng:</span> {robot.address.geo.lng}
            </h4>
             <h4>
              <span>Phone:</span>
              {robot.phone}
            </h4>
             <h4>
              <span>Website:</span>
              {robot.website}
            </h4>
             <h4>
              <span>Company:</span>
            </h4>
            <h4>
              <span>- Name:</span> {robot.company.name}
              <span> - Catch Phrase:</span> {robot.company.catchPhrase}
              <span> - bs:</span> {robot.company.bs}
            </h4>
            <Button
              color="crimson"
              text="Close"
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div>
      </Modal>
      <div>
        <img src={imgUrl} alt="User" className="profile-image" />
        <h3>{robot.name}</h3>
        <h4>{robot.email}</h4>
        <Button color="#0ccac4" text="See Details" onClick={openModal} />
      </div>
    </div>
  );
};

export default Robot;
