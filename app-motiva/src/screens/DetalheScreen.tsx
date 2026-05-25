import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types";

interface DetalheProps {
  ocorrencia: Ocorrencia;
  onVoltar: () => void;
}

export const DetalheScreen: React.FC<DetalheProps> = ({ ocorrencia, onVoltar }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Ponto de Vegetação</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Localização:</Text>
        <Text style={styles.valor}>{ocorrencia.local}</Text>

        <Text style={styles.label}>Nível de Risco Atual:</Text>
        <Text style={[styles.valor, styles.risco, { color: ocorrencia.risco === "alto" ? "#E74C3C" : "#F39C12" }]}>
          {ocorrencia.risco.toUpperCase()}
        </Text>

        <Text style={styles.label}>Data da última leitura:</Text>
        <Text style={styles.valor}>{ocorrencia.data}</Text>

        <Text style={styles.label}>Diagnóstico / Descrição:</Text>
        <Text style={styles.descricao}>{ocorrencia.descricao}</Text>
      </View>

      <TouchableOpacity style={styles.btnVoltar} onPress={onVoltar}>
        <Text style={styles.btnText}>Voltar para a Lista</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6FA", padding: 20, paddingTop: 40 },
  title: { fontSize: 22, fontWeight: "bold", color: "#1B3A4B", marginBottom: 24, textAlign: "center" },
  infoBox: { backgroundColor: "#FFF", padding: 20, borderRadius: 8, elevation: 2, marginBottom: 24 },
  label: { fontSize: 12, color: "#95A5A6", fontWeight: "bold", textTransform: "uppercase", marginBottom: 4 },
  valor: { fontSize: 18, color: "#2C3E50", marginBottom: 16, fontWeight: "500" },
  risco: { fontWeight: "bold" },
  descricao: { fontSize: 16, color: "#34495E", lineHeight: 22 },
  btnVoltar: { backgroundColor: "#1B3A4B", paddingVertical: 14, borderRadius: 6, alignItems: "center" },
  btnText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});