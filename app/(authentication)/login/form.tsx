"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Text,
    Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "next/link";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <Box
            display="grid"
            h="100vh"
            placeItems="center"
            alignItems="center"
            bg="white"
        >
            <Box maxW="md" className="login-wrapper">
                <Flex
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    h="100%"
                    color="black"
                    className="container"
                >
                    <Box className="login-heading">
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
                            Login to your account
                        </Text>
                    </Box>
                    <Box
                        mt={8}
                        mb={4}
                        width={{ base: "18rem", md: "20rem", lg: "26rem" }}
                    >
                        <form>
                            <FormControl>
                                <FormLabel htmlFor="email" fontSize="lg" color="gray.900">
                                    Email address
                                </FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    w="100%"
                                    focusBorderColor="#ED5734"
                                    placeholder="Email address"

                                />

                            </FormControl>

                            <FormControl mt={4} mb={2}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <FormLabel
                                        htmlFor="password"
                                        fontSize="lg"
                                        color="gray.900"
                                        m={0}
                                    >
                                        Password
                                    </FormLabel>
                                    <Link href="" color="#ED5734" className="forget-passkey">
                                        Forgot password?
                                    </Link>
                                </Box>
                                <InputGroup display="flex" alignItems="center" mt={2}>
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
                                Login
                            </Button>
                        </form>
                    </Box>

                    <Box textAlign="center">
                        <Text fontSize="lg">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" color="#ED5734" className="register-link">
                                Create an account
                            </Link>
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default LoginForm;