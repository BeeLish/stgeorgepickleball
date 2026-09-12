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
};

export const events: PickleballEvent[] = [
  {
    slug: "huntsman-world-senior-games-pickleball-2026",
    name: "Huntsman World Senior Games — Pickleball",
    shortName: "Huntsman Games Pickleball",
    dateLabel: "Games: October 5–17, 2026 · Pickleball: October 12–17 (preliminary)",
    cardDate: "OCT 5–17 · PICKLEBALL OCT 12–17",
    locationName: "Little Valley Pickleball Complex",
    locationAddress: "2330 Horseman Park Drive, St. George, UT 84790",
    venueLink: "/venues/little-valley-pickleball-complex",
    secondaryVenue: "SunRiver Pickleball Complex, 4275 S Country Club Drive",
    organizer: "Huntsman World Senior Games",
    startDate: "2026-10-12",
    endDate: "2026-10-17",
    summary: "A marquee week inside St. George’s 43-sport international celebration of athletes age 50 and over.",
    metaDescription: "Plan for 2026 Huntsman World Senior Games pickleball in St. George: preliminary dates, venues, spectator guidance, parking notes, and official schedule links.",
    schemaDescription: "The 2026 pickleball competition at the Huntsman World Senior Games, an international 43-sport event for athletes age 50 and over in St. George, Utah.",
    overview: [
      "The Huntsman World Senior Games brings athletes age 50 and over to greater St. George for two weeks of competition across 43 sports. Pickleball is one of its signature draws, filling a full competition week with age singles, age doubles, mixed doubles, and skill-level doubles.",
      "The official pickleball page lists Little Valley Pickleball Complex and SunRiver Pickleball Complex as the 2026 venues. Little Valley is the public centerpiece: 33 outdoor courts and a championship court with permanent bleacher seating.",
    ],
    whyItMatters: [
      "This is not simply a local tournament. The Games draw an international field, and the 2026 pickleball competition is also listed as a qualifier for the 2027 National Senior Games. The official page says the top three finishers in each age event qualify.",
      "For spectators, the appeal is range: high-skill doubles, age-group strategy, mixed doubles, and singles all appear during the week. Exact brackets and court assignments are managed by the Games and can change, so use the official schedule for the final plan.",
    ],
    statusNote: "The Games run October 5–17. The official pickleball page currently labels its October 12–17 competition schedule preliminary and subject to change. It also gives conflicting dates for open practice, listing both October 11 and October 12 in different sections. Check the official schedule before traveling.",
    schedule: [
      { date: "OCT 5–17", title: "Huntsman World Senior Games", detail: "The full 2026 multi-sport event window in St. George." },
      { date: "CHECK OFFICIAL", title: "Open practice", detail: "The official pickleball page currently lists both October 11 and October 12. Do not rely on either date without rechecking.", needsOfficialCheck: true },
      { date: "MON · OCT 12", title: "Skill-level doubles", detail: "Men 4.0–5.0 and women 3.5–5.0 are listed. Competition is scheduled to begin at 8:00 a.m.; athlete check-in at 7:00 a.m." },
      { date: "TUE · OCT 13", title: "Men’s age doubles · women’s 3.0 skill doubles", detail: "Preliminary daily assignment from the official pickleball page." },
      { date: "WED · OCT 14", title: "Women’s age doubles · men’s 3.0/3.5 skill doubles", detail: "Preliminary daily assignment from the official pickleball page." },
      { date: "THU–FRI · OCT 15–16", title: "Mixed doubles", detail: "Ages 50–60 are listed Thursday; ages 65–80+ are listed Friday." },
      { date: "SAT · OCT 17", title: "Men’s and women’s singles", detail: "The preliminary schedule closes with age-group singles." },
    ],
    planning: [
      {
        number: "01",
        label: "HOW TO ATTEND",
        title: "Start with the official pickleball page.",
        paragraphs: [
          "Use the official Games site for current competition days, venue assignments, brackets, and registration. The schedule is still marked preliminary.",
          "The Games also offers an optional “Official Fan” registration for adults 18+, which includes a badge and Games materials. The fan page lists a $1 sport fee, but check the full registration price and current availability before signing up. The pickleball page does not publish a separate walk-up spectator ticket requirement.",
        ],
      },
      {
        number: "02",
        label: "PARKING & ARRIVAL",
        title: "Leave margin around your arrival plan.",
        paragraphs: [
          "No pickleball-specific spectator parking plan was published on the official pages when this guide was checked. Use the venue address in the official schedule, follow event signs and staff direction, and arrive early for popular divisions.",
          "The Games describes its free venue shuttle as an athlete service. Spectators should not assume shuttle access unless the Games confirms it directly.",
        ],
      },
      {
        number: "03",
        label: "WHAT TO WATCH",
        title: "Use the week’s format to choose your day.",
        paragraphs: [
          "Monday’s higher skill-level doubles should deliver fast hands and advanced point construction. Thursday and Friday divide mixed doubles by age group, while Saturday’s singles put movement and endurance on display.",
          "Little Valley’s championship court is the natural viewing target, but exact court assignments are not yet published as settled fact. Check the official schedule and ask event staff onsite.",
        ],
      },
    ],
    officialUrl: "https://seniorgames.net/sports/pickleball",
    registrationUrl: "https://seniorgames.net/registration",
    scheduleUrl: "https://seniorgames.net/schedules",
    sources: [
      { label: "Official Huntsman Games pickleball page", url: "https://seniorgames.net/sports/pickleball" },
      { label: "Official 2026 schedules", url: "https://seniorgames.net/schedules" },
      { label: "Official venue and shuttle guidance", url: "https://seniorgames.net/venues" },
    ],
    inlineLinks: [
      { label: "Huntsman World Senior Games", url: "https://seniorgames.net/sports/pickleball", external: true },
      { label: "official pickleball page", url: "https://seniorgames.net/sports/pickleball", external: true },
      { label: "official Games site", url: "https://seniorgames.net/sports/pickleball", external: true },
      { label: "Little Valley Pickleball Complex", url: "/venues/little-valley-pickleball-complex" },
      { label: "Little Valley", url: "/venues/little-valley-pickleball-complex" },
    ],
  },
  {
    slug: "fall-brawl-pickleball-2026",
    name: "City of St. George Fall Brawl",
    shortName: "Fall Brawl",
    dateLabel: "October 6–10, 2026",
    cardDate: "OCT 6–10 · LITTLE VALLEY",
    locationName: "Little Valley Pickleball Complex",
    locationAddress: "2330 Horseman Park Drive, St. George, UT 84790",
    venueLink: "/venues/little-valley-pickleball-complex",
    organizer: "City of St. George",
    startDate: "2026-10-06",
    endDate: "2026-10-10",
    summary: "The Original Fall Brawl brings a nationally significant amateur field to Little Valley’s 33 courts.",
    metaDescription: "Plan for the 2026 St. George Fall Brawl pickleball tournament at Little Valley, with confirmed dates, registration links, venue guidance, and schedule notes.",
    schemaDescription: "The City of St. George Fall Brawl pickleball tournament at Little Valley Pickleball Complex, a major amateur event drawing more than 1,000 participants.",
    overview: [
      "The City of St. George calls it “Fall Brawl (The Original).” The 2026 tournament is scheduled for October 6–10 at Little Valley Pickleball Complex, placing five days of amateur competition on the city’s largest public court complex.",
      "City-reported figures cited in the local venue research describe Fall Brawl as drawing more than 1,000 participants and ranking among the five largest amateur pickleball tournaments in the country. That scale makes it one of the defining weeks on St. George’s annual pickleball calendar.",
    ],
    whyItMatters: [
      "Fall Brawl shows what Little Valley was built to handle: deep brackets, many simultaneous matches, and a championship court that gives a large amateur tournament a clear center of gravity.",
      "The tournament overlaps the opening week of the Huntsman World Senior Games, turning St. George into an unusually concentrated pickleball destination in early October.",
    ],
    statusNote: "The City of St. George confirms October 6–10 and links to the live registration platform. A dependable day-by-day division schedule and spectator parking plan were not published on the City page when this guide was checked. Use the registration page for current availability, fees, and match details.",
    schedule: [
      { date: "TUE–SAT · OCT 6–10", title: "Fall Brawl 2026", detail: "Five tournament days confirmed by the City of St. George." },
      { date: "CHECK OFFICIAL", title: "Daily divisions and start times", detail: "The City page does not publish a complete day-by-day division schedule. Confirm on the live tournament registration page.", needsOfficialCheck: true },
      { date: "SEP 26", title: "Registration listing deadline", detail: "The public tournament listing currently shows September 26 at 11:55 p.m. Mountain Time, subject to division capacity and live availability. Recheck before registering.", needsOfficialCheck: true },
    ],
    planning: [
      {
        number: "01",
        label: "REGISTRATION",
        title: "Use the City’s live tournament link.",
        paragraphs: [
          "The City tournament page sends players to PickleballTournaments.com for registration. That live listing is the authority for open divisions, waitlists, fees, partners, and match notices.",
          "Do not rely on an older screenshot or copied fee table. Tournament availability can change as divisions fill; review the total shown by the registration platform before completing registration.",
        ],
      },
      {
        number: "02",
        label: "VENUE",
        title: "Little Valley is the event’s home court.",
        paragraphs: [
          "The tournament is held at Little Valley Pickleball Complex. Use this site’s venue guide for the current address, court count, access notes, and map rather than duplicating those details here.",
          "Tournament operations can temporarily supersede ordinary public-court access. Follow posted event signs and staff direction during Fall Brawl week.",
        ],
      },
      {
        number: "03",
        label: "SPECTATORS & PARKING",
        title: "Treat logistics as event-day information.",
        paragraphs: [
          "The public City page does not currently provide a separate spectator admission policy or a Fall Brawl parking plan. Check the live tournament listing before leaving and arrive early if you are targeting a specific division.",
          "The championship court is the best place to begin looking for featured matches, but exact court assignments should be confirmed onsite rather than assumed.",
        ],
      },
    ],
    officialUrl: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php",
    registrationUrl: "https://pickleballtournaments.com/tournaments/fall-brawl-2026",
    scheduleUrl: "https://pickleballtournaments.com/tournaments/fall-brawl-2026",
    sources: [
      { label: "City of St. George tournament calendar", url: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php" },
      { label: "Little Valley venue guide", url: "/venues/little-valley-pickleball-complex" },
    ],
    inlineLinks: [
      { label: "City of St. George", url: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php", external: true },
      { label: "City tournament page", url: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php", external: true },
      { label: "City page", url: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php", external: true },
      { label: "PickleballTournaments.com", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026", external: true },
      { label: "live tournament registration page", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026", external: true },
      { label: "live registration platform", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026", external: true },
      { label: "registration platform", url: "https://pickleballtournaments.com/tournaments/fall-brawl-2026", external: true },
      { label: "Little Valley Pickleball Complex", url: "/venues/little-valley-pickleball-complex" },
      { label: "Little Valley", url: "/venues/little-valley-pickleball-complex" },
    ],
  },
];

export const eventBySlug = Object.fromEntries(events.map((event) => [event.slug, event]));
