import React, { useState, useEffect, useContext } from 'react'
import { FormContext } from './FormContext'
import {Button} from 'react-bootstrap'

const QuickQuote = () => {
  const [apivalue, setApivalue] = useState({})
  const [ofxdata, setOfxdata] = useContext(FormContext)

  useEffect(() => {
    async function fetchData () {
      const res = await fetch(
        'https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json'
      )
      res
        .json()
        .then(res => setApivalue(res))
        .catch(err => console.log(err))
    }
    fetchData()
  })

  return (
    <div>
      <h2>QFX Customer Rate</h2>
      <span>{apivalue.CustomerRate}</span>
      <h2>From</h2>
      <h2>AUD {ofxdata.amount}</h2>
      {/* <h1>AUD {ofxdata}</h1>
      <h1>AUD {ofxdata.amount}</h1> */}
      <h2>TO</h2>
      <h2>USD {ofxdata.amount * apivalue.CustomerRate}</h2>


      <Button variant='primary'  type='submit'>
         NEWQUOTE
      </Button>
</div>
  )
}

export default QuickQuote
