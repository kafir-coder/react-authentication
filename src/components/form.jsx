import React, { useEffect, useRef } from "react";

export function CustomForm(props) {
    const formRef = useRef(null);

  const handleRequest = async (email, password) => {
      try {
          const response = await fetch('http://localhost:8080/api/v1/auth/login', {
              method: 'POST',
              body: JSON.stringify({ email, password, type: 'driver' }),
              headers: {
                'Content-Type': 'application/json',
              }
          })

          if( response.status === 201) {
            const data = await response.json();
            localStorage.setItem("token", data.access_token)
            console.log('Deu certo');
          }else {
              console.log('Aconteceu uma outra coisa')
          }
      } catch (error) {
          console.log(error)
          console.log('Alguma coisa deu errado!!!')
      }
  }
    

  useEffect(() => {
     
  }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
    
        const {email, password} = formRef.current;

        console.log(email.value, password.value)

        handleRequest(email.value, password.value);
    }

    return (
      <form onSubmit={handleSubmit} ref={formRef}>
        <label>
          First Name:
          <input type="text"  name="email"/>
        </label>
        <br />
        <label>
          Last Name:
          <input type="password" name="password"/>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
}