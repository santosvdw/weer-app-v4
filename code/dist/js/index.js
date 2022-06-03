fetch('https://data.buienradar.nl/2.0/feed/json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        // Hier gaan we de opgehaalde data verwerken!
        console.log(jsonData);
        let statMea = jsonData.actual.stationmeasurements;
        let forecastData = json.forecast;
        // Weer-icoontje header
        var img = document.createElement('img');
        img.src = statMea[2].iconurl; // <-- Het weer icoon
        var src = document.querySelector('.weer-icoontje');
        src.appendChild(img);

        // Alle meetstations
        console.log(jsonData.actual.stationmeasurements);
        for (var i = 0; i < statMea.length; i++) {
            let curStation = statMea[i].stationname;
            let curRegio = statMea[i].regio;
            let cuTemp = statMea[i].temperature;
            //console.log(curStation + ' - ' + curRegio + ' - ' + i + ' - ' + cuTemp);
        }

        // Temperatuur (header)
        let temp = document.querySelector('.temp');
        let curTemp = statMea[2].temperature;
        temp.innerHTML = curTemp + '°C';
        console.log(temp.innerHTML);

        // Locatie (header)
        var locatie = document.getElementById('locSelect');

        function show() {
            var curLocatie = document.forms[0].locSelect.value;
            console.log(curLocatie);
            let i = 0;
            if (curLocatie == 'Meetstation Arcen') {
                i = 0;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Arnhem') {
                i = 1;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Berkhout') {
                i = 2;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation De Bilt') {
                i = 4;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Den Helder') {
                i = 5;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Eindhoven') {
                i = 6;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Ell') {
                i = 7;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Europlatform') {
                i = 8;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Gilze RIjen') {
                i = 9;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Goes') {
                i = 10;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Groenlo-Hupsel') {
                i = 11;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Groningen') {
                i = 12;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hansweert') {
                i = 13;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Heino') {
                i = 14;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Herwijnen') {
                i = 15;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hoek van Holland') {
                i = 16;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hoogeveen') {
                i = 17;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hoorn Terschelling') {
                i = 18;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Houtribdijk') {
                i = 19;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Lauwersoog') {
                i = 23;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Leeuwarden') {
                i = 24;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Lelystad') {
                i = 26;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Lopik-Cabauw') {
                i = 27;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Maastricht') {
                i = 28;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Marknesse') {
                i = 29;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Nieuw Beerta') {
                i = 30;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Rotterdam') {
                i = 32;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Rotterdam Geulhaven') {
                i = 33;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Schiphol') {
                i = 35;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Stavoren') {
                i = 37;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Twente') {
                i = 40;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Vlieland') {
                i = 42;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Vlissingen') {
                i = 42;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Volkel') {
                i = 44;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Voorschoten') {
                i = 45;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Westdopre') {
                i = 46;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Wijk aan Zee') {
                i = 48;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Woensdrecht') {
                i = 49;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else {
                i = 0;
                curTemp = statMea[i].temperature;
                temp.innerHTML = 'ERROR';
                console.log(temp.innerHTML);
            }
        }

        locatie.onchange = show;
        show();

        // for (var i = 0; i < statMea.length; i++) {
        //     if (curLocatie == curStation) {
        //         console.log('Hoi');
        //     } else {
        //         console.log('Doei');
        //     }
        // }
    });

// Welkoms bericht
let greetingEl = document.getElementById('welkom');
let today = new Date();
var curHr = today.getHours();

if (curHr < 12) {
    console.log('good morning');
    greetingEl.innerHTML = 'Goede ochtend!';
} else if (curHr < 18) {
    console.log('good afternoon');
    greetingEl.innerHTML = 'Goede middag!';
} else {
    console.log('good evening');
    greetingEl.innerHTML = 'Goede avond!';
}

// Weekdag
let curWeekDay = Date().substr(0, 3);
let weekDay01 = 'Dinsdag';
let weekDay02 = 'Woensdag';
let weekDay03 = 'Donderdag';
let weekDay04 = 'Vrijdag';
let weekDay05 = 'Zaterdag';
let pWD01 = document.querySelector('#day01');
let pWD02 = document.querySelector('#day02');
let pWD03 = document.querySelector('#day03');
let pWD04 = document.querySelector('#day04');
let pWD05 = document.querySelector('#day05');
// Forecast icons
var forecastImg = document.createElement('img');
forecastImg.src = forecastData.fivedayforecast[0].iconurl; // <-- Het weer icoon
var src = document.querySelector('#day01_icon');
src.appendChild(img);
function forecastIcons() {}
forecastIcons();

