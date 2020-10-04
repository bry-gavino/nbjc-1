import Layout from 'components/Layout';
import { Button, CircularProgress } from '@material-ui/core';
import styles from '../styles/Home.module.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';


const Home: React.FC = () => {
  return (
    <Layout title="NBJC Home">
      <h1>Home</h1>
      <p>FRED IS THE IMPOSTER!!!!!</p>
      <Button variant="contained" color="primary">
        Hello
      </Button>
      <CircularProgress />
    </Layout>
  );
};

export default Home;
