import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function City() {

    const [content, setcontent] = useState([
        {
            text: "Our welfare trust has so many future projects to talk about, and amongst those prominent projects, we have the city establishment as well. We are aiming to build a city for the citizens of Pakistan through which they can acquire affordable housing options to live a comfortable lifestyle. Although the project of the city is not yet started we are making some hard efforts to start it as soon as possible to let you be the first one to make yourself part of our housing city scheme. Are you ready to make your dream house in our city project?"
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
                    <SectionHeading width={'100%'} smallHeading={"Future Projects"} mainHeading={'City'} marginPosition={'auto'} textAlignment={'center'} />
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
