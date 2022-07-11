import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Comprobación del componente <GifItem />", () => {
  const title = "Saitama";
  const url = "https://ejemplo.com/ejemplo.jpg";

  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show an image with the right URL and ALT", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').src).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
