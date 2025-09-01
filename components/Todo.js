import React from 'react'

const Todo = ({id, title, description ,mongoId , iscompleted , DeleteTodo , completeTodo}) => {
  return (
         <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th scope='row' className='px-6 py-4 font-medium'>
                {id+1}
            </th>
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white ${iscompleted ? 'line-through' : ''}">
        {title}
      </td>
      <td className="px-6 py-4 ${iscompleted ? 'line-through' : ''">
        {description}
      </td>
      <td className="px-6 py-4">
        {iscompleted?"Completed":"Not Completed"}
      </td>
      <td className="px-6 py-4 flex gap-1">
        <button onClick={()=>DeleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600'>Delete</button>
        <button onClick={()=>completeTodo(mongoId)} className='py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 ml-2'>Done</button>
      </td>
    </tr>
  );
};
export default Todo