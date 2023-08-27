import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { CardFilter } from './CardFilter'

export function Header({
  filterValue,
  onFilterChange,
  className,
}: {
  filterValue?: string
  onFilterChange?(value: string): void
  className?: string
}) {
  return (
    <Container className={className}>
      <Logo>Kanban board</Logo>

      <CardFilter />
      <CardFilter value={filterValue} onChange={onFilterChange} />
    </Container>
  )
}
