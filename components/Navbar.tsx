import { List, ListItem } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';


const Navbar: FC = () => {
    const navigation = [
        { id: 1, path: '/', title: 'Home' },
        { id: 2, path: '/contacts', title: 'Contacts' },
    ]

    return (
        <List sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {
                navigation.map((item) =>
                    <ListItem sx={{width: 0.08, dispaly: 'flex', justifyContent: 'center'}} key={item.id}>
                        <Link href={item.path}>
                            <a>{item.title}</a>
                        </Link>
                    </ListItem>
                )
            }
        </List>
    )
}

export default Navbar;