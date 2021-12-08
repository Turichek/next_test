import { Grid } from '@mui/material';
import Layout from '../components/Layout';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import { ChangeDataToArr } from '../components/helpers/toData';
import { AnimeType } from '../types';
import Card from '../components/Card';

export const getStaticProps: GetStaticProps = async () => {
  let arr = await fetch("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0")
    .then(response => response.json());

  arr = ChangeDataToArr(arr.data);

  return {
    props: { animes: arr }
  }
}

type animesTypeProps = {
  animes: AnimeType[],
}

const Home: FC<animesTypeProps> = ({ animes }) => {
  return (
    <Layout>
      <main>
        <Grid container justifyContent='space-between' columns={{ xl: 13 }}>
          {
            animes && animes.map(item =>
              <Card key={item.id} item={item} />
            )
          }
        </Grid>
      </main>
    </Layout>
  )
}

export default Home;
