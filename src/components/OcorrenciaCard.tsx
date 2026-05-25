import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types";

interface CardProps {
  item: Ocorrencia;
  onPress: () => void;
}

export const OcorrenciaCard: React.FC<CardProps> = ({ item, onPress }) => {
  // Cor do indicador baseada no risco
  const corRisco = item.risco === "alto" ? "#E74C3C" : item.risco === "medio" ? "#F39C12" : "#2ECC71";

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.local}>{item.local}</Text>
        <View style={[styles.badge, { backgroundColor: corRisco }]}>
          <Text style={styles.badgeText}>{item.risco.toUpperCase()}</Text>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.data}>Data: {item.data}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "between",
    alignItems: "center",
    marginBottom: 8,
  },
  local: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50",
    flex: 1,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  badgeText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#7F8C8D",
    marginBottom: 8,
  },
  data: {
    fontSize: 12,
    color: "#BDC3C7",
    textAlign: "right",
  },
});