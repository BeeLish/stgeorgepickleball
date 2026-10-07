export type EventSource = {
  label: string;
  url: string;
};

export type EventInlineLink = EventSource & {
  external?: boolean;
};

export type EventScheduleItem = {
  date: string;
  title: string;
  detail: string;
  needsOfficialCheck?: boolean;
};

export type EventPlanningItem = {
  number: string;
  label: string;
  title: string;
  paragraphs: string[];
};

export type PickleballEvent = {
  slug: string;
  name: string;
  shortName: string;
  dateLabel: string;
  cardDate: string;
  locationName: string;
  locationAddress: string;
  venueLink?: string;
  secondaryVenue?: string;
  organizer: string;
  startDate: string;
  endDate: string;
  summary: string;
  metaDescription: string;
  schemaDescription: string;
  overview: string[];
  whyItMatters: string[];
  statusNote: string;
  schedule: EventScheduleItem[];
  planning: EventPlanningItem[];
  officialUrl: string;
  registrationUrl: string;
  scheduleUrl: string;
  sources: EventSource[];
  inlineLinks: EventInlineLink[];
  verifiedOn: string;
  verificationNote: string;
};

export const events: PickleballEvent[] = [
  {
    slug: "huntsman-world-senior-games-pickleball-2026",
    name: "Huntsman World Senior Games — Pickleball",
    shortName: "Huntsman Games Pickleball",
    dateLabel: "Games: October 5–17, 2026 · Pickleball: October 12–17 (preliminary)",
    cardDate: "OCT 5–17 · PICKLEBALL OCT 12–17",
    locationName: "Little Valley Pickleball Complex",
    locationAddress: "2149 E Horseman Park Drive, St. George, UT 84790",
    venueLink: "/venues/little-valley-pickleball-complex",
    secondaryVenue: "SunRiver Pickleball Complex, 4275 S Country Club Drive",
    organizer: "Huntsman World Senior Games",
    startDate: "2026-10-12",
    endDate: "2026-10-17",
    summary: "A marquee week inside St. George’s 43-sport international celebration of athletes age 50 and over.",
    metaDescription: "Plan for 2026 Huntsman World Senior Games pickleball in St. George: verified competition dates, daily divisions, venues, spectator guidance, and official schedule links.",
    schemaDescription: "The 2026 pickleball competition at the Huntsman World Senior Games, an international 43-sport event for athletes age 50 and over in St. George, Utah.",
    overview: [
      "The Huntsman World Senior Games brings athletes age 50 and over to greater St. George for two weeks of competition across 43 sports. Pickleball is one of its signature draws, filling a full competition week with age singles, age doubles, mixed doubles, and skill-level doubles.",
      "The official pickleball page and the official tournament listing name Little Valley Pickleball Complex and SunRiver Pickleball Complex as the 2026 venues. Little Valley is the public centerpiece: 33 outdoor courts on the west side of The Fields at Little Valley, including a championship court with permanent bleacher seating. SunRiver is a private community facility rather than a City park.",
    ],
    whyItMatters: [
      "This is not simply a local tournament. The Games draw an international field, and the 2026 pickleball competition is a qualifier for the 2027 National Senior Games. Age doubles, age mixed doubles, and age singles all count toward qualification; skill-level doubles does not. The official page says the top three finishers in each age event qualify.",
      "For spectators, the appeal is range: high-skill doubles, age-group strategy, mixed doubles, and singles all appear during the week. Exact brackets and court assignments are not published until the day before each event, so use the official schedule for the final plan.",
    ],
    statusNote: "Competition runs Monday, October 12 through Saturday, October 17, with play beginning at 8:00 a.m. daily and athlete check-in at 7:00 a.m. The official page still labels the schedule preliminary and subject to change, and there are no make-up days. One contradiction remains on that page: its day-by-day schedule and the official tournament listing both put open practice on Sunday, October 11, while a separate section further down the same page still says October 12. Check the official schedule before traveling.",
    schedule: [
      { date: "OCT 5–17", title: "Huntsman World Senior Games", detail: "The full 2026 multi-sport event window in St. George." },
      { date: "SUN · OCT 11", title: "Open practice day", detail: "The official day-by-day schedule and the official tournament listing both put open practice all day at Little Valley on Sunday, October 11, with SunRiver opening to Huntsman participants after 10:00 a.m. A separate section of the same official page still says October 12.", needsOfficialCheck: true },
      { date: "MON · OCT 12", title: "Skill-level doubles", detail: "Men 4.0, 4.5, and 5.0, and women 3.5, 4.0, 4.5, and 5.0. Competition begins at 8:00 a.m.; athlete check-in at 7:00 a.m." },
      { date: "TUE · OCT 13", title: "Men’s age doubles · women’s 3.0 skill doubles", detail: "Age doubles runs in five-year brackets from 50+ upward; the women’s 3.0 skill division plays the same day." },
      { date: "WED · OCT 14", title: "Women’s age doubles · men’s 3.0 and 3.5 skill doubles", detail: "Women’s age doubles plays alongside the lower men’s skill divisions." },
      { date: "THU · OCT 15", title: "Mixed doubles · ages 50, 55, 60", detail: "Mixed doubles opens with the younger age groups." },
      { date: "FRI · OCT 16", title: "Mixed doubles · ages 65, 70, 75, 80+", detail: "Mixed doubles closes with the older age groups." },
      { date: "SAT · OCT 17", title: "Men’s and women’s singles", detail: "The competition week ends with age-group singles." },
    ],
    planning: [
      {
        number: "01",
        label: "HOW TO ATTEND",
        title: "Start with the official pickleball page.",
        paragraphs: [
          "Use the official Games site for current competition days, venue assignments, brackets, and registration. The schedule is still marked preliminary, and bracket details are not published until the day before each event.",
          "Registration for 2026 is closed. The sport fee was $20 per event with the referee fee included, and the final registration deadline was September 1. The Games also offers an optional “Official Fan” registration for adults 18+, which includes a badge and Games materials. The official pickleball page does not publish a separate walk-up spectator ticket requirement.",
        ],
      },
      {
        number: "02",
        label: "PARKING & ARRIVAL",
        title: "Leave margin around your arrival plan.",
        paragraphs: [
          "No pickleball-specific spectator parking plan was published on the official pages when this guide was checked. Little Valley has free parking on site; on tournament days, follow event signs and staff direction and arrive early for popular divisions.",
          "Athletes must check in and present their Huntsman World Senior Games ID badge at the venue check-in before play, each day they play. The Games describes its free venue shuttle as an athlete service with reservations required 90 minutes in advance; spectators should not assume shuttle access unless the Games confirms it directly.",
          "SunRiver is a private community facility rather than a City park. No dogs are allowed at its courts except certified service dogs, and children under 18 must be accompanied and supervised by an adult.",
        ],
      },
      {
        number: "03",
        label: "WHAT TO WATCH",
        title: "Use the week’s format to choose your day.",
        paragraphs: [
          "Monday’s higher skill-level doubles should deliver fast hands and advanced point construction. Thursday and Friday divide mixed doubles by age group, while Saturday’s singles put movement and endurance on display.",
          "Little Valley’s championship court is the natural viewing target, but exact court assignments are not published until the day before each event. Check the official schedule and ask event staff onsite.",
        ],
      },
    ],
    officialUrl: "https://seniorgames.net/sports/pickleball",
    registrationUrl: "https://seniorgames.net/registration",
    scheduleUrl: "https://pickleballtournaments.com/tournaments/a5227449-351e-4d13-9287-4323d60b3ef3",
    sources: [
      { label: "Official Huntsman Games pickleball page", url: "https://seniorgames.net/sports/pickleball" },
      { label: "Official 2026 pickleball schedule and venue listing", url: "https://pickleballtournaments.com/tournaments/a5227449-351e-4d13-9287-4323d60b3ef3" },
      { label: "Official 2026 schedules", url: "https://seniorgames.net/schedules" },
      { label: "Official venue and shuttle guidance", url: "https://seniorgames.net/venues" },
    ],
    inlineLinks: [
      { label: "Huntsman World Senior Games", url: "https://seniorgames.net/sports/pickleball", external: true },
      { label: "official pickleball page", url: "https://seniorgames.net/sports/pickleball", external: true },
      { label: "official Games site", url: "https://seniorgames.net/sports/pickleball", external: true },
      { label: "official tournament listing", url: "https://pickleballtournaments.com/tournaments/a5227449-351e-4d13-9287-4323d60b3ef3", external: true },
      { label: "official schedule", url: "https://pickleballtournaments.com/tournaments/a5227449-351e-4d13-9287-4323d60b3ef3", external: true },
      { label: "Little Valley Pickleball Complex", url: "/venues/little-valley-pickleball-complex" },
      { label: "Little Valley", url: "/venues/little-valley-pickleball-complex" },
    ],
    verifiedOn: "October 7, 2026",
    verificationNote: "Dates, daily divisions, venue addresses, fees, and access rules checked against the official Huntsman World Senior Games pickleball page, the Games’ official 2026 pickleball schedule and venue listing, and the Games’ official venue and shuttle page.",
  },
  {
    slug: "fall-brawl-pickleball-2026",
    name: "City of St. George Fall Brawl",
    shortName: "Fall Brawl",
    dateLabel: "October 6–10, 2026",
    cardDate: "OCT 6–10 · LITTLE VALLEY",
    locationName: "Little Valley Pickleball Complex",
    locationAddress: "2149 E Horseman Park Drive, St. George, UT 84790",
    venueLink: "/venues/little-valley-pickleball-complex",
    organizer: "City of St. George",
    startDate: "2026-10-06",
    endDate: "2026-10-10",
    summary: "The Original Fall Brawl brings a nationally significant amateur field to Little Valley’s 33 courts.",
    metaDescription: "Plan for the 2026 St. George Fall Brawl pickleball tournament at Little Valley: verified dates, the day-by-day division schedule, the correct venue address, and official links.",
    schemaDescription: "The City of St. George Fall Brawl pickleball tournament at Little Valley Pickleball Complex, a major amateur event drawing more than 1,200 participants.",
    overview: [
      "The City of St. George calls it “Fall Brawl (The Original).” The 2026 tournament runs October 6–10 at Little Valley Pickleball Complex, placing five days of amateur competition on the city’s largest public court complex.",
      "The City’s tournament calendar confirms the dates and links to the live registration listing, which now publishes a day-by-day division schedule. Registration is closed with 1,233 players entered, and results are submitted to DUPR. The tournament is not USA Pickleball sanctioned.",
    ],
    whyItMatters: [
      "Fall Brawl shows what Little Valley was built to handle: deep brackets, many simultaneous matches, and a championship court that gives a large amateur tournament a clear center of gravity.",
      "The tournament overlaps the opening week of the Huntsman World Senior Games, turning St. George into an unusually concentrated pickleball destination in early October.",
    ],
    statusNote: "The City of St. George confirms October 6–10, and the live registration listing now publishes a day-by-day division schedule. Registration is closed with 1,233 players entered, and the refund window has passed. Daily start times and court assignments are released through the registration platform rather than published in advance. A separate spectator admission policy or parking plan has not been published.",
    schedule: [
      { date: "TUE · OCT 6", title: "Senior women’s doubles", detail: "Age groups 50+, 60+, 70+, and 80+." },
      { date: "WED · OCT 7", title: "Senior men’s doubles", detail: "Age groups 50+, 60+, 70+, and 80+." },
      { date: "THU · OCT 8", title: "Senior mixed doubles", detail: "Age groups 50+, 60+, 70+, and 80+." },
      { date: "FRI · OCT 9", title: "Men’s and women’s doubles", detail: "Open and 35+ divisions." },
      { date: "SAT · OCT 10", title: "Mixed doubles", detail: "Open and 35+ divisions." },
      { date: "CHECK OFFICIAL", title: "Start times and court assignments", detail: "Daily start times and court assignments are released through the registration platform rather than published in advance.", needsOfficialCheck: true },
    ],
    planning: [
      {
        number: "01",
        label: "REGISTRATION",
        title: "Registration is closed for 2026.",
        paragraphs: [
          "The City tournament page sends players to the live registration listing, which is the authority for divisions, fees, partners, and match notices. Registration for the 2026 event is closed and the refund window has passed.",
          "Entry was priced per person: $55 early-bird before July 1 or $70 after, plus $30 per event and a small platform fee. Treat those 2026 numbers as a planning guide for future years rather than a current price.",
        ],
      },
      {
        number: "02",
        label: "VENUE",
        title: "Little Valley is the event’s home court.",
        paragraphs: [
          "The tournament is held at Little Valley Pickleball Complex, 2149 Horseman Park Drive — the address used by the official registration listing, and the one to enter into a navigation app. The 2330 Horseman Park Drive address that still appears in older City press material and several directories is Little Valley Elementary School next door. See this site’s venue guide for the current address, court count, access notes, and map.",
          "Tournament operations supersede ordinary public-court access for the week. Follow posted event signs and staff direction during Fall Brawl.",
        ],
      },
      {
        number: "03",
        label: "SPECTATORS & PARKING",
        title: "Treat logistics as event-day information.",
        paragraphs: [
          "The public City page does not currently provide a separate spectator admission policy or a Fall Brawl parking plan. Parking at the complex is free, and the courts sit on the west side of The Fields at Little Valley. Check the live tournament listing before leaving, and arrive early if you are targeting a specific division.",
          "The championship court is the best place to begin looking for featured matches, but exact court assignments should be confirmed onsite rather than assumed.",
        ],
      },
    ],
    officialUrl: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php",
    registrationUrl: "https://pickleballtournaments.com/tournaments/fall-brawl-2026",
    scheduleUrl: "https://pickleballtournaments.com/tournaments/fall-brawl-2026",
    sources: [
      { label: "City of St. George tournament calendar", url: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php" },
      { label: "Official Fall Brawl 2026 registration listing", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026" },
      { label: "City of St. George pickleball courts and addresses", url: "https://sgcityutah.gov/activity/recreation/sports___programs/pickleball/index.php" },
      { label: "Little Valley venue guide", url: "/venues/little-valley-pickleball-complex" },
    ],
    inlineLinks: [
      { label: "City of St. George", url: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php", external: true },
      { label: "City tournament page", url: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php", external: true },
      { label: "live registration listing", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026", external: true },
      { label: "live tournament listing", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026", external: true },
      { label: "registration platform", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026", external: true },
      { label: "Little Valley Pickleball Complex", url: "/venues/little-valley-pickleball-complex" },
      { label: "Little Valley", url: "/venues/little-valley-pickleball-complex" },
    ],
    verifiedOn: "October 7, 2026",
    verificationNote: "Dates, daily divisions, venue address, and registration status checked against the City of St. George’s official tournament calendar and pickleball page, and the official Fall Brawl 2026 registration listing.",
  },
];

export const eventBySlug = Object.fromEntries(events.map((event) => [event.slug, event]));