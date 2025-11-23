import React, { useState } from 'react'
import { CalendarPlusIcon, ClapperboardIcon }  from 'lucide-react'
import { Button } from './ui/button'

const Appreciation = () => {
  const [isAppreciated, setIsAppreciated] = useState(false)

  const handleClick = () => {
    setIsAppreciated(!isAppreciated)
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      {isAppreciated ? (
        <ClapperboardIcon className="mr-2 text-red-500" />
      ) : (
        <CalendarPlusIcon className="mr-2 text-gray-400" />
      )}
      Appreciate
    </Button>
  )
}

export default Appreciation