import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const Info = (props) => (
  <div>
    <p>Tämä on Ruokolahden Erätoverien kulukorvauslomake.</p>
    <p>
      Täytä lomakkeelle pyydetyt tiedot hankinnoista. Lomake muunnetaan pdf-tiedostoksi, joka tallennetaan laitteellesi.
      Lähetä lomake sähköpostilla osoitteeseen: <a href="mailto:ret.laskutus_atmerkki_gmail.com">ret.laskutus(at)gmail.com</a>.
      Liitä viestiin mukaan myös kuitit hankinnoista skannatuina tai hyvälaatuisina valokuvina.
    </p>
    <p>
      Nettisivu toimii ainoastaan omalla selaimellasi. Se ei lähetä täyttämiäsi tietoja mihinkään, vaan lomakkeen generointi tapahtuu täysin omalla laitteellasi.
      Lomakkeen toiminee parhaiten moderneilla nettiselaimilla, esim. Chromen, Firefoxin ja Safarin uusimmilla versioilla.
    </p>
    <p>
      Jos lomakkeen täyttämisessä tulee ongelmia tai ilmenee muuta kysyttävää, ole yhteydessä taloudenhoitajaan (Juhoon) em. sähköpostilla tai puhelimella 0404191804.
    </p>
    <Button onClick={e => props.nextPage()}>Seuraava</Button>
  </div>
);

Info.propTypes = {
  nextPage: PropTypes.func.isRequired,
};

export default Info;