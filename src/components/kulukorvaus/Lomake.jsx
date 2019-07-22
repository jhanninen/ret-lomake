import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MediaQuery from "react-responsive";
import { Header, Button, Grid, Divider, Input } from "semantic-ui-react";

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
import { validateSum, isValidDate } from "../../util/formatter";

const Lomake = (props) => (
  <div>
    <Header as="h3">Perustiedot</Header>
    <Header as="h5">Nimi</Header>
    <Input
      fluid
      placeholder="Pirkko Partiolainen"
      value={props.name}
      onChange={(e, {value}) => props.setName(value)}
    />
    <Header as="h5">Pankkitili</Header>
    <Input
      fluid
      placeholder="FIxx xxxx xxxx xxxx xx"
      value={props.account}
      onChange={(e, {value}) => props.setAccount(value)}
      error={props.account !== "" && !validateIBAN(props.account)}
    />
    <Divider/>

    <Header as="h3">Kuitit</Header>
    <MediaQuery maxWidth={550}>
      {(isMobile) => (
        <Fragment>
          <Grid stackable={isMobile}>
            {props.purchases.map((purchase, i) => (
              <Grid.Row key={i} style={{ paddingTop: i !== 0 && "2px", paddingBottom: "2px", }}>
                <Grid.Column width={3} style={{paddingRight: "2px"}}>
                  {(i === 0 || isMobile) &&
                    <Header as="h5" style={{ marginBottom: "2px"}}>Paikka</Header>
                  }
                  <Input
                    fluid
                    placeholder="esim. S-Market"
                    value={props.purchases[i].place}
                    onChange={(e, {value}) => props.setPurchasePlace(i, value)}
                  />
                </Grid.Column>
                <Grid.Column width={3} style={{paddingRight: "2px", paddingLeft: "2px"}}>
                  {(i === 0 || isMobile) &&
                    <Header as="h5" style={{ marginBottom: "2px"}}>Aika</Header>
                  }
                  <Input
                    fluid
                    placeholder="xx.xx.xxxx"
                    value={props.purchases[i].date}
                    onChange={(e, {value}) => props.setPurchaseDate(i, value)}
                    error={props.purchases[i].date !== "" && !isValidDate(props.purchases[i].date)}
                  />
                </Grid.Column>
                <Grid.Column width={7} style={{paddingRight: "2px", paddingLeft: "2px"}}>
                  {(i === 0 || isMobile) &&
                    <Header as="h5" style={{ marginBottom: "2px"}}>Selite</Header>
                  }
                  <Input
                    fluid
                    placeholder="Arkartelutarvikkeita Kotka-lauman koloiltaan."
                    value={props.purchases[i].desciption}
                    onChange={(e, {value}) => props.setPurchaseDescription(i, value)}
                  />
                </Grid.Column>
                <Grid.Column width={2} style={{paddingRight: "2px", paddingLeft: "2px"}}>
                  {(i === 0 || isMobile) &&
                    <Header as="h5" style={{ marginBottom: "2px"}}>Summa</Header>
                  }
                  <Input
                    fluid
                    placeholder="xx.xx"
                    value={props.purchases[i].sum}
                    onChange={(e, {value}) => props.setPurchaseSum(i, value)}
                    error={isNaN(validateSum(props.purchases[i].sum))}
                    onKeyDown={(e) => { e.key === "Enter" && props.addPurchase()}}
                  />
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="bottom" style={{paddingLeft: "2px"}}>
                  <Button
                    onClick={() => props.removePurchase(i)}
                    icon="minus"
                  />
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
          <Divider />
          <Grid>
            <Grid.Column width={6}>
              <Button
                onClick={() => props.addPurchase()}
                content="Lisää kuitti"
              />
            </Grid.Column>
            <Grid.Column width={4}/>
            <Grid.Column width={3} textAlign="right">
              Yhteensä
            </Grid.Column>
            <Grid.Column width={isMobile ? 3 : 2} textAlign="center">
              {props.purchases.reduce((accumulator, currentValue) =>
                accumulator + validateSum(currentValue.sum),
                0).toFixed(2)} €
            </Grid.Column>
          </Grid>
        </Fragment>
      )}
    </MediaQuery>

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
