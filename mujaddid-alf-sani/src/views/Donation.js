import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import SectionHeading from '../components/SectionHeading'

//Stripe

import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import { POST } from '../utilities/ApiProvider';
import { baseUrl } from '../utilities/customUrls';
import City from './City';

const stripePromise = loadStripe('pk_test_51LeotHHWql1EolXu2kYMJEsTbRBLJYBA1lHtwjIIrLMPwIInunxKMpAykhfVHhUPI25cFmxUvMlq5u6lSIlY03eA00x1cEs6Fm');

function StripePaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const billingDetails = {
        //     name: props?.Details?.Name,
        //     email: props?.Details?.Email,
        //     address: {
        //         city: props?.Location?.Address,
        //         postal_code: props?.Location?.Zip
        //     }
        // }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            // billing_details: billingDetails
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            const { id } = paymentMethod;
            console.log("Token : ", id);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
}

function Payment() {
    return (
        <Elements stripe={stripePromise}>
            <StripePaymentForm />
        </Elements>
    );
}

export default function Donation() {

    const stateOrder = useSelector(state => state.value)
    const toast = useToast();

    const [isLoading, setisLoading] = useState(false)
    const [formData, setformData] = useState({
        Title: "",
        FirstName: "",
        MiddleInitial: "",
        LastName: "",
        Phone: "",
        Email: "",
        StreetAddress: "",
        City: "",
        State: "",
        Zip: "",
        Country: "",
        Amount: "",
        Quantity: "",
        ItemId: 0,
        TypeOfDonation: "",
        ExtraInformation: ""
    })

    useEffect(() => {
        console.log(stateOrder);
        setformData({
            ...formData,
            Amount: stateOrder?.Price,
            ItemId: stateOrder?.Id
        })
    }, [stateOrder])

    const sendComment = async () => {
        console.log(formData);
        setisLoading(true)
        let commentResponse = await POST(`${baseUrl}/DonationCustomer`,
            formData,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        console.log(commentResponse);
        if (commentResponse?.IsSuccess) {
            toast({
                description: 'Message Sent!',
                status: 'success',
                isClosable: true,
                duration: 3000,
                position: 'bottom-left'
            });
            setformData({
                Title: "Mr",
                FirstName: "",
                MiddleInitial: "",
                LastName: "",
                Phone: "",
                Email: "",
                StreetAddress: "",
                City: "",
                State: "",
                Zip: "",
                Country: "",
                Amount: "",
                Quantity: "1",
                ItemId: 0,
                TypeOfDonation: "",
                ExtraInformation: ""
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
        setisLoading(false)
    }

    return (
        <Stack
            paddingY={'80px'}
        >
            <Container
                maxW={'7xl'}
            >
                <Stack
                    pb={12}
                >
                    <SectionHeading width={'100%'} smallHeading={"Donation"} mainHeading={'Customer Information'} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    alignItems={"flex-end"}
                    spacing={0}
                    justifyContent={'space-around'}
                >
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Select
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        Title: e.target.value
                                    })
                                }}
                            >
                                <option selected value={'Mr'}>Mr.</option>
                                <option value={'Ms'}>Ms.</option>
                                <option value={'Mrs'}>Mrs.</option>
                                <option value={'Dr'}>Dr.</option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input type='text'
                                value={formData?.FirstName}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        FirstName: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Middle Name</FormLabel>
                            <Input type='text'
                                value={formData?.MiddleInitial}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        MiddleInitial: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Last Name</FormLabel>
                            <Input type='text'
                                value={formData?.LastName}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        LastName: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Phone</FormLabel>
                            <Input type='number'
                                value={formData?.Phone}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        Phone: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email'
                                value={formData?.Email}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        Email: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Country</FormLabel>
                            <Input type='text'
                                value={formData?.Country}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        Country: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>State</FormLabel>
                            <Input type='text'
                                value={formData?.State}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        State: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Street Address</FormLabel>
                            <Input type='text'
                                value={formData?.StreetAddress}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        StreetAddress: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>City</FormLabel>
                            <Input type='text'
                                value={formData?.City}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        City: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Zip</FormLabel>
                            <Input type='text'
                                value={formData?.Zip}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        Zip: e.target.value
                                    })
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Amount</FormLabel>
                            <Input readOnly type='text' value={formData?.Amount} />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Quantity</FormLabel>
                            <Input type='text'
                                value={formData?.Quantity}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        Quantity: e.target.value
                                    })
                                }} />
                        </FormControl>
                    </Box>
                    <Box w={'48%'}>
                        <FormControl>
                            <FormLabel>Extra Information</FormLabel>
                            <Input type='text'
                                value={formData?.ExtraInformation}
                                onChange={(e) => {
                                    setformData({
                                        ...formData,
                                        ExtraInformation: e.target.value
                                    })
                                }} />
                        </FormControl>
                    </Box>
                    {/* <Box w={'48%'}>
                        <Payment />
                    </Box> */}
                    <Box w={'48%'} pt={8}>
                        <Button
                            isLoading={isLoading}
                            onClick={() => sendComment()}
                            w={'100%'}
                            bgColor={'#233F4D'}
                            color={'#fff'}
                        >
                            Proceed
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    )
}
