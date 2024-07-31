"use client"

import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./header";
import Hero from "./hero";
// import Features from "./features";
import Pricing from "./pricing";
import Footer from "./footer";
import LoadingSkeleton from "./loading";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box bg="black" color="white">
      <Header />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <Box as="main">
          <Hero />
          {/* <Features /> */}
          <Pricing />
        </Box>
      )}
      <Footer />
    </Box>
  );
}