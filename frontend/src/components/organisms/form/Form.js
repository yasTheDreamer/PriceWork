import React, { useContext, useState, useEffect } from "react";
import FormFragement from "../../molecules/formFragement/FormFragement";
import "./Style.css";
import { Steps, Step } from "react-step-builder";
import { summaryContext } from "../../../contexts/SummaryContext";
import { factorsContext } from "../../../contexts/FactorsContext";
import { inputController } from "../../../js/FormController";

const Form = () => {
  const [Summary, setSummary] = useContext(summaryContext);
  const [Refresh, setRefresh] = useState(false);
  const [Factors, setFactors] = useContext(factorsContext);

  const [stats, setStats] = useState([
    {
      text: "min",
      value: "0",
    },
    {
      text: "max",
      value: "0",
    },
    {
      text: "average",
      value: "0",
    },
    {
      text: "Total records",
      value: "0",
    },
  ]);

  const populateStats = () => {
    stats.forEach((s, i) => {
      switch (s.text) {
        case "min":
          s.value = `${Summary.min}`;
          break;
        case "max":
          s.value = `${Summary.max}`;
          break;
        case "average":
          s.value = `${Summary.average}`;
          break;
        case "Total records":
          s.value = `${Summary.total}`;
          break;
      }
    });
  };

  useEffect(() => {
    console.log("popoulating stats ...");
    populateStats();
    setRefresh(!Refresh);
  }, [Summary]);

  useEffect(() => {
    inputController();
  }, [Refresh]);

  return (
    <div className="form__container">
      <div className="main__form">
        {/* <FactorPlusIcon /> */}
        <Steps>
          {Factors.map((f) => {
            return (
              <Step
                title={f.title}
                for={f.for}
                type={f.type}
                value={f.value}
                list={f.list}
                component={FormFragement}
              />
            );
          })}
        </Steps>

        <div className="formFragement__container">
          {stats.map((stat) => {
            return (
              <FormFragement
                title={stat.text}
                value={stat.value}
                summary={Refresh}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
