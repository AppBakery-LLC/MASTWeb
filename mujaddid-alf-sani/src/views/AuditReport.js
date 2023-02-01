import React, { useState } from 'react'
import { Box, Button, Container, Heading, Icon, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import SectionHeading from '../components/SectionHeading'
import { AiOutlineArrowRight } from 'react-icons/ai'
import YellowButton from '../components/Buttons/YellowButton.js'
import Image1 from '../assets/images/icons/1.png'
import Image2 from '../assets/images/icons/2.png'
import Image3 from '../assets/images/icons/3.png'
import Image4 from '../assets/images/icons/4.png'
import { Link } from 'react-router-dom'
import { GET } from '../utilities/ApiProvider'
import { baseUrl } from '../utilities/customUrls'
import { useEffect } from 'react'

export default function AuditReport() {

    const [serviceList, setserviceList] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const sendComment = async () => {
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/AuditReport`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        setserviceList(commentResponse?.Data)
        setIsLoading(false)
    }

    useEffect(() => {
        sendComment();
    }, [])


    return (
        <div className="features-area pt-130 pb-100">
            <Container maxW={'7xl'}>
                <Stack
                    paddingTop={20}
                >
                    <SectionHeading width={'full'} smallHeading={'Audit Reports'} mainHeading={'Check the Audit Reports'} marginPosition={'0 auto 0 0'} textAlignment={'center'} />

                </Stack>
                <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    alignItems={'flex-start'}
                    justifyContent={{ base: 'center', md: 'center' }}
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
                            serviceList?.map((v, i) => {
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
                                        <Heading fontWeight={'600'} marginBottom={'15px'} color={'#000'} fontSize={'20px'}>{v?.Title}</Heading>
                                        <Text color={'#1a1a1a'} fontSize={'15px'} marginBottom={'60px'}>{String(v.CreatedDate).split('T')[0]}</Text>
                                        <a href={`${v.FileName}`} target={'_blank'} style={{ color: '#000', textDecoration: 'underline' }}>Read More</a>
                                    </Box>
                                )
                            })
                    }
                </Stack>
            </Container>
        </div>
    )
}