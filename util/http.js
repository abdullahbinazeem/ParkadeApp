import axios from "axios";

const BACKEND_URL =
  "https://fn-dbpkdta-g5is5uz3rgyo2.azurewebsites.net/api/GetParkadesData";

export const fetchParkadeInfo = async () => {
  const response = await axios.get(BACKEND_URL);

  const parkadeInfo = [];

  response.data.map((parkade, i) => {
    const parkadeObj = {
      id: i,
      name: parkade.name,
      occupied: parkade.occupied,
      empty: parkade.empty,
      total: parkade.total,
      general: parkade.children.find((child) => {
        return child.type === "GENERAL";
      }),
      accessible: parkade.children.find((child) => {
        return child.type === "ACCESSIBLE";
      }),
      max3hour: parkade.children.find((child) => {
        return child.type === "MAX3HOUR";
      }),
      free1hour: parkade.children.find((child) => {
        return child.type === "FREE1HOUR";
      }),
    };

    parkadeInfo.push(parkadeObj);
  });

  return parkadeInfo;
};
