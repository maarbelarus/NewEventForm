import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextField, Select } from "components/common";

describe("Common components:", () => {
  it("renders/checks TextField common component", () => {
    const onChangeFn = jest.fn();
    const { rerender, container } = render(
      <TextField onChange={onChangeFn} value="test" label="label" afterText="afterText" multiline />
    );
    expect(screen.getByText("label")).toBeInTheDocument();
    const input = screen.getByDisplayValue("test");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "new text" } });
    expect(onChangeFn).toHaveBeenCalled();

    expect(container.querySelector("textarea")).toBeInTheDocument();
    expect(container.querySelector("input")).not.toBeInTheDocument();
    expect(container.querySelector(".afterText")).toBeInTheDocument();
    expect(container.querySelector(".maxLength")).not.toBeInTheDocument();

    rerender(
      <TextField onChange={onChangeFn} value="test" label="label" validationError="error text" maxLength={15} />
    );
    expect(container.querySelector("input")).toBeInTheDocument();
    expect(container.querySelector("textarea")).not.toBeInTheDocument();
    expect(container.querySelector(".errorText")).toBeInTheDocument();
    expect(container.querySelector(".maxLength")).toBeInTheDocument();
    expect(screen.getByText("4/15")).toBeInTheDocument();
  });

  it("renders/checks Select common component", () => {
    const selectMockData = [
      { id: 1, label: "label 1" },
      { id: 2, label: "label 2" },
      { id: 3, label: "label 3" }
    ];
    const onChangeFn = jest.fn();
    const { container } = render(
      <Select onChange={onChangeFn} value={selectMockData[1]} label="title" optionList={selectMockData} />
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByDisplayValue("label 2")).toBeInTheDocument();
    expect(container.querySelector(".optionList")).not.toBeInTheDocument();

    fireEvent.click(screen.getByDisplayValue("label 2"));
    expect(container.querySelector(".optionList")).toBeInTheDocument();
    expect(container.querySelectorAll("button.optionItem")).toHaveLength(3);

    fireEvent.click(screen.getByText("label 1"));
    expect(container.querySelector(".optionList")).not.toBeInTheDocument();
    expect(onChangeFn).toBeCalledTimes(1);
  });
});
