import React from 'react'

export default function CategoryTable() {
  return (
     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
       <tr>
         <th scope="col" class="px-6 py-3">
           Category
         </th>

         <th scope="col" class="px-6 py-3">
           Action
         </th>
       </tr>
     </thead>
     <tbody>
       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <td class="px-6 py-4">Laptop</td>
         {/* <td class="px-6 py-4">
               $2999
           </td> */}
         <td class="px-6 py-4 space-x-5">
           <a
             href="#"
             class="font-medium  btn btn-primary "
           >
             Edit
           </a>
           <a
             href="#"
             class="font-medium btn btn-error text-white"
           >
             Delete
           </a>
         </td>
       </tr>
     </tbody>
   </table>
  )
}
