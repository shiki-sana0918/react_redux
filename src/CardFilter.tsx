import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { SearchIcon as _SearchIcon } from './icon'

  export function CardFilter({
    value,
    onChange,
  }: {
    value?: string
    onChange?(value: string): void
  }) {
    return (
      <Container>
        <SearchIcon />
        <Input
          placeholder="Filter cards"
          value={value}
          onChange={ev => onChange?.(ev.currentTarget.value)}
        />
      </Container>
    )
  }
 