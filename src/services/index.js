class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }
}