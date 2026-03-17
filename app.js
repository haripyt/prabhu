/* ================= MAP ================= */

var map = L.map('map').setView([13.0827,80.2707],12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


/* ================= BUS ICON ================= */

var busIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41]
});


/* ================= AREAS ================= */

const chennaiAreas = {

  /* ================= NORTH CHENNAI ================= */

  "Vyasarpadi":[13.1182,80.2581],
  "MKB Nagar":[13.1258,80.2550],
  "Perambur":[13.1213,80.2322],
  "Kolathur":[13.1210,80.2150],
  "Madhavaram":[13.1480,80.2300],
  "Madhavaram Milk Colony":[13.1550,80.2250],
  "Manali":[13.1643,80.2666],
  "Manali New Town":[13.1700,80.2650],
  "Tondiarpet":[13.1270,80.2970],
  "Washermanpet":[13.1074,80.2934],
  "Royapuram":[13.1130,80.2950],
  "Ennore":[13.2143,80.3203],
  "Ennore Port":[13.2150,80.3250],
  "Kodungaiyur":[13.1350,80.2500],
  "Pulianthope":[13.0985,80.2600],
  "Purasaiwalkam":[13.0883,80.2645],
  "Otteri":[13.0890,80.2480],
  "Kilpauk":[13.0827,80.2410],
  "Ayanavaram":[13.0980,80.2330],
  "Peravallur":[13.1160,80.2320],
  "Villivakkam":[13.1096,80.2060],
  "Korattur":[13.1103,80.1840],
  "Red Hills":[13.1865,80.1999],
  "Kathivakkam":[13.2160,80.3180],
  "Thiruvottiyur":[13.1590,80.3040],

  /* ================= CENTRAL CHENNAI ================= */

  "Egmore":[13.0736,80.2610],
  "Chetpet":[13.0766,80.2414],
  "Nungambakkam":[13.0604,80.2496],
  "Teynampet":[13.0446,80.2485],
  "Royapettah":[13.0500,80.2642],
  "Triplicane":[13.0587,80.2756],
  "Mylapore":[13.0339,80.2697],
  "Mandaveli":[13.0291,80.2670],
  "Alwarpet":[13.0397,80.2556],
  "Gopalapuram":[13.0517,80.2582],
  "Anna Salai":[13.0600,80.2490],
  "Parrys":[13.0912,80.2837],
  "Broadway":[13.0878,80.2853],
  "Chintadripet":[13.0756,80.2691],
  "Chepauk":[13.0623,80.2794],
  "Santhome":[13.0335,80.2770],
  "Foreshore Estate":[13.0220,80.2750],
  "Park Town":[13.0873,80.2710],
  "Thousand Lights":[13.0560,80.2580],
  "Mount Road":[13.0604,80.2496],

  /* ================= WEST CHENNAI ================= */

  "Anna Nagar":[13.0850,80.2101],
  "Anna Arch":[13.0822,80.2123],
  "Mogappair":[13.0837,80.1865],
  "Mogappair West":[13.0840,80.1750],
  "Nolambur":[13.0825,80.1675],
  "Ambattur":[13.1143,80.1548],
  "Ambattur Estate":[13.1050,80.1550],
  "Avadi":[13.1067,80.0967],
  "Padi":[13.0950,80.1890],
  "Koyambedu":[13.0696,80.2038],
  "Arumbakkam":[13.0732,80.2110],
  "Vadapalani":[13.0500,80.2121],
  "Ashok Nagar":[13.0373,80.2120],
  "K.K. Nagar":[13.0410,80.1987],
  "Porur":[13.0359,80.1582],
  "Valasaravakkam":[13.0401,80.1778],
  "Maduravoyal":[13.0508,80.1627],
  "Poonamallee":[13.0470,80.0940],
  "Thiruverkadu":[13.0735,80.1120],
  "Iyyappanthangal":[13.0380,80.1430],
  "Ramapuram":[13.0310,80.1900],
  "Mugalivakkam":[13.0210,80.1700],
  "Kattupakkam":[13.0380,80.1350],

  /* ================= SOUTH CHENNAI ================= */

  "Guindy":[13.0105,80.2209],
  "Saidapet":[13.0234,80.2280],
  "Nandanam":[13.0325,80.2425],
  "Adyar":[13.0067,80.2575],
  "Besant Nagar":[13.0003,80.2662],
  "Thiruvanmiyur":[12.9830,80.2594],
  "Velachery":[12.9791,80.2206],
  "Taramani":[12.9855,80.2423],
  "Perungudi":[12.9704,80.2446],
  "Kandanchavadi":[12.9718,80.2467],
  "Pallikaranai":[12.9400,80.2080],
  "Madipakkam":[12.9653,80.2014],
  "Nanganallur":[12.9779,80.1884],
  "Keelkattalai":[12.9640,80.1962],
  "Meenambakkam":[12.9941,80.1709],
  "St Thomas Mount":[13.0030,80.1930],
  "Palavakkam":[12.9520,80.2570],
  "Neelankarai":[12.9493,80.2537],
  "Injambakkam":[12.9165,80.2477],
  "Kottivakkam":[12.9682,80.2590],

  /* ================= OMR / IT CORRIDOR ================= */

  "Sholinganallur":[12.9010,80.2279],
  "Navalur":[12.8453,80.2260],
  "Siruseri":[12.8220,80.2260],
  "Semmencherry":[12.8821,80.2275],
  "Karapakkam":[12.9140,80.2290],
  "OMR":[12.9050,80.2279],
  "Perumbakkam":[12.9030,80.2080],
  "Medavakkam":[12.9170,80.1920],
  "Madambakkam":[12.9115,80.1575],
  "Selaiyur":[12.9090,80.1420],
  "Tambaram":[12.9249,80.1275],
  "Tambaram East":[12.9250,80.1400],
  "Tambaram West":[12.9200,80.1200],
  "Chromepet":[12.9516,80.1462],
  "Pallavaram":[12.9676,80.1491],
  "Anakaputhur":[12.9820,80.1550],
  "Pozhichalur":[12.9750,80.1550],

  /* ================= EXTENDED BELT ================= */

  "Guduvanchery":[12.8428,80.0600],
  "Urapakkam":[12.8612,80.0696],
  "Vandalur":[12.8913,80.0800],
  "Perungalathur":[12.9000,80.1000],
  "Maraimalai Nagar":[12.8210,80.0450],
  "Chengalpattu":[12.6841,79.9836],
  "Kelambakkam":[12.7950,80.2190],
  "Thoraipakkam":[12.9410,80.2360],
  "ECR":[12.9400,80.2600],
  "Mahabalipuram":[12.6269,80.1920]

};


