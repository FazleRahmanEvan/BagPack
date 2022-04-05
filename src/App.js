
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componenets/About/About';
import Blogs from './componenets/Blogs/Blogs';
import CustomerReview from './componenets/CustomerReview/CustomerReview';

import DashBoard from './componenets/DashBoard/DashBoard';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/'element ={<Home></Home>}></Route>
          <Route path='/home'element ={<Home></Home>}></Route>
          <Route path='/customerreview'element ={<CustomerReview></CustomerReview>}></Route>
          <Route path='/dashboard'element ={<DashBoard></DashBoard>}></Route>
          <Route path='/blogs'element ={<Blogs></Blogs>}></Route>
          <Route path='/about'element ={<About></About>}></Route>
          </Routes>         
    </div>
  );
}

export default App;
