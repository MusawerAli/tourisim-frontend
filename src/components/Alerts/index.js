import React from "react";
import ReactBSAlert from "react-bootstrap-sweetalert";

const SweetAlert = ({
  type,
  title,
  setShowMessage,
  setUpdateAlert,
  updateAlert,
  setUpdateMessage,
  UpdateMessage,
}) => {
  const hideAlert = () => {
    if (updateAlert) {
      setUpdateAlert(false);
    } else if (UpdateMessage) {
      setUpdateMessage(false);
    } else {
      setShowMessage(false);
    }
  };
  return (
    <>
      {type === "success" ? (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title={title}
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        />
      ) : (
        <ReactBSAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title={title}
          // onConfirm={() => hideAlert()}
          // onCancel={() => hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        />
      )}
    </>
  );
};
export default SweetAlert;
