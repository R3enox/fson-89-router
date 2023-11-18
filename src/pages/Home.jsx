import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [newError, setNewError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setNewError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {newError && <Heading>{newError}</Heading>}
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
