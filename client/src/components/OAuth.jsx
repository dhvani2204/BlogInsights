import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

function OAuth() {
    const auth=getAuth(app)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleGoogleClick=async()=>{
        const provider=new GoogleAuthProvider()
        provider.setCustomParameters({prompt:'select_account'})

        try{
            const resultsFromGoogle=await signInWithPopup(auth,provider)
            //console.log(resultsFromGoogle);
            const res=await fetch('/api/auth/google',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name:resultsFromGoogle.user.displayName,
                    email:resultsFromGoogle.user.email,
                    googlePhotoUrl:resultsFromGoogle.user.photoURL,
                }),
            })
        const data=await res.json()
        if(res.ok){
            dispatch(signInSuccess(data))
            navigate('/')
        }
        }catch(error){
            console.log(error);
        }

    }

  return (
    <Button className='w-80 h-10' color='gray' pill   style={{
        background: 'linear-gradient(to right, #FFC0CB, #FFA500)', // light to dark Blue gradient
        //color: 'white',
        display: 'flex', 
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        lineHeight: '1'}} type='button' onClick={handleGoogleClick}>
      <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
      Continue with Google
    </Button>
  )
}

export default OAuth
