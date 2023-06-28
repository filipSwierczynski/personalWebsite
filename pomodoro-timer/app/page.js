import Image from 'next/image'
import Timer from '../components/Timer'
import TaskManager from '../components/TaskManager'

export default function Home() {
  return (

   <main>
      <Timer/>
      <TaskManager/>
   </main>
  )
}
