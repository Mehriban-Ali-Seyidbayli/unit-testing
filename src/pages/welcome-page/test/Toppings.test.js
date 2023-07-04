import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from "../Toppings";


test("Adding sauce", async () => {
    const user = userEvent.setup();

    render(<Toppings />)

    const typesPrice = screen.getByTestId("price");
    expect(typesPrice).toHaveTextContent("0");

    const sauce1 = await screen.findByRole("checkbox", { name: "Mochi" });
    await user.click(sauce1);


    const sauce2 = await screen.findByRole("checkbox", { name: "Gummi bears" });
    await user.click(sauce2);

    expect(typesPrice).toHaveTextContent("4");

    await user.click(sauce1);
    expect(typesPrice).toHaveTextContent("2");



})