import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types";

interface CadastroProps {
  onSalvar: (novaOcorrencia: Omit<Ocorrencia, "id" | "data">) => void;
  onVoltar: () => void;
}

export const CadastroScreen: React.FC<CadastroProps> = ({ onSalvar, onVoltar }) => {
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [risco, setRisco] = useState<"baixo" | "medio" | "alto">("baixo");

  const handleSalvar = () => {
    if (!local || !descricao) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    onSalvar({ local, descricao, risco });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapear Nova Área Crítica</Text>

      <Text style={styles.label}>Localização (Rodovia / Km / Sentido)</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ex: SP-270, Km 115 Oeste" 
        value={local} 
        onChangeText={setLocal} 
      />

      <Text style={styles.label}>Descrição do Estado do Ponto</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        placeholder="Ex: Mato alto obstruindo canaleta de drenagem." 
        value={descricao} 
        onChangeText={setDescricao} 
        multiline 
        numberOfLines={4} 
      />

      <Text style={styles.label}>Nível de Risco / Urgência</Text>
      <View style={styles.pickerContainer}>
        {(["baixo", "medio", "alto"] as const).map((nivel) => (
          <TouchableOpacity 
            key={nivel} 
            style={[styles.pickerButton, risco === nivel && styles.pickerSelected]} 
            onPress={() => setRisco(nivel)}
          >
            <Text style={[styles.pickerText, risco === nivel && styles.pickerTextSelected]}>
              {nivel.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.btnSalvar} onPress={handleSalvar}>
        <Text style={styles.btnText}>Salvar Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnVoltar} onPress={onVoltar}>
        <Text style={styles.btnVoltarText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 20, paddingTop: 40 },
  title: { fontSize: 22, fontWeight: "bold", color: "#1B3A4B", marginBottom: 24, textAlign: "center" },
  label: { fontSize: 14, fontWeight: "600", color: "#2C3E50", marginBottom: 8 },
  input: { borderWidth: 1, borderColor: "#BDC3C7", borderRadius: 6, padding: 12, marginBottom: 16, fontSize: 16 },
  textArea: { height: 80, textAlignVertical: "top" },
  pickerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 },
  pickerButton: { flex: 1, paddingVertical: 10, borderWidth: 1, borderColor: "#BDC3C7", borderRadius: 6, alignItems: "center", marginHorizontal: 4 },
  pickerSelected: { backgroundColor: "#27AE60", borderColor: "#27AE60" },
  pickerText: { fontWeight: "bold", color: "#7F8C8D" },
  pickerTextSelected: { color: "#FFF" },
  btnSalvar: { backgroundColor: "#27AE60", borderRadius: 6, alignItems: "center", marginTop: 12, paddingVertical: 14 },
  btnText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  btnVoltar: { marginTop: 16, alignItems: "center" },
  btnVoltarText: { color: "#E74C3C", fontWeight: "bold" },
});