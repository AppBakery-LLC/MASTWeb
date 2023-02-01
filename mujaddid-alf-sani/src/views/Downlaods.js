import { Box, Center, Container, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Image1 from '../assets/images/downloads/1.png'
import { Link } from 'react-router-dom'
import { GET } from '../utilities/ApiProvider'
import { baseUrl } from '../utilities/customUrls'
import { useEffect } from 'react'

export default function Downloads() {

    const [downloads, setDownloads] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const sendComment = async () => {
        // console.log(commentData);
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/Download`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        setDownloads(commentResponse?.Data)
        setIsLoading(false)
    }

    useEffect(() => {
        sendComment();
    }, [])

    return (
        <Stack
            paddingY={'80px'}
        >
            <Container
                maxW={'4xl'}
                shadow={'2xl'}
            >
                <Stack
                    pb={12}
                >
                    <SectionHeading width={'100%'} smallHeading={"Literature & Brochures"} mainHeading={''} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'flex-start'}
                    flexWrap={'wrap'}
                    spacing={0}
                    justifyContent={'space-between'}
                >
                    {
                        isLoading ?
                            <Stack textAlign={'center'} w={'100%'} justifyContent={'center'} direction={'row'}>
                                <Spinner color={'#000'} />
                            </Stack>
                            :
                            downloads?.length > 0 ?
                                downloads?.map((v, i) => {
                                    return (
                                        <Box
                                            key={i}
                                            w={{ base: '48%', md: '23%' }}
                                            padding={'15px'}
                                            marginBottom={'5px'}
                                            shadow={'lg'}
                                            textAlign={'center'}
                                        >
                                            <Image
                                                src={v?.image}
                                            />
                                            <a href={`${v.FileName}`} target={'_blank'} style={{ color: '#000', textDecoration: 'underline' }}>Read More</a>
                                        </Box>
                                    )
                                })
                                :
                                <Stack
                                    w={'100%'}
                                    justifyContent={'center'}
                                >
                                    <Center>
                                        <Text textAlign={'center'}>No Record Found!</Text>
                                    </Center>
                                </Stack>
                    }
                </Stack>
            </Container>
        </Stack>
    )
}
