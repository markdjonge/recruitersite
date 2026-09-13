// Blog-artikelen voor /kennisbank
// Nieuwe artikelen voeg je hier toe; routes worden automatisch gegenereerd.
// Leestijd: bereken op ~200 woorden per minuut en verwacht 800+ woorden per artikel.

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorRole: string;
  category: string;
  readingTime: number; // minuten op 200 woorden per minuut
  content: ContentBlock[];
}

export const posts: Post[] = [
  {
    slug: 'meer-opdrachtgevers-als-recruitment-agency',
    title: 'Hoe kom ik als recruitment agency aan meer opdrachtgevers?',
    description: 'Meer opdrachtgevers als recruitment agency vinden begint bij een voorspelbare acquisitie-aanpak. Deze vijf strategieën werken ook zonder koude acquisitie.',
    date: '2026-09-13',
    author: 'Mark de Jonge',
    authorRole: 'Oprichter LinkedUp',
    category: 'Opdrachtgevers vinden',
    readingTime: 5,
    content: [
      { type: 'p', text: 'De meeste recruitment agencies draaien op netwerk en mond-tot-mondreclame. Prima, tot het stopt. Wie structureel wil groeien, moet acquisitie professionaliseren. In dit artikel: vijf bewezen strategieën voor het vinden van meer opdrachtgevers als recruitment agency, van gratis tot uitbesteed.' },
      { type: 'h2', text: '1. Maak jouw ideale opdrachtgever concreet (ICP)' },
      { type: 'p', text: 'Aan tafel komen begint bij weten wié je aan tafel wilt. "Elke organisatie met een vacature" is te breed. Definieer je ideale opdrachtgever profiel (ICP): welke sector, hoeveel medewerkers, welk type hiring manager? Bij kleine bedrijven is dat meestal de eigenaar of operationeel leider; bij corporate organisaties de HR Manager, Head of Recruitment of Talent Acquisition Manager.' },
      { type: 'p', text: 'Waarom dit zo belangrijk is: hoe scherper jouw doelgroep, hoe persoonlijker jouw benadering. Een bericht "ik zag dat jullie monteurs zoeken" werkt tien keer beter dan "wij doen recruitment voor technische functies". Zonder ICP verspil je elke week tijd aan organisaties die er niet op zitten te wachten.' },
      { type: 'h2', text: '2. Benader op timing: actieve vacatures zijn je signaal' },
      { type: 'p', text: 'De grootste fout in recruitment-acquisitie: benaderen op gevoel. Rondbellen "om kennis te maken" converteert nauwelijks. Veel beter: benader organisaties op het moment dat er een openstaande vacature ligt in jouw niche. Vacaturebanken, LinkedIn en bedrijfswebsites zijn publieke signalen die je systematisch kunt monitoren.' },
      { type: 'p', text: 'Handmatig kan dat met alerts en een simpel overzicht, maar het wordt snel een dagtaak. Bij LinkedUp automatiseren wij dit deel: we mappen jouw markt, filteren actieve vacatures en benaderen de juiste hiring managers. Wie op timing benadert, is relevant in plaats van storend. Dat verschil bepaalt of je gehoord wordt.' },
      { type: 'h2', text: '3. Zorg dat je vindbaar bent (ook voor AI-zoekmachines)' },
      { type: 'p', text: 'Steeds meer hiring managers zoeken niet alleen via Google, maar ook via AI zoals ChatGPT en Perplexity. Zorg dat jouw website duidelijk beantwoordt wat je doet, voor wie, en waarom je anders bent. FAQ-content, cases met harde cijfers en actuele artikelen over jouw niche maken je vindbaar én citaat-waardig.' },
      { type: 'ul', items: [
        'Scherp ICP: wie is jouw ideale opdrachtgever?',
        'Timing: benaderen op actieve vacatures',
        'Vindbaarheid: content die concrete vragen beantwoordt',
        'Netwerk: structureel referrals vragen na plaatsingen',
        'Uitbesteden: no cure no pay leadgeneratie (zie punt 5)'
      ] },
      { type: 'h2', text: '4. Gebruik je netwerk structureel als kanaal' },
      { type: 'p', text: 'Je beste bron van nieuwe opdrachten: bestaande klanten en geplaatste kandidaten. Vraag na elke succesvolle plaatsing actief om een introductie of review. Dat voelt ongemakkelijk; toch leveren warme doorverwijzingen meestal de soepelste gesprekken op die je kunt voeren.' },
      { type: 'p', text: 'Publiceer ook regelmatig bewijs van resultaat op LinkedIn: cijfers, cases, quotes. Dat is geen opscheppen; dat is acquisitie-materiaal dat ongestoord voor je werkt, terwijl jij met klanten bezig bent.' },
      { type: 'h2', text: '5. Besteed de acquisitie uit (zonder risico)' },
      { type: 'p', text: 'Veel agency-eigenaren nemen liever geen eigen salesmensen in dienst. Begrijpelijk: dat is duur en risicovol. Daarom werken wij bij LinkedUp op basis van no cure no pay: wij benaderen hiring managers met actieve vacatures onder onze eigen naam, en jij betaalt alleen per positieve reactie. Binnen 2 dagen je eerste leads. Zo krijg je een voorspelbare stroom van gesprekken zonder vaste kosten of extra personeel in dienst.' },
      { type: 'h2', text: 'Welke kanalen werken het best voor recruitment-acquisitie?' },
      { type: 'p', text: 'De meeste agencies gebruiken drie kanalen tegelijk: LinkedIn-berichten, e-mail en telefoon. LinkedIn werkt goed voor zichtbare hiring managers (profielen met recente vacatures), e-mail schaalt beter en telefoon converteert het hoogst als je een warm aanknopingspunt hebt. De combinatie is belangrijker dan het kanaal: een LinkedIn-benadering gevolgd door een mail en pas daarna een belpoging levert significant meer reacties dan een kanaal alleen.' },
      { type: 'h2', text: 'Wat je elke maand moet meten (minder is meer)' },
      { type: 'p', text: 'Meet slechts vier dingen: hoeveel prospects benaderd, hoeveel positieve reacties, hoeveel gesprekken en hoeveel opdrachten. Over lange termijn weet je dan je conversieratio. Benader je 100 prospects en krijg je er 3 gesprekken, dan moet je per gesprek dus 33 prospects benaderen. Zonder dit lijkt acquisitie “noodlot”; met een gespreksratio kun je het managen en verbeteren kanaal voor kanaal.' },
      { type: 'h2', text: 'De drie meestgemaakte fouten in recruitment-acquisitie' },
      { type: 'ul', items: [
        'Te algemene targeting: "wij doen alles voor iedereen" overtuigt niemand',
        'Te snel bellen: je eerste bericht is geen acquisitie, het is selectie',
        'Geen follow-up: 80% van positieve reacties komt na bericht 2 of 3'
      ] },
      { type: 'h2', text: 'Zo ziet een week van gerichte outreach eruit (voorbeeld)' },
      { type: 'p', text: 'Maandag: 40 nieuwe prospects met actieve vacatures toegevoegd aan de lijst. Dinsdag: eerste berichten verstuurd, gepersonaliseerd op die vacature. Woensdag: tweede touchpoints op niet-responders, plus belpoging naar de drie warmste klikken. Donderdag: gesprekken gepland en twee positieve reacties verwerkt. Vrijdag: lijst opgeschoond en metrics bijgewerkt. Drie tot vier uur, wekelijks, is voldoende als je systeem klopt.' },
      { type: 'h2', text: 'Wanneer is uitbesteden logisch? (en wanneer nog niet)' },
      { type: 'p', text: 'Uitbesteden is logisch als je nu al minder tijd hebt dan je outreach vraagt, of als je structureel groeien wilt zonder sales in dienst te nemen. Het is nog niet logisch als je nog nog niet weet welke doelgroep welke berichten nodig heeft. Ga daarom eerst zelf de targeting testen of start met een partij die dat deel voor je opzet – wij bij LinkedUp doen bijvoorbeeld samen met doelgroepkeuze.' },
      { type: 'h2', text: 'Conclusie: acquisitie is een systeem, geen toeval' },
      { type: 'p', text: 'Meer opdrachtgevers vinden is geen mysterie; het is een systeem van scherpe targeting, timing-bewuste outreach, vindbaarheid, referral-discipline en eventueel uitbestede leadgeneratie. Kies je aanpak, houd hem vol en meet wat werkt. Wil je het volledig uitbesteden? Plan een vrijblijvende strategiesessie via onze contactpagina.' }
    ]
  },
  {
    slug: 'wat-kost-leadgeneratie-recruitmentbureau',
    title: 'Wat kost leadgeneratie voor een recruitmentbureau?',
    description: 'Wat kost leadgeneratie voor een recruitmentbureau? Van vaste retainer tot no cure no pay: een eerlijk overzicht van prijsmodellen en waar je op moet letten.',
    date: '2026-09-13',
    author: 'Mark de Jonge',
    authorRole: 'Oprichter LinkedUp',
    category: 'Kosten & modellen',
    readingTime: 4,
    content: [
      { type: 'p', text: 'Wie leadgeneratie wil uitbesteden als recruitmentbureau, krijgt te maken met drie prijsmodellen: een vaste retainer, pay per lead of no cure no pay. In dit artikel leggen we uit wat ze kosten, wat je ervoor krijgt en of ze bij jou passen.' },
      { type: 'h2', text: 'Model 1: de vaste retainer' },
      { type: 'p', text: 'Veel leadgeneratie-partijen werken met een maandelijkse retainer. In Nederland zie je bedragen van 1.500 tot 4.000 euro per maand, met daarnaast vaak opstartkosten van enkele honderden tot duizenden euro\'s. Het risico ligt volledig bij jou: ook als er weinig resultaat komt, loopt de factuur door. Voor eenmansbureaus of kleine teams is dat een flinke gok, zeker als de partij vaag is over definities van "resultaat".' },
      { type: 'h2', text: 'Model 2: pay per lead' },
      { type: 'p', text: 'Sommige partijen rekenen per opgeleverde lead, meestal 50 tot 250 euro per lead afhankelijk van niche en kwaliteit. Eerlijke waarschuwing vooraf: dit overlapt in de praktijk veel met model 3. Het verschil zit meestal in twee dingen: hoe strikt "een lead" is gedefinieerd en of er naast de leadprijs ook vaste kosten gelden (bijvoorbeeld platformgeld of opstartkosten). Vraag daarom altijd naar de exacte definitie en de volledige kostenstructuur.' },
      { type: 'h2', text: 'Model 3: no cure no pay' },
      { type: 'p', text: 'Het model waarin wij zelf opereren bij LinkedUp. Je betaalt alleen per positieve reactie van een hiring manager. Geen opstartkosten, geen vaste lasten en je kunt op elk moment stoppen. Het risico ligt bij de leadgeneratie-partij, niet bij jou. Voor recruitment agencies die groeien zonder cashflow bloot te leggen, is dit vaak het eerlijkste en meest soepel werkende model.' },
      { type: 'p', text: 'Kortom: kies niet op de naam van het model, maar op de combinatie van definitie plus kostenstructuur. Wij zijn no cure no pay: geen vaste lasten, met een strikte definitie van wat telt als reactie.' },
      { type: 'p', text: 'Let op: no cure no pay bestaat in varianten. Bespreek altijd welk resultaat precies als "positieve reactie" telt, en hoe of wanneer die wordt afgebakend. Bij LinkedUp tellen we een positieve reactie als een hiring manager met actieve vacature die aangeeft met jouw bureau in gesprek te willen.' },
      { type: 'h2', text: 'Drie vragen om elke partij te toetsen' },
      { type: 'ul', items: [
        'Wat definieren jullie precies als een lead?',
        'Betaal ik ook als er geen resultaat is?',
        'Hoe snel na de start komen de eerste leads binnen?'
      ] },
      { type: 'h2', text: 'De verborgen kost: zelf de acquisitie doen' },
      { type: 'p', text: 'Veel eigenaren doen leadgeneratie zelf. Dat lijkt gratis, maar is het niet: elke uur bellen is een uur niet schakelen met kandidaten of klanten. Reken mee: bij een intern tarief van 100 tot 150 euro per uur kost vijf uur acquisitie per week al 2.000 tot 3.000 euro per maand. En dan is het nog de vraag of die uren gesprekken opleveren. Uitbesteden aan een specialist kan vaak voordeliger uitpakken, zeker in een model waar je alleen resultaat betaalt.' },
      { type: 'h2', text: 'Zo kies je het juiste model voor jouw situatie' },
      { type: 'p', text: 'Kies een retainer als volume jouw doel is en je kunt investeren. Kies pay per lead als je exact weet wat een lead is en kwaliteit kunt controleren. Kies no cure no pay als zekerheid en schaal zonder risico vooropstaan. Start altijd met een proeftijd van vier tot acht weken: dan voel je welke werkwijze het beste aansluit bij jouw niche en agenda.' },
      { type: 'h2', text: 'Een eerlijke voorbeeldberekening' },
      { type: 'p', text: 'Stel: uit 20 positieve reacties ontstaan 12 gesprekken met hiring managers, waarvan 3 een opdracht. Is jouw gemiddelde fee 5.000 euro per opdracht, dan is die groep 15.000 euro waard. Wat is dan acceptabel als kostprijs voor die 20 reacties? Als je dat terugrekent, weet je jouw grensprijs per positieve reactie. Zonder deze terugrekening vragen agencies naar “wat kost het”, terwijl eigenlijk de vraag is “wat levert één gesprek op in mijn funnel”.' },
      { type: 'h2', text: 'Definities beschermen ook jouw interne kwaliteit' },
      { type: 'p', text: 'Leg in je CRM vast wat als lead, reactie, gesprek en opdracht telt. Zo voorkom je misverstanden in rapportages, ook naar jezelf. Bij LinkedUp leggen we dit van tevoren met je vast: een positieve reactie is een hiring manager met actieve vacature die aangeeft met jouw bureau in gesprek te willen.' },
      { type: 'p', text: 'Bij LinkedUp: een lead is een positieve reactie van een hiring manager met actieve vacature, op basis van no cure no pay, en de eerste reacties heb je binnen 2 dagen.' },
      { type: 'h2', text: 'Conclusie' },
      { type: 'p', text: 'Leadgeneratie hoeft niet duur te zijn, maar prijs zonder definities betekent niets. Kies het model waar risico eerlijk verdeeld is, en leg definities vast voordat je start. Wil je weten wat uitbesteden in jouw niche kost? Doe onze gratis marktscan op de homepage of plan een vrijblijvende strategiesessie.' }
    ]
  },
  {
    slug: 'koude-acquisitie-recruiters-werkt-steeds-minder',
    title: 'Koude acquisitie voor recruiters: waarom het steeds minder werkt (en wat wél werkt)',
    description: 'Koude acquisitie werkt voor recruiters steeds slechter. Ontdek waarom, en welke alternatieven zoals no cure no pay leadgeneratie wél resultaat geven.',
    date: '2026-09-13',
    author: 'Mark de Jonge',
    authorRole: 'Oprichter LinkedUp',
    category: 'Strategie',
    readingTime: 4,
    content: [
      { type: 'p', text: 'Steeds minder recruiters raken alleen via koude acquisitie aan opdrachtgevers. De redenen zijn logisch en het alternatief bestaat: benaderen op timing en relevantie, of het uitbesteden aan een no cure no pay partij.' },
      { type: 'h2', text: 'Waarom koud bellen afneemt in effectiviteit' },
      { type: 'p', text: 'Hiring managers ontvangen dagelijks tientallen salesberichten. Generieke outreach wordt gefilterd, genegeerd of erger: het schaadt je naamsbekendheid. Tegelijk is bereiken lastiger geworden: voicemail, spamfilters en LinkedIn-limieten op massa-berichten. Resultaat: meer moeite voor minder gesprekken per uur. Elke recruiter die dit herkent, voelt zich meestal al maanden aan dit probleem.' },
      { type: 'p', text: 'Er is ook een subtielere schade: elke uur aan koude calls is een uur die je beter had kunnen besteden aan gesprekken die al warm zijn. De correctie van dit probleem begint bij bewust selecteren waar je sales-uren naartoe gaan.' },
      { type: 'h2', text: 'De prijs van elke misgeslagen koude poging' },
      { type: 'p', text: 'Naast lage conversie is er een verborgen kost: reputatie. Elke irrelevante outreach aan een hiring manager die je in de toekomst nog zou willen bereiken, laat een mentale aantekening achter. Bij recruitment, waar je hele markt vaak maar enkele honderden relevante managers bevat, verspil je via koud één kans die later warm had kunnen zijn. Een timing-aanpak voorkomt dat: je investeert je eerste indruk pas in het moment dat relevantie voorhanden is.' },
      { type: 'h2', text: 'Wat wél werkt: timing plus relevantie' },
      { type: 'p', text: 'De winnaars in recruitment-acquisitie benaderen organisaties op het moment dat er een passende vacature openstaat, met een bericht dat past bij hun situatie. Dat voelt voor de ontvanger niet als koude acquisitie; het voelt als een oplossing op het goede moment. Dat is precies hoe LinkedUp werkt: jouw markt mappen, actieve vacatures vinden, hiring managers benaderen, positieve reacties aan jou doorleiden.' },
      { type: 'p', text: 'Wie dit zelf doet, kan beginnen simpel: volg de vacaturebanken en LinkedIn van je doelgroep, houd bij wie wanneer een vacature post, en schiet los op het moment dat relevantie voorhanden is. Het vereist discipline, maar converteert veel beter dan willekeurig bellen.' },
      { type: 'h2', text: 'Uitbesteden zonder risico' },
      { type: 'p', text: 'Koude acquisitie uitbesteden aan een retainer-partij is meestal geen verbetering; je koopt rapportages in plaats van gesprekken. Een no cure no pay model draait dat om: je betaalt alleen per positieve reactie van een hiring manager. Geen opstartkosten en eerste leads binnen 2 dagen.' },
      { type: 'h2', text: 'Zo test je binnen twee weken of uitbesteden werkt' },
      { type: 'p', text: 'Start klein. Kies één niche en één doelgroep, defineer wat precies telt als “positieve reactie” en meet de eerste twee weken alleen reactie-gesprekken en opdrachten. Daarna kun je eerlijk schalen of stoppen. Omdat no cure no pay per reactie rekent, is een dergelijke proef risicovrij: je betaalt alleen wat bewezen werkt.' },
      { type: 'h2', text: 'De overstap van “koud” naar “timing”: checklist' },
      { type: 'ul', items: [
        'Week 1: verzamel alleen vacaturesignalen, nog geen outreach',
        'Week 2: stuur 1-2 persoonlijke berichten per relevante vacature',
        'Week 3: meet positieve reacties en gesprekken (niet aantal verzonden)',
        'Week 4: splits kanalen en bel alleen warme aanloopcontacten'
      ] },
      { type: 'h2', text: 'Drie bezwaren die recruiters vaak hebben (en hoe ze zich houden)' },
      { type: 'p', text: '“Ik heb geen tijd om te acquiseren.” Logisch; daarom automatiseren wij het prospect-deel en blijft voor jou alleen het gesprek over. “Ik wil warme leads, geen extra tool.” Precies; wij leveren mensen die positief reageren, geen software. “Wij hebben al een salespersoon.” Prima; wij vullen zijn of haar agenda met zelf gevonden, geïnteresseerde hiring managers, zodat interne tijd alleen nog naar gesprekken gaat.' },
      { type: 'h2', text: 'Hoe wij dit bij LinkedUp aanpakken' },
      { type: 'p', text: 'Wij combineren drie onderdelen. We mappen jouw markt op actieve vacatures, we benaderen hiring managers onder onze eigen naam en we sturen elke positieve reactie direct door. Jij voert alleen de gesprekken. Daardoor verdwijnt de druk en schade van koude acquisitie, terwijl jij controle blijft houden op kwaliteit. Geen opstartkosten en eerste leads binnen 2 dagen.' },
      { type: 'h2', text: 'Conclusie' },
      { type: 'p', text: 'Koude acquisitie werkt steeds minder omdat het niet meer over timing en relevantie gaat. Pas jouw aanpak aan op marktsignalen en overweeg no cure no pay, zoals bij LinkedUp. Lees verder in onze artikelen over opdrachtgevers vinden en de kosten van leadgeneratie.' }
    ]
  }
];
