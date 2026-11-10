import { GoogleGenAI, Type } from "@google/genai";

// De Gemini API-key wordt uitsluitend server-side gelezen (Netlify env var GEMINI_API_KEY).
// Deze key komt NOOIT in de browser of in de frontend-bundle terecht.
const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is niet ingesteld op de server.");
  }
  return new GoogleGenAI({ apiKey });
};

export const handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let niche;
  try {
    niche = JSON.parse(event.body || "{}").niche;
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Ongeldige JSON" }) };
  }

  if (!niche || typeof niche !== "string" || !niche.trim()) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Niche is verplicht" }) };
  }

  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Fungeer als een senior recruitment partner bij LinkedUp.
      Jouw klant is een recruitment agency in Nederland gespecialiseerd in: "${niche}".
      
      Jouw taak: Genereer een 'Market Potential Report' om te laten zien hoeveel business er voor het oprapen ligt.
      LinkedUp is GEEN tool, maar een dienstverlener die actief business vindt (opdrachtgevers) en resources sourcet (kandidaten).

      Retourneer JSON:
      - headline: Een zakelijke, prikkelende kop over de marktkans (max 6 woorden).
      - clients: 3 specifieke type organisaties of sectoren die LinkedUp voor deze agency kan benaderen voor nieuwe opdrachten (Sales focus).
      - candidates: Benoem hier welke kanalen het meest aannemelijk zijn de kandidaten te vinden. Je mag ALLEEN kiezen uit LinkedIn en/of Meta Ads (Facebook & Instagram). Noem geen andere kanalen. Sommige soorten kandidaten zijn via beide kanalen goed te bereiken, andere juist maar via één van de twee. Kies dus per niche: LinkedIn, Meta Ads, of allebei.
      - vacancyStats: Een array met objecten {platform, count} met een REALISTISCHE SCHATTING van het aantal openstaande vacatures in Nederland.
        *   Gebruik bronnen als referentie: LinkedIn, Indeed, Nationale Vacaturebank.
        *   Formatteer getallen netjes: "450+", "~1.200", "> 80".
        *   Niet te formeel spreken. Dus niet met "u" aanspreken.
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
                },
              },
            },
            opportunity: { type: Type.STRING },
            hiringManagers: {
              type: Type.OBJECT,
              properties: {
                smallBusinesses: { type: Type.ARRAY, items: { type: Type.STRING } },
                largeCompanies: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
            },
          },
          required: ["headline", "clients", "candidates", "vacancyStats", "opportunity", "hiringManagers"],
        },
      },
    });

    if (response.text) {
      return { statusCode: 200, headers, body: response.text };
    }

    return { statusCode: 502, headers, body: JSON.stringify({ error: "Geen data ontvangen van AI" }) };
  } catch (error) {
    console.error("Fout bij genereren strategie:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Analyse mislukt" }) };
  }
};
