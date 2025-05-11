import React, { useMemo, useRef, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Touchable,
  TouchableHighlight,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";

const { width } = Dimensions.get("window");

const images = {
  0: require("../../../assets/parkade-images/0.jpg"),
  1: require("../../../assets/parkade-images/1.jpg"),
  2: require("../../../assets/parkade-images/2.jpg"),
  3: require("../../../assets/parkade-images/3.jpg"),
  4: require("../../../assets/parkade-images/4.jpg"),
  5: require("../../../assets/parkade-images/5.jpg"),
};

const ParkadeBottomSheetCard = ({ item, index }) => {
  const { dismissAll } = useBottomSheetModal();

  const bottomSheetModalRef = useRef(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    dismissAll();
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          handlePresentModalPress();
        }}
      >
        <Image source={images[index]} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>

      <BottomSheetModal ref={bottomSheetModalRef}>
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>{item.name}</Text>
          <InfoRow
            icon="garage"
            label="Total Spots"
            value={`${item.empty} / ${item.total}`}
          />
          <InfoRow
            icon="car"
            label="General Spots"
            value={`${item.general.empty} / ${item.general.total}`}
          />
          <InfoRow
            icon="wheelchair-accessibility"
            label="Accessible Spots"
            value={`${item.accessible.empty} / ${item.accessible.total}`}
          />
          {item.max3hour && (
            <InfoRow
              icon="clock-outline"
              label="Max 3 Hour"
              value={`${item.max3hour.empty} / ${item.max3hour.total}`}
            />
          )}
          {item.free1hour && (
            <InfoRow
              icon="ticket-outline"
              label="Free 1 Hour"
              value={`${item.free1hour.empty} / ${item.free1hour.total}`}
            />
          )}
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <View style={styles.infoRow}>
    <Icon name={icon} size={20} color="#4B5563" style={{ marginRight: 8 }} />
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 12,
    borderRadius: 16,
    overflow: "hidden",
    height: 180,
    backgroundColor: "#CBD5E1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.3,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1E293B",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#334155",
  },
  value: {
    fontSize: 16,
    color: "#0F172A",
    marginLeft: 6,
  },
});

export default ParkadeBottomSheetCard;
