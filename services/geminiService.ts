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
      - candidates: 3 specifieke bronnen of methoden die LinkedUp inzet om het schaarse talent in deze niche te vinden (Sourcing focus).
      - vacancyStats: Een array met objecten {platform, count} met een REALISTISCHE SCHATTING van het aantal openstaande vacatures in Nederland.
        *   Gebruik bronnen als referentie: LinkedIn, Indeed, Nationale Vacaturebank.
        *   Formatteer getallen netjes: "450+", "~1.200", "> 80". 
        *   Wees specifiek voor de niche "${niche}".
      - opportunity: Eén sterke slotzin waarom uitbesteden aan LinkedUp zorgt voor snellere groei in deze specifieke niche.`,
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
          },
          required: ["headline", "clients", "candidates", "vacancyStats", "opportunity"],
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
