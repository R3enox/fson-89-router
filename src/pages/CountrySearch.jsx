import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [newError, setNewError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [region, setRegion] = useState('');
  const [searchParams, setSearchParams] = useSearchParams()


  useEffect(() => {
    const region = searchParams.get('query')
    if(!region) return
    const fetchSeachedRegion = async () => {
      setIsLoading(true);
      try {
        const data = await fetchByRegion(region);
        setCountries(data)
      } catch (error) {
        setNewError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSeachedRegion();
  }, [searchParams]);

  console.log(countries);
  return (
    <Section>
      <Container>
        <SearchForm setRegion={setSearchParams} />
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
