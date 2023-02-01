import { Stack } from '@chakra-ui/react'
import React from 'react'
import AllProjectsList from '../components/Services/AllProjectsList'

export default function AllServices() {
    return (
        <Stack
            paddingY={{ base: '40px', md: '80px' }}
        >
            <AllProjectsList />
        </Stack>
    )
}
