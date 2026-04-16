import MedPanelPage from "./medpanel-layout";

const sections = [
  {
    id: "cistite",
    name: "Cistite",
    color: "#EF4444",
    content: {
      title: "Cistite — Diagnóstico, Classificação e Tratamento",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Definição Operacional",
          text: "Infecção do trato urinário inferior com sintomas de disúria, polaciúria, urgência miccional e/ou hematúria. Ausência de febre ou sintomas sistêmicos. E. coli em 85% dos casos (FAREI NUNCA ESQUECER: E. coli > Staphylococcus saprophyticus > Klebsiella)."
        },
        {
          type: "grid",
          title: "Agentes Etiológicos",
          items: [
            { label: "E. coli", value: "85% das cistites. Gram-negativo. Fator de virulência: fímbrias tipo P e S de aderência ao uroepitélio.", highlight: true },
            { label: "S. saprophyticus", value: "2º agente mais comum em mulheres jovens sexualmente ativas. Gram-positivo coagulase-negativo. NUNCA é contaminante em urina.", highlight: true },
            { label: "Klebsiella pneumoniae", value: "Cápsula polissacarídica. Mais comum em diabéticos e hospitalizados." },
            { label: "Proteus mirabilis", value: "Produz urease → alcaliniza urina → cálculos de estruvita. Associado a litíase coraliforme." },
            { label: "Enterococcus faecalis", value: "Gram-positivo. Resistência intrínseca a cefalosporinas. Importante em ITU hospitalar e pós-procedimento urológico." },
            { label: "Candida spp.", value: "Considerar em DM, uso de ATB prolongado, cateter vesical. Fluconazol oral 200mg/dia × 14 dias." }
          ]
        },
        {
          type: "grid",
          title: "Fatores de Risco por Contexto",
          items: [
            { label: "Sexo feminino", value: "Uretra curta (4 cm vs 20 cm), proximidade com ânus, ausência de secreção prostática bactericida.", highlight: true },
            { label: "Atividade sexual", value: "Risco ↑ 60× após relação. 'Cistite da lua de mel'. Profilaxia pós-coito com dose única de nitrofurantoína ou TMP-SMX." },
            { label: "Espermicidas/Diafragma", value: "Alteram flora vaginal protetora (Lactobacillus). Eliminam colonização vaginal de E. coli." },
            { label: "Diabetes mellitus", value: "Glicosúria favorece crescimento bacteriano. ↑ risco de ITU complicada e enfisematosa (E. coli e Klebsiella produtores de gás)." },
            { label: "Gestação", value: "Bacteriúria assintomática obrigatoriamente tratada — risco de pielonefrite em 25-40% e parto prematuro.", highlight: true },
            { label: "Instrumentação/Cateter", value: "CAUTI: 3-8% por dia de cateterismo. Principal causa de bacteremia nosocomial. Troca de cateter antes de iniciar ATB." }
          ]
        },
        {
          type: "decision",
          title: "Classificação: Simples × Complicada",
          decisions: [
            {
              condition: "ITU Simples",
              color: "#10B981",
              actions: [
                "Mulher não grávida, pré-menopausa, imunocompetente",
                "Sem anomalia estrutural ou funcional do trato urinário",
                "Sem comorbidades relevantes",
                "Tratamento oral curto (3–5 dias) — NÃO necessita urocultura de rotina"
              ]
            },
            {
              condition: "ITU Complicada",
              color: "#EF4444",
              actions: [
                "Homem, gestante, criança, idoso, diabético, imunossuprimido",
                "Anomalia estrutural: litíase, obstrução, bexiga neurogênica, stent, RVU",
                "ITU associada a cateter (CAUTI)",
                "Falha terapêutica prévia ou sintomas > 7 dias",
                "SEMPRE solicitar urocultura + ATB por 7–14 dias conforme agente"
              ]
            }
          ]
        },
        {
          type: "flow",
          title: "Algoritmo Diagnóstico",
          steps: [
            { text: "Sintomas clássicos (disúria + polaciúria + urgência) — probabilidade pré-teste > 50%", color: "#6366F1" },
            { text: "Urinálise (EAS/dipstick): nitrito+ e/ou leucocitúria — sensibilidade 75-85% para bacteriúria", color: "#0EA5E9" },
            { text: "ITU não complicada em mulher jovem → TRATAR SEM UROCULTURA (IDSA 2010, EAU 2023)", color: "#10B981" },
            { text: "Urocultura obrigatória: gestante, criança, homem, ITU complicada, falha terapêutica, hospitalizados", color: "#F59E0B" },
            { text: "Critério de significância: ≥ 10³ UFC/mL (sintomática) | ≥ 10⁵ UFC/mL (assintomática)", color: "#8B5CF6" }
          ]
        },
        {
          type: "decision",
          title: "Tratamento por Situação Clínica",
          decisions: [
            {
              condition: "Não Complicada (mulher)",
              color: "#10B981",
              actions: [
                "1ª linha: Nitrofurantoína 100mg VO 12/12h × 5 dias (EAU 2023 — preserva flora, baixa resistência)",
                "Alternativa: Fosfomicina 3g VO dose única — não inferior a ciprofloxacino (RCT ECCMID 2012)",
                "Alternativa: TMP-SMX 160/800mg 12/12h × 3 dias — só se resistência local < 20%",
                "EVITAR fluoroquinolonas como 1ª linha — risco de seleção de resistência (FDA warning 2016)"
              ]
            },
            {
              condition: "Gestante",
              color: "#F59E0B",
              actions: [
                "Amoxicilina-Clavulanato 500/125mg 8/8h × 7 dias",
                "Cefalexina 500mg 6/6h × 7 dias — 1ª linha na maioria dos serviços",
                "Nitrofurantoína: EVITAR no 1º trimestre (risco teratogênico) e próximo ao termo (hemólise neonatal)",
                "TMP-SMX: EVITAR no 1º tri (antifolato) e 3º tri (kernicterus). Permitido no 2º trimestre",
                "Urocultura de controle 1-2 semanas após término do tratamento — obrigatório"
              ]
            },
            {
              condition: "Recorrente (≥ 2 episódios/6 meses ou ≥ 3/ano)",
              color: "#8B5CF6",
              actions: [
                "Profilaxia contínua: Nitrofurantoína 50-100mg/noite × 6-12 meses (reduz recorrência em 95%)",
                "Profilaxia pós-coito: Dose única de TMP-SMX ou nitrofurantoína após relação",
                "Tratar sempre com urocultura — buscar agente e perfil de resistência",
                "Cranberry (PAC-A): metanálise Cochrane 2012 — redução modesta de recorrência, sem eficácia comprovada vs placebo em RCTs robustos",
                "Investigar causa estrutural se > 3 episódios/ano por agente diferente"
              ]
            },
            {
              condition: "Bacteriúria Assintomática",
              color: "#6366F1",
              actions: [
                "TRATAR: gestante, antes de procedimento urológico invasivo",
                "NÃO TRATAR: mulher não grávida, homem, idoso institucionalizado, DM, portador de cateter de longa data",
                "NUNCA tratar BA em cateter de demora permanente — seleciona resistência sem benefício clínico"
              ]
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola — Nitrofurantoína e Função Renal",
          text: "Nitrofurantoína é CONTRAINDICADA se ClCr < 30 mL/min (FDA) — não atinge concentração urinária terapêutica e acumula metabólitos neurotóxicos. EAU 2023 usa < 45 mL/min como limiar. Pérola de banca: nefropata grave com ITU baixa → fosfomicina dose única é a melhor alternativa oral."
        },
        {
          type: "obs",
          title: "Trial — GLOBAL (2015) e COMBAT (2012): Resistência ao TMP-SMX",
          text: "No Brasil, a resistência do E. coli ao TMP-SMX ultrapassa 20-25% em muitas regiões (SENTRY 2019). A IDSA recomenda evitar TMP-SMX empírico quando resistência local ≥ 20%. Fluoroquinolonas têm resistência crescente (> 15-25% em E. coli urinário no Brasil) — reservar para casos específicos com cultura."
        }
      ]
    }
  },
  {
    id: "pielonefrite",
    name: "Pielonefrite",
    color: "#F97316",
    content: {
      title: "Pielonefrite — Diagnóstico, Complicações e Manejo",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Critério de Internação — DECISÃO CRÍTICA",
          text: "Internar se: vômitos intratáveis (impossibilidade de VO), sepse/instabilidade hemodinâmica, suspeita de obstrução ou abscesso, gestante, imunossuprimido, falha ambulatorial após 48-72h. Pielonefrite não complicada em adulto jovem → tratamento AMBULATORIAL."
        },
        {
          type: "grid",
          title: "Conceito e Apresentação Clínica",
          items: [
            { label: "Definição", value: "Infecção bacteriana do parênquima renal e sistema coletor. Maioria por via ascendente a partir de cistite.", highlight: true },
            { label: "Clínica Clássica", value: "Tríade: febre alta (> 38,5°C) + calafrios + dor em flanco/lombar. Náuseas e vômitos frequentes. Punho-percussão lombar positiva." },
            { label: "Síndrome Prostática Associada", value: "Em homens, toda 'pielonefrite' deve levantar suspeita de prostatite aguda. PSA pode elevar-se transitoriamente." },
            { label: "Pielonefrite Enfisematosa", value: "Gás no parênquima renal (TC). DM em 90% dos casos. E. coli + Klebsiella. Mortalidade 40-70%. NEFRECTOMIA de urgência frequentemente necessária." }
          ]
        },
        {
          type: "grid",
          title: "Diagnóstico Laboratorial",
          items: [
            { label: "Urinálise", value: "Leucocitúria, nitrito+, bacteriúria. Cilindros leucocitários — PATOGNOMÔNICOS de pielonefrite (envolvimento tubular).", highlight: true },
            { label: "Urocultura", value: "OBRIGATÓRIA em toda pielonefrite. Colher ANTES de iniciar ATB. Resultado em 48-72h guia deescalonamento." },
            { label: "Hemograma + PCR/VHS", value: "Leucocitose com desvio à esquerda. PCR e procalcitonina elevadas — procalcitonina > 0,5 ng/mL sugere bacteremia." },
            { label: "Hemocultura", value: "Colher em internados, sépticos ou imunocomprometidos. Bacteremia em 20-30% das pielonefrites graves." },
            { label: "TC abdome c/ contraste", value: "QUANDO SOLICITAR: suspeita de abscesso, obstrução, cálculo, falha após 72h de ATB, diabetes, pielonefrite enfisematosa.", highlight: true },
            { label: "USG renal", value: "1ª linha de imagem: excluir hidronefrose e litíase obstrutiva. Sensibilidade limitada para abscesso pequeno." }
          ]
        },
        {
          type: "decision",
          title: "Tratamento — Ambulatorial × Hospitalar",
          decisions: [
            {
              condition: "Ambulatorial (não complicada, tolerando VO)",
              color: "#10B981",
              actions: [
                "Ciprofloxacino 500mg VO 12/12h × 7 dias (se resistência local < 10%)",
                "TMP-SMX 160/800mg VO 12/12h × 14 dias (se suscetibilidade confirmada)",
                "Amoxicilina-clavulanato × 14 dias: menor eficácia, usar se gram-positivo confirmado",
                "Reavaliação em 48-72h obrigatória — internação se piora ou não melhora",
                "Urocultura de controle não necessária se melhora clínica (EAU 2023)"
              ]
            },
            {
              condition: "Hospitalar (internação indicada)",
              color: "#EF4444",
              actions: [
                "Ceftriaxona 1-2g IV 24/24h — 1ª linha empírica (cobertura gram-negativo excelente)",
                "Gentamicina 5-7 mg/kg/dia IV (dose única diária) — boa opção, monitorar função renal",
                "Piperacilina-tazobactam 4,5g IV 8/8h se suspeita de ESBL ou Pseudomonas (hospitalar > 48h)",
                "Ertapenem 1g IV 24/24h: ESBL confirmado sem Pseudomonas",
                "Meropenem 1g IV 8/8h: sepse grave + suspeita de Pseudomonas ou KPC",
                "Deescalonamento assim que disponível antibiograma — reduz pressão seletiva"
              ]
            },
            {
              condition: "Gestante (INTERNAÇÃO recomendada)",
              color: "#F59E0B",
              actions: [
                "Ceftriaxona 1-2g IV 24/24h até apirexia + tolerância oral",
                "Transição para cefalexina oral + completar 14 dias total",
                "Urocultura de controle obrigatória após término + mensalmente até parto",
                "Avaliar internação independentemente da gravidade — risco de parto prematuro e sepse neonatal"
              ]
            }
          ]
        },
        {
          type: "grades",
          title: "Fatores de Risco para ESBL — Escore PRÓXIMO AO ZERO",
          organ: "pielonefrite",
          grades: [
            {
              grade: "Baixo Risco ESBL",
              color: "#10B981",
              items: [
                "Comunitário, sem internação prévia",
                "Sem uso de ATB nos últimos 90 dias",
                "Sem cateter urinário",
                "Sem viagem a área endêmica (Índia, Sul da Ásia, Sul Europa)"
              ]
            },
            {
              grade: "Alto Risco ESBL",
              color: "#EF4444",
              items: [
                "Hospitalização > 48h nos últimos 90 dias",
                "Uso recente de cefalosporinas ou fluoroquinolonas",
                "ITU recorrente com tratamentos múltiplos",
                "Viagem recente a país com alta prevalência de ESBL",
                "Cateter urinário de demora",
                "Residente em ILPI (instituição de longa permanência)"
              ]
            }
          ]
        },
        {
          type: "grid",
          title: "Complicações",
          items: [
            { label: "Abscesso Renal", value: "TC: coleção hipodensa c/ realce periférico. < 3 cm: ATB EV prolongado. ≥ 3 cm: drenagem percutânea guiada por imagem.", highlight: true },
            { label: "Pionefrrose", value: "Obstrução + infecção → sistema coletor com pus. EMERGÊNCIA: drenagem urgente (nefrostomia ou stent) + ATB EV. Pode progredir para nefrectomia." },
            { label: "Papilite Necrosante", value: "Necrose das papilas renais. Fatores: DM, analgésicos, falcemia, obstrução. Fragmentos papilares na urina. Alta mortalidade." },
            { label: "Bacteremia / Sepse", value: "Em 20-30% dos internados. Atender pelo protocolo Sepsis-3. Hemoculturas + ATB em ≤ 1h da suspeita de sepse.", highlight: true },
            { label: "Pielonefrite Xantogranulomatosa", value: "Rara. Destruição granulomatosa do parênquima. Associada a Proteus e litíase coraliforme. Tratamento: nefrectomia." }
          ]
        },
        {
          type: "obs",
          title: "Trial — PHOCAS (NEJM 2012): Fluoroquinolona × Beta-lactâmico",
          text: "Ciprofloxacino 7 dias não inferior a TMP-SMX 14 dias para pielonefrite ambulatorial. Referência principal para encurtar tratamento. PORÉM: com taxas crescentes de resistência a FQ no Brasil (> 15%), atenção ao perfil local antes de usar empiricamente. A EAU 2023 mantém FQ como 1ª linha mas ressalva resistência local."
        },
        {
          type: "obs",
          title: "Pérola de Banca — Falha após 72h",
          text: "Pielonefrite que não melhora após 72h de ATB adequado → TC de abdome OBRIGATÓRIA para excluir: abscesso renal, obstrução, pionefrrose, pielonefrite enfisematosa. NÃO trocar ATB sem imagem — a falha é frequentemente estrutural, não microbiológica."
        },
        {
          type: "grid",
          title: "Populações Especiais",
          items: [
            { label: "Homem", value: "Toda ITU em homem é considerada COMPLICADA. Investigar obstrução (HBP, estenose uretral), prostatite, litíase. Urocultura obrigatória.", highlight: true },
            { label: "< 5 anos", value: "Indicação de investigação com USG renal + UCM (uretrocistografia miccional) para RVU após 1º episódio de PNA. Scintigrafia renal (DMSA) detecta cicatrizes." },
            { label: "Diabetes", value: "Maior risco de complicações: pionefrrose, pielonefrite enfisematosa, papilite necrosante. Internação com baixo limiar. TC com contraste se falha em 48h." }
          ]
        }
      ]
    }
  },
  {
    id: "uretrite",
    name: "Uretrite",
    color: "#F59E0B",
    content: {
      title: "Uretrite — ISTs, Diagnóstico e Tratamento",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Regra Absoluta — Tratar o Parceiro",
          text: "TODA uretrite é IST até prova em contrário. Parceiro(s) SEMPRE tratados empiricamente, independente de cultura ou sintomas. Abstinência sexual ou uso de preservativo até 7 dias após término do tratamento de AMBOS os parceiros."
        },
        {
          type: "grid",
          title: "Agentes e Classificação",
          items: [
            { label: "Gonocócica (UG)", value: "Neisseria gonorrhoeae. Diplococco gram-negativo intracelular. Incubação 2-5 dias. Secreção purulenta, disúria intensa.", highlight: true },
            { label: "Não-Gonocócica (UNG)", value: "Chlamydia trachomatis (50%), Mycoplasma genitalium (15-20%), Ureaplasma urealyticum, Trichomonas vaginalis, HSV.", highlight: true },
            { label: "Chlamydia trachomatis", value: "Sorovar D-K. Intracelular obrigatório. Incubação 1-3 semanas. Pode ser assintomática (50% dos homens). Principal causa de epididimite em < 35 anos." },
            { label: "Mycoplasma genitalium", value: "Emergente. Sem parede celular → resistência intrínseca a beta-lactâmicos. Alta taxa de resistência a azitromicina e fluoroquinolonas. BANE: moxifloxacino." },
            { label: "Trichomonas vaginalis", value: "Protozoário. Causa uretrite em homens (frequentemente assintomática). Diagnosticado por NAAT ou cultura. Tratamento: metronidazol 2g dose única." }
          ]
        },
        {
          type: "flow",
          title: "Critério Diagnóstico de Uretrite",
          steps: [
            { text: "Secreção uretral visível OU disúria OU prurido uretral", color: "#F59E0B" },
            { text: "Swab uretral: ≥ 5 leucócitos/campo (objetiva 100×) → CONFIRMA uretrite", color: "#0EA5E9" },
            { text: "1º jato de urina: ≥ 10 leucócitos/campo ou nitrito+ (alternativa não invasiva)", color: "#6366F1" },
            { text: "NAAT (PCR multiplex): padrão-ouro para Gonococo + Chlamydia + Mycoplasma (sensibilidade > 95%)", color: "#10B981" },
            { text: "Gram do swab: diplococco intracelular gram-negativo → diagnóstico de gonorreia (especificidade > 99% em homens)", color: "#8B5CF6" }
          ]
        },
        {
          type: "decision",
          title: "Tratamento — CDC 2021 / MS Brasil 2022",
          decisions: [
            {
              condition: "Gonocócica — 1ª linha",
              color: "#EF4444",
              actions: [
                "Ceftriaxona 500mg IM dose única (CDC 2021 — dose aumentou de 250mg para 500mg pelo ↑ resistência)",
                "Se peso ≥ 150 kg: ceftriaxona 1g IM dose única",
                "SEMPRE associar tratamento para Chlamydia se não testado: azitromicina 1g VO ou doxiciclina 100mg 12/12h × 7 dias",
                "NUNCA mais usar ciprofloxacino para gonorreia — resistência global > 30% (GASP 2021)"
              ]
            },
            {
              condition: "Não-Gonocócica / Chlamydia",
              color: "#10B981",
              actions: [
                "Doxiciclina 100mg VO 12/12h × 7 dias — 1ª linha (CDC 2021, superior a dose única de azitromicina)",
                "Azitromicina 1g VO dose única — alternativa, mas eficácia menor para M. genitalium",
                "Levofloxacino 500mg VO × 7 dias: alternativa se contraindicação a tetraciclinas"
              ]
            },
            {
              condition: "Mycoplasma genitalium",
              color: "#8B5CF6",
              actions: [
                "Doxiciclina 100mg 12/12h × 7 dias (reduz carga) SEGUIDA de moxifloxacino 400mg × 7 dias",
                "Azitromicina 1g dose única → resistência em > 40% no Brasil — NÃO usar sem teste de suscetibilidade",
                "NAAT com detecção de resistência a macrolídeos disponível em centros de referência"
              ]
            },
            {
              condition: "Recorrente / Persistente após tratamento",
              color: "#F97316",
              actions: [
                "Investigar reinfecção (parceiro não tratado) — causa mais comum",
                "Investigar Trichomonas vaginalis (metronidazol 2g dose única)",
                "Testagem para Mycoplasma genitalium com perfil de resistência",
                "Uretrite química (sabonetes, espermaticidas) — diagnóstico de exclusão"
              ]
            }
          ]
        },
        {
          type: "obs",
          title: "Pérola — Uretrite Gonocócica e Resistência",
          text: "A N. gonorrhoeae desenvolveu resistência sucessiva a sulfonamidas, penicilina, tetraciclinas, ciprofloxacino e, mais recentemente, azitromicina. CDC 2021 aumentou dose de ceftriaxona para 500mg justamente por relatos de falha com 250mg (cepas hiperresistentes asiáticas — FC428, A8806). Ceftriaxona permanece como único ATB confiável em monoterapia para gonorreia."
        },
        {
          type: "grid",
          title: "Complicações",
          items: [
            { label: "Epididimo-orquite", value: "Chlamydia (< 35 anos) ou Enterobactérias (> 35 anos). Dor escrotal aguda + febre. Doppler USG: ↑ fluxo. Tratar 10-14 dias.", highlight: true },
            { label: "Artrite Gonocócica", value: "DGI (disseminação hematogênica). Síndrome clássica: tríade polartralgia migratória + dermatite + tenossinovite. Ceftriaxona EV × 7-14 dias." },
            { label: "Doença Inflamatória Pélvica", value: "Extensão ascendente em mulheres. Critério mínimo: dor à mobilização do colo. Tratamento: ceftriaxona + doxiciclina + metronidazol." },
            { label: "Infertilidade", value: "Salpingite por Chlamydia — principal causa infecciosa de infertilidade tubária na mulher. Epididimite crônica → azoospermia obstrutiva." }
          ]
        }
      ]
    }
  },
  {
    id: "prostatite",
    name: "Prostatite",
    color: "#10B981",
    content: {
      title: "Prostatite — Classificação NIH, Diagnóstico e Tratamento",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Prostatite Aguda Bacteriana — EMERGÊNCIA",
          text: "Prostatite aguda bacteriana com retenção urinária: CATETERISMO SUPRAPÚBICO, não transuretral (risco de abscesso prostático e bacteremia). Toque retal na fase aguda deve ser GENTIL — massagem prostática contraindicada (risco de bacteremia)."
        },
        {
          type: "grades",
          title: "Classificação NIH (1999) — Padrão Internacional",
          organ: "próstata",
          grades: [
            {
              grade: "Cat. I — Prostatite Bacteriana Aguda",
              color: "#EF4444",
              items: [
                "Início súbito: febre alta, calafrios, mialgia, dor perineal",
                "Sintomas miccionais: disúria, polaciúria, retenção urinária",
                "EAS: piúria + bacteriúria intensa",
                "Próstata: quente, amolecida, extremamente dolorosa ao toque",
                "Agentes: E. coli (80%), Klebsiella, Pseudomonas, Enterococcus"
              ]
            },
            {
              grade: "Cat. II — Prostatite Bacteriana Crônica",
              color: "#F59E0B",
              items: [
                "Principal causa de ITU recorrente no homem",
                "Sintomas miccionais crônicos + dor perineal/escrotal recorrente",
                "EAS pode ser normal entre episódios",
                "Critério diagnóstico: cultura do fluido prostático (pós-massagem) > 10× cultura da 1ª porção de urina",
                "Agentes: E. coli, Klebsiella, Pseudomonas (mesmos da aguda)"
              ]
            },
            {
              grade: "Cat. III — Síndrome Dor Pélvica Crônica (SDPC)",
              color: "#8B5CF6",
              items: [
                "Mais comum: 90% das 'prostatites'",
                "IIIa — Inflamatória: leucócitos no fluido prostático, sem bactéria",
                "IIIb — Não-inflamatória: sem leucócitos, sem bactéria",
                "Tratamento multimodal: alfa-bloqueadores, AINEs, fisioterapia pélvica",
                "Antibiótico tem papel limitado — trial empírico FQ × 4-6 semanas em IIIa virgem de tratamento"
              ]
            },
            {
              grade: "Cat. IV — Prostatite Inflamatória Assintomática",
              color: "#6366F1",
              items: [
                "Achado histológico (biópsia) ou laboratorial (leucócitos no ejaculado)",
                "Sem sintomas — NÃO requer tratamento",
                "Importante no contexto de investigação de infertilidade masculina"
              ]
            }
          ]
        },
        {
          type: "flow",
          title: "Diagnóstico — Teste de Meares-Stamey (4 porções)",
          steps: [
            { text: "VB1 (primeiros 10 mL de urina): representa uretra anterior", color: "#6366F1" },
            { text: "VB2 (jato médio): representa bexiga / trato urinário superior", color: "#0EA5E9" },
            { text: "EPS (fluido prostático após massagem): colhido diretamente", color: "#F59E0B" },
            { text: "VB3 (urina pós-massagem): representa secreção prostática diluída", color: "#10B981" },
            { text: "Interpretação: EPS ou VB3 com cultura ≥ 10× VB1 e VB2 = prostatite bacteriana confirmada", color: "#EF4444" }
          ]
        },
        {
          type: "decision",
          title: "Tratamento por Categoria",
          decisions: [
            {
              condition: "Categoria I — Aguda",
              color: "#EF4444",
              actions: [
                "Internação se sepse, retenção ou imunossuprimido",
                "Ciprofloxacino 400mg IV 12/12h (excelente penetração prostática) → transição oral assim que possível",
                "Gentamicina + ampicilina EV: alternativa em hospitalizados",
                "Duração total: 2-4 semanas (maioria 14 dias para evitar cronicidade)",
                "Avaliação para abscesso por USG transretal ou TC se falha em 72h"
              ]
            },
            {
              condition: "Categoria II — Crônica Bacteriana",
              color: "#F59E0B",
              actions: [
                "Ciprofloxacino 500mg VO 12/12h × 4-6 semanas (1ª linha — EAU 2023)",
                "Levofloxacino 500mg VO × 4-6 semanas: equivalente ao cipro",
                "TMP-SMX 160/800mg 12/12h × 1-3 meses: alternativa, penetração prostática inferior",
                "Alfa-bloqueadores (tansulosina 0,4mg/dia) adjuvantes: melhoram sintomas miccionais",
                "Taxas de cura: 60-80% com FQ × 6 semanas (Nickel et al., J Urol 2008)"
              ]
            },
            {
              condition: "Categoria IIIa/b — SDPC",
              color: "#8B5CF6",
              actions: [
                "Trial de FQ × 4-6 semanas se virgem de tratamento (benefício incerto mas aceito)",
                "Alfa-bloqueador: tansulosina, silodosina — 1ª linha para sintomas obstrutivos (nível A)",
                "AINEs, neuromoduladores (pregabalina, amitriptilina) para dor crônica",
                "Fisioterapia do assoalho pélvico: evidência crescente (RCT Anderson 2011)",
                "5-alfa-redutase (finasterida) se próstata aumentada"
              ]
            }
          ]
        },
        {
          type: "grid",
          title: "Abscesso Prostático",
          items: [
            { label: "Contexto", value: "Complicação de prostatite aguda bacteriana. Mais comum em DM, imunossuprimidos, cateter urinário.", highlight: true },
            { label: "Diagnóstico", value: "USG transretal: área hipoecoica com halo. TC: melhor definição anatômica." },
            { label: "Tratamento", value: "Drenagem transretal ou transuretral + ATB EV prolongado (4-6 semanas). Pequenos (< 1 cm): ATB exclusivo possível.", highlight: true }
          ]
        },
        {
          type: "obs",
          title: "Pérola — PSA e Prostatite Aguda",
          text: "PSA pode elevar-se 10-100× na prostatite aguda bacteriana — não realizar biópsia ou rastrear câncer de próstata durante episódio agudo ou nos 4-6 semanas seguintes. Repetir PSA após tratamento completo e resolução clínica. Falha em reconhecer isso é armadilha clássica de banca e de conduta."
        },
        {
          type: "obs",
          title: "Trial — NIH-CPSI: Impacto Clínico da Prostatite Crônica",
          text: "O NIH Chronic Prostatitis Symptom Index (NIH-CPSI) é o instrumento validado para graduar sintomas e monitorar resposta terapêutica na categoria III. Redução ≥ 6 pontos = resposta clinicamente significativa. Alfa-bloqueadores mostraram benefício consistente em estudos randomizados (Nickel JC et al.), especialmente se iniciados precocemente no primeiro episódio."
        }
      ]
    }
  },
  {
    id: "epididimite",
    name: "Epididimite",
    color: "#0EA5E9",
    content: {
      title: "Epididimite e Orquite — Diagnóstico Diferencial e Conduta",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "DIAGNÓSTICO DIFERENCIAL OBRIGATÓRIO — TORÇÃO TESTICULAR",
          text: "Dor escrotal aguda em homem jovem = TORÇÃO TESTICULAR até prova em contrário. Janela terapêutica: 6h (viabilidade > 95%) → 12h (50%) → 24h (< 10%). Se dúvida diagnóstica, exploração cirúrgica IMEDIATA — não aguardar Doppler. NUNCA retardar cirurgia para completar investigação."
        },
        {
          type: "grid",
          title: "Agentes Biológicos por Faixa Etária",
          items: [
            { label: "< 35 anos (sexualmente ativo)", value: "Chlamydia trachomatis (principal) + Neisseria gonorrhoeae. Tratar como IST. Investigar e tratar parceiro.", highlight: true },
            { label: "> 35 anos", value: "Enterobactérias (E. coli, Klebsiella). Contexto: BPH, litíase, cateter, instrumentação urológica. Tratar como ITU complicada." },
            { label: "Homens que fazem sexo com homens", value: "E. coli entérico + gonorreia + Chlamydia. Práticas de sexo anal passivo. Cobertura ampliada." },
            { label: "Orquite isolada — Caxumba (Parotidite Epidêmica)", value: "Vírus da caxumba (Paramyxovirus). Pós-puberal: 25-38% desenvolvem orquite. Bilateral em 15% → infertilidade. Suporte: repouso, elevação escrotal, AINEs.", highlight: true }
          ]
        },
        {
          type: "flow",
          title: "Algoritmo Diagnóstico — Dor Escrotal Aguda",
          steps: [
            { text: "Dor escrotal aguda → idade, início, velocidade de progressão", color: "#EF4444" },
            { text: "Início hiperagudo (minutos), jovem, náusea/vômito, sinal de Prehn negativo → TORÇÃO → cirurgia", color: "#EF4444" },
            { text: "Início gradual, febre, disúria, leucocitúria → Epididimite → Doppler + swab uretral + NAAT", color: "#0EA5E9" },
            { text: "Doppler: ↑ fluxo em epididimite | ↓ / ausente em torção", color: "#10B981" },
            { text: "NAAT uretral (Gonococo + Chlamydia) + urocultura se > 35 anos", color: "#6366F1" },
            { text: "Tratar empiricamente após coleta de amostras — não aguardar resultado de NAAT", color: "#F59E0B" }
          ]
        },
        {
          type: "decision",
          title: "Tratamento — Baseado em Faixa Etária / Agente Presumido",
          decisions: [
            {
              condition: "< 35 anos (IST — Chlamydia/Gonorreia)",
              color: "#EF4444",
              actions: [
                "Ceftriaxona 500mg IM dose única + Doxiciclina 100mg VO 12/12h × 10 dias",
                "Cobre ambos os principais agentes de IST de forma sinérgica",
                "Tratar parceiro(s) sexuais — abstinência ou preservativo até 7 dias após fim do tratamento de ambos"
              ]
            },
            {
              condition: "> 35 anos (Enterobactérias)",
              color: "#0EA5E9",
              actions: [
                "Levofloxacino 500mg VO 24/24h × 10-14 dias (EAU 2023 — 1ª linha)",
                "Ciprofloxacino 500mg VO 12/12h × 10-14 dias: alternativa",
                "Investigar causa obstrutiva: USG escrotal + urocultura + PSA se > 50 anos"
              ]
            },
            {
              condition: "Medidas Adjuvantes — Todas as Epididimites",
              color: "#10B981",
              actions: [
                "Repouso relativo — elevação escrotal (reduz congestão venosa e dor)",
                "AINEs por 5-7 dias para controle da dor e da resposta inflamatória",
                "Suporte escrotal (suspensório) — alívio sintomático",
                "Reavaliação em 3 dias — se piora, considerar abscesso ou diagnóstico alternativo"
              ]
            }
          ]
        },
        {
          type: "grid",
          title: "Complicações",
          items: [
            { label: "Abscesso Escrotal", value: "Flutuação, pele eritematosa, crepitação. Drenagem cirúrgica + ATB EV. Pode requerer orquiectomia se parênquima comprometido.", highlight: true },
            { label: "Infarto Testicular", value: "Compressão por edema → isquemia. Orquiectomia frequentemente necessária." },
            { label: "Epididimite Crônica", value: "Dor escrotal > 3 meses após episódio agudo. Manejo multimodal: AINEs, tricíclicos, fisioterapia, denervação microcirúrgica." },
            { label: "Infertilidade", value: "Bilateral → obstrução epididimária → azoospermia obstrutiva. Investigar se histórico de epididimite recorrente.", highlight: true }
          ]
        },
        {
          type: "obs",
          title: "Pérola Cirúrgica — Sinal de Prehn e Reflexo Cremastérico",
          text: "Sinal de Prehn (alívio da dor com elevação testicular) é classicamente citado como diferencial torção × epididimite, mas tem BAIXA sensibilidade e especificidade (< 70%) — NÃO deve ser usado isoladamente para excluir torção. Ausência do reflexo cremastérico tem melhor valor preditivo para torção em homens jovens (sensibilidade 99% em alguns estudos, Beni-Israel AJEM 2009), mas também não é infalível. Princípio operacional: dúvida = cirurgia."
        }
      ]
    }
  },
  {
    id: "itu-neonatal",
    name: "ITU Neonatal",
    color: "#8B5CF6",
    content: {
      title: "ITU na Infância e Neonatal — Peculiaridades e Investigação",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "ITU Febril na Criança < 2 anos — Atenção Redobrada",
          text: "ITU febril em lactente pode ser única manifestação de sepse urinária. Sinais de sepse: hipotermia ou hipertermia, irritabilidade, recusa alimentar, letargia. Todo RN e lactente < 3 meses com febre sem foco: internação + hemocultura + urocultura + ATB EV empírico. NUNCA tratar via oral < 2 meses sem internação."
        },
        {
          type: "grid",
          title: "Agentes Biológicos na Criança",
          items: [
            { label: "RN e lactente", value: "E. coli (75-90%). Streptococcus agalactiae (GBS) no RN. Klebsiella. Enterococcus. Gram-positivos mais comuns que em adultos.", highlight: true },
            { label: "Criança maior", value: "E. coli mantém predominância. Proteus mirabilis mais comum em meninos (relacionado à fimose e à alcalinização da urina)." },
            { label: "Candida", value: "ITU por Candida em neonato: marcador de sepse fúngica disseminada. Ecocardiograma + fundo de olho + tratamento sistêmico com anfotericina B lipossomal ou fluconazol." }
          ]
        },
        {
          type: "flow",
          title: "Investigação Após 1º Episódio de ITU Febril",
          steps: [
            { text: "ITU febril confirmada em criança (qualquer idade)", color: "#8B5CF6" },
            { text: "USG renal e de vias urinárias: SEMPRE — excluir hidronefrose, dilatação, anomalia estrutural", color: "#0EA5E9" },
            { text: "Cintilografia renal (DMSA): avaliar presença de cicatriz renal após 4-6 meses do episódio agudo", color: "#F59E0B" },
            { text: "UCM (uretrocistografia miccional): indicada se USG alterada, DMSA alterado, ITU recorrente, menino < 2 anos com 1ª ITU, < 1 ano qualquer sexo (protocolos variam)", color: "#EF4444" },
            { text: "Objetivo: detectar RVU (Refluxo Vesico-Ureteral) — grau I-V (International Reflux Study)", color: "#10B981" }
          ]
        },
        {
          type: "grades",
          title: "Refluxo Vesico-Ureteral (RVU) — Classificação Internacional",
          organ: "rim",
          grades: [
            {
              grade: "Grau I-II",
              color: "#10B981",
              items: [
                "I: refluxo apenas para ureter, sem dilatação",
                "II: refluxo até pelve renal, sem dilatação",
                "Resolução espontânea em 80-90% até 5-6 anos",
                "Conduta: profilaxia ATB + seguimento clínico"
              ]
            },
            {
              grade: "Grau III",
              color: "#F59E0B",
              items: [
                "Refluxo com dilatação moderada do ureter e pelve",
                "Resolução espontânea em 40-50%",
                "Conduta: profilaxia ATB + reavaliação anual com UCM"
              ]
            },
            {
              grade: "Grau IV-V",
              color: "#EF4444",
              items: [
                "IV: dilatação acentuada, tortuosidade ureteral leve",
                "V: dilatação maciça, tortuosidade grave, ausência de impressões papilares",
                "Alto risco de nefropatia por refluxo e cicatriz renal",
                "Conduta: cirurgia (reimplante ureteral) + nefropatia crônica a longo prazo"
              ]
            }
          ]
        },
        {
          type: "decision",
          title: "Tratamento por Faixa Etária",
          decisions: [
            {
              condition: "RN / < 3 meses (hospitalar obrigatório)",
              color: "#EF4444",
              actions: [
                "Ampicilina 50mg/kg/dose EV 8/8h + Gentamicina 5mg/kg/dia EV (cobertura sinérgica GBS + gram-negativos)",
                "Ceftriaxona EVITAR no RN < 28 dias — deslocamento de bilirrubina (kernicterus)",
                "Hemocultura + LCR se suspeita de sepse/meningite associada",
                "Duração: 10-14 dias EV para sepse urinária neonatal"
              ]
            },
            {
              condition: "3 meses – 2 anos (ITU febril)",
              color: "#F59E0B",
              actions: [
                "Ceftriaxona 50mg/kg/dia EV/IM (max 1g) — internação se toxemia ou vômitos",
                "Cefixima 8mg/kg/dia VO: não inferior a EV em criança estável (RCT RIVUR 2014)",
                "Amoxicilina-clavulanato VO: alternativa se sensibilidade confirmada",
                "Duração: 7-14 dias para ITU febril (pielonefrite)"
              ]
            },
            {
              condition: "> 2 anos (ambulatorial se estável)",
              color: "#10B981",
              actions: [
                "TMP-SMX 6-12 mg/kg/dia (calculado pelo TMP) VO 12/12h × 7-10 dias",
                "Cefalexina 25-50mg/kg/dia VO 6/6h × 7-10 dias",
                "Nitrofurantoína: EVITAR em pielonefrite (penetração tecidual insuficiente) — só para cistite baixa"
              ]
            }
          ]
        },
        {
          type: "obs",
          title: "Trial — RIVUR (NEJM 2014): Profilaxia ATB no RVU",
          text: "Estudo RIVUR (N=607, NEJM 2014): TMP-SMX profilático reduziu recorrência de ITU febril em 50% em crianças com RVU graus I-IV após ITU. PORÉM, sem diferença em cicatrizes renais ao DMSA após 2 anos. Benefício maior em crianças com ITU recorrente e RVU alto grau. Controvérsia atual: profilaxia universal vs. manejo expectante com tratamento precoce de recorrências."
        },
        {
          type: "obs",
          title: "Pérola — Coleta de Urina na Criança",
          text: "Método de coleta interfere diretamente na confiabilidade da urocultura pediátrica. Saco coletor: alta taxa de falso-positivo (contaminação perineal) → NÃO usar para diagnóstico definitivo, apenas triagem. Cateterismo uretral ou punção suprapúbica: padrão-ouro. Em criança continente e colaborativa: jato médio após higiene. Critério de positividade: ≥ 50.000 UFC/mL por cateter; qualquer UFC por punção suprapúbica."
        }
      ]
    }
  },
  {
    id: "resistencia-atb",
    name: "Resistência / ATB",
    color: "#EC4899",
    content: {
      title: "Resistência Antimicrobiana nas ITUs — Mecanismos e Escolha Racional",
      blocks: [
        {
          type: "alert",
          color: "#EF4444",
          title: "Risco ALTO para ESBL — Carbapenem Obrigatório",
          text: "Enterobactérias produtoras de ESBL: resistentes a cefalosporinas de 3ª/4ª geração e penicilinas. ERTAPENEM (sem atividade anti-Pseudomonas) para ESBL sem Pseudomonas. MEROPENEM se sepse grave ou suspeita de Pseudomonas. NUNCA tratar ESBL com cefalosporinas — mesmo se sensível in vitro (efeito inóculo = falha clínica)."
        },
        {
          type: "grid",
          title: "Mecanismos de Resistência Clinicamente Relevantes",
          items: [
            { label: "ESBL (beta-lactamases de espectro estendido)", value: "Hidrólise de cefalosporinas de 1ª-4ª geração e penicilinas. Gene em plasmídeo → disseminação horizontal. TEM, SHV, CTX-M (predominante no Brasil). Carbapenem = tratamento.", highlight: true },
            { label: "KPC (Klebsiella pneumoniae carbapenemase)", value: "Hidrolisa carbapenens → pandemia hospitalar. Opções terapêuticas: ceftazidima-avibactam, meropenem-vaborbactam, cefiderocol. Alta mortalidade (40-70% em bacteremia).", highlight: true },
            { label: "MBL (metalo-beta-lactamases: NDM, VIM, IMP)", value: "Hidrolisa todos os beta-lactâmicos inclusive carbapenens. Inibidas por EDTA, não por avibactam. Cefiderocol + aztreonam-avibactam = melhores opções. NDM: disseminação plasmidial alarmante." },
            { label: "OXA-48", value: "Carbapenemase comum em Klebsiella e E. coli no Mediterrâneo e no Brasil. Resistência fraca a carbapenens (CIM > 2). Ceftazidima-avibactam eficaz." },
            { label: "MRSA urinário", value: "Raro, mas ocorre em ITU hospitalar. Vancomicina EV para bacteremia; linezolida VO para ITU baixa. Tela obrigatória em internados de risco." }
          ]
        },
        {
          type: "flow",
          title: "Algoritmo — Com Risco de Resistência (ATB empírico grave)",
          steps: [
            { text: "Avaliar risco: hospitalização recente, ATB prévio, viagem, ILPI, cateter, falha terapêutica", color: "#EC4899" },
            { text: "Coletar urocultura + hemocultura ANTES de iniciar ATB", color: "#6366F1" },
            { text: "Alto risco ESBL, sem Pseudomonas: Ertapenem 1g IV 24/24h", color: "#F59E0B" },
            { text: "Alto risco ESBL + Pseudomonas: Meropenem 1g IV 8/8h", color: "#EF4444" },
            { text: "Suspeita KPC / NDM: Ceftazidima-avibactam + consulta infectologia", color: "#EC4899" },
            { text: "Deescalonamento obrigatório com antibiograma — reduz seleção e toxicidade", color: "#10B981" }
          ]
        },
        {
          type: "grid",
          title: "Antibióticos — Perfil de Penetração Urinária e Uso Racional",
          items: [
            { label: "Nitrofurantoína", value: "Concentração urinária alta, tecidual baixa → APENAS para cistite (NÃO para pielonefrite). Resistência < 5% para E. coli comunitária. ClCr < 30-45 mL/min: contraindicado.", highlight: true },
            { label: "Fosfomicina", value: "Concentração urinária alta por 48h após dose única. Ação: inibe MurA (síntese de parede). Boa cobertura ESBL e MRSA urinário. Oral exclusivo para cistite.", highlight: true },
            { label: "Ciprofloxacino", value: "Penetração prostática excelente (concentração 10× sérica). 1ª linha prostatite. Resistência crescente no Brasil (> 15% E. coli urinário). EVITAR empiricamente em cistite não complicada." },
            { label: "Ceftriaxona", value: "Excelente cobertura gram-negativo comunitário. 1ª linha pielonefrite hospitalar. Não cobre ESBL. Sem atividade contra gram-positivos (Enterococcus). Dose única/dia facilita adesão." },
            { label: "TMP-SMX", value: "Resistência > 20% no Brasil — usar com antibiograma. Barato, boa penetração prostática e renal. Contraindicado no 1º e 3º trimestre da gestação." },
            { label: "Pivmecilinam (amidocilin pivoxil)", value: "Disponível na Europa/Escandinávia. Não disponível no Brasil. Referência em estudos internacionais — importante conhecer para prova." }
          ]
        },
        {
          type: "obs",
          title: "Pérola de Banca — ESBL e Cefalosporinas",
          text: "O antibiograma pode mostrar sensibilidade do ESBL a cefepima ou ceftriaxona in vitro (halos aparentemente normais). NÃO tratar com cefalosporinas mesmo assim: o 'efeito inóculo' (inoculum effect) faz com que altas cargas bacterianas in vivo ativem mais beta-lactamase, levando à falha clínica. Carbapenem é o único tratamento seguro para infecções graves por ESBL. Exceção: fosfomicina ou nitrofurantoína para cistite simples por ESBL se CIM confirmar sensibilidade."
        },
        {
          type: "obs",
          title: "Trial — MERINO (Lancet 2018): Pip-tazo vs Meropenem para ESBL",
          text: "Estudo MERINO (multicêntrico, RCT): piperacilina-tazobactam foi INFERIOR ao meropenem para tratamento de bacteremia por E. coli/Klebsiella ESBL (mortalidade 30 dias: 12,3% vs 3,7%, p=0,90 para não-inferioridade). Resultado NEGATIVO para pip-tazo — consolidou carbapenem como padrão para bacteremia por ESBL. Pip-tazo pode ser usado para ITU baixa por ESBL com CIM < 2 se sem bacteremia (uso com cautela)."
        },
        {
          type: "phases",
          title: "Estratégia de Deescalonamento ATB",
          phases: [
            {
              number: "0-24h",
              name: "Empírico Amplo",
              color: "#EF4444",
              items: [
                "Cobertura máxima baseada no risco clínico",
                "Coleta de culturas ANTES de ATB",
                "Dose otimizada para PK/PD (ex: beta-lactâmicos em infusão estendida)"
              ]
            },
            {
              number: "48-72h",
              name: "Reavaliação com Cultura",
              color: "#F59E0B",
              items: [
                "Identificação do agente + antibiograma preliminar",
                "Deescalonamento se espectro mais estreito disponível",
                "Descontinuação se cultura negativa + baixa probabilidade clínica"
              ]
            },
            {
              number: "5-7 dias",
              name: "Antibiograma Definitivo",
              color: "#10B981",
              items: [
                "Ajuste final para agente mais específico e menor espectro",
                "Transição EV → VO se estável (biodisponibilidade adequada)",
                "Definir duração total do tratamento pelo foco e resposta clínica"
              ]
            }
          ]
        }
      ]
    }
  }
];

export default function ITU() {
  return (
    <MedPanelPage
      sections={sections}
      specialty="Clínica / Infectologia"
      title="Infecção do Trato Urinário — Guia Completo"
    />
  );
}
