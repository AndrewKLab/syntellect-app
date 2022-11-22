import React, { FunctionComponent, useState } from "react";
import { observer } from "mobx-react-lite";
import './index.css'
import { useStores } from "../../use-stores";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  autoCompleteComponent?: React.ReactElement | React.ReactNode;
}

export const TextInput: FunctionComponent<TextInputProps> = ({ className, autoCompleteComponent, ...other }) => {
  return <>
    <input className={`text-input${className ? ` ${className}` : ''}`} {...other} />
    {autoCompleteComponent && <div className={`text-input-ac`}>{autoCompleteComponent}</div>}
  </>;
}


export interface AutoCompleteTextInputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  max?: number;
  name: string;
  renderItem: any;
}

export const AutoCompleteTextInput: FunctionComponent<AutoCompleteTextInputProps> = observer(({ className, max, name, renderItem, ...other }) => {
  const { autoCompleteStore } = useStores();
 
  let acList = autoCompleteStore.acList[name];
  if (acList && max && max >= 0) acList.splice(max);

  return acList && acList.length > 0 ? <div className={`auto-complete-list`} {...other}>{acList.map(renderItem)}</div> : null
})
