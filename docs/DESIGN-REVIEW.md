# Design Review LinkedUp (13-09-2026)

Beoordeling van linkedup.online op basis van live screenshots (desktop, 1440px).
Totaaloordeel: **8/10** – boven het niveau van de meeste B2B-dienstverleners.

## Sterke punten (behouden)

- Krachtige merkidentiteit: geel/zwart/wit consequent en spaarzaam ingezet
- Duidelijke visuele hiërarchie: grote H1 met gele krul, afgewisselde sectie-achtergronden
- Brutalist typografie (Inter Black) past bij de zelfverzekerde toon
- Landingspagina (/start) is conversion-sterk: contrasterend formulier in donkere hero,
  USP-bullets met vinkjes, social proof cijfers
- Kaarten (diensten, cases, stappen) consistent en netjes

## Actiepunten (op impact gesorteerd)

### 1. URGENT vóór Meta-ads: testimonial op landingspagina is placeholder
- Tekst "Testimonial placeholder", "Naam Klant", "Recruitment Agency (test)"
- Risico: advertentiebezoekers zien dit als nep -> verlies van vertrouwen
- Actie: vervangen door echte quote + naam + bedrijf, OF sectie tijdelijk verwijderen
- Bestand: `pages/Landing.tsx` (sectie "Testimonial")

### 2. Cijfers labelen of verifiëren
- "50+ agencies geholpen", "1.200+ gesprekken ingepland", "4,9/5 klantscore"
- Kloppen ze? Voeg context toe (bijv. "sinds 2023")
- Kloppen ze niet? Vervangen door echte cijfers -> geloofwaardigheidsrisico
- Bestanden: `pages/Landing.tsx` (hero)

### 3. Klantlogo's op felgele tegels (Track record)
- Witte/lichte logo's op geel vallen weg, oogt onrustig
- Optie A: logo's op witte kaart met subtiele border
- Optie B: logo's in grijstinten (filter: grayscale) op brand-gray
- Bestand: `components/Features.tsx` (sectie "Track record")

### 4. Typografische variatie
- Alles is font-black; hier en daar een lichtere weight (600/500) in
  tussenkoppen en lead-teksten geeft meer rust en hiërarchie
- Bestanden: diverse (bijv. `components/Services.tsx`, `components/Features.tsx`)

### 5. Contrast overlaytekst hero-afbeelding
- Witte tekst op foto is op sommige schermen aan de rand van leesbaar
- Optie: gradient-overlay versterken (vanaf 70% ipv 60%)
- Bestand: `components/Hero.tsx`

## Afgehandeld eerder deze sessie

- [x] Mobiele overflow-fix (USP-rij flex-wrap, min-w-0 hero, text-size-adjust)
- [x] FAQ standaard dicht + alle antwoorden in HTML (GEO)
- [x] "namens jouw bureau" -> "onder onze eigen naam" (consistentie)
- [x] Marktscan gelabeld als "Indicatieve marktscan op basis van AI"
