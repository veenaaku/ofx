import React, { useState, createContext } from 'react'
import {Button} from 'react-bootstrap'
export const FormContext = createContext()

export const FormProvider = props => {
  const [ofxdata, setOfdata] = useState([])
  return (

    <FormContext.Provider value={[ofxdata, setOfdata]}>
      {props.children}
    </FormContext.Provider>
  )
}
