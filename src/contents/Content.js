import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home 			 from './js/Home'
import DetailProduct 	 from './js/DetailProduct'

// Route of contents
const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail-product" component={DetailProduct} />

    </Switch>
  )
}

export default Content
