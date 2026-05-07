import React, { useState } from 'react';

import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const url = process.env.REACT_APP_FORM_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSent(true);
      e.target.reset();
    }

    setLoading(false);
  };

  return (
    <Box py={20} bg="#fbf9f4">
      <Container maxW="container.md">
        <VStack
          bg="white"
          p={12}
          rounded="4xl"
          spacing={8}
          shadow="lg"
        >
          <HStack
            w="100%"
            justify="space-between"
            align="flex-start"
            flexDirection={{ base: 'column', md: 'row' }}
            spacing={10}
          >
            <VStack align="flex-start" spacing={4}>
              <Heading size="lg">Say Hello!</Heading>

              <Text color="#7a726a">
                I'd love to hear from you.
              </Text>

              <VStack align="flex-start" spacing={2} pt={4}>
                <Link
                  href="mailto:paul.ly.dev1993@gmail.com"
                  color="#7a726a"
                >
                  paul.ly.dev1993@gmail.com
                </Link>

                <Text color="#7a726a">
                  Remote / Everywhere
                </Text>
              </VStack>
            </VStack>

            <VStack
              as="form"
              onSubmit={handleSubmit}
              flex="1"
              maxW="350px"
              spacing={4}
              w="100%"
            >
              <FormControl isRequired>
                <FormLabel
                  fontSize="xs"
                  fontWeight="bold"
                  color="#7a726a"
                >
                  NAME
                </FormLabel>

                <Input
                  name="name"
                  variant="filled"
                  rounded="full"
                  bg="#f5f3ee"
                  placeholder="Your friendly name"
                  color="#7a726a"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  fontSize="xs"
                  fontWeight="bold"
                  color="#7a726a"
                >
                  EMAIL
                </FormLabel>

                <Input
                  name="email"
                  type="email"
                  variant="filled"
                  rounded="full"
                  bg="#f5f3ee"
                  placeholder="you@example.com"
                  color="#7a726a"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  fontSize="xs"
                  fontWeight="bold"
                  color="#7a726a"
                >
                  MESSAGE
                </FormLabel>

                <Textarea
                  name="message"
                  variant="filled"
                  rounded="2xl"
                  bg="#f5f3ee"
                  placeholder="What's on your mind?"
                  color="#7a726a"
                />
              </FormControl>

              <Button
                type="submit"
                w="100%"
                bg="#4a443f"
                color="white"
                rounded="full"
                isLoading={loading}
                _hover={{
                  bg: '#2f2b27',
                }}
              >
                Send Note
              </Button>

              {sent && (
                <Text fontSize="sm" color="green.500">
                  Message sent successfully!
                </Text>
              )}
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;