import React, { useState } from 'react'
import { Box, Container, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import SectionHeading from '../SectionHeading'
import { Link } from 'react-router-dom'
import { GET } from '../../utilities/ApiProvider'
import { baseUrl } from '../../utilities/customUrls'
import { useEffect } from 'react'

export default function AllProjectsList() {

    const [serviceList, setServiceList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getServices = async () => {
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/FutureProject`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        setServiceList(commentResponse?.Data)
        setIsLoading(false)
    }

    useEffect(() => {
        getServices();
    }, [])

    return (
        <div className="features-area pt-130 pb-100">
            <Container maxW={'7xl'}>
                <Stack
                    pt={12}
                >
                    <SectionHeading width={'600px'} smallHeading={'What We Do'} mainHeading={'Help us for our most humanist projects'} marginPosition={'0 auto 0 0'} textAlignment={'center'} />

                </Stack>
                <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    alignItems={'flex-start'}
                    justifyContent={{ base: 'center', md: 'space-between' }}
                    paddingTop={20}
                    spacing={0}
                >
                    {
                        isLoading ?
                            <Stack
                                w={'100%'}
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <Spinner color="#000" />
                            </Stack>
                            :
                            serviceList.map((v, i) => {
                                return (
                                    <Box
                                        key={i}
                                        marginBottom={{ base: '15px !important', md: '15px !important' }}
                                        w={{ base: '90%', md: '23%' }}
                                        background={'#fff'}
                                        borderRadius={'6px'}
                                        boxShadow={'lg'}
                                        paddingY={'25px'}
                                        paddingX={'10px'}
                                        textAlign='center'
                                        transition={'0.3s ease all'}
                                        _hover={{
                                            transform: 'translateY(-5px)'
                                        }}
                                    >
                                        <Image src={v.Image} marginX={'auto'} marginBottom={'25px'} />
                                        <Heading fontWeight={'600'} marginBottom={'15px'} color={'#000'} fontSize={'20px'}>{v.Name}</Heading>
                                        <Text color={'#1a1a1a'} fontSize={'15px'} marginBottom={'60px'}>{v.Text}</Text>
                                        <Link to={`/project/${v?.Id}`} style={{ color: '#000', textDecoration: 'underline' }}>Read More</Link>
                                    </Box>
                                )
                            })
                    }
                </Stack>
            </Container>
        </div>
    )
}