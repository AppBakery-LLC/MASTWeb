import { Box, Container, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Image1 from '../assets/images/photoGallery/1.jpg'
import Image2 from '../assets/images/photoGallery/2.jpg'
import Image3 from '../assets/images/photoGallery/3.jpg'
import Image4 from '../assets/images/photoGallery/4.jpg'
import Image5 from '../assets/images/photoGallery/5.jpg'
import Image6 from '../assets/images/photoGallery/6.jpg'
import Image7 from '../assets/images/photoGallery/7.jpg'
import { GET } from '../utilities/ApiProvider'
import { baseUrl } from '../utilities/customUrls'
import { useEffect } from 'react'

export default function VideoGallery() {

    const [videoGallery, setVideoGallery] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const getPhotoGallery = async () => {
        setisLoading(true);
        let dynamicPhotoGallery = await GET(`${baseUrl}/PhotoGallery`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(dynamicPhotoGallery);
        setVideoGallery(dynamicPhotoGallery?.Data)
        setisLoading(false);
    }

    useEffect(() => {
        getPhotoGallery();
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
                    <SectionHeading width={'100%'} smallHeading={"Video Gallery"} mainHeading={''} marginPosition={'auto'} textAlignment={'center'} />
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
                            <Stack
                                w={'100%'}
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <Spinner color="#000" />
                            </Stack>
                            :
                            videoGallery.map((v, i) => {
                                return (
                                    <Box
                                        w={{ base: '48%', md: '23%' }}
                                        marginBottom={'15px !important'}
                                    >
                                        <video>
                                            <source src={v?.FileName ?? ''} type="video/mp4" />
                                        </video>
                                    </Box>
                                )
                            })
                    }
                </Stack>
            </Container>
        </Stack>
    )
}
