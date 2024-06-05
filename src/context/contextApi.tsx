import {  createContext,  } from "react";
import  { ReactNode } from "react";
interface MyContextValueType {
  // Define the structure of your context value
  // For example:
  value: string;
  // Add more properties as needed
}
const contextProvider = createContext<MyContextValueType>({
  value: "", // Provide initial values for context properties
});type ContextApiProbs = {
    children:ReactNode

}
function contextApi({ children }: ContextApiProbs) {
  return (
    <contextProvider.Provider value={{ value: "example" }}>
      {children}
    </contextProvider.Provider>
  );
}

export default contextApi;
