import React from 'react';
import '../BrandsSection.css';

// Array of brand objects with name and logo path
const brands = [
  { name: 'Bambu Lab', logo: 'https://s3-alpha-sig.figma.com/img/6573/88b8/822a2207bfdf3794783072d1542b0379?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcIZEz-F0V0IFT~Zd6UPTuG060WgIYXkF830bCo~CoIw0IGBK5nh4Sz2C3wSqCot0Tw6A1bzpbP5jfYvVm4KAH-e5E1KG7vBP4bO3CJZNOYgdiN9yDho1sxaY~NLqFrLrtfKxUUA11KVy3U34SjrSewPyft~1Y9I5L5jkDisHXxvXA1r0JO0P~7pl8UKKAmm26pMwIcnujnCFWdlktA1WaRjWn9RI-1CTq454kJDkdCSfGVEQ-WX1Pq-s2Fq2JJ02bCXQRYDntuyAYwFZrhUzeqxJxMPGgkHc~hVZl1M2IFaSXT9nCQSVLFC4fEsoripCvKOnFLtkm-ryzHwZqG4HA__'
  , 
   logo1:"https://s3-alpha-sig.figma.com/img/c718/75fc/f33e406de1719af93d12688c1f3192d0?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFwDvwKrPIFz-tc16IdMakNNNjHIEgL6F5CM3And1uEwuH-uWpF2OnRKczEnbuRIu3V4nljS0n4BNb3bxjHwi4a55t2YiOmE88vqYZMUFnqqGsxq8iTiqFt5rGYC3BGlCDPSC9g1fiOP10JGKvUVcFnzNF2wZllS3CGqcSzKhFX1AsDWKoTL-RQCeeS6-6Xoq8PDnLcTRRNeetSy~le3NIk0yTB~nqu~f0hLuzr9ZcEHE0cvKnQByfygzsQr4jz0dqUpgsjD4g42N2oyHPVb8~Py~gTMG-6aM6mgfuV3t5rm7kY8KBR8Yf9WbcMhw~nYWni9y6a-N~pLkcj~l04MSw__"
   },
  { name: 'Creality', 
    logo1:"https://s3-alpha-sig.figma.com/img/34bc/049d/1ec9e6c7ae953ee9b710564727e68f99?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=na~xT1f9Whs5fLnI2FI7BMNe9v-VDBRcEuTJU-qC~xmgHXy0EqOZ~n2krW1BsdRsIUTHx8eZD-gXiGsUSk57kT84VUwEbpWPEN0qwn4iLX9h-nzYSfrCJaMR~IYJv6cNhu-fSW360aApob4ueL-OrXR59tcxvWqF2VL~cRKwYLuUbAJhQ1aUcdLp5nHyFQgi66pZz~F7jTlzcoBzCHTAPd24GcoBmbg3m63o~5vgbV4il3-2mrGWQCci93X-a-eh1C3hhJUL94qwE2dXbj0MuC~Q2SHV45AzePcEIXr~gVqF0E6kuB7GfRKZXQnC17T2DRSc7vzKTtPPYIyZpGUxIA__"
,
    logo: 'https://s3-alpha-sig.figma.com/img/d99c/a93b/02f1e1421b099f0c4b78de9d9e9316c3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sfob4UWhSdQqKdq9kfV0qNYPGawt8notIZfhzwU5a1L0G3jXNmDwck042oz6AGBEhbENk1U6yw6HEYuP5bD1JJTuRRrP1yvkrOhVwTvHtS2AdubLnpJkIAwqz15PKgD5NyeCABtollToWAy2CFr3Fviw8QbFrvBP2~DMo7kVdMORvptwGRCKFGpPwHR1CLObMA2CzlFTtqBHyTdZAcJ3mDo2b5R8bm94Qv3qyVRQw588KDMB60yT35gRMhBmTHSZ~GKZFuOwHpiCjodusAssouTllzQrgb7cZTeVs1fHJpAkxRvufdiHpmIeplS~fjyINB0dOknpiR20bTUlVsqX9A__' },
  { name: 'Phrozen', 
    logo1:
"https://s3-alpha-sig.figma.com/img/8810/196c/0bea754728d225e5cc34b421aecae27a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NCLqtytKCvcCmdpWbgQhaJUyQay6Kim93SSphm8aZ7I1rjUUvwvaQJaZcdukPLxrzY81lcuY5oLUwAF7Xa8S-iCpFw1ZVTAxLZ9cwuCAjKTSpHzYe0meiw90TcKkJPx8oOWIx96z8db9BNUb7Or9w3K9hEYWqbVNU177HTqRH5MvptuRvLHexnhT~ywPCrlkjtIojdC3V~L6gzRcI8b09jkRQKj9PyNtc68AOsZlKL7G~3Phdy1TGu-Xs8J1B3yvo6BvCZoo8guzX6z6j31tdJszbVO4R-w~Kbn2j3d8iGXlXZST6srVfjyA-YpgcqQkqkPITosoKS8fhX-JO86Nng__", 
    logo: 'https://s3-alpha-sig.figma.com/img/0502/e27c/abfbb106ee2617b8eca7adfc877fdfa8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hv0SlF7Yc3nL9rE1f1pa9IF8NrhJ2jRB~R~1wErwb~tAbvdevPyl6APFZZ2WnkKAzIguDqpzI3dWrUVCL0Swd01F0n5P4REsg34iJp82zSBQ0IYH5wCfmU2-~SR8NYBzcxtNPF-PgHDJQipt3q1HmKYwZHtoCxIR-TxJbWwyl0RIK5vxGw83bNd5q6oW8-FN8-MS4VO7ljCXpfEjk~DRf~Y3~LEWRYH0arv5jIP1g6Mweo1Hrf9aXm~sMj9jxDcxmOxZpbfl4xe5jONxNAfNg-jYO7oHLO3-2jKBObb8B0MXTEhpSC4W3YG~Ee1Saqm8hizBz8aD7iTFGvejBm~gLw__' },
  { name: 'Polymaker', 
    logo1:
    "https://s3-alpha-sig.figma.com/img/c718/75fc/f33e406de1719af93d12688c1f3192d0?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFwDvwKrPIFz-tc16IdMakNNNjHIEgL6F5CM3And1uEwuH-uWpF2OnRKczEnbuRIu3V4nljS0n4BNb3bxjHwi4a55t2YiOmE88vqYZMUFnqqGsxq8iTiqFt5rGYC3BGlCDPSC9g1fiOP10JGKvUVcFnzNF2wZllS3CGqcSzKhFX1AsDWKoTL-RQCeeS6-6Xoq8PDnLcTRRNeetSy~le3NIk0yTB~nqu~f0hLuzr9ZcEHE0cvKnQByfygzsQr4jz0dqUpgsjD4g42N2oyHPVb8~Py~gTMG-6aM6mgfuV3t5rm7kY8KBR8Yf9WbcMhw~nYWni9y6a-N~pLkcj~l04MSw__"
,
    logo: './path/to/polymaker-logo.png' },
  { name: 'eSun', 
    logo1:
"https://s3-alpha-sig.figma.com/img/2914/c4b8/345bab1b3db41accd3fc018025e4a4ae?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWBOLtRspDT3DwlDb4fsHXZ6NBE~lVZmtgJtX7aqwbLJJvWbJZmDwM5T-pdQUt17ZEG-Pm4EaRWfGzJak0oG6Hl9CPsZl2yPAuy8LO51d0BwTAtVR493GEusW5TZWPcwPFqEewYimo2W1HKawhxbM91G~kHbf9DUpymqZR8trHSlzuy56VSpOSjL3heH3~lrYzOVrptME6gAdJKvxF-QrF1Jp23rbZtPXoztqQ-yjHti0Js651a6LhgNyUyxddRO9kaPOWUYFDclItevhc2PWlENsigPJUWuhcintchERjOqbfmqaXeC7bY~lCKptySpj1bglIw9B182hYhJz~b7Og__",
    logo: 'https://s3-alpha-sig.figma.com/img/f744/ba26/fac7ba3c53ba4d677e2c9a63bac5a57e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dfUaTZp6FI5yDcLKtZoSiYcXxBW5KCyB4Yi2LnfAhyZ8UFfPo1JHxtHAZaxeg2OzJvFhLhZrLW-KeqBrqENjQvZiTTUoQWWGcw-DzHhJxRwns7afHz-8NhVFTysLytOJ7QxPnyisgIl62FM29DI272VzI2h4qWDMiyacD564XyvhavF9gcxTpq0PcoI1jJU6A-e4aoDi0LIhld3FwvEGHAFbfItb83OpcClzxZ~hMn4J3kVzq538x2jeHH3sg619YIEuv3WQoHLy6wbcCW54Qebjyhf5l~lAcvYcoDB0j9OfokRnfE~q0BmNaD2ZSydQf-fCu3bv4gTAqlnJ8I245g__' },
  { name: 'Jamg He',
    logo1:
"https://s3-alpha-sig.figma.com/img/7609/5dba/df440b3a85f320de9af515cbea3fad94?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G6PVfvTscVeOoJvnUKMXmy8XCB6jMI88faar5Fqz-7fBv9O0wpTISLYizJVonwnzX0Zm8ecrbJBJXwi2gy77YnscFGY6IkyXXENeH8nQUbg~-Q~hFwyXV3kiOVPATAJIS6UdLOw1VZWAIFDaurqyEP62Oh0OKIblsRCdNeMAaibZEkQ9DqokG9~wbRAAapkIfz2~IA5QwUi9OVt9jlXI11lcUMXS0VEpsM6Bw1Lo7EQwNbTCPuEQ1mG1jzNo-9vfFHgqXH6F9PdtYT779sbdA-VU1hHsqrI3M1q4rjZZYSetxLBSLcvaNY2jKXjcupX2sEBsZrvtDyVL1g7YcFBvPg__",
    logo: 'https://s3-alpha-sig.figma.com/img/2d0e/7f0e/560480fdfdaf665bb2ebda8c7943c8fd?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kl~aK5GeDp4DCQRNGrN0YOvcXkKi5rxIPMv2Y6eA7d9nGgLSqTVhZf2KYZcgTy~q9FWXoUwz753rJy2IHLZW9Xu7BCqOej5UUgoqqvaPmEsttNI-i3gm96yCkuP4MXOfVnuhXvgYiFhzKjuTJUk8ScITU5eDJRMrnnxMXKq0viL6aChUAY8Hl9K0LO~ficQmhiciglZG1ERqee5PKhxxM0sf2S6pwNyuca3Uu~yvxDNZW3Wpqp2bGMp5jCbwR9KRR6O6OvScS-Fw3pNJSYYZIqP2fCYcwU6D7OY~A2JYhhvdq9SsIahaOMjyT-tzvmJTUxvyivinocGWKaY9xBJSiA__' }
];

const BrandsSection = () => {
  return (
    <div className="brands-section">
      <div className="brands-header">
        <h2>Leading Brands</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="brands-logos">
        {brands.map((brand, index) => (<>
          <img key={index} src={brand.logo1}  alt={brand.name} title={brand.name} />
          </>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
