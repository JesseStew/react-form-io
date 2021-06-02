import React from 'react'
import {Form} from '@formio/react'

function form() {
  return (
    <div>
      <Form src="https://zeewhaecmougdbj.form.io/event" onSubmit={console.log('submitted yo')} />
    </div>
  )
}

export default form
