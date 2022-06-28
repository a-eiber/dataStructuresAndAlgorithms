const Queue = require('./Queue');

const load = flights => {
  const runway = new Queue(3);

  flights.forEach(flight => {
    if (!runway.hasRoom()) return console.log('Runway full!');
    runway.enqueue(flight);
    console.log(`${flight} taxi to runway.`);
  });
  return runway;
};

const clear = runway => {
  while (!runway.isEmpty()) {
    const cleared = runway.dequeue();
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

const flights = [
  'Botswana Bird flight #345',
  'Singapore Skies flight #890',
  'Mexico Mirage flight #234',
  'Greenland Flying Seals flight #567',
];

// Enqueue runway with planes
const departing = load(flights);
// Clear each plane to takeoff
clear(departing);
