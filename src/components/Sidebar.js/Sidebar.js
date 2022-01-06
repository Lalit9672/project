import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import "./sidebar.css";

const Sidebar = () => {
  const [news, setNews] = useState([]);
  useEffect(async () => {
    const q = query(collection(db, "news"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      setNews(array);
    });
  }, []);

  return (
    <>
      <div className="rightside">
        <div className="searchdiv">
          <h3>SEARCH VOLUME/ISSUE/RESEARCH PAPER</h3>
          <hr />
          <input type="text" />
          <button>Search</button>
        </div>
        <div id="news">
          <h3>News</h3>
          <hr />

          <div className="notice-section">
            <marquee
              behavior="scroll"
              direction="up"
              onmouseout="this.start()"
              onmouseover="this.stop()"
              scrolldelay="1"
              scrollamount="1"
            >
              {news.map(({ title, description }) => (
                <>
                  <a href="https://www.aravalieducation.org">{title}</a>
                  <p id="newsupdate">{description}</p>
                </>
              ))}
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
