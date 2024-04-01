import "./style.css";
import sfimg from "../../assets/salesforceIcon.png";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <>
            <div className="menu">
                <div className="sfimg">
                    <img className="salesforceIcon" src={sfimg} alt="SalesforceIcon"/>
                </div>
                <div className="aHLCT">
                    {/* <Link to= "/about">About</Link> */}<h1>About</h1>
                    <Link to= '/'>Home</Link><h1>Home</h1>
                </div>                
                <div className="botao">
                    <button className="butao"><Link to= '/Login'>Log in</Link></button>
                </div>
            <div className="sfimg">
                <Link to= ''><img className="salesforceIcon" src={sfimg} alt="SalesforceIcon"></img></Link>   
            </div>
                <div className="aHLCT">
                    <Link to= "/About">About</Link>
                    <Link to= "/">Home</Link>
                </div>
                 <div className="botao">
                    <button className="butao"><Link to= '/Login'>Log in</Link></button>
                 </div>
            </div>
        </>
    )
}

export default Menu;
