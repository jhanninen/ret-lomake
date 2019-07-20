import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Header } from "semantic-ui-react";


const Lomake = (props) => (
  <div>
    <Header as="h1">Lomake</Header>
    <Button onClick={e => props.prevPage()}>Edellinen</Button>
    <Button onClick={e => props.nextPage()}>Seuraava</Button>
  </div>
);

Lomake.propTypes = {
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Lomake;