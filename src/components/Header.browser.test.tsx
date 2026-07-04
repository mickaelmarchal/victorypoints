import { expect, test, vi } from "vitest"
import { render } from "vitest-browser-react"

vi.mock("@tanstack/react-router", () => {
  return {
    // biome-ignore lint/suspicious/noExplicitAny: just a mock for testing purposes
    Link: ({ to, children, activeProps, ...props }: any) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  }
})

import Header from "./Header.tsx"

test("renders brand and nav links", async () => {
  const { getByRole } = await render(<Header />)
  await expect.element(getByRole("link", { name: "TanStack Start" })).toBeInTheDocument()
})
