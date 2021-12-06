import { Container } from "@mui/material";
import { ReactNode, FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

type layoutProps = {
    children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout;