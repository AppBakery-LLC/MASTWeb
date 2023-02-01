import { Button, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function YellowButton({ text, icon, url, ...rest }) {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => navigate(`${url}`)}
            style={{ ...rest }}
        >
            <Text marginRight={'10px'}>{text}</Text>
            <Icon as={icon} />
        </Button>
    )
}
