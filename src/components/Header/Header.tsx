import './Header.scss'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <div className="header">
      <div className="title">{title}</div>
    </div>
  )
}
