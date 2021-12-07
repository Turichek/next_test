import { List, ListItem } from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
    const navigation = [
        { id: 1, path: '/', title: 'Home' },
        { id: 2, path: '/contacts', title: 'Contacts' },
    ]

    return (
        <List sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: red[100], p: 0 }}>
            {
                navigation.map((item) =>
                    <Link key={item.id} href={item.path}>
                        <ListItem sx={{ width: 0.08, p: 2, display: 'flex', justifyContent: 'center', ':hover': { backgroundColor: red[200] } }}>
                            <a>{item.title}</a>
                        </ListItem>
                    </Link>
                )
            }
        </List >
    )
}

export default Navbar;