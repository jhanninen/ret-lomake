import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Header } from "semantic-ui-react";


const Info = (props) => (
  <div>
    <Header as="h1">Info</Header>
    <Button onClick={e => props.nextPage()}>Seuraava</Button>
  </div>
);

Info.propTypes = {
  nextPage: PropTypes.func.isRequired,
};

export default Info;