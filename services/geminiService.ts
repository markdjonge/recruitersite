import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export interface StrategyResult {
  headline: string;
  clients: string[];
  candidates: string[];
  opportunity: string;
  vacancyStats: { platform: string; count: string }[];
  hiringManagers: {
    smallBusinesses: string[];
    largeCompanies: string[];
  };
}

export const generateLeadStrategy = async (niche: string): Promise<StrategyResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Fungeer als een senior recruitment partner bij LinkedUp.
      Jouw klant is een recruitment agency in Nederland gespecialiseerd in: "${niche}".
      
      Jouw taak: Genereer een 'Market Potential Report' om te laten zien hoeveel business er voor het oprapen ligt.
      LinkedUp is GEEN tool, maar een dienstverlener die actief business vindt (opdrachtgevers) en resources sourcet (kandidaten).

      Retourneer JSON:
      - headline: Een zakelijke, prikkelende kop over de marktkans (max 6 woorden).
      - clients: 3 specifieke type organisaties of sectoren die LinkedUp voor deze agency kan benaderen voor nieuwe opdrachten (Sales focus).
      - candidates: Benoem hier welke bronnen het meest aannemelijk zijn de kandidaten te vinden. Je kunt kiezen uit linkedin, meta, en google ads. Sommige soorten kandidaten zijn in meerdere kanalen goed te vinden, andere juist maar op één enkele.
      - vacancyStats: Een array met objecten {platform, count} met een REALISTISCHE SCHATTING van het aantal openstaande vacatures in Nederland.
        *   Gebruik bronnen als referentie: LinkedIn, Indeed, Nationale Vacaturebank.
        *   Formatteer getallen netjes: "450+", "~1.200", "> 80".
        *   Wees specifiek voor de niche "${niche}".
      - opportunity: Eén sterke slotzin waarom uitbesteden aan LinkedUp zorgt voor snellere groei in deze specifieke niche.
      - hiringManagers: Een object met twee arrays:
        * smallBusinesses: 2 specifieke functietitels van hiring managers in kleine bedrijven (1-50 personeelsleden) die deze rol waarschijnlijk vervullen (bijv. "HR Manager", "Bedrijfsleider")
        * largeCompanies: 2 specifieke functietitels van hiring managers in grote bedrijven (100+ personeelsleden) die deze rol waarschijnlijk vervullen (bijv. "Head of Recruitment", "Talent Acquisition Manager")`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            clients: { type: Type.ARRAY, items: { type: Type.STRING } },
            candidates: { type: Type.ARRAY, items: { type: Type.STRING } },
            vacancyStats: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  platform: { type: Type.STRING },
                  count: { type: Type.STRING },
                }
              }
            },
            opportunity: { type: Type.STRING },
            hiringManagers: {
              type: Type.OBJECT,
              properties: {
                smallBusinesses: { type: Type.ARRAY, items: { type: Type.STRING } },
                largeCompanies: { type: Type.ARRAY, items: { type: Type.STRING } }
              }
            }
          },
          required: ["headline", "clients", "candidates", "vacancyStats", "opportunity", "hiringManagers"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as StrategyResult;
    }
    throw new Error("Geen data ontvangen van AI");
  } catch (error) {
    console.error("Fout bij genereren strategie:", error);
    throw error;
  }
};
