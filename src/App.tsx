import React, { useState, useEffect } from "react";
import { getCountryByName } from "./api/apiService";
import "./App.css";
import { useStores } from "./use-stores";
import { AutoCompleteTextInput, InputGroup, InputGroupButton, TextInput } from "./_components";
import { IAutoComplete } from "./_stores/AutoComplete";


function App() {
  const { autoCompleteStore } = useStores();

  const [firstTextInput, setFirstTextInput] = useState('');
  const [secondTextInput, setSecondTextInput] = useState('');

  const [thirdTextInput, setThirdTextInput] = useState('');
  const [fourthTextInput, setFourthTextInput] = useState('');


  const isNumeric = (n: any) => !isNaN(n);

  const alertNumber = (value: any) => {
    if (isNumeric(value)) alert(value)
  }

  const onChangeACInput = (value: any, setState: React.Dispatch<React.SetStateAction<string>>, name: any) => {
    setState(value)

    getCountryByName(value).then((res: any) => {
      autoCompleteStore.addACList(res, name)
    })
  }


  return (
    <div className={`app`}>
      <h1>Контрол с кнопками</h1>
      <InputGroup className={`mb-3`}>
        <TextInput placeholder={`Введите текст...`} value={firstTextInput} onChange={(event) => setFirstTextInput(event.target.value)} />
        <InputGroupButton onClick={() => setFirstTextInput('')}>Очистить</InputGroupButton>
        <InputGroupButton onClick={() => setFirstTextInput('Hello world!')}>Hello world!</InputGroupButton>
      </InputGroup>

      <InputGroup className={`mb-3`}>
        <InputGroupButton onClick={() => alert(secondTextInput)}>Алерт текста</InputGroupButton>
        <TextInput placeholder={`Введите текст...`} value={secondTextInput} onChange={(event) => setSecondTextInput(event.target.value)} />
        <InputGroupButton onClick={() => alertNumber(secondTextInput)}>Алерт числа</InputGroupButton>
      </InputGroup>

      <h1>Контрол-автокомплит</h1>
      <TextInput
        placeholder={`Введите текст...`}
        value={thirdTextInput}
        onChange={(event) => onChangeACInput(event.target.value, setThirdTextInput, 'thirdTextInput')}
        autoCompleteComponent={<AutoCompleteTextInput name={'thirdTextInput'} max={3} renderItem={(item: any, index: number) =>
          <div key={index} className={`auto-complete-list-item`} onClick={() => setThirdTextInput(item.name)}>
            {item.flag && <img src={item.flag} className={`auto-complete-list-item_image`} />}
            {item.name} | {item.fullName}
          </div>
        } />}
      />
      <TextInput
        className={`mt-3`}
        placeholder={`Введите текст...`}
        value={fourthTextInput}
        onChange={(event) => onChangeACInput(event.target.value, setFourthTextInput, 'fourthTextInput')}
        autoCompleteComponent={<AutoCompleteTextInput name={'fourthTextInput'} renderItem={(item: any, index: number) =>
          <div key={index} className={`auto-complete-list-item`} onClick={() => setFourthTextInput(item.name)}>
            {item.flag && <img src={item.flag} className={`auto-complete-list-item_image`} />}
            {item.name} | {item.fullName}
          </div>
          } />}
      />
    </div>
  );
}

export default App;
