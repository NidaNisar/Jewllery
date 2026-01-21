import React, { useContext } from "react";
import "./Pages.css";
import { Apicontext } from "../context/Apicontext";
const Pages = ({ onChange }) => {
  const { currentpage, setcurrentpage, totalpages, settotalpages } =
    useContext(Apicontext);
  console.log("totalpages", totalpages);
  console.log("currentpage", currentpage);
  return (
    <div>
      <div className="pagination">
        <button
          disabled={currentpage === 1}
          onClick={() => onChange(currentpage - 1)}
        >
          Prev
        </button>

        {[...Array(totalpages)].map((_, i) => (
          <button
            key={i}
            className={currentpage === i + 1 ? "active" : ""}
            onClick={() => onChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentpage === totalpages}
          onClick={() => onChange(currentpage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pages;
