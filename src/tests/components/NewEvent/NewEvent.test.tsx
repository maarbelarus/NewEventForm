import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { mainReducer } from "reducers";
import { NewEvent } from "components/NewEvent/NewEvent";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("NewEvent component:", () => {
  const mock = new MockAdapter(axios);
  const categoriesMock = [
    {
      id: 0,
      name: "Cycling"
    },
    {
      id: 1,
      name: "Hiking"
    }
  ];
  const coordinatorsMock = [
    {
      id: 0,
      name: "Daniel",
      lastname: "Mitchell",
      email: "daniel.mitchell@hussa.rs"
    },
    {
      id: 1,
      name: "Albert",
      lastname: "Alexander",
      email: "albert.alexander@hussa.rs"
    }
  ];
  mock.onGet("http://www.mocky.io/v2/5bcdd3942f00002c00c855ba").reply(200, categoriesMock);
  mock.onGet("http://www.mocky.io/v2/5bcdd7992f00006300c855d5").reply(200, coordinatorsMock);

  let container;

  beforeAll(() => {
    const mockStore = createStore(mainReducer);

    container = render(
      <Provider store={mockStore}>
        <NewEvent />
      </Provider>
    ).container;
    waitFor(() => {
      expect(screen.getByTitle("Title *")).toBeInTheDocument();
    });
  });

  it("renders component and main data logic", () => {
    expect(container.querySelector(".newEvent")).toBeInTheDocument();
    expect(screen.getByLabelText("Paid event")).toBeInTheDocument();
    expect(container.querySelector(".feeContainer")).not.toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Paid event"));
    expect(container.querySelector(".feeContainer")).toBeInTheDocument();

    fireEvent.click(container.querySelector(".coordinatorContainer input"));
    expect(container.querySelector(".optionList")).toBeInTheDocument();
    fireEvent.click(container.querySelectorAll("button.optionItem")[0]);
    expect(screen.getByDisplayValue("daniel.mitchell@hussa.rs")).toBeInTheDocument();

    fireEvent.click(container.querySelector(".buttonCommon.primary"));
    expect(container.querySelector(".errorText")).toBeInTheDocument();
  });
});
