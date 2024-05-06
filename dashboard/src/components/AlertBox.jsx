import React, { useState } from 'react'
import { Alert, Button } from "@material-tailwind/react";
export default function AlertBox({message}) {
     const [open, setOpen] = useState(true);
  return (
    <div className=' absolute right-3 top-4'>
     <Alert
     className=' bg-red-500'
        open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        {message}
      </Alert>
    </div>
  )
}
