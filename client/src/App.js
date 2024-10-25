import './App.css';
import Form from './Components/Form/Form';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateUser from './Components/CreateUser/CreateUser';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update' element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
