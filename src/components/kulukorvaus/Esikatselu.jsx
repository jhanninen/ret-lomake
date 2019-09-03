import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { sanitizeDate, validateSum, sanitizeSum } from "../../util/formatter";
import { sanitizeIBAN } from "../../util/iban";
import { createPDF } from "../../util/pdfCreator";


import { Header, Table, Tab, Button } from "semantic-ui-react";

const Esikatselu = (props) => {
  const sum = props.purchases.reduce((accumulator, currentValue) =>
    accumulator + validateSum(currentValue.sum),
    0).toFixed(2)

  return (
    <div>
      <Header as="h2">Esikatselu</Header>
      <Table collapsing basic="very">
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <b>NIMI</b>
            </Table.Cell>
            <Table.Cell>
              {props.name}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <b>PANKKITILI</b>
            </Table.Cell>
            <Table.Cell>
              {sanitizeIBAN(props.account)}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <b>KUITIT</b>
      <Table collapsing basic="very" id="kuittitaulukko">
        <Table.Body>
          {props.purchases.map((purchase, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                {i+1}
              </Table.Cell>
              <Table.Cell>
                {purchase.place}
              </Table.Cell>
              <Table.Cell>
                {sanitizeDate(purchase.date)}
              </Table.Cell>
              <Table.Cell>
                {purchase.description}
              </Table.Cell>
              <Table.Cell textAlign="right">
                {sanitizeSum(purchase.sum)} €
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell textAlign="right">
              YHTEENSÄ
            </Table.Cell>
            <Table.Cell>
              {sum} €
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button
        onClick={() => createPDF(props.name, props.account, sum)}
        content='Tulosta'
      />
    </div>
  );
}


Esikatselu.propTypes = {
  name: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  purchases: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  name: state.name,
  account: state.account,
  purchases: state.purchases
});

export default connect(mapStateToProps)(Esikatselu);