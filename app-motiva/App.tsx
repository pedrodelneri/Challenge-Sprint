import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { mockOcorrencias } from "./src/data/mockData";
import { CadastroScreen } from "./src/screens/CadastroScreen";
import { DetalheScreen } from "./src/screens/DetalheScreen";
import { ListaScreen } from "./src/screens/ListaScreen";
import { Ocorrencia } from "./src/types";

export default function App() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>(mockOcorrencias);
  const [telaAtual, setTelaAtual] = useState<"LISTA" | "CADASTRO" | "DETALHE">("LISTA");
  const [ocorrenciaSelecionada, setOcorrenciaSelecionada] = useState<Ocorrencia | null>(null);

  const handleSalvarOcorrencia = (nova: Omit<Ocorrencia, "id" | "data">) => {
    const novoItem: Ocorrencia = {
      ...nova,
      id: Date.now(),
      data: new Date().toISOString().split("T")[0],
    };

    setOcorrencias([novoItem, ...ocorrencias]);
    setTelaAtual("LISTA");
  };

  const handleVerDetalhes = (item: Ocorrencia) => {
    setOcorrenciaSelecionada(item);
    setTelaAtual("DETALHE");
  };

  return (
    <SafeAreaView style={styles.container}>
      {telaAtual === "LISTA" && (
        <ListaScreen 
          ocorrencias={ocorrencias} 
          onSelecionar={handleVerDetalhes} 
          onNavegarCadastro={() => setTelaAtual("CADASTRO")} 
        />
      )}

      {telaAtual === "CADASTRO" && (
        <CadastroScreen 
          onSalvar={handleSalvarOcorrencia} 
          onVoltar={() => setTelaAtual("LISTA")} 
        />
      )}

      {telaAtual === "DETALHE" && ocorrenciaSelecionada && (
        <DetalheScreen 
          ocorrencia={ocorrenciaSelecionada} 
          onVoltar={() => setTelaAtual("LISTA")} 
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
});