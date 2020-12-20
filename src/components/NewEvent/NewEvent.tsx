import React, { useState, useEffect } from "react";
import loading from "assets/loading.gif";
import { Button } from "components/common";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import moment from "moment";
import { getCategoryData, getCoordinatorData, submitData } from "actions/NewEvent";
import { About } from "./About/About";
import { Coordinator } from "./Coordinator/Coordinator";
import { When } from "./When/When";
import { DATE_TIME_FORMAT, requiredFields, notNegativeFields } from "./constants";

export function NewEvent() {
  const [isOnload, setIsOnload] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<any>("");
  const [isPaidEvent, setIsPaidEvent] = useState<boolean | string>(false);
  const [fee, setFee] = useState<number>(0);
  const [reward, setReward] = useState<number>(0);
  const [coordinator, setCoordinator] = useState<any>("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState<number>(0);
  const dispatch = useDispatch();
  const newEventState = useSelector(state => state.newEvent);

  useEffect(() => {
    setIsOnload(true);
    Promise.all([getCategoryData(dispatch), getCoordinatorData(dispatch)])
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsOnload(false);
      });
  }, [dispatch]);

  const checkIsDataValid = data => {
    const errors = {} as any;
    requiredFields.forEach(field => {
      if (!data[field]) {
        errors[field] = "Field is required";
      }
    });
    if (isPaidEvent) {
      if (!fee) {
        errors.fee = "Field is required";
      }
      if (fee < 0) {
        errors.fee = "Invalid data";
      }
    }
    notNegativeFields.forEach(field => {
      if (data[field] < 0) {
        errors[field] = "Invalid data";
      }
    });
    if (Object.keys(errors).length) {
      setValidationErrors(errors);
      return false;
    }
    return true;
  };

  const handleSubmitBtnClick = () => {
    const data = {
      title,
      description,
      category,
      isPaidEvent,
      fee,
      reward,
      coordinator: coordinator.id,
      date,
      duration,
      category_id: category.id
    };
    if (checkIsDataValid(data)) {
      data.date = moment(`${date}T${time || "00:00"}`)
        .utc()
        .format(DATE_TIME_FORMAT);
      data.coordinator = {
        id: coordinator.id,
        email: coordinator.email
      };
      data.category_id = category.id;
      delete data.category;
      submitData(data, dispatch);

      setTitle("");
      setDescription("");
      setCategory("");
      setIsPaidEvent(false);
      setFee(0);
      setReward(0);
      setCoordinator("");
      setDate("");
      setTime("");
      setValidationErrors({});
    }
  };

  return (
    <div className="newEvent">
      <div className="title">New event</div>
      {isOnload ? (
        <div className="onloadContainer">
          <img src={loading} alt="loading..." />
        </div>
      ) : (
        <div className="formContainer">
          <About
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            category={category}
            setCategory={setCategory}
            categoryList={newEventState.categoryData}
            payment={isPaidEvent}
            onPaymentChange={setIsPaidEvent}
            fee={fee}
            onFeeChange={setFee}
            reward={reward}
            onRewardChange={setReward}
            validationErrors={validationErrors}
          />
          <Coordinator
            coordinator={coordinator}
            setCoordinator={setCoordinator}
            coordinatorList={newEventState.coordinatorData}
            validationErrors={validationErrors}
          />
          <When
            duration={duration}
            onDurationChange={setDuration}
            date={date}
            onDateChange={setDate}
            time={time}
            onTimeChange={setTime}
            validationErrors={validationErrors}
          />
          <div className="buttonContainer">
            <Button primary onClick={handleSubmitBtnClick}>
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
