import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Istekhara() {

    const [content, setcontent] = useState([
        {
            text: "Our trust needs to illuminate the spirits of individuals notwithstanding illuminating their lives. To do as such, aggregate duas and insightful social affairs are held every month to help make religious mindfulness among individuals. Various individuals assemble to tune in and implore with us."
        },
        {
            text: "Besides, individuals regularly look for profound direction for their different issues, religious, common or individual. Our religious scholar’s gives answers for individuals’ issues through the Istakhara service with the goal that they may take better choices in their issues. Individuals can profit these administrations through messages, phone, letters or face to face."
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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Online Taweezat / Istekhara'} marginPosition={'auto'} textAlignment={'center'} />
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
