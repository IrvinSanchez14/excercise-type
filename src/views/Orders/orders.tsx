import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetData, TodosProps } from 'src/api/api'

const styles = {
  body: {
    fontFamily: 'Arial',
    display: 'flex',
    padding: 0,
    justifyContent: 'center',
  },
  table: {
    border: '3px solid #ddd',
  },
  th: {
    padding: '10px',
    backgroundColor: 'orange',
    color: 'black',
  },
  td: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#fed8b1',
    color: 'black',
    textAlign: 'center' as const,
  },
}

const Orders = () => {
  const [lisData, setListData] = useState<Array<TodosProps>>([])

  const fetchData = async () => {
    const a = new GetData()
    const data = await a.extractingData()
    setListData(data)
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <h1>Orders screen</h1>
      <Link to="/">Visit Home Page</Link>
      <br />
      <Link to="/pagethree">Visit Create Order</Link>
      <br />
      <div style={styles.body}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Completed</th>
            </tr>
          </thead>
          <tbody>
            {lisData.map((list: TodosProps) => {
              return (
                <tr key={list.id}>
                  <td style={styles.td}>{list.id}</td>
                  <td style={styles.td}>{list.title}</td>
                  <td style={styles.td}>{list.completed ? 1 : 0}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
