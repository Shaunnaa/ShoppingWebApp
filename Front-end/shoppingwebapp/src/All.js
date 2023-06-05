
import './App.css';
import { BiHomeHeart } from "react-icons/bi";
import { BiFolderMinus } from "react-icons/bi";
import { RiArchiveLine } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { RiTeamLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";


const All = () => {
    return (  <section>
        <div className="Blogs">
          <div className="buttonleft">
            <div className="Homy"><button><Link to="/Ho"> <BiHomeHeart></BiHomeHeart>Home</Link>  </button></div>
            <div className="Status"><button > <RiArchiveLine></RiArchiveLine>  Status </button></div>
            <div className="Favorite"><button> <RiHeart3Line></RiHeart3Line>  Favourite </button></div>
            <div className="Seller"><button > <RiTeamLine></RiTeamLine>  Seller </button></div>
          </div>
          <div className="imageclothes">
          </div>
          <div className="imagecircle"></div>
          <div className="rectangle5"></div>
          <div className="Frame1"> 
            <div className="search"></div>
            <div className="search2">Search</div>
            <div className="cart"><button></button></div>
          </div>
          <div className="rectangle11"></div>
          <div className="rectangle12"></div>
          <div className="rec1"></div>
          <div className="rec2"></div>
          <div className="rec3"></div>
          <div className="rec4"></div>
          <div className="rec5"></div>
         <div className="recommend">Recommend</div>
         <div className="Pro">Promotion</div>
         <div className="usernameblog">
         <button><Link to="/Ho"> <BiHomeHeart></BiHomeHeart>Home</Link>  </button>
          </div>
         <div className="circle"></div>
        </div>
      </section> );
}
 
export default All;