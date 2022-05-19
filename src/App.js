import './App.css';
import { 
  NavBar,ActionCardCollection,MarketingFooter
} from './ui-components';

function App() {
  return (
    <div className="App">
        <NavBar width={"100vw"}/>
        <ActionCardCollection />
        <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;
