import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size = 'medium', 
  shape = 'rounded-md',
  className = ''
}) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg'
  }
  
  return (
    <button className={`
      bg-blue-500 text-white 
      ${sizeClasses[size]} 
      ${shape} 
      ${className}
      hover:bg-blue-600
    `}>
      {title}
    </button>
  )
}

export default Button