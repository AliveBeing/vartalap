import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
function SearchBar() {
  const [{ contactSearch }, dispatch] = useStateProvider();
  return (
    <div className="bg-slate-200  flex py-3 pl-5 items-center gap-3 h-14">
      <div className="bg-slate-200 border-2 border-black flex items-center gap-2 px-2 py-1 rounded-lg flex-grow">
        <div>
          <BiSearchAlt2 className="text-black cursor-pointer text-lg" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm focus:outline-none text-black w-full"
            value={contactSearch}
            onChange={(e) =>
              dispatch({
                type: reducerCases.SET_CONTACT_SEARCH,
                contactSearch: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="pr-5 pl-3">
        <BsFilter className="text-black cursor-pointer text-xl" />
      </div>
    </div>
  );
}

export default SearchBar;
