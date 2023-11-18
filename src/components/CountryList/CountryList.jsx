import { Grid, GridItem } from 'components';
import { NavLink, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {

  const location = useLocation()
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <NavLink state={{from:location}} to={`/country/${id}`}><img src={flag} alt={country} /></NavLink>
        </GridItem>
      ))}
    </Grid>
  );
};
