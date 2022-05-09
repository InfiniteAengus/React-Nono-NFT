import React, { useState } from 'react'

import './style.scss'

const MintPage = () => {
  const [mintAmount, setMintAmount] = useState<number>(1)

  return (
    <main className='mint-page container'>
      <section className='section-nft'>
        <div className='nft-background'></div>
        <img src='/images/mint/origin.gif' alt='nft' />
      </section>
      <section className='section-mint'>
        <div className='mint-box'>
          <h2>Mint your NoNo NFT</h2>
          <h3> 0/0 NoNo NFT minted</h3>
          <div className='mint-amount'>
            <div onClick={() => setMintAmount(mintAmount - 1)}>-</div>
            <div>{mintAmount}</div>
            <div onClick={() => setMintAmount(mintAmount + 1)}>+</div>
          </div>
          <div className='price-wrapper'>
            <div className='price-box'>
              <p>0.0 ETH</p>
              <span>Single NFT Price</span>
            </div>
            <div className='price-box'>
              <p>0.0 ETH</p>
              <span>Total NFT Price</span>
            </div>
          </div>

          <button>Mint</button>
        </div>
      </section>
    </main>
  )
}

export default MintPage
