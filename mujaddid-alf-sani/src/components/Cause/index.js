import React from 'react'
import { Box, Button, Container, Heading, Icon, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import SectionHeading from '../SectionHeading'
import { AiOutlineArrowRight } from 'react-icons/ai'
import YellowButton from '../Buttons/YellowButton.js'
import Image1 from '../../assets/images/news/education.jpg'
import Image2 from '../../assets/images/news/shelter.jpg'
import Image3 from '../../assets/images/news/poverty.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { GET } from '../../utilities/ApiProvider'
import { baseUrl } from '../../utilities/customUrls'
import { useState } from 'react'

export default function Index() {

    const [projectList, setProjectList] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const getFutureProjects = async () => {
        setisLoading(true);
        let commentResponse = await GET(`${baseUrl}/FutureProject`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        setProjectList(commentResponse?.Data)
        setisLoading(false)
    }

    useEffect(() => {
        getFutureProjects();
    }, [])


    return (
        <div className="features-area pt-130 pb-100" style={{ padding: '120px 0' }}>
            <Container maxW={'7xl'}>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    alignItems={'center'}
                    justifyContent={{ base: 'center', md: 'space-between' }}
                >
                    <SectionHeading width={'600px'} smallHeading={'Future Projects'} mainHeading={"Let's have a look on our latest doings for humanity"} marginPosition={'0 auto 0 0'} textAlignment={'left'} />
                    <Box>
                        <YellowButton text={'View All Projects'} icon={AiOutlineArrowRight} backgroundColor={'#CF9E2A'} padding={'30px'} url={'/all-projects'} />
                    </Box>
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'center'}
                    paddingTop={20}
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
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
                            projectList?.map((v, i) => {
                                return (
                                    i < 4 &&
                                    <Box
                                        // height={'500px'}
                                        key={i}
                                        w={{ base: '95%', md: '33%' }}
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
                                        <Image w={'100%'} src={v.Image} marginX={'auto'} marginBottom={'25px'} />
                                        <Heading fontWeight={'600'} marginBottom={'15px'} color={'#000'} fontSize={'20px'}>{v?.Name}</Heading>
                                        <Text color={'#1a1a1a'} fontSize={'15px'} marginBottom={'60px'}>{v?.Text}</Text>
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