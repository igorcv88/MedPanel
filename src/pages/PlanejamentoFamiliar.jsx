import MedPanelPage from "./medpanel-layout";

const sections = [
  {
    id: "fundamentos",
    name: "Fundamentos",
    color: "#6366F1",
    content: {
      title: "Conceitos fundamentais e critérios de elegibilidade",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Abordagem Initial Correta",
          text: "Iniciar contraceptivo na PRIMEIRA consulta. Necessário APENAS anamnese + PA. Não solicitar exames antes de iniciar (WHO MEC). Reduz perda de oportunidade contraceptiva."
        },
        {
          type: "grid",
          title: "Índice de Pearl — Medida de Eficácia",
          items: [
            {
              label: "Fórmula",
              value: "(Nº gestações × 12 × 100) / Nº total meses exposição",
              highlight: true
            },
            {
              label: "Métodos Efetivos",
              value: "Índice < 1% (DIU, implante, injetável)",
              highlight: true
            },
            {
              label: "Uso Perfeito vs Uso Típico",
              value: "Compara aderência perfeita com aderência real (ex: pilha esquecida, camisinha rasgada)"
            }
          ]
        },
        {
          type: "decision",
          title: "Critérios de Elegibilidade (WHO MEC)",
          decisions: [
            {
              condition: "Categoria 1",
              color: "#10B981",
              actions: ["Uso liberado sem restrições"]
            },
            {
              condition: "Categoria 2",
              color: "#F59E0B",
              actions: ["De modo geral, use o método"]
            },
            {
              condition: "Categoria 3",
              color: "#F97316",
              actions: ["Não recomendado. Pode usar SOMENTE se não houver outro método disponível"]
            },
            {
              condition: "Categoria 4",
              color: "#EF4444",
              actions: ["PROIBIDO — risco supera benefício"]
            }
          ]
        },
        {
          type: "obs",
          title: "Sigilo Médico em Anticoncepção",
          text: "Mantém sigilo mesmo em adolescentes (necessário termo de consentimento). Única exceção: deficit cognitivo (responsável legal obrigatório). Quebra de sigilo SOMENTE se risco de vida ou suspeita abuso sexual. Fundamento: Lei 8.069/90 (ECA) e CFM."
        }
      ]
    }
  },

  {
    id: "comportamentais",
    name: "Comportamentais",
    color: "#10B981",
    content: {
      title: "Métodos baseados em reconhecimento do período fértil",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Pré-requisitos Absolutos",
          text: "CICLOS REGULARES com variação < 6 dias — registrados por MÍNIMO 6 meses. Sem essas condições, eficácia cai drasticamente. Não recomenda-se para mulheres com ciclos irregulares ou adolescentes com ciclos ainda instáveis."
        },
        {
          type: "grid",
          title: "Técnicas Disponíveis",
          items: [
            {
              label: "Tabelinha (Ogino)",
              value: "Período fértil = (dias ciclo mais curto - 18) até (dias ciclo mais longo - 11). Ex: ciclo 26-30 dias → fértil dias 8-19",
              highlight: true
            },
            {
              label: "Temperatura Basal",
              value: "Medir ao acordar em jejum. Aumento 0,2-0,5°C após ovulação = período infértil começou. Exige disciplina diária."
            },
            {
              label: "Muco Cervical (Billings)",
              value: "Evitar relação no dia que perceber muco fluido + dia subsequente. Após 4 dias sem muco pode retomar. Requer autoexame."
            },
            {
              label: "Amenorreia Lactacional",
              value: "Válido até 6 meses pós-parto com amenorreia mantida + mamadas frequentes sem grandes intervalos. Eficácia alta se critérios estritos."
            }
          ]
        },
        {
          type: "obs",
          title: "Eficácia — Índice de Pearl",
          text: "Tabelinha: 9,3 (uso típico). Temperatura basal: 1,8. Muco cervical: 3,5. Amenorreia lactacional: 1,5. Nota: métodos comportamentais dependem 100% da aderência. Altas taxas de falha em uso real (não perfeito)."
        }
      ]
    }
  },

  {
    id: "barreira",
    name: "Barreira",
    color: "#0EA5E9",
    content: {
      title: "Métodos de barreira mecânica",
      blocks: [
        {
          type: "grid",
          title: "Camisinha",
          items: [
            {
              label: "Indicação Ouro",
              value: "SEMPRE recomenda se risco de IST. Dupla proteção (anticoncepcional + IST). Único método que protege ambos.",
              highlight: true
            },
            {
              label: "Lubrificante",
              value: "OBRIGATORIAMENTE à base de água. NUNCA óleo (degrada látex). Reaplica lubrificante durante ato se necessário."
            },
            {
              label: "Combinações a Evitar",
              value: "NÃO combinar camisinha + diafragma (atrito mútuo danifica ambos e reduz eficácia)."
            },
            {
              label: "Eficácia (Pearl)",
              value: "Uso perfeito: 2%. Uso típico: 12–18% (alta dependência de aderência e técnica correta)."
            }
          ]
        },
        {
          type: "grid",
          title: "Diafragma",
          items: [
            {
              label: "Uso Correto",
              value: "Inserir 15 minutos ANTES da relação. OBRIGATÓRIO usar com espermicida.",
              highlight: true
            },
            {
              label: "Armadilha: Espermicida",
              value: "Espermicida AUMENTA número de microlesões vaginais → AUMENTA RISCO DE HIV. Use com cautela. Preferir diafragma sem espermicida se possível.",
              highlight: true
            },
            {
              label: "Medida do Colo",
              value: "Medir tamanho do colo uterino obrigatório para indicar tamanho correto do diafragma. REVISAR tamanho se variação >10kg peso ou grandes lacerações perineais."
            },
            {
              label: "Eficácia (Pearl)",
              value: "Uso perfeito: 6%. Uso típico: 16%. Requer inserção correta + aplicação espermicida = baixa aderência real."
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola: Espermicida é Fator de Risco para HIV",
          text: "Metanálise Cochrane (2012): uso frequente de nonoxinol-9 (spermicida) associado a microlesões vaginais e risco aumentado infecção HIV em mulheres de risco. Evitar recomendação rotineira de diafragma + espermicida em populações vulneráveis."
        }
      ]
    }
  },

  {
    id: "combinados",
    name: "Hormonal Combinado",
    color: "#EC4899",
    content: {
      title: "Contraceptivos hormonais combinados (estrogênio + progesterona)",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Risco de Tromboembolismo — Mecanismo Crítico",
          text: "ESTRÓGENO É O ÚNICO RESPONSÁVEL PELO RISCO DE TROMBO. Aumenta fatores de coagulação (II, VII, X), fibrinogênio e reduz antitrombina III. Metabólito estrogênico que passa pelo fígado intensifica produção de fatores. Risco 80x MAIOR no puerpério — NUNCA iniciar ACO ≤6 semanas pós-parto vaginal ou ≤21 dias pós-cesariana."
        },
        {
          type: "grid",
          title: "Estrogênio — Dose e Tipo",
          items: [
            {
              label: "Etinilestradiol (EE)",
              value: "Mais comum (>90% formulações). Metabolismo hepático intenso → maior risco trombo.",
              highlight: true
            },
            {
              label: "Estradiol Natural (17-β-estradiol, valerato estradiol)",
              value: "Metabolismo reduzido (intestinal + hepático) → menor risco trombo. Preferir se disponível e fator risco presente."
            },
            {
              label: "Dose Ultrabaixa",
              value: "<20 mcg EE — reduz risco trombo, mas aumenta spotting/breakthrough bleeding"
            },
            {
              label: "Dose Baixa",
              value: "20–35 mcg EE — balanço risco-benefício usual"
            },
            {
              label: "Dose Alta",
              value: ">35 mcg EE — SOMENTE com ciproterona (efeito antiandrogenico em SOMP). Aumenta risco trombo significantly."
            }
          ]
        },
        {
          type: "grid",
          title: "Progesterona — Gerações e Risco Trombótico",
          items: [
            {
              label: "1ª Geração",
              value: "Levonogestrel — Aumenta 2x risco trombo vs placebo. MENOS trombogênico."
            },
            {
              label: "2ª Geração",
              value: "Levonorgestrel, norgestimato, norethisterone — MENOS TROMBOGÊNICO. Linha de base."
            },
            {
              label: "3ª Geração",
              value: "Gestodeno, desogestrel, norgestimato — Aumenta 8x risco trombo vs placebo (metanálise Cochrane). MAIS trombogênico."
            },
            {
              label: "4ª Geração (Drospierenona, dienogeste)",
              value: "Aumento trombo similar a 3ª geração (8x). Atividade antimineralocorticoide adicional.",
              highlight: true
            },
            {
              label: "Ciproterona",
              value: "Antiandrogenico potente. USO EXCLUSIVO em SOMP (síndrome ovário policístico/acne/hirsutismo). Alto risco trombótico."
            }
          ]
        },
        {
          type: "grid",
          title: "Efeito Antiandrogenico (Ciproterona, Drospirenona)",
          items: [
            {
              label: "Mecanismo",
              value: "Reduz testosterona livre (+SHBG), reduz proandrogênios na teca ovariana (menos DHT), reduz LH"
            },
            {
              label: "Indicação",
              value: "Acne moderada-severa, alopecia androgenética, hirsutismo. NÃO usar como contraceptivo puro sem indicação dermatológica."
            },
            {
              label: "Efeito Colateral Adicional",
              value: "Retenção hídrica, hipertensão, aumento risco VTE (vigilância PA e S&S trombose)"
            }
          ]
        },
        {
          type: "flow",
          title: "Efeitos Colaterais Dose-Dependentes",
          steps: [
            {
              text: "Estrogênio ↑ → Tontura, náusea, cefaleia, edema, congestão mamária, trombose",
              color: "#EC4899"
            },
            {
              text: "Progesterona ↑ → Fadiga, queda libido, depressão, mastalgia",
              color: "#EC4899"
            },
            {
              text: "Abordagem: Ajustar dose/tipo → trocar para dose menor EE ou estradiol natural",
              color: "#10B981"
            }
          ]
        },
        {
          type: "grid",
          title: "Apresentações Combinadas",
          items: [
            {
              label: "Oral Monofásico",
              value: "Mesma dose todos os dias. Simplicidade, reduz erro."
            },
            {
              label: "Oral Multifásico",
              value: "Doses diferentes a cada semana ou dia (ex: 21-dias progredindo). Mimetiza ciclo natural, ↓ spotting, mas ↑ confusão/erro uso."
            },
            {
              label: "Oral Contínuo (Seasonale®)",
              value: "84 dias de pílula + 7 dias placebo = 4 menstruações/ano. Reduz cefaleia catamenial, dismenorreia. Aumenta spotting inicial."
            },
            {
              label: "Anel Vaginal (Nuvaring®)",
              value: "Troca a cada 7 dias. Inicia 1º dia ciclo. NÃO pode usar se PESO >90kg (reduz eficácia)."
            },
            {
              label: "Adesivo Transdérmico (Evra®)",
              value: "Troca a cada 7 dias (dia 1, 8, 15 do ciclo). Similar anel. Risco aderência em clima quente/suor."
            },
            {
              label: "Injetável Mensal (Lunelle®, Cyclofem®)",
              value: "Bloqueio FSH (estrogênio) + bloqueio recrutamento folicular. Raramente disponível. Resgistro descontinuado em vários países.",
              highlight: true
            }
          ]
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "Contraindicações CATEGORIA 4 (PROIBIDO)",
          text: "Tromboembolismo venoso ou arterial (passado ou presente) • História pessoal TEP/AVC/IAM • Tabagismo ≥15 cigarros/dia + idade >35 anos • Enxaqueca COM AURA (alto risco AVC em ACO + aura) • Doença cardiovascular atual ou prévia • HAS com doença vascular sistêmica (nefropatia, retinopatia) • CA mama ativo • CA fígado/cirrose descompensada • Imobilização prolongada (cirurgia, gesso >7 dias)"
        },
        {
          type: "alert",
          color: "#F59E0B",
          title: "Contraindicações CATEGORIA 3 (com cautela)",
          text: "Tabagismo 1–14 cigarros/dia + idade >35 anos (VTE ↑ ligeiramente) • Enxaqueca SEM aura em mulher >35 anos • Trombofilia assintomática (fator V Leiden, protrombina) • HAS controlada (140–159/100–109) • Epilepsia em uso com enzimoindutor (↓ ACO) • Lactação com <6 semanas pós-parto"
        },
        {
          type: "obs",
          title: "Trials Clássicos — Trombose e ACO",
          text: "WHO Collaborative Study (1995, 1998): ACO aumenta risco VTE 3–4x. 3ª geração desogestrel/gestodeno: risco 1,5x > 2ª geração. CRASH trial (2004): mesmo em poliestrumatizadas, ACO seguro se fora período agudo. Recomendação moderna: ACO com etinilestradiol ≤30 mcg + levonogestrel/norethisterone preferidos em mulheres com fatores risco trombótico."
        }
      ]
    }
  },

  {
    id: "progesterona",
    name: "Progesterona Isolada",
    color: "#F59E0B",
    content: {
      title: "Contraceptivos com progesterona isolada (sem estrogênio)",
      blocks: [
        {
          type: "alert",
          color: "#10B981",
          title: "Vantagem Cardiovascular",
          text: "SEM ESTROGÊNIO = SEM RISCO TROMBÓTICO. Primeira linha em mulheres com contraindicação a estrogênio (história TEP, AVC, tabagismo ≥15/dia + >35 anos, enxaqueca com aura)."
        },
        {
          type: "grid",
          title: "Minipílula Oral (Desogestrel 75 mcg)",
          items: [
            {
              label: "Mecanismo",
              value: "Bloqueio de LH → anovulação em ~95%. Alguns ciclos ovulam (nível progesterona insuficiente para ovulação, mas suficiente para impedir)."
            },
            {
              label: "Indicação Restrição",
              value: "SOMENTE em amamentação (lactação prolonga amenorreia natural). Fora amamentação, optar por injetável ou implante.",
              highlight: true
            },
            {
              label: "Eficácia (Pearl)",
              value: "Uso perfeito: 0,4%. Uso típico: 0,4% (excepcionalmente consistente, pois anovulação >95%)."
            },
            {
              label: "Vantagem",
              value: "Sem risco trombo, compatível com amamentação, ciclos mantidos (algumas menstruações)."
            }
          ]
        },
        {
          type: "grid",
          title: "Injetável Trimestral (Medroxiprogesterona 150 mg IM)",
          items: [
            {
              label: "Mecanismo",
              value: "Bloqueio FSH (progesterona) + bloqueio recrutamento folicular → atrofia endometrial. Amenorreia >50% após 1 ano.",
              highlight: true
            },
            {
              label: "Atraso",
              value: "Tolerância até 14 DIAS de atraso. Além disso, risco gestação não-protegida.",
              highlight: true
            },
            {
              label: "Efeito Colateral Crítico",
              value: "Perda massa óssea após 2 anos (bloqueio estradiol intenso). Redução 2–3% densidade óssea/ano. NÃO recomenda-se em <21 anos (fase de aquisição de pico ósseo).",
              highlight: true
            },
            {
              label: "Recuperação Óssea",
              value: "Parcial após descontinuação, mas déficit pode ser duradouro se uso prolongado em adolescentes."
            },
            {
              label: "Eficácia (Pearl)",
              value: "Uso perfeito: 0,2%. Uso típico: 0,2% (muito alta — apenas falhas no atraso/gravidez desapercebida)."
            }
          ]
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "Injetável Trimestral em <21 anos",
          text: "NÃO deve ser primeira linha. Reservar para situações especiais (adesão impossível, métodos reversíveis inadequados). Risco perda óssea irreversível fase crítica mineralização. Se necessário, máximo 2 anos; após, trocar para outro método."
        },
        {
          type: "grid",
          title: "Implante Subdérmico (Implanon®, Nexplanon®)",
          items: [
            {
              label: "Eficácia",
              value: "MAIS EFICAZ DE TODOS OS MÉTODOS REVERSÍVEIS. Índice de Pearl 0,05%. 99,95% efetivo. Bloqueio LH → anovulação.",
              highlight: true
            },
            {
              label: "Duração",
              value: "3 anos com eficácia preservada. Sem necessidade troca antes."
            },
            {
              label: "Padrão Sangramento",
              value: "Muito variável: amenorreia (20–40%), oligomenorreia, spotting frequente. SPOTTING é principal colateral (causa descontinuação em ~10%).",
              highlight: true
            },
            {
              label: "Inserção — Local Crítico",
              value: "8–10 cm ACIMA do epicondilo medial + 3–5 cm ABAIXO do sulco entre bíceps e tríceps (sulco bicipital). Imagem ultrassom pós-inserção confirma posição.",
              highlight: true
            },
            {
              label: "Reversibilidade",
              value: "Fertilidade retorna em semanas após remoção. Ciclo ovulatório restabelece-se rapidamente."
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola: Implante vs Outras Reversíveis em Aderência",
          text: "Se paciente com HISTÓRICO DE ADERÊNCIA RUIM (pílula esquecida, injeções atrasadas), implante é ouro. Eficácia independente do comportamento — set-and-forget. Estudos mostram taxa de gravidez 0,05% mesmo em populações de baixa renda com acesso inconsistente."
        }
      ]
    }
  },

  {
    id: "diu",
    name: "DIU",
    color: "#8B5CF6",
    content: {
      title: "Dispositivos intrauterinos (hormonal e cobre)",
      blocks: [
        {
          type: "alert",
          color: "#10B981",
          title: "DIU é Primeira Linha (ACOG 2017, IPPF 2016)",
          text: "Maior eficácia, menor taxa de descontinuação involuntária. NÃO requer exame pré-inserção. MITO: 'não colocar em nulípara' foi descartado — inserir em qualquer mulher que o deseje (ATLS, ACOG)."
        },
        {
          type: "grid",
          title: "DIU Hormonal — Tipos",
          items: [
            {
              label: "Myrena® (LNG 52 mg)",
              value: "Maior dose local. Gera MAIOR taxa amenorreia (~40%). Menos spotting. Trata ENDOMETRIOSE (ÚNICO método que trata). Dura 8 anos.",
              highlight: true
            },
            {
              label: "Kyleena® (LNG 19,5 mg)",
              value: "Menor dose local. MAIS spotting (menos amenorreia). Menor impacto sistêmico. Dura 5 anos. Preferir se spotting é problema em paciente."
            },
            {
              label: "Skyla® (LNG 13,5 mg)",
              value: "Ainda menor dose. Dura 3 anos. Disponibilidade limitada em Brasil."
            }
          ]
        },
        {
          type: "grid",
          title: "Mecanismo DIU Hormonal",
          items: [
            {
              label: "Bloqueio LH",
              value: "Suprime pico LH → impede ovulação (~40% ciclos). Ação local + sistêmica."
            },
            {
              label: "Anovulação",
              value: "Não absolutamente — alguns ciclos ovulam, mas progesterona local impede implantação."
            },
            {
              label: "Estabilização Endométrio",
              value: "Torna endométrio atrófico/inadequado para implantação embrionária. Principal mecanismo contraceptivo."
            }
          ]
        },
        {
          type: "alert",
          color: "#EF4444",
          title: "Contraindicações DIU — CATEGORIA 4",
          text: "Câncer de colo uterino ou suspeita • Gravidez • Sangramento transvaginal de origem desconhecida (até descartar malignidade) • Distorção cavidade uterina incompatível com inserção (ex: miomas cavitários massivos, aderências, malformação) • NOTA: CA mama é Categoria 3, não 4 (risco-benefício favorável se mama)"
        },
        {
          type: "obs",
          title: "Pérola: NÃO Requer USG Transvaginal antes de Inserção",
          text: "Contraindicação diz 'distorção de cavidade' — avaliar por história clínica, exame físico e USG transabdominal se suspeita. USG TV não é mandatório no Brasil antes de inserção (diferente de alguns protocolos europeus). Inserção sob visualização especular + toque vaginal é suficiente."
        },
        {
          type: "flow",
          title: "DIU Hormonal — Gravidez com Dispositivo Insitu",
          steps: [
            {
              text: "FIO VISÍVEL + <12 semanas",
              color: "#EF4444"
            },
            {
              text: "RETIRA DIU (↓ risco corioamnionite, aborto espontâneo)",
              color: "#10B981"
            },
            {
              text: "Prescrever azitromicina 500 mg DU (cobertura para infecção ascendente pós-extração)",
              color: "#F59E0B"
            },
            {
              text: "FIO NÃO VISÍVEL OU >12 semanas",
              color: "#EF4444"
            },
            {
              text: "DEIXA in situ (risco maior em remoção do que em manutenção)",
              color: "#10B981"
            }
          ]
        },
        {
          type: "alert",
          color: "#F59E0B",
          title: "Doença Inflamatória Pélvica (DIP) com DIU",
          text: "DIU AUMENTA risco DIP APENAS nos PRIMEIROS 3 SEMANAS pós-inserção (manipulação cervical ascensão de flora). Após 3 semanas, risco retorna ao baseline. Conduta: antibióticos conforme protocolo DIP. Remova DIU SOMENTE se: paciente deseja, ou refratário a antibióticos (falha após 72h). DIP não é contraindicação a manutenção DIU se responde a antibióticos."
        },
        {
          type: "grid",
          title: "DIU de Cobre — Mecanismo & Eficácia",
          items: [
            {
              label: "Mecanismo",
              value: "Íons cobre → inflamação crônica local endométrio → impede implantação. Espermicida secundário."
            },
            {
              label: "Eficácia (Pearl)",
              value: "Uso perfeito & típico: 0,6%. Eficácia 10 anos (T380A®). Mais eficaz que hormonal em alguns estudos."
            },
            {
              label: "Padrão Sangramento",
              value: "Aumento volume menstrual (~30–40%) + dismenorreia (principal razão descontinuação). Menos amenorreia que hormonal."
            },
            {
              label: "Indicação Especial",
              value: "Contracepção de emergência até 5 dias pós-relação desprotegida. MAIS eficaz que levonogestrel (NNT ~1 para evitar gravidez).",
              highlight: true
            }
          ]
        },
        {
          type: "obs",
          title: "Contracepção de Emergência — DIU de Cobre vs Levonogestrel",
          text: "DIU de cobre efetivo até 5 dias pós-coito (eficácia mantida). Levonogestrel dose única 1,5 mg efetivo até 72h com máxima eficácia, redução até 120h. DIU: NNT 1 (previne ~99% gestações). Levonogestrel: NNT 60 (previne ~60% gestações se ingerido <72h). Preferir DIU se disponível."
        }
      ]
    }
  },

  {
    id: "emergencia",
    name: "Emergência",
    color: "#EF4444",
    content: {
      title: "Contracepção de emergência — anticoncepção pós-coital",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Janela Terapêutica Crítica",
          text: "ATÉ 5 DIAS (120 horas) após relação desprotegida. Máxima eficácia até 72 horas. Não é abortivo — atua antes implantação (bloqueio LH, atraso/inibição ovulação, alteração endométrio)."
        },
        {
          type: "grid",
          title: "Opções Disponíveis",
          items: [
            {
              label: "Levonogestrel 1,5 mg (Dose Única)",
              value: "Tomar dentro de 120h (máximo), idealmente <72h. Mecanismo: bloqueio/atraso ovulação (não abortivo). NNT ~60 (reduz risco gravidez em ~60% se <72h).",
              highlight: true
            },
            {
              label: "DIU de Cobre",
              value: "Inserção até 5 dias (120h). MAIS eficaz que levonogestrel (NNT ~1). Eficácia mantida até limite 5 dias. Recomenda-se se disponível e sem contraindicação.",
              highlight: true
            },
            {
              label: "Mifepristone (RU-486)",
              value: "Antagonista progesterona. Efetivo até 120h. Indisponível Brasil. Eficácia superior levonogestrel (70% redução risco). Acesso limitado."
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola de Prova — Timing do Levonogestrel",
          text: "Questão típica: 'Mulher procura 80h após relação desprotegida com levonogestrel — ainda indica?' Sim, ainda dentro da janela de máxima eficácia (72–120h). Eficácia reduzida vs <72h, mas ainda ~50% de proteção. NÃO perder oportunidade. Orientação: antecipar ciclo (inicia novo contraceptivo regular imediatamente após levonogestrel)."
        }
      ]
    }
  },

  {
    id: "definitivos",
    name: "Definitivos",
    color: "#F97316",
    content: {
      title: "Esterilização cirúrgica — laqueadura tubária e salpingectomia",
      blocks: [
        {
          type: "grid",
          title: "Critérios Legais (Lei 9.263/1996)",
          items: [
            {
              label: "QUEM pode solicitar",
              value: "≥21 anos OU ≥2 filhos vivos com ≥18 anos cada. SEM necessidade consentimento do parceiro.",
              highlight: true
            },
            {
              label: "No Parto/Pós-parto",
              value: "Termo de consentimento assinado MÍNIMO 120 DIAS ANTES do procedimento. Exceção: descontinuação rara — pode solicitar até imediatamente pós-parto se atende critério anterior.",
              highlight: true
            },
            {
              label: "Sigilo",
              value: "Aplicam-se mesmas regras de sigilo contraceptivo — adolescente assina termo, confidencialidade mantida."
            }
          ]
        },
        {
          type: "alert",
          color: "#F59E0B",
          title: "Período Reflexão Obrigatório",
          text: "Mínimo 60 dias entre solicitação e procedimento (Lei 9.263). Procedimento eletivo — nunca em urgência. Permitir mudança de ideia. Aconselhamento pré-operatório sobre irreversibilidade é fundamental."
        },
        {
          type: "grid",
          title: "Técnicas de Esterilização",
          items: [
            {
              label: "Laqueadura Tubária",
              value: "Ligadura ou secção das tubas uterinas via laparoscopia ou mini-laparotomia. Reversão <50% bem-sucedida; ectópica risco 5x maior pós-reversão."
            },
            {
              label: "Salpingectomia (Atual Gold Standard)",
              value: "Remoção completa das tubas bilateralmente. Ligeiramente maior risco cirúrgico vs laqueadura, mas REDUZ risco câncer ovariano (remove foco origem epitélio tubo-ovariano). Recomendação ACOG/ASCO 2017.",
              highlight: true
            },
            {
              label: "Histeotomia + Laqueadura",
              value: "Indicação restrita (no contexto de histerectomia por outra razão). Não ofertada isoladamente para esterilização."
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola: Salpingectomia e Prevenção Câncer Ovariano",
          text: "Estudos recentes (meta-análise 2019) sugerem salpingectomia reduz risco câncer epitelial ovariano ~50% (remove potencial foco pré-canceroso). Além disso, ablação/desnervação ovariana parcial pode reduzir dor pélvica crônica em algumas mulheres. Preferir salpingectomia vs laqueadura simples."
        },
        {
          type: "grid",
          title: "Eficácia & Falha",
          items: [
            {
              label: "Eficácia Pearl",
              value: "Laqueadura/salpingectomia: 0,1% (1 gravidez por 1.000 mulheres-ano). Falha rara, geralmente por: revascularização espontânea, ligadura incompleta, técnica inadequada."
            },
            {
              label: "Ectópica",
              value: "Se falha ocorre, risco de ectópica é aumentado (~25% gestações pós-laqueadura). Deve-se considerar quando paciente com atraso menstrual + dor pélvica pós-laqueadura."
            }
          ]
        }
      ]
    }
  },

  {
    id: "comparativo",
    name: "Comparação",
    color: "#84CC16",
    content: {
      title: "Comparação de eficácia, segurança e recomendações",
      blocks: [
        {
          type: "grid",
          title: "Índice de Pearl — Ranking Eficácia (Uso Típico)",
          items: [
            {
              label: "0,05% — Implante (MAIS EFICAZ)",
              value: "Set-and-forget. Reversível. Principal limitante: spotting.",
              highlight: true
            },
            {
              label: "0,2% — DIU Hormonal + Injetável Trimestral",
              value: "Excelente aderência. DIU: sem efeito sistêmico. Injetável: perda óssea em <21 anos.",
              highlight: true
            },
            {
              label: "0,6% — DIU de Cobre",
              value: "Não-hormonal. Aumento menstrual/dismenorreia. Ouro para emergência."
            },
            {
              label: "0,4% — Minipílula (desogestrel 75 mcg)",
              value: "Restrição: amamentação. Sem risco trombo."
            },
            {
              label: "2% — Camisinha",
              value: "Dupla proteção (IST + gravidez). Principal colateral: aderência."
            },
            {
              label: "6% — Diafragma",
              value: "Requer medida, espermicida. Risco aumentado HIV (espermicida)."
            },
            {
              label: "9% — Tabelinha",
              value: "Requer ciclos regulares <6 dias. Muito dependente técnica + motivação."
            },
            {
              label: "12–18% — ACO + Anel + Adesivo",
              value: "Aderência crítica (esquecimento pílula, anel/adesivo saem). Risco trombo (estrogênio)."
            }
          ]
        },
        {
          type: "decision",
          title: "Escolha por Perfil de Paciente",
          decisions: [
            {
              condition: "Aderência Impossível",
              color: "#8B5CF6",
              actions: [
                "1ª linha: Implante (0,05%) ou DIU hormonal (0,2%)",
                "2ª linha: Injetável trimestral (se >21 anos, máximo 2 anos)",
                "Evitar: Qualquer pílula/anel/adesivo"
              ]
            },
            {
              condition: "Fator Risco Trombótico (tabagismo, TEP prévio, enxaqueca aura)",
              color: "#EF4444",
              actions: [
                "PROIBIDO: Qualquer ACO, anel, adesivo, injetável mensal",
                "1ª linha: DIU cobre (0,6%) ou DIU hormonal (0,2%)",
                "2ª linha: Minipílula desogestrel (amamentação) ou implante (0,05%)",
                "3ª linha: Injetável trimestral (0,2%) — sem risco trombo, perda óssea risco"
              ]
            },
            {
              condition: "Dismenorreia/Menorragia",
              color: "#EC4899",
              actions: [
                "1ª linha: DIU hormonal Myrena® (trata endometriose, amenorreia)",
                "2ª linha: ACO contínuo ou minipílula",
                "Evitar: DIU cobre (piora menorragia)"
              ]
            },
            {
              condition: "SOMP/Acne/Hirsutismo",
              color: "#F59E0B",
              actions: [
                "1ª linha: ACO com ciproterona + estrógeno baixo/ultrabaixo",
                "2ª linha: Implante ou DIU (menos benefício dermatológico)",
                "Vigilância: monitorar PA, risco trombo (ciproterona ↑)"
              ]
            },
            {
              condition: "Nulípara / Adolescente",
              color: "#10B981",
              actions: [
                "1ª linha: DIU (mito 'não nulípara' obsoleto), implante",
                "2ª linha: ACO ou anel (se boa aderência)",
                "Evitar: Injetável trimestral (<21 anos = perda óssea)"
              ]
            }
          ]
        },
        {
          type: "obs",
          title: "Guideline ACOG 2017 — Tiered Effectiveness",
          text: "Recomendação contemporânea: Pacientes sem contraindicação devem receber first-line offer de métodos LARC (Long-Acting Reversible Contraception) = DIU + implante. ACO/anel/adesivo como segunda linha por aderência inferior. Objetivo reduzir gravidez não-planejada em populações vulneráveis."
        },
        {
          type: "grid",
          title: "Segurança Cardiovascular — Quick Reference",
          items: [
            {
              label: "Sem Risco Trombo",
              value: "DIU (cobre + hormonal), implante, minipílula, injetável trimestral, métodos comportamentais, barreira, esterilização, emergência (fora levonogestrel em <72h, que tem risco teórico)",
              highlight: true
            },
            {
              label: "Risco Baixo",
              value: "ACO ultrabaixa dose EE (<20 mcg) + levonogestrel, estradiol natural"
            },
            {
              label: "Risco Moderado",
              value: "ACO 20–35 mcg EE + levonogestrel"
            },
            {
              label: "Risco Alto",
              value: "ACO >35 mcg EE + 3ª/4ª geração (desogestrel, gestodeno, drospirenona, ciproterona). 80x risco vs puerperio.",
              highlight: true
            }
          ]
        }
      ]
    }
  }
];

export default function PlanejamentoFamiliar() {
  return (
    <MedPanelPage
      sections={sections}
      specialty="Ginecologia"
      title="Planejamento Familiar — Guia Completo"
    />
  );
}