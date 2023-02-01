import { Box, Container, Heading, Stack, Text, Icon, Spinner } from '@chakra-ui/react'
import React from 'react'
import SectionHeading from '../components/SectionHeading'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useState } from 'react'
import { GET } from '../utilities/ApiProvider'
import { baseUrl } from '../utilities/customUrls'
import { useEffect } from 'react'

export default function Contact() {

    const contactInfo = [
        {
            heading: 'Pakistan Address',
            email: 'info@mujaddidalifsani.com',
            landline: '+92 21 36740009',
            cell: '+92 300 2230155',
            visitUs: 'House No 83, Sector 4F, Mujhaid Colony, Orangi Town, S.I.T.E, Karachi'
        },
        {
            heading: 'UK Address',
            email: 'info@mujaddidalifsani.com',
            cell: '00447972377903',
            visitUs: '20 Gunthorpe Drive Sherwood Nottingham NG5 3DW'
        },
    ]

    const [isLoading, setIsLoading] = useState(false);
    const [bankDetails, setBankDetails] = useState([]);

    const sendComment = async () => {
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/BeneficiaryAccount`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        // console.log(commentResponse);
        setBankDetails(new Array(commentResponse?.Data[0]))
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
                maxW={'7xl'}
                textAlign={'center'}
            >
                <SectionHeading width={'100%'} smallHeading={"CONTACT US"} mainHeading={''} marginPosition={'0 auto 0 0'} textAlignment={'center'} />
                <Text
                    paddingY={8}
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >For further queries, and information, feel free to contact us. You can also contact us for knowing about our donation process and upcoming events. Get in touch with our team to learn more about our work and how you can get involved.</Text>
                <Text
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >We’re here to make donations easy for you!</Text>
                <Stack
                    paddingTop={12}
                    direction={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'space-between'}
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
                    spacing={0}
                >
                    {
                        contactInfo.map((v, i) => {
                            return (
                                <Box
                                    key={i}
                                    w={{ base: '100%', md: '31%' }}
                                    textAlign={'left'}
                                >
                                    <Heading
                                        fontSize={24}
                                        pb={4}
                                    >
                                        <Icon as={AiFillCheckCircle} color={'#233F4D'} mr={2} marginBottom={'-4px'} />
                                        {v.heading}
                                    </Heading>
                                    <Text
                                        paddingBottom={1.5}
                                        fontSize={'16px'}
                                        color={'#748188'}
                                    >Email us: {v.email}
                                    </Text>
                                    {
                                        v.landline &&
                                        <Text
                                            paddingBottom={1.5}
                                            fontSize={'16px'}
                                            color={'#748188'}
                                        >Landline: {v.landline}
                                        </Text>
                                    }
                                    <Text
                                        paddingBottom={1.5}
                                        fontSize={'16px'}
                                        color={'#748188'}
                                    >Cell: {v.cell}
                                    </Text>
                                    <Text
                                        paddingBottom={1.5}
                                        fontSize={'16px'}
                                        color={'#748188'}
                                    >Visit Us: {v.visitUs}
                                    </Text>

                                </Box>
                            )
                        })
                    }
                    <Box
                        w={{ base: '100%', md: '31%' }}
                    >
                        {
                            isLoading ?
                                <Spinner />
                                :
                                bankDetails?.length > 0 &&
                                bankDetails?.map((v, i) => {
                                    return (
                                        <>
                                            <Box
                                                key={i}
                                                textAlign={'left'}
                                                w={{ base: '100%', md: '100%' }}
                                            >
                                                <Heading
                                                    fontSize={24}
                                                    pb={4}>
                                                    <Icon as={AiFillCheckCircle} color={'#233F4D'} mr={2} marginBottom={'-4px'} />
                                                    Account Details
                                                </Heading>
                                                <Text
                                                    paddingBottom={1.5}
                                                    fontSize={'16px'}
                                                    color={'#748188'}
                                                >Beneficiary Name: {v?.AccountTitle}
                                                </Text>
                                                <Text
                                                    paddingBottom={1.5}
                                                    fontSize={'16px'}
                                                    color={'#748188'}
                                                >Bank Name: {v?.Bank}
                                                </Text>
                                                <Text
                                                    paddingBottom={1.5}
                                                    fontSize={'16px'}
                                                    color={'#748188'}
                                                >Beneficiary Account Number: {v?.AccountNo}
                                                </Text>
                                            </Box>
                                        </>
                                    )
                                })
                        }
                    </Box>
                </Stack>
            </Container>
        </Stack>
    )
}
