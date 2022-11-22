import { createContext } from "react";
import { AutoComplete } from "./AutoComplete";

export const rootStoreContext = createContext({
    autoCompleteStore: new AutoComplete()
});
