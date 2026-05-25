import { Ocorrencia } from "../types";

export const mockOcorrencias: Ocorrencia[] = [
  {
    id: 1,
    descricao: "Vegetação alta cobrindo a placa de sinalização de velocidade.",
    local: "Rodovia SP-270, Km 114 Sul",
    risco: "alto",
    data: "2026-05-20"
  },
  {
    id: 2,
    descricao: "Mato avançando sobre o acostamento, reduzindo a visibilidade.",
    local: "Rodovia SP-270, Km 128 Norte",
    risco: "medio",
    data: "2026-05-22"
  },
  {
    id: 3,
    descricao: "Gramado do canteiro central necessitando de roçada preventiva.",
    local: "Rodovia BR-116, Km 45",
    risco: "baixo",
    data: "2026-05-24"
  }
];