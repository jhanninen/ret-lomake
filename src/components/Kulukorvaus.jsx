import React, { Component } from "react";

import Info from "./kulukorvaus/Info";
import Lomake from "./kulukorvaus/Lomake";
import Esikatselu from "./kulukorvaus/Esikatselu";
import { Header } from "semantic-ui-react";

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
        {this.state.page == 1 && <Info nextPage={() => this.nextPage()}/>}
        {this.state.page == 2 && <Lomake prevPage={() => this.prevPage()} nextPage={() => this.nextPage()}/>}
        {this.state.page == 3 && <Esikatselu prevPage={() => this.prevPage()} />}
      </div>
    );
  }
}

export default Kulukorvaus;