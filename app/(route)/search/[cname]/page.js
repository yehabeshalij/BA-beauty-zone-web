"use client";
import DoctorList from "../../../_components/DoctorList";
import GlobalApi from "../../../_utils/GlobalApi";

import React, { useEffect, useState } from "react";

function Search({ params }) {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    console.log(params.cname);
    getDoctors();
  }, []);

  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.cname).then((resp) => {
      setDoctorList(resp.data.data);
    });
  };
  return (
    <div className="mt-5">
      <DoctorList doctorList={doctorList} />
    </div>
  );
}

export default Search;
