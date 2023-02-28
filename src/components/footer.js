import Yt from "../Youtube.png";
import Ig from "../Instagram.png";

const Footer = () => {
    return <div className="footer">
        <a href="https://youtube.com/@cdsash"><div className="footer-items"><img src={Yt} alt="YT logo" /></div></a>
        <a href="https://instagram.com/cds.ash"><div className="footer-items"><img src={Ig} alt="IG logo" /></div></a>
    </div>
}

export default Footer;