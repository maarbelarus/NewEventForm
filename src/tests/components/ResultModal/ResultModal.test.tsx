import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { ResultModal } from "components/ResultModal/ResultModal";
import { Provider } from "react-redux";
import { mainReducer } from "reducers";

describe("ResultModal component:", () => {
  it("renders component", () => {
    const mockStore = createStore(mainReducer);
    const { container } = render(
      <Provider store={mockStore}>
        <ResultModal />
      </Provider>
    );
    expect(container.querySelector(".resultModalBody")).not.toBeInTheDocument();
    mockStore.dispatch({ type: "SET_SUCCESS" });
    expect(container.querySelector(".resultModalBody")).toBeInTheDocument();
    fireEvent.click(screen.getByText("OK"));
    expect(container.querySelector(".resultModalBody")).not.toBeInTheDocument();
  });
});
