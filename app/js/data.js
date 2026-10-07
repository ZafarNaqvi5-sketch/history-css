// Complete Country Wiki style data for History CSS App

const APP_DATA = {
  countries: [
    { 
      id: "pakistan", 
      name: "Pakistan", 
      flag: "🇵🇰", 
      capital: "Islamabad",
      region: "South Asia",
      currency: "Pakistani Rupee",
      languages: ["Urdu", "English"],
      eventsCount: 25,
      priority: 1 
    },
    { 
      id: "india", 
      name: "India", 
      flag: "🇮🇳", 
      capital: "New Delhi",
      region: "South Asia",
      currency: "Indian Rupee",
      languages: ["Hindi", "English"],
      eventsCount: 16,
      priority: 2 
    },
    { 
      id: "afghanistan", 
      name: "Afghanistan", 
      flag: "🇦🇫", 
      capital: "Kabul",
      region: "South Asia / Central Asia",
      currency: "Afghani",
      languages: ["Pashto", "Dari"],
      eventsCount: 12,
      priority: 3 
    },
    { 
      id: "china", 
      name: "China", 
      flag: "🇨🇳", 
      capital: "Beijing",
      region: "East Asia",
      currency: "Renminbi (Yuan)",
      languages: ["Mandarin"],
      eventsCount: 10,
      priority: 4 
    },
    { 
      id: "iran", 
      name: "Iran", 
      flag: "🇮🇷", 
      capital: "Tehran",
      region: "West Asia",
      currency: "Iranian Rial",
      languages: ["Persian"],
      eventsCount: 8,
      priority: 5 
    }
  ],

  // ========== PAKISTAN COMPLETE DATA ==========
  pakistan: {
    keyFacts: [
      "Nuclear-armed state — tested 1998 (Chagai tests)",
      "Member of OIC, SAARC, SCO, Commonwealth",
      "Shares borders with India, Afghanistan, Iran, China",
      "Gwadar port — linchpin of China-Pakistan Economic Corridor (CPEC)",
      "Second-largest Muslim-majority country by population"
    ],

    landmarkEvents: [
      { year: "1947", title: "Creation of Pakistan", desc: "British India was partitioned into two independent dominions, Pakistan and India, under the Indian Independence Act 1947. Quaid-e-Azam Muhammad Ali Jinnah became Pakistan's first Governor-General." },
      { year: "1947", title: "Independence of India", desc: "India became independent from British rule with Jawaharlal Nehru as its first Prime Minister, one day after Pakistan's creation. Partition-related violence and mass migration marked the subcontinent's first months of freedom." },
      { year: "1948", title: "Death of Quaid-e-Azam", desc: "Muhammad Ali Jinnah, founder of Pakistan and its first Governor-General, died in Karachi just over a year after independence." },
      { year: "1948", title: "First Indo-Pak War over Kashmir", desc: "Fighting over the princely state of Jammu & Kashmir began in October 1947 and continued through 1948. UN Security Council Resolution 47 (1948) called for a plebiscite." },
      { year: "1949", title: "Objectives Resolution", desc: "Passed on 12 March 1949. Became the ideological foundation for future constitutions of Pakistan." },
      { year: "1956", title: "First Constitution", desc: "Pakistan's first constitution enforced on 23 March 1956. Country declared an Islamic Republic." },
      { year: "1958", title: "First Martial Law", desc: "General Ayub Khan imposed Martial Law on 7 October 1958. Beginning of the first military rule." },
      { year: "1960", title: "Indus Waters Treaty", desc: "Signed on 19 September 1960 with India, brokered by the World Bank. Western rivers to Pakistan, Eastern rivers to India." },
      { year: "1965", title: "Second Indo-Pak War", desc: "War over Kashmir. Ended with Tashkent Declaration (10 January 1966) mediated by the Soviet Union." },
      { year: "1971", title: "Fall of Dhaka / Bangladesh", desc: "East Pakistan separated after the December 1971 war. Bangladesh became independent on 16 December 1971." },
      { year: "1972", title: "Simla Agreement", desc: "Signed on 2 July 1972 between Zulfikar Ali Bhutto and Indira Gandhi. Ceasefire Line became Line of Control." },
      { year: "1973", title: "1973 Constitution", desc: "Current constitution adopted on 10 April 1973 and enforced on 14 August 1973. Parliamentary system restored." },
      { year: "1977", title: "Zia Martial Law", desc: "General Zia-ul-Haq imposed Martial Law on 5 July 1977. Beginning of Islamization era." },
      { year: "1998", title: "Nuclear Tests (Chagai)", desc: "Pakistan conducted nuclear tests on 28 May 1998 in response to India's Pokhran-II tests." },
      { year: "1999", title: "Lahore Declaration & Kargil", desc: "Lahore Declaration signed 21 February 1999. Kargil conflict followed in May–July 1999." },
      { year: "1999", title: "Musharraf Coup", desc: "General Pervez Musharraf took power on 12 October 1999." },
      { year: "2010", title: "18th Amendment", desc: "Major constitutional reform restoring parliamentary supremacy and devolving powers to provinces." },
      { year: "2018", title: "25th Amendment (FATA Merger)", desc: "Federally Administered Tribal Areas merged into Khyber Pakhtunkhwa." }
    ],

    presidents: [
      { name: "Asif Ali Zardari", role: "President", period: "Mar 2024 – Present", current: true },
      { name: "Arif Alvi", role: "President", period: "Sep 2018 – Mar 2024" },
      { name: "Mamnoon Hussain", role: "President", period: "Sep 2013 – Sep 2018" },
      { name: "Asif Ali Zardari", role: "President", period: "Sep 2008 – Sep 2013" },
      { name: "Pervez Musharraf", role: "President", period: "Jun 2001 – Aug 2008" },
      { name: "Muhammad Rafiq Tarar", role: "President", period: "Jan 1998 – Jun 2001" },
      { name: "Farooq Leghari", role: "President", period: "Nov 1993 – Dec 1997" },
      { name: "Ghulam Ishaq Khan", role: "President", period: "Aug 1988 – Jul 1993" },
      { name: "Zia-ul-Haq", role: "President", period: "Sep 1978 – Aug 1988" },
      { name: "Fazal Elahi Chaudhry", role: "President", period: "Aug 1973 – Sep 1978" },
      { name: "Zulfikar Ali Bhutto", role: "President", period: "Dec 1971 – Aug 1973" },
      { name: "Yahya Khan", role: "President", period: "Mar 1969 – Dec 1971" },
      { name: "Ayub Khan", role: "President", period: "Oct 1958 – Mar 1969" },
      { name: "Iskander Mirza", role: "President", period: "Mar 1956 – Oct 1958" }
    ],

    primeMinisters: [
      { name: "Shehbaz Sharif", role: "Prime Minister", period: "Mar 2024 – Present", current: true },
      { name: "Anwaar-ul-Haq Kakar", role: "Prime Minister (Caretaker)", period: "Aug 2023 – Mar 2024" },
      { name: "Shehbaz Sharif", role: "Prime Minister", period: "Apr 2022 – Aug 2023" },
      { name: "Imran Khan", role: "Prime Minister", period: "Aug 2018 – Apr 2022" },
      { name: "Shahid Khaqan Abbasi", role: "Prime Minister", period: "Aug 2017 – May 2018" },
      { name: "Nawaz Sharif", role: "Prime Minister", period: "Jun 2013 – Jul 2017" },
      { name: "Raja Pervaiz Ashraf", role: "Prime Minister", period: "Jun 2012 – Mar 2013" },
      { name: "Yousaf Raza Gillani", role: "Prime Minister", period: "Mar 2008 – Jun 2012" },
      { name: "Shaukat Aziz", role: "Prime Minister", period: "Aug 2004 – Nov 2007" },
      { name: "Zafarullah Khan Jamali", role: "Prime Minister", period: "Nov 2002 – Jun 2004" },
      { name: "Nawaz Sharif", role: "Prime Minister", period: "Feb 1997 – Oct 1999" },
      { name: "Benazir Bhutto", role: "Prime Minister", period: "Oct 1993 – Nov 1996" },
      { name: "Nawaz Sharif", role: "Prime Minister", period: "Nov 1990 – Jul 1993" },
      { name: "Benazir Bhutto", role: "Prime Minister", period: "Dec 1988 – Aug 1990" },
      { name: "Muhammad Khan Junejo", role: "Prime Minister", period: "Mar 1985 – May 1988" },
      { name: "Zulfikar Ali Bhutto", role: "Prime Minister", period: "Aug 1973 – Jul 1977" },
      { name: "Liaquat Ali Khan", role: "Prime Minister", period: "Aug 1947 – Oct 1951" }
    ],

    wars: [
      { name: "First Kashmir War", year: "1947–48", result: "Ceasefire Line established; Kashmir divided" },
      { name: "Indo-Pak War 1965", year: "1965", result: "Stalemate; Tashkent Declaration" },
      { name: "1971 War (Bangladesh)", year: "1971", result: "East Pakistan became Bangladesh" },
      { name: "Kargil Conflict", year: "1999", result: "Pakistan withdrew; diplomatic setback" },
      { name: "Siachen Conflict", year: "1984–", result: "India controls key heights" }
    ],

    treaties: [
      { name: "Indus Waters Treaty", year: "1960", note: "World Bank brokered; still largely in force" },
      { name: "Tashkent Declaration", year: "1966", note: "Post-1965 war" },
      { name: "Simla Agreement", year: "1972", note: "Post-1971; LoC established" },
      { name: "Lahore Declaration", year: "1999", note: "Nuclear CBMs; later undermined by Kargil" }
    ],

    wikiSections: [
      { id: "basic", title: "Pakistan basic facts" },
      { id: "independence", title: "Pakistan independence and national days" },
      { id: "government", title: "Pakistan government and politics" },
      { id: "leaders", title: "Pakistan presidents and prime ministers" },
      { id: "wars", title: "Pakistan wars and conflicts" },
      { id: "geography", title: "Pakistan geography and borders" },
      { id: "economy", title: "Pakistan economy and resources" },
      { id: "ir", title: "Pakistan international relations" },
      { id: "exam", title: "Pakistan exam quick facts" }
    ],

    geography: [
      "Capital: Islamabad",
      "Largest city: Karachi",
      "Borders: India, Afghanistan, Iran, China",
      "Key features: Indus River system, Karakoram, Hindu Kush, Balochistan plateau",
      "Strategic: Gwadar Port, Karakoram Highway, Khyber Pass, Siachen, Durand Line, LoC"
    ],

    economy: [
      "Agriculture still important (cotton, wheat, rice)",
      "Textiles major export",
      "Repeated IMF programmes",
      "CPEC: major infrastructure & energy push since 2015",
      "Remittances from Gulf are significant support"
    ],

    international: [
      "All-weather strategic partnership with China (CPEC)",
      "Complex relations with India (Kashmir, wars, water)",
      "Afghanistan: Durand Line, refugees, TTP issues",
      "Historically close to USA (especially Cold War & post-9/11)",
      "Strong ties with Saudi Arabia, UAE, Turkey"
    ]
  },

  // Keep revision & flashcards for quick study
  revision: {
    pakistan: [
      { label: "Independence", value: "14 August 1947" },
      { label: "First Governor-General", value: "Muhammad Ali Jinnah" },
      { label: "First Prime Minister", value: "Liaquat Ali Khan" },
      { label: "Objectives Resolution", value: "12 March 1949" },
      { label: "First Constitution", value: "23 March 1956" },
      { label: "First Martial Law", value: "7 October 1958" },
      { label: "1973 Constitution adopted", value: "10 April 1973" },
      { label: "Fall of Dhaka", value: "16 December 1971" },
      { label: "Simla Agreement", value: "2 July 1972" },
      { label: "Zia Martial Law", value: "5 July 1977" },
      { label: "Nuclear Tests (Chagai)", value: "28 May 1998" },
      { label: "Lahore Declaration", value: "21 February 1999" },
      { label: "Musharraf Coup", value: "12 October 1999" },
      { label: "18th Amendment", value: "2010" },
      { label: "25th Amendment (FATA)", value: "2018" },
      { label: "Indus Waters Treaty", value: "19 September 1960" },
      { label: "Tashkent Declaration", value: "10 January 1966" }
    ],
    india: [
      { label: "Independence", value: "15 August 1947" },
      { label: "First Prime Minister", value: "Jawaharlal Nehru" },
      { label: "Republic Day / Constitution", value: "26 January 1950" },
      { label: "Indus Waters Treaty", value: "19 September 1960" },
      { label: "Tashkent Declaration", value: "10 January 1966" },
      { label: "1971 War / Bangladesh", value: "December 1971" },
      { label: "Simla Agreement", value: "2 July 1972" },
      { label: "Pokhran-II Nuclear tests", value: "May 1998" },
      { label: "Lahore Declaration", value: "21 February 1999" },
      { label: "Kargil Conflict", value: "May–July 1999" },
      { label: "Article 370 abrogated", value: "5 August 2019" }
    ],
    afghanistan: [
      { label: "Durand Line", value: "1893" },
      { label: "Soviet Invasion", value: "December 1979" },
      { label: "Soviet Withdrawal", value: "1989" },
      { label: "Taliban first take Kabul", value: "1996" },
      { label: "US intervention starts", value: "7 October 2001" },
      { label: "Taliban return to power", value: "15 August 2021" }
    ],
    china: [
      { label: "PRC founded", value: "1 October 1949" },
      { label: "Sino-Indian War", value: "1962" },
      { label: "China–Pakistan Boundary Agreement", value: "2 March 1963" },
      { label: "Karakoram Highway opens", value: "1978" },
      { label: "BRI announced", value: "2013" },
      { label: "CPEC major push", value: "2015 onward" }
    ],
    iran: [
      { label: "Islamic Revolution", value: "1979" },
      { label: "Iran–Iraq War", value: "1980–1988" },
      { label: "First to recognize Pakistan", value: "1947" },
      { label: "JCPOA (Nuclear Deal)", value: "2015" }
    ]
  },

  flashcards: [
    { q: "When did Pakistan become independent?", a: "14 August 1947", country: "pakistan" },
    { q: "Date of Objectives Resolution?", a: "12 March 1949", country: "pakistan" },
    { q: "First Constitution of Pakistan enforced on?", a: "23 March 1956", country: "pakistan" },
    { q: "First Martial Law date?", a: "7 October 1958", country: "pakistan" },
    { q: "1973 Constitution adopted on?", a: "10 April 1973", country: "pakistan" },
    { q: "Fall of Dhaka / Bangladesh independence?", a: "16 December 1971", country: "pakistan" },
    { q: "Simla Agreement date?", a: "2 July 1972", country: "pakistan" },
    { q: "Zia-ul-Haq imposed Martial Law on?", a: "5 July 1977", country: "pakistan" },
    { q: "Pakistan nuclear tests (Chagai-I)?", a: "28 May 1998", country: "pakistan" },
    { q: "Musharraf coup date?", a: "12 October 1999", country: "pakistan" },
    { q: "Indus Waters Treaty signed?", a: "19 September 1960", country: "pakistan" },
    { q: "Tashkent Declaration date?", a: "10 January 1966", country: "pakistan" },
    { q: "First Governor-General of Pakistan?", a: "Muhammad Ali Jinnah", country: "pakistan" },
    { q: "First Prime Minister of Pakistan?", a: "Liaquat Ali Khan", country: "pakistan" },
    { q: "Who was President during 1971 war?", a: "Yahya Khan", country: "pakistan" },
    { q: "Indian Independence date?", a: "15 August 1947", country: "india" },
    { q: "First Prime Minister of India?", a: "Jawaharlal Nehru", country: "india" },
    { q: "India became Republic on?", a: "26 January 1950", country: "india" },
    { q: "Durand Line year?", a: "1893", country: "afghanistan" },
    { q: "Soviet invasion of Afghanistan?", a: "December 1979", country: "afghanistan" },
    { q: "Taliban returned to power in Afghanistan?", a: "15 August 2021", country: "afghanistan" },
    { q: "China–Pakistan Boundary Agreement?", a: "2 March 1963", country: "china" },
    { q: "PRC founded on?", a: "1 October 1949", country: "china" },
    { q: "Islamic Revolution in Iran?", a: "1979", country: "iran" }
  ]
};
