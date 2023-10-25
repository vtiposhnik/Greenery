import { Flex } from '@chakra-ui/react'
import { menu_items } from './MenuItems'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <Flex gap={5}>
                    {menu_items.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url}> {item.title} </Link>
                            </li>
                        )
                    })}
                </Flex>
            </ul>
        </nav>
    )
}