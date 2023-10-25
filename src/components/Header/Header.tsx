import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { CiShoppingCart, CiUser } from 'react-icons/ci'
import Logo from '../../assets/icons/logo.png'

export default function Header() {
    return (
        <Box p={3} bg='green.100' >
                <Flex align='center' justify='space-between'>
                    <Link to='/' className="logo"><img width='25' height='25' src={Logo} alt="logo" />GreenAwry</Link>

                    <Navbar />

                    <Flex>
                        <Link to='/profile'></Link>
                        <Link to='/cart'> <CiShoppingCart size={30} /> </Link>
                        <Link to='/cart'> <CiUser size={30} /> </Link>
                    </Flex>
                </Flex>
        </Box>
    )
}