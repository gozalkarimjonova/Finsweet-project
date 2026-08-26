import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import ReadCase from "./pages/ReadCase";
import ReadBlog from "./pages/ReadBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="site-shell">

      <Header />

      <main className="site-content">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/features" element={<Features />} />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/blog" element={<Blog />} />

         

          <Route path="/contact" element={<Contact />} />

          <Route path="/work" element={<Work />} />

          <Route
            path="/case-study"
            element={<ReadCase />}
          />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
                <Route path="/read-blog" element={<ReadBlog/>}/>
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;