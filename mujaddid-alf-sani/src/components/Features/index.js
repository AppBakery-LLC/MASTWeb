import React from 'react'
import Feature1 from '../../assets/images/feature/Masjid01.jpg'
import Feature2 from '../../assets/images/feature/Ramadhan02.jpg'
import Feature3 from '../../assets/images/feature/Madarsah03.jpg'
import { RiHandHeartFill } from 'react-icons/ri'
import { Box, Container, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import SectionHeading from '../SectionHeading'

export default function index() {

    const listFeatures = [
        {
            bgImage: Feature1,
            icon: RiHandHeartFill,
            url: '/',
            hoverText: 'Masjid Under Construction',
            hoverDescription: 'Beautiful Jama Masjid Mujaddid Alf Sani',
            displaytext: 'Give Donation'
        },
        {
            bgImage: Feature2,
            icon: RiHandHeartFill,
            url: '/',
            hoverText: 'Ration Distribution',
            hoverDescription: 'Every year we distribute ration to poor and needy famillies without any difference',
            displaytext: 'Ramadhan Package'
        },
        {
            bgImage: Feature3,
            icon: RiHandHeartFill,
            url: '/',
            hoverText: 'Give Donation',
            hoverDescription: 'We provide Islamic Education and education according to todays world need',
            displaytext: 'Get Helps Children'
        },
    ]

    return (
        <div className="features-area pt-130 pb-100">
            <Container maxW={'7xl'}>
                <SectionHeading width={'900px'} smallHeading={'Our Features'} mainHeading={'Join with us to know our project for charity peoples'} marginPosition={'auto'} textAlignment={'center'} />
                <Stack
                    paddingTop={20}
                >
                    <Stack
                        direction={'row'}
                        alignItems={'flex-start'}
                        justifyContent={{base: 'center', md: 'space-between'}}
                        flexWrap={{base: 'wrap', md: 'nowrap'}}
                    >
                        {
                            listFeatures?.map((v, i) => {
                                return (
                                    <Box
                                        w={{base: '80%',md: '31%'}}
                                        key={i}
                                        boxShadow={'lg'}
                                    >
                                        <Box
                                            position={'relative'}
                                            overflow={'hidden'}
                                            role={'group'}
                                            transition={'0.3s ease all'}
                                        >
                                            <Image w={'100%'} src={v.bgImage}
                                                transition={'0.3s ease all'}

                                                _groupHover={{
                                                    transform: 'scale(1.1)'
                                                }}
                                            />
                                            <Box
                                                position={'absolute'}
                                                top={0}
                                                left={0}
                                                w={'100%'}
                                                height={'100%'}
                                                background={'#1fbdd0ed'}
                                                padding={6}
                                                display={'flex'}
                                                alignItems={'center'}
                                                flexDirection={'column'}
                                                justifyContent={'center'}
                                                opacity={0}
                                                transition={'0.3s ease all'}
                                                _hover={{
                                                    opacity: 1
                                                }}
                                            >
                                                <Text fontSize={24} fontWeight={600} pb={4}>{v.hoverText}</Text>
                                                <Heading fontSize={18} fontWeight={400}>{v.hoverDescription}</Heading>
                                            </Box>
                                        </Box>
                                        <Box
                                            textAlign={'center'}
                                            color={'#1a1a1a'}
                                            transform={'translateY(-30px)'}
                                        >
                                            <Icon as={v.icon} background={'#CF9E2A'} borderRadius={'100%'} color={'#fff'} padding={2} fontSize={52} />
                                            <Text fontWeight={'700'} fontSize={'22'}>{v.displaytext}</Text>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}