let fromSelect=document.getElementById("from");
let toSelect=document.getElementById("to");

for(let area in chennaiAreas){
  fromSelect.innerHTML+=`<option>${area}</option>`;
  toSelect.innerHTML+=`<option>${area}</option>`;
}

/* ================= GLOBALS ================= */

let routeCoords=[];
let routeLine;
let travelledLine;
let stops=[];
let bus;
let routeNumber="";

let velocity=0;
let maxSpeed=14;
let acceleration=0.15;
let braking=0.25;
let trafficFactor=1;

let fuel=100;
let passengers=15;
let totalDistance=0;

/* ================= START ROUTE ================= */

async function startRoute(){

  clearMap();

  let from=chennaiAreas[fromSelect.value];
  let to=chennaiAreas[toSelect.value];

  routeNumber="MTC "+Math.floor(Math.random()*200);

  let url=`https://router.project-osrm.org/route/v1/driving/${from[1]},${from[0]};${to[1]},${to[0]}?overview=full&geometries=geojson`;

  let res=await fetch(url);
  let data=await res.json();

  routeCoords=data.routes[0].geometry.coordinates.map(c=>[c[1],c[0]]);

  /* Future Route - Dashed */
  routeLine=L.polyline(routeCoords,{
    color:"#bbdefb",
    weight:6,
    dashArray:"10 8"
  }).addTo(map);

  /* Travelled Route - Glowing */
  travelledLine=L.polyline([],{
    color:"#0d47a1",
    weight:7,
    className:"glow"
  }).addTo(map);

  map.fitBounds(routeLine.getBounds());

  calculateTotalDistance();
  generateStops();
  createBus();
}

/* ================= STOP DISTRIBUTION ================= */

function generateStops(){

  stops=[];
  let totalStops=10;

  for(let i=0;i<totalStops;i++){
    let index=Math.floor((i/(totalStops-1))*(routeCoords.length-1));
    let coord=routeCoords[index];

    let marker=L.circleMarker(coord,{
      radius:6,
      color:"#ff3d00",
      fillOpacity:1
    }).addTo(map);

    marker.stopIndex=index;
    stops.push(marker);
  }
}

/* ================= CREATE BUS ================= */

function createBus(){
  
  bus = {
    marker: L.marker(routeCoords[0]).addTo(map),
    segment: 0,
    progress: 0,
    waiting: false
  };

  bus.marker.setZIndexOffset(1000);

  velocity = 0;
  fuel = 100;
  passengers = 15;

  animateBus();
}

