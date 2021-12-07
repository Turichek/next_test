import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const Error: FC = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => { router.push('/') }, 3000);
    }, [])

    return (
        <Container sx={{ mt: 10 }}>
            <Typography variant="h1">Error 404</Typography>
            <Typography variant="h4">Something wrong...</Typography>
        </Container>
    )
}

export default Error;