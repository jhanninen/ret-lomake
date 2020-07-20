import React, { useState, useEffect } from "react";
import { Header, Grid, Form, Radio, Input, Button } from "semantic-ui-react";

import Kulukorvaus from "./Kulukorvaus";
import Login from "./Login";

const Welcome = () => {
  const [form, setForm] = useState("kulukorvaus")
  const [nextPage, goNextPage] = useState(false)
  useEffect(() => {
    window.scroll(0,0)
  }, [nextPage])
  
  
  let component;

  if (nextPage) {
    if (form === "kulukorvaus") {
      component = <Kulukorvaus />
    }
  }
  else { 
    component = <Login form={form} setForm={setForm} goNextPage={goNextPage} /> 
  }
  return (
    <Grid columns={1} style={{ marginTop: "1em", marginBottom: "4em" }}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h1">RET:n lomakepankki</Header>
        </Grid.Column>
      </Grid.Row>
      {component}
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button 
            content="Alkuun"
            onClick={() => goNextPage(false)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Welcome;