import { Button, Select,FileInput, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
    <h1 className='text-cwenter text-3xl my-7 font-semibold'>
    Create a Post
    </h1>
    <form className='flex flex-col gap-4'>
    <div className='flex flex-col-gap-4 sm:flex-row justify-between'>
    <TextInput type='text' placeholder='Title' required id='title'
    className='flex-1'/>
    <Select>
    <option value="uncategorized"> Select a category</option>
    <option value="javascript"> JavaScript</option>
    <option value="react">React.js</option>
    <option value="nextjs"> Nextjs</option>
    </Select>
    </div>
    <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
    <FileInput type='file' accept='image/*'/>
    <Button type='button' className='w-80 h-10 rounded-full' color='gray' pill   style={{
        background: 'linear-gradient(to right, #ADD8E6,#00008B)', // light to dark Blue gradient
        color: 'white', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: '999px',
        lineHeight: '1'
        
    }}>
    Upload Image
</Button>
    </div>
    <ReactQuill theme='snow' placeholder='Write something...' className='h-72 mb-12' required/>
    <Button type='submit' className='w-full h-10' color='gray' pill   style={{
        background: 'linear-gradient(to right, #FFC0CB, #FFA500)', // light to dark Blue gradient
        //color: 'white',
        display: 'flex', 
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        lineHeight: '1'}}>
        
        Publish
        </Button>
    
    </form>
      
    </div>
  )
}

export default CreatePost
