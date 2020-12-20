import React from "react";
import { Button, Modal } from "components/common";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { CLOSE_MODAL } from "reducers/ResultModal";

export function ResultModal() {
  const resultModalState = useSelector(state => state.resultModal);
  const dispatch = useDispatch();

  const handleCloseBtnClick = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <Modal isOpen={resultModalState.isOpen}>
      <div className="resultModalBody">
        <h2 className="successTitle">Success</h2>
        <p>Event has been created</p>
        <Button onClick={handleCloseBtnClick}>OK</Button>
      </div>
    </Modal>
  );
}
