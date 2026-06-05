var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var contactSubmissions = [];
var aiClient = null;
function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  if (!aiClient) {
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
var mockStrategies = {
  default: {
    projectName: "Cinematic Authority Framework",
    coreHook: "Moving from functional utility to high-concept societal purpose.",
    creativeConcept: "A cinematic documentary approach illustrating the behind-the-scenes human decisions, craftsmanship, and hard data proving your real-world positioning.",
    suggestedServices: ["Strategic Media Production", "Storytelling & Brand Strategy"],
    campaignRoadmap: [
      { phase: "Phase 1: Brand Audit & Messaging Core", details: "Establish direct core values, standard narrative playbooks, and outline standard scripting pillars." },
      { phase: "Phase 2: High-Contrast Cinematic Production", details: "Anamorphic video capturing, tailored professional lighting, and focused director interviews." },
      { phase: "Phase 3: Omnichannel Campaign Rollout", details: "Dispersing coordinated narrative assets, micro-cuts, and educational webinars matching user funnels." }
    ],
    strategicAdvice: "Note: We are running in beautiful simulation mode. Configure your API key inside Settings > Secrets to activate real-time Gemini strategic intelligence."
  },
  SaaS: {
    projectName: "The human-centric system pipeline",
    coreHook: "Showing the real-time engineering heart keeping global pipelines awake.",
    creativeConcept: "A Netflix-style technology feature series spotlighting customer operations, structural challenges overcome by developer squads, and structural impact metrics.",
    suggestedServices: ["Corporate Training & Workshops", "Strategic Media Production"],
    campaignRoadmap: [
      { phase: "Phase 1: Storyboard Formulation", desc: "Identify critical developer personas and frame engineering pivots." },
      { phase: "Phase 2: Anamorphic Field Shoot", desc: "Record key client deployment zones and direct interactive panel interviews." },
      { phase: "Phase 3: Launch cascade", desc: "Distributing highly-engaging video formats across professional networks." }
    ],
    strategicAdvice: "Focus on showing raw system complexity, then mapping it to clean, human-scale outcomes. Simulation note: add GEMINI_API_KEY for dynamic advice."
  }
};
async function generateStrategicConsultation(name, niche, pitch, objective) {
  const client = getAiClient();
  if (!client) {
    const isTech = niche.toLowerCase().includes("tech") || niche.toLowerCase().includes("software") || niche.toLowerCase().includes("saas");
    const selected = isTech ? mockStrategies.SaaS : mockStrategies.default;
    return {
      projectName: `${name} - Strategic Brand Resonance`,
      coreHook: selected.coreHook,
      creativeConcept: `Under UNIVERSE8's Storytelling framework, we position ${name} not as a standard provider, but as the absolute strategic leader in the ${niche} landscape. ${selected.creativeConcept}`,
      suggestedServices: selected.suggestedServices,
      campaignRoadmap: selected.campaignRoadmap,
      strategicAdvice: `Highly specific advice for your strategic objective: "${objective}". To make real-world headway, synthesize your core technological breakthroughs into tangible story beats. Co-create short narrative segments displaying your real workflow, while utilizing high-contrast editorial colors. (Note: Provide your GEMINI_API_KEY in Secrets for customized real-time AI strategic consulting)`
    };
  }
  try {
    const prompt = `
      You are the strategic storyteller behind UNIVERSE8, an elite cinematic production and media consulting brand known for deep strategy, Netflix-style high-end visuals, and business impact.
      You are formulating a premium customized Strategic Media Campaign Proposal for a prospective high-value client.

      Client Context:
      - Brand/Organization Name: "${name}"
      - Market Niche/Industry: "${niche}"
      - Existing Core Pitch: "${pitch}"
      - Strategic Objective for Media: "${objective}"

      Draft a premium, elite proposal custom-suited for this client, focusing on:
      1. A custom project name representing cinematic, high-status positioning (e.g. "Pioneers of Logic", "Beyond the Campus Gateway").
      2. A core conceptual hook (the narrative anchor).
      3. A creative storytelling concept explaining the cinematic/cinematography direction, lighting tone, and scripting perspective.
      4. Recommendations of UNIVERSE8 services to bundle.
      5. A 3-phase strategic campaign roadmap.
      6. Clear tactical advice advising the founder/corporate team on how to move their audience to tears or strategic commitment.

      Make the language sound like a luxurious creative consultant, precise, objective, confident, yet incredibly professional.
    `;
    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: import_genai.Type.OBJECT,
          required: ["projectName", "coreHook", "creativeConcept", "suggestedServices", "campaignRoadmap", "strategicAdvice"],
          properties: {
            projectName: {
              type: import_genai.Type.STRING,
              description: "A distinctive, cinematic, premium project title tailored to the client brand."
            },
            coreHook: {
              type: import_genai.Type.STRING,
              description: "The core storytelling thesis statement or headline anchor (1 quick, impactful phrase)."
            },
            creativeConcept: {
              type: import_genai.Type.STRING,
              description: "High-concept creative concept detail. Pitch the visual environment, tone (e.g., Netflix style warmth, cybernetic slate-gray), and narrative arc (2-4 elegant sentences)."
            },
            suggestedServices: {
              type: import_genai.Type.ARRAY,
              items: { type: import_genai.Type.STRING },
              description: 'List 1 to 3 specific Services chosen from ["Strategic Media Production", "Storytelling & Brand Strategy", "Creator Empowerment & Coaching", "Corporate Training & Workshops"].'
            },
            campaignRoadmap: {
              type: import_genai.Type.ARRAY,
              items: {
                type: import_genai.Type.OBJECT,
                required: ["phase", "details"],
                properties: {
                  phase: { type: import_genai.Type.STRING, description: 'Phase Identifier e.g. "Phase 1: Creative Scripting & Core Alignment"' },
                  details: { type: import_genai.Type.STRING, description: "Direct strategic actions taken in this phase." }
                }
              }
            },
            strategicAdvice: {
              type: import_genai.Type.STRING,
              description: "A highly strategic piece of advice addressing their specific objective, emphasizing long-form value creation over generic tactics."
            }
          }
        }
      }
    });
    const parsed = JSON.parse(response.text.trim());
    return parsed;
  } catch (error) {
    console.error("Error generating strategy via Gemini:", error);
    return {
      projectName: `${name} Strategy Blueprint`,
      coreHook: "Strategy meets high-contrast storytelling.",
      creativeConcept: "A premium, modern, cinematic documentary illustrating how your values overcome client obstacles, incorporating high-end lighting guides and precise audio mastery.",
      suggestedServices: ["Strategic Media Production", "Storytelling & Brand Strategy"],
      campaignRoadmap: [
        { phase: "Phase 1: Strategy Formulation", details: "Map objectives to narrative paths." },
        { phase: "Phase 2: Cinematic Development", details: "Direct high-fidelity captures and executive alignment briefings." },
        { phase: "Phase 3: Rollout & Analytics", details: "Launch targeted media assets across premier distribution networks." }
      ],
      strategicAdvice: "Due to a temporary processing lag, this template strategy has been provided to maintain high visual standards. Please check key structures and keep stories authentic."
    };
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/contact", (req, res) => {
    const { name, organization, email, projectType, budgetRange, projectDetails } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required fields." });
    }
    const payload = {
      id: `lead_${Date.now()}`,
      name,
      organization: organization || "Personal Brand",
      email,
      projectType,
      budgetRange,
      projectDetails: projectDetails || "",
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    contactSubmissions.push(payload);
    console.log("Received UNIVERSE8 high-value contact submission:", payload);
    return res.json({
      success: true,
      message: "Your inquiry has been logged securely into the UNIVERSE8 priority queue. Our brand strategist will respond within 24 hours.",
      submissionId: payload.id
    });
  });
  app.post("/api/strategy/consult", async (req, res) => {
    const { clientName, marketNiche, brandPitch, targetObjective } = req.body;
    if (!clientName || !marketNiche || !targetObjective) {
      return res.status(400).json({ error: "Client Name, Market Niche, and Target Objective are required." });
    }
    const strategy = await generateStrategicConsultation(
      clientName,
      marketNiche,
      brandPitch || "An ambitious brand aiming for impact.",
      targetObjective
    );
    return res.json(strategy);
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`UNIVERSE8 Full-Stack Server running on active port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
