import React from "react";
import { TextField, Select, RadioGroup } from "components/common";
import clsx from "clsx";
import "./styles.scss";
import { IAbout } from "./About.types";
import { MAX_DESCRIPTION_LENGTH, paidRadioList } from "./constants";

export function About({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  categoryList,
  payment,
  onPaymentChange,
  fee,
  onFeeChange,
  reward,
  onRewardChange,
  validationErrors
}: IAbout) {
  return (
    <div className={clsx("aboutContainer", "formElementContainer")}>
      <h2 className="formElementTitle">About</h2>
      <TextField
        className="inputItem"
        fullWidth
        label="Title *"
        onChange={e => {
          setTitle(e.target.value as string);
        }}
        value={title}
        validationError={validationErrors.title}
      />
      <TextField
        className="inputItem"
        fullWidth
        label="Description *"
        maxLength={MAX_DESCRIPTION_LENGTH}
        multiline
        onChange={e => {
          setDescription(e.target.value as string);
        }}
        value={description}
        validationError={validationErrors.description}
      />
      <Select
        value={category}
        onChange={setCategory}
        optionList={categoryList}
        label="Category"
        fullWidth
        className="inputItem"
        validationError={validationErrors.category}
      />
      <div className="paymentContainer">
        <RadioGroup
          name="payment"
          value={payment}
          onChange={onPaymentChange}
          optionList={paidRadioList}
          label="Payment"
          className="inputItem"
          validationError={validationErrors.payment}
        />
        {payment && (
          <TextField
            className="feeContainer"
            value={fee}
            onChange={e => onFeeChange(e.target.value as number)}
            type="number"
            label="Fee"
            validationError={validationErrors.fee}
          />
        )}
      </div>
      <TextField
        className="inputItem"
        value={reward}
        onChange={e => onRewardChange(e.target.value as number)}
        type="number"
        label="Reward"
        afterText="reward points for attendance"
        validationError={validationErrors.reward}
      />
    </div>
  );
}
