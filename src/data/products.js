export const products = [
  { 
    title: 'Group Cover', 
    icon: 'mdi-account-group', 
    from: 'R299/mo',
    tagline: 'Comprehensive burial and life cover for Companies, Churches, stokvels, and burial societies.',
    details: 'At Afrosurance Brokers, we understand the differing funeral needs for our clients. Our groups range from Companies, Churches, stokvels, burial societies and funeral parlours who are particularly concerned about funeral benefits for their members and their members families.',
    // The 4 bullet points that appear at the top of the expanded card
    topFeatures: [
      'Up to 10 members included', 
      'Centralized admin portal', 
      'Payout amount for each person', 
      '48-hour claims payout'
    ],
    tiers: [
      { 
        name: 'Members Only', 
        benefit: 'R40k', 
        desc: 'Main member cover.',
        learnMore: 'Immediate payout for valid claims.'
      },
      { 
        name: 'Member + Family', 
        benefit: 'R30k', 
        desc: 'Cover for dependents on certificate.',
        learnMore: 'Spouses and children included.'
      },
      { 
        name: 'Member + 9', 
        benefit: 'R20k', 
        desc: 'Up to 9 extended dependents.',
        learnMore: 'Ideal for support networks.'
      }
    ]
  },
  { 
    title: 'Personal Cover', 
    icon: 'mdi-shield-account', 
    from: 'R85/mo',
    tagline: 'Simple, immediate protection for you and your family.',
    details: 'At Afrosurance Brokers, we understand the differing funeral needs for our clients. As such, we have designed our products based on the differing affordability levels of our clients to offer a decent final send off to their clients. Our benefit payouts go up to R20 000 with a premium from as little as R85 per month. Below is what our product offers:',
    topFeatures: [
      'Cover for the Principal Member and up to 9 dependents', 
      'Basic funeral benefit for both natural and accidental deaths', 
      'The benefit will be paid out in cash', 
      'Cover continues for as long as premiums are paid'
    ],
    tiers: [
      { 
        name: 'Bronze Package', 
        image: '/images/medals/bronze.png', 
        desc: 'Up to R5K benefit payout' 
      },
      { 
        name: 'Silver Package', 
        image: '/images/medals/silver.png', 
        desc: 'Up to R10K benefit payout' 
      },
      { 
        name: 'Gold Package', 
        image: '/images/medals/gold.png', 
        desc: 'Up to R15K benefit payout' 
      },
      { 
        name: 'Platinum Package', 
        image: '/images/medals/platinum.png', 
        desc: 'Up to R20K benefit payout' 
      }
    ]
  },
  { 
    title: 'Loans', 
    icon: 'mdi-cash-fast', 
    from: '5% interest',
    tagline: 'Access quick, reliable credit for emergencies or business growth.',
    details: 'Get quick cash injections for emergencies or business growth with flexible repayment terms via mobile money.',
    topFeatures: [
      'Instant mobile approval', 
      'No credit check required', 
      'Flexible weekly repayments', 
      'Funds sent in 10 minutes'
    ],
    tiers: [
      { name: 'Micro Loan', benefit: 'R2k', desc: 'Emergency/immediate cash.' },
      { name: 'Business Boost', benefit: 'R10k', desc: 'Trader growth capital.' },
      { name: 'Education', benefit: 'R5k', desc: 'School fee support.' }
    ]
  },
  { 
    title: 'Device Cover', 
    icon: 'mdi-cellphone-check', 
    from: 'R89/mo',
    tagline: 'Secure your smartphone or tablet from theft and damage.',
    details: 'Affordable protection against screen cracks and theft. Simple claims process through our WhatsApp channel.',
    topFeatures: [
      'All smartphone brands', 
      'Worldwide coverage', 
      'Liquid damage protection', 
      'Theft replacement'
    ],
    tiers: [
      { name: 'Lite', benefit: 'Repair', desc: 'Screen damage only.' },
      { name: 'Plus', benefit: 'Full', desc: 'Damage & liquid cover.' },
      { name: 'Max', benefit: 'Replace', desc: 'Theft & total loss.' }
    ]
  }
]