import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex width={'100%'} height={'100vh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bg={'var(--custom-light-gray)'} fontFamily={'var(--custom-font-family)'}>
            <SimpleGrid maxW={'300px'} columns={[1,1,1,1]} bgColor={'var(--custom-white)'} p={4} borderRadius={15} textAlign={'center'}>
                <Image  src={'/image-qr-code.png'} alt={'QR-Code-Image'} borderRadius={15} />
                <Box p={2}>
                    <Text fontSize={'22px'} color={'var(--custom-dark-blue)'} fontWeight={'700'} lineHeight={1.3} my={4}>
                        Improve your front-end skills by building projects
                    </Text>
                    <Text fontSize={'14px'} color={'var(--custom-grayish-blue)'} fontWeight={'400'} lineHeight={1.3} my={4}>
                        Scan the QR code to visit Frontend Mentor and take your coding skills to next level
                    </Text>
                </Box>
            </SimpleGrid>
        </Flex>
    );
}
