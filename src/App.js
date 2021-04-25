import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_RATES = gql`
    {
      rates(currency:"USD"){
        currency
        rate
      }
    }
`
const App = () => {
  const { data, loading, error } = useQuery(GET_RATES);
  if (loading) return <p>Loading..!</p>
  if (error) return <p>Whoops ... something is wrong..!</p>
  return (
    <div style={divStyle}>
      {
        data?.rates.map(item => <span key={item?.currency} style={style}>{item?.currency + " " + item?.rate}</span>)
      }
    </div>
  );
}

export default App;

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "10px"
}
const style = {
  display: 'inline-block',
  width: "240px",
  margin: "5px",
  backgroundColor: "red",
  borderRadius: "3px"
}