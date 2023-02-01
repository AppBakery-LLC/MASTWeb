import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Sadaqah() {

    const [content, setcontent] = useState([
        {
            text: "Islam is a universal religion that covers all the aspects of the life for the humanity. It is the religion of true peace and equality. Islam means submission and obedience to will of God. The entire Islam is based upon five pillars. Sadqah means purification in the form of wealth to the needy people.   This duty of Muslims has even stated in the Quran for the rich people. It is all about supporting the poor and needy people. It has been rightly said that all the things are in the custody of God and wealth is just in the hands of the human beings as being the trust.  In simple words we can even call Sadqah with the name of being growth and purification."
        },
        {
            text: "If you want to purify be the part of our online Sadqah services right now! You can get yourself connect with our online Sadqah services to help the needy and poor people right away!"
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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Online Sadaqa'} marginPosition={'auto'} textAlignment={'center'} />
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
