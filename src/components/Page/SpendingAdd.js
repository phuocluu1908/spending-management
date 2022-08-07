import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import TextField from '../common/TextField'

const SpendingAdd = () => {
  return (
    <Wrapper>
        <TextField placeholder='Name' />
        <TextField placeholder='Price' />
        <TextField placeholder='Description' />
        <Button text='Add' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: calc(100vw - 32px);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px;
    margin: 0 auto;
`

export default SpendingAdd