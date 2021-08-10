import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "./Card";

const mockProps = {
  title: "Good Girls",
  thumbnail:
    "https://static.tvmaze.com/uploads/images/original_untouched/297/744253.jpg",
  description: "Ended",
};

test("renders Card", async () => {
  const component = render(<Card {...mockProps} />);
  component.getByText("Good Girls");
  component.getByText("Ended");
});
