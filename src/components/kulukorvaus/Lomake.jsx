import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Header, Form, Button, Grid, Divider } from "semantic-ui-react";

import {
  setName,
  setAccount,
  setPurchasePlace,
  setPurchaseDate,
  setPurchaseDescription,
  setPurchaseSum,
  addPurchase,
  removePurchase,
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
          value={props.name}
          onChange={(e, {value}) => props.setName(value)}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Pankkitili"
          placeholder="FIxx xxxx xxxx xxxx xx"
          value={props.account}
          onChange={(e, {value}) => props.setAccount(value)}
          error={props.account !== "" && !validateIBAN(props.account)}
        />
      </Form.Field>
    </Form>
    <Header as="h3">Kuitit</Header>
    <Form>
      {props.purchases.map((purchase, i) => (
        <Form.Group key={i} unstackable style={{ marginBottom: "5px" }}>
          <Form.Input
            width={3}
            label={i === 0 && "Paikka"}
            placeholder="esim. S-Market"
            value={props.purchases[i].place}
            onChange={(e, {value}) => props.setPurchasePlace(i, value)}
          />
          <Form.Input
            width={3}
            label={i === 0 && "Aika"}
            placeholder="xx.xx.xxxx"
            value={props.purchases[i].date}
            onChange={(e, {value}) => props.setPurchaseDate(i, value)}
          />
          <Form.Input
            width={7}
            label={i === 0 && "Selite"}
            placeholder="Arkartelutarvikkeita Kotka-lauman koloiltaan."
            value={props.purchases[i].desciption}
            onChange={(e, {value}) => props.setPurchaseDescription(i, value)}
          />
          <Form.Input
            width={2}
            label={i === 0 && "Summa"}
            placeholder="xx.xx"
            value={props.purchases[i].sum}
            onChange={(e, {value}) => props.setPurchaseSum(i, value)}
          />
          <Form.Button
            width={1}
            style={i === 0 ? { marginTop: "23px"} : {}}
            onClick={() => props.removePurchase(i)}
            icon="minus"
          />
        </Form.Group>
      ))}
    </Form>
    <Divider />
    <Grid>
      <Grid.Column width={4}>
        <Button
          onClick={() => props.addPurchase()}
          content="Lisää kuitti"
        />
      </Grid.Column>
      <Grid.Column width={7} />
      <Grid.Column width={2} textAlign="right">
        Yhteensä
      </Grid.Column>
      <Grid.Column width={2} textAlign="right">
        {props.purchases.reduce((accumulator, currentValue) =>
          accumulator + Number(currentValue.sum),
          0).toFixed(2)}
      </Grid.Column>
    </Grid>

  </div>
);

Lomake.propTypes = {
  name: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  purchases: PropTypes.array.isRequired,
  setName: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  setPurchasePlace: PropTypes.func.isRequired,
  setPurchaseDate: PropTypes.func.isRequired,
  setPurchaseDescription: PropTypes.func.isRequired,
  setPurchaseSum: PropTypes.func.isRequired,
  addPurchase: PropTypes.func.isRequired,
  removePurchase: PropTypes.func.isRequired,
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
  removePurchase: id => removePurchase(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Lomake);
