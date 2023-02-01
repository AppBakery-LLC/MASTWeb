import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function RoPlant() {

    const [content, setcontent] = useState([
        {
            text: "We have RO plant purification service for you. We find this service as the basic need after a survey of the villages and poor community living in those areas. We found that there were so many children in the villages who were desirous of getting schooling but had neither school nor means. Clean water has the power to change lives. It is the road to building a better future with fewer water resulting diseases, healthier communities and richer lives in terms of quality. At this point of time we realized that the main item for human health was clean drinking water which was not available anywhere in the vicinity. It is a big project of providing clean water to drink and has been proved very beneficial and healthy!"
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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Ro Plant'} marginPosition={'auto'} textAlignment={'center'} />
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
