import React from 'react'
import Loader from 'react-loader-spinner'

import './styles/index.sass'

export default function () {
  return (
    <div className="marfeel__Spinner">
      <Loader
        type="Puff"
        color="#00BFFF"
        height="72"
        width="72"
      />
    </div>
  )
}
