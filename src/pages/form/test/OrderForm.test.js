import { render, screen } from "@testing-library/react";
import OrderForm from "../OrderForm";
import userEvent from "@testing-library/user-event";


test("clicked checkbox", async () => {
    const user = userEvent.setup();

    render(<OrderForm />);

    const termsCheck = screen.getByRole("checkbox", { name: /Read and accept terms/i });

    const orderBtn = screen.getByRole("button", { name: "Confirm Order" });

    expect(termsCheck).not.toBeChecked();
    expect(orderBtn).toBeDisabled();

    await user.click(termsCheck);
    expect(orderBtn).toBeEnabled();

    await user.click(termsCheck);
    expect(orderBtn).toBeDisabled();
});