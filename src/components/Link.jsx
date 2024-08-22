import "../assets/styles/link.css";
import PropTypes from "prop-types";

export const Link = ({ link, text, icon, color }) => {
  Link.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  const clickHandler = () => {
    text != "Email" ? window.open(link, "_blank"): window.location.href = `mailto:${link}`;
  };

  return (
    <div className="link_container" onClick={clickHandler}>
      <i className={icon + " link_icon" + " " + color}></i>
      <a
        href={text.toLowerCase() === "email" ? `mailto:${link}` : link}
        className={"link"}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};
