import React from 'react'
import { CubeGrid } from 'styled-spinkit'

export default function LoadingSpinner(props) {
  return (
    <CubeGrid size={props.size || 128} />
  )
}
