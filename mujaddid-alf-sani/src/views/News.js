import { Box, Container, Heading, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading'
import { GET } from '../utilities/ApiProvider';
import { baseUrl } from '../utilities/customUrls';

export default function News() {

    const [news, setNews] = useState();

    const [isLoading, setIsLoading] = useState(false)

    const sendComment = async () => {
        // console.log(commentData);
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/News`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        setNews(commentResponse?.Data)
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
                maxW={'6xl'}
            >
                <Stack
                    pb={12}
                >
                    <SectionHeading width={'100%'} smallHeading={"Latest News"} mainHeading={''} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                {
                    isLoading ?
                        <Stack
                            w={'100%'}
                            justifyContent={'center'}
                        >
                            <Spinner color={'#000'} />
                        </Stack>
                        : news?.map((v, i) => {
                            return (
                                <Stack
                                    key={i}
                                    padding={'15px'}
                                    borderRadius={'6'}
                                    direction={{ base: 'column', md: 'row' }}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    marginBottom={'30px'}
                                    shadow={'2xl'}
                                >
                                    <Box
                                        flex={2}
                                        marginBottom={{ base: '25px !important', md: '0px' }}
                                    >
                                        <Heading
                                            fontSize={22}
                                            paddingBottom={'15px'}
                                        >{v?.Title}</Heading>
                                        <Text
                                            fontSize={13}
                                            fontWeight={'600'}
                                            color={'#1a1a1a'}
                                        >{v?.Date}</Text>
                                        <Text
                                            fontSize={15}
                                        >{v?.Text}</Text>
                                    </Box>
                                </Stack>
                            )
                        })
                }
            </Container>
        </Stack>
    )
}
