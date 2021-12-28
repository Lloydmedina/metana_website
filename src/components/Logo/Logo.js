import React from 'react';
import Image from 'next/image'

const MetanaLogo = () => (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
<Image
  alt='Metana'
  src='/images/metana_bg.png'
  layout='fill'
  objectFit='contain'
/>
</div>
);

export default MetanaLogo;