import React from 'react';
import '../FlashSale.css';
import CartIcon from '../assets/images/Vector (12).png'
function FlashSale() {
  const products = [
    {
      id: 1,
      image: 'https://s3-alpha-sig.figma.com/img/7512/170f/96f315dacdc0943e96268e94569c70c1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FbppRj6KcXQ~4P6SoJA~lf7crgTEGnBMJEN7b3inN-XVsnkkVPz2BNtwDsvnpspAXTusmTtFc1Ndu5trPeRS7bVRYIYkHuR7TtghOe250580xrBBHG8tlJudcvZihT2SPfa3Dn~UiXRo4vzfphPH0xQNS~j~3sLh75LBKOnW~Y4A9oZwFVQZS4f3AqiVBF-86JUqNdJ9GWXCAexrCQWXBIh-gzt0S57kRsGc5wPJNSuaykSExkpruMMaUItMUveeMYbEm9nuZD6k5utaeZlrX9CmFBoSmYipuef7xKDvgqFTPptD-pa0KYvsUkn7S5D8LLJAQ08REIOadzqT9dxYdg__',
      title: 'Bambu Lab P1P',
      subtitle: 'High-Speed 3D Printing With Up To 20000 Mm/s² Acceleration',
      badge: "Editor's Choice",
      buttonLabel: 'Order now',
    },
    {
      id: 2,
      image: 'https://s3-alpha-sig.figma.com/img/3a0c/bce9/0ba41f0c537383c99a779bf3d6690d8f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CHWLnA~W~xWA~KBnmO7jtabhfYngs51rqNkNOXB0P8WE2eOF4Oj0~AoDT~ugu9JuLcbME5IjAPB4s6hq6AsOSIQ8I5VF01n0niySQ2QtjZ3KffoZOwuz8kMgJeZbZrwtZAbAITO8cfg~Z~y46lctlrwev9vKrf-8TVb7hQANeNac7OCSwD2TmyAir9p6GB0oLdnzrSsWd30rEx4PCdm-Gm98SUmnV6goST8GesZVRYfpazNoHytZUkkfUNPrJhwPYqtLyu6kFETgMYl9puLfKBAeFO84G1DnWtAYkF8pdeijyAPgecSyQdJFLq4u~pGY~N1oQ63R80H6JLJrQt-P6Q__',
      title: 'PPA-Cf',
      badge: 'Top Seller',
      buttonLabel: 'Order now',
    },
    {
      id: 3,
      image: 'https://s3-alpha-sig.figma.com/img/6206/af60/774a88e506c35626c47da66a288c6d6d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2w31-QCbdvO8oOZ07zZc32MTRxA7JTu4YNxtTuZA0oE888IFoPzc~fqM~MtQnInVnWUjKzXh90iQXCicESdjrYZxxwt4u3Oh~NJkL5x-PWf8-YAXUSMJWD2C1qMZrdKzsYPkiiXSKPXvIsH5UNi9u3IpBgZ~DSM-XjozYS9trTX6nB1DyyQPtvJXM6poxGtGYe7KVDdYIJ4Qcic78vHltxuag1XByNU8aVoMTOc6CRJjpp00HuaKc~1uCfbQCAs~N9hhKEteHE2FJ0kpbGT8TH~MrMx412K8McVfxSojYOSAYlFY9InzUSlOPL-ppSO-U6WuqVos2eaut1zlmEM7w__',
      title: 'Glue Stick For Build Plate',
      badge: 'Top Seller',
      buttonLabel: 'Order now',
    },
    {
      id: 4,
      image: 'https://s3-alpha-sig.figma.com/img/a627/2573/2d5cf97e5eee3c14697c1ded123a4b9b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amlgCSHdfjMyC4Lp9nLbjtxcAUCwsnC0bSfF8A-PlTtA28qUCryG~08AsRvJtgZopyo5TrCZsDEW-nmth1dKAtJBBuylvUuBgAZWcvO0ZXWDjPyL60Kba9ZgSIoF9G49NNx6ogxkbbsPk9FuX0-0AvzRLDyS~mcjxZb24tBKRmGRdpDs-f9Z0Xi0I6TyoRK7L6V9JJIusntrz34oVF9YVgxY0f4bI~iljPwptbCBOtoa7d1lCZJJ7X3NNIcqYp0ECP2LGcffPFOETpHeim-ch1xOFfWLo38HQRHb6yZ9gV5nitOlZ6PZ-LkYFIJ4kMy8D2tic6LIEw97agQW4gCftA__',
      title: 'PPA-Cf',
      badge: 'Top Seller',
      buttonLabel: 'Order now',
    },
    {
      id: 5,
      image: 'https://s3-alpha-sig.figma.com/img/1a1d/15a5/6e7f4e5c4e06dae001b6a4a4bf1a592e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1GCE2UVymFOayRnL4rzn689~8NLwh-WNTiodIhtFZ1GF6ByPiIq93xuUSlnGL4S2vh6-h6xHoH0507ix5-Fd3bvNcX7kPGPPd3KJBssq6KaO7NQVNFhfeI-IrSniZHcQ0phTD019ELG4VmKBSXlaB1IUpKMlCUJY1rfwALAorvE18aHhRwrb~RgMv8iVXND2MyXOFMDMv~NZa8odtkwLrjdGA8zKXtitj1ebINi~FMI0-rKpkaPks86~Ojygs4NJVuoTI9n1Vm91GNptBFXccLgNqaQF~Im6wECK8v12GBINt0f6E0ZDdaaGgMJYciRpR6Y~yHGcXv8nIqlqqL5NQ__',
      title: 'Glue Stick For Build Plate',
      badge: 'Top Seller',
      buttonLabel: 'Order now',
    },
  ];

  return (
    <div className="flash-sale">
      <h1>Flash Sale</h1>
      <div className="flash-sale-grid">
        {products.map((product,index) => (
          <div key={product.id} className="flash-sale-card" id={`item`+index} >
            
         {   index===0? '': <div className="badge">{product.badge}</div>}
            <button className="cart-button1"><img src={CartIcon}/></button>
            <div className='product-info1' >
              <h2>{product.title}</h2>
              {product.subtitle && <p>{product.subtitle}</p>}
              <button className="order-button">{product.buttonLabel}</button>
            </div>
            <img src={product.image} alt={product.title} className="product-image" />
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSale;
