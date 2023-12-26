import Errorpage from "./components/Errorpage";
import SignIn from "./components/SignIn";
import Landing from "./landing"
import Privacy from "./components/privacy";
import Terms from "./components/Terms";





import {
  Routes, Route

} from 'react-router-dom'
import PricingPage from "./components/pricingstocks/PricingPage";


const App = () => (

  <Routes>
    <Route path="/" element={<Landing />}>

    </Route>
    <Route path="/signin" element={<SignIn />}>

    </Route>
    <Route path="/coming" element={<Errorpage />}>

    </Route>
    <Route path="/privacypolicy" element={<Privacy />}>

    </Route>
    <Route path="/terms" element={<Terms />}>

    </Route>

    <Route path="/pricingstocks" element={<PricingPage />}>

    </Route>

  </Routes>


);

export default App;
