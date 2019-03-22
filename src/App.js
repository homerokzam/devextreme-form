import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Form, Template, Button } from 'devextreme-react';
import { Item, SimpleItem, TabbedItem, Tab } from 'devextreme-react/form';

const Endereco = (props) => {
  return(
    <>
      Endereço
    </>
  )
}

const App = (props) => {
  const handleOnClickSalvar = (e) => { alert("handleOnClickSalvar"); }
  const handleOnClickCancelar = (e) => { alert("handleOnClickCancelar"); }

  return (
    <div className="App">
      <Form>
        <SimpleItem dataField="field1" />

        <TabbedItem>
          <Tab title="Pessoal">
            <SimpleItem dataField="field2" />
            <SimpleItem dataField="field3" />
          </Tab>>
          <Tab title="Trabalho">
            <Item dataField="field4" />
            <Item dataField="field5" />
            <Item dataField="field6" />
          </Tab>
          <Tab title="Endereço" render={() => <Endereco />} />
        </TabbedItem>

        <Item template={'buttonsTemplate'} />
        <Template name={'buttonsTemplate'}>
          <Button text={'Salvar'} type={'success'} icon={'save'} onClick={handleOnClickSalvar} />
          &nbsp;
          <Button text={'Fechar'} type={'default'} icon={'close'} onClick={handleOnClickCancelar} />
        </Template>

      </Form>
    </div>
  );
}

export default App;