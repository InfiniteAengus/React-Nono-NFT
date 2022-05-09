import './MButton.scss'

const MButton = (props: any) => {
  return (
    <div className='m-button'>
      <div className='m-button-back'></div>
      {props.text}
    </div>
  )
}

export default MButton
