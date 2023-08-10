import style from './button.module.css'

const Button = ({carType}) => {
  return (
    <button className={`${style.button} ${style[`button--${carType}`]}`}>Learn More</button>
  )
}

export default Button