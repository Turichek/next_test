import { GetServerSideProps } from 'next';
import { FC } from 'react';
import AnimeInfo from '../components/AnimeInfo';
import { ChangeDataToSingle } from '../components/helpers/toData';
import Layout from '../components/Layout';
import { AnimeType } from '../types';

type animeTypeProps = {
    anime: AnimeType,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params;
    let anime = await fetch(`https://kitsu.io/api/edge/anime/${id}`)
        .then(response => response.json());

    anime = ChangeDataToSingle(anime.data);

    return {
        props: { anime }
    }
}

const Anime: FC<animeTypeProps> = ({ anime }) => {
    return (
        <Layout>
            <main>
                <AnimeInfo anime={anime} />
            </main>
        </Layout>
    )
}

export default Anime;
