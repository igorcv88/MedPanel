import MedPanelPage from "./medpanel-layout";

const sections = [
  {
    id: "conceitos-chave",
    name: "Conceitos-Chave",
    color: "#6366F1",
    content: {
      title: "Definições Fundamentais de Indicadores",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Diferença Crítica: Prevalência vs Incidência",
          text: "PREVALÊNCIA = todo caso (novo + antigo) / população num momento (ponto no tempo). INCIDÊNCIA = casos NOVOS / população em risco num período (dinâmica temporal). Prevalência sobe com casos novos, imigração e quando a doença fica crônica. Incidência mede risco real de adoecer."
        },
        {
          type: "obs",
          title: "Ciclo de Transformação de Dados",
          text: "1. COLETAR dados brutos → 2. GERAR indicadores quantificáveis → 3. PRODUZIR informações contextualizadas → 4. INTERPRETAR/gerar conhecimento → 5. DIVULGAR/gerar ações. Cada nível agrega valor; sem interpretação, dados são inúteis."
        },
        {
          type: "grid",
          title: "Indicador de Saúde — Atributos Mínimos",
          items: [
            { label: "Mensurabilidade", value: "Deve ser quantificável e viável com dados disponíveis", highlight: true },
            { label: "Validade", value: "Mede o que se propõe medir; reflete realidade população" },
            { label: "Reprodutibilidade", value: "Resultados consistentes quando repetido nas mesmas condições" },
            { label: "Sustentabilidade", value: "Coleta contínua, sem descontinuidades; integrado aos sistemas" },
            { label: "Oportunidade", value: "Disponível em tempo hábil para gerar ações (não atrasado)" },
            { label: "Pertinência/Relevância", value: "Responde questão clinicamente importante e de interesse público", highlight: true },
            { label: "Compreensibilidade", value: "Entendível por gestores, profissionais e população; interpretação clara" }
          ]
        }
      ]
    }
  },

  {
    id: "morbidade",
    name: "Indicadores de Morbidade",
    color: "#EC4899",
    content: {
      title: "Medidas de Ocorrência de Doenças",
      blocks: [
        {
          type: "decision",
          title: "Qual Indicador de Morbidade Usar?",
          decisions: [
            {
              condition: "Conhecer magnitude TOTAL de casos (novo + antigo) numa população num MOMENTO",
              color: "#6366F1",
              actions: ["Usar PREVALÊNCIA", "Numerador = total de doentes", "Denominador = população total", "Expressa em % ou /1000"]
            },
            {
              condition: "Medir RISCO de adoecer / taxa de surgimento de casos NOVOS num PERÍODO",
              color: "#0EA5E9",
              actions: ["Usar INCIDÊNCIA", "Numerador = casos novos", "Denominador = população em risco", "Expressa em casos/1000/ano"]
            },
            {
              condition: "Avaliar velocidade de casos novos por TEMPO ESPECÍFICO de exposição (quando denominador é pessoa-tempo)",
              color: "#10B981",
              actions: ["Usar DENSIDADE DE INCIDÊNCIA", "Numerador = casos novos", "Denominador = pessoa-ano em risco", "Mais precisa em coortes"]
            },
            {
              condition: "Medir transmissibilidade de doença infecciosa ENTRE contatos do caso índice",
              color: "#F59E0B",
              actions: ["Usar COEFICIENTE DE ATAQUE", "Numerador = casos vindos do contato com caso índice", "Denominador = total de contatos", "Crítico em epidemias"]
            }
          ]
        },
        {
          type: "grid",
          title: "Fórmulas e Interpretação — Morbidade",
          items: [
            {
              label: "PREVALÊNCIA",
              value: "Número de casos (novos + antigos) / População total. Síntese estática. Sobe com: incidência ↑, sobrevida ↑, imigração. Desce com: cura, morte, emigração.",
              highlight: true
            },
            {
              label: "INCIDÊNCIA",
              value: "Casos novos / População em risco (susceptível) num período. Mede dinâmica real de adoecimento. Não inclui imigrantes que trouxeram doença.",
              highlight: true
            },
            {
              label: "Relação Prev/Inc",
              value: "Prevalência ≈ Incidência × Duração média da doença. Doença crônica → prevalência >> incidência. Doença aguda mortal → prevalência ≈ incidência."
            },
            {
              label: "Densidade de Incidência",
              value: "Casos novos / Σ(pessoa-tempo em risco). Unidade: casos/pessoa-ano. Mais robusta em populações dinâmicas, loss-to-follow-up."
            },
            {
              label: "Coef. de Ataque",
              value: "Casos secundários / Contatos totais do caso índice × 100. Altamente transmissível = >30%. Crítico em surtos/epidemias."
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola de Prova — Prevalência vs Incidência em Rastreamento",
          text: "Programa de rastreamento bem-sucedido REDUZ incidência futura (prevenção primária) mas pode aumentar PREVALÊNCIA temporariamente (mais casos detectados). Não confundir melhora com piora epidemiológica."
        }
      ]
    }
  },

  {
    id: "mortalidade-geral",
    name: "Mortalidade Geral",
    color: "#0EA5E9",
    content: {
      title: "Indicadores Gerais de Mortalidade",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Diferença Absoluta: Mortalidade vs Letalidade",
          text: "MORTALIDADE = avalia população exposta (total). LETALIDADE = avalia DOENTES acometidos (gravidade). Mortalidade sobe por mais doença OU por pior acesso. Letalidade sobe por pior tratamento. Não confundir!"
        },
        {
          type: "grid",
          title: "Indicadores de Mortalidade — Definições e Fórmulas",
          items: [
            {
              label: "Taxa de Mortalidade Geral (TMG)",
              value: "Óbitos totais / População exposta × 1.000. Síntese do estado de saúde. TMG Brasil ≈ 7–8/1000. Reflete morbidade geral + acesso.",
              highlight: true
            },
            {
              label: "Mortalidade por Causa Específica",
              value: "Óbitos por causa X / População total × 10. Direciona políticas públicas. Ex: mortalidade por tuberculose, aids, hipertensão.",
              highlight: true
            },
            {
              label: "Mortalidade Proporcional",
              value: "Óbitos por característica (idade, sexo, raça) / Total de óbitos × 100. Proporção dentro do total. Não diz taxa absoluta da população."
            },
            {
              label: "Letalidade",
              value: "Óbitos por doença X / Total de doentes com X × 100. Mede gravidade da doença / qualidade do tratamento. Ex: Covid → 0,1–2% conforme contexto."
            }
          ]
        },
        {
          type: "grades",
          title: "Curvas de Nelson Moraes — Padrão de Mortalidade Proporcional por Idade",
          organ: "População",
          grades: [
            {
              grade: "TIPO N",
              color: "#EF4444",
              items: [
                "Muito baixo nível de saúde",
                "Pico de mortes em menores de 5 anos (doenças infecciosas, desnutrição)",
                "Mortalidade elevada em idade reprodutiva (materna)",
                "Curva em 'L' invertido — cauda curta",
                "Países em desenvolvimento com pouco acesso"
              ]
            },
            {
              grade: "TIPO L",
              color: "#F59E0B",
              items: [
                "Baixo nível de saúde",
                "Pico ainda em menores de 5, mas menos pronunciado",
                "Diminuição gradual até idade adulta",
                "Aumento em idosos",
                "Padrão intermediário — transição em curso"
              ]
            },
            {
              grade: "TIPO U",
              color: "#84CC16",
              items: [
                "Nível regular de saúde",
                "Mortalidade infantil controlada",
                "Mínimo em idade produtiva (5–50 anos)",
                "Aumento progressivo em idosos",
                "Curva em 'U' suave",
                "Países em transição epidemiológica"
              ]
            },
            {
              grade: "TIPO J",
              color: "#10B981",
              items: [
                "Alto nível de saúde",
                "Mortalidade infantil muito baixa",
                "Praticamente nula em idade produtiva",
                "Pico abrupto em idosos (>75 anos) — causas crônicas",
                "Curva em 'J' — esperança de vida >75 anos",
                "Países desenvolvidos (Japão, Suécia, Canadá)"
              ]
            }
          ]
        },
        {
          type: "obs",
          title: "Índice de Swaroop-Uemura — Qualidade de Vida",
          text: "Óbitos em >50 anos / Total de óbitos × 100. Indica proporção de mortes em idosos. >75% = NÍVEL 1 (saúde ótima). 50–75% = NÍVEL 2. 25–50% = NÍVEL 3. <25% = NÍVEL 4 (saúde péssima). Brasil ≈ 55–60% (NÍVEL 2) — ainda há mortalidade precoce evitável."
        }
      ]
    }
  },

  {
    id: "mortalidade-materna-infantil",
    name: "Mortalidade Materna e Infantil",
    color: "#F59E0B",
    content: {
      title: "Indicadores Materno-Infantis Críticos para Prova",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Diferença Crítica: Mortalidade vs Razão",
          text: "MORTALIDADE MATERNA = óbitos maternos / nascidos vivos × 100.000 (taxa). RAZÃO DE MORTALIDADE MATERNA = óbitos maternos / nascidas vivas (razão). Bancas pegam essa diferença — taxa vs razão não é o mesmo!"
        },
        {
          type: "grid",
          title: "Mortalidade Materna — Conceitos",
          items: [
            {
              label: "Período Crítico",
              value: "Gravidez, parto ou puerpério até 42 dias após término da gravidez (independente de resultado: aborto, natimorto, parto).",
              highlight: true
            },
            {
              label: "Causas Diretas",
              value: "Específicas do binômio mãe-feto: eclâmpsia, hemorragia, infecção, embolia pulmonar, anestésicos. Evitáveis com boa assistência. ~80% das mortes.",
              highlight: true
            },
            {
              label: "Causas Indiretas",
              value: "Comorbidades prévias que se agravaram na gravidez: cardiopatia, hipertensão crônica, aids, tuberculose. ~20% das mortes. Requerem planejamento reprodutivo."
            },
            {
              label: "Fórmula MMR",
              value: "Óbitos maternos / Nascidos vivos × 100.000. OMS meta: <70/100.000. Brasil 2024: ≈60–70 (reduziu mas ainda acima da meta)."
            },
            {
              label: "Morte Materna Tardia",
              value: "Óbito até 1 ano após final da gravidez por causa materna. Não entra em MMR oficial mas importante para vigilância."
            }
          ]
        },
        {
          type: "grid",
          title: "Mortalidade Infantil — Componentes Específicos",
          items: [
            {
              label: "MI Total",
              value: "Óbitos em crianças <1 ano / nascidos vivos × 1.000. Indicador-chave de desenvolvimento. Brasil ≈ 12–15/1000.",
              highlight: true
            },
            {
              label: "Mortalidade Neonatal Precoce",
              value: "0–6 dias. Reflete assistência pré-natal e ao parto. ~70% dos óbitos neonatais. Causas: prematuridade, asfixia, malformação.",
              highlight: true
            },
            {
              label: "Mortalidade Neonatal Tardia",
              value: "7–27 dias. Afecções perinatais + malformações congênitas. ~20–25% dos óbitos neonatais.",
              highlight: true
            },
            {
              label: "Mortalidade Pós-Neonatal",
              value: "28–364 dias. Reflete qualidade de vida, nutrição, acesso pediátrico. Redutível com saneamento + imunização. ~5–10% dos óbitos."
            },
            {
              label: "Mortalidade Perinatal",
              value: "Inclui natimorto (≥22 sem gestação) + óbito neonatal precoce (0–7 dias). Reflete assistência ao trabalho de parto e RN. Fórmula: (natimortos + óbitos 0–7d) / (nascidos vivos + natimortos) × 1.000."
            },
            {
              label: "Natimortalidade",
              value: "Óbitos fetais ≥28 semanas / nascidos vivos × 1.000. Indicador sensível de qualidade gestacional. Correlaciona com pré-eclampsia, sífilis, infecções."
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola de Prova — Quando Contar como Óbito Perinatal",
          text: "Natimorto <22 semanas NÃO conta como óbito perinatal, só como morte fetal espontânea (aborto). A partir de 22 semanas é considerado nascimento com direitos. Isso afeta cálculo de mortalidade perinatal e tem implicações legais."
        },
        {
          type: "decision",
          title: "Estratégias de Redução por Componente",
          decisions: [
            {
              condition: "Reduzir Mortalidade Neonatal Precoce",
              color: "#EC4899",
              actions: [
                "Pré-natal de qualidade (detecta pré-eclâmpsia, crescimento restrito)",
                "Acesso ao parto (evita asfixia intraparto)",
                "Reanimação neonatal treinada",
                "Disponibilidade de UTIN"
              ]
            },
            {
              condition: "Reduzir Mortalidade Neonatal Tardia",
              color: "#F59E0B",
              actions: [
                "Diagnóstico precoce malformações (US pré-natal)",
                "Alojamento conjunto + amamentação",
                "Triagem neonatal expandida"
              ]
            },
            {
              condition: "Reduzir Mortalidade Pós-Neonatal",
              color: "#10B981",
              actions: [
                "Saneamento básico + água segura",
                "Vacinação (calendário completo)",
                "Atenção básica pediátrica",
                "Educação materna (sinais de alerta)"
              ]
            }
          ]
        }
      ]
    }
  },

  {
    id: "indicadores-compostos",
    name: "Indicadores Compostos",
    color: "#EF4444",
    content: {
      title: "APVP, DALY e Medidas de Carga de Doença",
      blocks: [
        {
          type: "obs",
          title: "Conceito: Carga de Doença além da Mortalidade",
          text: "Morte prematura é grave, mas viver com incapacidade também. APVP e DALY quantificam essa carga. Dirigentem políticas de priorização — onde investir recursos. OMS usa DALY para Global Burden of Disease."
        },
        {
          type: "grid",
          title: "APVP — Anos Potenciais de Vida Perdidos",
          items: [
            {
              label: "Definição",
              value: "Diferença entre expectativa de vida na população e idade ao óbito. Quantifica impacto de morte precoce por uma causa específica.",
              highlight: true
            },
            {
              label: "Fórmula",
              value: "Σ (idade esperada de morte – idade real de morte) para cada óbito por causa X. Unidade: anos. Ex: óbito aos 30 anos (expectativa 80) = 50 anos perdidos.",
              highlight: true
            },
            {
              label: "Interpretação",
              value: "Causa de morte em jovens = APVP alto (maior impacto). Causa de morte em idosos = APVP baixo. Homicídio, suicídio, acidentes = APVP altíssimo (morte aos 20–40 anos)."
            },
            {
              label: "Uso Prático",
              value: "Priorizar prevenção em causas de APVP alto (morte violenta, câncer em jovens). APVP elevado em Brasil por mortes por agressão, acidentes de trânsito."
            }
          ]
        },
        {
          type: "grid",
          title: "DALY — Disability-Adjusted Life Years",
          items: [
            {
              label: "Definição",
              value: "Medida integrada de carga de doença = morte prematura + vida com incapacidade. 1 DALY = 1 ano de vida 'perdido' (por morte ou incapacidade).",
              highlight: true
            },
            {
              label: "Fórmula",
              value: "DALY = YLL (anos de vida perdidos por morte) + YLD (anos de vida com deficiência). YLL usa mesma lógica APVP. YLD = prevalência da deficiência × duração × peso de incapacidade.",
              highlight: true
            },
            {
              label: "Diferença APVP",
              value: "APVP só conta mortes. DALY conta morte + sobrevida com incapacidade (ex: cegueira por diabetes, deformidade por poliomielite). DALY é mais completo."
            },
            {
              label: "Top 3 Causas de DALY (Global 2023)",
              value: "1. Doença cardíaca isquêmica. 2. Depressão/transtorno mental. 3. Acidente vascular encefálico. Note: depressão não mata mas causa DALY grande."
            },
            {
              label: "Aplicação Brasil",
              value: "Violência/agressão causa DALY altíssimo (morte precoce + sequela psicológica). Justifica investimento em segurança pública, não só saúde clínica."
            }
          ]
        },
        {
          type: "alert",
          color: "#F59E0B",
          title: "Quando Usar APVP vs DALY",
          text: "APVP = foco em mortalidade precoce, priorização rápida. DALY = análise completa de carga (mortalidade + morbidade incapacitante). OMS recomenda DALY para alocação de recursos complexa. Brasil usa ambos."
        }
      ]
    }
  },

  {
    id: "sistemas-informacao",
    name: "Sistemas de Informação",
    color: "#10B981",
    content: {
      title: "Fluxos de Dados em Saúde Pública (SINASC, SINAN, SIM, etc.)",
      blocks: [
        {
          type: "obs",
          title: "Função dos Sistemas de Informação",
          text: "Bases centralizadas de dados em saúde. Cada sistema coleta um tipo específico de evento. Dados fluem de unidades de saúde → secretarias municipais → estaduais → federal (DATASUS). Permitem resposta rápida a surtos e acompanhamento de políticas públicas."
        },
        {
          type: "grid",
          title: "SINASC — Sistema de Informação de Nascidos Vivos",
          items: [
            { label: "O que coleta", value: "Nascimentos vivos (dados da mãe, recém-nascido, parto)", highlight: true },
            { label: "Frequência", value: "Declaração de nascido vivo (DNV) — todos os nascimentos, públicos e privados" },
            { label: "Indicadores gerados", value: "Natalidade, taxa de fecundidade, cobertura pré-natal, tipo de parto (vaginal vs cesariana)" },
            { label: "Quem alimenta", value: "Maternidades, hospitais, cartórios. Obrigatório registrar no 1º ano de vida." },
            { label: "Uso crítico", value: "Monitorar acesso ao parto, qualidade pré-natal, taxa de cesariana (Brasil ≈60% — acima de 15% OMS)" }
          ]
        },
        {
          type: "grid",
          title: "SINAN — Sistema de Informação de Agravos de Notificação",
          items: [
            { label: "O que coleta", value: "Doenças de notificação compulsória (tuberculose, aids, dengue, sarampo, meningite, hepatite, etc.)", highlight: true },
            { label: "Frequência", value: "Notificação em 24h–7 dias (varia por doença). Permitir resposta rápida a epidemias." },
            { label: "Indicadores", value: "Incidência por agravo, surtos, tendências, população de risco" },
            { label: "Quem notifica", value: "Profissionais de saúde (médicos, enfermeiros). Sigiloso — protege privacidade" },
            { label: "Diferencial", value: "Permite vigilância ativa (busca ativa) vs passiva (espera denúncia). Surtos requerem vigilância ativa." }
          ]
        },
        {
          type: "grid",
          title: "SIM — Sistema de Informação de Mortalidade",
          items: [
            { label: "O que coleta", value: "Todos os óbitos — causa, idade, data, local. Base: Declaração de Óbito (DO)", highlight: true },
            { label: "Frequência", value: "Mensal–trimestral. Permite análise de tendências de mortalidade." },
            { label: "Indicadores", value: "TMG, mortalidade por causa específica, mortalidade proporcional, análise Curvas Nelson Moraes" },
            { label: "Crítico em prova", value: "Diferencia óbitos por causa X vs óbitos em portadores de X. Exige codificação ICD-10 correta." },
            { label: "Uso", value: "Direciona políticas (ex: redução de AIDS → campanhas), apoia pesquisa epidemiológica" }
          ]
        },
        {
          type: "grid",
          title: "SIH — Sistema de Informações Hospitalares",
          items: [
            { label: "O que coleta", value: "Internações hospitalares — diagnóstico, procedimento, permanência, custos (AIH)", highlight: true },
            { label: "Frequência", value: "Diária–mensal. Reflete morbidade que requer hospitalização." },
            { label: "Indicadores", value: "Taxa de internação, média de permanência, custos por procedimento, óbitos hospitalares" },
            { label: "Limitação", value: "Só casos graves (internados). Não capta ambulatório ou atenção básica." },
            { label: "Uso", value: "Planejamento hospitalar, alocação de recursos, análise de eficiência" }
          ]
        },
        {
          type: "grid",
          title: "SIAB — Sistema de Informação da Atenção Básica",
          items: [
            { label: "O que coleta", value: "Dados de unidades básicas de saúde — cobertura, grupos de risco, acompanhamento de crônicos", highlight: true },
            { label: "Frequência", value: "Contínua. Monitorar qualidade pré-natal, cobertura vacinal, controle de hipertensão/diabetes" },
            { label: "Indicadores", value: "Taxa de cobertura ESF, % gestantes com pré-natal, % hipertensos acompanhados" },
            { label: "Crítico", value: "SIAB é porta de entrada para resolutividade. Dados SIAB definem atuação de ACS (agentes comunitários de saúde)" },
            { label: "Uso", value: "Detectar gaps de cobertura, planejar ações de saúde da família" }
          ]
        },
        {
          type: "grid",
          title: "SIA + APAC — Sistemas Ambulatorial e Alta Complexidade",
          items: [
            { label: "SIA (Sis. Informação Ambulatorial)", value: "Dados de procedimentos ambulatoriais (consultas, vacinas, atos clínicos). Gestão de recursos entre serviços." },
            { label: "APAC (Autorização Procedimento Alta Compl.)", value: "Rastreia procedimentos de custo elevado (quimioterapia, hemofilia, transplante, HIV/aids avançada)." },
            { label: "Indicadores SIA", value: "Volume de procedimentos, custos médios, resolutividade ambulatorial" },
            { label: "Indicadores APAC", value: "Acesso a medicações de alto custo, taxa de dispensação, conformidade com protocolos" },
            { label: "Uso crítico", value: "APAC garante disponibilidade de medicações caras (retrovirais, etc.); sem APAC, acesso é desigual." }
          ]
        },
        {
          type: "grid",
          title: "SICLOM — Sistema Controle Logístico de Medicamentos",
          items: [
            { label: "O que rastreia", value: "Distribuição de medicações (especialmente retrovirais HIV, antituberculosos, antimaláricos)", highlight: true },
            { label: "Objetivo", value: "Garantir disponibilidade sem ruptura. Evita abandono de tratamento por falta de medicação." },
            { label: "Dados", value: "Entrada/saída de medicação por serviço, estoque, desperdício" },
            { label: "Crítico em prova", value: "Conhecer existência = diferenciar problema de acesso (medicação disponível mas não dispensada) de problema de fornecimento (medicação falta)." }
          ]
        }
      ]
    }
  },

  {
    id: "transicoes",
    name: "Transição Demográfica e Epidemiológica",
    color: "#8B5CF6",
    content: {
      title: "Mudanças Populacionais e de Padrão de Doença",
      blocks: [
        {
          type: "obs",
          title: "Transição Demográfica — Mudanças na Estrutura Etária",
          text: "Processo de mudança de população jovem (taxa natalidade alta, mortalidade alta) para população envelhecida (natalidade baixa, mortalidade baixa mantida). Brasil está na 3ª fase: queda natalidade contínua, envelhecimento progressivo. Impacto: mais doenças crônicas, menos infecciosas, mudança de custos de saúde."
        },
        {
          type: "flow",
          title: "Fases da Transição Demográfica",
          steps: [
            { text: "FASE 1: Altas natalidade e mortalidade. População jovem. Ciclo pré-transição (países menos desenvolvidos)", color: "#EF4444" },
            { text: "FASE 2: Queda rápida de mortalidade (vacina, antibiótico, saneamento). Natalidade ainda alta. Explosão populacional (década 1960–80 Brasil)", color: "#F59E0B" },
            { text: "FASE 3: Queda contínua de natalidade (educação, planejamento reprodutivo, urbanização). Envelhecimento inicia. (Brasil 1990–2020)", color: "#84CC16" },
            { text: "FASE 4: Natalidade e mortalidade baixas, estáveis. População envelhecida. Taxa crescimento ≈ zero (Japão, Europa)", color: "#10B981" }
          ]
        },
        {
          type: "obs",
          title: "Transição Epidemiológica — Mudança no Padrão de Doença",
          text: "Evolução de população com predominância de doenças infecciosas/agudas (tuberculose, diarréia, sarampo) para doenças crônicas/degenerativas (diabetes, hipertensão, câncer, cardiopatia). Diretamente vinculada à transição demográfica. Brasil: TIPO 3 (U) → TIPO 4 (J) progressivamente. Impacto: mudança de estratégia clínica (cura para controle), medicações contínuas, custos de saúde elevados."
        },
        {
          type: "decision",
          title: "Impactos da Transição no Modelo de Saúde",
          decisions: [
            {
              condition: "País em Fase 1–2 da Transição",
              color: "#EF4444",
              actions: [
                "Foco: prevenção infecções, saneamento, vacinação",
                "Infraestrutura: atenção básica descentralizada, campanhas de massa",
                "Custo: baixo per capita, alta mortalidade evitável",
                "Exemplo: Moçambique, Haiti"
              ]
            },
            {
              condition: "País em Fase 3 (Brasil atual)",
              color: "#F59E0B",
              actions: [
                "Foco duplo: controlar infecções MAIS gerenciar crônicos",
                "Infraestrutura: atenção básica forte + centros especializados",
                "Custo: aumentando por demanda de crônicos",
                "Desafio: inequidade (pobres ainda têm TB, ricos têm diabetes)"
              ]
            },
            {
              condition: "País em Fase 4 (Desenvolvimento avançado)",
              color: "#10B981",
              actions: [
                "Foco: gerenciamento de crônicos, qualidade de vida, prevenção de complicações",
                "Infraestrutura: hospitalização seletiva, home care, reabilitação",
                "Custo: altíssimo por envelhecimento, demanda medicações caras",
                "Exemplo: Japão, Suécia, Canadá"
              ]
            }
          ]
        },
        {
          type: "alert",
          color: "#EC4899",
          title: "Armadilha de Prova: Não Confundir Fenômeno com Solução",
          text: "Transição demográfica e epidemiológica DESCREVEM o que aconteceu. Não são estratégias de intervenção. A resposta de saúde pública deve ser adaptada AO padrão de transição, mas transição em si não resolve problema — requer políticas ativas (vacinação, educação, regulação de alimentos ultraprocessados, controle de risco cardiovascular)."
        }
      ]
    }
  },

  {
    id: "indicadores-sanitarios",
    name: "Indicadores Sanitários Especiais",
    color: "#84CC16",
    content: {
      title: "Cálculos, Fórmulas e Interpretação Clínica",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Bancas Pegam: Confusão entre Denominadores",
          text: "PREVALÊNCIA denominador = população total. INCIDÊNCIA denominador = população SUSCEPTÍVEL (sem a doença). MORTALIDADE denominador = população exposta. LETALIDADE denominador = DOENTES. Errar denominador = resposta errada, mesmo com numerador certo. Atenção!"
        },
        {
          type: "grid",
          title: "Fórmulas Críticas — Memorizadas Exatas",
          items: [
            {
              label: "PREVALÊNCIA",
              value: "Total de casos (novos + antigos) / População total × 100. Expressa em %. Exemplo: 5% da população tem diabetes.",
              highlight: true
            },
            {
              label: "INCIDÊNCIA",
              value: "Casos novos / População susceptível × 1.000 (ou 10.000, 100.000 — depende da escala). Período = 1 ano (padrão). Expressa em casos/1000/ano.",
              highlight: true
            },
            {
              label: "DENSIDADE DE INCIDÊNCIA",
              value: "Casos novos / Σ (pessoa-tempo em risco). Se 1000 pessoas acompanhadas 1 ano = 1000 pessoa-anos. 10 casos novos = 10/1000 = 10 por 1000 pessoa-ano.",
              highlight: true
            },
            {
              label: "TAXA DE MORTALIDADE GERAL",
              value: "Óbitos totais / População total × 1.000. Número absoluto, sem especificidade de causa. Sobe com envelhecimento populacional."
            },
            {
              label: "MORTALIDADE POR CAUSA ESPECÍFICA",
              value: "Óbitos por causa X / População total × 10 (não × 1.000). Unidade diferente! Mais baixa que TMG porque especifica causa."
            },
            {
              label: "MORTALIDADE INFANTIL",
              value: "Óbitos crianças <1 ano / Nascidos vivos × 1.000. Meta OMS: <5/1000. Brasil 2024: ≈12–15/1000."
            },
            {
              label: "MORTALIDADE MATERNA",
              value: "Óbitos maternos / Nascidos vivos × 100.000. Expressa em /100.000 (diferente de MI que é /1.000). Meta OMS: <70/100.000."
            },
            {
              label: "COEFICIENTE DE ATAQUE",
              value: "Casos secundários / Total de contatos × 100. Expressa em %. Doença altamente contagiosa = >30%."
            },
            {
              label: "LETALIDADE",
              value: "Óbitos em doentes com X / Total de doentes com X × 100. Expressa em %. Mede gravidade da doença."
            }
          ]
        },
        {
          type: "grid",
          title: "Interpretação Clínica — Quando Usar Qual",
          items: [
            {
              label: "Rastreamento de Doença",
              value: "Use PREVALÊNCIA (quantos têm doença agora). Incidência não capta casos antigos já controlados.",
              highlight: true
            },
            {
              label: "Programa de Prevenção Primária",
              value: "Use INCIDÊNCIA (risco de novos casos). Se incidência cai = prevenção funcionou.",
              highlight: true
            },
            {
              label: "Qualidade de Assistência",
              value: "Compare MORTALIDADE (população) com LETALIDADE (doentes). Se mortalidade sobe mas letalidade cai = mais diagnósticos, melhor tratamento."
            },
            {
              label: "Gravidade de Epidemia",
              value: "Use COEFICIENTE DE ATAQUE (rapidez de transmissão) + LETALIDADE (gravidade). Ambos altos = emergência pública."
            },
            {
              label: "Alocação de Recursos",
              value: "Use DALY (carga de doença completa). APVP sozinho subestima doenças crônicas incapacitantes."
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola de Prova — Prevalência sobe, Incidência cai",
          text: "Cenário real: programa de rastreamento de diabetes inicia. Encontra muitos diabéticos não diagnosticados (prevalência sobe abruptamente). Ao mesmo tempo, diagnosticar + tratar precocemente reduz casos novos (incidência cai). Não confundir com piora — é achado de rastreamento."
        },
        {
          type: "obs",
          title: "Pérola de Prova — Coeficiente de Ataque em Surto",
          text: "Surto de gastroenterite em creche: 20 crianças adoeceram, 80 foram expostas. Coef. ataque = 20/80 = 25%. Permite ranking de alimentos (qual alimento teve maior ataque? esse é o culpado). Ferramentas essencial de resposta rápida em saúde pública."
        }
      ]
    }
  }
];

export default function MedidasSaudeColetiva() {
  return (
    <MedPanelPage
      sections={sections}
      specialty="Saúde Coletiva"
      title="Medidas de Saúde Coletiva — Guia Completo"
    />
  );
}
