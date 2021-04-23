import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import CustomButton from "../components/CustomButton/CustomButton";

describe("is working", () => {
  it("should work", () => {
    expect(true).toBeTruthy();
  });

  it("should render custom button", () => {
    render(<CustomButton onClick={() => {}}>Test Button</CustomButton>);

    const linkElement = screen.queryAllByText("Test Button")[0];
    expect(linkElement).toBeInTheDocument();
  });
});

describe("render inside div", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <CustomButton onClick={() => {}}>Test Button</CustomButton>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("should render a button", () => {
    const testButton = container.querySelectorAll("button");
    expect(testButton).toHaveLength(1);
  });
});
