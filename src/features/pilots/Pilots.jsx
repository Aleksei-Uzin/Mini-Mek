import { Dropdown, Form, Header, Grid, Segment, Table } from 'semantic-ui-react'
import { RANKS } from './ranks'
import { MECHS } from './mechs'

const Pilots = () => (
  <Segment>
    <Grid>
      <Grid.Column width={10}>
        <Header as="h3">Pilot List</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={5}>Name</Table.HeaderCell>
              <Table.HeaderCell width={3}>Rank</Table.HeaderCell>
              <Table.HeaderCell width={2}>Age</Table.HeaderCell>
              <Table.HeaderCell width={2}>Skills</Table.HeaderCell>
              <Table.HeaderCell width={4}>Mech</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Natasha Kerensky</Table.Cell>
              <Table.Cell>Colonel</Table.Cell>
              <Table.Cell>34</Table.Cell>
              <Table.Cell>2/3</Table.Cell>
              <Table.Cell>WHM-6R</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
      <Grid.Column width={6}>
        <Header as="h3">Pilot Details</Header>
        <Segment>
          <Form size="large">
            <Form.Field name="name" width={16}>
              <label>Name</label>
              <input placeholder="Name" value="Natasha Kerensky" />
            </Form.Field>
            <Form.Field name="rank" width={16}>
              <label>Rank</label>
              <Dropdown fluid selection options={RANKS} value="Colonel" />
            </Form.Field>
            <Form.Field name="age" width={6}>
              <label>Age</label>
              <input placeholder="Age" value="34" />
            </Form.Field>
            <Form.Field name="gunnery" width={6}>
              <label>Gunnery</label>
              <input value="2" />
            </Form.Field>
            <Form.Field name="piloting" width={6}>
              <label>Piloting</label>
              <input value="3" />
            </Form.Field>
            <Form.Field name="mech" width={16}>
              <label>Mech</label>
              <Dropdown fluid selection options={MECHS} value="WHM-6R" />
            </Form.Field>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  </Segment>
)

export default Pilots
