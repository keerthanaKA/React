interface props {
    text:string;
}


const Alert = ({text}:props) => {
  return (
    <div className="alert alert-primary">{text}</div>
  )
}

export default Alert