import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import ParkadeCard from "./ParkadeCard";

import { fetchParkadeInfo } from "../../../util/http";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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
    <GestureHandlerRootView className="mb-16">
      <BottomSheetModalProvider>
        <FlatList
          data={parkadeInfo}
          renderItem={({ item, index }) => (
            <ParkadeCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={{ fontSize: 24, marginVertical: 10 }}>
              Parking Nearby
            </Text>
          }
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            backgroundColor: "white",
          }}
        />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default ParkadeList;
