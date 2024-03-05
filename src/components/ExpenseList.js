import React from 'react'
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, initialExpenses, handleEdit, clearItems}) => {
    return (
      <>
        <ul className='list'>
            {/* Expense Item */}
            {initialExpenses.map(expense => {
                return(
                    <ExpenseItem 
                        expense = {expense} 
                        key={expense.id} 
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                )
            })}
        </ul>
        <button className='btn' onClick={clearItems}>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  }

export default ExpenseList