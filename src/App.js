import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Form, Template, Button } from 'devextreme-react';
import { Item, GroupItem, SimpleItem, TabbedItem, Tab, ButtonItem } from 'devextreme-react/form';

const Endereco = (props) => {
  return(
    <>
      Endereço
    </>
  )
}

const App = (props) => {

  const [currentData, setCurrentData] = useState({ data: new Date(), dinheiro: 1200.21, moeda: -12.25 });

  const handleOnClickSalvar = (e) => { alert("handleOnClickSalvar"); }
  const handleOnClickCancelar = (e) => { alert("handleOnClickCancelar"); }

  return (
    <div className="App">
      <Form formData={currentData}>
        <GroupItem caption="Real">
          <SimpleItem dataField={'data'} label={ {text: 'Data'}} editorType={'dxDateBox'} editorOptions={{ disabled: false }} />
          <SimpleItem dataField={'dinheiro'} label={ {text: 'Cédula'}} editorType={'dxNumberBox'} editorOptions={{ format: { style: "currency", currency: "BRL" }, precision: 2, dataType: "number" }} />
          <SimpleItem dataField={'moeda'} label={ {text: 'Gaveta'}} editorType={'dxNumberBox'} editorOptions={{ format: { style: "currency", currency: "BRL" }, precision: 2, dataType: "number" }} />
        </GroupItem>

        <GroupItem caption={'Personal Data'}>
          <SimpleItem dataField={'Name'} />
          <SimpleItem dataField={'Date'} editorType={'dxDateBox'} />
        </GroupItem>
        <GroupItem caption={'Billing address'}>
          <SimpleItem dataField={'Country'} editorType={'dxSelectBox'} />
          <SimpleItem dataField={'City'} editorType={'dxAutocomplete'} />
          <SimpleItem dataField={'Address'} />
          <SimpleItem dataField={'Phone'} helpText={'Enter the phone number in USA phone format'} />
          <SimpleItem dataField={'Accepted'} editorType={'dxCheckBox'} />
        </GroupItem>
        <ButtonItem horizontalAlignment={'left'} buttonOptions={ {text: 'Register', type: 'success', useSubmitBehavior: true } } />

        {/* <SimpleItem dataField="field1" />

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
        </Template> */}

      </Form>
    </div>
  );
}

export default App;