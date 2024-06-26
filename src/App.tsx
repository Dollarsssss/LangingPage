import "../src/components/Nav/Nav.css";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import CardCollection from "./components/CardService/CardCollection";
import CardPackages from "./components/CardPackages/CardPackages";
import ExampleBusiness from "./components/ExampleBusiness/ExampleBusiness";
import Contact from "./components/Contact/Contact";

import { createContext } from "react";

import {
  Service,
  services,
  Packages,
  packages,
  Contents,
  contents,
  Contacts,
  contacts
} from "./dataContext";

export const DataContext = createContext<{
  services: Service[];
  packages: Packages[];
  contents: Contents[];
  contacts: Contacts[];
}>({ services: [], packages: [], contents: [] , contacts:[]});

function App() {


  
  return (
    <DataContext.Provider value={{ services, packages, contents,contacts}}>
      <Nav />
      <Header />
      <Content />
      <CardCollection />
      <CardPackages />
      <ExampleBusiness />
      <Contact/>
    </DataContext.Provider>
  );
}

export default App;
