import React from "react";
import "../css/work.css";
import Cathree from "./Cathree"

import Catone from "./Catone";
import Catwo from "./Catwo"
import { Link } from "react-router-dom";
const Work = () => {
  
  return (
    <>
      <div className="work">
        <div className="work-te">
          <h1>Work.</h1>
          <Link to="/home">
          Home
          </Link>
          <div className="line1"></div>
        </div>
        <div className="catalogue">
          <button>
            <Catone />
          </button>
          <button>
            <Catwo/>
          </button>
<button>
         <Cathree/></button>
        </div>
      </div>
    </>
  );
};

export default Work;