if (curWeekDay == 'Mon') {
    console.log('Maandag');
    curWeekDay = 'Maandag';
    weekDay01 = 'Dinsdag';
    weekDay02 = 'Woensdag';
    weekDay03 = 'Donderdag';
    weekDay04 = 'Vrijdag';
    weekDay05 = 'Zaterdag';
    /////
    pWD01.innerHTML = weekDay01.substr(0, 3);
    pWD02.innerHTML = weekDay02.substr(0, 3);
    pWD03.innerHTML = weekDay03.substr(0, 3);
    pWD04.innerHTML = weekDay04.substr(0, 3);
    pWD05.innerHTML = weekDay05.substr(0, 3);
} else if (curWeekDay == 'Tue') {
    console.log('Dinsdag');
    curWeekDay = 'Dinsdag';
    weekDay01 = 'Woensdag';
    weekDay02 = 'Donderdag';
    weekDay03 = 'Vrijdag';
    weekDay04 = 'Zaterdag';
    weekDay05 = 'Zondag';
    /////
    pWD01.innerHTML = weekDay01.substr(0, 3);
    pWD02.innerHTML = weekDay02.substr(0, 3);
    pWD03.innerHTML = weekDay03.substr(0, 3);
    pWD04.innerHTML = weekDay04.substr(0, 3);
    pWD05.innerHTML = weekDay05.substr(0, 3);
} else if (curWeekDay == 'Wed') {
    console.log('Woensdag');
    curWeekDay = 'Woensdag';
    weekDay01 = 'Donderdag';
    weekDay02 = 'Vrijdag';
    weekDay03 = 'Zaterdag';
    weekDay04 = 'Zondag';
    weekDay05 = 'Maandag';
    /////
    pWD01.innerHTML = weekDay01.substr(0, 3);
    pWD02.innerHTML = weekDay02.substr(0, 3);
    pWD03.innerHTML = weekDay03.substr(0, 3);
    pWD04.innerHTML = weekDay04.substr(0, 3);
    pWD05.innerHTML = weekDay05.substr(0, 3);
} else if (curWeekDay == 'Thu') {
    console.log('Donderdag');
    curWeekDay = 'Donderdag';
    weekDay01 = 'Vrijdag';
    weekDay02 = 'Zaterdag';
    weekDay03 = 'Zondag';
    weekDay04 = 'Maandag';
    weekDay05 = 'Dinsdag';
    /////
    pWD01.innerHTML = weekDay01.substr(0, 3);
    pWD02.innerHTML = weekDay02.substr(0, 3);
    pWD03.innerHTML = weekDay03.substr(0, 3);
    pWD04.innerHTML = weekDay04.substr(0, 3);
    pWD05.innerHTML = weekDay05.substr(0, 3);
} else if (curWeekDay == 'Fri') {
    console.log('Vrijdag');
    curWeekDay = 'Vrijdag';
    weekDay01 = 'Zaterdag';
    weekDay02 = 'Zondag';
    weekDay03 = 'Maandag';
    weekDay04 = 'Dinsdag';
    weekDay05 = 'Woensdag';
    /////
    pWD01.innerHTML = weekDay01.substr(0, 3);
    pWD02.innerHTML = weekDay02.substr(0, 3);
    pWD03.innerHTML = weekDay03.substr(0, 3);
    pWD04.innerHTML = weekDay04.substr(0, 3);
    pWD05.innerHTML = weekDay05.substr(0, 3);
} else if (curWeekDay == 'Sat') {
    console.log('Zaterdag');
    curWeekDay = 'Zaterdag';
    weekDay01 = 'Zondag';
    weekDay02 = 'Maandag';
    weekDay03 = 'Dinsdag';
    weekDay04 = 'Woensdag';
    weekDay05 = 'Donderdag';
    /////
    pWD01.innerHTML = weekDay01.substr(0, 3);
    pWD02.innerHTML = weekDay02.substr(0, 3);
    pWD03.innerHTML = weekDay03.substr(0, 3);
    pWD04.innerHTML = weekDay04.substr(0, 3);
    pWD05.innerHTML = weekDay05.substr(0, 3);
} else {
    console.log('Zondag');
    curWeekDay = 'Zondag';
    weekDay01 = 'Maandag';
    weekDay02 = 'Dinsdag';
    weekDay03 = 'Woensdag';
    weekDay04 = 'Donderdag';
    weekDay05 = 'Vrijdag';
    /////
    pWD01.innerHTML = weekDay01.substr(0, 3);
    pWD02.innerHTML = weekDay02.substr(0, 3);
    pWD03.innerHTML = weekDay03.substr(0, 3);
    pWD04.innerHTML = weekDay04.substr(0, 3);
    pWD05.innerHTML = weekDay05.substr(0, 3);
}
