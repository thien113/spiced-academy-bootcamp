import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const buttonPlay = screen.getByRole("link", { name: /play/i });
  expect(buttonPlay).toBeInTheDocument();

  const buttonHistory = screen.getByRole("link", { name: /history/i });
  expect(buttonHistory).toBeInTheDocument();
});
