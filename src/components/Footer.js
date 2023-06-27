
import { useGlobalContext } from "../Context";
const Footer = () => {

    var today = new Date();

    return <section className="copy-right">
        
        <p>&copy; Copyright { today.getFullYear()} - Developer Rehan Raza</p>

    </section>

}
export default Footer;  