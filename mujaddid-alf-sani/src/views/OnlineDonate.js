import { Box, Button, Container, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { selectedOrder } from '../reducers/useReducers'
import DonatePic from '../assets/images/donatePic.png'
import { GET } from '../utilities/ApiProvider'
import { baseUrl } from '../utilities/customUrls'
import { useEffect } from 'react'

export default function OnlineDonate() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [items, setItems] = useState([]);

    const [moreItems, setmoreItems] = useState([]);

    const [photoGallery, setPhotoGallery] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const getPhotoGallery = async () => {
        setisLoading(true);
        let dynamicPhotoGallery = await GET(`${baseUrl}/DonationCategory`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(dynamicPhotoGallery);
        setItems(dynamicPhotoGallery?.Data[0]?.DonationItems)
        var newData = dynamicPhotoGallery?.Data;
        newData.shift();
        setmoreItems(newData);
        console.log(newData);
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
                maxW={'2xl'}
            >
                {/* <Image src={DonatePic} alt={'donate pic'} w={'500px'} marginX={'auto'} marginBottom={'40px !important'} /> */}
                <Stack
                    pb={12}
                >
                    <SectionHeading width={'100%'} smallHeading={"Online Donation"} mainHeading={'Featured Items'} marginPosition={'auto'} textAlignment={'center'} />

                </Stack>
                {
                    isLoading ?
                        <Stack
                            w={'100%'}
                            justifyContent={'center'}
                        >
                            <Spinner color={'#000'} />
                        </Stack>
                        :
                        <>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                flexWrap={'wrap'}
                                spacing={0}
                                paddingBottom={'35px'}
                                borderBottom={'1px solid'}
                                borderColor={'#adadad'}
                            >

                                {
                                    items?.map((v, i) =>
                                        <Box
                                            key={i}
                                            w={'33%'}
                                            textAlign={"center"}
                                            padding={'10px'}
                                            marginBottom={"10px !important"}
                                            shadow={'base'}
                                        >
                                            <Button
                                                _hover={{
                                                    background: 'transparent'
                                                }}
                                                background={'transparent'}
                                                padding={0}
                                                onClick={() => {
                                                    // console.log('ran');
                                                    dispatch(selectedOrder(v))
                                                    navigate(`/donation`)
                                                }}
                                            >
                                                - {v?.Title}
                                            </Button>
                                        </Box>
                                    )
                                }
                            </Stack>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                flexWrap={'wrap'}
                                spacing={0}
                                marginTop={'30px !important'}
                            >

                                {
                                    moreItems?.map((v, i) =>
                                        <Box
                                            padding={'15px'}
                                            key={i}
                                            w={'45%'}
                                            textAlign={"left"}
                                            marginBottom={"10px !important"}
                                            shadow={'base'}
                                            margin={'15px !important'}
                                        >
                                            <Heading fontSize={'22px'} paddingBottom={'30px'}>{v?.Text}</Heading>
                                            {
                                                v?.DonationItems?.map((v, i) => {
                                                    return (
                                                        <Button
                                                            _hover={{
                                                                background: 'transparent'
                                                            }}
                                                            background={'transparent'}
                                                            padding={0}
                                                            onClick={() => {
                                                                // console.log('ran');
                                                                dispatch(selectedOrder(v))
                                                                navigate(`/donation`)
                                                            }}
                                                        >
                                                            - {v?.Title}
                                                        </Button>
                                                    )
                                                })
                                            }
                                        </Box>
                                    )
                                }
                            </Stack>
                        </>
                }
            </Container>
        </Stack>
    )
}
