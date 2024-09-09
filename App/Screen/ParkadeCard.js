import { View, Text } from "react-native";
import React from "react";

const ParkadeCard = ({ item }) => {
  return (
    <View className="p-3 m-3 bg-slate-100 rounded-md">
      <Text className="text-xl font-bold mb-2">{item.name}:</Text>
      <View className="flex-row">
        <Text>Total Spots Available - </Text>
        <Text>
          {item.empty} / {item.total}
        </Text>
      </View>
      <View className="flex-row">
        <Text>General Spots Available - </Text>
        <Text>
          {item.general.empty} / {item.general.total}
        </Text>
      </View>
      <View className="flex-row">
        <Text>Accessible Spots Available - </Text>
        <Text>
          {item.accessible.empty} / {item.accessible.total}
        </Text>
      </View>
      {item.max3hour && (
        <View className="flex-row">
          <Text>Max 3 Hour Spots Available - </Text>
          <Text>
            {item.max3hour?.empty} / {item.max3hour?.total}
          </Text>
        </View>
      )}
      {item.free1hour && (
        <View className="flex-row">
          <Text>Free 1 Hour Spots Available - </Text>
          <Text>
            {item.free1hour?.empty} / {item.free1hour?.total}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ParkadeCard;
