import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Paid from "./components/Cabi/Paid";
import Spravocnik from "./components/Cabi/Spravocnik";
import PhoneVerify from "./components/PhoneVerify";
import ScrollToTop from "./components/ScrollToTop";
import Claims from "./pages/Cabinet/Claims";
import Finans from "./pages/Cabinet/Finans";
import MyShop from "./pages/Cabinet/MyShop";
import Options from "./pages/Cabinet/Options";
import Post from "./pages/Cabinet/Post";
import Profile from "./pages/Cabinet/Profile";
import SalPro from "./pages/Cabinet/SalPro";
import Servises from "./pages/Cabinet/Servises";
import Spec from "./pages/Cabinet/Spec";
import Stats from "./pages/Cabinet/Stats";
import Contact from "./pages/Contact";
import Directory from "./pages/Directory";
import DirectoryIn from "./pages/DirectoryIn";
import ExpertInfo from "./pages/ExpertInfo";
import Experts from "./pages/Experts";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import NewOrder from "./pages/NewOrder";
import OrderAuthor from "./pages/OrderAuthor";
import OrderIn from "./pages/OrderIn";
import Orders from "./pages/Orders";
import Questions from "./pages/Questions";
import QuestionsIn from "./pages/QuestionsIn";
import Registration from "./pages/Registration";
import Servic from "./pages/Servic";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Verify" element={<PhoneVerify />} />
          <Route path="/Servic" element={<Servic />} />
          <Route path="/NewOrder" element={<NewOrder />} />
          <Route path="/OrderAuthor" element={<OrderAuthor />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Experts" element={<Experts />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Directory" element={<Directory />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/OrderIn" element={<OrderIn />} />
          <Route path="/ExpertInfo" element={<ExpertInfo />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/QuestionsIn" element={<QuestionsIn />} />
          <Route path="/DirectoryIn" element={<DirectoryIn />} />



          <Route path="/Spravocnik" element={<Spravocnik />} />
          <Route path="/Paid" element={<Paid />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Options" element={<Options />} />
          <Route path="/Finans" element={<Finans />} />
          <Route path="/Servises" element={<Servises />} />
          <Route path="/SalPro" element={<SalPro />} />
          <Route path="/MyShop" element={<MyShop />} />
          <Route path="/Claims" element={<Claims />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/Spec" element={<Spec />} />
        </Routes>
        <ScrollToTop />
      </HashRouter>
    </>
  );
};

export default App;
