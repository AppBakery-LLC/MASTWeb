import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import YellowButton from '../components/Buttons/YellowButton'
import SectionHeading from '../components/SectionHeading'
import { POST } from '../utilities/ApiProvider';
import { baseUrl } from '../utilities/customUrls';

export default function CashAndCheque() {

    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [commentData, setCommentData] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Comment1: ""
    })

    const sendComment = async () => {
        // console.log(commentData);
        setIsLoading(true)
        let commentResponse = await POST(`${baseUrl}/Comment`,
            commentData,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        // console.log(commentResponse);
        if (commentResponse?.IsSuccess) {
            toast({
                description: 'Message Sent!',
                status: 'success',
                isClosable: true,
                duration: 3000,
                position: 'bottom-left'
            });
            setCommentData({
                Name: "",
                Email: "",
                Subject: "",
                Comment1: ""
            })
        } else {
            toast({
                description: 'Something Went Wrong!',
                status: 'error',
                isClosable: true,
                duration: 3000,
                position: 'bottom-left'
            })
        }
        setIsLoading(false)
    }

    return (
        <Stack
            paddingY={'80px'}
        >
            <Container
                maxW={'7xl'}
            >
                <SectionHeading width={'100%'} smallHeading={"Cash & Cross Cheque"} mainHeading={'Cash Donations'} marginPosition={'auto'} textAlignment={'center'} />
                <ol>
                    <li>
                        <Text
                            paddingTop={8}
                            paddingBottom={1}
                            maxW={'6xl'}
                            marginX={'auto'}
                            fontSize={'16px'}
                            color={'#748188'}
                        >You can visit mujaddidalifsani Welfare Trust at any time as we are open 24/7 to give your donations.</Text>
                    </li>
                    <li>
                        <Text
                            paddingY={1}
                            maxW={'6xl'}
                            marginX={'auto'}
                            fontSize={'16px'}
                            color={'#748188'}
                        >you can also call <b>00923002230155</b> or mail <b>info@mujaddidalifsani.com</b> for our representative to collect your donation from your location with a receipt.</Text>
                    </li>
                    <li> <Text
                        paddingY={1}
                        maxW={'6xl'}
                        marginX={'auto'}
                        fontSize={'16px'}
                        color={'#748188'}
                    >You can visit mujaddidalifsani Welfare Trust at any time as we are open 24/7 to give your donations.</Text>
                    </li>
                </ol>
                <Text
                    paddingY={1}
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >The addresses are given below:</Text>
                <Stack
                    paddingTop={4}
                    marginTop={8}
                    borderTop={'1px solid'}
                    borderColor={'#adadad'}
                    textAlign={'center'}
                >
                    <Heading>Head Office</Heading>
                    <Text><b>Postal Address:</b> House No 83 sector 4f, mujhaid colony Orangi town S.I.T.E Karachi</Text>
                    <Text><b>Phone:</b> 02136740009, 03002230155</Text>
                </Stack>
                <Stack
                    paddingTop={12}
                    marginTop={8}
                    borderTop={'1px solid'}
                    borderColor={'#adadad'}
                >
                    <SectionHeading width={'100%'} smallHeading={"Cash & Cross Cheque"} mainHeading={'Cross Cheque'} marginPosition={'auto'} textAlignment={'center'} />
                    <ol>
                        <li>
                            <Text
                                paddingTop={8}
                                paddingBottom={1}
                                maxW={'6xl'}
                                marginX={'auto'}
                                fontSize={'16px'}
                                color={'#748188'}
                            >Mail or crossed cheque in favor of "Mujaddad Alf Sani Welfare Trust International" to</Text>
                        </li>
                        <li>
                            <Text
                                paddingY={1}
                                maxW={'6xl'}
                                marginX={'auto'}
                                fontSize={'16px'}
                                color={'#748188'}
                            >Attn: Accounts Department<br />
                                Mujaddad Alf Sani Welfare Trust International <br />
                                House No 83 sector 4f, mujhaid colony Orangi town S.I.T.E Karachi <br />
                                PAKISTAN</Text>
                        </li>
                        <li> <Text
                            paddingY={1}
                            maxW={'6xl'}
                            marginX={'auto'}
                            fontSize={'16px'}
                            color={'#748188'}
                        >Note: Please remember to mention the nature of donation on the back of the cheque.</Text>
                        </li>
                    </ol>
                </Stack>
                <Stack
                    paddingTop={12}
                    marginTop={8}
                    borderTop={'1px solid'}
                    borderColor={'#adadad'}
                    maxW={'2xl'}
                    marginX={'auto'}
                >
                    <Heading
                        fontSize={32}
                        textAlign={'center'}
                        pb={8}
                    >Inquiries/Comments</Heading>
                    <FormControl isRequired display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                        <Box
                            display={'flex'}
                            alignItems={"center"}
                            marginBottom={'20px'}
                        >
                            <FormLabel
                                w={'150px'}
                            >Full Name</FormLabel>
                            <Input placeholder='' onChange={(e) => setCommentData({ ...commentData, Name: e.target.value })} value={commentData?.Name} />
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={"center"}
                            marginBottom={'20px'}
                        >
                            <FormLabel
                                w={'150px'}
                            >Email</FormLabel>
                            <Input placeholder='' onChange={(e) => setCommentData({ ...commentData, Email: e.target.value })} value={commentData?.Email} />
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={"center"}
                            marginBottom={'20px'}
                        >
                            <FormLabel
                                w={'150px'}
                            >Subject</FormLabel>
                            <Input placeholder='' onChange={(e) => setCommentData({ ...commentData, Subject: e.target.value })} value={commentData?.Subject} />
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={"center"}
                            marginBottom={'20px'}
                        >
                            <FormLabel
                                w={'150px'}
                            >Message</FormLabel>
                            <Textarea onChange={(e) => setCommentData({ ...commentData, Comment1: e.target.value })} value={commentData?.Comment1}></Textarea>
                        </Box>
                        <Button
                            isLoading={isLoading}
                            onClick={() => sendComment()}
                            backgroundColor={'#CF9E2A'}
                            padding={'30px'}
                        >Submit</Button>
                    </FormControl>
                </Stack>
            </Container>
        </Stack>
    )
}
