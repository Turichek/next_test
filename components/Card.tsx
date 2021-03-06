import { Typography, Box, Grid, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "node:constants";
import { FC } from "react";
import { AnimeType } from "../types";

type animeInfoProps = {
    item?: AnimeType,
}

const Card: FC<animeInfoProps> = ({ item }) => {
    return (
        <Grid sx={{ my: 2 }} item xl={3}>
            <Link href={`/${item?.id}`}>
                <Paper elevation={4}>
                    <Box sx={{ position: 'relative', height: '400px' }}>
                        {
                            item?.attributes.posterImage ? <Image src={item?.attributes.posterImage} priority alt='...' layout='fill' /> : null
                        }
                    </Box>
                    <Typography variant='subtitle1' sx={{ p: 3, textAlign: 'center' }}>{item?.attributes.canonicalTitle}</Typography>
                </Paper>
            </Link>
        </Grid>
    )
}

export default Card;