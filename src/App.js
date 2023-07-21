import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
// import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contactus from "./Components/Contactus";
import About from "./Components/About";
import Tour from "./Components/Tour";
import SingleProduct from "./Components/SingleProduct";
import EmailBooked from "./Components/EmailBooked";
import SignInn from "./Components/Login/SignInn";
import SignUp from "./Components/Login/SignUp";
import Dashboard from "./Components/Dashboard";
import Dashboardd from "./Components/Login/Dashboardd";
import Summary from "./Components/Login/Summary";



function App() {
  return (
    <div className="App">

      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="contactus" element={<Contactus></Contactus>}></Route>
        <Route path="tours" element={<Tour></Tour>}></Route>
        <Route path="/bookings/:id" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="booked" element={<EmailBooked></EmailBooked>}></Route>
        <Route path="signin" element={<SignInn></SignInn>}></Route>

        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="dashboard" element={<Dashboardd></Dashboardd>}>
          <Route path="summary" element={<Summary></Summary>}></Route>

          <Route path="admin" element={<Dashboard></Dashboard>}></Route>

        </Route>










      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
