import React, { useState } from "react";
import { SearchInput } from "../Form/Input";
import { RoundBtn } from "../Form/Btn";

function Search(props) {

    const [value, setValue] = useState("")


  const handleOnchange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <>
      <div className="mb-[20px] flex gap-5">
        <div className="flex-1">
          <SearchInput
            // value={value}
            handleOnchange={(e) => handleOnchange(e)}
            placeholder="Search through mentions, autors & domain...."
            // rel_styles={{ width: "70%" }}
          />
        </div>
        <RoundBtn
          handleClick={() => props.handleSearch(value)}
          disabled={props.loading.login}
          title="Search"
          styles={{
            width: "max-content",
            padding: "0px 15px",
            backgroundColor: "#007bff",
            height: "40px",
          }}
        />
      </div>
    </>
  );
}

export default Search;
