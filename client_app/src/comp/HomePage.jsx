import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [message, setMessage] = useState("");

  useEffect(() => {
    // požiadavka na data na server na porte 3001
    fetch("http://localhost:3001") // port na ktorom bezi sever
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>{message}</div>
  )
}

export default HomePage