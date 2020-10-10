
export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    disabled?: boolean
    children?: React.ReactNode
}

const Button = (props) => {
    const {
        onClick,
        disabled,
    } = props
    return (
        <button disabled={disabled} onClick={onClick} className="button">
            {props.children}
        </button>
      )
}

export default Button