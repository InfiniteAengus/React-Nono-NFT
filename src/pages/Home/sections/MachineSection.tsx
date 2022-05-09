import './MachineSection.scss'

const MachineSection = () => {
  return (
    <section className='section-machine container' id='machine'>
      <h2>NoNo</h2>
      <div className='line-group-1'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
        <div className='line-4'></div>
      </div>
      <div className='machine'>
        <img src='/images/home/panel_ok.gif' alt='panel-ok' />
        <h4>What is NoNo?</h4>
      </div>

      <div className='line-group-2'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
        <div className='line-4'></div>
      </div>
    </section>
  )
}

export default MachineSection
