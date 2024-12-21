import { Link } from "./components/Link";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import "./assets/styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import useViewportHeight from "./hook/useViewportHeight";

function App() {
  const tittle = navigator.language.startsWith("es") ? "Mis Links" : "My Links";

  useViewportHeight();

  useEffect(() => {
    document.title = tittle;
  }, [tittle]);

  return (
    <div className="main_container">
      <h1 className="title">{tittle}</h1>
      <div className="links_box">
        <Link
          link="https://www.linkedin.com/in/emiigonzalez33/"
          text="LinkedIn"
          icon="bi bi-linkedin"
          color="color_blue"
        />
        <Link
          link="https://portafolio-emiliano-gonzalez-s-projects.vercel.app/"
          text="Portafolio"
          icon="bi bi-globe"
          color="color_yellow"
        />
        <Link
          link="https://github.com/EmiiGonzalez"
          text="GitHub"
          icon="bi bi-github"
          color="color_red"
        />
        <Link
          link="https://tech-library-iota.vercel.app/"
          text="TechLibrary"
          icon="bi bi-book"
          color="color_pink"
        />
        <Link
          link="emigonzalez3333@gmail.com"
          text="Email"
          icon="bi bi-envelope-at-fill"
          color="color_green"
        />
        <Link
          link="https://www.oracle.com/ar/education/oracle-next-education/"
          text="Oracle ONE"
          icon="bi bi-code-slash"
          color="color_red"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
