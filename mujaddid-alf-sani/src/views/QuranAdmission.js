import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function QuranAdmission() {

    const [content, setcontent] = useState([
        {
            text: "With every increasing number of customers all over the globe, our online Quran admissions takes special measures to ensure that the Quran learning process is effective so that after every lesson the student leaves with an increased and better knowledge of Quran. We have experienced and qualified teachers who play a pivotal role in the learning process. We comprises of a single teacher giving Quran lessons to a single student thus ensuring devoted attention for better learning. The class timings are extremely flexible and the students can schedule the classes according to their convenience. We make sure the Quran learning process is as interactive as possible."
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
                    <SectionHeading width={'100%'} smallHeading={"Future Projects"} mainHeading={'Online Quran Admission'} marginPosition={'auto'} textAlignment={'center'} />
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
