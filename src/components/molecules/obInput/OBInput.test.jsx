import React from "react";
import { OBInput } from "./OBInput";
import { render, fireEvent } from "@testing-library/react";
import ReactDom from "react-dom";
import { shallow } from "enzyme";


const getWrapper = (props = {}) => {
  return render(<OBInput {...props} />);
};

describe("Test in OPinput component", () => {
  const onChange = jest.fn();
  const placeHolder = "Input";

  it("Should display the document", () => {
    const wrapper = getWrapper({ onChange, placeHolder });
    const { getByPlaceholderText } = wrapper;

    expect(getByPlaceholderText(placeHolder)).toBeInTheDocument();
  });
  it("Should change the value", () => {
    const wrapper = getWrapper({ onChange, placeHolder });
    const newValue = "Hola mundo";
    const { getByPlaceholderText } = wrapper;
    const input = getByPlaceholderText(placeHolder);
    fireEvent.change(input, { target: { value: newValue } });

    expect(input.value).toBe(newValue);
  });

  it("Should display the visible icon", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const withIcon = true;

    const props = { onChange, placeHolder,  withIcon };

    const wrapper = shallow(<OBInput {...props} />);
    const icon = wrapper.find('.OBInput-container-icon').getElement();
    expect(icon).toMatchSnapshot();
  });

  it("Should display the invisible icon", () => {
    const container = document.createElement("div");
    const onTouchVisible = jest.fn();
    document.body.appendChild(container);
    const visible = false;
    const withIcon = true;

    const props = { onChange, placeHolder, visible, withIcon , onTouchVisible};

    ReactDom.render(<OBInput {...props} />, container);
    const icons = container.querySelectorAll("#invisible-icon");

    expect(icons.length).toBe(1);
    document.body.removeChild(container);
    container.remove();
  });
});
