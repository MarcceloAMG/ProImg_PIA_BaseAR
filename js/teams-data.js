// js/teams-data.js

const TEAMS_DATA = {
    yankees: {
        id: "yankees", name: "New York Yankees", city: "El Bronx, New York", logo: '<img src="img/yankees.png" alt="Yankees" class="team-logo-img">',
        stats: {
            summary: { wins: 94, losses: 68, pct: ".580" },
            players: [
                { name: "Aaron Judge", pos: "OF", stat1: ".322", stat1_lbl: "AVG", stat2: "58", stat2_lbl: "HR", stat3: "144", stat3_lbl: "RBI" },
                { name: "Gerrit Cole", pos: "P", stat1: "3.41", stat1_lbl: "ERA", stat2: "8", stat2_lbl: "W", stat3: "99", stat3_lbl: "K" },
                { name: "Juan Soto", pos: "OF", stat1: ".288", stat1_lbl: "AVG", stat2: "41", stat2_lbl: "HR", stat3: "109", stat3_lbl: "RBI" }
            ],
            chart: [45, 55, 60, 65, 75, 85]
        },
        history: {
            bannerTitle: "New York Yankees",
            bannerSub: "Fundado en 1903 • 27 Series Mundiales",
            sections: [
                { title: "🏛️ De Highlanders a Yankees", text: "La franquicia fue fundada en **1903** bajo el nombre de New York Highlanders. No fue hasta **1913** cuando adoptaron el nombre de Yankees, convirtiéndose en una de las franquicias más valiosas del deporte." },
                { title: "🏆 La dinastía más grande", text: "Son el equipo más ganador de la MLB con **27 campeonatos de la Serie Mundial** y 41 banderines de la Liga Americana. Por sus filas pasaron leyendas como Babe Ruth, Lou Gehrig y Mickey Mantle. En 2022, **Aaron Judge** rompió el récord de jonrones en una temporada con 62." },
                { title: "👑 El Capitán", text: "**Derek Jeter**, conocido como 'The Captain', jugó toda su carrera (1995-2014) con los Yankees y es sinónimo de liderazgo y excelencia en el equipo." }
            ],
            achievements: [{ number: "27", label: "Series Mundiales" }, { number: "41", label: "Títulos de Liga" }, { number: "52", label: "Salón de la Fama" }]
        },
        trivia: [
            { question: "¿Cuántos campeonatos de la Serie Mundial han ganado los Yankees?", options: ["20", "25", "27", "30"], correct: 2, feedback: "✅ ¡Correcto! 27 es el récord de las Grandes Ligas." },
            { question: "¿En qué año se fundó la franquicia?", options: ["1901", "1903", "1913", "1920"], correct: 1, feedback: "✅ ¡Correcto! Se fundaron en 1903." },
            { question: "¿Qué jugador rompió el récord de jonrones en una temporada con 62?", options: ["Babe Ruth", "Mickey Mantle", "Aaron Judge", "Alex Rodriguez"], correct: 2, feedback: "✅ ¡Correcto! Aaron Judge lo logró en 2022." },
            { question: "¿Quién es conocido como 'The Captain' y jugó toda su carrera con los Yankees?", options: ["Derek Jeter", "Mariano Rivera", "Jorge Posada", "Andy Pettitte"], correct: 0, feedback: "✅ ¡Correcto! Derek Jeter fue el capitán." },
            { question: "¿Cómo se llamaba el equipo antes de ser los Yankees?", options: ["Americans", "Highlanders", "Gothams", "Robins"], correct: 1, feedback: "✅ ¡Correcto! Eran los New York Highlanders." }
        ]
    },
    guardians: {
        id: "guardians", name: "Cleveland Guardians", city: "Cleveland, Ohio", logo: '<img src="img/guardians.png" alt="Guardians" class="team-logo-img">',
        stats: {
            summary: { wins: 92, losses: 69, pct: ".571" },
            players: [
                { name: "José Ramírez", pos: "3B", stat1: ".279", stat1_lbl: "AVG", stat2: "39", stat2_lbl: "HR", stat3: "118", stat3_lbl: "RBI" },
                { name: "Steven Kwan", pos: "OF", stat1: ".292", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "44", stat3_lbl: "RBI" },
                { name: "Emmanuel Clase", pos: "P", stat1: "0.61", stat1_lbl: "ERA", stat2: "47", stat2_lbl: "SV", stat3: "66", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 65, 70, 75]
        },
        history: {
            bannerTitle: "Cleveland Guardians",
            bannerSub: "Fundado en 1901 • 2 Series Mundiales",
            sections: [
                { title: "🏛️ Los inicios y los nombres", text: "Fundados en **1901** como los Cleveland Blues, han tenido varios nombres, incluyendo los Naps y los famosos **Cleveland Indians**, nombre que mantuvieron hasta 2021 cuando adoptaron 'Guardians'." },
                { title: "🏆 Época dorada", text: "El equipo ha ganado dos Series Mundiales en su historia, en **1920 y 1948**. También ha conquistado seis banderines de la Liga Americana." },
                { title: "🌟 Era moderna", text: "En la actualidad, **José Ramírez** es el líder ofensivo y la cara del equipo. En 2020, el pitcher **Shane Bieber** ganó el premio Cy Young tras dominar la liga." }
            ],
            achievements: [{ number: "2", label: "Series Mundiales" }, { number: "6", label: "Títulos de Liga" }, { number: "13", label: "Títulos de División" }]
        },
        trivia: [
            { question: "¿En qué años ganaron los Guardians sus Series Mundiales?", options: ["1920 y 1948", "1948 y 1954", "1995 y 1997", "2016 y 2024"], correct: 0, feedback: "✅ ¡Correcto! Sus títulos fueron en 1920 y 1948." },
            { question: "¿Cómo se llamaban antes de cambiar a Guardians?", options: ["Indians", "Browns", "Blues", "Naps"], correct: 0, feedback: "✅ ¡Correcto! Fueron los Cleveland Indians hasta 2021." },
            { question: "¿Quién es el tercera base estrella actual del equipo?", options: ["Francisco Lindor", "José Ramírez", "Carlos Santana", "Shane Bieber"], correct: 1, feedback: "✅ ¡Correcto! José Ramírez es el líder ofensivo." },
            { question: "¿En qué año se fundó la franquicia?", options: ["1899", "1901", "1910", "1920"], correct: 1, feedback: "✅ ¡Correcto! En 1901 como los Cleveland Blues." },
            { question: "¿Qué pitcher ganó el Cy Young en 2020?", options: ["Corey Kluber", "Shane Bieber", "Emmanuel Clase", "Triston McKenzie"], correct: 1, feedback: "✅ ¡Correcto! Shane Bieber dominó la liga ese año." }
        ]
    },
    royals: {
        id: "royals", name: "Kansas City Royals", city: "Kansas City, Missouri", logo: '<img src="img/royals.png" alt="Royals" class="team-logo-img">',
        stats: {
            summary: { wins: 86, losses: 76, pct: ".531" },
            players: [
                { name: "Bobby Witt Jr.", pos: "SS", stat1: ".332", stat1_lbl: "AVG", stat2: "32", stat2_lbl: "HR", stat3: "109", stat3_lbl: "RBI" },
                { name: "Salvador Pérez", pos: "C", stat1: ".271", stat1_lbl: "AVG", stat2: "27", stat2_lbl: "HR", stat3: "104", stat3_lbl: "RBI" },
                { name: "Cole Ragans", pos: "P", stat1: "3.14", stat1_lbl: "ERA", stat2: "11", stat2_lbl: "W", stat3: "223", stat3_lbl: "K" }
            ],
            chart: [40, 50, 55, 60, 70, 80]
        },
        history: {
            bannerTitle: "Kansas City Royals",
            bannerSub: "Fundado en 1969 • 2 Series Mundiales",
            sections: [
                { title: "🏛️ Una expansión de 1969", text: "Los Royals se unieron a la MLB como una franquicia de expansión en **1969**. Su nombre rinde homenaje a la American Royal, una famosa feria de ganado de la ciudad." },
                { title: "🏆 Dos campeonatos", text: "Ganaron su primera Serie Mundial en **1985**. Volvieron a la cima en **2015**, venciendo a los New York Mets en 5 juegos, donde el receptor **Salvador Pérez** fue nombrado el MVP de la Serie Mundial." },
                { title: "🌟 Era moderna", text: "Liderados por la joven estrella **Bobby Witt Jr.**, los Royals sorprendieron en 2024 llegando a la postemporada tras varios años de reconstrucción." }
            ],
            achievements: [{ number: "2", label: "Series Mundiales" }, { number: "4", label: "Títulos de Liga" }, { number: "1", label: "Comodín (2024)" }]
        },
        trivia: [
            { question: "¿En qué año ganaron los Royals su primera Serie Mundial?", options: ["1969", "1980", "1985", "2015"], correct: 2, feedback: "✅ ¡Correcto! Ganaron su primer título en 1985." },
            { question: "¿Cuántos títulos de Serie Mundial tienen los Royals?", options: ["1", "2", "3", "4"], correct: 1, feedback: "✅ ¡Correcto! Ganaron en 1985 y 2015." },
            { question: "¿Qué receptor fue el MVP de la Serie Mundial 2015?", options: ["Salvador Pérez", "Bobby Witt Jr.", "Eric Hosmer", "Mike Moustakas"], correct: 0, feedback: "✅ ¡Correcto! Salvador Pérez." },
            { question: "¿Contra qué equipo ganaron la Serie Mundial de 2015?", options: ["San Francisco Giants", "New York Mets", "St. Louis Cardinals", "Chicago Cubs"], correct: 1, feedback: "✅ ¡Correcto! Vencieron a los Mets." },
            { question: "¿En qué año se fundó la franquicia?", options: ["1955", "1961", "1969", "1977"], correct: 2, feedback: "✅ ¡Correcto! Son una expansión de 1969." }
        ]
    },
    orioles: {
        id: "orioles", name: "Baltimore Orioles", city: "Baltimore, Maryland", logo: '<img src="img/orioles.png" alt="Orioles" class="team-logo-img">',
        stats: {
            summary: { wins: 91, losses: 71, pct: ".562" },
            players: [
                { name: "Adley Rutschman", pos: "C", stat1: ".250", stat1_lbl: "AVG", stat2: "19", stat2_lbl: "HR", stat3: "79", stat3_lbl: "RBI" },
                { name: "Gunnar Henderson", pos: "SS", stat1: ".281", stat1_lbl: "AVG", stat2: "37", stat2_lbl: "HR", stat3: "92", stat3_lbl: "RBI" },
                { name: "Corbin Burnes", pos: "P", stat1: "2.92", stat1_lbl: "ERA", stat2: "15", stat2_lbl: "W", stat3: "181", stat3_lbl: "K" }
            ],
            chart: [50, 60, 55, 70, 75, 65]
        },
        history: {
            bannerTitle: "Baltimore Orioles",
            bannerSub: "Fundado en 1901 • 3 Series Mundiales",
            sections: [
                { title: "🏛️ De Milwaukee a Baltimore", text: "La franquicia nació en 1901 como los Milwaukee Brewers, pasó por San Luis y finalmente se mudó a **Baltimore en 1954**." },
                { title: "🏆 Los títulos", text: "Los Orioles han ganado **3 Series Mundiales** (1966, 1970 y **1983**). Juegan en el famoso Oriole Park at Camden Yards." },
                { title: "🦾 El Hombre de Hierro", text: "El shortstop **Cal Ripken Jr.**, conocido como 'The Iron Man', es una leyenda del equipo por jugar 2,632 partidos consecutivos, un récord absoluto en la MLB." }
            ],
            achievements: [{ number: "3", label: "Series Mundiales" }, { number: "7", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿En qué año se mudaron a Baltimore?", options: ["1901", "1954", "1966", "1970"], correct: 1, feedback: "✅ ¡Correcto! Llegaron a Baltimore en 1954." },
            { question: "¿Cuántas Series Mundiales han ganado?", options: ["1", "2", "3", "4"], correct: 2, feedback: "✅ ¡Correcto! Tienen 3 títulos." },
            { question: "¿Quién es el legendario shortstop conocido como 'The Iron Man'?", options: ["Brooks Robinson", "Cal Ripken Jr.", "Eddie Murray", "Frank Robinson"], correct: 1, feedback: "✅ ¡Correcto! Cal Ripken Jr." },
            { question: "¿En qué año ganaron su última Serie Mundial?", options: ["1966", "1970", "1983", "1997"], correct: 2, feedback: "✅ ¡Correcto! Ganaron en 1983." },
            { question: "¿Cómo se llama su estadio?", options: ["Fenway Park", "Yankee Stadium", "Camden Yards", "Tropicana Field"], correct: 2, feedback: "✅ ¡Correcto! Juegan en Camden Yards." }
        ]
    },
    redsox: {
        id: "redsox", name: "Boston Red Sox", city: "Boston, Massachusetts", logo: '<img src="img/redsox.png" alt="Red Sox" class="team-logo-img">',
        stats: {
            summary: { wins: 81, losses: 81, pct: ".500" },
            players: [
                { name: "Rafael Devers", pos: "3B", stat1: ".272", stat1_lbl: "AVG", stat2: "28", stat2_lbl: "HR", stat3: "83", stat3_lbl: "RBI" },
                { name: "Jarren Duran", pos: "OF", stat1: ".285", stat1_lbl: "AVG", stat2: "21", stat2_lbl: "HR", stat3: "75", stat3_lbl: "RBI" },
                { name: "Tanner Houck", pos: "P", stat1: "3.12", stat1_lbl: "ERA", stat2: "9", stat2_lbl: "W", stat3: "154", stat3_lbl: "K" }
            ],
            chart: [45, 55, 50, 60, 65, 70]
        },
        history: {
            bannerTitle: "Boston Red Sox",
            bannerSub: "Fundado en 1901 • 9 Series Mundiales",
            sections: [
                { title: "🏛️ Los Boston Americans", text: "Fundado en **1901** como los Boston Americans, son uno de los equipos originales de la Liga Americana. Juegan en el histórico **Fenway Park**, el estadio más antiguo de la MLB (1912)." },
                { title: "💔 La Maldición del Bambino", text: "En **1920**, el legendario **Babe Ruth** fue vendido a los Yankees, lo que desató una sequía de 86 años sin títulos. Esta sequía terminó en **2004**, cuando rompieron la 'Maldición'." },
                { title: "🏆 Dinastía moderna", text: "En el siglo XXI han ganado **4 Series Mundiales** (2004, 2007, 2013 y 2018), consolidándose como uno de los equipos más dominantes de la época moderna." }
            ],
            achievements: [{ number: "9", label: "Series Mundiales" }, { number: "14", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿Cómo se llamaban en 1901?", options: ["Pilgrims", "Americans", "Braves", "Highlanders"], correct: 1, feedback: "✅ ¡Correcto! Eran los Boston Americans." },
            { question: "¿Cuántas Series Mundiales han ganado en el siglo XXI?", options: ["1", "2", "3", "4"], correct: 3, feedback: "✅ ¡Correcto! 2004, 2007, 2013 y 2018." },
            { question: "¿En qué año rompieron la 'Maldición del Bambino'?", options: ["1918", "1986", "2004", "2013"], correct: 2, feedback: "✅ ¡Correcto! En 2004." },
            { question: "¿Qué legendario bateador fue vendido a los Yankees en 1920?", options: ["Ted Williams", "Babe Ruth", "Carl Yastrzemski", "David Ortiz"], correct: 1, feedback: "✅ ¡Correcto! Babe Ruth." },
            { question: "¿Cómo se llama su famoso estadio?", options: ["Fenway Park", "Wrigley Field", "Fenway Stadium", "Boston Park"], correct: 0, feedback: "✅ ¡Correcto! Fenway Park." }
        ]
    },
    rays: {
        id: "rays", name: "Tampa Bay Rays", city: "St. Petersburg, Florida", logo: '<img src="img/bayrays.png" alt="Rays" class="team-logo-img">',
        stats: {
            summary: { wins: 80, losses: 82, pct: ".494" },
            players: [
                { name: "Yandy Díaz", pos: "1B", stat1: ".281", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "65", stat3_lbl: "RBI" },
                { name: "Randy Arozarena", pos: "OF", stat1: ".219", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "60", stat3_lbl: "RBI" },
                { name: "Zach Eflin", pos: "P", stat1: "4.09", stat1_lbl: "ERA", stat2: "10", stat2_lbl: "W", stat3: "134", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 55, 65, 60]
        },
        history: {
            bannerTitle: "Tampa Bay Rays",
            bannerSub: "Fundado en 1998 • 2 Títulos de Liga",
            sections: [
                { title: "🏛️ Los Devil Rays", text: "Se unieron a la MLB en **1998** con el nombre de Tampa Bay Devil Rays. En 2008 acortaron su nombre a Rays. Juegan en el Tropicana Field." },
                { title: "🏆 Época dorada", text: "Aunque no han ganado una Serie Mundial, han sido campeones de la Liga Americana en **2 ocasiones** (2008 y 2020). En 2008, bajo el mando del manager **Joe Maddon**, llegaron a su primera Serie Mundial." }
            ],
            achievements: [{ number: "0", label: "Series Mundiales" }, { number: "2", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿En qué año se unieron a la MLB?", options: ["1993", "1998", "2001", "2005"], correct: 1, feedback: "✅ ¡Correcto! En 1998." },
            { question: "¿Cuál era su nombre original?", options: ["Rays", "Devil Rays", "Stingrays", "Marlins"], correct: 1, feedback: "✅ ¡Correcto! Devil Rays." },
            { question: "¿Cuántas veces han ganado el banderín de la Liga Americana?", options: ["0", "1", "2", "3"], correct: 2, feedback: "✅ ¡Correcto! En 2008 y 2020." },
            { question: "¿Dónde juegan sus partidos como local?", options: ["Tropicana Field", "Sun Life Stadium", "Amalie Arena", "Raymond James Stadium"], correct: 0, feedback: "✅ ¡Correcto! Tropicana Field." },
            { question: "¿Qué manager los llevó a la Serie Mundial en 2008?", options: ["Kevin Cash", "Joe Maddon", "Terry Francona", "Dave Roberts"], correct: 1, feedback: "✅ ¡Correcto! Joe Maddon." }
        ]
    },
    bluejays: {
        id: "bluejays", name: "Toronto Blue Jays", city: "Toronto, Canadá", logo: '<img src="img/bluejays.png" alt="Blue Jays" class="team-logo-img">',
        stats: {
            summary: { wins: 74, losses: 88, pct: ".457" },
            players: [
                { name: "Vladimir Guerrero Jr.", pos: "1B", stat1: ".323", stat1_lbl: "AVG", stat2: "30", stat2_lbl: "HR", stat3: "103", stat3_lbl: "RBI" },
                { name: "Bo Bichette", pos: "SS", stat1: ".225", stat1_lbl: "AVG", stat2: "4", stat2_lbl: "HR", stat3: "31", stat3_lbl: "RBI" },
                { name: "Kevin Gausman", pos: "P", stat1: "4.56", stat1_lbl: "ERA", stat2: "14", stat2_lbl: "W", stat3: "162", stat3_lbl: "K" }
            ],
            chart: [40, 45, 55, 50, 60, 55]
        },
        history: {
            bannerTitle: "Toronto Blue Jays",
            bannerSub: "Fundado en 1977 • 2 Series Mundiales",
            sections: [
                { title: "🏛️ Los dueños de Canadá", text: "Se unieron a la MLB en **1977** como equipo de expansión. Juegan en Toronto, Canadá, siendo el único equipo de la MLB en dicho país." },
                { title: "🏆 Bicampeones consecutivos", text: "Ganaron **2 Series Mundiales consecutivas** en **1992 y 1993**. En 1993, **Joe Carter** conectó uno de los jonrones más famosos de la historia, un 'walk-off' para ganar el título." }
            ],
            achievements: [{ number: "2", label: "Series Mundiales" }, { number: "2", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿En qué año se fundó la franquicia?", options: ["1969", "1977", "1982", "1993"], correct: 1, feedback: "✅ ¡Correcto! En 1977." },
            { question: "¿Cuántas Series Mundiales consecutivas ganaron?", options: ["1", "2", "3", "0"], correct: 1, feedback: "✅ ¡Correcto! 2 seguidas." },
            { question: "¿En qué años fueron esos títulos?", options: ["1989 y 1990", "1992 y 1993", "1996 y 1997", "2000 y 2001"], correct: 1, feedback: "✅ ¡Correcto! En 1992 y 1993." },
            { question: "¿Qué jugador conectó el jonrón ganador de la Serie Mundial de 1993?", options: ["Roberto Alomar", "Joe Carter", "Carlos Delgado", "Jose Bautista"], correct: 1, feedback: "✅ ¡Correcto! Joe Carter." },
            { question: "¿En qué ciudad juegan?", options: ["Vancouver", "Montreal", "Toronto", "Ottawa"], correct: 2, feedback: "✅ ¡Correcto! Toronto, Canadá." }
        ]
    },
    whitesox: {
        id: "whitesox", name: "Chicago White Sox", city: "Chicago, Illinois", logo: '<img src="img/whitesox.png" alt="White Sox" class="team-logo-img">',
        stats: {
            summary: { wins: 41, losses: 121, pct: ".253" },
            players: [
                { name: "Luis Robert Jr.", pos: "OF", stat1: ".224", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "35", stat3_lbl: "RBI" },
                { name: "Andrew Benintendi", pos: "OF", stat1: ".229", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "64", stat3_lbl: "RBI" },
                { name: "Garrett Crochet", pos: "P", stat1: "3.58", stat1_lbl: "ERA", stat2: "6", stat2_lbl: "W", stat3: "209", stat3_lbl: "K" }
            ],
            chart: [20, 30, 25, 35, 30, 40]
        },
        history: {
            bannerTitle: "Chicago White Sox",
            bannerSub: "Fundado en 1901 • 3 Series Mundiales",
            sections: [
                { title: "🏛️ Los White Stockings", text: "Fundados en **1901** como los Chicago White Stockings, son uno de los equipos originales de la Liga Americana." },
                { title: "🏆 Títulos y el estadio", text: "Han ganado **3 Series Mundiales** (1906, 1917 y **2005**). Actualmente juegan en el Guaranteed Rate Field." }
            ],
            achievements: [{ number: "3", label: "Series Mundiales" }, { number: "6", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿En qué año ganaron su Serie Mundial más reciente?", options: ["1917", "1959", "2005", "2010"], correct: 2, feedback: "✅ ¡Correcto! En 2005." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["1", "2", "3", "4"], correct: 2, feedback: "✅ ¡Correcto! 3 títulos." },
            { question: "¿Cómo se llama su estadio actual?", options: ["Wrigley Field", "Guaranteed Rate Field", "Comiskey Park II", "Soldier Field"], correct: 1, feedback: "✅ ¡Correcto! Guaranteed Rate Field." },
            { question: "¿En qué año se fundó el equipo?", options: ["1899", "1901", "1910", "1920"], correct: 1, feedback: "✅ ¡Correcto! En 1901." },
            { question: "¿Cómo se llamaban en 1901?", options: ["White Sox", "White Stockings", "Blues", "Brewers"], correct: 1, feedback: "✅ ¡Correcto! White Stockings." }
        ]
    },
    tigers: {
        id: "tigers", name: "Detroit Tigers", city: "Detroit, Michigan", logo: '<img src="img/tigers.png" alt="Tigers" class="team-logo-img">',
        stats: {
            summary: { wins: 86, losses: 76, pct: ".531" },
            players: [
                { name: "Riley Greene", pos: "OF", stat1: ".262", stat1_lbl: "AVG", stat2: "24", stat2_lbl: "HR", stat3: "74", stat3_lbl: "RBI" },
                { name: "Spencer Torkelson", pos: "1B", stat1: ".219", stat1_lbl: "AVG", stat2: "10", stat2_lbl: "HR", stat3: "37", stat3_lbl: "RBI" },
                { name: "Tarik Skubal", pos: "P", stat1: "2.39", stat1_lbl: "ERA", stat2: "18", stat2_lbl: "W", stat3: "228", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 65, 70, 75]
        },
        history: {
            bannerTitle: "Detroit Tigers",
            bannerSub: "Fundado en 1901 • 4 Series Mundiales",
            sections: [
                { title: "🏛️ Equipo original", text: "Fundado en **1901**, es uno de los equipos originales de la Liga Americana. Juegan en el Comerica Park." },
                { title: "🏆 Títulos y leyendas", text: "Han ganado **4 Series Mundiales**, la última en **1984**. Entre 2004 y 2013, el legendario **Miguel Cabrera** jugó para el equipo, dejando una huella imborrable." }
            ],
            achievements: [{ number: "4", label: "Series Mundiales" }, { number: "11", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿Cuántas Series Mundiales han ganado?", options: ["2", "3", "4", "5"], correct: 2, feedback: "✅ ¡Correcto! 4 títulos." },
            { question: "¿En qué año fue su última Serie Mundial?", options: ["1968", "1984", "1990", "2006"], correct: 1, feedback: "✅ ¡Correcto! En 1984." },
            { question: "¿Qué legendario bateador jugó para ellos de 2004 a 2013?", options: ["Miguel Cabrera", "Albert Pujols", "Prince Fielder", "Justin Verlander"], correct: 0, feedback: "✅ ¡Correcto! Miguel Cabrera." },
            { question: "¿En qué año se fundó el equipo?", options: ["1899", "1901", "1910", "1920"], correct: 1, feedback: "✅ ¡Correcto! En 1901." },
            { question: "¿Cómo se llama su estadio?", options: ["Comerica Park", "Tiger Stadium", "Ford Field", "Little Caesars Arena"], correct: 0, feedback: "✅ ¡Correcto! Comerica Park." }
        ]
    },
    twins: {
        id: "twins", name: "Minnesota Twins", city: "Minneapolis, Minnesota", logo: '<img src="img/twins.png" alt="Twins" class="team-logo-img">',
        stats: {
            summary: { wins: 82, losses: 80, pct: ".506" },
            players: [
                { name: "Carlos Correa", pos: "SS", stat1: ".310", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "54", stat3_lbl: "RBI" },
                { name: "Royce Lewis", pos: "3B", stat1: ".233", stat1_lbl: "AVG", stat2: "16", stat2_lbl: "HR", stat3: "47", stat3_lbl: "RBI" },
                { name: "Pablo López", pos: "P", stat1: "4.08", stat1_lbl: "ERA", stat2: "15", stat2_lbl: "W", stat3: "198", stat3_lbl: "K" }
            ],
            chart: [55, 60, 50, 65, 70, 60]
        },
        history: {
            bannerTitle: "Minnesota Twins",
            bannerSub: "Fundado en 1901 • 3 Series Mundiales",
            sections: [
                { title: "🏛️ Los Washington Senators", text: "Fundado en 1901 como los Washington Senators, el equipo se mudó a Minnesota en **1961**." },
                { title: "🏆 Títulos y 'The Hammer'", text: "Han ganado **3 Series Mundiales** (1924, 1987 y **1991**). Una de sus mayores leyendas es **Harmon Killebrew**, apodado 'The Hammer', conocido por su enorme poder de bateo." }
            ],
            achievements: [{ number: "3", label: "Series Mundiales" }, { number: "6", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿Cómo se llamaban antes de mudarse a Minnesota?", options: ["Washington Senators", "Washington Nationals", "Montreal Expos", "Kansas City Athletics"], correct: 0, feedback: "✅ ¡Correcto! Senators." },
            { question: "¿En qué año se mudaron a Minnesota?", options: ["1955", "1961", "1969", "1977"], correct: 1, feedback: "✅ ¡Correcto! En 1961." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["1", "2", "3", "4"], correct: 2, feedback: "✅ ¡Correcto! 3 títulos." },
            { question: "¿Qué jugador es conocido como 'The Hammer'?", options: ["Kirby Puckett", "Harmon Killebrew", "Rod Carew", "Joe Mauer"], correct: 1, feedback: "✅ ¡Correcto! Harmon Killebrew." },
            { question: "¿En qué año ganaron su última Serie Mundial?", options: ["1987", "1991", "2001", "2010"], correct: 1, feedback: "✅ ¡Correcto! En 1991." }
        ]
    },
    astros: {
        id: "astros", name: "Houston Astros", city: "Houston, Texas", logo: '<img src="img/astros.png" alt="Astros" class="team-logo-img">',
        stats: {
            summary: { wins: 88, losses: 74, pct: ".543" },
            players: [
                { name: "Jose Altuve", pos: "2B", stat1: ".295", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "65", stat3_lbl: "RBI" },
                { name: "Yordan Alvarez", pos: "DH", stat1: ".308", stat1_lbl: "AVG", stat2: "35", stat2_lbl: "HR", stat3: "86", stat3_lbl: "RBI" },
                { name: "Framber Valdez", pos: "P", stat1: "2.91", stat1_lbl: "ERA", stat2: "15", stat2_lbl: "W", stat3: "169", stat3_lbl: "K" }
            ],
            chart: [60, 65, 70, 75, 80, 85]
        },
        history: {
            bannerTitle: "Houston Astros",
            bannerSub: "Fundado en 1962 • 2 Series Mundiales",
            sections: [
                { title: "🏛️ De Colt .45s a la Liga Americana", text: "Fundado en **1962** como los Houston Colt .45s, jugaron en la Liga Nacional hasta que se mudaron a la Liga Americana en 2013." },
                { title: "🏆 Los títulos recientes", text: "Ganaron su primera Serie Mundial en **2017** y su segunda en **2022**. En ambas victorias, el equipo demostró un dominio ofensivo arrollador." }
            ],
            achievements: [{ number: "2", label: "Series Mundiales" }, { number: "5", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿Cómo se llamaban cuando se fundaron en 1962?", options: ["Astros", "Colt .45s", "Oilers", "Texans"], correct: 1, feedback: "✅ ¡Correcto! Colt .45s." },
            { question: "¿En qué año ganaron su primera Serie Mundial?", options: ["2005", "2017", "2019", "2022"], correct: 1, feedback: "✅ ¡Correcto! En 2017." },
            { question: "¿En qué liga jugaban antes de mudarse a la Liga Americana en 2013?", options: ["Liga Americana", "Liga Nacional", "Liga del Pacífico", "Liga de la Costa"], correct: 1, feedback: "✅ ¡Correcto! Liga Nacional." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["1", "2", "3", "0"], correct: 1, feedback: "✅ ¡Correcto! 2 títulos." },
            { question: "¿En qué año ganaron su segunda Serie Mundial?", options: ["2019", "2020", "2021", "2022"], correct: 3, feedback: "✅ ¡Correcto! En 2022." }
        ]
    },
    angels: {
        id: "angels", name: "Los Angeles Angels", city: "Anaheim, California", logo: '<img src="img/angels.png" alt="Angels" class="team-logo-img">',
        stats: {
            summary: { wins: 63, losses: 99, pct: ".389" },
            players: [
                { name: "Mike Trout", pos: "OF", stat1: ".220", stat1_lbl: "AVG", stat2: "10", stat2_lbl: "HR", stat3: "14", stat3_lbl: "RBI" },
                { name: "Taylor Ward", pos: "OF", stat1: ".246", stat1_lbl: "AVG", stat2: "25", stat2_lbl: "HR", stat3: "75", stat3_lbl: "RBI" },
                { name: "Tyler Anderson", pos: "P", stat1: "3.81", stat1_lbl: "ERA", stat2: "10", stat2_lbl: "W", stat3: "142", stat3_lbl: "K" }
            ],
            chart: [35, 40, 30, 45, 40, 50]
        },
        history: {
            bannerTitle: "Los Angeles Angels",
            bannerSub: "Fundado en 1961 • 1 Serie Mundial",
            sections: [
                { title: "🏛️ Fundación en Anaheim", text: "Fundado en **1961** como los Los Angeles Angels, han jugado en la ciudad de **Anaheim** desde 1966." },
                { title: "🏆 El título de 2002", text: "Ganaron su única Serie Mundial en **2002**, venciendo a los San Francisco Giants. En la actualidad, la superestrella **Mike Trout** ha ganado múltiples premios MVP con el equipo." }
            ],
            achievements: [{ number: "1", label: "Series Mundiales" }, { number: "1", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿En qué año ganaron su única Serie Mundial?", options: ["1995", "2002", "2005", "2009"], correct: 1, feedback: "✅ ¡Correcto! En 2002." },
            { question: "¿Cuál era su nombre original cuando se fundaron en 1961?", options: ["California Angels", "Anaheim Angels", "Los Angeles Angels", "Los Angeles Angels of Anaheim"], correct: 2, feedback: "✅ ¡Correcto! Los Angeles Angels." },
            { question: "¿Qué jugador ganó múltiples MVP con los Angels?", options: ["Shohei Ohtani", "Mike Trout", "Albert Pujols", "Vladimir Guerrero"], correct: 1, feedback: "✅ ¡Correcto! Mike Trout." },
            { question: "¿En qué ciudad juegan actualmente?", options: ["Los Angeles", "Anaheim", "Long Beach", "Pasadena"], correct: 1, feedback: "✅ ¡Correcto! Anaheim." },
            { question: "¿Contra qué equipo ganaron la Serie Mundial de 2002?", options: ["Los Angeles Dodgers", "San Francisco Giants", "New York Yankees", "Chicago Cubs"], correct: 1, feedback: "✅ ¡Correcto! A los Giants." }
        ]
    },
    athletics: {
        id: "athletics", name: "Oakland Athletics", city: "Oakland, California", logo: '<img src="img/athletics.png" alt="Athletics" class="team-logo-img">',
        stats: {
            summary: { wins: 69, losses: 93, pct: ".426" },
            players: [
                { name: "Brent Rooker", pos: "OF", stat1: ".293", stat1_lbl: "AVG", stat2: "39", stat2_lbl: "HR", stat3: "112", stat3_lbl: "RBI" },
                { name: "Shea Langeliers", pos: "C", stat1: ".224", stat1_lbl: "AVG", stat2: "29", stat2_lbl: "HR", stat3: "80", stat3_lbl: "RBI" },
                { name: "JP Sears", pos: "P", stat1: "4.38", stat1_lbl: "ERA", stat2: "11", stat2_lbl: "W", stat3: "137", stat3_lbl: "K" }
            ],
            chart: [40, 45, 50, 55, 45, 60]
        },
        history: {
            bannerTitle: "Oakland Athletics",
            bannerSub: "Fundado en 1901 • 9 Series Mundiales",
            sections: [
                { title: "🏛️ De Filadelfia a Oakland", text: "Fundado en 1901 en Filadelfia, el equipo se mudó a **Kansas City** en 1955 y finalmente a **Oakland en 1968**." },
                { title: "🏆 Títulos y Moneyball", text: "Han ganado **9 Series Mundiales**, la última en **1989**. En 2011, la famosa película **Moneyball** contó la historia de su gerente general, Billy Beane." }
            ],
            achievements: [{ number: "9", label: "Series Mundiales" }, { number: "15", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿Cuántas Series Mundiales han ganado?", options: ["5", "7", "9", "11"], correct: 2, feedback: "✅ ¡Correcto! 9 títulos." },
            { question: "¿En qué año ganaron su última Serie Mundial?", options: ["1974", "1989", "1990", "2002"], correct: 1, feedback: "✅ ¡Correcto! En 1989." },
            { question: "¿En qué ciudad jugaron antes de Oakland?", options: ["Kansas City", "San Francisco", "Seattle", "Los Angeles"], correct: 0, feedback: "✅ ¡Correcto! Kansas City." },
            { question: "¿Qué película famosa de 2011 trata sobre su gerente general?", options: ["Moneyball", "The Natural", "Field of Dreams", "42"], correct: 0, feedback: "✅ ¡Correcto! Moneyball." },
            { question: "¿En qué año se mudaron a Oakland?", options: ["1955", "1960", "1968", "1975"], correct: 2, feedback: "✅ ¡Correcto! En 1968." }
        ]
    },
    mariners: {
        id: "mariners", name: "Seattle Mariners", city: "Seattle, Washington", logo: '<img src="img/mariners.png" alt="Mariners" class="team-logo-img">',
        stats: {
            summary: { wins: 85, losses: 77, pct: ".525" },
            players: [
                { name: "Julio Rodríguez", pos: "OF", stat1: ".273", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "68", stat3_lbl: "RBI" },
                { name: "Cal Raleigh", pos: "C", stat1: ".220", stat1_lbl: "AVG", stat2: "34", stat2_lbl: "HR", stat3: "100", stat3_lbl: "RBI" },
                { name: "Luis Castillo", pos: "P", stat1: "3.64", stat1_lbl: "ERA", stat2: "11", stat2_lbl: "W", stat3: "175", stat3_lbl: "K" }
            ],
            chart: [55, 60, 65, 70, 75, 80]
        },
        history: {
            bannerTitle: "Seattle Mariners",
            bannerSub: "Fundado en 1977",
            sections: [
                { title: "🏛️ Expansión de 1977", text: "Se unieron a la MLB en **1977** como equipo de expansión. Actualmente juegan en el T-Mobile Park." },
                { title: "⚾ Leyendas y récords", text: "Aún no han ganado una Serie Mundial. Sin embargo, **Ichiro Suzuki** rompió el récord de hits en una temporada en **2004**, y **Edgar Martinez** es famoso por su 'slam' en la postemporada de 1995." }
            ],
            achievements: [{ number: "0", label: "Series Mundiales" }, { number: "0", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿En qué año se unieron a la MLB?", options: ["1969", "1977", "1982", "1993"], correct: 1, feedback: "✅ ¡Correcto! En 1977." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["0", "1", "2", "3"], correct: 0, feedback: "✅ ¡Correcto! Ninguna." },
            { question: "¿Qué jugador rompió el récord de hits en una temporada en 2004?", options: ["Ken Griffey Jr.", "Ichiro Suzuki", "Alex Rodriguez", "Edgar Martinez"], correct: 1, feedback: "✅ ¡Correcto! Ichiro Suzuki." },
            { question: "¿Qué jugador es famoso por su 'slam' en la postemporada de 1995?", options: ["Ken Griffey Jr.", "Edgar Martinez", "Jay Buhner", "Randy Johnson"], correct: 1, feedback: "✅ ¡Correcto! Edgar Martinez." },
            { question: "¿Cómo se llama su estadio actual?", options: ["Safeco Field", "T-Mobile Park", "CenturyLink Field", "Lumen Field"], correct: 1, feedback: "✅ ¡Correcto! T-Mobile Park." }
        ]
    },
    rangers: {
        id: "rangers", name: "Texas Rangers", city: "Arlington, Texas", logo: '<img src="img/rangers.png" alt="Rangers" class="team-logo-img">',
        stats: {
            summary: { wins: 78, losses: 84, pct: ".481" },
            players: [
                { name: "Corey Seager", pos: "SS", stat1: ".278", stat1_lbl: "AVG", stat2: "30", stat2_lbl: "HR", stat3: "74", stat3_lbl: "RBI" },
                { name: "Marcus Semien", pos: "2B", stat1: ".237", stat1_lbl: "AVG", stat2: "23", stat2_lbl: "HR", stat3: "74", stat3_lbl: "RBI" },
                { name: "Nathan Eovaldi", pos: "P", stat1: "3.80", stat1_lbl: "ERA", stat2: "12", stat2_lbl: "W", stat3: "166", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 65, 70, 75]
        },
        history: {
            bannerTitle: "Texas Rangers",
            bannerSub: "Fundado en 1961 • 1 Serie Mundial",
            sections: [
                { title: "🏛️ De Washington a Texas", text: "Fundado en 1961 como los Washington Senators, el equipo se mudó a **Texas en 1972**. Juegan en el moderno Globe Life Field." },
                { title: "🏆 El título de 2023", text: "Tras décadas de intentos, ganaron su primera Serie Mundial en **2023**, venciendo a los Arizona Diamondbacks." }
            ],
            achievements: [{ number: "1", label: "Series Mundiales" }, { number: "3", label: "Títulos de Liga" }]
        },
        trivia: [
            { question: "¿En qué año ganaron su primera Serie Mundial?", options: ["2010", "2011", "2023", "2024"], correct: 2, feedback: "✅ ¡Correcto! En 2023." },
            { question: "¿Cómo se llamaban antes de mudarse a Texas?", options: ["Washington Senators", "Washington Nationals", "Kansas City Royals", "Seattle Pilots"], correct: 0, feedback: "✅ ¡Correcto! Senators." },
            { question: "¿Contra qué equipo ganaron la Serie Mundial de 2023?", options: ["Houston Astros", "Arizona Diamondbacks", "Philadelphia Phillies", "Atlanta Braves"], correct: 1, feedback: "✅ ¡Correcto! A los Diamondbacks." },
            { question: "¿En qué año se mudaron a Texas?", options: ["1961", "1972", "1980", "1990"], correct: 1, feedback: "✅ ¡Correcto! En 1972." },
            { question: "¿Cómo se llama su estadio?", options: ["Globe Life Park", "Globe Life Field", "AT&T Stadium", "Rangers Ballpark"], correct: 1, feedback: "✅ ¡Correcto! Globe Life Field." }
        ]
    }
};