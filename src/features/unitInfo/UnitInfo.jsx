import { Dropdown, Form, Segment } from 'semantic-ui-react'
import { FACTIONS } from './factions'

const UnitInfo = () => (
  <Segment attached="bottom">
    <Form size="large">
      <Form.Field name="name" width={6}>
        <label>Unit Name</label>
        <input placeholder="Name" />
      </Form.Field>
      <Form.Field name="affiliation" width={6}>
        <label>Affiliation</label>
        <Dropdown options={FACTIONS} selection />
      </Form.Field>
    </Form>
  </Segment>
)

export default UnitInfo
