export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _imageBase = "https://starwars-visualguide.com/assets/img";

    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    }

    _transformPlanet = planet => {
        return {
          id: this._extractId(planet),
          name: planet.name,
          diameter: planet.diameter,
          gravity: planet.gravity,
          orbitalPeriod: planet.orbital_period,
          population: planet.population,
          terrain: planet.terrain,
          climate: planet.climate,
          rotationPeriod: planet.rotation_period
        };
      };
    
      _transformStarship = starship => {
        return {
          id: this._extractId(starship),
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.cost_in_credits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity
        };
      };
    
      _transformPerson = person => {
        return {
          id: this._extractId(person),
          name: person.name,
          gender: person.gender,
          birthYear: person.birth_year,
          eyeColor: person.eye_color
        };
      };
}