import countries from "world-countries";


export default function getCountries() {
    const countriesData = countries.map(country=>{
        return {
            name: country.name.common,
            label: country.flag,
            // latlng: country.latlng,
            // status: country.status
        }
    })
    return countriesData
}
