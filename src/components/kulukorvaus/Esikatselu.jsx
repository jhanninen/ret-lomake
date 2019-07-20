import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Header } from "semantic-ui-react";


const Esikatselu = (props) => (
  <div>
    <Header as="h1">Esikatselu</Header>
    <Button onClick={e => props.prevPage()}>Edellinen</Button>
  </div>
);

Esikatselu.propTypes = {
  prevPage: PropTypes.func.isRequired,
};

export default Esikatselu;