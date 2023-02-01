import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function JobBank() {

    const [content, setcontent] = useState([
        {
            text: "No doubt being unemployed and not finding a suitable job according to the capability level is a headache for everyone these days. They are not given a proper series of platform through which they can apply for the jobs or even a platform that can eventually help them in getting proper choices of jobs with a good earning. But you don’t need to worry about because we are serving you with this option with our jobs bank service."
        },
        {
            text: "Through our jobs bank service we are helping so many jobless people to become self-sufficient. We would make you offer a list down of some best job options with the good earning opportunity and legally certified too."
        }
    ])  

    return (
        <Stack
            paddingY={'80px'}
        >
            <Container
                maxW={'7xl'}
            >
                <Stack
                    pb={12}
                >
                    <SectionHeading width={'100%'} smallHeading={"Future Projects"} mainHeading={'Job Bank'} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                {
                    content.map((v, i) => {
                        return (
                            <Text
                                key={i}
                                paddingY={2}
                                maxW={'6xl'}
                                marginX={'auto'}
                                fontSize={'16px'}
                                color={'#748188'}
                            >{v.text}</Text>
                        )
                    })
                }
            </Container>
        </Stack>
    )
}
