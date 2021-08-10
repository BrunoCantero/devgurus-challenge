import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Carousel } from './Carousel'
import { imagesMock } from './mock'

describe('Carousel', () => {
  test('render Carousel without crash', () => {
    const { container } = render(<Carousel images={imagesMock} />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
