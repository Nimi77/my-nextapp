"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Box
      display="grid"
      h="100vh"
      placeItems="center"
      alignItems="center"
      bg="white"
    >
      <Box maxW="md" className="register-wrapper">
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          color="black"
          className="container"
        >
          <Box className="register-heading">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Text
                as="span"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight={600}
                aria-label="linktrim"
              >
                linktrim
              </Text>
              <Box
                bgGradient="linear-gradient(0deg, #C5100E, #ED5734)"
                borderRadius="full"
                ml={1}
                w={2}
                h={2}
                aria-hidden="true"
              ></Box>
            </Box>
            <Text mt="-14px" fontSize="xl">
              Create an account and get started!
            </Text>
          </Box>
          <Box
            mt={8}
            mb={4}
            width={{ base: "18rem", md: "20rem", lg: "26rem" }}
          >
            <form method="POST">
              <FormControl >
                <FormLabel htmlFor="email" fontSize="lg" color="gray.900">
                  Email address
                </FormLabel>
                <Input
                  id="email"

                  type="email"
                  autoComplete="email"
                  w="100%"
                  focusBorderColor="#ED5734"
                  placeholder="Email address"

                />

              </FormControl>

              <FormControl mt={4} mb={2} >
                <FormLabel htmlFor="password" fontSize="lg" color="gray.900">
                  Password
                </FormLabel>
                <InputGroup display="flex" alignItems="center">
                  <Input
                    id="password"

                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    w="100%"
                    focusBorderColor="#ED5734"
                    placeholder="Password"

                  />
                  <InputRightElement h="full">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      variant="ghost"
                      onClick={() => setShowPassword((show) => !show)}
                      icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      size={"sm"}
                      _hover={{
                        bg: "transparent",
                      }}
                    />
                  </InputRightElement>
                </InputGroup>

              </FormControl>


              <Button
                type="submit"
                w="100%"
                h="2.4rem"
                mt={6}
                fontWeight={600}
                fontSize="lg"
                color="white"
                bg="#FF4C24"
                borderRadius="lg"
                boxShadow="md"
                _hover={{
                  bg: "#ED5734",
                  transition: "all 0.3s ease",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>

          <Box textAlign="center">
            <Text fontSize="lg">
              Already have an account?{" "}
              <Link href="/login" color="#ED5734" className="login-link">
                Login
              </Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default RegisterForm;