'use client'

import React from "react"
import { Button } from "./ui/button"
import { Minus, Plus } from "lucide-react"

const Counter = () => {
    const [count, setCount] = React.useState(1)
    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleSubtract = () => {
        setCount(count > 1 ? count - 1 : 1)
    }
  return (
    <div className="flex items-center gap-2">
        <Button onClick={handleSubtract}><Minus/></Button>
        <span>{count}</span>
        <Button onClick={handleAdd}><Plus/></Button>
    </div>
  )
}

export default Counter