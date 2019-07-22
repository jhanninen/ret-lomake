import React, { Component } from "react";

import Info from "./kulukorvaus/Info";
import Lomake from "./kulukorvaus/Lomake";
import Esikatselu from "./kulukorvaus/Esikatselu";
import { Button, Header, Grid, Step } from "semantic-ui-react";

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
    window.scrollTo(0,0);
  }

  prevPage() {
    this.setState({
      page: this.state.page - 1
    })
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <Grid columns={1} style={{ marginTop: "1em", marginBottom: "4em" }}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as="h1">Kulukorvauslomake</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Grid.Column textAlign="center">
                <Step.Group unstackable>
                  {this.pages.map((item, i) => (
                    <Step key={i}
                      content={item.name}
                      active={this.state.page === i}
                      disabled={this.state.page < i}
                    />
                  ))}
                </Step.Group>
              </Grid.Column>
            </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {this.pages[this.state.page].component}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1}
          container textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Button.Group size="tiny" fixed="bottom">
                <Button labelPosition='left' icon='left chevron'
                  onClick={() => this.prevPage()}
                  disabled={this.state.page === 0}
                  content='Edellinen'
                />
                <Button labelPosition='right' icon='right chevron'
                  onClick={() => this.nextPage()}
                  disabled={this.state.page === this.pages.length - 1}
                  content='Seuraava'
                />
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Kulukorvaus;