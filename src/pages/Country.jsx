import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [newError, setNewError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { countryId } = useParams();
  const location = useLocation()
  const backBtn = location.state?.from??"/"


  useEffect(() => {
    if (!countryId) return;

    const fetchByCountry = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCountry(countryId);

        setCountries(data);
      } catch (error) {
        setNewError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchByCountry();
  }, [countryId]);
console.log(location);
  return (
    <Section>
      <Container>
        <Link to={backBtn}>go back</Link>
        <CountryInfo
          flag={countries.flag}
          capital={countries.capital}
          country={countries.country}
          languages={countries.languages}
          population={countries.population}
        />
      </Container>
    </Section>
  );
};
