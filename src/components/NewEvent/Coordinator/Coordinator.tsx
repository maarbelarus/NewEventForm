import React from "react";
import clsx from "clsx";
import "./styles.scss";
import { Select, TextField } from "components/common";
import { ICoordinator } from "./Coordinator.types";

export function Coordinator({ coordinator, setCoordinator, coordinatorList, validationErrors }: ICoordinator) {
  return (
    <div className={clsx("coordinatorContainer", "formElementContainer")}>
      <h2 className="formElementTitle">Coordinator</h2>
      <Select
        value={coordinator}
        onChange={setCoordinator}
        optionList={coordinatorList}
        label="Responsible *"
        fullWidth
        className="inputItem"
        validationError={validationErrors.coordinator}
      />
      <TextField
        fullWidth
        className={clsx("inputItem", "readonly")}
        onChange={() => {
          return null;
        }}
        value={coordinator?.email}
        label="Email"
        readonly
      />
    </div>
  );
}
