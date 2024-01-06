import searchSvg from "../assets/images/search.svg";
import logo from "../assets/images/lws.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searched } from "../features/filters/FilterSlice";
import { useMatch, useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.filter);
  const [inputText, setInputText] = useState(searchText);
  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSearchText = (e) => {
    e.preventDefault();
    dispatch(searched(inputText));
    if (!match) {
      navigate("/");
    }
  };

  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <img className="h-10" src={logo} alt="Learn with Sumit" />
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <form onSubmit={handleSearchText}>
            <input
              className="outline-none border-none mr-2"
              type="search"
              name="search"
              placeholder="Search"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </form>
          <img
            className="inline h-4 cursor-pointer"
            src={searchSvg}
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
}
