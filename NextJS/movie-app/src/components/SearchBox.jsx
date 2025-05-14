"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'


export default function SearchBox() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Input type="text" placeholder="Search keywords..." className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1" value={search} onChange={(e) => setSearch(e.target_value)}/>
      <Button
        className="text-green-500 disabled:text-gray-500"
        disabled={search === ''}
      >
        Search
      </Button>
    </div>
  )
}
