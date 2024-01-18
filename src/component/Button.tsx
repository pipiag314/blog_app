interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <button className="py-2 px-4 min-w-[80px] bg-buttonColor rounded-xl text-xl font-bold">
        {text}
    </button>
  )
}
export default Button