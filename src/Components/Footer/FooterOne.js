import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "@/Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';

//Logo
// import Logo from "@/Assets/header/logo.png";

//Styles
import styles from "@/Styles/Footer/FooterOne.styles";
import { LinkedIn } from "@mui/icons-material";

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "30px" }}>
                <Image src={'/avatars/header/logo.png'} width={287} height={100} alt="Logo" />
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <MapIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                    Gulberg 3 Lahore , Big City Plaza , Floor M1 Office no 82
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon />
                </Box>
                <Box>
                    <Link href="mailto:info@codestation21.com">
                        <Link href={'#'}>
                            <Typography variant="body1" component="p">
                                Nextwavestech@gmail.com
                            </Typography>
                        </Link> 
                     </Link> 
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                    <Link href="tel:+8801552938771">
                        <Link href={'#'}>
                            <Typography variant="body1" component="p">
                                +880 1552-938771
                            </Typography>
                        </Link> 
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://github.com/codestation21">
                    <Link href={'#'} >
                        <ButtonBase>
                            <GitHubIcon />
                        </ButtonBase>
                    </Link>
                 </Link> 
             <Link href="https://www.facebook.com/codestation21">
                    <Link href={'#'} >
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </Link>
                 </Link>  
             <Link href="https://twitter.com/codestation21">
                   <Link href={'#'} >
                        <ButtonBase>
                            <TwitterIcon />
                        </ButtonBase>
                    </Link>
             </Link> 
               <Link href="https://behance.com/codestation21"> 
                    <Link href={'#'} >
                        <ButtonBase>
                            <LinkedIn />
                        </ButtonBase>
                    </Link> 
                </Link> 
            </Stack>
        </Box>
    );
};
export default FooterOne;