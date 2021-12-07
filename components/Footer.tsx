import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer>
            <Typography sx={{ textAlign:'center', backgroundColor: red[100]}} variant='h6'>Created by Turik</Typography>
        </footer>
    )
}

export default Footer;