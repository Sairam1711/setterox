import React from 'react';
import '../BrandsSection.css';

// Array of brand objects with name and logo path
const brands = [
  { name: 'Bambu Lab', logo: 'https://s3-alpha-sig.figma.com/img/6573/88b8/822a2207bfdf3794783072d1542b0379?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcIZEz-F0V0IFT~Zd6UPTuG060WgIYXkF830bCo~CoIw0IGBK5nh4Sz2C3wSqCot0Tw6A1bzpbP5jfYvVm4KAH-e5E1KG7vBP4bO3CJZNOYgdiN9yDho1sxaY~NLqFrLrtfKxUUA11KVy3U34SjrSewPyft~1Y9I5L5jkDisHXxvXA1r0JO0P~7pl8UKKAmm26pMwIcnujnCFWdlktA1WaRjWn9RI-1CTq454kJDkdCSfGVEQ-WX1Pq-s2Fq2JJ02bCXQRYDntuyAYwFZrhUzeqxJxMPGgkHc~hVZl1M2IFaSXT9nCQSVLFC4fEsoripCvKOnFLtkm-ryzHwZqG4HA__' },
  { name: 'Creality', logo: 'https://s3-alpha-sig.figma.com/img/d99c/a93b/02f1e1421b099f0c4b78de9d9e9316c3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sfob4UWhSdQqKdq9kfV0qNYPGawt8notIZfhzwU5a1L0G3jXNmDwck042oz6AGBEhbENk1U6yw6HEYuP5bD1JJTuRRrP1yvkrOhVwTvHtS2AdubLnpJkIAwqz15PKgD5NyeCABtollToWAy2CFr3Fviw8QbFrvBP2~DMo7kVdMORvptwGRCKFGpPwHR1CLObMA2CzlFTtqBHyTdZAcJ3mDo2b5R8bm94Qv3qyVRQw588KDMB60yT35gRMhBmTHSZ~GKZFuOwHpiCjodusAssouTllzQrgb7cZTeVs1fHJpAkxRvufdiHpmIeplS~fjyINB0dOknpiR20bTUlVsqX9A__' },
  { name: 'Phrozen', logo: 'https://s3-alpha-sig.figma.com/img/0502/e27c/abfbb106ee2617b8eca7adfc877fdfa8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hv0SlF7Yc3nL9rE1f1pa9IF8NrhJ2jRB~R~1wErwb~tAbvdevPyl6APFZZ2WnkKAzIguDqpzI3dWrUVCL0Swd01F0n5P4REsg34iJp82zSBQ0IYH5wCfmU2-~SR8NYBzcxtNPF-PgHDJQipt3q1HmKYwZHtoCxIR-TxJbWwyl0RIK5vxGw83bNd5q6oW8-FN8-MS4VO7ljCXpfEjk~DRf~Y3~LEWRYH0arv5jIP1g6Mweo1Hrf9aXm~sMj9jxDcxmOxZpbfl4xe5jONxNAfNg-jYO7oHLO3-2jKBObb8B0MXTEhpSC4W3YG~Ee1Saqm8hizBz8aD7iTFGvejBm~gLw__' },
  { name: 'Polymaker', logo: './path/to/polymaker-logo.png' },
  { name: 'eSun', logo: 'https://s3-alpha-sig.figma.com/img/f744/ba26/fac7ba3c53ba4d677e2c9a63bac5a57e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dfUaTZp6FI5yDcLKtZoSiYcXxBW5KCyB4Yi2LnfAhyZ8UFfPo1JHxtHAZaxeg2OzJvFhLhZrLW-KeqBrqENjQvZiTTUoQWWGcw-DzHhJxRwns7afHz-8NhVFTysLytOJ7QxPnyisgIl62FM29DI272VzI2h4qWDMiyacD564XyvhavF9gcxTpq0PcoI1jJU6A-e4aoDi0LIhld3FwvEGHAFbfItb83OpcClzxZ~hMn4J3kVzq538x2jeHH3sg619YIEuv3WQoHLy6wbcCW54Qebjyhf5l~lAcvYcoDB0j9OfokRnfE~q0BmNaD2ZSydQf-fCu3bv4gTAqlnJ8I245g__' },
  { name: 'Jamg He', logo: 'https://s3-alpha-sig.figma.com/img/2d0e/7f0e/560480fdfdaf665bb2ebda8c7943c8fd?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kl~aK5GeDp4DCQRNGrN0YOvcXkKi5rxIPMv2Y6eA7d9nGgLSqTVhZf2KYZcgTy~q9FWXoUwz753rJy2IHLZW9Xu7BCqOej5UUgoqqvaPmEsttNI-i3gm96yCkuP4MXOfVnuhXvgYiFhzKjuTJUk8ScITU5eDJRMrnnxMXKq0viL6aChUAY8Hl9K0LO~ficQmhiciglZG1ERqee5PKhxxM0sf2S6pwNyuca3Uu~yvxDNZW3Wpqp2bGMp5jCbwR9KRR6O6OvScS-Fw3pNJSYYZIqP2fCYcwU6D7OY~A2JYhhvdq9SsIahaOMjyT-tzvmJTUxvyivinocGWKaY9xBJSiA__' }
];

const BrandsSection = () => {
  return (
    <div className="brands-section">
      <div className="brands-header">
        <h2>Leading Brands</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="brands-logos">
        {brands.map((brand, index) => (
          <img key={index} src={brand.logo} alt={brand.name} title={brand.name} />
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
