import './Button.css'


const Button = (props) => {

    return(

        <div className="btn-parent">

           <a href="#">{props.btnName}</a>

        </div>

    )

}
export default Button;