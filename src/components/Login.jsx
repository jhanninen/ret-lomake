import React, { useState } from "react";
import { Header, Grid, Form, Radio, Input, Button } from "semantic-ui-react";

import Kulukorvaus from "./Kulukorvaus";

const Login = ({ form, setForm, goNextPage }) => {
  const [password, updatePw] = useState("");

  return (
    <Form>
      <Form.Field>
        <p>Valitse lomake, anna salasana ja paina jatka.</p>
        <p>Salasana on perinteinen leiripaikka pienellä kirjoitettuna.</p>
      </Form.Field>
      <Form.Field>
        <Radio
          label='Kulukorvaus'
          value="kulukorvaus"
          checked={form === "kulukorvaus"}
          onChange={(e, {value}) => setForm(value)}
        />
      </Form.Field>
      <Form.Field>
        <Form.Radio
          label='Tapahtumailmoitus (tulossa myöhemmin)'
          value="tapahtumailmoitus"
          disabled={true}
          checked={form === "tapahtumailmoitus"}
          onChange={(e, {value}) => setForm(value)}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input 
          placeholder="Salasana"
          type="password"
          onChange={(e, {value}) => updatePw(value)}
        />
      </Form.Field>
      <Form.Field>
        <Form.Button
          content="Jatka"
          onClick={() => goNextPage(true)}
          disabled={password !== "retsola"}
        />
      </Form.Field>
    </Form>
  )
}

export default Login;