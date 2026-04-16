import MedPanelPage from "./medpanel-layout";

const sections = [
  {
    id: "fisiopatologia",
    name: "Fisiopatologia e Conceito",
    color: "#6366F1",
    content: {
      title: "O Estado Diabetogênico da Gestação",
      blocks: [
        {
          type: "grid",
          title: "Divisão Metabólica",
          items: [
            { label: "Fase Anabólica (1ºT)", value: "Aumento da sensibilidade insulínica e estoque de glicogênio/lipídeos.", highlight: false },
            { label: "Fase Catabólica (2º/3ºT)", value: "Resistência insulínica progressiva mediada por hormônios placentários.", highlight: true },
            { label: "Hormônios-Chave", value: "Lactogênio Placentário Humano (hPL), Prolactina, Cortisol e Progesterona.", highlight: false }
          ]
        },
        {
          type: "obs",
          title: "Trial HAPO (2008)",
          text: "Estudo observacional que demonstrou uma relação linear entre glicemia materna e resultados adversos (macrossomia e cesárea), fundamentando os pontos de corte atuais da OMS e SBD."
        },
        {
          type: "grid",
          title: "Definições Críticas",
          items: [
            { label: "Overt Diabetes", value: "Diabetes pré-gestacional diagnosticado na 1ª consulta (hiperglicemia no 1º trimestre).", highlight: true },
            { label: "Diabetes Gestacional", value: "Intolerância aos carboidratos iniciada/diagnosticada após o 1º trimestre.", highlight: false }
          ]
        }
      ]
    }
  },
  {
    id: "diagnostico",
    name: "Rastreamento e Diagnóstico",
    color: "#0EA5E9",
    content: {
      title: "Algoritmo Nacional (SBD/MS)",
      blocks: [
        {
          type: "flow",
          title: "Fluxo de Rastreamento",
          steps: [
            { text: "1ª Consulta: Glicemia de Jejum (GJ)", color: "#6366F1" },
            { text: "GJ < 92 mg/dL: Normal → Repetir TTOG com 24-28 semanas", color: "#10B981" },
            { text: "GJ 92 - 125 mg/dL: DIAGNÓSTICO DE DMG", color: "#F59E0B" },
            { text: "GJ ≥ 126 mg/dL ou HbA1c ≥ 6,5%: DIABETES PRÉ-GESTACIONAL", color: "#EF4444" }
          ]
        },
        {
          type: "grid",
          title: "Valores do TTOG 75g (24-28 semanas)",
          items: [
            { label: "Jejum", value: "≥ 92 mg/dL", highlight: true },
            { label: "1 Hora", value: "≥ 180 mg/dL", highlight: true },
            { label: "2 Horas", value: "≥ 153 mg/dL", highlight: true }
          ]
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "Regra de Ouro",
          text: "APENAS UM valor alterado no TTOG ou na Glicemia de Jejum de 1º trimestre já fecha o diagnóstico de DMG."
        }
      ]
    }
  },
  {
    id: "repercussoes",
    name: "Repercussões Fetais",
    color: "#EC4899",
    content: {
      title: "Consequências da Hiperglicemia Fetal",
      blocks: [
        {
          type: "grid",
          title: "Pérolas de Prova",
          items: [
            { label: "Hipótese de Pedersen", value: "Glicemia materna elevada → Hiperinsulinismo fetal → Crescimento excessivo (Macrossomia).", highlight: true },
            { label: "Maturação Pulmonar", value: "A insulina antagoniza o cortisol, inibindo a produção de surfactante (Risco de SDR).", highlight: false },
            { label: "Policitemia", value: "Hipóxia crônica leva ao aumento de eritropoietina e risco de hiperbilirrubinemia pós-natal.", highlight: false },
            { label: "Septo Interventricular", value: "Risco de hipertrofia miocárdica assimétrica por ação anabólica da insulina.", highlight: true }
          ]
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "Patognomônico de DM Prévio",
          text: "A Síndrome de Regressão Caudal (agenesia de sacro/membros inferiores) é exclusiva do DM pré-gestacional devido à hiperglicemia no período de organogênese (1ºT)."
        }
      ]
    }
  },
  {
    id: "tratamento-mev",
    name: "Manejo Não Farmacológico",
    color: "#10B981",
    content: {
      title: "Dieta e Estilo de Vida",
      blocks: [
        {
          type: "grid",
          title: "Plano Alimentar",
          items: [
            { label: "Distribuição", value: "40-55% Carboidratos / 20% Proteínas / 25-35% Lipídeos.", highlight: false },
            { label: "Fracionamento", value: "5 a 6 refeições/dia para evitar picos pós-prandiais.", highlight: true },
            { label: "Atividade Física", value: "Caminhada ou natação (30 min/dia) aumenta sensibilidade periférica à insulina.", highlight: false }
          ]
        },
        {
          type: "grades",
          title: "Metas de Ganho de Peso Total",
          organ: "IMC Pré-gestacional",
          grades: [
            { grade: "Baixo Peso (< 18.5)", color: "#0EA5E9", items: ["12,5 a 18 kg"] },
            { grade: "Eutrófica (18.5 - 24.9)", color: "#10B981", items: ["11,5 a 16 kg"] },
            { grade: "Sobrepeso (25.0 - 29.9)", color: "#F59E0B", items: ["7,0 a 11,5 kg"] },
            { grade: "Obesa (≥ 30.0)", color: "#EF4444", items: ["5,0 a 9,0 kg"] }
          ]
        }
      ]
    }
  },
  {
    id: "farmacoterapia",
    name: "Terapia Farmacológica",
    color: "#F59E0B",
    content: {
      title: "Indicações e Metas",
      blocks: [
        {
          type: "decision",
          title: "Quando Iniciar Insulina?",
          decisions: [
            { condition: "Falha na MEV", color: "#F59E0B", actions: ["Após 1-2 semanas de dieta sem controle", "≥ 30% das medidas alteradas no perfil"] },
            { condition: "Crescimento Fetal", color: "#EF4444", actions: ["Circunferência abdominal fetal > p75 no USG (sinal de hiperinsulinismo)"] }
          ]
        },
        {
          type: "grid",
          title: "Alvos Glicêmicos (SBD)",
          items: [
            { label: "Jejum", value: "< 95 mg/dL", highlight: true },
            { label: "1h Pós-prandial", value: "< 140 mg/dL", highlight: true },
            { label: "2h Pós-prandial", value: "< 120 mg/dL", highlight: true }
          ]
        },
        {
          type: "obs",
          title: "Trial MiG (2008)",
          text: "Validou a Metformina como alternativa à insulina no DMG. Embora atravesse a placenta, não demonstrou teratogenia, mas 40% das pacientes precisam de resgate com insulina."
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "Contraindicação Metformina",
          text: "Evitar em casos de Restrição de Crescimento Intrauterino (RCIU), insuficiência renal materna ou hepática."
        }
      ]
    }
  },
  {
    id: "prenatal",
    name: "Assistência Pré-Natal",
    color: "#8B5CF6",
    content: {
      title: "Vigilância e Profilaxia",
      blocks: [
        {
          type: "grid",
          title: "Exames Adicionais",
          items: [
            { label: "Ecocardiografia Fetal", value: "Obrigatória para DM Pré-gestacional (Overt) pelo risco de malformações cardíacas.", highlight: true },
            { label: "USG Obstétrico", value: "Mensal para avaliação de crescimento (macrossomia) e líquido (polidrâmnio).", highlight: false },
            { label: "AAS e Cálcio", value: "DM1 e DM2 são fatores de alto risco para Pré-eclâmpsia; iniciar AAS (100-150mg) entre 12-16 semanas.", highlight: true }
          ]
        },
        {
          type: "obs",
          title: "Uso de Corticoides",
          text: "Se necessário para maturação pulmonar, deve-se aumentar a dose de insulina basal em 20-40% nos primeiros 3-5 dias devido à hiperglicemia reflexa."
        }
      ]
    }
  },
  {
    id: "parto",
    name: "Resolução e Pós-Parto",
    color: "#F97316",
    content: {
      title: "Timing e Reclassificação",
      blocks: [
        {
          type: "phases",
          title: "Momento da Interrupção",
          phases: [
            { number: "1", name: "DMG Controlado", color: "#10B981", items: ["Aguardar 39 semanas", "Pode-se aguardar termo se dieta isolada"] },
            { number: "2", name: "DMG em Insulina", color: "#F59E0B", items: ["Resolução entre 38 - 39 semanas"] },
            { number: "3", name: "Controle Inadequado", color: "#EF4444", items: ["Resolução entre 37 - 38 semanas", "Antes de 37s apenas se vitalidade alterada"] }
          ]
        },
        {
          type: "decision",
          title: "Manejo no Puerpério",
          decisions: [
            { condition: "Pós-parto imediato", color: "#6366F1", actions: ["Suspender insulina imediatamente no DMG", "Retornar dose pré-gestacional no DM Prévio"] },
            { condition: "Reclassificação", color: "#8B5CF6", actions: ["Realizar novo TTOG 75g após 6 semanas", "Avaliar persistência de DM2 ou Pré-Diabetes"] }
          ]
        }
      ]
    }
  }
];

export default function DiabetesGestacional() {
  return (
    <MedPanelPage
      sections={sections}
      specialty="Ginecologia e Obstetrícia"
      title="Diabetes Gestacional — Guia Completo"
    />
  );
}
