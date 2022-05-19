import './App.css';
import { 
  NavBar,ActionCardCollection,MarketingFooter
} from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react'; // 認証に必要

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
