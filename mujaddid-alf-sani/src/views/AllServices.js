import { Stack } from '@chakra-ui/react'
import React from 'react'
import AllServicesList from '../components/Services/AllServicesList'

export default function AllServices() {
    return (
        <Stack
            paddingY={{ base: '40px', md: '80px' }}
        >
            <AllServicesList />
        </Stack>
    )
}
