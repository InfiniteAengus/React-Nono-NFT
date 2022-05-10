import React, { useState } from 'react'

import './FaqSection.scss'

const faqContent = [
  {
    title: '1. When Mint?',
    content: 'TBD.',
  },
  {
    title: '2. What is the Price?',
    content: 'Less than 0.08 Eth, to be decided.',
  },
  {
    title: '3. Supply?',
    content: '8080.',
  },
  {
    title: '4. Full IP rights?',
    content:
      'Yes, we have full commercial permission from TAOMEE. More information can be found in White Paper.',
  },
  {
    title: '5. Secondary Markets?',
    content: 'Opensea',
  },
  {
    title: '6. How to get Pre-Sale access?',
    content: 'Giveaways + Raffles (Twitter + Discord)',
  },
  {
    title: '7. Smart Contract?',
    content: 'ERC-721A',
  },
  {
    title: '8. What wallet for mint?',
    content: 'MetaMask.',
  },
]

const FAQSection = () => {
  const [openFaqInd, setOpenFaqInd] = useState<number>(-1)

  const handleFaqOpen = (index: any) => {
    if (index !== openFaqInd) {
      setOpenFaqInd(index)
    } else {
      setOpenFaqInd(-1)
    }
  }

  return (
    <>
      <div className='line'></div>

      <section className='section-faq container' id='faq'>
        <img src='/images/home/small_down_up.gif' alt='small' />
        <h2>Q&A</h2>
        <div className='faq-wrapper'>
          {faqContent.map((faq, index) => (
            <div
              className={`faq-item ${openFaqInd === index ? 'opened' : ''}`}
              key={`faq_${index}`}
            >
              <div className='faq-title' onClick={() => handleFaqOpen(index)}>
                <span>{faq.title}</span>
              </div>
              <div className='faq-content'>{faq.content}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default FAQSection
