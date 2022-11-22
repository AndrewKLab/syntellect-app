import { observable, computed, makeObservable } from "mobx";

export interface IAutoCompleteList {
  [name: string]: IAutoComplete[];
}
export interface IAutoComplete {
  name?: string | null;
  fullName?: string | null;
  flag?: string | null;
}

export class AutoComplete {
  public ac_list: IAutoCompleteList = {};

  constructor() {
    makeObservable(this, {
      ac_list: observable,
      acList: computed,
    })

  }

  public addACList = (ac_list: IAutoComplete[], name: string) => {
    this.ac_list[name] = ac_list
  };

  get acList() {
    return this.ac_list;
  }
}
