import React from 'react'
import { Card } from 'react-bootstrap'
import { FaReact, FaJs, FaNode, FaBootstrap, FaWordpress, FaGitAlt } from "react-icons/fa";

const Techstack = () => {
  return (
    <div>
    <Card>

      <Card.Body>
          <h1>
            <FaReact/>
            <FaJs/>
            <FaNode/>
            <FaBootstrap/>
            <FaWordpress/>
            <FaGitAlt/>
          </h1>

      </Card.Body>
    </Card></div>
  )
}

export default Techstack