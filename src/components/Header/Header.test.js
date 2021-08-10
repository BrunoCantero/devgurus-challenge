import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Header } from './Header'

test('renders Header', () => {
  const component = render(<Header title="TVSHOWS" />)
  //both ways to check for the title
  component.getByText('TVSHOWS')
  expect(component.container).toHaveTextContent('TVSHOWS')
})
