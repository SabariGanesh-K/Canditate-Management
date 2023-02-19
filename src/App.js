import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseProvider } from './context/FireBaseConfig';
import { Main } from './pages/Main';


function App() {
  return (
    <div className = "App">
   
    <BrowserRouter>
    <FirebaseProvider>
   
     <Main/>
   
     </FirebaseProvider>
     </BrowserRouter>
  
 </div>
  );
}

export default App;
