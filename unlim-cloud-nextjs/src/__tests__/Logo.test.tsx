import { render, screen } from '@testing-library/react'
import Logo from '../components/Logo'

describe('Logo', () => {
  it('renders the logo image with correct alt text', () => {
    render(<Logo />)
    const logoImage = screen.getByAltText('UnlimCloud Logo')
    expect(logoImage).toBeInTheDocument()
  })
})
