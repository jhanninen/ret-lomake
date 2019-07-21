import React, { Component } from "react";

import Info from "./kulukorvaus/Info";
import Lomake from "./kulukorvaus/Lomake";
import Esikatselu from "./kulukorvaus/Esikatselu";
import { Button, Header, Grid, GridRow, Menu } from "semantic-ui-react";

class Kulukorvaus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1
    })
  }

  prevPage() {
    this.setState({
      page: this.state.page - 1
    })
  }

  render() {
    return (
      <div>
        <Grid columns={1} style={{ marginBottom: "5em" }}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as="h1">Kulukorvauslomake</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {this.state.page == 1 && <Info />}
              {this.state.page == 2 && <Lomake />}
              {this.state.page == 3 && <Esikatselu />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Menu fixed="bottom">
          <Grid columns={1} verticalAlign="middle" container >
            <Grid.Column textAlign="center">
              <GridRow>
              <Button.Group >
                <Button labelPosition='left' icon='left chevron' onClick={e => this.prevPage()} content='Edellinen' />
                <Button labelPosition='right' icon='right chevron' onClick={e => this.nextPage()} content='Seuraava' />
              </Button.Group>
              </GridRow>
            </Grid.Column>
          </Grid>
        </Menu>
      </div>
    );
  }
}

export default Kulukorvaus;