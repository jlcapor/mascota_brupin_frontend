import "../../../styles/style.css";
const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        {" "}
        <i className="fas fa-paw"></i> zoo
      </a>
      <nav className="navbar">
        <a href="home">home</a>
        <a href="about">about</a>
        <a href="gallery">gallery</a>
        <a href="animal">animal</a>
        <a href="pricing">pricing</a>
        <a href="contact">contact</a>
      </nav>

      <div className="icons">
        <div id="login-btn" className="fas fa-user"></div>
        <div id="menu-btn" className="fas fa-bars"></div>
      </div>
    </header>
  );
};
export default Header;
