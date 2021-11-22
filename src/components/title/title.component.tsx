import * as React from "react"

export interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}
