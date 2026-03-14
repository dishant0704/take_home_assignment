import { type JSX, type ReactNode } from 'react'

type CardProps = { children: ReactNode; title: string; }

const Card = ({children, title}: CardProps): JSX.Element => {  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  )
}

export default Card
