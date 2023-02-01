import { Center, Container, Heading, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { GET } from '../utilities/ApiProvider'
import { baseUrl } from '../utilities/customUrls'

export default function SingleProject() {

    const params = useParams();

    const [content, setcontent] = useState({})

    const [isLoading, setIsLoading] = useState(false)

    const sendComment = async () => {
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/FutureProject/${params?.projectId}`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        setcontent(commentResponse?.Data)
        setIsLoading(false)
    }

    useEffect(() => {
        console.log(params?.projectId);
        sendComment();
    }, [])


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
                    {
                        isLoading ?
                            <Center>
                                <Spinner color={'#000'} />
                            </Center>
                            :
                            <SectionHeading width={'100%'} smallHeading={"Project"} mainHeading={content?.Name} marginPosition={'auto'} textAlignment={'center'} />
                    }
                </Stack>
                {/* {
                    content.map((v, i) => {
                        return ( */}
                <Text
                    paddingY={2}
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >{content?.Text}</Text>
                {/* )
                    })
                } */}
            </Container>
        </Stack>
    )
}
