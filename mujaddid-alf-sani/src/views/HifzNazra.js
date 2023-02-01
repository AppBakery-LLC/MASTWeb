import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function HifzNazra() {

    const [content, setcontent] = useState([
        {
            text: "According to a saying of the Holy Prophet (P.B.U.H) the best thing that a father gives to his children is good education and training. All parents want to give their children the best education but some parents due to their economic and financial situation are unable to do so. But Mujaddid Alf Sani with its donors help has taken the initiative of Parents responsible for training of their children while Mujaddid Alf Sani is responsible for their Education."
        },
        {
            text: "Mujaddid Alf Sani International firmly believes in doing work in an organized and well managed way. All efforts are done to make sure that assistance is given to those who are in need of it. Throughout the year students are helped in all possible ways but especially from April-July,  a separate branch is set up to provide course books to the needy students. Having free course books relieves lot of pressure from the parents who are facing trouble in buying new books for their students."
        },
        {
            text: "So far 6000 thousand children have benefited from this scheme and our getting education in various schools across the city.By the grace of God, Mujaddid Alf Sani has not only expanded its operations but also quality has improved drastically. The continuous improvement in the field of education is an excellent example of it. Now Mujaddid Alf Sani is not only providing assistance to school children but the efforts have gone to extent that now assistance is also given to college, graduating and higher education students."
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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Hifz / Nazra'} marginPosition={'auto'} textAlignment={'center'} />
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
