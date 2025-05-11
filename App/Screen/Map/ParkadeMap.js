import React, { useCallback, useEffect, useRef, useSt, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps";
import { useFocusEffect } from "@react-navigation/native";

import MapViewStyle from "./MapViewStyle.json";
import { markers } from "./markers";

import * as Location from "expo-location";

const INITIAL_REGION = {
  latitude: 48.42630017014727,
  longitude: -123.36488504413165,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

const ParkadeMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  });

  const mapRef = useRef();

  return (
    <View style={styles.container}>
      <MapView
        region={INITIAL_REGION}
        customMapStyle={MapViewStyle}
        style={styles.map}
        ref={mapRef}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            tappable={true}
            onPress={() => {
              console.log("pressed " + marker.name);
            }}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ParkadeMap;
