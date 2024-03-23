import "./App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import FlagCard from "./FlagCard.jsx";
import SearchBox from "./SearchBox.jsx";

function App() {
  const [flags, setFlags] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  let flag_ref = useRef([]);

  useEffect(() => {
    fetchApi(api_url);
  }, []);

  useEffect(() => {
    if (searchParam !== "") filterSearch();
    else setFlags(flag_ref.current);
  }, [searchParam]);

  const api_url = `https://restcountries.com/v3.1/all`;

  const fetchApi = async (url) => {
    try {
      const resp = await axios.get(url);
      setFlags(resp.data);
      flag_ref.current = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const filterSearch = () => {
    if (flag_ref.current.length !== 0) {
      let new_flag_list = flag_ref.current.filter(
        (item) =>
          item.name.common.toLowerCase().includes(searchParam.toLowerCase()) ||
          item.name.common === searchParam
      );
      setFlags(new_flag_list);
    } else {
      setFlags([]);
    }
  };

  return (
    <div className="App">
      <SearchBox search={searchParam} handleSearch={setSearchParam} />
      <div className="FlagList">
        {flags.length === 0 ? (
          <></>
        ) : (
          flags.map((item) => {
            return (
              <FlagCard
                key={item.name.official}
                name={item.name.common}
                img_src={item.flags.svg}
                alt={item.flags.alt}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
