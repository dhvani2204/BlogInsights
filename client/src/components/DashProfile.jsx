import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import {useSelector} from 'react-redux'
import { useState,useRef, useEffect } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import {app} from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function DashProfile() {
    const {currentUser}=useSelector((state)=>state.user);
    const [imageFile, setImageFile]=useState(null);
    const [imageFileUrl,setImageFileUrl]=useState(null);
    const [imageFileUploadProgress,setImageFileUploadProgress]=useState(null);
    const [imageFileUploadError,setImageFileUploadError]=useState(null);

//console.log(imageFileUploadProgress,imageFileUploadError);
    const filePickerRef=useRef();


    const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if(file){
            setImageFile(e.target.files[0]);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };
    useEffect(()=>{
        if(imageFile){
            uploadImage();
        }
    },[imageFile]);

    const uploadImage=async()=>{
        setImageFileUploadError(null);
        const storage=getStorage(app);
        const fileName=new Date().getTime()+imageFile.name;
        const storageRef=ref(storage,fileName);
        const uploadTask=uploadBytesResumable(storageRef,imageFile);
        uploadTask.on(
            'state_changed',
            (snapshot)=>{
                const progress=
                (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                setImageFileUploadProgress(progress.toFixed(0));
            },
            (error)=>{
                setImageFileUploadError('Could not upload image (File must be less than 2 MB')
                setImageFileUploadProgress(null);
                setImageFile(null);
                setImageFileUrl(null);
            },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                setImageFileUrl(downloadURL);
            }
        );
    }
);
    }
   // console.log(imageFile,imageFileUrl);
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'> 

      <input type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
      <div className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={()=>
    filePickerRef.current.click()}>
      {imageFileUploadProgress &&(
        <CircularProgressbar value={imageFileUploadProgress||0} text={`${imageFileUploadProgress}%`}
        strokeWidth={5}
        styles={{
            root:{
                width:'100%',
                height:'100%',
                position:'absolute',
                top:0,
                left:0,
            },
            path:{
                stroke:`rgba(62,152,199 ${imageFileUploadProgress/100})`,
            },
        }}
        />
      )}
    
    <img src={imageFileUrl || currentUser.profilePicture} alt="user" 
      className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${imageFileUploadProgress && imageFileUploadProgress<100 && 'opacity-60'}`}
        />
      </div>
      {imageFileUploadError &&(
        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">{imageFileUploadError}</span>
        </div>
      )}
      <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}/>
      <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email}/>
      <TextInput type='password' id='password' placeholder='password'/>            
      <Button type='submit' className='w-180 h-10 rounded-full' color='gray' pill   style={{
            background: 'linear-gradient(to right, #ADD8E6,#00008B)', // light to dark Blue gradient
            color: 'white', 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: '999px',
            lineHeight: '1'
        }}>
      Update
      </Button>
      </form>
      <div className='text-red-500 flex justify-between mt-5'>
      
      <span className='cursor-pointer'> Delete Account</span>
      <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default DashProfile
