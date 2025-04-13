import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Footer from '.'

describe('components > Footer', () => {
  test('render footer', async () => {
    render(<Footer />)

    expect(await screen.findByTestId('footer')).toBeInTheDocument()
  })

  test('error email', async () => {
    render(<Footer />)

    const emailInput = await screen.findByTestId('email-subscribe')
    fireEvent.change(emailInput, { target: { value: 'testeemail.com' } })

    const submitSubscribe = await screen.findByTestId('submit-subscribe')
    fireEvent.click(submitSubscribe)

    const errorMessage = await screen.findByText('Digite um e-mail válido.')
    expect(errorMessage).toBeVisible()
  })
})
