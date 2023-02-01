import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function University() {

    const [content, setcontent] = useState([
        {
            text: "In the future projects, we often pertain ahead in striving to build high quality and best university education center for the deserving students. Our primary aim over the university establishment is all about imparting the quality education in Science and Technology and the promotion of applied and basic research. Our mission is to equip our students with world-class education, so they become compassionate leaders, independent thinkers, and creative problem solvers of tomorrow. Student’s selection will be done on the merit basis criteria within the required course. Our welfare trust has been focused on making education accessible to the poor and destitute. It believes that every child deserves a chance to be educated; not only does it promote learning in terms of the regular curriculum, it also fine-tunes students to become productive and efficient human beings in all walks of life."
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
                    <SectionHeading width={'100%'} smallHeading={"Future Projects"} mainHeading={'University'} marginPosition={'auto'} textAlignment={'center'} />
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
