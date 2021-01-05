import React, { useContext, useCallback, useEffect } from "react";
import CustomTitle from "../../atoms/customTitle/CustomTitle";
import FactorInput from "../../atoms/factorInput/FactorInput";
import Button from "../../atoms/button/Button";
import "./Style.css";
import { summaryContext } from "../../../contexts/SummaryContext";
import { useForceUpdate } from "../../../utils/utilFunctions";

const FormFragement = (props) => {
  let element;
  const [Summary, setSummary] = useContext(summaryContext);
  const forceUpdate = useForceUpdate();

  const onClick = useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);

  useEffect(() => {}, [Summary]);

  if (props.value) {
    element = <CustomTitle for={props.for} title={props.value} />;
  } else {
    element = <FactorInput type={props.type} name={props.title} />;
  }
  if (props.value) {
    return (
      <div className="stats__container">
        <CustomTitle for={props.for} title={props.title} />
        {element}
      </div>
    );
  } else {
    return (
      <>
        <CustomTitle for={props.for} title={props.title} />
        {element}
        <div className="control__buttons">
          <Button
            type="button"
            value="back"
            operation="read"
            onClick={props.prev}
            list={props.list}
            update={onClick}
          />
          <Button
            type="button"
            value="next"
            operation="write"
            onClick={props.next}
            list={props.list}
            update={onClick}
          />
        </div>
      </>
    );
  }
};

export default FormFragement;
