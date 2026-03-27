import MedPanelPage from "./medpanel-layout";

// ── Constantes farmacológicas ──────────────────────────────────────────────
const NACL20_MEQ_PER_ML = 3.4; // NaCl 20%: ~3,4 mEq Na⁺/mL
const KCL10_MEQ_PER_ML = 1.34; // KCl 10%:  ~1,34 mEq K⁺/mL
const KCL191_MEQ_PER_ML = 2.565; // KCl 19,1%: ~2,565 mEq K⁺/mL

// ── Holliday-Segar ─────────────────────────────────────────────────────────
function hollidaySegar(kg) {
  if (kg <= 10) return kg * 100;
  if (kg <= 20) return 1000 + (kg - 10) * 50;
  return 1500 + (kg - 20) * 20;
}

function r1(n) {
  return Math.round(n * 10) / 10;
}
function r0(n) {
  return Math.round(n);
}

// ── Estilos ────────────────────────────────────────────────────────────────
const S = {
  root: {
    fontFamily: "'DM Mono', 'Courier New', monospace",
    background: "linear-gradient(135deg, #0d1117 0%, #0f1923 100%)",
    color: "#e2e8f0",
    minHeight: "100vh",
    padding: "2rem 1rem",
    boxSizing: "border-box",
  },
  card: {
    maxWidth: 680,
    margin: "0 auto",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
  },
  header: {
    background: "linear-gradient(90deg, #0e4d6b 0%, #0a3a52 100%)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    padding: "1.5rem 2rem",
  },
  headerTitle: {
    margin: 0,
    fontSize: "1.05rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#7dd3fc",
  },
  headerSub: {
    margin: "0.25rem 0 0",
    fontSize: "0.7rem",
    color: "rgba(125,211,252,0.55)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  body: { padding: "1.75rem 2rem" },

  // Seção
  section: {
    marginBottom: "1.75rem",
  },
  sectionLabel: {
    fontSize: "0.62rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#64748b",
    marginBottom: "0.75rem",
    fontWeight: 600,
  },

  // Input row
  inputRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: "0.65rem",
    letterSpacing: "0.1em",
    color: "#94a3b8",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  input: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    color: "#f1f5f9",
    fontFamily: "inherit",
    fontSize: "1.1rem",
    padding: "0.6rem 0.85rem",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box",
  },
  select: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    color: "#f1f5f9",
    fontFamily: "inherit",
    fontSize: "0.85rem",
    padding: "0.6rem 0.85rem",
    outline: "none",
    cursor: "pointer",
    width: "100%",
    boxSizing: "border-box",
  },

  // Divisor
  divider: {
    height: 1,
    background: "rgba(255,255,255,0.07)",
    margin: "1.5rem 0",
  },

  // Blocos de resultado
  resultBlock: {
    background: "rgba(14, 77, 107, 0.18)",
    border: "1px solid rgba(125, 211, 252, 0.12)",
    borderRadius: 12,
    padding: "1.2rem 1.5rem",
    marginBottom: "0.75rem",
  },
  resultBlockAlt: {
    background: "rgba(22, 163, 74, 0.1)",
    border: "1px solid rgba(74, 222, 128, 0.15)",
    borderRadius: 12,
    padding: "1.2rem 1.5rem",
    marginBottom: "0.75rem",
  },
  resultTitle: {
    fontSize: "0.6rem",
    letterSpacing: "0.18em",
    color: "#7dd3fc",
    textTransform: "uppercase",
    marginBottom: "0.9rem",
    fontWeight: 700,
  },
  resultTitleGreen: {
    fontSize: "0.6rem",
    letterSpacing: "0.18em",
    color: "#4ade80",
    textTransform: "uppercase",
    marginBottom: "0.9rem",
    fontWeight: 700,
  },
  resultGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
  },
  resultItem: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  resultKey: {
    fontSize: "0.62rem",
    color: "#64748b",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  resultVal: {
    fontSize: "1.45rem",
    fontWeight: 700,
    color: "#f1f5f9",
    lineHeight: 1.15,
  },
  resultUnit: {
    fontSize: "0.7rem",
    color: "#7dd3fc",
    marginLeft: 4,
    fontWeight: 400,
  },
  resultValGreen: {
    fontSize: "1.45rem",
    fontWeight: 700,
    color: "#4ade80",
    lineHeight: 1.15,
  },
  unitGreen: {
    fontSize: "0.7rem",
    color: "#86efac",
    marginLeft: 4,
    fontWeight: 400,
  },

  // Linha de composição
  compRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.6rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  compLabel: {
    fontSize: "0.78rem",
    color: "#94a3b8",
  },
  compVal: {
    fontSize: "0.92rem",
    fontWeight: 700,
    color: "#f1f5f9",
  },

  // Badge de velocidade
  velBadge: {
    marginTop: "0.75rem",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(125,211,252,0.08)",
    border: "1px solid rgba(125,211,252,0.2)",
    borderRadius: 20,
    padding: "0.4rem 1rem",
    fontSize: "0.8rem",
    color: "#bae6fd",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#38bdf8",
    display: "inline-block",
  },

  // Empty state
  emptyState: {
    textAlign: "center",
    padding: "2rem 0",
    color: "#334155",
    fontSize: "0.78rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },

  // Toggle tabs
  tabs: {
    display: "flex",
    gap: 6,
    marginBottom: "1.5rem",
  },
  tab: (active) => ({
    flex: 1,
    padding: "0.55rem",
    borderRadius: 8,
    border: active
      ? "1px solid rgba(125,211,252,0.4)"
      : "1px solid rgba(255,255,255,0.07)",
    background: active ? "rgba(14,77,107,0.4)" : "rgba(255,255,255,0.03)",
    color: active ? "#7dd3fc" : "#475569",
    fontSize: "0.68rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.2s",
    fontWeight: active ? 700 : 400,
  }),
};

// ── Componente principal ───────────────────────────────────────────────────
export default function HidratacaoPediatrica() {
  return (
    <MedPanelPage
      sections={sections}
      specialty="Emergencia"
      title="HV de Manutenção"
    />
  );
}