/* ================= ENGINE ================= */

function animateBus(){

  function move(){

    if(!routeCoords.length) {
      requestAnimationFrame(move);
      return;
    }

    // Only stop if actually at final point
    if(bus.segment >= routeCoords.length - 1){
      bus.segment = routeCoords.length - 2;
    }

    let start = routeCoords[bus.segment];
    let end   = routeCoords[bus.segment+1];

    if(!start || !end){
      requestAnimationFrame(move);
      return;
    }

    let distToNextStop = distanceToNextStop();

    trafficFactor = (Math.random()<0.002) ? 0.4 : 1;

    if(distToNextStop < 40){
      velocity -= braking;
    } else {
      velocity += acceleration;
    }

    velocity = Math.max(0, Math.min(maxSpeed*trafficFactor, velocity));

    if(distToNextStop < 8 && !bus.waiting){
      bus.waiting = true;
      velocity = 0;

      passengers += Math.floor(Math.random()*5-2);
      passengers = Math.max(0, Math.min(50, passengers));

      setTimeout(()=>bus.waiting=false,2000);
    }

    let segmentLength = calculateDistance(start,end);
    let moveDistance  = velocity * 0.016;

    bus.progress += moveDistance/segmentLength;

    if(bus.progress >= 1){
      bus.progress = 0;
      bus.segment++;
    }

    let lat = start[0] + (end[0]-start[0])*bus.progress;
    let lng = start[1] + (end[1]-start[1])*bus.progress;

    bus.marker.setLatLng([lat,lng]);

    fuel -= 0.02;
    fuel = Math.max(0,fuel);

    updateTravelledPath(lat,lng);
    rotateBus(start,end);
    updateLiveSheet();

    requestAnimationFrame(move);
  }

  move();
}

/* ================= TRAVELLED PATH ================= */

function updateTravelledPath(lat,lng){

  let travelledCoords=routeCoords.slice(0,bus.segment);
  travelledCoords.push([lat,lng]);

  travelledLine.setLatLngs(travelledCoords);
}

/* ================= UI ================= */

function updateLiveSheet(){

  let kmh=(velocity*3.6).toFixed(1);
  let completion=((bus.segment/routeCoords.length)*100).toFixed(1);

  document.getElementById("sheetContent").innerHTML=`

    <h3>${routeNumber} <span class="live-dot"></span></h3>

    <div class="speedometer">
      <div class="speed-needle" 
        style="transform:rotate(${velocity*12}deg)">
      </div>
    </div>

    <p><b>Speed:</b> ${kmh} km/h</p>

    <div class="progress-container">
      <div class="progress-bar" style="width:${completion}%"></div>
    </div>

    <p><b>Completion:</b> ${completion}%</p>

    <p><b>Passengers:</b> ${passengers}/50</p>

    <div class="fuel-container">
      <div class="fuel-bar" style="width:${fuel}%"></div>
    </div>

    <p><b>Fuel:</b> ${fuel.toFixed(0)}%</p>
  `;
}

/* ================= UTIL ================= */

function distanceToNextStop(){

  let nextStop=stops.find(s=>s.stopIndex>bus.segment);
  if(!nextStop) return 999;

  return calculateDistance(
    routeCoords[bus.segment],
    routeCoords[nextStop.stopIndex]
  );
}

function rotateBus(start,end){

  let angle=Math.atan2(
    end[0]-start[0],
    end[1]-start[1]
  )*180/Math.PI;

  let el=bus.marker.getElement();
  if(el){
    el.style.transform=
      `translate(-50%,-50%) rotate(${angle}deg)`;
  }
}

function calculateTotalDistance(){
  totalDistance=0;
  for(let i=0;i<routeCoords.length-1;i++){
    totalDistance+=calculateDistance(routeCoords[i],routeCoords[i+1]);
  }
}

function calculateDistance(a,b){
  let dx=(a[0]-b[0])*111000;
  let dy=(a[1]-b[1])*111000;
  return Math.sqrt(dx*dx+dy*dy);
}

function swapLocations(){
  let temp=fromSelect.value;
  fromSelect.value=toSelect.value;
  toSelect.value=temp;
}

function clearMap(){
  if(routeLine) map.removeLayer(routeLine);
  if(travelledLine) map.removeLayer(travelledLine);
  if(bus && bus.marker) map.removeLayer(bus.marker);
  stops.forEach(s=>map.removeLayer(s));
  stops=[];
}
