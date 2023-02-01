import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Heading, Icon, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import SectionHeading from '../SectionHeading'
import { AiOutlineArrowRight } from 'react-icons/ai'
import YellowButton from '../Buttons/YellowButton.js'
import Image1 from '../../assets/images/icons/1.png'
import Image2 from '../../assets/images/icons/2.png'
import Image3 from '../../assets/images/icons/3.png'
import Image4 from '../../assets/images/icons/4.png'
import { Link, useParams } from 'react-router-dom'
import { GET } from '../../utilities/ApiProvider'
import { baseUrl } from '../../utilities/customUrls'

export default function Index() {

    const [serviceList, setServiceList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams()

    const getServices = async () => {
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/Services`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        setServiceList(commentResponse?.Data)
        setIsLoading(false)
    }
    useEffect(() => {
        getServices();
        console.log(params?.id);
    }, [])


    return (
        <div className="features-area pt-130 pb-100">
            <Container maxW={'7xl'}>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    alignItems={'center'}
                    justifyContent={{ base: 'center', md: 'space-between' }}
                >
                    <SectionHeading width={'600px'} smallHeading={'What We Do'} mainHeading={'Help us for our most humanist services'} marginPosition={'0 auto 0 0'} textAlignment={'left'} />
                    <Box>
                        <YellowButton text={'View All Services'} icon={AiOutlineArrowRight} backgroundColor={'#CF9E2A'} padding={'30px'} url={'/all-services'} />
                    </Box>
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'flex-start'}
                    justifyContent={{ base: 'center', md: 'center' }}
                    paddingTop={20}
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
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
                                    i < 4 &&
                                    <Box
                                        key={i}
                                        marginBottom={{ base: '15px !important', md: '0px !important' }}
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
                                        <Link to={`/service/${v?.Id}`} style={{ color: '#000', textDecoration: 'underline' }}>Read More</Link>
                                    </Box>
                                )
                            })
                    }
                </Stack>
            </Container>
        </div>
    )
}