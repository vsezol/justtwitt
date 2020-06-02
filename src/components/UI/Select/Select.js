import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  position: fixed;
  top: 55px;
  padding: 5px;
  right: 5px;
  border-radius: 5px;
  background: ${({ theme }) => theme.defColor};
  color: ${({ theme }) => theme.linkColor};
  font-size: 1rem;
  font-family: 'Roboto-Bold';
  border: none;
  outline: none;
  cursor: pointer;
`
const Option = styled.option`
  background: ${({ theme }) => theme.defColor};
  color: ${({ theme }) => theme.linkColor};
`

export default ({ options, onChange }) => {
  return (
    <Select onChange={onChange}>
      {options.map(({ value, label }, index) => (
        <Option key={index} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  )
}
