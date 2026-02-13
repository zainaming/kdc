import { Home } from "./Pages/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import TermsAndConditions from "./Pages/Policies/TermsAndConditions"
import PrivacyPolicy from "./Pages/Policies/PrivacyPolicy"
import HIPAACompliance from "./Pages/Policies/HIPAACompliance"
import ContactUs from "./Pages/Contact/ContactUs"
import GetStarted from "./Pages/Contact/GetStarted"
import Blogs from "./Pages/Blog/Blogs"
import About from "./Pages/About/About"
import Works from "./Pages/How-Works/Works"
import Service from "./Pages/Services/Service"
import BlogDetail from "./Pages/Blog/BlogDetail"
import ServiceDetail from "./Pages/Services/ServiceDetail"
import ScrollToTop from './components/ScrollToTop';





function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/hipaa-compliance" element={<HIPAACompliance />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/how-its-works" element={<Works />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
