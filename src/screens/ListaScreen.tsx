import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OcorrenciaCard } from "../components/OcorrenciaCard";
import { Ocorrencia } from "../types";

interface ListaProps {
  ocorrencias: Ocorrencia[];
  onSelecionar: (ocorrencia: Ocorrencia) => void;
  onNavegarCadastro: () => void;
}

export const ListaScreen: React.FC<ListaProps> = ({ ocorrencias, onSelecionar, onNavegarCadastro }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de Áreas Verdes - Motiva</Text>
      
      <FlatList
        data={ocorrencias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OcorrenciaCard item={item} onPress={() => onSelecionar(item)} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum ponto crítico mapeado.</Text>}
      />

      <TouchableOpacity style={styles.botaoFlutuante} onPress={onNavegarCadastro}>
        <Text style={styles.textoBotao}>+ Nova Área</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6FA", padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#1B3A4B", marginBottom: 16, textAlign: "center", marginTop: 20 },
  empty: { textAlign: "center", color: "#7F8C8D", marginTop: 40 },
  botaoFlutuante: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "#27AE60",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
  },
  textoBotao: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
});