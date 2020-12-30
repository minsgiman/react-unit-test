import { WlaCountriesResponse } from './models/countries-response.interface';

async function getCountries(locale: string): Promise<any> {
  const response = await fetch('xxx');
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const countriesService = { getCountries };