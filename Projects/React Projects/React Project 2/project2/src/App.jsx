import './App.css';
import Contact from './components/ContactForm/Contact.jsx';
import ContactUs from './components/Navigation/ContactUsFolder/ContactUs.jsx';
import Navigation from './components/Navigation/Navigation';

const App = () => {

  return(

    <div>
      <Navigation />
      <ContactUs />
      <Contact />
    </div>

  )

}

export default App;