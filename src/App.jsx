import { Container, Header } from 'semantic-ui-react'

import TabBarContainer from './features/tabs/TabBar'
import UnitInfo from './features/unitInfo/UnitInfo'
import UnitOrganization from './features/unitOrganization/UnitOrganization'
import Pilots from './features/pilots/Pilots'
import Mechs from './features/mechs/Mechs'

import './App.css'

const TABS = [
  { name: 'unitInfo', label: 'Unit Info', component: UnitInfo },
  { name: 'pilots', label: 'Pilots', component: Pilots },
  { name: 'mechs', label: 'Mechs', component: Mechs },
  {
    name: 'unitOrganization',
    label: 'Unit Organization',
    component: UnitOrganization,
  },
]

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header as="h1" inverted>
          Mini-Mek
        </Header>
      </div>
      <Container>
        <TabBarContainer tabs={TABS} size="massive" />
      </Container>
    </div>
  )
}

export default App
