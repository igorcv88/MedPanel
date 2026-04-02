import MedPanelPage from "./medpanel-layout";

const sections = [
  // ─────────────────────────────────────────────
  // 1. CONCEITO TORCHS
  // ─────────────────────────────────────────────
  {
    id: "conceito",
    name: "Conceito TORCHS",
    color: "#6366F1",
    content: {
      title: "Infecções Congênitas — Epidemiologia e Princípios",
      blocks: [
        {
          type: "grid",
          title: "Agentes TORCHS",
          items: [
            {
              label: "T — Toxoplasmose",
              value: "Toxoplasma gondii. Transmissão SOMENTE na fase aguda materna. 1º trimestre: maior gravidade, menor transmissão.",
              highlight: true,
            },
            {
              label: "O — Outros",
              value: "Sífilis (T. pallidum), HIV, HBV, Zika, Parvovírus B19. Cada um com janela e mecanismo próprios.",
              highlight: false,
            },
            {
              label: "R — Rubéola",
              value: "Togavírus. Transmissão SOMENTE na fase aguda. Tríade: catarata + cardiopatia + surdez neurossensorial.",
              highlight: true,
            },
            {
              label: "C — CMV",
              value: "Citomegalovírus. Infecção congênita mais comum do mundo. Principal causa de surdez não-genética em crianças.",
              highlight: true,
            },
            {
              label: "H — Herpes",
              value: "HSV-2 > HSV-1. Transmissão predominantemente intraparto (85%) — não transplacentária. Aciclovir EV.",
              highlight: false,
            },
            {
              label: "S — Sífilis",
              value: "Treponema pallidum. Transmissão transplacentária em QUALQUER trimestre. Risco 80% no estágio 1º/2º. Notificação compulsória.",
              highlight: true,
            },
          ],
        },
        {
          type: "obs",
          title: "Princípio Fundamental: Trimestre × Gravidade × Transmissão",
          text: "Para toxoplasmose, rubéola e CMV primário: 1º trimestre = MAIOR GRAVIDADE + MENOR TAXA DE TRANSMISSÃO (organogênese ativa); 3º trimestre = MAIOR TRANSMISSÃO + MENOR GRAVIDADE FETAL. Sífilis é exceção: transmissão elevada em qualquer trimestre. CMV é exceção parcial: pode ocorrer por reativação materna (IgG+ prévia).",
        },
        {
          type: "alert",
          color: "#0EA5E9",
          title: "CMV: Único TORCHS com Transmissão por Reativação Relevante",
          text: "CMV pode causar infecção congênita mesmo em mãe imune (IgG+) por reativação viral. Primo-infecção transmite em 30–40% dos casos; reativação em 1–2%. Como reativação é muito mais prevalente, ambas contribuem para o total de casos congênitos. Todos os outros agentes TORCHS exigem primo-infecção ativa.",
        },
        {
          type: "grid",
          title: "Janela de Transmissão — Resumo Comparativo",
          items: [
            {
              label: "Sífilis",
              value: "Qualquer trimestre. Risco 80% no estágio 1º/2º. Espiroqueta atravessa diretamente a placenta.",
              highlight: true,
            },
            {
              label: "Rubéola",
              value: "Somente fase aguda. 1º trim: 85% anomalias. 2º trim: 25%. Após 20 sem: risco mínimo.",
              highlight: false,
            },
            {
              label: "CMV",
              value: "Primo-infecção (maior risco) OU reativação. Diagnóstico neonatal: PCR urina/saliva nas PRIMEIRAS 3 SEMANAS.",
              highlight: true,
            },
            {
              label: "Toxoplasmose",
              value: "Somente fase aguda. 1º trim: doença grave, rara transmissão. 3º trim: transmissão frequente, geralmente assintomático.",
              highlight: false,
            },
            {
              label: "Herpes (HSV)",
              value: "85% intraparto (canal do parto). 10% pós-natal. 5% transplacentário. Cesárea se lesão ativa no parto.",
              highlight: false,
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 2. SÍFILIS — MATERNA
  // ─────────────────────────────────────────────
  {
    id: "sifilis-materna",
    name: "Sífilis — Materna",
    color: "#EC4899",
    content: {
      title: "Sífilis — Avaliação e Tratamento Materno",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Regra Absoluta: SOMENTE Penicilina G Benzatina (Benzetacil)",
          text: "O único tratamento materno aceito para fins de classificação do RN é a Penicilina G Benzatina IM. Eritromicina, azitromicina, doxiciclina ou qualquer outro ATB NÃO são aceitos como tratamento adequado. Início deve ser há MAIS DE 30 DIAS do parto.",
        },
        {
          type: "grades",
          title: "Esquema de Tratamento Materno por Estágio",
          organ: "Sífilis",
          grades: [
            {
              grade: "Primária / Secundária / Latente Recente (< 1 ano)",
              color: "#F59E0B",
              items: [
                "Benzetacil 2,4 milhões UI IM — DOSE ÚNICA",
                "1,2 milhão UI em cada glúteo",
                "Queda esperada do VDRL: ≥ 2 diluições em 6 meses",
              ],
            },
            {
              grade: "Latente Tardia (> 1 ano) / Duração Ignorada / Terciária",
              color: "#EF4444",
              items: [
                "Benzetacil 2,4 milhões UI IM — 3 DOSES SEMANAIS (total 7,2 milhões UI)",
                "Intervalo entre doses ≤ 7 dias",
                "Queda esperada do VDRL: ≥ 2 diluições em 12 meses",
              ],
            },
            {
              grade: "Neurossífilis",
              color: "#8B5CF6",
              items: [
                "Penicilina Cristalina 18–24 milhões UI/dia EV por 10–14 dias",
                "Alternativa: Procaína 2,4 milhões UI IM/dia + Probenecid 500mg VO 4x/dia × 10 dias",
              ],
            },
          ],
        },
        {
          type: "obs",
          title: "Pérola de Prova: Critérios de Tratamento INADEQUADO",
          text: "São critérios de tratamento INADEQUADO: (1) uso de qualquer ATB que não seja penicilina G benzatina; (2) esquema incompleto (ex.: 1 dose quando precisava 3); (3) tratamento iniciado há < 30 dias do parto; (4) intervalo entre doses > 7 dias; (5) VDRL sem queda esperada (falha terapêutica). Qualquer um desses = tratar filho como sífilis congênita.",
        },
        {
          type: "decision",
          title: "Seguimento do VDRL Materno Pós-Tratamento",
          decisions: [
            {
              condition: "VDRL Mensal — Controle de Cura",
              color: "#10B981",
              actions: [
                "Sífilis recente: queda ≥ 2 diluições em até 6 meses = cura",
                "Sífilis tardia: queda ≥ 2 diluições em até 12 meses = cura",
                "Seguimento MENSAL durante toda a gestação",
              ],
            },
            {
              condition: "Parceiro / Risco de Reinfecção",
              color: "#F59E0B",
              actions: [
                "Parceiro VDRL negativo: título único de controle (pode ser sorofast)",
                "Parceiro VDRL positivo: tratar conforme estágio clínico",
                "Sorofast: VDRL baixo persistente pós-tratamento adequado (cicatriz sorológica) — não retratar",
              ],
            },
            {
              condition: "Falha Terapêutica",
              color: "#EF4444",
              actions: [
                "VDRL não cai ≥ 2 diluições no prazo esperado",
                "Excluir reinfecção antes de considerar falha",
                "Retratar com o mesmo esquema ou investigar neurossífilis",
              ],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 3. SÍFILIS — CLÍNICA
  // ─────────────────────────────────────────────
  {
    id: "sifilis-clinica",
    name: "Sífilis — Clínica",
    color: "#EF4444",
    content: {
      title: "Sífilis Congênita — Manifestações Clínicas",
      blocks: [
        {
          type: "obs",
          title: "60–90% são Assintomáticos ao Nascer",
          text: "A maioria dos RN com sífilis congênita confirmada é assintomática ao nascimento. Por isso, a avaliação sorológica comparativa mãe-filho é obrigatória independentemente da apresentação clínica.",
        },
        {
          type: "phases",
          title: "Fases da Sífilis Congênita",
          phases: [
            {
              number: "1",
              name: "Precoce (antes dos 2 anos)",
              color: "#EF4444",
              items: [
                "INESPECÍFICOS: Hepatoesplenomegalia, Icterícia, Linfadenopatia generalizada",
                "RINITE SIFILÍTICA: corrimento sanguinolento nasal rico em espiroquetas — ALTAMENTE CONTAGIOSA",
                "PÊNFIGO PALMOPLANTAR: bolhas em palmas e plantas — patognomônico, rico em espiroquetas",
                "CONDILOMA LATA: lesões planas úmidas no períneo/ânus",
                "PSEUDOPARALISIA DE PARROT: osteocondrite + periostite → bebê não move o membro, chora à palpação",
                "CORIORRETINITE EM SAL E PIMENTA",
                "FÁCIES: fronite clínica, nariz em sela (destruição do septo)",
                "ANEMIA HEMOLÍTICA, TROMBOCITOPENIA, HIDROPSIA FETAL",
              ],
            },
            {
              number: "2",
              name: "Tardia (após os 2 anos) — Imunomedada",
              color: "#F59E0B",
              items: [
                "DENTES DE HUTCHINSON: incisivos centrais superiores com entalhe em chave de fenda — dentição permanente",
                "NARIZ EM SELA: cicatriz da rinite sifilítica precoce",
                "ARTICULAÇÕES DE CLUTTON: artrite estéril bilateral (joelhos > tornozelos)",
                "TÍBIA EM SABRE: periostite crônica → deformidade anterior da tíbia",
                "PERFURAÇÃO DO PALATO DURO",
                "SURDEZ NEUROSSENSORIAL: lesão do VIII par, bilateral e progressiva",
                "CERATITE INTERSTICIAL: inflamação bilateral da córnea",
                "TRÍADE DE HUTCHINSON: dentes + ceratite intersticial + surdez",
              ],
            },
          ],
        },
        {
          type: "grid",
          title: "Patognomônicos e Armadilhas de Prova",
          items: [
            {
              label: "Pênfigo Palmoplantar",
              value: "Bolhas em palmas e plantas nas primeiras semanas. Riquíssimo em espiroquetas — isolar RN. Patognomônico de sífilis congênita precoce.",
              highlight: true,
            },
            {
              label: "Rinite Sifilítica",
              value: "Corrimento nasal sanguinolento em RN + obstrução nasal. Contagiosa. Não confundir com rinite fisiológica neonatal (que não tem sangue).",
              highlight: true,
            },
            {
              label: "Pseudoparalisia de Parrot",
              value: "RN não move membro sem história de trauma = Parrot até prova contrária. Rx: alargamento metafisário + reação periosteal. DD: paralisia obstétrica, artrite séptica.",
              highlight: true,
            },
            {
              label: "Dentes de Hutchinson",
              value: "Incisivos centrais superiores com entalhe na borda cortante. Afeta a dentição PERMANENTE — diagnóstico após 6 anos.",
              highlight: true,
            },
            {
              label: "Tríade de Hutchinson",
              value: "Dentes + Ceratite Intersticial + Surdez Neurossensorial. Sífilis TARDIA imunomedada — não há espiroquetas ativas.",
              highlight: true,
            },
            {
              label: "Coriorretinite Sal e Pimenta",
              value: "Ocorre tanto na sífilis quanto na rubéola. Não é exclusiva — diferença está no contexto clínico e outras manifestações.",
              highlight: false,
            },
          ],
        },
        {
          type: "alert",
          color: "#EC4899",
          title: "Pseudoparalisia de Parrot — Armadilha Clínica",
          text: "Lactente que não move um membro (aparente paralisia flácida) sem história de trauma → pensar em Parrot antes de paralisia obstétrica. A dor é intensa à palpação — bebê chora quando se toca o membro (pseudoparalisia dolorosa). Rx de ossos longos é obrigatório no workup de sífilis congênita.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 4. SÍFILIS — DIAGNÓSTICO E TTO DO RN
  // ─────────────────────────────────────────────
  {
    id: "sifilis-diagnostico",
    name: "Sífilis — Diagnóstico e TTO",
    color: "#F59E0B",
    content: {
      title: "Sífilis Congênita — Algoritmo Diagnóstico e Tratamento do RN",
      blocks: [
        {
          type: "obs",
          title: "Fundamento: Por Que Comparar VDRL Mãe × Filho?",
          text: "IgG treponêmica atravessa a placenta → VDRL pode ser positivo no RN por transferência passiva materna. Por isso, o critério diagnóstico é comparativo. IgM NÃO atravessa a placenta — IgM reagente no RN = infecção fetal ativa. Porém, sensibilidade do IgM é baixa (< 70%), logo VDRL negativo NÃO exclui sífilis congênita.",
        },
        {
          type: "flow",
          title: "Algoritmo — Mãe com Tratamento ADEQUADO",
          steps: [
            {
              text: "VDRL RN ≤ 1 diluição acima do VDRL materno + Exame físico NORMAL",
              color: "#10B981",
            },
            {
              text: "→ EXPOSTA À SÍFILIS (não é sífilis congênita confirmada)",
              color: "#10B981",
            },
            {
              text: "Conduta: Benzetacil 50.000 UI/kg IM — dose única profilática. Seguimento ambulatorial.",
              color: "#0EA5E9",
            },
            {
              text: "VDRL RN ≥ 2 diluições acima do VDRL materno → SÍFILIS CONGÊNITA",
              color: "#EF4444",
            },
            {
              text: "Qualquer alteração no exame físico (mesmo com VDRL = 1 dil.) → SÍFILIS CONGÊNITA",
              color: "#EF4444",
            },
          ],
        },
        {
          type: "flow",
          title: "Algoritmo — Mãe SEM Tratamento / Tratamento INADEQUADO",
          steps: [
            {
              text: "NOTIFICAR SÍFILIS CONGÊNITA — compulsória imediata (SINAN)",
              color: "#EF4444",
            },
            {
              text: "Workup: HC + plaquetas, LCR (citologia + proteína + VDRL), Rx ossos longos, fundoscopia, ECO, TGO/TGP",
              color: "#F59E0B",
            },
            {
              text: "TODOS NORMAIS + VDRL NEGATIVO → Benzetacil 50.000 UI/kg IM dose única",
              color: "#10B981",
            },
            {
              text: "QUALQUER ALTERAÇÃO + LCR NORMAL → SC SEM Neurossífilis → Procaína IM ou Cristalina EV × 10 dias",
              color: "#F59E0B",
            },
            {
              text: "LCR ALTERADO → SC COM Neurossífilis → SOMENTE Penicilina Cristalina EV × 10–14 dias",
              color: "#EF4444",
            },
          ],
        },
        {
          type: "grades",
          title: "Critérios de LCR Alterado — Neurossífilis Congênita",
          organ: "LCR",
          grades: [
            {
              grade: "SUGESTIVO se qualquer critério presente:",
              color: "#EF4444",
              items: [
                "Células > 25/mm³",
                "Proteínas > 150 mg/dL (RN a termo) / > 170 mg/dL (prematuro)",
                "VDRL REAGENTE no LCR (específico, mas pouco sensível)",
              ],
            },
          ],
        },
        {
          type: "decision",
          title: "Escolha do Antibiótico no RN",
          decisions: [
            {
              condition: "Exposta à Sífilis (mãe tratada adequada + normal + VDRL ≤ 1 dil.)",
              color: "#10B981",
              actions: [
                "Benzetacil 50.000 UI/kg IM — dose única",
                "Seguimento com VDRL seriado ambulatorial",
              ],
            },
            {
              condition: "SC SEM Neurossífilis (LCR normal + alteração clínica/laboratorial)",
              color: "#F59E0B",
              actions: [
                "1ª escolha: Penicilina CRISTALINA 50.000 UI/kg EV 12/12h (1ª semana) / 8/8h (após 7º dia) — 10 dias",
                "Alternativa: Penicilina PROCAÍNA 50.000 UI/kg IM 1x/dia — 10 dias",
                "NUNCA Benzetacil quando há qualquer alteração laboratorial",
              ],
            },
            {
              condition: "SC COM Neurossífilis (LCR alterado)",
              color: "#EF4444",
              actions: [
                "SOMENTE Penicilina CRISTALINA EV — sem alternativa",
                "50.000 UI/kg EV: 12/12h na 1ª semana; 8/8h a partir do 7º dia de vida",
                "Duração: 10–14 dias",
                "INTERRUPÇÃO > 24h: REINICIAR O ESQUEMA DO ZERO",
              ],
            },
          ],
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "Armadilha Clássica: Interrupção da Penicilina Cristalina",
          text: "Se o tratamento com Penicilina Cristalina EV for interrompido por MAIS DE 24 HORAS em qualquer ponto do esquema de neurossífilis congênita, TODO O ESQUEMA DEVE SER REINICIADO DO ZERO. Não há continuação parcial do ponto onde parou. Questão de prova frequente — memorizar.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 5. CMV CONGÊNITO
  // ─────────────────────────────────────────────
  {
    id: "cmv",
    name: "CMV Congênito",
    color: "#0EA5E9",
    content: {
      title: "Citomegalovírus Congênito — Diagnóstico e Tratamento",
      blocks: [
        {
          type: "grid",
          title: "CMV Congênito — Epidemiologia",
          items: [
            {
              label: "Mais comum do mundo",
              value: "0,5–2% de todos os nascimentos. Principal causa de surdez neurossensorial NÃO-GENÉTICA em crianças.",
              highlight: true,
            },
            {
              label: "Transmissão",
              value: "Primo-infecção: 30–40% de transmissão fetal. Reativação: 1–2%. Leite materno transmite CMV pós-natal (não congênita).",
              highlight: false,
            },
            {
              label: "Assintomáticos",
              value: "85–90% dos RN infectados são assintomáticos ao nascer. 10–15% desenvolverão sequelas tardias (especialmente surdez progressiva).",
              highlight: true,
            },
            {
              label: "Diagnóstico — JANELA CRÍTICA",
              value: "PCR em urina ou saliva nas PRIMEIRAS 3 SEMANAS de vida (padrão-ouro). Após esse prazo, não distingue congênita de infecção pelo leite materno.",
              highlight: true,
            },
          ],
        },
        {
          type: "alert",
          color: "#0EA5E9",
          title: "Janela Diagnóstica Insubstituível: Primeiras 3 Semanas",
          text: "PCR de CMV em urina ou saliva deve ser colhida nas PRIMEIRAS 3 SEMANAS de vida para confirmar infecção congênita. Após esse período, RN pode se infectar pelo leite materno (infecção adquirida) — resultado positivo tardio não define origem congênita e não indica tratamento.",
        },
        {
          type: "phases",
          title: "Espectro Clínico do CMV Congênito Sintomático",
          phases: [
            {
              number: "1",
              name: "Doença Disseminada Grave (5–10% dos infectados)",
              color: "#EF4444",
              items: [
                "Microcefalia com CALCIFICAÇÕES PERIVENTRICULARES (TC/US)",
                "Hepatite grave + hepatoesplenomegalia",
                "Trombocitopenia + petéquias / púrpura 'blueberry muffin'",
                "Pneumonite grave",
                "Retinite grave",
                "Mortalidade de até 30% sem tratamento",
              ],
            },
            {
              number: "2",
              name: "Neurológico — Alta Cobrança em Prova",
              color: "#F59E0B",
              items: [
                "Calcificações PERIVENTRICULARES — ao redor dos ventrículos laterais (≠ toxoplasmose: DIFUSAS)",
                "Microcefalia",
                "Surdez neurossensorial — principal sequela tardia, pode ser progressiva",
                "Déficit cognitivo, paralisia cerebral, convulsões",
              ],
            },
          ],
        },
        {
          type: "decision",
          title: "Tratamento do CMV Congênito",
          decisions: [
            {
              condition: "CMV Sintomático com SNC ou doença grave",
              color: "#EF4444",
              actions: [
                "Valganciclovir VO: 16 mg/kg/dose 12/12h × 6 meses (preferível se tolerado)",
                "Ganciclovir EV: 6 mg/kg/dose 12/12h × 6 semanas (doença grave ou intolerância oral)",
                "Iniciar nas PRIMEIRAS 4 SEMANAS de vida — melhor resposta auditiva (evidência Kimberlin 2003/2015)",
              ],
            },
            {
              condition: "CMV Sintomático LEVE (sem SNC)",
              color: "#F59E0B",
              actions: [
                "Valganciclovir VO: 16 mg/kg/dose 12/12h × 6 meses",
                "Surdez isolada pode se beneficiar — SOMENTE sintomáticos",
              ],
            },
            {
              condition: "CMV Assintomático",
              color: "#10B981",
              actions: [
                "Sem tratamento de rotina (evidências insuficientes)",
                "Seguimento audiológico (BERA) semestral até 6 anos — surdez pode ser tardia e progressiva",
              ],
            },
          ],
        },
        {
          type: "obs",
          title: "Trial: Kimberlin et al. — NEJM 2003 e NEJM 2015",
          text: "Ganciclovir EV por 6 semanas preveniu deterioração da audição neurossensorial em RN com CMV sintomático com SNC (p=0,01) — 2003. Em 2015, Kimberlin et al. mostrou que Valganciclovir VO por 6 meses foi superior a 6 semanas para desfechos neurológicos e auditivos, estabelecendo o esquema oral prolongado como padrão atual.",
        },
        {
          type: "alert",
          color: "#F59E0B",
          title: "CMV × Toxo × Zika: Topografia das Calcificações",
          text: "CMV = calcificações PERIVENTRICULARES (ao redor dos ventrículos laterais). Toxoplasmose = calcificações DIFUSAS (gânglios da base + córtex + periventriculares). Zika = calcificações na JUNÇÃO CORTICOSSUB-CORTICAL + microcefalia grave + simplificação girial. Topografia é o discriminador clínico mais cobrado em prova.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 6. RUBÉOLA CONGÊNITA
  // ─────────────────────────────────────────────
  {
    id: "rubeola",
    name: "Rubéola Congênita",
    color: "#10B981",
    content: {
      title: "Síndrome da Rubéola Congênita",
      blocks: [
        {
          type: "alert",
          color: "#10B981",
          title: "Transmissão: Somente Primo-infecção na Fase Aguda",
          text: "Rubéola congênita ocorre APENAS quando a mãe adquire primo-infecção durante a gestação. Reativação NÃO causa rubéola congênita — mulheres com IgG+ são imunes e seus fetos estão protegidos. Mnemônico do mapa: ATO DO INÍCIO AO FIM DA GESTAÇÃO = transmissão somente na fase aguda.",
        },
        {
          type: "grid",
          title: "Risco por Trimestre de Infecção Materna",
          items: [
            {
              label: "1º Trimestre (< 12 sem)",
              value: "85% de anomalias congênitas. Síndrome clássica completa. Maior risco de cardiopatia e catarata. Aborto espontâneo frequente.",
              highlight: true,
            },
            {
              label: "2º Trimestre (13–26 sem)",
              value: "25% de anomalias. Surdez é a sequela mais comum após o 1º trimestre.",
              highlight: false,
            },
            {
              label: "3º Trimestre (> 26 sem)",
              value: "Risco muito baixo de anomalias estruturais. Surdez isolada possível se < 20 semanas.",
              highlight: false,
            },
          ],
        },
        {
          type: "phases",
          title: "Síndrome da Rubéola Congênita — Tríade CORAÇÃO PARTIDO",
          phases: [
            {
              number: "C",
              name: "Cardiopatia Congênita",
              color: "#EF4444",
              items: [
                "PCA — Persistência do Canal Arterial (mais comum)",
                "Estenose da artéria pulmonar e seus ramos",
                "CIV, CIA, Coarctação da aorta",
              ],
            },
            {
              number: "O",
              name: "Ocular — Catarata",
              color: "#F59E0B",
              items: [
                "Catarata congênita bilateral — leucocoria, reflexo fotomotor ABOLIDO",
                "Glaucoma congênito",
                "Retinopatia em sal e pimenta",
                "Microftalmia",
              ],
            },
            {
              number: "S",
              name: "Surdez Neurossensorial",
              color: "#6366F1",
              items: [
                "Surdez bilateral, pode ser progressiva — lesão do órgão de Corti",
                "Mais frequente quando infecção entre 6–12 semanas de gestação",
                "Pode ser a única manifestação na infecção do 2º trimestre",
              ],
            },
          ],
        },
        {
          type: "grid",
          title: "Síndrome Expandida — Além da Tríade",
          items: [
            {
              label: "Blueberry Muffin",
              value: "Lesões cutâneas purpúricas por hematopoiese extramedular dérmica. Também ocorre no CMV — não é específica da rubéola.",
              highlight: true,
            },
            {
              label: "DM Tipo 1",
              value: "Destruição imune das células beta pancreáticas. Pode se manifestar apenas na infância/adolescência — lembrar do histórico de rubéola congênita.",
              highlight: true,
            },
            {
              label: "Tireoidite Autoimune",
              value: "Hipotireoidismo tardio por mecanismo autoimune similar ao DM1.",
              highlight: false,
            },
            {
              label: "Microcefalia",
              value: "Infecção precoce. Déficit cognitivo e atraso global do desenvolvimento associados.",
              highlight: false,
            },
          ],
        },
        {
          type: "obs",
          title: "Tratamento: Suporte Multidisciplinar — Sem Antiviral Específico",
          text: "Não existe antiviral para rubéola congênita. Cirurgia de catarata PRECOCE (antes de 3 meses para evitar ambliopia irreversível); AASI ou implante coclear para surdez; correção de cardiopatia conforme indicação. PREVENÇÃO é o pilar: vacinação MMR pré-concepcional, triagem sorológica no pré-natal.",
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "MMR é Contraindicada na Gestação",
          text: "Vacina MMR (tríplice viral) é CONTRAINDICADA na gestação — vírus vivo atenuado. Mulheres suscetíveis devem ser vacinadas antes da concepção e aguardar 28–30 dias. Se vacinada inadvertidamente: não é indicação de interrupção da gestação (risco teórico < 1% com cepa vacinal).",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 7. TOXOPLASMOSE CONGÊNITA
  // ─────────────────────────────────────────────
  {
    id: "toxoplasmose",
    name: "Toxoplasmose Congênita",
    color: "#F97316",
    content: {
      title: "Toxoplasmose Congênita — Diagnóstico e Tratamento",
      blocks: [
        {
          type: "alert",
          color: "#F97316",
          title: "Tríade de Sabin — Toxoplasmose Congênita Clássica",
          text: "TRÍADE DE SABIN: (1) Coriorretinite + (2) Calcificações Intracranianas DIFUSAS (gânglios da base + córtex + periventriculares) + (3) Hidrocefalia. Contraste direto com CMV: calcificações PERIVENTRICULARES apenas. Diferença topográfica = discriminador clássico de prova.",
        },
        {
          type: "grades",
          title: "Interpretação Sorológica Materna — Teste de Avidez do IgG",
          organ: "Toxoplasmose",
          grades: [
            {
              grade: "IgM (+) / IgG (+) — Avaliar Avidez",
              color: "#F59E0B",
              items: [
                "Pode ser infecção aguda OU IgM residual (persiste por meses/anos)",
                "Solicitar TESTE DE AVIDEZ do IgG para datar a infecção",
                "Alta avidez (> 60%): infecção ANTIGA — gestante protegida",
                "Baixa avidez (< 30%): infecção AGUDA nos últimos 3–4 meses — tratar",
              ],
            },
            {
              grade: "IgM (+) / IgG (-) — Primo-infecção Provável",
              color: "#EF4444",
              items: [
                "Gestante suscetível com primo-infecção provável",
                "Iniciar Espiramicina imediatamente",
                "Repetir sorologia em 2–3 semanas para confirmar soroconversão",
              ],
            },
            {
              grade: "IgM (-) / IgG (+) — Imunidade Adquirida",
              color: "#10B981",
              items: [
                "Gestante imune — NÃO transmite toxoplasmose em condições normais",
                "Repetir sorologia apenas se imunocompromissão grave",
              ],
            },
            {
              grade: "IgM (-) / IgG (-) — Suscetível",
              color: "#8B5CF6",
              items: [
                "Medidas profiláticas rigorosas: evitar carne crua, terra sem luvas, fezes de gato, alimentos mal lavados",
                "Repetir sorologia a cada 3 meses e no parto",
              ],
            },
          ],
        },
        {
          type: "grid",
          title: "Manifestações Clínicas no RN",
          items: [
            {
              label: "Coriorretinite",
              value: "Principal causa de cegueira congênita por infecção. Focal, bilateral, pode ser progressiva. Pode REATIVAR na adolescência e vida adulta.",
              highlight: true,
            },
            {
              label: "Hidrocefalia",
              value: "Obstrução do aqueduto de Sylvius por inflamação. Pode requerer derivação ventrículo-peritoneal.",
              highlight: true,
            },
            {
              label: "Calcificações Difusas",
              value: "TC/US craniano: gânglios da base + córtex + periventriculares — DIFUSAS (≠ CMV: apenas periventriculares).",
              highlight: true,
            },
            {
              label: "80% Assintomáticos",
              value: "Infecção no 3º trimestre: alta transmissão, geralmente assintomático. Sequelas tardias (coriorretinite, surdez) surgem anos depois.",
              highlight: false,
            },
          ],
        },
        {
          type: "decision",
          title: "Tratamento — Mãe e RN",
          decisions: [
            {
              condition: "Infecção Materna Aguda — Tratamento da Gestante",
              color: "#F97316",
              actions: [
                "Espiramicina 3g/dia VO em 3 doses — reduz transmissão materno-fetal em ~50%",
                "NÃO trata feto infectado — apenas reduz a passagem transplacentária",
                "SE amniocentese PCR+ (feto infectado): Pirimetamina + Sulfadiazina + Ác. Folínico (EVITAR Pirimetamina no 1º trimestre — teratogênica)",
              ],
            },
            {
              condition: "RN com Toxoplasmose Congênita Confirmada — 12 Meses",
              color: "#EF4444",
              actions: [
                "Pirimetamina 1 mg/kg/dia VO",
                "Sulfadiazina 100 mg/kg/dia VO dividido em 2 doses",
                "Ácido Folínico 10 mg 3x/semana — prevenir toxicidade medular da pirimetamina",
                "Duração: 12 MESES",
              ],
            },
            {
              condition: "Coriorretinite Ativa OU Proteína Elevada no LCR",
              color: "#8B5CF6",
              actions: [
                "ADICIONAR Prednisona 1 mg/kg/dia ao esquema base",
                "Manter até resolução da atividade inflamatória",
                "Corticoide SOMENTE associado ao antiparasitário — nunca isolado",
              ],
            },
          ],
        },
        {
          type: "obs",
          title: "Prevenção Primária — Medidas Práticas",
          text: "Toxoplasmose não tem vacina disponível. Prevenção depende inteiramente de medidas comportamentais para gestantes suscetíveis: carne bem cozida (> 67°C); luvas ao mexer com terra ou jardim; não limpar caixas de areia de gatos; lavar bem frutas e verduras; evitar água não tratada. Repetir sorologia a cada 3 meses e no parto em gestantes IgM-/IgG-.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 8. SEGUIMENTO
  // ─────────────────────────────────────────────
  {
    id: "seguimento",
    name: "Seguimento",
    color: "#8B5CF6",
    content: {
      title: "Seguimento Ambulatorial e Resumo Terapêutico",
      blocks: [
        {
          type: "phases",
          title: "Seguimento da Sífilis Congênita",
          phases: [
            {
              number: "1",
              name: "VDRL Seriado — Controle de Cura",
              color: "#EC4899",
              items: [
                "Puericultura: 7 semanas, 1, 3, 4, 5, 12 e 18 meses",
                "VDRL com 1, 3, 6, 9 e 18 meses",
                "INTERROMPER se 2 resultados NÃO REAGENTES consecutivos",
                "VDRL REAGENTE aos 18 meses = confirma sífilis congênita (IgG própria do RN)",
              ],
            },
            {
              number: "2",
              name: "Seguimento Especializado",
              color: "#8B5CF6",
              items: [
                "Oftalmológico: semestral por 2 anos",
                "Audiológico (BERA): semestral por 2 anos",
                "Neurológico: semestral por 2 anos",
                "Neurossífilis: LCR de controle com 6 meses pós-tratamento",
              ],
            },
          ],
        },
        {
          type: "grid",
          title: "Seguimento por Infecção",
          items: [
            {
              label: "CMV — Audiológico",
              value: "BERA semestral até 6 anos. Surdez pode ser progressiva ou de início tardio mesmo em assintomáticos — seguimento longo obrigatório.",
              highlight: true,
            },
            {
              label: "Toxoplasmose — Oftalmológico",
              value: "Fundoscopia semestral por 2 anos, anual após. Coriorretinite pode REATIVAR na adolescência e vida adulta — vigilância vitalícia.",
              highlight: true,
            },
            {
              label: "Toxoplasmose — Sorológico",
              value: "IgG cai gradualmente após 12 meses se tratada. IgG persistente após 12 meses com tratamento completo = infecção congênita confirmada.",
              highlight: false,
            },
            {
              label: "Rubéola — Cardiológico",
              value: "Ecocardiograma + acompanhamento. PDA e estenose pulmonar podem requerer intervenção percutânea ou cirúrgica.",
              highlight: false,
            },
            {
              label: "Rubéola — DM1",
              value: "Glicemia de jejum nas consultas de puericultura. DM1 pode se manifestar anos após — sempre lembrar do histórico.",
              highlight: false,
            },
            {
              label: "CMV — Neurológico",
              value: "Avaliação do desenvolvimento semestral. Calcificações periventriculares = risco aumentado de déficit cognitivo e PC.",
              highlight: false,
            },
          ],
        },
        {
          type: "alert",
          color: "#6366F1",
          title: "Notificação Compulsória Imediata",
          text: "SÍFILIS CONGÊNITA: notificação imediata no SINAN. Todo RN de mãe com sífilis deve ser notificado enquanto a investigação não a exclui. Também compulsória: sífilis em gestante, HIV em gestante e criança exposta.",
        },
        {
          type: "decision",
          title: "Resumo Terapêutico — Antibiótico/Antiviral por Infecção",
          decisions: [
            {
              condition: "Sífilis Congênita",
              color: "#EC4899",
              actions: [
                "Neurossífilis: Penicilina CRISTALINA EV 10–14 dias (única opção)",
                "SC sem neurossífilis: PROCAÍNA IM 10 dias OU Cristalina EV",
                "Exposta (mãe tratada, normal): BENZETACIL IM dose única",
              ],
            },
            {
              condition: "CMV Congênito Sintomático",
              color: "#0EA5E9",
              actions: [
                "VALGANCICLOVIR VO 16 mg/kg/dose 12/12h × 6 meses (preferível)",
                "GANCICLOVIR EV 6 mg/kg/dose 12/12h × 6 semanas (grave ou intolerância oral)",
              ],
            },
            {
              condition: "Toxoplasmose Congênita",
              color: "#F97316",
              actions: [
                "PIRIMETAMINA + SULFADIAZINA + ÁCIDO FOLÍNICO × 12 meses",
                "+ PREDNISONA se coriorretinite ativa ou proteína elevada no LCR",
              ],
            },
            {
              condition: "Rubéola Congênita",
              color: "#10B981",
              actions: [
                "SUPORTE — sem antiviral específico",
                "Catarata: cirurgia < 3 meses; Cardiopatia: correção conforme indicação; Surdez: AASI/implante coclear",
              ],
            },
            {
              condition: "Herpes Neonatal (HSV)",
              color: "#8B5CF6",
              actions: [
                "ACICLOVIR EV 20 mg/kg/dose 8/8h × 14 dias (localizado) ou 21 dias (SNC/disseminado)",
                "Iniciar empiricamente — não aguardar cultura",
                "Profilaxia materna: Aciclovir 400mg 3x/dia a partir de 36 semanas se HSV recorrente",
              ],
            },
          ],
        },
        {
          type: "obs",
          title: "Pérola Final: Zika Congênita — Diagnóstico Diferencial",
          text: "Zika congênita: calcificações na JUNÇÃO CORTICOSSUB-CORTICAL + microcefalia GRAVE (PC < 32cm a termo) + simplificação girial (lisencefalia parcial). Diferente das TORCHS clássicas em topografia e grau de microcefalia. Transmissão predominante no 1º trimestre. Sem antiviral. Notificação compulsória. Diagnóstico diferencial com TORCHS baseia-se na topografia da calcificação + grau de microcefalia + contexto epidemiológico.",
        },
      ],
    },
  },
];

export default function InfeccoesCongenitas() {
  return (
    <MedPanelPage
      sections={sections}
      specialty="Pediatria"
      title="Infecções Congênitas — TORCHS"
    />
  );
}
