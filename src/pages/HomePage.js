import React from 'react'
import {Box,Heading,Image, Text} from "@chakra-ui/react"
import Navabar from '../components/HomePage/Navbar/Navabar'
import note from "../assets/note.png"

function HomePage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        Note App
      </Heading>

      <Text mt={8}  maxW={"50%"} textAlign={"justify"}>
        A note application is a software program designed to help users keep
        track of their thoughts, ideas, and important information in a digital
        format. It allows users to create, edit, and organize notes in an
        efficient and user-friendly way. One of the main features of a note
        application is its ability to create and store notes in various formats
        such as text, images, audio, and video. This makes it easier for users
        to capture and organize their ideas in a way that best suits their
        needs. Another important feature of a note application is its
        organizational capabilities. Users can categorize their notes by topics
        or tags, making it easier to search and find specific notes. Many
        note-taking applications also offer a search function that allows users
        to quickly locate notes based on keywords or phrases. Collaboration is
        another key feature of a note application. Users can share their notes
        with others, either through email or by granting them access to the
        application itself. This allows for easy collaboration on projects or
        group assignments. Finally, note applications often offer
        synchronization across multiple devices, allowing users to access their
        notes from anywhere, at any time. This feature is particularly useful
        for people who work on multiple devices or need to access their notes on
        the go.
      </Text>
    </Box>
  );
}

export default HomePage
