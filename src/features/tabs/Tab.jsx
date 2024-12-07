import { Menu } from 'semantic-ui-react'

const Tab = ({ active, name, label, onClick }) => (
  <Menu.Item
    active={active}
    name={name}
    content={label}
    onClick={() => onClick(name)}
  />
)

export default Tab
