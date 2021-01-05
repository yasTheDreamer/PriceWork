import React, { useState, useCallback } from "react";
import User from "../models/User";
import { getStates } from "../api/addressApi";
import { RAPID_API_KEY } from "./env";

export const constructUser = (req) => {
  let user = new User();

  if (req.body.salary) user.withSalary(req.body.salary);
  if (req.body.jobTitle) user.withJobTitle(req.body.jobTitle);
  if (req.body.experience) user.withYearsOfExperience(req.body.experience);
  if (req.body.email) user.withEmailAdress(req.body.email);
  if (req.body.socialLogin1) user.withSocialInfo1Login(req.body.socialLogin1);
  if (req.body.socialLogin2) user.withSocialInfo1Login(req.body.socialLogin2);
  if (req.body.address.city) user.withCity(req.body.address.city);
  if (req.body.address.state) user.withState(req.body.address.state);
  if (req.body.address.zipCode) user.withZipCode(req.body.address.zipCode);

  return user.build();
};

export function useForceUpdate() {
  const [, forceUpdate] = useState();

  return useCallback(() => {
    forceUpdate((s) => !s);
  }, []);
}

export const populateStateList = () => {
  const dataListInput = document.querySelector("#factor");
  const container = document.querySelector(".factorInput__container");

  const dataList = document.createElement("datalist");
  dataList.id = dataListInput.getAttribute("list");

  let statesList = [];
  let i = 0;

  for (i; i < 60; i += 10) {
    getStates(RAPID_API_KEY, i, 10).then((res) => {
      statesList.push(res.data);
    });
  }

  statesList.forEach((state) => {
    let option = document.createElement("option");
    option.value = state.name;
    dataList.append(option);
  });

  container.append(dataList);
};
