import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Clinic() {

    const [content, setcontent] = useState([
        {
            text: "Our aim is all about building a healthy society and outreaches the communities which are neglected with the superior medical services. To strengthen our primary healthcare system, clinics have been set up for providing medicines and medical facilities. Our team will be available for you all the time bringing specialized treatment and medical assistance to the ailing. We believe in providing cure to the ill!"
        },
        {
            text: "Jabir reported: The Messenger of Allah, peace and blessings be upon him, said,"
        },
        {
            text: "“Every disease has a cure. If a cure is applied to the disease, it is relieved by the permission of Allah Almighty.”"
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
                    <SectionHeading width={'100%'} smallHeading={"Future Projects"} mainHeading={'Clinic'} marginPosition={'auto'} textAlignment={'center'} />
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
