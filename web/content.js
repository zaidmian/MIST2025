const inspirationContent = document.getElementById("inspirationContent");

export function showRandomInspiration() {
  const randomIndex = Math.floor(Math.random() * inspirationalContent.length);
  const content = inspirationalContent[randomIndex];

  inspirationContent.innerHTML = `
        <p class="inspiration-quote mb-2">${content.content}</p>
        <p class="inspiration-source text-success">Source: ${content.source}</p>
    `;
}

const inspirationalContent = [
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "The first matter that the slave will be brought to account ' +
      'for on the Day of Judgment is the prayer. If it is sound, then the rest of his deeds will be sound. And if it ' +
      'is bad, then the rest of his deeds will be bad."',
    source: "Al-Tabarani"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Between a man and shirk and kufr is the abandonment of the prayer."',
    source: "Sahih Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "The covenant that distinguishes between us and them is prayer; whoever neglects it has disbelieved."',
    source: "Sunan al-Tirmidhi"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Salah is the pillar of religion. Whoever establishes it has established the religion, and whoever destroys it has destroyed the religion."',
    source: "Ibn Majah"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "When a servant stands to pray, all his sins are placed on his shoulders and every time he bows or prostrates, his sins fall away."',
    source: "Sahih Ibn Hibban"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Whoever performs the two cool prayers (Asr and Fajr) will enter Paradise."',
    source: "Sahih al-Bukhari and Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "The five daily prayers and Jumu’ah to Jumu’ah expiate for what is between them, so long as major sins are avoided."',
    source: "Sahih Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "No Muslim man who performs ablution properly, then prays a prayer with devotion, but it will be an expiation for his past sins."',
    source: "Sahih Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Shall I not tell you of that by which Allah erases sins and raises ranks? Performing ablution well, walking to the mosque, and waiting for the next prayer."',
    source: "Sahih Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Pray as you have seen me praying."',
    source: "Sahih al-Bukhari"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "When one of you prays, let him be calm and not peck like a bird."',
    source: "Sahih Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "When any one of you stands to pray, he is speaking with his Lord, so let him pay attention to how he speaks."',
    source: "Sahih al-Bukhari"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "If a person makes ablution and perfects it, then offers two rak’ahs focusing entirely on them, his past sins will be forgiven."',
    source: "Sahih al-Bukhari"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Prayer in congregation is twenty-seven times more rewarding than prayer offered alone."',
    source: "Sahih al-Bukhari and Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "The one who hears the call (to prayer) and does not come, there is no prayer for him unless he has an excuse."',
    source: "Sunan Ibn Majah"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "The angels continue to pray for one of you as long as he remains in his prayer place, saying: ‘O Allah, forgive him. O Allah, have mercy on him.’"',
    source: "Sahih al-Bukhari and Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "The best prayer after the obligatory prayers is the night prayer."',
    source: "Sahih Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Keep up Qiyam al-Layl, for it was the practice of the righteous before you..."',
    source: "Sunan al-Tirmidhi"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "Indeed, in the prayer, there is calmness."',
    source: "Sahih Muslim"
  },
  {
    type: "hadith",
    content:
      'The Prophet Muhammad (peace be upon him) said: "The coolness of my eyes is in prayer."',
    source: "Sunan al-Nasa’i"

  },
  {
    type: "verse",
    content: "\"Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater. And Allah knows that which you do.\"",
    source: "Quran 29:45"
  },
  {
    type: "verse",
    content: "\"And establish prayer and give zakah and bow with those who bow [in worship and obedience].\"",
    source: "Quran 2:43"
  },
  {
    type: "verse",
    content: "\"And establish prayer and give zakah, and whatever good you put forward for yourselves – you will find it with Allah.\"",
    source: "Quran 2:110"
  },
  {
    type: "verse",
    content: "\"Maintain with care the [obligatory] prayers and [in particular] the middle prayer and stand before Allah, devoutly obedient.\"",
    source: "Quran 2:238"
  },
  {
    type: "verse",
    content: "\"Indeed, prayer has been decreed upon the believers a decree of specified times.\"",
    source: "Quran 4:103"
  },
  {
    type: "verse",
    content: "\"Say, 'Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.'\"",
    source: "Quran 6:162"
  },
  {
    type: "verse",
    content: "\"Establish prayer at the decline of the sun until the darkness of the night and [also] the Qur'an at dawn. Indeed, the recitation of dawn is ever witnessed.\"",
    source: "Quran 17:78"
  },
  {
    type: "verse",
    content: "\"And from [part of] the night, pray with it as additional [worship] for you; it is expected that your Lord will resurrect you to a praised station.\"",
    source: "Quran 17:79"
  },
  {
    type: "verse",
    content: "\"Certainly will the believers have succeeded: They who are during their prayer humbly submissive.\"",
    source: "Quran 23:1-2"
  },
  {
    type: "verse",
    content: "\"Establish regular prayer and give zakah and loan Allah a goodly loan. Whatever good you send before for yourselves – you will find it with Allah.\"",
    source: "Quran 73:20"
  },
  {
    type: "verse",
    content: "\"Indeed, those who believe and do righteous deeds and establish prayer and give zakah will have their reward with their Lord...\"",
    source: "Quran 2:277"
  },
  {
    type: "verse",
    content: "\"Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.\"",
    source: "Quran 20:14"
  },
  {
    type: "verse",
    content: "\"But there came after them successors who neglected prayer and pursued desires; so they are going to meet evil.\"",
    source: "Quran 19:59"
  },
  {
    type: "verse",
    content: "\"And he used to enjoin on his people prayer and zakah and was to his Lord pleasing.\"",
    source: "Quran 19:55"
  },
];
