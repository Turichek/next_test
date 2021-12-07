import { Typography,Box, Grid } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { AnimeType } from "../types";

type animeInfoProps = {
    anime: AnimeType,
}

const AnimeInfo: FC<animeInfoProps> = ({ anime }) => {
    const { canonicalTitle, description, ageRatingGuide, episodeCount, episodeLength, posterImage, startDate } = anime.attributes;

    return (
        <>
            <Grid container justifyContent='space-between' columns={{xl: 13}} sx={{my:4}}>
                <Grid item container justifyContent='center' xl={4}>
                    <Box>
                        <Image src={posterImage} width={320} height={500} />
                    </Box>
                </Grid>
                <Grid item container xl={8}>
                    <Typography sx={{width: 1, textAlign: 'center'}} variant='h2'>{canonicalTitle}</Typography>
                    <Box sx={{mt:3}}>
                        <Typography variant='h6'>Дата начала: {startDate}</Typography>
                        <Typography variant='h6'>Кол-во серий: {episodeCount}</Typography>
                        <Typography variant='h6'>Длительность серий: {episodeLength} мин.</Typography>
                        <Typography variant='h6'>Возрастной рейтинг: {ageRatingGuide}</Typography>
                        <Typography sx={{mt:5}} variant='h6'>Описание: {description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AnimeInfo;