import React, { Component } from "react";

import Info from "./kulukorvaus/Info";
import Lomake from "./kulukorvaus/Lomake";
import Esikatselu from "./kulukorvaus/Esikatselu";
import { Button, Header, Grid, Menu, Step } from "semantic-ui-react";

class Kulukorvaus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.pages = [
      {
        name: "Info",
        component: <Info />
      },
      {
        name: "Lomake",
        component: <Lomake />
      },
      {
        name: "Esikatselu",
        component: <Esikatselu />
      }
    ];
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
        <Grid columns={1} style={{ marginTop: "1em", marginBottom: "6em" }}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as="h1">Kulukorvauslomake</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {this.pages[this.state.page].component}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Menu fixed="bottom" size="tiny">
          <Grid columns={1} verticalAlign="middle" container textAlign="center">
            <Grid.Column style={{paddingBottom: "1px"}}>
              <Grid.Row>
                <Step.Group unstackable>
                  {this.pages.map((item, i) => (
                    <Step key={i}
                      content={item.name}
                      active={this.state.page === i}
                      disabled={this.state.page < i}
                      onClick={e => this.setState({ page: i })}
                    />
                  ))}
                </Step.Group>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column style={{paddingTop: "1px"}}>
              <Grid.Row>
              <Button.Group size="tiny">
                <Button labelPosition='left' icon='left chevron'
                  onClick={e => this.prevPage()}
                  disabled={this.state.page === 0}
                  content='Edellinen'
                />
                <Button labelPosition='right' icon='right chevron'
                  onClick={e => this.nextPage()}
                  disabled={this.state.page === this.pages.length - 1}
                  content='Seuraava'
                />
              </Button.Group>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Menu>
      </div>
    );
  }
}

export default Kulukorvaus;