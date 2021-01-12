import React, { useState, useContext } from "react";
import "./Style.css";
import { populateList } from "../../../utils/utilFunctions";
import { addressContext } from "../../../contexts/AddressContext";

const FactorInput = (props) => {
  const [state, setState] = useState();
  const [Address, setAddress] = useContext(addressContext);
  let [Count, setCount] = useState(0);

  const populateLists = async () => {
    const input = document.querySelector("#factor");
    if (
      input.name != "Salary" &&
      input.name != "ZipCode" &&
      input.value.length == 4
    ) {
      populateList(props.name, Address.state, Address.city);
    }

    if (input.name == "ZipCode" && Count < 1) {
      populateList(props.name, Address.state, Address.city);
      setCount((c) => c + 1);
    }
  };

  return (
    <div className="factorInput__container">
      <input
        type={props.type}
        placeholder="type your factor value"
        name={props.name}
        id="factor"
        list={props.list}
        onKeyUp={() => {
          populateLists();
        }}
      />
      <label id="error" hidden>
        you should pick an option from the list
      </label>
    </div>
  );
};

export default FactorInput;
