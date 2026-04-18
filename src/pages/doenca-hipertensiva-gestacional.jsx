import MedPanelPage from "./medpanel-layout";

const sections = [
  {
    id: "classificacao",
    name: "Definições e Classificação",
    color: "#6366F1",
    content: {
      title: "Classificação das Síndromes Hipertensivas",
      blocks: [
        {
          type: "grid",
          title: "Fenótipos Clínicos",
          items: [
            { label: "Pré-eclâmpsia (PE)", value: "Hipertensão após 20 sem + proteinúria ou disfunção orgânica/alvo.", highlight: true },
            { label: "Hipertensão Crônica", value: "Identificada antes de 20 semanas ou pré-gestacional.", highlight: false },
            { label: "PE sobreposta", value: "Piora súbita da PA ou surgimento de proteinúria/alvo em hipertensa crônica.", highlight: true },
            { label: "Hipertensão Gestacional", value: "Hipertensão após 20 sem SEM proteinúria ou sinais de gravidade.", highlight: false }
          ]
        },
        {
          type: "obs",
          title: "Pérola de Prova",
          text: "A Hipertensão Gestacional tem diagnóstico retrospectivo; se a PA normalizar até 12 semanas pós-parto, confirma-se. Se persistir, era Hipertensão Crônica mascarada pelo 1º trimestre."
        }
      ]
    }
  },
  {
    id: "fisiopatologia",
    name: "Fisiopatologia e Risco",
    color: "#0EA5E9",
    content: {
      title: "O Defeito da Placentação",
      blocks: [
        {
          type: "grid",
          title: "Fatores de Risco (ACOG)",
          items: [
            { label: "Alto Risco", value: "PE prévia, DM1 ou DM2, Nefropatia, Doença Autoimune (SAF/LES), Hipertensão Crônica.", highlight: true },
            { label: "Risco Moderado", value: "Nuliparidade, Obesidade (IMC > 30), História familiar, Idade > 35 anos, Gemelaridade.", highlight: false }
          ]
        },
        {
          type: "obs",
          title: "Mecanismo Central",
          text: "Ausência da 2ª onda de migração trofoblástica (16-20 sem) -> Manutenção da alta resistência nas artérias uterinas -> Isquemia placentária -> Liberação de fatores antiangiogênicos (sFlt-1) -> Disfunção endotelial sistêmica."
        }
      ]
    }
  },
  {
    id: "diagnostico",
    name: "Critérios Diagnósticos",
    color: "#EC4899",
    content: {
      title: "Critérios de Pré-eclâmpsia",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Diagnóstico de PA",
          text: "PA ≥ 140/90 mmHg em duas medidas com intervalo de 4h, OU PA ≥ 160/110 mmHg (uma única medida basta para iniciar conduta)."
        },
        {
          type: "grid",
          title: "Proteinúria ou Alvo",
          items: [
            { label: "Proteinúria", value: "≥ 300mg em 24h ou Relação Proteína/Creatinina (RPC) ≥ 0,3.", highlight: true },
            { label: "Plaquetopenia", value: "< 100.000 /mm³.", highlight: true },
            { label: "Função Hepática", value: "Transaminases 2x acima do valor de referência.", highlight: false },
            { label: "Disfunção Renal", value: "Creatinina > 1,1 mg/dL ou dobro da basal.", highlight: false },
            { label: "Sintomas Visuais", value: "Escotomas, turvação visual, cefaleia persistente.", highlight: true }
          ]
        }
      ]
    }
  },
  {
    id: "prevencao",
    name: "Predição e Prevenção",
    color: "#F59E0B",
    content: {
      title: "Estratégia de Redução de Risco",
      blocks: [
        {
          type: "obs",
          title: "ASPRE Trial",
          text: "O trial demonstrou que o uso de AAS 150mg/dia iniciado antes de 16 semanas reduz em 62% a PE pré-termo em pacientes de alto risco."
        },
        {
          type: "decision",
          title: "Conduta Profilática",
          decisions: [
            {
              condition: "Paciente com 1 fator de ALTO risco ou ≥ 2 MODERADOS",
              color: "#F59E0B",
              actions: [
                "AAS 100-150 mg/dia (iniciar 12-16 sem até 36 sem)",
                "Carbonato de Cálcio 1,5 - 2,0 g/dia (se baixa ingestão dietética)",
                "Doppler de Artérias Uterinas: Avaliar presença de incisura protodiastólica bilateral."
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "gravidade",
    name: "Sinais de Gravidade",
    color: "#EF4444",
    content: {
      title: "Pré-eclâmpsia Grave",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Critérios de Gravidade",
          text: "Presença de: PA ≥ 160/110, Eclâmpsia, Iminência de eclâmpsia, Edema agudo de pulmão ou Síndrome HELLP."
        },
        {
          type: "grades",
          title: "Síndrome HELLP (Critérios de Tennessee)",
          organ: "Laboratório",
          grades: [
            { grade: "H", color: "#EF4444", items: ["Hemólise", "Esquistócitos em sangue periférico", "Bilirrubina Total > 1,2", "LDH > 600 U/L"] },
            { grade: "EL", color: "#F59E0B", items: ["Elevated Liver Enzymes", "TGO (AST) ≥ 70 U/L"] },
            { grade: "LP", color: "#6366F1", items: ["Low Platelets", "Plaquetas < 100.000 /mm³"] }
          ]
        }
      ]
    }
  },
  {
    id: "sulfatacao",
    name: "Prevenção de Crises",
    color: "#10B981",
    content: {
      title: "Protocolo de Sulfatação",
      blocks: [
        {
          type: "obs",
          title: "Magpie Trial",
          text: "Redução de 58% no risco de eclâmpsia e redução da mortalidade materna. Padrão-ouro na PE grave."
        },
        {
          type: "phases",
          title: "Esquema Zuspan (IV)",
          phases: [
            { number: "1", name: "Ataque", color: "#10B981", items: ["4g IV (lento: 15-20 min)"] },
            { number: "2", name: "Manutenção", color: "#6366F1", items: ["1g/h IV em bomba de infusão", "Manter por 24h após o parto ou última crise"] }
          ]
        },
        {
          type: "alert",
          color: "#F59E0B",
          title: "Vigilância de Toxicidade",
          text: "Monitorar: Diurese (> 25ml/h), Reflexo patelar (presente) e FR (> 12-14 irpm)."
        },
        {
          type: "decision",
          title: "Antídoto",
          decisions: [
            {
              condition: "Sinais de Intoxicação / Parada Respiratória",
              color: "#EF4444",
              actions: ["Gluconato de Cálcio 10% (10ml IV)"]
            }
          ]
        }
      ]
    }
  },
  {
    id: "manejo",
    name: "Conduta Obstétrica",
    color: "#8B5CF6",
    content: {
      title: "Momento do Parto",
      blocks: [
        {
          type: "flow",
          title: "Fluxo de Decisão",
          steps: [
            { text: "PE Leve: Expectante até 37 semanas", color: "#10B981" },
            { text: "PE Grave ≥ 34 sem: Estabilizar e Interromper", color: "#F59E0B" },
            { text: "PE Grave < 34 sem: Corticoide + Vigilância (se estável)", color: "#0EA5E9" },
            { text: "Deterioração Materna ou Fetal: Parto imediato", color: "#EF4444" }
          ]
        },
        {
          type: "location",
          title: "Anti-hipertensivos",
          locations: [
            {
              name: "Crise Hipertensiva (Agudo)",
              color: "#EF4444",
              stable: ["Hidralazina IV", "Labetalol IV (não comum no BR)", "Nifedipino 10mg VO (não usar via sublingual)"],
              gold: "Hidralazina",
              obs: "Alvo: 140-150 / 90-100 mmHg. Não baixar bruscamente para evitar hipoperfusão placentária."
            },
            {
              name: "Manutenção (Crônico)",
              color: "#6366F1",
              stable: ["Metildopa (Alfa-2 central)", "Nifedipino retard", "Anlodipino"],
              gold: "Metildopa",
              obs: "Inibidores da ECA e BRA são CONTRAINDICADOS (Teratogênicos)."
            }
          ]
        }
      ]
    }
  }
];

export default function DoencaHipertensivaGestacional() {
  return (
    <MedPanelPage
      sections={sections}
      specialty="Ginecologia"
      title="Doença Hipertensiva Gestacional — Guia Completo"
    />
  );
}
