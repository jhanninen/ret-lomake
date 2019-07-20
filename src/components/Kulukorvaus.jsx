import React, { Component } from "react";

import Info from "./kulukorvaus/Info";
import Lomake from "./kulukorvaus/Lomake";
import Esikatselu from "./kulukorvaus/Esikatselu";
import { Button, Header } from "semantic-ui-react";

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
        <Header as="h1">Kulukorvauslomake</Header>
        {this.state.page == 1 && <Info />}
        {this.state.page == 2 && <Lomake />}
        {this.state.page == 3 && <Esikatselu />}
        <Button.Group>
          <Button labelPosition='left' icon='left chevron' onClick={e => this.prevPage()} content='Edellinen' />
          <Button labelPosition='right' icon='right chevron' onClick={e => this.nextPage()} content='Seuraava' />
        </Button.Group>
      </div>
    );
  }
}

export default Kulukorvaus;