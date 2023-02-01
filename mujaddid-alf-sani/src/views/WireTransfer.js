import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Spinner, Stack, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import SectionHeading from '../components/SectionHeading'
import { GET } from '../utilities/ApiProvider';
import { baseUrl } from '../utilities/customUrls';

export default function WireTransfer() {

    const [isLoading, setIsLoading] = useState(false);
    const [bankDetails, setBankDetails] = useState([]);

    const sendComment = async () => {
        setIsLoading(true)
        let commentResponse = await GET(`${baseUrl}/BeneficiaryAccount`,
            { authorization: `Basic ${btoa('admin:admin123')}` })
        // console.log(commentResponse);
        setBankDetails(commentResponse?.Data)
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
            >
                <Stack
                    pb={12}
                >
                    <SectionHeading width={'100%'} smallHeading={"Donation"} mainHeading={'Wire Transfer'} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                <Stack>
                    <Text
                        textAlign={'center'}
                    >
                        Beneficiary: "Mujaddid Alf Sani International"
                    </Text>
                    <Table border={'1px solid'} borderColor={'#adadad'} shadow={'lg'}>
                        <Thead>
                            <Tr>
                                <Td>Currency</Td>
                                <Td>Nature of Donation</Td>
                                <Td>Bank Account Details</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/* <Tr>
                                <Td>Pak Rupees</Td>
                                <Td>- For Zakat, Sadqat & All Other Zakat Donations</Td>
                                <Td>
                                    <ul>
                                        <li>Account Title:	Mujaddid Alf Sani International</li>
                                        <li>Account No.: -</li>
                                        <li>Bank :	-</li>
                                        <li>Branch : -</li>
                                        <li>Branch Code: -</li>
                                        <li>Address :	House No 83 sector 4f, mujhaid colony Orangi town S.I.T.E Karachi</li>
                                        <li>Swift Code : -</li>
                                        <li>Phone :	02136740009</li>
                                        <li>UAN # :	-</li>
                                        <li>Fax # :	</li>
                                        <li>Email :	info@mujaddidalifsani.com</li>
                                    </ul>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>USD</Td>
                                <Td>- For Zakat, Sadqat & All Other Zakat Donations</Td>
                                <Td>
                                    <ul>
                                        <li>Account Title:	Mujaddid Alf Sani International</li>
                                        <li>Account No.: -</li>
                                        <li>Bank :	-</li>
                                        <li>Branch : -</li>
                                        <li>Branch Code: -</li>
                                        <li>Address :	House No 83 sector 4f, mujhaid colony Orangi town S.I.T.E Karachi</li>
                                        <li>Swift Code : -</li>
                                        <li>Phone :	02136740009</li>
                                        <li>UAN # :	-</li>
                                        <li>Fax # :	</li>
                                        <li>Email :	info@mujaddidalifsani.com</li>
                                    </ul>
                                </Td>
                            </Tr> */}
                            {
                                isLoading ?
                                    <Spinner />
                                    :
                                    bankDetails?.length > 0 &&
                                    bankDetails?.map((v, i) => {
                                        return (
                                            <Tr
                                                key={i}
                                            >
                                                <Td>Pak Rupees</Td>
                                                <Td>- For Zakat, Sadqat & All Other Zakat Donations</Td>
                                                <Td>
                                                    <ul>
                                                        <li>Account Title:	{v?.AccountTitle}</li>
                                                        <li>Account No.: {v?.AccountNo}</li>
                                                        <li>Bank :	{v?.Bank}</li>
                                                        <li>Branch : {v?.Branch}</li>
                                                        <li>Branch Code: {v?.BranchCode}</li>
                                                        <li>Address : {v?.Address}</li>
                                                        <li>Swift Code : {v?.SwiftCode}</li>
                                                        <li>Phone :	{v?.Phone}</li>
                                                        <li>UAN # :	{v?.UAN}</li>
                                                        <li>Fax # :	{v?.Fax}</li>
                                                        <li>Email :	{v?.Email}</li>
                                                    </ul>
                                                </Td>
                                            </Tr>
                                        )
                                    })
                            }
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
        </Stack>
    )
}
