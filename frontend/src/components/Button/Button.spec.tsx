import { render, screen, within } from "@testing-library/react"
import { Button } from "."

test("button functionality", () => {
  render(
    <Button color="primary-color" title="Enviar" />
  );

  const sla = within(screen.getByText("Enviar"))

  expect(sla.getByText("Enviar")).toBeInTheDocument();
})
