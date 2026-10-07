// High-yield data for the app (seeded from our knowledge base)

const APP_DATA = {
  countries: [
    { id: "pakistan", name: "Pakistan", flag: "🇵🇰", priority: 1 },
    { id: "india", name: "India", flag: "🇮🇳", priority: 2 },
    { id: "afghanistan", name: "Afghanistan", flag: "🇦🇫", priority: 3 },
    { id: "china", name: "China", flag: "🇨🇳", priority: 4 },
    { id: "iran", name: "Iran", flag: "🇮🇷", priority: 5 }
  ],

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
  ],

  countryContent: {
    pakistan: {
      title: "Pakistan",
      sections: [
        { title: "Key Periods", items: ["1947–58 Creation & Early Years", "1958–69 Ayub Era", "1969–71 Yahya & 1971", "1971–77 Bhutto", "1977–88 Zia", "1988–99 Democratic Decade", "1999–2008 Musharraf", "2008–present"] },
        { title: "Must Know", items: ["Objectives Resolution 1949", "1956, 1962, 1973 Constitutions", "Wars: 1947-48, 1965, 1971, Kargil", "Treaties: Indus, Tashkent, Simla, Lahore", "18th & 25th Amendments"] }
      ]
    },
    india: {
      title: "India",
      sections: [
        { title: "Key Focus for CSS", items: ["Shared history till 1947", "Partition & Kashmir", "Wars with Pakistan", "Bilateral agreements", "Article 370 (2019)"] },
        { title: "Important Leaders", items: ["Nehru (1947–64)", "Indira Gandhi", "Vajpayee (nuclear + Lahore)", "Modi era"] }
      ]
    },
    afghanistan: {
      title: "Afghanistan",
      sections: [
        { title: "Core Issues with Pakistan", items: ["Durand Line (1893)", "Refugees", "TTP & cross-border militancy", "Strategic depth debate", "Post-2021 relations"] }
      ]
    },
    china: {
      title: "China",
      sections: [
        { title: "Why Critical for Pakistan", items: ["All-Weather Strategic Partner", "1963 Boundary Agreement", "CPEC / BRI", "Defence cooperation", "Diplomatic support on Kashmir"] }
      ]
    },
    iran: {
      title: "Iran",
      sections: [
        { title: "Key Points", items: ["First country to recognize Pakistan", "Generally stable but cautious ties", "Border security (Baloch groups)", "Energy potential", "Afghanistan factor"] }
      ]
    }
  }
};
