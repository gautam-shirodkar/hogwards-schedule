import { render } from "@testing-library/react";
import Character from "../Character";

describe("Character", () => {
  test("it should render character component", () => {
    const { getByText } = render(
      <Character img="image.jpg" name="character_name" />
    );
    expect(getByText("character_name")).toBeInTheDocument();
  });
});
