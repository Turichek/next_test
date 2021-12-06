import { Container, Typography } from '@mui/material';
import { FC } from 'react';

const Error: FC = () => {
    return (
        <Container>
            <Typography variant="h1">Error 404</Typography>
            <Typography variant="h4">Something wrong...</Typography>
        </Container>
    )
}

export default Error;