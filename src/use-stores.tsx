import { useContext } from "react";
import { rootStoreContext } from "./_stores";

export const useStores = () => useContext(rootStoreContext);
