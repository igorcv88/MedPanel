import AINEs from "./pages/AINEs";
import COX2 from "./pages/COX2";
import HV from "./pages/HV";
import Abdominal from "./pages/Abdominal";
import InsuficienciaHepatica from "./pages/InsuficienciaHepatica";
import Hepato101 from "./pages/Hepato101";
import Obesidade from "./pages/Obesidade";
import DoencasTireoide from "./pages/DoencasTireoide";
import Choque from "./pages/Choque";
import DiabetesMellitus from "./pages/DiabetesMellitus";
import IctericiaNeonatal from "./pages/IctericiaNeonatal";
import SepseNeonatal from "./pages/SepseNeonatal";
import ReanimacaoNeonatal from "./pages/ReanimacaoNeonatal";
import PedCalc from "./pages/PedCalc";
import Neurotrauma from "./pages/Neurotrauma";
import Politrauma from "./pages/Politrauma";
import ViaAerea from "./pages/ViaAerea";
import CicloMenstrual from "./pages/CicloMenstrual";
import TriagemNeonatal from "./pages/TriagemNeonatal";
import Anamneses from "./pages/Anamneses";
import ComplicacoesInsuficienciaHepatica from "./pages/ComplicacoesInsuficienciaHepatica";
//import CronogramaResidex from "./pages/CronogramaResidex";
import { GiLiver } from "react-icons/gi";
import React, { useRef, useEffect } from "react";
import InfeccoesCongenitas from "./pages/InfeccoesCongenitas";
import MedidasSaudeColetiva from "./pages/MedidasSaudeColetiva";
import PlanejamentoFamiliar from "./pages/PlanejamentoFamiliar";
import DiabetesGestacional from "./pages/DiabetesGestacional";
import ITU from "./pages/ITU";
import DoencaHipertensivaGestacional from "./pages/doenca-hipertensiva-gestacional"


const IconVideoHover = ({ srcVideo, size = 50, playing = false }) => {
  const videoRef = useRef(null);

  // Este "efeito" vai rodar sempre que o valor de 'playing' mudar
  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [playing]);

  return (
    <video
      ref={videoRef}
      src={srcVideo}
      width={size}
      height={size}
      muted
      loop
      playsInline
      style={{ objectFit: 'contain', borderRadius: '8px', pointerEvents: 'none' }} 
      // pointerEvents: 'none' faz com que o vídeo ignore o mouse e deixe o Card receber o toque
    />
  );
};

