interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps){
  return(
    <p className="bg-purple-900 w-10 h-10 text-white rounded m-2 text-center flex items-center justify-center">{props.completed}</p>
  )
}