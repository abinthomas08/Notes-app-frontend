import React, { useEffect,useRef, useState } from 'react'
import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { createNotes, getNotes } from '../Redux/notes/note.actions'
import NoteCard from '../components/notes/NoteCard'

import {BsPlusLg} from  'react-icons/bs'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'



function NotesPage() {



  const dispatch = useDispatch()
  const{loading,error,data} =useSelector((state)=>state.noteReducer)
  const [notes,setNotes]=useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title,setTitle] =useState("")
  const [body,setBody] =useState("")
  
  useEffect(()=>{


    dispatch(getNotes())



  },[])

  useEffect(()=>{

    setNotes(data)

  },[data])


  const createNote =()=>{
    dispatch(createNotes({title,body}))
    onClose()
  }


  return (
    <Box mt={20} padding={8}  >
        <Grid 
        gap={10}
         w={"90%"}
          margin={"auto"} 
          gridTemplateColumns="repeat(4 ,1fr)"
          >

          {notes?.map((el)=><NoteCard{...el}/>)}

        </Grid>
        <IconButton boxShadow={"box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}

        position={"fixed"}
         w={"80px"} h={"80px"} 
          borderRadius={50}  bottom={0} 
           right={0} margin={16} 
            onClick={onOpen}
         icon={<BsPlusLg/>} >

        </IconButton>



        <>
        <IconButton
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          }
          position={"fixed"}
          w={"80px"}
          h={"80px"}
          borderRadius={50}
          bg={"yellowgreen"}
          bottom={0}
          right={0}
          onClick={onOpen}
          margin={16}
          icon={<BsPlusLg />}
        ></IconButton>

      

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

                <Input value={title}m placeholder="Please enter title" onChange={(e)=>setTitle(e.target.value)}></Input>
                <Textarea mt={8} value={body} placeholder={'Please enter description'} onChange={(e)=>setBody(e.target.value)}></Textarea>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNote}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>


        




        


    </Box>
  )
}

export default NotesPage