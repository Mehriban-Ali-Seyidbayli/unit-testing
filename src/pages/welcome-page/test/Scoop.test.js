import userEvent from "@testing-library/user-event";
import Scoops from "../Scoops";
import { render, screen } from "@testing-library/react";

test("Fetching data from API", async () => {
    render(<Scoops />);

    const images = await screen.findAllByRole("img", { name: /type/i });
    expect(images).toHaveLength(4);
});

test("Adding type", async () => {
    const user = userEvent.setup();
    render(<Scoops />)

    const typesPrice = screen.getByTestId("price");
    expect(typesPrice).toHaveTextContent("0");


    const [mintBtn, vanillaBtn, choBtn, caramelBtn] = await screen.findAllByRole("button", { name: "Add" });
    await user.click(choBtn);

    expect(typesPrice).toHaveTextContent("3")
});



test("Reset action", async () => {
    const user = userEvent.setup();
    render(<Scoops />);

    const [mintBtn, vanillaBtn, choBtn, caramelBtn] = await screen.findAllByRole("button", { name: "Add" });

    await user.dblClick(caramelBtn);

    const price = screen.getByTestId("price");
    expect(price).toHaveTextContent("6");

    const [delMint, delVanilla, delCho, delCaramel] = await screen.findAllByRole("button", { name: "Reset" });

    await user.click(delCaramel);
    expect(price).toHaveTextContent("0");
})