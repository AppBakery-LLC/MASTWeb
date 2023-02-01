import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Adoption() {

    const [content, setcontent] = useState([
        {
            text: "Sahl ibn Sa’d reported: The Prophet, peace and blessings be upon him, said:"
        },
        {
            text: "“Myself and the caretaker of an orphan will be in Paradise like this,” and he held his two fingers together."
        },
        {
            text: "Mostly these abandoned newborn babies are provided to the childless couples, who in accordance with our own policies, after ensuring that they can be trusted and exactly suitable for this noble cause. Just as after completely going through the background of the couples, and undertaking a rigorous screening process, we decide if the couple or the family is precisely suitable for adopting the baby. Adoption can be a gratifying experience for anyone longing to have a child. Whether you are a single parent or a couple wanting to adopt a child, it is wise to seek legal help of an expert legal representative to make your adoption process much simpler."
        },
        {
            text: "We believe in providing a safe home to the little angels!"
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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Adoption'} marginPosition={'auto'} textAlignment={'center'} />
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
