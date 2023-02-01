import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Ration() {

    const [content, setcontent] = useState([
        {
            text: "The Prophet Muhammad (peace be upon him) said:"
        },
        {
            text: "“Feed the hungry, visit the sick and set free the captives.”– Sahih Al-Bukhari, Volume 7, Hadith 552"
        },
        {
            text: "Our center has been serving healthy meals to the poor and deserving and those who cannot afford to buy food ––with dignity and upholding their self-respect. Our trust took upon itself this responsibility for providing free cooked meals to indigent citizens of Pakistan. For this noble cause, we make sure healthy and hygienic food is served with the supervision of complete team which works around the clock. We solely depend on public donations as it cost millions to feed starving people in large numbers two times a day. This let us to continue with its free-of-cost food program."
        },
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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Ration'} marginPosition={'auto'} textAlignment={'center'} />
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
