import '../assets/styles/footer.css'

export const Footer = () => {

    const lenguage = navigator.language.startsWith("es")

  return (
    <p className='footer'>
        {lenguage ? "Copyright © Emiliano Gonzalez 2024 | Todos los derechos reservados | " : "Copyright © Emiliano Gonzalez 2024 | All rights reserved | "}
        <i className="bi bi-heart-fill color_red"></i>

        {lenguage ? " Hecho con amor " : " Made with love "}
        <i className="bi bi-heart-fill color_red"></i>
        {lenguage ? "  | Creado con React " : " | Created with React "}
        <i className="bi bi-lightning-charge-fill color_blue"></i>
    </p>
  )
}
