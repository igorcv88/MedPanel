// ═══════════════════════════════════════════════════════════════════════════
//  PedCalcDrugsExtra.js — Complemento completo para PedCalc.jsx
//  Fonte: Rfofos 2025 · HIAS Turma 48
//
//  INTEGRAÇÃO (2 passos):
//  1. No topo do PedCalc.jsx, adicione:
//       import { EXTRA_CATEGORIES, EXTRA_DRUGS } from "./PedCalcDrugsExtra";
//
//  2. Substitua as definições originais:
//       const DRUG_CATEGORIES = [...DRUG_CATEGORIES_BASE, ...EXTRA_CATEGORIES];
//       const DRUGS = [...DRUGS_BASE, ...EXTRA_DRUGS];
//     (renomeie as originais para DRUG_CATEGORIES_BASE e DRUGS_BASE)
// ═══════════════════════════════════════════════════════════════════════════

export const EXTRA_CATEGORIES = [
  { id: "antiparasitarios", name: "Antiparasitários",     color: "#84CC16" },
  { id: "antivirais",       name: "Antivirais",            color: "#06B6D4" },
  { id: "antihipertensivos",name: "Anti-hipertensivos",    color: "#F43F5E" },
  { id: "puericultura",     name: "Puericultura / Vitaminas", color: "#A78BFA" },
  { id: "hematologia",      name: "Hematologia / Coagulação", color: "#FB923C" },
];

