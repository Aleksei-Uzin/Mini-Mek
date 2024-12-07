import { Menu } from 'semantic-ui-react'

import ToggleDisplay from '../../components/ToggleDisplay'
import Tab from './Tab'

import { selectCurrentTab } from './tabsSelectors'
import { selectTab } from './tabsActions'
import { connect } from 'react-redux'

const mapState = state => {
  const currentTab = selectCurrentTab(state)
  return { currentTab }
}

const actions = { onTabClick: selectTab }

const TabBar = ({ tabs, currentTab, onTabClick, ...otherProps }) => {
  const tabItems = tabs.map(tabInfo => {
    const { name, label } = tabInfo

    return (
      <Tab
        key={name}
        name={name}
        label={label}
        active={currentTab === name}
        onClick={onTabClick}
      />
    )
  })

  const tabPanels = tabs.map(tabInfo => {
    const { name, component: TabComponent } = tabInfo

    return (
      <ToggleDisplay key={name} show={name === currentTab}>
        <TabComponent />
      </ToggleDisplay>
    )
  })

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
    </div>
  )
}

export default connect(mapState, actions)(TabBar)
