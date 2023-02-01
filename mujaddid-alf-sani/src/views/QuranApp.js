import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function QuranApp() {

    const [content, setcontent] = useState([
        {
            text: "Beautify your life with the blessing of reading and listening to the Quran on the go with an amazing Quran app. It offers complete Quran in the elegant Uthmanic and IndoPak script with multiple audio recitations and translations which makes it a must have app for every Muslim. It helps with memorization through repetition of Ayah, Surah, number of repetitions, interval and recitation speed. In this app user will get to know the complete Introduction of each Surah (Chapter) along with the benefits and virtues of reciting a particular Surah and you can zoom the content as well according to your need."
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
                    <SectionHeading width={'100%'} smallHeading={"Future Projects"} mainHeading={'Quran App'} marginPosition={'auto'} textAlignment={'center'} />
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
