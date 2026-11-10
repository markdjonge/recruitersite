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

/**
 * Roept de server-side Netlify Function aan die de Gemini-aanroep doet.
 * De Gemini API-key leeft nu uitsluitend op de server (env var GEMINI_API_KEY)
 * en komt nooit in de browser of de frontend-bundle terecht.
 */
export const generateLeadStrategy = async (niche: string): Promise<StrategyResult> => {
  const response = await fetch('/api/generate-strategy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ niche }),
  });

  if (!response.ok) {
    const message = (await response.text().catch(() => '')) || `Aanvraag mislukt (${response.status})`;
    throw new Error(message);
  }

  return (await response.json()) as StrategyResult;
};