export const EXTRA_DRUGS = [

  // ══════════════════════════════════════════════════
  //  ANTIBIÓTICOS  — complemento
  // ══════════════════════════════════════════════════
  {
    id: "amicacina_ev", name: "Amicacina EV/IM",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 50mg/mL (2mL) | FA 250mg/mL — HIAS",
    dilution: "Max 10mg/mL em SF0,9% ou SG5%",
    infusion: "30-60 min (lactentes: 1-2h)",
    calc: (w) => [
      { label: "Convencional (15-22,5mg/kg/dia ÷ 3×)", value: `${Math.min(w*7.5,500).toFixed(0)}–${Math.min(w*7.5,500).toFixed(0)} mg/dose`, freq: "8/8h", sub: `15-22,5mg/kg/dia | Max 1,5g/dia`, highlight: true },
      { label: "Dose estendida (dose única diária)", value: `${Math.min(w*15,1500).toFixed(0)} mg/dia`, freq: "24/24h", sub: "Alternativa — monitorizar nível sérico", highlight: false },
    ],
    notes: "Aminoglicosídeo. Ajuste para ClCr <50. Ototoxicidade e nefrotoxicidade. Não misturar com penicilinas.",
  },
  {
    id: "ampicilina_sulbactam_ev", name: "Ampicilina-Sulbactam EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 1,5g (1g+0,5g) | FA 3g (2g+1g)",
    dilution: "Max 45mg/mL em SF0,9%",
    infusion: "30 min",
    calc: (w) => [
      { label: "Habitual (100-200mg/kg/dia ÷ 4×)", value: `${Math.min(w*37.5,2000).toFixed(0)} mg/dose`, freq: "6/6h", sub: "Calculado como ampicilina | Max 2g/dose (8g/dia)", highlight: true },
      { label: "Apendicite / Grave", value: `${Math.min(w*50,2000).toFixed(0)} mg/dose`, freq: "6/6h", sub: "Max 2g/dose | 1ª escolha pós-op apendicite HIAS", highlight: false },
    ],
    notes: "1ª escolha pós-op apendicite HIAS. Apendicite G1-G2: dose única pré/intra-op. ClCr 15-29: 12/12h. ClCr 5-14: 24/24h.",
  },
  {
    id: "cefaclor_vo", name: "Cefaclor VO",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "Susp 250mg/5mL",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "20-40mg/kg/dia ÷ 3×", value: `${Math.min((w*30/3),250).toFixed(0)} mg/dose`, freq: "8/8h", sub: `Regra: ${(w*0.3).toFixed(1)} mL/dose (250mg/5mL) | Max 1g/dia`, highlight: true },
    ],
    notes: "Cefalosporina 2ª geração VO. ClCr < 10: metade da dose.",
  },
  {
    id: "cefadroxila_vo", name: "Cefadroxila VO",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "Susp 250mg/5mL | Susp 500mg/5mL | CP 500mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "30mg/kg/dia ÷ 2×", value: `${Math.min((w*15),500).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 2g/dia", highlight: true },
    ],
    notes: "Cefalosporina 1ª geração VO. Boa opção impetigo, infecções pele.",
  },
  {
    id: "cefalotina_ev", name: "Cefalotina EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 1g + 10mL AD (100mg/mL)",
    dilution: "Max 10mg/mL em SF0,9% ou SG5%",
    infusion: "30-60 min",
    calc: (w) => [
      { label: "80-160mg/kg/dia ÷ 6×", value: `${Math.min((w*120/6),2000).toFixed(0)} mg/dose`, freq: "4-6h", sub: "Max 12g/dia", highlight: true },
    ],
    notes: "Cefalosporina 1ª geração EV. ClCr 50-80: até 2g/6h | ClCr < 2: 500mg/8h.",
  },
  {
    id: "cefazolina_ev", name: "Cefazolina EV (Profilaxia / Tratamento)",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 1g + 10mL AD (100mg/mL) | IM: FA 1g + 2,5mL AD",
    dilution: "Max 138mg/mL em SF0,9% ou SG5%",
    infusion: "30-60 min",
    calc: (w) => [
      { label: "Profilaxia cirúrgica", value: `${Math.min(w*25,2000).toFixed(0)} mg`, freq: "dose única pré-op", sub: "Max 2g — dar 30min antes da incisão", highlight: false },
      { label: "Tratamento (25-100mg/kg/dia ÷ 3×)", value: `${Math.min((w*50/3),2000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 2g/dose | 4-6g/dia", highlight: true },
    ],
    notes: "Profilaxia Nissen/gastrostomia. ClCr 10-29: 24/24h. ClCr < 10: 48/48h.",
  },
  {
    id: "cefepime_ev", name: "Cefepime EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 1g + 10mL AD (90mg/mL) | FA 2g + 10mL AD",
    dilution: "Max 40mg/mL em SF0,9% ou SG5%",
    infusion: "30 min",
    calc: (w) => [
      { label: "50mg/kg/dose (habitual)", value: `${Math.min(w*50,2000).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 2g/dose", highlight: false },
      { label: "Pseudomonas / Grave (50mg/kg/dose)", value: `${Math.min(w*50,2000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 2g/dose | Max 6g/dia", highlight: true },
    ],
    notes: "Cefalosporina 4ª geração. Cobre Pseudomonas. Ajuste renal obrigatório.",
  },
  {
    id: "cefotaxima_ev", name: "Cefotaxima EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 500mg | FA 1g + 4mL AD (200mg/mL)",
    dilution: "Rediluir para 40mg/mL em SF0,9% ou SG5%",
    infusion: "30 min",
    calc: (w) => [
      { label: "Habitual (50-180mg/kg/dia ÷ 4-6×)", value: `${Math.min((w*100/4),3000).toFixed(0)} mg/dose`, freq: "6/6h", sub: "Max 12g/dia", highlight: false },
      { label: "Meningite / SNC (200mg/kg/dia ÷ 6×)", value: `${Math.min((w*200/6),3000).toFixed(0)} mg/dose`, freq: "4/4h", sub: "Neonatos com meningite: cobre SNC | Max 12g/dia", highlight: true },
    ],
    notes: "ESCOLHA nos neonatos (substitui ceftriaxona por não deslocar bilirrubina). Doses SNC baseadas em idade gestacional.",
  },
  {
    id: "cefoxitina_ev", name: "Cefoxitina EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 1g + 10mL AD (100mg/mL)",
    dilution: "Max 40mg/mL em SF0,9%",
    infusion: "1 hora",
    calc: (w) => [
      { label: "80mg/kg/dia ÷ 3-4×", value: `${Math.min((w*80/4),2000).toFixed(0)} mg/dose`, freq: "6-8h", sub: "Max 2g/dose | 6-12g/dia", highlight: true },
    ],
    notes: "Cefalosporina 2ª geração. Cobre anaeróbios. Alternativa apendicite.",
  },
  {
    id: "ceftazidima_ev", name: "Ceftazidima EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 1g + 10mL AD (100mg/mL)",
    dilution: "Max 40mg/mL",
    infusion: "15-30 min",
    calc: (w) => [
      { label: "90-150mg/kg/dia ÷ 3×", value: `${Math.min((w*120/3),2000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 6g/dia", highlight: true },
      { label: "Infecções graves (200-300mg/kg/dia)", value: `${Math.min((w*250/3),4000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 12g/dia", highlight: false },
    ],
    notes: "Excelente cobertura de Pseudomonas. ClCr < 50: ajuste necessário.",
  },
  {
    id: "ceftazavib_ev", name: "Ceftazidima+Avibactam EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 2,5g + 10mL AD (166,6mg/mL)",
    dilution: "Max 40mg/mL em SF0,9%",
    infusion: "15-60 min",
    calc: (w) => [
      { label: "90-150mg/kg/dia ÷ 3× (ceftazidima)", value: `${Math.min((w*120/3),2000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Para KPC e enterobactérias MDR | Max 6g/dia", highlight: true },
    ],
    notes: "Reservado para CRKP/MDR. Mesmo esquema de ceftazidima. Ajuste renal igual.",
  },
  {
    id: "cefuroxima_evvo", name: "Cefuroxima EV/VO",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "VO: Sol 250mg/5mL (Zinnat) | EV: FA 750mg + 6mL AD",
    dilution: "EV: Max 30mg/mL em SF0,9%",
    infusion: "15-30 min",
    calc: (w) => [
      { label: "VO (20-30mg/kg/dia ÷ 2×)", value: `${Math.min((w*25/2),500).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 1g/dia", highlight: false },
      { label: "EV/IM (100-150mg/kg/dia ÷ 3×)", value: `${Math.min((w*125/3),2000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 6g/dia", highlight: true },
    ],
    notes: "Cefalosporina 2ª geração. IM: não aplicar > 750mg no mesmo sítio muscular.",
  },
  {
    id: "ciprofloxacino_evvo", name: "Ciprofloxacino VO/EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "VO: CP 250-750mg | EV: bolsa 2mg/mL",
    dilution: "EV: não diluir (bolsa pronta)",
    infusion: "EV: mínimo 60 min",
    calc: (w) => [
      { label: "VO (15mg/kg/dose)", value: `${Math.min(w*15,500).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 500mg/dose", highlight: false },
      { label: "EV (10mg/kg/dose)", value: `${Math.min(w*10,400).toFixed(0)} mg/dose`, freq: "8-12h", sub: "Max 400mg/dose | bolsa 2mg/mL — infundir em 60 min", highlight: true },
    ],
    notes: "Fluoroquinolona. Usar com critério em pediatria (risco artropatia). ClCr < 30: 18-24h.",
  },
  {
    id: "claritromicina_ev", name: "Claritromicina EV (> 12 anos)",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 500mg — diluir em 250mL SG5%",
    dilution: "Max 2mg/mL em SG5%",
    infusion: "1 hora",
    calc: (_w) => [
      { label: "Adulto / > 12 anos: 500mg/dose", value: "500 mg/dose", freq: "12/12h", sub: "Max 1g/dia — usar via VO quando possível", highlight: true },
    ],
    notes: "EV restrito a > 12 anos. Preferir azitromicina VO. Interações medicamentosas importantes.",
  },
  {
    id: "clindamicina_evvo", name: "Clindamicina EV/VO",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "EV/IM: FA 150mg/mL | VO: CP 300mg",
    dilution: "Max 18mg/mL em SF0,9%, SG5% ou SRL",
    infusion: "10-60 min",
    calc: (w) => [
      { label: "EV (20-40mg/kg/dia ÷ 3-4×)", value: `${Math.min((w*30/3),900).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 2,7g/dia | Risco hipotensão se infusão rápida", highlight: true },
      { label: "VO (10-25mg/kg/dia ÷ 3×)", value: `${Math.min((w*20/3),450).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Grave: até 40mg/kg/dia | Max 1800mg/dia", highlight: false },
    ],
    notes: "Sem ajuste renal. Cobre Gram+ e anaeróbios. Risco de hipotensão se EV rápido.",
  },
  {
    id: "fluconazol_evvo", name: "Fluconazol VO/EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "Caps 100mg e 150mg | EV: bolsa 2mg/mL",
    dilution: "EV: bolsa pronta — não diluir",
    infusion: "1-2h (se ≥6mg/kg: infundir em 2h, máx 200mg/h)",
    calc: (w) => [
      { label: "Ataque — 1º dia (6-12mg/kg)", value: `${Math.min(w*12,800).toFixed(0)} mg`, freq: "dose única de ataque", sub: "Max 800mg/dose em infecções graves", highlight: true },
      { label: "Manutenção (3-12mg/kg/dia)", value: `${Math.min(w*6,400).toFixed(0)} mg/dia`, freq: "24/24h", sub: "Max 400mg/dia habitual | ClCr < 50: dose a cada 48h", highlight: false },
    ],
    notes: "ClCr < 50: dose habitual a cada 48h. Candidíase invasiva: 6-12mg/kg/dia.",
  },
  {
    id: "gentamicina_ev", name: "Gentamicina EV/IM",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 20mg/mL, 40mg/mL ou 80mg/mL",
    dilution: "Max 10mg/mL em SF0,9% ou SG5%",
    infusion: "30-120 min",
    calc: (w) => [
      { label: "Convencional (5-7,5mg/kg/dia ÷ 3×)", value: `${Math.min((w*6/3),167).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 500mg/dia total", highlight: false },
      { label: "Dose única diária (DUD) — ≥ 1 mês", value: `${Math.min(w*5,500).toFixed(0)}-${Math.min(w*7.5,500).toFixed(0)} mg/dia`, freq: "24/24h", sub: "Estratégia dose-dependente | monitorar nível sérico", highlight: true },
    ],
    notes: "Aminoglicosídeo. Sinérgico com ampicilina (sepse neonatal). NÃO misturar com penicilinas na mesma solução. Ototóxico/nefrotóxico.",
  },
  {
    id: "imipenem_ev", name: "Imipenem-Cilastatina EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 500mg + 500mg",
    dilution: "Max 5-7mg/mL em SF0,9% ou SG5%",
    infusion: "1 hora",
    calc: (w) => [
      { label: "60-100mg/kg/dia ÷ 4×", value: `${Math.min((w*80/4),1000).toFixed(0)} mg/dose`, freq: "6/6h", sub: "Max 4g/dia (infecção grave: até 4g/dia)", highlight: true },
    ],
    notes: "Carbapenêmico. Reservar para MDR. Não usar em meningite (convulsões). Ajuste renal obrigatório.",
  },
  {
    id: "levofloxacino_ev", name: "Levofloxacino EV/VO",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "EV: bolsa 5mg/mL | CP 250mg, 500mg, 750mg",
    dilution: "EV: bolsa pronta — não diluir",
    infusion: "1-1,5h",
    calc: (w) => [
      { label: "< 5 anos: 16-20mg/kg/dia ÷ 2×", value: `${Math.min((w*18/2),375).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 750mg/dia", highlight: false },
      { label: "≥ 5 anos: 10mg/kg/dose 1×/dia", value: `${Math.min(w*10,750).toFixed(0)} mg/dia`, freq: "24/24h", sub: "Max 750mg/dia", highlight: true },
    ],
    notes: "Fluoroquinolona. Boa para pneumonia resistente, IVU complexa. Ajuste para ClCr.",
  },
  {
    id: "linezolida_ev", name: "Linezolida EV/VO",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "EV: bolsa 2mg/mL | VO — disponível mesma dose",
    dilution: "EV: bolsa pronta — não diluir",
    infusion: "30-120 min",
    calc: (w) => [
      { label: "< 12 anos: 10mg/kg/dose ÷ 3×", value: `${Math.min(w*10,600).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 600mg/dose | 1,2g/dia", highlight: true },
      { label: "≥ 12 anos: 600mg/dose ÷ 2×", value: "600 mg/dose", freq: "12/12h", sub: "Max 1,2g/dia", highlight: false },
    ],
    notes: "MRSA, VRSA, MRSE. Sem ajuste renal. Monitorar plaquetas (trombocitopenia).",
  },
  {
    id: "meropenem_ev", name: "Meropenem EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 500mg | FA 1000mg + 20mL AD (50mg/mL)",
    dilution: "Max 20mg/mL em SF0,9% ou SG5%",
    infusion: "30 min a 3h (tempo-dependente)",
    calc: (w) => [
      { label: "20mg/kg/dose", value: `${Math.min(w*20,1000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 1g/dose", highlight: false },
      { label: "MENINGITE — dose dobrada (40mg/kg/dose)", value: `${Math.min(w*40,2000).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 2g/dose — indicação principal da dose dobrada", highlight: true },
    ],
    notes: "Carbapenêmico de escolha para SNC (sem risco de convulsão). ClCr 26-50: 12/12h; ClCr 10-25: 50% dose 12/12h; ClCr < 10: 50% dose 24/24h.",
  },
  {
    id: "metronidazol_ev", name: "Metronidazol EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "Bolsa 5mg/mL (500mL)",
    dilution: "Bolsa pronta — não diluir",
    infusion: "5mL/min (risco flebite)",
    calc: (w) => [
      { label: "22,5-40mg/kg/dia ÷ 3-4×", value: `${Math.min((w*30/3),750).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 4g/dia", highlight: true },
    ],
    notes: "Cobre anaeróbios (Bacteroides, C. difficile). Bolsa pronta.",
  },
  {
    id: "micafungina_ev", name: "Micafungina EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 50mg | FA 100mg — dissolver em SF0,9%",
    dilution: "Max 4mg/mL em SF0,9% ou SG5%",
    infusion: "1 hora",
    calc: (w) => {
      const d = w <= 40 ? Math.min(w*2.5,150) : 100;
      return [
        { label: w <= 40 ? "≤ 40kg: 2-3mg/kg/dose" : "> 40kg: dose fixa 100mg", value: `${d.toFixed(0)} mg/dia`, freq: "24/24h", sub: w <= 40 ? `Max 150mg/dia | pode usar até 3mg/kg` : "Pode usar 150mg se necessário", highlight: true },
      ];
    },
    notes: "Equinocandina. 1ª linha candida invasiva neonatos/imunossuprimidos. Sem ajuste renal.",
  },
  {
    id: "oxacilina_ev", name: "Oxacilina EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 500mg + 5mL SF0,9% (100mg/mL)",
    dilution: "Max 10mg/mL em SF0,9% ou SG5%",
    infusion: "15-30 min",
    calc: (w) => [
      { label: "100-200mg/kg/dia ÷ 4-6×", value: `${Math.min((w*150/4),2000).toFixed(0)} mg/dose`, freq: "6/6h", sub: "Max 12g/dia", highlight: true },
    ],
    notes: "Anti-MSSA de escolha. Sem ajuste renal. Celulite, osteomielite, artrite séptica.",
  },
  {
    id: "penicilinag_benzatina_im", name: "Penicilina G Benzatina IM",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 600.000 UI | FA 1.200.000 UI",
    dilution: "—", infusion: "IM exclusivo",
    calc: (w) => [
      { label: w <= 27 ? "≤ 27kg — Faringite / Impetigo" : "> 27kg — Faringite / Impetigo",
        value: w <= 27 ? "600.000 UI" : "1.200.000 UI", freq: "dose única IM", sub: w <= 27 ? "FA 600.000 UI — dose única" : "FA 1.200.000 UI — dose única", highlight: true },
      { label: w <= 27 ? "≤ 27kg — Febre reumática (profilaxia secundária)" : "> 27kg — Febre reumática (profilaxia secundária)",
        value: w <= 27 ? "600.000 UI" : "1.200.000 UI", freq: "a cada 3 semanas IM", sub: "Profilaxia secundária febre reumática", highlight: false },
    ],
    notes: "NUNCA EV. Sífilis congênita: 50.000 UI/kg IM dose única. Sem ajuste renal.",
  },
  {
    id: "penicilinag_cristalina_ev", name: "Penicilina G Cristalina EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 5.000.000 UI + 8mL AD (500.000 UI/mL)",
    dilution: "> 1 ano: max 100.000 UI/mL | < 1 ano: 25.000 UI/mL",
    infusion: "15-60 min",
    calc: (w) => [
      { label: "Infecções gerais (100-300.000 UI/kg/dia ÷ 4-6×)", value: `${Math.min((w*150000/4),4000000).toFixed(0)} UI/dose`, freq: "6/6h", sub: "Max 24.000.000 UI/dia", highlight: false },
      { label: "SNC / Meningite (300-400.000 UI/kg/dia ÷ 4-6×)", value: `${Math.min((w*350000/6),4000000).toFixed(0)} UI/dose`, freq: "4/4h", sub: "Max 4.000.000 UI/dose | 24.000.000 UI/dia", highlight: true },
    ],
    notes: "GBS, Streptococcus pneumoniae sensível, Treponema pallidum. Sífilis congênita EV: 50.000 UI/kg/dose.",
  },
  {
    id: "penicilina_v_vo", name: "Penicilina V (Pen-Ve-Oral) VO",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "Susp 400.000 UI/5mL | CP 500.000 UI",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "25-50mg/kg/dia ÷ 4× (400.000 UI = 250mg)", value: `${Math.min((w*37/4),500).toFixed(0)} mg/dose`, freq: "6/6h", sub: "Max 2g/dia | equivale a 640.000 UI/dose máx", highlight: true },
    ],
    notes: "Faringite estreptocócica, profilaxia febre reumática VO. 400.000 UI = 250mg.",
  },
  {
    id: "pip_tazo_ev", name: "Piperacilina-Tazobactam EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 2,5g | FA 4,5g",
    dilution: "Max 200mg/mL em SF0,9%",
    infusion: "30 min a 2h",
    calc: (w) => [
      { label: "240-300mg/kg/dia ÷ 3-4× (piperacilina)", value: `${Math.min((w*300/4),4000).toFixed(0)} mg/dose`, freq: "6-8h", sub: "Max 16g/dia habitual | Fibrose cística: 240-400mg/kg/dia", highlight: true },
    ],
    notes: "Amplo espectro incluindo Pseudomonas. ClCr > 39: sem ajuste. ClCr 20-39: 8/8h. ClCr < 20: 12/12h.",
  },
  {
    id: "polimixina_b_ev", name: "Polimixina B EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 500.000 UI (50mg) + 10mL SF0,9% (50.000 UI/mL)",
    dilution: "Max 1663 UI/mL em SG5%",
    infusion: "60-90 min",
    calc: (w) => [
      { label: "25.000-30.000 UI/kg/dia ÷ 2×", value: `${Math.min((w*27500/2),1000000).toFixed(0)} UI/dose`, freq: "12/12h", sub: `≈ ${(Math.min(w*27500/2,1000000)/50000*1).toFixed(2)}mg/dose | Max 2.000.000 UI/dia`, highlight: true },
    ],
    notes: "Reservado Gram- XDR (KPC). Nefrotóxico. Monitorar função renal diariamente.",
  },
  {
    id: "teicoplanina_evim", name: "Teicoplanina EV/IM",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 200mg | FA 400mg + 3mL diluente próprio (133mg/mL)",
    dilution: "Max 10mg/mL em SF0,9%, SG5% ou SG10%",
    infusion: "30 min",
    calc: (w) => {
      const age_group = "2m-12a"; // padrão
      return [
        { label: "Ataque: 2m-12a — 10mg/kg/dose × 3 doses", value: `${Math.min(w*10,400).toFixed(0)} mg/dose`, freq: "12/12h (3 doses de ataque)", sub: "Max 400mg/dose", highlight: true },
        { label: "Manutenção: 6-10mg/kg/dia (a partir 4ª dose)", value: `${Math.min(w*8,400).toFixed(0)} mg/dia`, freq: "24/24h", sub: "ClCr 40-60: 1 dose a cada 48h | ClCr < 40: 1 dose a cada 72h", highlight: false },
        { label: "< 2 meses: 16mg/kg/dia (1º dia)", value: `${Math.min(w*16,400).toFixed(0)} mg`, freq: "dose única no D1, depois 8mg/kg/dia", sub: "Max 400mg/dia", highlight: false },
      ];
    },
    notes: "Glicopeptídeo. Alternativa à vancomicina (menos nefrotóxica). Reduzir dose a partir do 4º dia se ClCr alterado.",
  },
  {
    id: "vancomicina_ev", name: "Vancomicina EV",
    category: "antibioticos", color: "#10B981", inputType: "weight",
    presentation: "FA 500mg | FA 1g — diluir em AD",
    dilution: "Max 5mg/mL em SF0,9% ou SG5%",
    infusion: "Mínimo 1h | Máx 10mg/min",
    calc: (w) => [
      { label: "40-60mg/kg/dia ÷ 3-4×", value: `${Math.min((w*50/4),1000).toFixed(0)} mg/dose`, freq: "6-8h", sub: "Max 4g/dia | Correr LENTO (risco síndrome do homem vermelho)", highlight: true },
    ],
    notes: "MRSA, enterococo. ClCr 30-50: 12/12h | ClCr 10-29: 18-24h | ClCr < 10: monitorar nível sérico. Meta: nível vale 10-20mg/L (MRSA: 15-20).",
  },

  // ══════════════════════════════════════════════════
  //  ANTIVIRAIS
  // ══════════════════════════════════════════════════
  {
    id: "aciclovir_ev", name: "Aciclovir EV",
    category: "antivirais", color: "#06B6D4", inputType: "weight",
    presentation: "FA 250mg + 10mL AD (25mg/mL)",
    dilution: "Max 7mg/mL em SF0,9% ou SG5%",
    infusion: "1 hora",
    calc: (w) => [
      { label: "HSV — 3 meses a 12 anos (10-15mg/kg/dose)", value: `${Math.min(w*12,500).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Pele/mucosa: 14 dias | Disseminado/SNC: 21 dias", highlight: true },
      { label: "HSV — > 12 anos / Herpes Zóster", value: `${Math.min(w*10,500).toFixed(0)} mg/dose`, freq: "8/8h por 7-14 dias", sub: "Imunocompetente: 7-10 dias | Imunocomprometido: até resolução", highlight: false },
      { label: "Varicela-Zóster — pediátrico", value: `${Math.min(w*10,500).toFixed(0)} mg/dose`, freq: "8/8h por 10-14 dias", sub: "", highlight: false },
    ],
    notes: "Ajuste renal obrigatório (ClCr < 50). Hidratação adequada para evitar cristalização renal.",
  },
  {
    id: "ganciclovir_ev", name: "Ganciclovir EV",
    category: "antivirais", color: "#06B6D4", inputType: "weight",
    presentation: "Bolsa 1mg/mL (250mL)",
    dilution: "Pronto para uso",
    infusion: "1 hora",
    calc: (w) => [
      { label: "CMV congênito — neonato: 6mg/kg/dose", value: `${Math.min(w*6,300).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Duração: 6 semanas | Monitorar hemograma", highlight: true },
      { label: "CMV sintomático — indução: 5mg/kg/dose", value: `${Math.min(w*5,250).toFixed(0)} mg/dose`, freq: "12/12h por 2-3 semanas", sub: "Pode aumentar para 7,5mg/kg/dose", highlight: false },
      { label: "Manutenção (profilaxia secundária)", value: `${Math.min(w*5,250).toFixed(0)} mg/dia`, freq: "5-7 dias/semana", sub: "Duração indeterminada em HIV/AIDS até CD4 adequado", highlight: false },
    ],
    notes: "CMV congênito, CMV em imunossuprimido. Mielotóxico. Monitorar Hb e neutrófilos.",
  },
  {
    id: "oseltamivir_vo", name: "Oseltamivir VO (Tamiflu)",
    category: "antivirais", color: "#06B6D4", inputType: "weight",
    presentation: "Caps 30mg, 45mg, 75mg | Sol 15mg/mL (reconstituição)",
    dilution: "Sol: diluir cápsula em água (30mg/2mL, 45mg/3mL, 75mg/5mL)",
    infusion: "VO",
    calc: (w) => {
      let dose_tto, dose_prof;
      if (w <= 15) { dose_tto = "30mg"; dose_prof = "30mg"; }
      else if (w <= 23) { dose_tto = "45mg"; dose_prof = "45mg"; }
      else if (w <= 40) { dose_tto = "60mg"; dose_prof = "60mg"; }
      else { dose_tto = "75mg"; dose_prof = "75mg"; }
      return [
        { label: `Tratamento (${dose_tto}/dose) — 5 dias`, value: `${dose_tto}/dose`, freq: "12/12h por 5 dias", sub: `Peso ${w}kg — ${w<=15?"≤15kg":w<=23?"15-23kg":w<=40?"23-40kg":">40kg"}`, highlight: true },
        { label: `Profilaxia (${dose_prof}/dose) — 10 dias`, value: `${dose_prof}/dia`, freq: "1× ao dia por 10 dias", sub: "Iniciar dentro de 48h da exposição", highlight: false },
      ];
    },
    notes: "Influenza A e B. Eficaz se iniciado até 48h dos sintomas. Lactentes < 1 ano: 3mg/kg/dose. Profilaxia não recomendada rotineiramente < 3 meses.",
  },

  // ══════════════════════════════════════════════════
  //  ANTIPARASITÁRIOS
  // ══════════════════════════════════════════════════
  {
    id: "albendazol_vo", name: "Albendazol VO",
    category: "antiparasitarios", color: "#84CC16", inputType: "weight",
    presentation: "Susp 400mg/10mL | CP 400mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: w >= 2 ? "> 2 anos: 400mg/dia" : "1-2 anos: 200mg/dia",
        value: w >= 2 ? "400 mg/dia" : "200 mg/dia",
        freq: "1× ao dia por 3-5 dias",
        sub: w >= 2 ? "10mL ou 1 comprimido | Giardíase: 5 dias" : "5mL | Avaliar risco-benefício < 2 anos",
        highlight: true },
    ],
    notes: "Geo-helmintos (Áscaris, Tricúris, Ancilostomídeos, Enterobíase). Larva migrans visceral: 5 dias. Teratogênico — evitar < 1 ano.",
  },
  {
    id: "ivermectina_vo", name: "Ivermectina VO (> 5 anos / > 15kg)",
    category: "antiparasitarios", color: "#84CC16", inputType: "weight",
    presentation: "CP 6mg",
    dilution: "—", infusion: "VO",
    calc: (w) => {
      const dose_estro = Math.round(w * 0.2 / 6) * 6;
      const dose_onco = Math.round(w * 0.15 / 6) * 6;
      return [
        { label: "Estrongiloidíase / Escabiose (200mcg/kg)", value: `${Math.min(dose_estro,24)} mg`, freq: "dose única (escabiose: repetir em 1-2 sem)", sub: `${(Math.min(dose_estro,24)/6).toFixed(1)} comprimidos de 6mg`, highlight: true },
        { label: "Oncocercose (150mcg/kg)", value: `${Math.min(dose_onco,18)} mg`, freq: "dose única", sub: `${(Math.min(dose_onco,18)/6).toFixed(1)} comprimidos de 6mg`, highlight: false },
      ];
    },
    notes: "≥ 5 anos e > 15kg (off-label < 15kg com EAs < 15%). Tomar em jejum. Ascaridíase, filariose também.",
  },
  {
    id: "mebendazol_vo", name: "Mebendazol VO (> 2 anos)",
    category: "antiparasitarios", color: "#84CC16", inputType: "weight",
    presentation: "Susp 100mg/5mL | CP 100mg",
    dilution: "—", infusion: "VO",
    calc: (_w) => [
      { label: "Geo-helmintos (dose fixa)", value: "100 mg/dose", freq: "12/12h por 3 dias", sub: "5mL susp ou 1 comprimido 12/12h por 3 dias | Larva migrans: 5 dias", highlight: true },
    ],
    notes: "Dose fixa (não por peso). < 1 ano: contraindicado. 1-2 anos: avaliar. Enterobíase: dose única 100mg.",
  },
  {
    id: "nitazoxanida_vo", name: "Nitazoxanida VO (Annita) (≥ 1 ano)",
    category: "antiparasitarios", color: "#84CC16", inputType: "weight",
    presentation: "Susp 20mg/mL (fco 45mL e 100mL) | CP 500mg (≥ 12 anos)",
    dilution: "—", infusion: "VO",
    calc: (w) => {
      const vol = Math.min(w*0.375,15).toFixed(1);
      return [
        { label: "7,5mg/kg/dose (≥ 1 ano)", value: `${Math.min(w*7.5,500).toFixed(0)} mg/dose`, freq: "12/12h por 3 dias", sub: `Sol 20mg/mL: ${vol}mL/dose | Regra: Peso × 0,375 mL | Max 15mL/dose`, highlight: true },
        { label: "≥ 12 anos: dose fixa", value: "500 mg/dose", freq: "12/12h por 3 dias", sub: "1 comprimido 12/12h", highlight: false },
      ];
    },
    notes: "Giardíase, criptosporidiose, amebíase. Criptosporidiose em imunocomprometido com CD4 < 50: 8 semanas.",
  },
  {
    id: "secnidazol_vo", name: "Secnidazol VO",
    category: "antiparasitarios", color: "#84CC16", inputType: "weight",
    presentation: "Susp pó 450mg/15mL ou 900mg/30mL (30mg/mL) | CP 500mg e 1000mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Amebíase / Giardíase (30mg/kg — dose única)", value: `${Math.min(w*30,2000).toFixed(0)} mg`, freq: "dose única", sub: `Regra: ${Math.min(w,67).toFixed(0)} mL da susp 30mg/mL | Max 2g/dia`, highlight: true },
      { label: "Amebíase hepática", value: `${Math.min(w*30,2000).toFixed(0)} mg/dia`, freq: "1× ao dia por 5-7 dias", sub: "Max 2g/dia", highlight: false },
    ],
    notes: "Dose única na giardíase. Amebíase hepática: 5-7 dias. Vaginose bacteriana adolescentes: 2g dose única.",
  },

  // ══════════════════════════════════════════════════
  //  ANALGÉSICOS — complemento
  // ══════════════════════════════════════════════════
  {
    id: "cetoprofeno_evvo", name: "Cetoprofeno VO/EV",
    category: "analgesicos", color: "#F59E0B", inputType: "weight",
    presentation: "Gotas 20mg/mL (1mg/gota) | EV: FA 50mg/mL",
    dilution: "EV: 50-100mL SF0,9%",
    infusion: "EV: 30 min",
    calc: (w) => [
      { label: "VO 1-6 anos (1mg/kg/dose)", value: `${Math.min(w*1,25).toFixed(0)} mg/dose`, freq: "6-8h", sub: `Regra: 1 gota/kg/dose | Max 300mg/dia`, highlight: false },
      { label: "VO 7-11 anos", value: "25 mg/dose", freq: "6-8h", sub: "25 gotas/dose | Max 300mg/dia", highlight: false },
      { label: "VO > 11 anos", value: "50 mg/dose", freq: "6-8h", sub: "50 gotas/dose | Max 300mg/dia", highlight: false },
      { label: "EV (1mg/kg/dose — max 2mL/dose)", value: `${Math.min(w*1,100).toFixed(0)} mg/dose`, freq: "6-8h", sub: `EV: ${Math.min(w*1/50,2).toFixed(2)}mL do FA 50mg/mL | Diluir em 50-100mL SF0,9%`, highlight: true },
    ],
    notes: "AINE. Não usar < 1 ano. Max 10 dias. Evitar em asma aspirina-sensível.",
  },
  {
    id: "cetorolaco_evim", name: "Cetorolaco EV/IM",
    category: "analgesicos", color: "#F59E0B", inputType: "weight",
    presentation: "FA 30mg/mL | CP sublingual 10mg",
    dilution: "Bolus sem diluição (ou SF0,9%)",
    infusion: "Mínimo 15 segundos (bolus)",
    calc: (w) => [
      { label: "≥ 2 anos: 0,5-1mg/kg/dose EV/IM", value: `${Math.min(w*0.75,30).toFixed(1)} mg/dose`, freq: "6-8h", sub: `Max 60mg/dia | Uso máx 5 dias`, highlight: true },
    ],
    notes: "AINE parenteral potente. Máximo 5 dias. Boa analgesia pós-operatória. Não usar < 2 anos.",
  },

  // ══════════════════════════════════════════════════
  //  ANTI-HISTAMÍNICOS — complemento
  // ══════════════════════════════════════════════════
  {
    id: "fexofenadina_vo", name: "Fexofenadina (Allegra) VO",
    category: "antihistaminicos", color: "#8B5CF6", inputType: "age",
    presentation: "Sol 6mg/mL | CP 60mg, 120mg, 180mg",
    dilution: "—", infusion: "VO",
    calc: (a) => {
      const m = a * 12;
      if (m < 6)  return [{ label: "< 6 meses: dose personalizada", value: "Consultar especialista", freq: "", sub: "", highlight: false }];
      if (m < 12) return [
        { label: "6-11m < 10,5kg: 15mg 12/12h", value: "15 mg/dose", freq: "12/12h", sub: "2,5mL sol 6mg/mL", highlight: true },
        { label: "6-11m ≥ 10,5kg: 30mg 12/12h", value: "30 mg/dose", freq: "12/12h", sub: "5mL sol 6mg/mL", highlight: false },
      ];
      if (a < 12) return [{ label: "2-11 anos: 30mg/dose", value: "30 mg/dose", freq: "12/12h", sub: "5mL sol 6mg/mL", highlight: true }];
      return [
        { label: "≥ 12 anos: 60mg 12/12h ou 120mg 1×", value: "60-120 mg/dose", freq: "12/12h ou 1×/dia", sub: "Max 180mg/dia", highlight: true },
      ];
    },
    notes: "Não sedante. 2ª geração. Sem ajuste renal significativo (exceto extremos).",
  },
  {
    id: "ebastina_vo", name: "Ebastina (Ebastel) VO",
    category: "antihistaminicos", color: "#8B5CF6", inputType: "age",
    presentation: "Sol 1mg/mL | CP 10mg",
    dilution: "—", infusion: "VO",
    calc: (a) => {
      if (a < 2)  return [{ label: "< 2 anos", value: "Não recomendado", freq: "", sub: "", highlight: false }];
      if (a < 6)  return [{ label: "2-5 anos: 2,5mg 1×/dia", value: "2,5 mg/dia", freq: "1×/dia", sub: "2,5mL sol 1mg/mL", highlight: true }];
      if (a < 12) return [{ label: "6-11 anos: 5mg 1×/dia", value: "5 mg/dia", freq: "1×/dia", sub: "5mL sol 1mg/mL ou ½ cp", highlight: true }];
      return [{ label: "≥ 12 anos: 10mg 1×/dia", value: "10 mg/dia", freq: "1×/dia", sub: "10mL sol ou 1 cp", highlight: true }];
    },
    notes: "Não sedante. 1× ao dia. Boa tolerabilidade.",
  },
  {
    id: "bilastina_vo", name: "Bilastina (Alektos Ped) VO",
    category: "antihistaminicos", color: "#8B5CF6", inputType: "age",
    presentation: "Sol 2,5mg/mL (AlektosPed) | CP 10mg e 20mg",
    dilution: "—", infusion: "VO",
    calc: (a) => {
      if (a < 4)  return [{ label: "< 4 anos", value: "Sem dados de segurança", freq: "", sub: "", highlight: false }];
      if (a < 12) return [{ label: "4-11 anos ≥ 16kg: 10mg 1×/dia", value: "10 mg/dia", freq: "1×/dia", sub: "4mL sol 2,5mg/mL | Tomar em jejum (30min antes da refeição)", highlight: true }];
      return [{ label: "≥ 12 anos: 20mg 1×/dia", value: "20 mg/dia", freq: "1×/dia", sub: "1 cp 20mg | tomar em jejum", highlight: true }];
    },
    notes: "Não sedante. Tomar em jejum (30min antes ou 2h após refeição). Sem ajuste renal.",
  },
  {
    id: "adrenalina_anafilaxia", name: "Adrenalina IM — Anafilaxia",
    category: "antihistaminicos", color: "#8B5CF6", inputType: "weight",
    presentation: "FA 1mg/mL (1:1000)",
    dilution: "Usar puro IM",
    infusion: "IM — músculo vasto lateral",
    calc: (w) => {
      const dose = Math.min(w*0.01, 0.5);
      const dose_fixa = w < 0.5*12 ? "0,15mg" : w < 0.5*20 ? "0,15mg" : w < 0.5*30 ? "0,3mg" : "0,5mg";
      return [
        { label: "0,01mg/kg IM — dose calculada", value: `${dose.toFixed(3)} mg`, freq: "Pode repetir a cada 5-15 min — máx 3×", sub: `${dose.toFixed(3)}mL da FA 1mg/mL | Max 0,5mg`, highlight: true },
        { label: "Dose fixa por faixa etária", value: dose_fixa, freq: "Repetir se necessário", sub: "< 6m: 0,1-0,15mg | 6m-6a: 0,15mg | 6-12a: 0,3mg | > 12a: 0,5mg", highlight: false },
      ];
    },
    notes: "1ª LINHA anafilaxia. SEMPRE IM vasto lateral externo. NUNCA atrasar. Posicionar em DDH. Corticoide e anti-H1 são adjuvantes, não substituem adrenalina.",
  },

  // ══════════════════════════════════════════════════
  //  DROGAS TGI — complemento
  // ══════════════════════════════════════════════════
  {
    id: "bromoprida_evvo", name: "Bromoprida VO/EV",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "Gotas 4mg/mL (1gt ≈ 0,17mg) | FA 5mg/mL",
    dilution: "EV: + 20mL AD ou SF0,9%",
    infusion: "EV lento",
    calc: (w) => [
      { label: "0,5-1mg/kg/dia ÷ 3×", value: `${Math.min((w*0.75/3),20).toFixed(1)} mg/dose`, freq: "8/8h", sub: `Max 60mg/dia | VO: 1 gota/kg/dose (4mg/mL)`, highlight: true },
      { label: "EV: 0,03 × Peso por dose", value: `${(w*0.03).toFixed(2)} mL/dose (5mg/mL)`, freq: "8/8h", sub: "Diluir em 20mL AD ou SF0,9% | Fazer lento", highlight: false },
    ],
    notes: "Pró-cinético. Max 60mg/dia. Risco extrapiramidal (distonia).",
  },
  {
    id: "dimenidrinato", name: "Dimenidrinato (Dramin) VO/EV",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "FA 50mg/mL | CP 100mg | Gotas 25mg/mL (1mg/gota)",
    dilution: "EV: diluir em SF0,9%",
    infusion: "EV lento",
    calc: (w) => [
      { label: "VO: 1-1,5mg/kg/dose (2-12 anos)", value: `${Math.min(w*1.25,25).toFixed(0)} mg/dose`, freq: "6/6h", sub: `Max 25mg/dose | Gotas: 1 gota/kg/dose (1mg/gt) | Max 150mg/dia`, highlight: false },
      { label: "EV: 0,5mg/kg/dose", value: `${Math.min(w*0.5,25).toFixed(0)} mg/dose`, freq: "6/6h", sub: `Max 25mg/dose EV | ${(Math.min(w*0.5,25)/50).toFixed(2)}mL do FA 50mg/mL`, highlight: true },
    ],
    notes: "Antiemético/antivertiginoso. Sedante. 2-12 anos.",
  },
  {
    id: "escopolamina_evvo", name: "Escopolamina (Buscopan Simples) VO/EV",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "Gotas 10mg/mL (0,5mg/gt) | CP 10mg | FA 20mg/mL",
    dilution: "EV: diluir em SF0,9% ou SG5%",
    infusion: "EV: 5 min",
    calc: (w) => [
      { label: "VO 1-6 anos (evitar — evitar lactentes)", value: "5-10 gotas/dose", freq: "8/8h", sub: "0,5-1mg/dose | Evitar em lactentes", highlight: false },
      { label: "VO 7-14 anos", value: "10-20 gotas/dose", freq: "8/8h", sub: "1-2mg/dose", highlight: false },
      { label: "EV/IM: 0,3-0,6mg/kg/dose", value: `${Math.min(w*0.45,15).toFixed(1)} mg/dose`, freq: "8-24h", sub: `Max 1,5mg/kg/dia | ${(Math.min(w*0.45,15)/20).toFixed(2)}mL do FA 20mg/mL`, highlight: true },
    ],
    notes: "Anticolinérgico. Espasmo intestinal/renal/biliar. Evitar lactentes. EV lento em 5 min.",
  },
  {
    id: "escopolamina_dipirona_evvo", name: "Escopolamina + Dipirona (Buscopan Composto)",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "Gotas 6,67+333,4mg/mL | FA 4mg/mL + 500mg/mL",
    dilution: "EV: fazer lento (5 min)",
    infusion: "EV lento (5 min) — max 5mL/dose",
    calc: (w) => [
      { label: "VO 1-3 anos (evitar): 5-7 gotas/dose", value: "5-7 gotas", freq: "6/6h", sub: "Evitar em lactentes", highlight: false },
      { label: "VO 3-6 anos (evitar): 7-12 gotas/dose", value: "7-12 gotas", freq: "6/6h", sub: "", highlight: false },
      { label: "VO > 6 anos: 13-20 gotas/dose", value: "13-20 gotas", freq: "6/6h", sub: "", highlight: false },
      { label: "EV: 0,03 × Peso mL/dose", value: `${Math.min(w*0.03,5).toFixed(2)} mL/dose`, freq: "6/6h", sub: "Max 5mL/dose | Fazer LENTO em 5 min", highlight: true },
    ],
    notes: "Combinação anticolinérgico + analgésico. EV SEMPRE lento (5 min) — hipotensão se rápido.",
  },
  {
    id: "esomeprazol_vo", name: "Esomeprazol VO",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "CP 20mg e 40mg | Ésio (único IBP diluível)",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "< 20kg: 10mg/dia", value: "10 mg/dia", freq: "1× ao dia", sub: "Ésio: único esomeprazol que pode ser diluído", highlight: w < 20 },
      { label: "> 20kg: 20mg/dia", value: "20 mg/dia", freq: "1× ao dia", sub: "Max 40mg/dia", highlight: w >= 20 },
    ],
    notes: "IBP. 0,7-3,3mg/kg/dia. Ésio: única apresentação diluível (pode usar via sonda).",
  },
  {
    id: "simeticona_vo", name: "Simeticona (Luftal) VO",
    category: "tgi", color: "#0EA5E9", inputType: "age",
    presentation: "Gotas 75mg/mL (Luftal 3mg/gota)",
    dilution: "—", infusion: "VO",
    calc: (a) => {
      if (a < 2)  return [{ label: "< 2 anos: 5 gotas/dose", value: "5 gotas", freq: "até 6/6h", sub: "Max 80 gotas/dia (Luftal)", highlight: true }];
      if (a < 12) return [{ label: "2-12 anos: 10 gotas/dose", value: "10 gotas", freq: "até 6/6h", sub: "Max 160 gotas/dia (Luftal)", highlight: true }];
      return [{ label: "> 12 anos: 10-30 gotas/dose", value: "10-30 gotas", freq: "até 6/6h", sub: "Max 167 gotas/dia", highlight: true }];
    },
    notes: "Antiflatulento. Dose por faixa etária. Prático: 1mg/kg/dose (Luftal 3mg/gota).",
  },
  {
    id: "racecadotrila_vo", name: "Racecadotrila (Tiorfan) VO",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "Sachê 10mg e 30mg | CP 100mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "1,5mg/kg/dose (≥ 3 meses)", value: `${Math.min(w*1.5,100).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Suspender assim que cessar diarreia | Max adulto 400mg/dia", highlight: true },
    ],
    notes: "Inibidor encefalinase. Adjuvante diarreia aguda. Não usar < 3 meses. Suspender com cessação da diarreia.",
  },
  {
    id: "peg_vo", name: "Polietilenoglicol — PEG (Muvinlax/Peglax)",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "Sachê 17g (Muvinlax/Peglax) | Sachê 8,5g (Peglax mini)",
    dilution: "Dissolver em 120-240mL de água",
    infusion: "VO",
    calc: (w) => [
      { label: "Desimpactação (1-1,5g/kg/dia — 3-6 dias)", value: `${Math.min(w*1.2,100).toFixed(0)} g/dia`, freq: "1× ao dia por 3-6 dias", sub: `≈ ${(Math.min(w*1.2,100)/17).toFixed(1)} sachês de 17g | Max 100g/dia`, highlight: true },
      { label: "Manutenção constipação (0,4-1g/kg/dia)", value: `${Math.min(w*0.7,17).toFixed(0)} g/dia`, freq: "1× ao dia", sub: "Max 17g/dia | Manter ≥ 2 meses pós-desimpactação", highlight: false },
    ],
    notes: "Laxativo osmótico. 1ª escolha constipação crônica funcional pediátrica (SBP). Desimpactação: 1-1,5g/kg/dia por 3-6 dias.",
  },
  {
    id: "ursacol_vo", name: "Ácido Ursodesoxicólico (Ursacol) VO",
    category: "tgi", color: "#0EA5E9", inputType: "weight",
    presentation: "CP 50mg, 150mg e 300mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Atresia biliar pós-Kasai (10-20mg/kg/dia ÷ 2×)", value: `${Math.min(w*15,600).toFixed(0)} mg/dia`, freq: "12/12h", sub: "Max 600mg/dia | Pode usar via SNE", highlight: false },
      { label: "Fibrose cística (20mg/kg/dia)", value: `${Math.min(w*20,600).toFixed(0)} mg/dia`, freq: "12/12h", sub: "Inicial — Max 600mg/dia", highlight: false },
      { label: "Colestase por NPT (30mg/kg/dia ÷ 3×)", value: `${Math.min(w*10,200).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 600mg/dia", highlight: true },
    ],
    notes: "Ácido biliar. Hepatoprotetor. Max 600mg/dia. Pode ser dado via sonda.",
  },

  // ══════════════════════════════════════════════════
  //  BRONCODILATADORES — complemento
  // ══════════════════════════════════════════════════
  {
    id: "salbutamol_nbz", name: "Salbutamol NBZ",
    category: "broncodilatadores", color: "#6366F1", inputType: "weight",
    presentation: "Sol 5mg/mL (prod descontinuada) | Aerolin spray",
    dilution: "Diluir em 2mL SF0,9%",
    infusion: "Nebulização",
    calc: (w) => [
      { label: "< 12 anos: 2,5-5mg/dose", value: `${w < 20 ? "2,5" : "5"} mg/dose`, freq: "20/20min (resgate agudo)", sub: `${w < 20 ? "0,5mL" : "1mL"} + 2mL SF0,9% | Max 10mg/dose`, highlight: true },
      { label: "> 12 anos: 5mg/dose", value: "5 mg/dose", freq: "20/20min (resgate)", sub: "1mL + 2mL SF0,9% | Max 10mg/dose", highlight: false },
    ],
    notes: "β2 agonista de curta ação. Pós-melhora: nebulizar 2/2h. Solução descontinuada — usar spray com espaçador.",
  },
  {
    id: "terbutalina_scim", name: "Terbutalina SC/IM",
    category: "broncodilatadores", color: "#6366F1", inputType: "weight",
    presentation: "Amp 0,5mg/mL",
    dilution: "Diluir para 1mg/mL",
    infusion: "SC ou IM",
    calc: (w) => [
      { label: "0,01mg/kg/dose SC/IM", value: `${Math.min(w*0.01,0.4).toFixed(3)} mg/dose`, freq: "a cada 20 min — máx 3 doses", sub: `${(Math.min(w*0.01,0.4)/0.5).toFixed(3)}mL da amp 0,5mg/mL | Max 0,4mg/dose`, highlight: true },
    ],
    notes: "β2-agonista sistêmico. Broncoespasmo grave sem acesso EV. EA: hipertensão, náusea, vômito.",
  },
  {
    id: "adrenalina_nbz", name: "Adrenalina NBZ — Crupe",
    category: "broncodilatadores", color: "#6366F1", inputType: "weight",
    presentation: "FA 1mg/mL (1:1000 — puro)",
    dilution: "Pode ou não diluir com igual vol SF0,9%",
    infusion: "Nebulização",
    calc: (w) => [
      { label: "0,5mL/kg/dose — crupe grave", value: `${Math.min(w*0.5,5).toFixed(1)} mL`, freq: "dose única (pode repetir com monitorização)", sub: `Max 5mL | Regra: Peso/2 em mL | Usar puro ou + SF0,9%`, highlight: true },
    ],
    notes: "Crupe grave com estridor em repouso. SEMPRE combinar com dexametasona. Efeito transitório (2h) — monitorizar rebound.",
  },

  // ══════════════════════════════════════════════════
  //  SEDAÇÃO / ISR — complemento
  // ══════════════════════════════════════════════════
  {
    id: "atropina_isrpre", name: "Atropina EV (Pré-ISR)",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 0,25mg/mL | FA 0,5mg/mL",
    dilution: "Pode ser feito puro",
    infusion: "EV bolus",
    calc: (w) => [
      { label: "0,01-0,02mg/kg EV — pré-ISR", value: `${Math.max(Math.min(w*0.02,1),0.1).toFixed(2)} mg`, freq: "dose única pré-ISR", sub: `Regra: 0,04mL/kg | Min 0,1mg — Max 1mg | ${(Math.max(Math.min(w*0.02,1),0.1)/0.5).toFixed(3)}mL do FA 0,5mg/mL`, highlight: true },
    ],
    notes: "INDICAÇÕES: < 1 ano (sempre com succinilcolina). 1-5 anos em uso de succinilcolina. > 5 anos com 2ª dose de succinilcolina. Previne bradicardia vagal.",
  },
  {
    id: "lidocaina_isrpre", name: "Lidocaína EV (Pré-ISR)",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 10mg/mL (1%) | FA 20mg/mL (2%)",
    dilution: "Pode ser feito puro",
    infusion: "EV bolus",
    calc: (w) => [
      { label: "1-2mg/kg EV — pré-ISR", value: `${Math.min(w*1.5,150).toFixed(0)} mg`, freq: "dose única", sub: `${(Math.min(w*1.5,150)/10).toFixed(1)}mL do FA 1% (10mg/mL)`, highlight: true },
    ],
    notes: "INDICAÇÃO: HIC (reduz PIC), hipertensão reativa, TCE. Dose alta causa depressão miocárdica.",
  },
  {
    id: "etomidato_ev", name: "Etomidato EV (ISR)",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 2mg/mL",
    dilution: "Pode ser feito puro",
    infusion: "EV bolus",
    calc: (w) => [
      { label: "0,2-0,4mg/kg EV — ISR", value: `${Math.min(w*0.3,20).toFixed(1)} mg`, freq: "dose única bolus ISR", sub: `${(Math.min(w*0.3,20)/2).toFixed(1)}mL do FA 2mg/mL`, highlight: true },
    ],
    notes: "ISR: TCE (neuroprotetor), hipotensão (mínima depressão cardiovascular). EVITAR em sepse/choque séptico (suprime cortisol). Risco vômitos.",
  },
  {
    id: "propofol_ev", name: "Propofol EV (ISR / Status)",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 10mg/mL ou 20mg/mL",
    dilution: "Pode ser feito puro",
    infusion: "EV bolus ou BIC",
    calc: (w) => [
      { label: "Indução ISR (1-2mg/kg)", value: `${Math.min(w*1.5,150).toFixed(0)} mg`, freq: "dose única bolus", sub: `${(Math.min(w*1.5,150)/10).toFixed(1)}mL do FA 10mg/mL | Hipotensor`, highlight: true },
      { label: "Status epilepticus (BIC)", value: `${(w*1).toFixed(0)}-${(w*3).toFixed(0)} mcg/kg/min`, freq: "BIC contínua", sub: "Início rápido | PRIS: síndrome infusão propofol > 48h", highlight: false },
    ],
    notes: "Efeito hipotensor importante. PRIS raro mas letal (evitar > 48h ou > 5mg/kg/h). Início de ação ultrarrápido.",
  },
  {
    id: "succinilcolina_ev", name: "Succinilcolina EV (Bloqueador NM)",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 50mg/mL — diluir 1mL + 9mL AD",
    dilution: "1mL + 9mL AD → 5mg/mL",
    infusion: "EV bolus",
    calc: (w) => [
      { label: "RN / < 6 meses: 2-3mg/kg", value: `${Math.min(w*2.5,150).toFixed(0)} mg`, freq: "dose única ISR", sub: `${(Math.min(w*2.5,150)/5).toFixed(1)}mL da sol 5mg/mL`, highlight: false },
      { label: "Lactentes / crianças: 2mg/kg", value: `${Math.min(w*2,150).toFixed(0)} mg`, freq: "dose única ISR", sub: `${(Math.min(w*2,150)/5).toFixed(1)}mL da sol 5mg/mL`, highlight: true },
      { label: "Crianças maiores / adolescentes: 1-1,5mg/kg", value: `${Math.min(w*1.25,150).toFixed(0)} mg`, freq: "dose única ISR", sub: `${(Math.min(w*1.25,150)/5).toFixed(1)}mL da sol 5mg/mL`, highlight: false },
    ],
    notes: "Despolarizante. CONTRAINDICAÇÕES: doença neuromuscular, grande queimado, rabdomiólise, politrauma, hipercalemia, hipertermia maligna. Fazer ATROPINA se < 5 anos.",
  },
  {
    id: "rocuronio_ev", name: "Rocurônio EV (Bloqueador NM)",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 10mg/mL",
    dilution: "SF, SG ou SRL — diluir para 5mg/mL (ou puro)",
    infusion: "EV bolus",
    calc: (w) => [
      { label: "ISR: 1-1,2mg/kg (alta dose)", value: `${Math.min(w*1,120).toFixed(0)} mg`, freq: "dose única ISR", sub: `${(Math.min(w*1,120)/10).toFixed(1)}mL puro | Efeito 30-60min`, highlight: true },
      { label: "Intubação facilitada: 0,6mg/kg", value: `${Math.min(w*0.6,60).toFixed(0)} mg`, freq: "dose única", sub: `${(Math.min(w*0.6,60)/10).toFixed(1)}mL puro`, highlight: false },
    ],
    notes: "NÃO despolarizante. Reversão: sugammadex 16mg/kg. Se não intubado após uso: VPP obrigatória por 30-60 min.",
  },
  {
    id: "cisatracurio_ev", name: "Cisatracúrio EV",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 2mg/mL",
    dilution: "Diluir conforme necessidade",
    infusion: "EV bolus ou BIC",
    calc: (w) => [
      { label: "0,1-0,15mg/kg EV bolus", value: `${Math.min(w*0.12,10).toFixed(2)} mg`, freq: "dose única ou repetir conforme BNM", sub: `${(Math.min(w*0.12,10)/2).toFixed(2)}mL do FA 2mg/mL | Duração moderada`, highlight: true },
    ],
    notes: "EA: broncoespasmo, hipotensão, bradicardia. Eliminação Hofmann — independe de função renal/hepática.",
  },
  {
    id: "dexmedetomidina_ev", name: "Dexmedetomidina EV (Precedex)",
    category: "sedativos", color: "#F97316", inputType: "weight",
    presentation: "FA 200mcg/2mL (100mcg/mL) — diluir em SF0,9%",
    dilution: "Diluir para 4mcg/mL",
    infusion: "BIC contínua",
    calc: (w) => [
      { label: "0,2-1,0mcg/kg/h — UTI", value: `${(w*0.5).toFixed(1)}-${(w*1).toFixed(1)} mcg/h`, freq: "BIC contínua — titular", sub: `Iniciar: ${(w*0.2).toFixed(1)}mcg/h | Titulação gradual | Não necessita VPP`, highlight: true },
    ],
    notes: "α2-agonista. Sedação com manutenção do drive respiratório. Sem depressão cardiorrespiratória. Boa opção desmame de ventilação.",
  },

  // ══════════════════════════════════════════════════
  //  ANTICONVULSIVANTES VO — complemento
  // ══════════════════════════════════════════════════
  {
    id: "valproato_vo", name: "Ácido Valproico (Depakene) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "Xarope 250mg/5mL | CP 300mg, 500mg | CP ER 250mg, 500mg | Sprinkle 125mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Dose terapêutica (10-60mg/kg/dia ÷ 2-3×)", value: `${Math.min((w*30/2),1500).toFixed(0)} mg/dose`, freq: "12/12h ou 8/8h", sub: `Regra: ${(w*0.6).toFixed(1)} mL/dose (Xarope 250mg/5mL) | Max 60mg/kg/dia ou 3g/dia`, highlight: true },
    ],
    notes: "ATENÇÃO: plaquetopenia, hepatotoxicidade (< 2 anos — risco fatal), pancreatite. Interações: diminuem VPA (PB, PHT, CBZ). VPA aumenta LTG, PB, CBZ-epóxido.",
  },
  {
    id: "carbamazepina_vo", name: "Carbamazepina (Tegretol) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "Susp oral 20mg/mL | CP 200mg e 400mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Início (5-10mg/kg/dia ÷ 2×)", value: `${Math.min((w*5/2),400).toFixed(0)} mg/dose`, freq: "12/12h (início)", sub: `Regra: ${(w*0.5).toFixed(1)} mL/dose (20mg/mL) × 2/dia`, highlight: false },
      { label: "Manutenção (10-20mg/kg/dia ÷ 2×)", value: `${Math.min((w*15/2),800).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 35mg/kg/dia ou 2000mg/dia", highlight: true },
    ],
    notes: "Indicação: epilepsias focais. ATENÇÃO: hiponatremia. Monitorar nível sérico 4-12mcg/mL. Muitas interações.",
  },
  {
    id: "clobazam_vo", name: "Clobazam (Frisium) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "CP 10mg e 20mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "0,5-1mg/kg/dia ÷ 2-3×", value: `${Math.min((w*0.75/2),30).toFixed(1)} mg/dose`, freq: "12/12h", sub: "Max 60mg/dia | Terapia adjuvante", highlight: true },
    ],
    notes: "Benzodiazepínico VO. Adjuvante. Tolerância pode ocorrer. Diminuem CBZ: CBZ, PB, PHT.",
  },
  {
    id: "clonazepam_vo", name: "Clonazepam (Rivotril) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "CP 0,25mg, 0,5mg, 1mg, 2mg | Gotas 2,5mg/mL (0,1mg/gota)",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Início (0,01-0,03mg/kg/dia)", value: `${Math.min(w*0.02,0.5).toFixed(3)} mg/dia`, freq: "Titular gradualmente", sub: "Não exceder 0,05mg/kg/dia na fase inicial", highlight: false },
      { label: "Manutenção (0,1-0,2mg/kg/dia ÷ 3×)", value: `${Math.min((w*0.15/3),6).toFixed(2)} mg/dose`, freq: "8/8h", sub: "Max 0,2mg/kg/dia ou 20mg/dia", highlight: true },
    ],
    notes: "Mioclonias, ausência, Lennox-Gastaut. Hipersecreção brônquica (EA). Reduzem CNZ: CBZ, PB, PHT.",
  },
  {
    id: "etossuximida_vo", name: "Etossuximida (Zarontin) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "Sol oral 50mg/mL",
    dilution: "—", infusion: "VO (≥ 3 anos)",
    calc: (w) => [
      { label: "Início: 5mg/kg/dia ÷ 2-3×", value: `${Math.min((w*5/2),250).toFixed(0)} mg/dose`, freq: "12/12h (início)", sub: "Aumentar 5-10mg/kg/dia a cada semana", highlight: false },
      { label: "Manutenção (20-30mg/kg/dia ÷ 2-3×)", value: `${Math.min((w*25/2),1000).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 40mg/kg/dia ou 2000mg/dia | ≥ 3 anos", highlight: true },
    ],
    notes: "1ª escolha ausência típica infantil (junto com VPA e LTG). NÃO usar < 3 anos.",
  },
  {
    id: "fenobarbital_vo", name: "Fenobarbital VO (Manutenção)",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "CP 50mg e 100mg | Sol oral 40mg/mL (1mg/gota)",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "1-3 anos: 3-7mg/kg/dia", value: `${Math.min((w*5/2),150).toFixed(0)} mg/dose`, freq: "12/12h ou dose única noturna", sub: "Preferir dose única noturna (24/24h) | Max 300mg/dia", highlight: true },
      { label: "3-6 anos: 2-5mg/kg/dia", value: `${Math.min((w*3.5/2),125).toFixed(0)} mg/dose`, freq: "12/12h ou 1× noturno", sub: "Max 300mg/dia ou 8mg/kg/dia", highlight: false },
    ],
    notes: "Manutenção VO após ataque EV. Iniciar 12h após dose de ataque. Sedação, comportamento, déficit cognitivo.",
  },
  {
    id: "fenitoina_vo", name: "Fenitoína VO (Manutenção)",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "CP 100mg | Sol oral 20mg/mL",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "5mg/kg/dia ÷ 2-3×", value: `${Math.min((w*5/3),100).toFixed(0)} mg/dose`, freq: "8/8h", sub: "Max 300-500mg/dia | Manutenção pós-ataque EV", highlight: true },
    ],
    notes: "Manutenção após ataque. Janela terapêutica estreita. Monitorar nível: 10-20mcg/mL. EA: hiperplasia gengival, hirsutismo, Steven-Johnson.",
  },
  {
    id: "lamotrigina_vo", name: "Lamotrigina (Lamictal) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "CP 25mg, 50mg, 100mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "COM valproato (VPA) — início 0,5mg/kg/dia", value: `${Math.min(w*0.5/2,5).toFixed(1)} mg/dose`, freq: "12/12h (início — titular lentamente)", sub: "Meta: 1-5mg/kg/dia (Max 5mg/kg/dia ou 200mg/dia)", highlight: false },
      { label: "SEM valproato — início 2mg/kg/dia", value: `${Math.min(w*2/2,50).toFixed(0)} mg/dose`, freq: "12/12h (início — titular)", sub: "Meta: 5-15mg/kg/dia (Max 700mg/dia) | Ajuste 0,5mg/kg a cada 15 dias", highlight: true },
    ],
    notes: "⚠ TITULAÇÃO LENTA OBRIGATÓRIA — risco de rash cutâneo/SJ grave se introdução rápida. VPA aumenta LTG (reduzir dose pela metade). Piora mioclonias.",
  },
  {
    id: "oxcarbazepina_vo", name: "Oxcarbazepina (Trileptal) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "Susp 60mg/mL | CP 300mg e 600mg",
    dilution: "—", infusion: "VO (≥ 2 anos)",
    calc: (w) => [
      { label: "Início: 8-10mg/kg/dia ÷ 2×", value: `${Math.min((w*9/2),300).toFixed(0)} mg/dose`, freq: "12/12h (início)", sub: "Max 600mg/dia início | Aumentar 2,5-5mg/kg/dia a cada semana", highlight: false },
      { label: "Manutenção: 8-50mg/kg/dia ÷ 2×", value: `${Math.min((w*30/2),1200).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 50mg/kg/dia ou 2400mg/dia (ILAE: até 3000mg/dia)", highlight: true },
    ],
    notes: "Análogo CBZ, menos interações. Hiponatremia (monitorar Na). ≥ 2 anos. Epilepsias focais.",
  },
  {
    id: "topiramato_vo", name: "Topiramato (Topamax) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "CP 25mg, 50mg, 100mg | Caps sprinkle 15mg e 25mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Início: 1-3mg/kg/dia ÷ 2×", value: `${Math.min((w*2/2),50).toFixed(0)} mg/dose`, freq: "12/12h (início)", sub: "Aumentar 1-2mg/kg/dia a cada 1-2 semanas", highlight: false },
      { label: "Manutenção: 5-9mg/kg/dia ÷ 2×", value: `${Math.min((w*7/2),300).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 15mg/kg/dia ou 600mg/dia", highlight: true },
    ],
    notes: "Amplo espectro. Perda de peso, parestesias, nefrolitíase, hipertermia (oligoidrose — grave em crianças). Cognitivo: 'Dopamax'.",
  },
  {
    id: "vigabatrina_vo", name: "Vigabatrina (Sabril) VO",
    category: "anticonvulsivantes", color: "#EC4899", inputType: "weight",
    presentation: "CP 500mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Início: 50mg/kg/dia ÷ 2×", value: `${Math.min((w*50/2),2000).toFixed(0)} mg/dose`, freq: "12/12h (início)", sub: "Aumentar conforme resposta | Meta: até 150mg/kg/dia", highlight: true },
      { label: "Espasmos infantis (Sínd. West)", value: `${Math.min(w*100,3000).toFixed(0)} mg/dia`, freq: "12/12h", sub: "100-150mg/kg/dia — Max 200mg/kg/dia | 1ª linha Sínd. West com esclerose tuberosa", highlight: false },
    ],
    notes: "⚠ Constrição concêntrica do campo visual irreversível — monitorar perimetria regularmente. Não interagem com outros FAEs.",
  },

  // ══════════════════════════════════════════════════
  //  ANTI-HIPERTENSIVOS
  // ══════════════════════════════════════════════════
  {
    id: "nifedipina_emergencia", name: "Nifedipina VO — Emergência Hipertensiva",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 10mg (CURTA ação — uso emergência)",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "0,04-0,25mg/kg/dose (urgência)", value: `${Math.min(w*0.1,10).toFixed(2)} mg/dose`, freq: "Repetir a cada 4-6h se necessário", sub: "Max 10mg/dose | Max 3mg/kg/dia", highlight: true },
    ],
    notes: "EA: taquicardia, cefaleia, vertigem. Para uso AGUDO — não usar retard na emergência.",
  },
  {
    id: "hidralazina_evvo", name: "Hidralazina EV/IM/VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "VO: CP 25mg e 50mg | EV/IM: Amp 20mg/mL (1mL)",
    dilution: "EV: diluir em SF0,9%",
    infusion: "EV: lento",
    calc: (w) => [
      { label: "EV/IM — crise grave (0,1-0,6mg/kg/dose)", value: `${Math.min(w*0.3,25).toFixed(1)} mg/dose`, freq: "a cada 4-6h se necessário", sub: `Max 25mg/dose | ${(Math.min(w*0.3,25)/20).toFixed(2)}mL do Amp 20mg/mL EV lento`, highlight: true },
      { label: "VO — leve/moderada (0,25mg/kg/dose)", value: `${Math.min(w*0.25,25).toFixed(1)} mg/dose`, freq: "6-8h", sub: "Max 25mg/dose habitual", highlight: false },
    ],
    notes: "Vasodilatador. EA: taquicardia reflexa (associar βB), cefaleia, síndrome lúpus-like (rara).",
  },
  {
    id: "nitroprussiato_ev", name: "Nitroprussiato EV",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "Amp 25mg/mL (2mL) — fotossensível",
    dilution: "Diluir em SG5% — PROTEGER LUZ",
    infusion: "BIC contínua",
    calc: (w) => [
      { label: "0,3-10mcg/kg/min — crise grave", value: `${(w*0.3).toFixed(1)}-${(w*10).toFixed(0)} mcg/min`, freq: "BIC — titular conforme PA", sub: "Início imediato de ação | Max 10mcg/kg/min | Proteger da luz", highlight: true },
    ],
    notes: "⚠ Vasodilatador de início/fim de ação imediato. Risco intoxicação por cianeto (uso prolongado > 72h). Usar apenas em UTI com monitorização contínua.",
  },
  {
    id: "labetalol_evvo", name: "Labetalol EV/VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "EV: Amp 5mg/mL | VO: CP 100-200-300mg",
    dilution: "EV: pode ser feito puro (lento) ou BIC",
    infusion: "EV: lento",
    calc: (w) => [
      { label: "EV bolus (0,25-1mg/kg/dose)", value: `${Math.min(w*0.5,40).toFixed(1)} mg/dose`, freq: "pode repetir", sub: `Max 40mg/dose | ${(Math.min(w*0.5,40)/5).toFixed(1)}mL do Amp 5mg/mL`, highlight: true },
      { label: "EV BIC (0,25-3mg/kg/h)", value: `${(w*1).toFixed(1)}-${(w*3).toFixed(0)} mg/h`, freq: "BIC", sub: "Iniciar dose mais baixa", highlight: false },
    ],
    notes: "α+β bloqueador. Excelente para emergência hipertensiva. Evitar em asma e ICC.",
  },
  {
    id: "esmolol_ev", name: "Esmolol EV",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "Amp 250mg/mL | FR-Amp 10mg/mL",
    dilution: "Diluir para infusão BIC",
    infusion: "Bolus + BIC",
    calc: (w) => [
      { label: "Bolus: 100-500mcg/kg em 1 min", value: `${Math.min(w*300,25000).toFixed(0)} mcg`, freq: "bolus em 1 min", sub: `Seguido de BIC | TSV: ${(Math.min(w*300,25000)/1000).toFixed(1)}mg em 1min`, highlight: true },
      { label: "BIC manutenção: 50-300mcg/kg/min", value: `${(w*50).toFixed(0)}-${(w*200).toFixed(0)} mcg/min`, freq: "BIC — ação curta", sub: "Titular a cada 4 min | Bradicardia grave — reduzir/pausar", highlight: false },
    ],
    notes: "β-bloqueador ultracurto (t½ ~9 min). Feocromocitoma, TSV, HAS pós-operatória. Risco bradicardia.",
  },
  {
    id: "anlodipina_vo", name: "Anlodipina (BCC) VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 5mg e 10mg | Sol 1mg/mL",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: w < 6 ? "< 6 anos: 0,2-0,6mg/kg/dia" : "≥ 6 anos: 2,5-10mg/dia",
        value: w < 6 ? `${Math.min(w*0.3,5).toFixed(1)} mg/dia` : `${Math.max(2.5,Math.min(w*0.1,10)).toFixed(1)} mg/dia`,
        freq: "1-2× ao dia",
        sub: w < 6 ? `Max 5mg/dia` : "Max 10mg/dia",
        highlight: true },
    ],
    notes: "BCC — boa opção DRC. Edema periférico (EA). Titulação gradual.",
  },
  {
    id: "captopril_vo", name: "Captopril (IECA) VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 12,5mg, 25mg, 50mg | Sol 1mg/mL",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Lactentes — ICC/HAS (0,1-0,5mg/kg/dose)", value: `${Math.min(w*0.3,6).toFixed(2)} mg/dose`, freq: "6-8h", sub: "Iniciar 0,1mg/kg/dose | Max 6mg/kg/dia", highlight: false },
      { label: "Crianças — HAS (0,3-6mg/kg/dia ÷ 3×)", value: `${Math.min((w*3/3),200).toFixed(1)} mg/dose`, freq: "8/8h", sub: "Max 6mg/kg/dia total", highlight: true },
    ],
    notes: "IECA. Hipercalemia, tosse seca (EAs). Evitar estenose artéria renal bilateral. Monitorar TFG e K⁺.",
  },
  {
    id: "enalapril_vo", name: "Enalapril (IECA) VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 5mg, 10mg, 20mg | Sol 1mg/mL",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "0,08mg/kg/dia — início (1× ao dia)", value: `${Math.min(w*0.08,5).toFixed(2)} mg/dia`, freq: "1× ao dia (início)", sub: "Ajustar semanalmente conforme PA | Max 0,58mg/kg/dia ou 40mg/dia", highlight: true },
    ],
    notes: "IECA de 1× ao dia. Hipercalemia, leucopenia, TFG⬇. Não estudado > 0,58mg/kg.",
  },
  {
    id: "furosemida_evvo", name: "Furosemida VO/EV",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "VO: CP 40mg | EV: Amp 10mg/mL",
    dilution: "EV: pode ser puro lento",
    infusion: "EV lento",
    calc: (w) => [
      { label: "VO: 1-12mg/kg/dia ÷ 2-3× (HAS/edema)", value: `${Math.min(w*2,40).toFixed(0)} mg/dose`, freq: "12/12h (início)", sub: "Max 6mg/kg/dia ou 600mg/dia", highlight: false },
      { label: "EV: 1mg/kg/dose", value: `${Math.min(w*1,40).toFixed(0)} mg/dose`, freq: "conforme necessidade", sub: `${(Math.min(w*1,40)/10).toFixed(1)}mL do Amp 10mg/mL | Max 40mg/dose (função renal normal)`, highlight: true },
    ],
    notes: "Diurético de alça. Hipocalemia, hiperglicemia, hiperuricemia, hipercalciúria. Monitorar K⁺.",
  },
  {
    id: "espironolactona_vo", name: "Espironolactona VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 25mg, 50mg, 100mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "1-2mg/kg/dia ÷ 2×", value: `${Math.min((w*1.5/2),50).toFixed(0)} mg/dose`, freq: "12/12h", sub: "Max 100mg/dia | 2ª linha", highlight: true },
    ],
    notes: "Diurético poupador de K⁺. Hipercalemia (monitorar). Útil em ICC, cirrose.",
  },
  {
    id: "losartana_vo", name: "Losartana (BRA) VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 12,5mg, 25mg, 50mg, 100mg | Sol 2,5mg/mL",
    dilution: "—", infusion: "VO (≥ 6 anos)",
    calc: (w) => [
      { label: "≥ 6 anos: 0,7mg/kg/dia (1× ao dia)", value: `${Math.min(w*0.7,50).toFixed(0)} mg/dia`, freq: "1× ao dia", sub: "Max 1,4mg/kg/dia ou 100mg/dia", highlight: true },
    ],
    notes: "BRA — alternativa IECA (sem tosse). ≥ 6 anos. Hipercalemia. Nefroprotector em proteinúria.",
  },
  {
    id: "atenolol_vo", name: "Atenolol VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 25mg, 50mg, 100mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "HAS / Taquicardia: 0,5-1mg/kg/dia", value: `${Math.min(w*0.75,50).toFixed(0)} mg/dia`, freq: "1-2× ao dia", sub: "Max 100mg/dia", highlight: true },
    ],
    notes: "β1-bloqueador seletivo. Bradicardia, broncoespasmo (EA). Não usar em asma.",
  },
  {
    id: "propranolol_vo", name: "Propranolol VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 10mg, 40mg, 80mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Início: 1-2mg/kg/dia ÷ 2-3×", value: `${Math.min((w*1.5/3),80).toFixed(0)} mg/dose`, freq: "8/8h (início)", sub: "Max 8mg/kg/dia ou 640mg/dia", highlight: true },
    ],
    notes: "β-bloqueador não seletivo. Asma (CI), hiperglicemia, ICC. Hemangioma infantil: 1-3mg/kg/dia.",
  },
  {
    id: "carvedilol_vo", name: "Carvedilol VO",
    category: "antihipertensivos", color: "#F43F5E", inputType: "weight",
    presentation: "CP 3,125mg, 6,25mg, 12,5mg, 25mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Início: 0,04-0,075mg/kg/dose", value: `${Math.min(w*0.05,3.125).toFixed(3)} mg/dose`, freq: "12/12h (início)", sub: "Aumentar 50-100% a cada 2 semanas | Meta: 1mg/kg/dia | Max 50mg/dia", highlight: true },
    ],
    notes: "α+β bloqueador. ICC, HAS. Iniciar baixo e titular devagar.",
  },

  // ══════════════════════════════════════════════════
  //  PUERICULTURA / VITAMINAS
  // ══════════════════════════════════════════════════
  {
    id: "ferro_suplementacao", name: "Ferro Elementar VO — Suplementação / Tratamento",
    category: "puericultura", color: "#A78BFA", inputType: "weight",
    presentation: "Neutrofer 250mg/mL (2,5mg Fe/gt) | Sulfato Ferroso 25mg/mL (posto saúde)",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Profilaxia — RNT sem risco (a partir 6 meses)", value: `${Math.min(w*1,40).toFixed(0)} mg Fe/dia`, freq: "1× ao dia até 24 meses", sub: "1mg Fe elementar/kg/dia | Iniciar 180 dias de vida", highlight: false },
      { label: "Profilaxia — RNT com risco / RNPT 1001-1500g", value: `${Math.min(w*2,40).toFixed(0)} mg Fe/dia`, freq: "1× ao dia a partir 30 dias", sub: "2mg Fe/kg/dia | Iniciar 30 dias de vida por 1 ano, depois 1mg/kg/dia", highlight: false },
      { label: "RNPT < 1000g: 4mg Fe/kg/dia", value: `${Math.min(w*4,40).toFixed(0)} mg Fe/dia`, freq: "1× ao dia a partir 30 dias", sub: "4mg Fe/kg/dia por 1 ano | depois 1mg/kg/dia", highlight: false },
      { label: "⚕ Tratamento — Anemia Ferropriva (3-6mg/kg/dia)", value: `${Math.min(w*5,200).toFixed(0)} mg Fe/dia`, freq: "1× ao dia (ou fracionado)", sub: "Tratar por 6 meses ou até normalização Hb, ferritina, VCM | Em jejum + suco cítrico", highlight: true },
    ],
    notes: "Neutrofer 250mg/mL: 2,5mg Fe/gota. Sulfato ferroso 25mg/mL: 1mg Fe/mL. Controle com hemograma + reticulócitos em 30-45 dias (↑Hb ≥ 1g/dL confirma diagnóstico).",
  },
  {
    id: "vitamina_d_vo", name: "Vitamina D VO (Colecalciferol D3)",
    category: "puericultura", color: "#A78BFA", inputType: "age",
    presentation: "Gotas 200 UI/gota (DPrev, Maxxifel) | Caps 1000-50.000 UI",
    dilution: "—", infusion: "VO",
    calc: (a) => [
      { label: a < 1 ? "< 1 ano — profilaxia" : a < 18 ? "1-18 anos — profilaxia" : "> 18 anos",
        value: a < 1 ? "400 UI/dia" : a < 18 ? "600-1200 UI/dia" : "1500-2000 UI/dia",
        freq: "1× ao dia",
        sub: a < 1 ? "2 gotas/dia (200 UI/gt)" : a < 18 ? "3-6 gotas/dia (200 UI/gt) | Grupo risco: 1200-1800 UI/dia" : "Adultos",
        highlight: true },
      { label: "⚕ Tratamento deficiência (< 20ng/mL) — 1 mês-1 ano",
        value: "2000 UI/dia por 12 semanas",
        freq: "diária por 12 semanas",
        sub: "Pós: manutenção 400 UI/dia | Monitorar 25-OH-D a cada 3 meses",
        highlight: false },
      { label: "Tratamento deficiência — 1-18 anos",
        value: "3000-6000 UI/dia por 12 semanas",
        freq: "diária por 12 semanas",
        sub: "Pós: manutenção 600 UI/dia | Global Consensus 2016",
        highlight: false },
    ],
    notes: "Suficiência: > 20ng/mL. Deficiência: < 12ng/mL. Transicionar para manutenção quando nível > 20. Grupos de risco: vegetariano, obesidade, má absorção, hepatopatia, anticonvulsivantes.",
  },
  {
    id: "zinco_vo", name: "Zinco VO (Biozinc/Unizinco)",
    category: "puericultura", color: "#A78BFA", inputType: "age",
    presentation: "Biozinc 2mg/0,5mL (4mg Zn/mL) | Unizinco 17,60mg/mL (4mg Zn/mL)",
    dilution: "—", infusion: "VO",
    calc: (a) => {
      const m = a * 12;
      return [
        { label: m < 6 ? "< 6 meses: 2,5mL/dia" : "≥ 6 meses: 5mL/dia",
          value: m < 6 ? "2,5 mL/dia (10mg Zn)" : "5 mL/dia (20mg Zn)",
          freq: "1× ao dia",
          sub: m < 6 ? "Suplemento padrão" : "Suplemento padrão",
          highlight: true },
        { label: "Diarreia aguda — terapêutico",
          value: m < 6 ? "2,5 mL/dia" : "5 mL/dia",
          freq: "1× ao dia por 10-14 dias",
          sub: "Reduz duração e gravidade da diarreia (OMS)",
          highlight: false },
      ];
    },
    notes: "OMS recomenda zinco adjuvante na diarreia aguda infantil por 10-14 dias. Biozinc/Unizinco: 4mg Zn/mL.",
  },

  // ══════════════════════════════════════════════════
  //  HEMATOLOGIA / COAGULAÇÃO
  // ══════════════════════════════════════════════════
  {
    id: "enoxaparina_sc", name: "Enoxaparina SC",
    category: "hematologia", color: "#FB923C", inputType: "weight",
    presentation: "FA 20mg e 40mg — uso SC",
    dilution: "—", infusion: "SC",
    calc: (w) => [
      { label: "Terapêutico (> 2 meses): 1mg/kg/dose", value: `${Math.min(w*1,100).toFixed(0)} mg/dose`, freq: "12/12h SC", sub: "Meta: antifator Xa 0,5-1 U/mL (colet. 4h após dose)", highlight: true },
      { label: "Terapêutico (< 2 meses): 1,5mg/kg/dose", value: `${Math.min(w*1.5,100).toFixed(0)} mg/dose`, freq: "12/12h SC", sub: "Lactentes < 2 meses: dose maior", highlight: false },
      { label: "Profilático (> 2 meses): 0,5mg/kg/dose", value: `${Math.min(w*0.5,40).toFixed(0)} mg/dose`, freq: "12/12h SC", sub: "Meta: antifator Xa 0,1-0,3 U/mL", highlight: false },
    ],
    notes: "Se IR: usar 24/24h mesma dose. Suspender se plaquetas < 100.000. Controle antifator Xa no D1 (4h após dose manhã), depois semanal, depois mensal.",
  },
  {
    id: "vitamina_k_ev", name: "Vitamina K EV/IM",
    category: "hematologia", color: "#FB923C", inputType: "weight",
    presentation: "FA 10mg/mL",
    dilution: "EV: diluir em SF0,9% ou SG5%",
    infusion: "EV lento | IM exclusivo se plaquetopenia grave",
    calc: (w) => [
      { label: "1mg/kg EV ou IM", value: `${Math.min(w*1,10).toFixed(0)} mg`, freq: "dose única (pode repetir)", sub: `Max 10mg | ${(Math.min(w*1,10)/10).toFixed(2)}mL do FA 10mg/mL`, highlight: true },
    ],
    notes: "Doença hemorrágica RN: 1mg IM após nascimento. Anticoagulação oral excessiva: 1mg/kg. IM contraindicado em plaquetopenia grave.",
  },
  {
    id: "filgrastim_sc", name: "Filgrastim / G-CSF SC (Granulokine)",
    category: "hematologia", color: "#FB923C", inputType: "weight",
    presentation: "FA 300mcg/mL",
    dilution: "SC: puro | EV: diluir em SG5% para 15mcg/mL",
    infusion: "SC puro ou EV diluído",
    calc: (w) => [
      { label: "5-10mcg/kg/dia", value: `${Math.min(w*7.5,300).toFixed(0)} mcg/dia`, freq: "1× ao dia SC", sub: `Max 300mcg/dia | ${(Math.min(w*7.5,300)/300).toFixed(2)}mL do FA 300mcg/mL`, highlight: true },
    ],
    notes: "Neutropenia febril pós-QT. SC puro ou EV diluído em SG5% (15mcg/mL). Dor óssea (EA). Monitorar leucograma.",
  },
  {
    id: "bicarbonato_ev", name: "Bicarbonato de Sódio EV",
    category: "hematologia", color: "#FB923C", inputType: "weight",
    presentation: "BicNa 8,4% (1mEq/mL) | BicNa 4,2% (0,5mEq/mL)",
    dilution: "Pode ser feito puro (ataque) ou diluído",
    infusion: "30-60 min",
    calc: (w) => [
      { label: "Fase rápida — acidose grave pH < 7,1 / PCR (1mEq/kg)", value: `${Math.min(w*1,50).toFixed(0)} mEq`, freq: "correr em 30-60 min", sub: `BicNa 8,4%: ${Math.min(w*1,50).toFixed(0)}mL puro | 4,2% (< 6m): ${(Math.min(w*1,50)*2).toFixed(0)}mL`, highlight: true },
      { label: "Fórmula: BE × Peso × 0,3", value: "BE × Peso × 0,3 mEq", freq: "correr em 30-60 min", sub: "Correção metabólica calculada | Max 50mEq por vez", highlight: false },
    ],
    notes: "Indicações: acidose metabólica grave pH < 7,1, hipercalemia grave (membrana), CAD com pH < 6,9, PCR com acidose. BicNa 4,2% preferido em < 6 meses.",
  },
  {
    id: "gluconato_calcio_ev", name: "Gluconato de Cálcio 10% EV",
    category: "hematologia", color: "#FB923C", inputType: "weight",
    presentation: "Amp 10% (1mL = 9,8mg Ca elementar)",
    dilution: "Diluir em SF0,9% ou SG5%",
    infusion: "EV lento (não rápido — risco arritmia)",
    calc: (w) => [
      { label: "Hipocalcemia sintomática — ataque (0,5-1mL/kg)", value: `${Math.min(w*0.75,20).toFixed(1)} mL`, freq: "em 10 min EV lento", sub: `Max 20mL | ≈ ${(Math.min(w*0.75,20)*9.8).toFixed(0)}mg Ca elementar`, highlight: true },
      { label: "Hipercalemia grave — estabilização (0,5mL/kg)", value: `${Math.min(w*0.5,20).toFixed(1)} mL`, freq: "em 5 min (máx 0,5mL/kg/min)", sub: "Estabilizador de membrana em hipercalemia com ECG alterado", highlight: false },
      { label: "Intox MgSO4 / antídoto (0,5-1mL/kg)", value: `${Math.min(w*0.5,20).toFixed(1)} mL`, freq: "velocidade máx 0,5mL/kg/min", sub: "Max 20mL", highlight: false },
    ],
    notes: "Infundir LENTAMENTE (risco bradicardia/assistolia). Não misturar com bicarbonato (precipita). Monitorar ECG durante infusão.",
  },
  {
    id: "metadona_desmame", name: "Metadona VO — Desmame Fentanil",
    category: "hematologia", color: "#FB923C", inputType: "weight",
    presentation: "CP 10mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Dose = equivalente mg de Fentanil/dia (média 3 dias)",
        value: "Ver cálculo abaixo",
        freq: "÷ 2 doses (12/12h)",
        sub: "Dose metadona (mg) = dose fentanil (mg/dia média 3 dias) | Dividir em 2× VO",
        highlight: true },
    ],
    notes: "PROTOCOLO: 1) Separar bombas fentanil e midazolam. 2) Metadona = média fentanil 3 dias (mg/dia), ÷2 doses VO. 3) Na 2ª dose metadona: ↓ bomba fentanil 50%. 4) ↓50% bomba a cada dose subsequente. 5) Suspender fentanil na 5ª-6ª dose. 6) Após suspensão: ↓metadona 20% a cada 48h. Monitorar WAT-1 ≥ 3 = abstinência.",
  },
  {
    id: "lorazepam_desmame", name: "Lorazepam VO — Desmame Midazolam",
    category: "hematologia", color: "#FB923C", inputType: "weight",
    presentation: "CP 1mg",
    dilution: "—", infusion: "VO",
    calc: (w) => [
      { label: "Dose lorazepam = 1/12 da dose midazolam/dia",
        value: "Ver cálculo abaixo",
        freq: "÷ 4 doses (6/6h)",
        sub: "Dose lorazepam (mg) = dose midazolam (mg/dia média 3 dias) ÷ 12 | Dividir em 4× VO (6/6h)",
        highlight: true },
    ],
    notes: "PROTOCOLO: 1) Lorazepam = média midazolam 3 dias ÷ 12, ÷4 doses VO. 2) Na 2ª dose: ↓bomba midazolam 50%. 3) ↓50% a cada dose. 4) Suspender na 5ª-6ª dose. 5) Após: ↓lorazepam 20% a cada 48h. Alternativa sem lorazepam: Diazepam = dose midazolam/dia ÷ 3.",
  },
];
