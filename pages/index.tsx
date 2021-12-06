import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import { FC } from 'react';

const Home:FC = () => {
  return (
    <Layout>
      <main>
        <Typography variant='h1'>Приветики</Typography>
      </main>
    </Layout>
  )
}

export default Home;
