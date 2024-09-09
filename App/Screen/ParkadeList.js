import { FlatList } from "react-native";
import React from "react";
import ParkadeCard from "./ParkadeCard";

import { fetchParkadeInfo } from "../../util/http";
import { useEffect, useState } from "react";

const ParkadeList = () => {
  const [parkadeInfo, setParkadeInfo] = useState([]);
  useEffect(() => {
    getParkade = async () => {
      const parkadeInfo = await fetchParkadeInfo();
      setParkadeInfo(parkadeInfo);
    };

    getParkade();
  }, []);

  return (
    <FlatList
      data={parkadeInfo}
      renderItem={({ item }) => <ParkadeCard item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    />
  );
};

export default ParkadeList;
