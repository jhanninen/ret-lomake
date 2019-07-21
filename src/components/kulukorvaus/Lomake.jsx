import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Header, Form, Button } from "semantic-ui-react";

import {
  setName,
  setAccount,
  setPurchasePlace,
  setPurchaseDate,
  setPurchaseDescription,
  setPurchaseSum,
  addPurchase,
} from "../../actions";
import { validateIBAN } from "../../util/iban";

const Lomake = (props) => (
  <div>
    <Header as="h3">Perustiedot</Header>
    <Form>
      <Form.Field>
        <Form.Input
          label="Nimi"
          placeholder="Pirkko Partiolainen"
          onChange={(e, {value}) => props.setName(value)}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Pankkitili"
          placeholder="FIxx xxxx xxxx xxxx xx"
          onChange={(e, {value}) => props.setAccount(value)}
          error={props.account !== "" && !validateIBAN(props.account)}
        />
      </Form.Field>
    </Form>
    <Header as="h3">Kuitit</Header>
    <Form>
      {props.purchases.map((purchase, i) => (
        <Form.Group unstackable key={i}>
          <Form.Input
            width={3}
            label={i === 0 && "Paikka"}
            placeholder="S-Market"
            onChange={(e, {value}) => props.setPurchasePlace(i, value)}
          />
          <Form.Input
            width={3}
            label={i === 0 && "Aika"}
            placeholder="20.11.2018"
            onChange={(e, {value}) => props.setPurchaseDate(i, value)}
          />
          <Form.Input
            width={8}
            label={i === 0 && "Selite"}
            placeholder="Arkartelutarvikkeita Kotka-lauman koloiltaan."
            onChange={(e, {value}) => props.setPurchaseDescription(i, value)}
          />
          <Form.Input
            width={2}
            label={i === 0 && "Summa"}
            placeholder="15,80"
            onChange={(e, {value}) => props.setPurchaseSum(i, value)}
          />
        </Form.Group>
      ))}
    </Form>
    <Button
      onClick={() => props.addPurchase()}
      content="Lisää kuitti"
    />
  </div>
);

Lomake.propTypes = {
  account: PropTypes.string.isRequired,
  purchases: PropTypes.array.isRequired,
  setName: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  setPurchasePlace: PropTypes.func.isRequired,
  setPurchaseDate: PropTypes.func.isRequired,
  setPurchaseDescription: PropTypes.func.isRequired,
  setPurchaseSum: PropTypes.func.isRequired,
  addPurchase: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.name,
  account: state.account,
  purchases: state.purchases
});

const mapDispatchToProps = {
  setName: name => setName(name),
  setAccount: account => setAccount(account),
  setPurchasePlace: (id, place) => setPurchasePlace(id, place),
  setPurchaseDate: (id, date) => setPurchaseDate(id, date),
  setPurchaseDescription: (id, desciption) => setPurchaseDescription(id, desciption),
  setPurchaseSum: (id, sum) => setPurchaseSum(id, sum),
  addPurchase: () => addPurchase(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Lomake);
