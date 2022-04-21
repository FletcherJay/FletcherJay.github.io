import './App.css';
import Mainnav from './Components/Mainnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectcard from './Components/Projectcard';
import Bonsai from './Components/Bonsai';

const App = () => {



  return (
    <div>
      <Bonsai/>
      <Mainnav/>
      
      <Projectcard/>
    </div>
  );
}

export default App;
