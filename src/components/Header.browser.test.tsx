import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from '../router'
import Header from './Header.tsx'

test('renders brand and nav links', async () => {
  const router = getRouter()
  const { getByRole } = await render(
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  )
  await expect.element(getByRole('link', { name: 'TanStack Start' })).toBeInTheDocument()
})
