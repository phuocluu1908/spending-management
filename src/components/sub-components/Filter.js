import React from 'react'
import styled from 'styled-components'

const Filter = () => {
  return (
    <Wrapper>
        <OderByWrapper>Oder by:</OderByWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: calc(100vw - 32px);
    height: 40px;
    margin: 0 auto;
`

const OderByWrapper = styled.div`
    width: fit-content;
    border: 1px solid black;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 4px;
`

export default Filter