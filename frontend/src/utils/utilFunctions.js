import React, { useState, useCallback } from "react";
import User from "../models/User";
import { getCities, getJobs, getStates, getZipCodes } from "../api/addressApi";
import { getToken } from "../api/userApi";
import { v4 as uuidv4 } from "uuid";
import { RAPID_API_KEY, DEV_ROOT } from "./env";
import $ from "jquery";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../config/Config";

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth;

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

export const populateList = (type, state, city) => {
  const dataListInput = document.querySelector("#factor");
  dataListInput.classList.add("loading");
  const container = document.querySelector(".factorInput__container");

  const dataList =
    document.getElementById(dataListInput.getAttribute("list")) ||
    document.createElement("datalist");
  dataList.id = dataListInput.getAttribute("list");

  let prefix = dataListInput.value;

  let List = null;

  switch (type) {
    case "State":
      getStates(RAPID_API_KEY, null, null, prefix)
        .then((res) => {
          List = res.data;
          return List;
        })
        .then(() => {
          populateDataList(List, dataList, container, dataListInput, type);
        });
      break;

    case "Job":
      getJobs(prefix)
        .then((res) => {
          List = res;
          return List;
        })
        .then(() => {
          populateDataList(List, dataList, container, dataListInput, type);
        });
      break;

    case "City":
      if (state)
        getCities(RAPID_API_KEY, state, prefix)
          .then((res) => {
            List = res.data;
            return List;
          })
          .then(() => {
            populateDataList(List, dataList, container, dataListInput, type);
          });
      break;

    case "ZipCode":
      if (state && city)
        getZipCodes(state, city)
          .then((res) => {
            List = res.zip_codes;
            return List;
          })
          .then(() => {
            populateDataList(List, dataList, container, dataListInput, type);
          });
      break;
  }
};

function populateDataList(List, dataList, container, dataListInput, type) {
  if (List)
    List.forEach((element) => {
      let existingOption = null;
      let option = null;

      switch (type) {
        case "State":
          existingOption = document.querySelector(`#${element.name}`);
          option = document.createElement("option");
          option.value = element.name;
          option.text = element.name;
          option.id = element.name;
          option.classList.add(element.isoCode);

          if (!existingOption) dataList.append(option);
          break;

        case "City":
          existingOption = document.querySelector(`#${element.name}`);
          option = document.createElement("option");
          option.value = element.name;
          option.text = element.name;
          option.id = element.name;

          if (!existingOption) dataList.append(option);
          break;

        case "Job":
          existingOption = document.querySelector(
            `#${element.normalized_job_title}`
          );
          option = document.createElement("option");
          option.value = element.normalized_job_title;
          option.text = element.normalized_job_title;
          option.id = element.normalized_job_title;

          if (!existingOption) dataList.append(option);
          break;
        case "ZipCode":
          option = document.createElement("option");
          option.value = element;
          option.text = element;

          dataList.append(option);
      }
    });

  if (dataList.childElementCount) container.append(dataList);
  dataListInput.setAttribute("autocomplete", "off");

  dataListInput.classList.remove("loading");
}

export const isSelected = () => {
  const input = document.querySelector("#factor");
  const name = input.name;

  if (name == "Salary") return true;

  if (input.getAttribute("list")) {
    const datalist = document.querySelector(`#${input.getAttribute("list")}`);
    const value = input.value;
    const option = $(datalist).find(`option[value="${value}"]`);
    if (option != null && option.length > 0) return true;
  }

  return false;
};

const getCustomToken = () => {
  let generatedUUID = uuidv4();
  let uuid = window.localStorage.getItem("uuid");

  if (uuid) {
    return getToken(DEV_ROOT, uuid);
  } else {
    window.localStorage.setItem("uuid", generatedUUID);
    uuid = window.localStorage.getItem("uuid");
    return getToken(DEV_ROOT, uuid);
  }
};

export const signIn = () => {
  return getCustomToken().then((customToken) => {
    return auth().signInWithCustomToken(customToken.token);
  });
};

export const windowController = (e) => {
  e.preventDefault();
  auth().currentUser.delete();
};
