 import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ brandLogo, name, date, post, tag1, tag2, pay, location }) => {
  return (
    <div className="card">

      <div className="top">
        <img src={brandLogo} alt={name} />

        <button>
          Save <Bookmark size={18} />
        </button>
      </div>

      <div className="center">
        <h3>
          {name} <span>{date}</span>
        </h3>

        <h2>{post}</h2>

        <div>
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>

        <button>Apply Now</button>
      </div>

    </div>
  );
};

export default Card;