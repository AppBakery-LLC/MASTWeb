import { Box, Container, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { useEffect } from 'react'
import { GET } from '../utilities/ApiProvider'
import { baseUrl } from '../utilities/customUrls'

export default function PhotoGallery() {

    const [photoGallery, setPhotoGallery] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const getPhotoGallery = async () => {
        setisLoading(true);
        let dynamicPhotoGallery = await GET(`${baseUrl}/PhotoGallery`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(dynamicPhotoGallery);
        setPhotoGallery(dynamicPhotoGallery?.Data)
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
                    <SectionHeading width={'100%'} smallHeading={"Photo Gallery"} mainHeading={''} marginPosition={'auto'} textAlignment={'center'} />
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
                            photoGallery?.map((v, i) => {
                                return (
                                    <Box
                                        w={{ base: '48%', md: '23%' }}
                                        marginBottom={'15px !important'}
                                    >
                                        <Image
                                            src={v?.Image}
                                            alt={'gallery'}
                                            w={'100%'}
                                        />
                                    </Box>
                                )
                            })
                    }
                </Stack>
            </Container>
        </Stack>
    )
}
