import React from 'react';
import {Container} from "@mui/system";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {contStyles, linkStyles} from "./Footer.styles"

const Footer = () => {
    return (
        <footer style={{backgroundColor: "#333"}}>
            <Container maxWidth="sm" sx={contStyles}>
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} Arsaide Mega Company
                </Typography>
                <Typography variant="body2" align="center" >
                    Built with <span role="img" aria-label="love">❤️</span> by Arsaide
                </Typography>
                <Typography variant="body2" align="center">
                    <Link color="inherit" href="https://github.com/Arsaide" style={linkStyles}>
                        GitHub
                    </Link>{' '}|{' '}
                    <Link color="white" href="https://t.me/arsaide" style={linkStyles}>
                        Telegram
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;