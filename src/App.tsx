import '../src/components/Nav/Nav.css';
import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import CardCollection from './components/CardService/CardCollection';
import CardPackages from './components/CardPackages/CardPackages';
import Accordion from './components/Accordion&IMG/Accordion';

function App() {

  return (
    <>
    <Nav/>
    <Header/>
    <Content/>
    <CardCollection/>
    <CardPackages/>
    <Accordion/>
    </>
  )
}

export default App
