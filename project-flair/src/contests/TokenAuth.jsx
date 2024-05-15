import React, { Children, createContext, useEffect, useState } from 'react'
export const tokenAuthContest = createContext()


function TokenAuth({Children}) {
    const [isAuthorised,setIsAuthorised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorised(true)
        }else{
            setIsAuthorised(false)
        }
    },[isAuthorised])
}
  return (
   <>
   <tokenAuthContest.Provider value={{isAuthorised,setIsAuthorised}}>
    {Children}
   </tokenAuthContest.Provider>
   </>
  )

export default TokenAuth