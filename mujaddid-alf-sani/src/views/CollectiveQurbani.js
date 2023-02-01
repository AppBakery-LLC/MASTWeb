import { Container, Heading, Stack, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function CollectiveQurbani() {

    const [content, setcontent] = useState([
        {
            text: "On Eid ul Azah, Mujaddid Alf Sani provides computerized collective sacrifice. This computerized system ensures that people have their bookings done months before Eid and they are provided with the time and day when they can collect their meat."
        },
        {
            text: "To perform collective sacrifice Mujaddid Alf Sani builts various teams, each team is responsible for 20 sub areas and one experienced person is their supervisor. All the sacrifices are done under their supervision to ensure that everything is done in the right manner."
        },
        {
            text: "Mujaddid Alf Sani also collect animals skins and hides and later sell them for money. This money is used on a variety of services which include welfare of the poor and needy, ration for under privilege homes, education of needy student and marriages of needy girls."
        },
        {
            text: "Rates for our Qurbani Service (2023) are as follows:"
        }
    ])

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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Collective Qurbani'} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                {
                    content.map((v, i) => {
                        return (
                            <Text
                                key={i}
                                paddingY={2}
                                maxW={'6xl'}
                                marginX={'auto'}
                                fontSize={'16px'}
                                color={'#748188'}
                            >{v.text}</Text>
                        )
                    })
                }
                <Stack>
                    <Table>
                        <Thead>
                            <Tr>
                                <Td>Animal</Td>
                                <Td>Value</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Bakra</Td>
                                <Td>N/A</Td>
                            </Tr>
                            <Tr>
                                <Td>Bakri</Td>
                                <Td>N/A</Td>
                            </Tr>
                            <Tr>
                                <Td>Cow</Td>
                                <Td>N/A</Td>
                            </Tr>
                            <Tr>
                                <Td>Cow (Part)</Td>
                                <Td>N/A</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
        </Stack>
    )
}
