import './App.css';
import Footer from './Containers/footer';
import Header from './Containers/header';
import ContactUs from './Containers/contactus';
import CustomerBase from './Containers/customerbase';
import Engagements from './Containers/engagements';
import IoT from './Containers/iot';
import LogoText from './Containers/logotext';
import LoyalityFeature from './Containers/loyalityfeature';
import MProductlines from './Containers/mproductlines';
import OFeatures from './Containers/ofeatures';

function App() {
  return (
    <div className="App container">
      <Footer />
      <LogoText />
      <CustomerBase />
      <LoyalityFeature />
      <MProductlines />
      <OFeatures />
      <Engagements />
      <IoT />
      <ContactUs />
      <Header />
    </div>
  );
}

export default App;
