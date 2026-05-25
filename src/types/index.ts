export type Ocorrencia = {
  id: number;
  descricao: string; // Ex: "Capina necessária no canteiro central"
  local: string;     // Ex: "Rodovia BR-116, Km 42"
  risco: "baixo" | "medio" | "alto"; // Nível de urgência baseado no crescimento
  data: string;      // Data da identificação
};