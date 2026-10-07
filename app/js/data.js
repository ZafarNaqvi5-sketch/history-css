// Complete Country Wiki style data for History CSS App

const APP_DATA = {
  countries: [
    { id: "pakistan", name: "Pakistan", flag: "🇵🇰", capital: "Islamabad", region: "South Asia", currency: "Pakistani Rupee", languages: ["Urdu", "English"], eventsCount: 25, priority: 1 },
    { id: "india", name: "India", flag: "🇮🇳", capital: "New Delhi", region: "South Asia", currency: "Indian Rupee", languages: ["Hindi", "English"], eventsCount: 18, priority: 2 },
    { id: "afghanistan", name: "Afghanistan", flag: "🇦🇫", capital: "Kabul", region: "South / Central Asia", currency: "Afghani", languages: ["Pashto", "Dari"], eventsCount: 14, priority: 3 },
    { id: "china", name: "China", flag: "🇨🇳", capital: "Beijing", region: "East Asia", currency: "Renminbi (Yuan)", languages: ["Mandarin"], eventsCount: 12, priority: 4 },
    { id: "iran", name: "Iran", flag: "🇮🇷", capital: "Tehran", region: "West Asia", currency: "Iranian Rial", languages: ["Persian"], eventsCount: 10, priority: 5 }
  ],

  // ===================== PAKISTAN =====================
  pakistan: {
    keyFacts: [
      "Nuclear-armed state — tested 1998 (Chagai tests)",
      "Member of OIC, SAARC, SCO, Commonwealth",
      "Shares borders with India, Afghanistan, Iran, China",
      "Gwadar port — linchpin of China-Pakistan Economic Corridor (CPEC)",
      "Second-largest Muslim-majority country by population"
    ],
    landmarkEvents: [
      { year: "1947", title: "Creation of Pakistan", desc: "British India partitioned under Indian Independence Act 1947. Quaid-e-Azam Muhammad Ali Jinnah became first Governor-General." },
      { year: "1947", title: "Independence of India", desc: "India independent one day after Pakistan. Partition violence and mass migration followed." },
      { year: "1948", title: "Death of Quaid-e-Azam", desc: "Muhammad Ali Jinnah died in Karachi on 11 September 1948." },
      { year: "1948", title: "First Indo-Pak War over Kashmir", desc: "War over Jammu & Kashmir. UN ceasefire; Ceasefire Line established." },
      { year: "1949", title: "Objectives Resolution", desc: "Passed 12 March 1949. Ideological foundation for future constitutions." },
      { year: "1956", title: "First Constitution", desc: "Enforced 23 March 1956. Pakistan declared an Islamic Republic." },
      { year: "1958", title: "First Martial Law", desc: "Ayub Khan imposed Martial Law on 7 October 1958." },
      { year: "1960", title: "Indus Waters Treaty", desc: "Signed 19 September 1960 with India (World Bank brokered)." },
      { year: "1965", title: "Second Indo-Pak War", desc: "War over Kashmir. Ended with Tashkent Declaration (10 Jan 1966)." },
      { year: "1971", title: "Fall of Dhaka / Bangladesh", desc: "East Pakistan became Bangladesh on 16 December 1971." },
      { year: "1972", title: "Simla Agreement", desc: "Signed 2 July 1972. Ceasefire Line became Line of Control." },
      { year: "1973", title: "1973 Constitution", desc: "Adopted 10 April, enforced 14 August 1973. Still current." },
      { year: "1977", title: "Zia Martial Law", desc: "Zia-ul-Haq took power on 5 July 1977. Islamization began." },
      { year: "1998", title: "Nuclear Tests (Chagai)", desc: "Pakistan tested nuclear devices on 28 May 1998." },
      { year: "1999", title: "Lahore Declaration & Kargil", desc: "Lahore Declaration (21 Feb). Kargil conflict May–July 1999." },
      { year: "1999", title: "Musharraf Coup", desc: "Pervez Musharraf took power on 12 October 1999." },
      { year: "2010", title: "18th Amendment", desc: "Major devolution of powers to provinces; parliamentary restoration." },
      { year: "2018", title: "25th Amendment (FATA Merger)", desc: "FATA merged into Khyber Pakhtunkhwa." }
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
      { name: "Zulfikar Ali Bhutto", role: "Prime Minister", period: "Aug 1973 – Jul 1977" },
      { name: "Liaquat Ali Khan", role: "Prime Minister", period: "Aug 1947 – Oct 1951" }
    ],
    wars: [
      { name: "First Kashmir War", year: "1947–48", result: "Ceasefire Line; Kashmir divided" },
      { name: "Indo-Pak War 1965", year: "1965", result: "Stalemate; Tashkent Declaration" },
      { name: "1971 War (Bangladesh)", year: "1971", result: "East Pakistan became Bangladesh" },
      { name: "Kargil Conflict", year: "1999", result: "Pakistan withdrew" },
      { name: "Siachen Conflict", year: "1984–", result: "India controls key heights" }
    ],
    treaties: [
      { name: "Indus Waters Treaty", year: "1960", note: "World Bank brokered" },
      { name: "Tashkent Declaration", year: "1966", note: "Post-1965 war" },
      { name: "Simla Agreement", year: "1972", note: "LoC established" },
      { name: "Lahore Declaration", year: "1999", note: "Nuclear CBMs" }
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
    geography: ["Capital: Islamabad", "Largest city: Karachi", "Borders: India, Afghanistan, Iran, China", "Key features: Indus River, Karakoram, Hindu Kush, Balochistan", "Strategic: Gwadar, Karakoram Highway, Khyber Pass, Siachen, Durand Line, LoC"],
    economy: ["Agriculture important (cotton, wheat, rice)", "Textiles major export", "Repeated IMF programmes", "CPEC: infrastructure & energy since 2015", "Remittances from Gulf significant"],
    international: ["All-weather partnership with China (CPEC)", "Complex relations with India (Kashmir, wars, water)", "Afghanistan: Durand Line, refugees, TTP", "Historically close to USA", "Strong ties with Saudi Arabia, UAE, Turkey"]
  },

  // ===================== INDIA =====================
  india: {
    keyFacts: [
      "World's most populous country",
      "Nuclear-armed since 1974 / 1998 (Pokhran)",
      "Largest democracy; federal parliamentary republic",
      "Member of BRICS, SCO, G20, Commonwealth, Quad",
      "Major strategic competitor of Pakistan and China in the region"
    ],
    landmarkEvents: [
      { year: "1947", title: "Independence & Partition", desc: "India became independent on 15 August 1947. Jawaharlal Nehru first Prime Minister. Partition created Pakistan." },
      { year: "1947–48", title: "First Kashmir War", desc: "War with Pakistan over Jammu & Kashmir after accession by Maharaja Hari Singh." },
      { year: "1950", title: "Republic Day", desc: "Constitution enforced on 26 January 1950. India became a republic." },
      { year: "1962", title: "Sino-Indian War", desc: "Border war with China. India suffered setbacks; lasting border dispute." },
      { year: "1965", title: "Second Indo-Pak War", desc: "War over Kashmir. Ended with Tashkent Declaration (1966)." },
      { year: "1971", title: "Bangladesh Liberation War", desc: "India intervened; decisive victory; Bangladesh created. Simla Agreement 1972." },
      { year: "1974", title: "First Nuclear Test (Smiling Buddha)", desc: "India conducted its first nuclear test." },
      { year: "1975–77", title: "Emergency", desc: "Indira Gandhi declared Emergency (25 June 1975 – 21 March 1977)." },
      { year: "1991", title: "Economic Liberalisation", desc: "Major economic reforms under P.V. Narasimha Rao and Manmohan Singh." },
      { year: "1998", title: "Pokhran-II Nuclear Tests", desc: "Series of nuclear tests in May 1998. Pakistan responded with Chagai." },
      { year: "1999", title: "Lahore Declaration & Kargil", desc: "Vajpayee–Nawaz Lahore summit; followed by Kargil conflict." },
      { year: "2001", title: "Parliament Attack", desc: "Attack on Indian Parliament led to major military standoff with Pakistan." },
      { year: "2014", title: "Narendra Modi becomes PM", desc: "BJP-led government; major foreign policy and domestic shifts." },
      { year: "2019", title: "Article 370 Abrogated", desc: "Special status of Jammu & Kashmir revoked on 5 August 2019." }
    ],
    presidents: [
      { name: "Droupadi Murmu", role: "President", period: "Jul 2022 – Present", current: true },
      { name: "Ram Nath Kovind", role: "President", period: "Jul 2017 – Jul 2022" },
      { name: "Pranab Mukherjee", role: "President", period: "Jul 2012 – Jul 2017" },
      { name: "Pratibha Patil", role: "President", period: "Jul 2007 – Jul 2012" },
      { name: "A.P.J. Abdul Kalam", role: "President", period: "Jul 2002 – Jul 2007" },
      { name: "K.R. Narayanan", role: "President", period: "Jul 1997 – Jul 2002" },
      { name: "Shankar Dayal Sharma", role: "President", period: "Jul 1992 – Jul 1997" },
      { name: "R. Venkataraman", role: "President", period: "Jul 1987 – Jul 1992" },
      { name: "Zail Singh", role: "President", period: "Jul 1982 – Jul 1987" },
      { name: "Neelam Sanjiva Reddy", role: "President", period: "Jul 1977 – Jul 1982" },
      { name: "Fakhruddin Ali Ahmed", role: "President", period: "Aug 1974 – Feb 1977" },
      { name: "V.V. Giri", role: "President", period: "Aug 1969 – Aug 1974" },
      { name: "Zakir Husain", role: "President", period: "May 1967 – May 1969" },
      { name: "S. Radhakrishnan", role: "President", period: "May 1962 – May 1967" },
      { name: "Rajendra Prasad", role: "President", period: "Jan 1950 – May 1962" }
    ],
    primeMinisters: [
      { name: "Narendra Modi", role: "Prime Minister", period: "May 2014 – Present", current: true },
      { name: "Manmohan Singh", role: "Prime Minister", period: "May 2004 – May 2014" },
      { name: "Atal Bihari Vajpayee", role: "Prime Minister", period: "Mar 1998 – May 2004" },
      { name: "I.K. Gujral", role: "Prime Minister", period: "Apr 1997 – Mar 1998" },
      { name: "H.D. Deve Gowda", role: "Prime Minister", period: "Jun 1996 – Apr 1997" },
      { name: "Atal Bihari Vajpayee", role: "Prime Minister", period: "May 1996 (13 days)" },
      { name: "P.V. Narasimha Rao", role: "Prime Minister", period: "Jun 1991 – May 1996" },
      { name: "Chandra Shekhar", role: "Prime Minister", period: "Nov 1990 – Jun 1991" },
      { name: "V.P. Singh", role: "Prime Minister", period: "Dec 1989 – Nov 1990" },
      { name: "Rajiv Gandhi", role: "Prime Minister", period: "Oct 1984 – Dec 1989" },
      { name: "Indira Gandhi", role: "Prime Minister", period: "Jan 1980 – Oct 1984" },
      { name: "Charan Singh", role: "Prime Minister", period: "Jul 1979 – Jan 1980" },
      { name: "Morarji Desai", role: "Prime Minister", period: "Mar 1977 – Jul 1979" },
      { name: "Indira Gandhi", role: "Prime Minister", period: "Jan 1966 – Mar 1977" },
      { name: "Lal Bahadur Shastri", role: "Prime Minister", period: "Jun 1964 – Jan 1966" },
      { name: "Jawaharlal Nehru", role: "Prime Minister", period: "Aug 1947 – May 1964" }
    ],
    wars: [
      { name: "First Kashmir War", year: "1947–48", result: "Ceasefire; Kashmir divided" },
      { name: "Sino-Indian War", year: "1962", result: "Chinese gains; border dispute ongoing" },
      { name: "Indo-Pak War 1965", year: "1965", result: "Stalemate; Tashkent" },
      { name: "Bangladesh Liberation / 1971 War", year: "1971", result: "Decisive Indian victory; Bangladesh created" },
      { name: "Kargil Conflict", year: "1999", result: "India regained positions" }
    ],
    treaties: [
      { name: "Indus Waters Treaty", year: "1960", note: "With Pakistan; World Bank" },
      { name: "Tashkent Declaration", year: "1966", note: "With Pakistan post-1965" },
      { name: "Simla Agreement", year: "1972", note: "With Pakistan; LoC" },
      { name: "Lahore Declaration", year: "1999", note: "With Pakistan; nuclear CBMs" }
    ],
    wikiSections: [
      { id: "basic", title: "India basic facts" },
      { id: "independence", title: "India independence and republic" },
      { id: "government", title: "India government and politics" },
      { id: "leaders", title: "India presidents and prime ministers" },
      { id: "wars", title: "India wars and conflicts" },
      { id: "geography", title: "India geography and borders" },
      { id: "economy", title: "India economy and resources" },
      { id: "ir", title: "India international relations" },
      { id: "exam", title: "India exam quick facts (CSS focus)" }
    ],
    geography: ["Capital: New Delhi", "Largest city: Mumbai", "Borders: Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar", "Key features: Himalayas, Indo-Gangetic plain, Deccan Plateau", "Strategic: Indian Ocean, Andaman, border disputes with China & Pakistan"],
    economy: ["One of the fastest-growing major economies", "Services & IT major contributors", "1991 liberalisation turning point", "Large agricultural base", "Growing manufacturing & defence industry"],
    international: ["Non-Alignment origins under Nehru", "Strategic partnership with USA (post-2000s)", "Tense relations with China & Pakistan", "Member of BRICS, SCO, Quad, G20", "Major role in Indian Ocean and neighbourhood policy"]
  },

  // ===================== AFGHANISTAN =====================
  afghanistan: {
    keyFacts: [
      "Landlocked country; strategic location between South & Central Asia",
      "Durand Line (1893) with Pakistan remains disputed",
      "Long history of foreign interventions (British, Soviet, US)",
      "Taliban returned to power in August 2021",
      "Critical for Pakistan's security, refugees, and connectivity"
    ],
    landmarkEvents: [
      { year: "1893", title: "Durand Line Agreement", desc: "Border agreement between British India and Afghanistan. Still contested by Afghan side." },
      { year: "1919", title: "Afghan Independence", desc: "After Third Anglo-Afghan War; full independence from British influence." },
      { year: "1973", title: "Republic declared", desc: "Monarchy ended; Daoud Khan became president." },
      { year: "1978", title: "Saur Revolution", desc: "Communist PDPA took power in a coup." },
      { year: "1979", title: "Soviet Invasion", desc: "Soviet forces entered Afghanistan in December 1979. Beginning of long war." },
      { year: "1989", title: "Soviet Withdrawal", desc: "Soviet forces completed withdrawal after Geneva Accords (1988)." },
      { year: "1992", title: "Fall of Najibullah", desc: "Communist government collapsed; civil war among mujahideen factions." },
      { year: "1996", title: "Taliban capture Kabul", desc: "Taliban established Islamic Emirate. Recognised by Pakistan, Saudi Arabia, UAE." },
      { year: "2001", title: "US-led Intervention", desc: "After 9/11, US and allies invaded; Taliban regime fell by December 2001." },
      { year: "2001", title: "Bonn Agreement", desc: "Political framework for new Afghan government after Taliban fall." },
      { year: "2021", title: "Taliban Return to Power", desc: "US withdrawal completed; Taliban took Kabul on 15 August 2021." }
    ],
    presidents: [
      { name: "Taliban Leadership (Hibatullah Akhundzada)", role: "Supreme Leader", period: "2021 – Present", current: true },
      { name: "Ashraf Ghani", role: "President", period: "2014 – Aug 2021" },
      { name: "Hamid Karzai", role: "President", period: "2001 – 2014" },
      { name: "Burhanuddin Rabbani", role: "President", period: "1992 – 1996 / 2001" },
      { name: "Mohammad Najibullah", role: "President", period: "1987 – 1992" },
      { name: "Babrak Karmal", role: "Leader", period: "1979 – 1986" },
      { name: "Mohammad Daoud Khan", role: "President", period: "1973 – 1978" }
    ],
    primeMinisters: [
      { name: "Mohammad Hassan Akhund", role: "Acting Prime Minister", period: "2021 – Present", current: true },
      { name: "Abdullah Abdullah", role: "CEO / Chief Executive", period: "2014 – 2020" },
      { name: "Various coalition figures", role: "Post-2001 governments", period: "2001 – 2021" }
    ],
    wars: [
      { name: "Soviet–Afghan War", year: "1979–1989", result: "Soviet withdrawal; mujahideen victory" },
      { name: "Afghan Civil War", year: "1989–1996", result: "Taliban rise" },
      { name: "US-led War / Intervention", year: "2001–2021", result: "Taliban returned to power after US exit" }
    ],
    treaties: [
      { name: "Durand Line Agreement", year: "1893", note: "Still disputed by Afghanistan" },
      { name: "Geneva Accords", year: "1988", note: "Framework for Soviet withdrawal" },
      { name: "Bonn Agreement", year: "2001", note: "Post-Taliban political framework" },
      { name: "Doha Agreement", year: "2020", note: "US–Taliban agreement on withdrawal" }
    ],
    wikiSections: [
      { id: "basic", title: "Afghanistan basic facts" },
      { id: "independence", title: "Afghanistan modern history" },
      { id: "government", title: "Afghanistan government and politics" },
      { id: "leaders", title: "Afghanistan leaders" },
      { id: "wars", title: "Afghanistan wars and conflicts" },
      { id: "geography", title: "Afghanistan geography and borders" },
      { id: "economy", title: "Afghanistan economy" },
      { id: "ir", title: "Afghanistan relations with Pakistan" },
      { id: "exam", title: "Afghanistan exam quick facts" }
    ],
    geography: ["Capital: Kabul", "Landlocked", "Borders: Pakistan (Durand Line), Iran, Turkmenistan, Uzbekistan, Tajikistan, China", "Key features: Hindu Kush mountains, Helmand River", "Strategic: Gateway between South & Central Asia"],
    economy: ["Heavily aid-dependent historically", "Agriculture & opium historically significant", "Mining potential (lithium, copper, rare earths)", "Severe economic crisis after 2021", "Trade routes via Pakistan important"],
    international: ["Durand Line dispute with Pakistan", "Refugee flows into Pakistan", "TTP and cross-border militancy issues", "Competition for influence (Pakistan, India, China, Iran, Russia)", "Recognition of Taliban government remains limited"]
  },

  // ===================== CHINA =====================
  china: {
    keyFacts: [
      "World's second-largest economy; rising superpower",
      "Communist Party of China (CCP) rules since 1949",
      "All-weather strategic partner of Pakistan",
      "Belt and Road Initiative (BRI) & CPEC flagship projects",
      "Border disputes with India; close alignment with Pakistan"
    ],
    landmarkEvents: [
      { year: "1949", title: "People's Republic of China founded", desc: "1 October 1949. Mao Zedong proclaimed the PRC after civil war victory." },
      { year: "1950", title: "Pakistan recognises PRC", desc: "Pakistan among the first non-communist countries to recognise China." },
      { year: "1962", title: "Sino-Indian War", desc: "Border war; China gained advantage. Lasting LAC dispute." },
      { year: "1963", title: "China–Pakistan Boundary Agreement", desc: "Signed 2 March 1963. Border settled; Shaksgam Valley arrangement." },
      { year: "1971", title: "Pakistan facilitates US–China opening", desc: "Pakistan helped arrange Kissinger/Nixon opening to China." },
      { year: "1978", title: "Deng Xiaoping Reforms begin", desc: "Reform and opening-up policy; economic transformation starts." },
      { year: "1978", title: "Karakoram Highway opens", desc: "Land link between Pakistan and China completed." },
      { year: "2013", title: "Belt and Road Initiative announced", desc: "Xi Jinping launches BRI connectivity vision." },
      { year: "2015", title: "CPEC major push", desc: "China–Pakistan Economic Corridor becomes flagship BRI project." },
      { year: "2020", title: "Galwan Valley clash", desc: "Deadly India–China border clash in Ladakh region." }
    ],
    presidents: [
      { name: "Xi Jinping", role: "President / CCP General Secretary", period: "2013 – Present", current: true },
      { name: "Hu Jintao", role: "President", period: "2003 – 2013" },
      { name: "Jiang Zemin", role: "President", period: "1993 – 2003" },
      { name: "Deng Xiaoping", role: "Paramount Leader", period: "1978 – 1990s" },
      { name: "Mao Zedong", role: "Chairman / Paramount Leader", period: "1949 – 1976" }
    ],
    primeMinisters: [
      { name: "Li Qiang", role: "Premier", period: "2023 – Present", current: true },
      { name: "Li Keqiang", role: "Premier", period: "2013 – 2023" },
      { name: "Wen Jiabao", role: "Premier", period: "2003 – 2013" },
      { name: "Zhu Rongji", role: "Premier", period: "1998 – 2003" },
      { name: "Zhou Enlai", role: "Premier", period: "1949 – 1976" }
    ],
    wars: [
      { name: "Chinese Civil War", year: "1945–49", result: "CCP victory; PRC founded" },
      { name: "Korean War", year: "1950–53", result: "Stalemate; PRC intervention" },
      { name: "Sino-Indian War", year: "1962", result: "Chinese tactical victory" },
      { name: "Sino-Vietnamese War", year: "1979", result: "Short border war" }
    ],
    treaties: [
      { name: "China–Pakistan Boundary Agreement", year: "1963", note: "Settled border with Pakistan" },
      { name: "Various border agreements with neighbours", year: "Multiple", note: "Except ongoing LAC issues with India" }
    ],
    wikiSections: [
      { id: "basic", title: "China basic facts" },
      { id: "independence", title: "China modern history (PRC)" },
      { id: "government", title: "China government and politics" },
      { id: "leaders", title: "China leaders" },
      { id: "wars", title: "China wars and conflicts" },
      { id: "geography", title: "China geography and borders" },
      { id: "economy", title: "China economy" },
      { id: "ir", title: "China–Pakistan relations & CPEC" },
      { id: "exam", title: "China exam quick facts" }
    ],
    geography: ["Capital: Beijing", "Largest city: Shanghai", "Borders: 14 countries including India, Pakistan, Afghanistan, Russia", "Key features: Himalayas, Tibetan Plateau, Yellow & Yangtze rivers", "Strategic: South China Sea, Taiwan Strait, land routes via BRI"],
    economy: ["Second-largest economy by nominal GDP", "Manufacturing superpower", "Belt and Road investment globally", "CPEC major corridor into Indian Ocean via Gwadar", "Technology & infrastructure focus under Xi"],
    international: ["All-weather strategic partnership with Pakistan", "CPEC as flagship of BRI", "Border tensions with India (LAC)", "Major power competition with USA", "Growing role in Central Asia, Middle East, Africa"]
  },

  // ===================== IRAN =====================
  iran: {
    keyFacts: [
      "Islamic Republic since 1979 Revolution",
      "First country to recognise Pakistan in 1947",
      "Major energy producer; controls access near Strait of Hormuz",
      "Shia-majority theocratic republic with elected institutions",
      "Complex but generally stable relations with Pakistan"
    ],
    landmarkEvents: [
      { year: "1947", title: "Recognises Pakistan", desc: "Iran became the first country to recognise the newly independent Pakistan." },
      { year: "1953", title: "Coup against Mossadegh", desc: "US–UK backed coup restored the Shah; long-term anti-Western resentment." },
      { year: "1979", title: "Islamic Revolution", desc: "Shah overthrown. Ayatollah Khomeini returned; Islamic Republic established." },
      { year: "1979–81", title: "US Embassy Hostage Crisis", desc: "52 Americans held for 444 days; US–Iran relations severed." },
      { year: "1980–88", title: "Iran–Iraq War", desc: "Long and costly war with Iraq. Pakistan maintained balanced stance." },
      { year: "2015", title: "JCPOA (Nuclear Deal)", desc: "Iran and P5+1 signed nuclear agreement. US withdrew in 2018." },
      { year: "2020", title: "Soleimani killing", desc: "US drone strike killed Qasem Soleimani; major escalation." },
      { year: "2024", title: "Iran–Pakistan border strikes", desc: "Brief tit-for-tat strikes over militant groups; quickly de-escalated." }
    ],
    presidents: [
      { name: "Masoud Pezeshkian", role: "President", period: "Jul 2024 – Present", current: true },
      { name: "Ebrahim Raisi", role: "President", period: "2021 – 2024" },
      { name: "Hassan Rouhani", role: "President", period: "2013 – 2021" },
      { name: "Mahmoud Ahmadinejad", role: "President", period: "2005 – 2013" },
      { name: "Mohammad Khatami", role: "President", period: "1997 – 2005" },
      { name: "Akbar Hashemi Rafsanjani", role: "President", period: "1989 – 1997" },
      { name: "Ali Khamenei", role: "President (later Supreme Leader)", period: "1981 – 1989" }
    ],
    primeMinisters: [
      { name: "Supreme Leader Ali Khamenei", role: "Supreme Leader (ultimate authority)", period: "1989 – Present", current: true },
      { name: "Mir-Hossein Mousavi", role: "Prime Minister (last before abolition)", period: "1981 – 1989" }
    ],
    wars: [
      { name: "Iran–Iraq War", year: "1980–1988", result: "Stalemate; massive human and economic cost" }
    ],
    treaties: [
      { name: "CENTO membership (pre-1979)", year: "1955–79", note: "With Pakistan, Turkey, UK, etc." },
      { name: "JCPOA", year: "2015", note: "Nuclear deal; later US withdrawal" }
    ],
    wikiSections: [
      { id: "basic", title: "Iran basic facts" },
      { id: "independence", title: "Iran modern history & Revolution" },
      { id: "government", title: "Iran government and politics" },
      { id: "leaders", title: "Iran leaders" },
      { id: "wars", title: "Iran wars and conflicts" },
      { id: "geography", title: "Iran geography and borders" },
      { id: "economy", title: "Iran economy and energy" },
      { id: "ir", title: "Iran–Pakistan relations" },
      { id: "exam", title: "Iran exam quick facts" }
    ],
    geography: ["Capital: Tehran", "Borders: Pakistan, Afghanistan, Turkey, Iraq, Armenia, Azerbaijan, Turkmenistan", "Key features: Zagros & Alborz mountains, Caspian Sea, Persian Gulf", "Strategic: Strait of Hormuz (critical oil chokepoint)"],
    economy: ["Major oil & gas producer", "Sanctions have constrained growth", "Diversification attempts ongoing", "Potential energy cooperation with Pakistan (IP gas pipeline idea)"],
    international: ["First to recognise Pakistan (1947)", "Supported Pakistan in 1965 & 1971 wars", "Post-1979: generally stable but cautious ties", "Shared concerns over Baloch militancy", "Differences over Afghanistan influence; sectarian sensitivities"]
  },

  // ===================== REVISION & FLASHCARDS =====================
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
      { label: "Sino-Indian War", value: "1962" },
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
    { q: "Sino-Indian War year?", a: "1962", country: "india" },
    { q: "Article 370 abrogated on?", a: "5 August 2019", country: "india" },
    { q: "Durand Line year?", a: "1893", country: "afghanistan" },
    { q: "Soviet invasion of Afghanistan?", a: "December 1979", country: "afghanistan" },
    { q: "Taliban returned to power in Afghanistan?", a: "15 August 2021", country: "afghanistan" },
    { q: "China–Pakistan Boundary Agreement?", a: "2 March 1963", country: "china" },
    { q: "PRC founded on?", a: "1 October 1949", country: "china" },
    { q: "BRI announced in?", a: "2013", country: "china" },
    { q: "Islamic Revolution in Iran?", a: "1979", country: "iran" },
    { q: "Iran–Iraq War years?", a: "1980–1988", country: "iran" },
    { q: "First country to recognise Pakistan?", a: "Iran (1947)", country: "iran" }
  ]
};