export const routes = [
  {
    path: "/HV",
    element: <HV />,
    title: "Hidratação Venosa PED",
    icon: <IconVideoHover srcVideo="/assets/hv.mp4" />,
    categoria: "Emergencia",
    descricao:
      "Calculadora de hidratação venosa pediatrica de ataque e manutenção",
  },
//  {
    //path: "/CronogramaResidex",
  //  element: <CronogramaResidex />,
//    oculto: true, // Adicionado para facilitar o filtro na renderização do menu, se necessário
  //},
  {
    path: "/PedCalc",
    element: <PedCalc />,
    title: "Calculadora de Doses Pediátricas",
    icon: <IconVideoHover srcVideo="/assets/pedcalc.mp4" />,
    categoria: "Emergencia",
    descricao:
      "Calculadora de medicações pediátricas e protocolos de diversas emergencias pediatricas",
  },
  {
    path: "/Anamneses",
    element: <Anamneses />,
    title: "Anamneses",
    icon: <IconVideoHover srcVideo="/assets/anamnese.mp4" />,
    categoria: "Emergencia",
    descricao:
      "Compilado interativo de inumeras historias clinicas padrão para os casos mais comuns do pronto socorro",
  },
  {
    path: "/IctericiaNeonatal",
    element: <IctericiaNeonatal />,
    title: "Ictericia Neonatal",
    icon: <IconVideoHover srcVideo="/assets/ictericia.mp4" />,
    categoria: "Pediatria",
    descricao:
      " Referência completa de icterícia neonatal — Zonas de Kramer, tipos fisiológica e patológica, kernicterus, causas não hemolíticas (aleitamento, leite materno, Gilbert), hemolíticas (Rh, ABO, esferocitose, G6PD), colestase neonatal com AVBEH, e algoritmo de fototerapia e exsanguinotransfusão.",
  },
  {
    path: "/ReanimacaoNeonatal",
    element: <ReanimacaoNeonatal />,
    title: "Reanimação Neonatal",
    icon: <IconVideoHover srcVideo="/assets/ReanimacaoNeonatal.mp4" />,
    categoria: "Pediatria",
    descricao:
      "Referência completa de reanimação neonatal — classificação por IG e peso, fatores de risco anteparto, Minuto de Ouro com as 3 perguntas, saturação por minuto de vida, técnica de VPP (OTOV, T-piece vs AMBU), compressão 3:1, adrenalina 1:10.000, clampeamento tardio, hipotermia terapêutica e LISA/MIST.",
  },
  {
    path: "/SepseNeonatal",
    element: <SepseNeonatal />,
    title: "Sepse Neonatal",
    icon: <IconVideoHover srcVideo="/assets/sepse.mp4" />,
    categoria: "Pediatria",
    descricao:
      " Referência completa de sepse neonatal — classificação EOS/LOS, patógenos precoces e tardios, fatores de risco maternos, profilaxia GBS, critérios hematológicos (I/T, Rodwell), algoritmo de manejo ≥ 35 semanas, esquemas empíricos por cenário e duração do tratamento.",
  },
  { 
    path: "/InfeccoesCongenitas",
    element: <InfeccoesCongenitas />,
    title: "Infecções Congênitas — TORCHS",
    icon: <IconVideoHover srcVideo="/assets/torchs.mp4" />,
    categoria: "Pediatria",
    descricao:
      " Referência completa das infecções congênitas TORCHS — princípio trimestre × gravidade, critérios de tratamento adequado da sífilis, critérios de neurossífilis no LCR, manifestações precoces e tardias, CMV com janela diagnóstic e evidência Kimberlin, tríade de Sabin da toxoplasmose, síndrome da rubéola congênita e diferencial de calcificações (CMV × toxo × Zika).",
  },
  {
    path: "/InsuficienciaHepatica",
    element: <InsuficienciaHepatica />,
    title: "Insuficiencia Hepatica",
    icon:<IconVideoHover srcVideo="/assets/liver.mp4" />,
    categoria: "Clinica",
    descricao:
      "Cirrose, hepatite fulminante, DHEM, doença alcoólica, CBP, CEP, hepatopatia medicamentosa, hemocromatose e Doença de Wilson — causas, critérios e tratamento.",
  },
    {
    path: "/ITU",
    element: <ITU />,
    title: "ITU",
    icon:<IconVideoHover srcVideo="/assets/ITU.mp4" />,
    categoria: "Clinica",
    descricao:
      "Guia definitivo de ITU.",
  },
  {
    path: "/ComplicacoesInsuficienciaHepatica",
    element: <ComplicacoesInsuficienciaHepatica />,
    title: "Insuficiência Hepática — Complicações",
    icon:<IconVideoHover srcVideo="/assets/liver2.mp4" />,
    categoria: "Clinica",
    descricao:
      "Encefalopatia Hepática (West Haven, rifaximina), Síndrome Hepato-Pulmonar (tríade, ortodeoxia, MELD exception), fisiopatologia detalhada da HP.",
  },
  {
    path: "/Hepato101",
    element: <Hepato101 />,
    title: "Fundamentos de Hepatologia",
    icon:<IconVideoHover srcVideo="/assets/liver3.mp4" />,
    categoria: "Clinica",
    descricao:
      "Fundamentos da hepatologia: anatomia segmentar, fisiologia hepática, metabolismo da bilirrubina e síndromes ictéricas hereditárias (Gilbert, Crigler-Najjar, Dubin-Johnson, Rotor).",
  },
  {
    path: "/Obesidade",
    element: <Obesidade />,
    title: "Obesidade",
    icon:<IconVideoHover srcVideo="/assets/obesidade.mp4" />,
    categoria: "Clinica",
    descricao:
      "Epidemiologia, fisiopatologia hormonal (grelina, leptina, GLP-1), diagnóstico antropométrico, síndrome metabólica, MEV e farmacologia completa com trials (SELECT, SURMOUNT).",
  },
  {
    path: "/DiabetesMellitus",
    element: <DiabetesMellitus />,
    title: "Diabetes Mellitus",
    icon:<IconVideoHover srcVideo="/assets/diabetes.mp4" />,
    categoria: "Clinica",
    descricao:
      "Fisiologia da glicose, critérios diagnósticos (incluindo TOTG 1h — SBD 2024), classificação (DM1, DM2, LADA, MODY), insulinoterapia e algoritmo terapêutico SBD 2025.",
  },
  {
    path: "/DoencasTireoide",
    element: <DoencasTireoide />,
    title: "Doencas da Tireoide",
    icon:<IconVideoHover srcVideo="/assets/tireoide.mp4" />,
    categoria: "Clinica",
    descricao:
      "Anatomia e síntese hormonal, hipertireoidismo (Graves, BNT), crise tireotóxica com sequência de manejo, hipotireoidismo, tireoidites, nódulo (BETHESDA/TIRADS) e câncer de tireoide.",
  },
    {
    path: "/DiabetesGestacional",
    element: <DiabetesGestacional />,
    title: "Diabetes Gestacional",
    icon:<IconVideoHover srcVideo="/assets/dmg.mp4" />,
    categoria: "Ginecologia",
    descricao:
      "Guia definitivo para DMG.",
  },
  {
  path: "/doenca-hipertensiva-gestacional",
  element: <DoencaHipertensivaGestacional />,
  title: "Doença Hipertensiva Gestacional",
  icon: <IconVideoHover srcVideo="/assets/dhg.mp4" />,
  categoria: "Ginecologia",
  descricao: "Manejo completo das síndromes hipertensivas: pré-eclâmpsia, sulfatação (Zuspan/Pritchard), predição com ASPRE trial e síndrome HELLP.",
},
  {
    path: "/CicloMenstrual",
    element: <CicloMenstrual />,
    title: "Ciclo Menstrual",
    icon:<IconVideoHover srcVideo="/assets/ciclo.mp4" />,
    categoria: "Ginecologia",
    descricao:
      "Fisiologia do ciclo ovariano-endometrial: eixo hipotálamo-hipófise, fases folicular/lútea, hormônios e transtornos pré-menstruais para residência.",
  },
  {
    path: "/PlanejamentoFamiliar",
    element: <PlanejamentoFamiliar />,
    title: "Planejamento Familiar",
    icon:<IconVideoHover srcVideo="/assets/planejamento.mp4" />,
    categoria: "Ginecologia",
    descricao:
      "Contraceptivos e contracepção de emergência — guia abrangente com critérios elegibilidade, eficácia comparada e pérolas de prova.",
  },
  {
    path: "/MedidasSaudeColetiva",
    element: <MedidasSaudeColetiva />,
    title: "Medidas de Saude Coletiva",
    icon:<IconVideoHover srcVideo="/assets/medidas.mp4" />,
    categoria: "Preventiva",
    descricao:
      "Indicadores, fórmulas, sistemas de informação (SINASC, SINAN, SIM). Transição demográfica e epidemiológica. Pérolas de prova: Prev vs Inc, TMG vs mortalidade específica, DALY vs APVP.",
  },
  {
    path: "/Abdominal",
    element: <Abdominal />,
    title: "Trauma Abdominal",
    icon:<IconVideoHover srcVideo="/assets/abdominal.mp4" />,
    categoria: "Cirurgia",
    descricao:
      "Resumo interativo sobre trauma abdominal incluindo abordagem inicial e traumas especificos",
  },
  {
    path: "/Choque",
    element: <Choque />,
    title: "Choque Hemorrágico/Hipovolemico",
    icon:<IconVideoHover srcVideo="/assets/blood.mp4" />,
    categoria: "Cirurgia",
    descricao: "Resumo interativo sobre choque no contexto do trauma",
  },
  {
    path: "/ViaAerea",
    element: <ViaAerea />,
    title: "Via Aerea no Trauma",
    icon:<IconVideoHover srcVideo="/assets/viaaerea.mp4" />,
    categoria: "Cirurgia",
    descricao:
      "Via aérea no trauma — dispositivos básicos e avançados, indicações de IOT, sequência rápida com os 7 Ps, farmacologia completa (indutores e BNMs), cricotireoidotomia e manejo pós-intubação com ventilação protetora.",
  },
  {
    path: "/Politrauma",
    element: <Politrauma />,
    title: "Politrauma - XABCDE",
    icon:<IconVideoHover srcVideo="/assets/politrauma.mp4" />,
    categoria: "Cirurgia",
    descricao:
      "Atendimento sistematizado ao politraumatizado — XABCDE completo, mecanismos de trauma, triagem START, pré-hospitalar, medidas auxiliares e avaliação secundária com base no ATLS 10ª edição.",
  },
  {
    path: "/Neurotrauma",
    element: <Neurotrauma />,
    title: "Neurotrauma: TCE, Raquimedular e Face",
    icon:<IconVideoHover srcVideo="/assets/neurotrauma.mp4" />,
    categoria: "Cirurgia",
    descricao:
      "TCE, hematomas intracranianos, manejo da HIC por degraus, morte encefálica, trauma raquimedular e trauma de face — referência para residência.",
  },
  {
    path: "/aines",
    element: <AINEs />,
    title: "Potência dos AINEs",
    icon: "💊",
    categoria: "Ciclo Basico",
    descricao: "Comparativo de potência e seletividade COX-1/COX-2",
  },
  {
    path: "/cox2",
    element: <COX2 />,
    title: "Fisiologia das COX",
    icon: "🔬",
    categoria: "Ciclo Basico",
    descricao: "Mecanismo das ciclooxigenases e cascata do ácido araquidônico",
  },
];
