import React from 'react';
import '../Gallery.css';

// Define image paths in an array
const imagePaths = [
  'https://s3-alpha-sig.figma.com/img/8a80/9007/15fd704d4efcfefddba84b9566065e63?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oEQSYL-OgZYOW~zDk1uajQHkkq3yMXNSko6ujEzeQfKcukIjrq3nhwoctAQ~h8KtpCGtxaLjHPircwrBh~ZraWWNdCVNxMh5jG1CC2LHAmbxqxRVP5m4EuxtBYknYrfLLbROnEy8mDu7kEQmktsWwWmRUODwPWn1jd9DAVG89UfPyLQXk-tRKe9wHzGdw0wPoB-vL8rReLmVpB3nHePnSKqXBY~nU6vv0pNCw-86wcTenXHeBrATubQ-oYFAyRmLqN92gCnAFK4HSFl~cT~NA8LC8zCVWWNXBQpfaPvfQeJ74Xw81wluaewOgHeVxhGvsiAc7cOS3189WPwk3UNMGA__',
  'https://s3-alpha-sig.figma.com/img/e72f/628f/4633138a7f8eeb1354ab68be1d3214f5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=II1UbeBuhqRDGcuv3kEDZroAFofed5GBwkKy44XQlXRG3TD~BVMYRJBl75W9Jd3jPEtElj116fA5760z-gJ~QaYn519JUSEehASOU5EotTBB3g4eGINjo2V3GLwAV8b8ubmMMe3Pg498YWowvZt5dwTtHQuoMzJukREx6nK51tY~Ey9OKFf3QXBL6kNI28loIZ0owe5JRKSk04oT5v7TwpvPXNbp70q01CHnxBN~ukiST3JOegrCCljBYEJxc08-La63sVWi6bENmhy~puLYXlwTGC~z7~K8MBLf5vtlFzohvgTu3nIQOeP4pSKqfIutoYYP7~YmsNygfAfmbjAIbg__',
  'https://s3-alpha-sig.figma.com/img/79ec/f518/474c0d8cbf7f009ee5c3cd5eea0396e9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqxN18me9~rOmUNY6pAjUqycqnDwyyJuULQ29w2qT6a9cTooRu-enFq551~QNYmh9HOzB37iA~pbTavcRieDmY6b94GtbCnwrOH3Pt5HLIZVQrpBslxdXQYrfBSWD1ExTe0FSkbKyztLncbbeE5oZj1T~Kqd6zPLFyPbupTeAM8B3xJfeAnAmn5iTAOLp0EnshK8Agee-kaCMZwdsP3EfwQ7Jt04c5tNqZxv9dqqoak87HFfpgGBLg2xByeM2mRgjWsU2dcVUoQ5IqMXsUd1BxB~9TYzae-~-Ww0OLSok6~ZioXnUKSKsk~Lw1yaL96BH18BeckP6nCo6j8oLL2HMg__',
  'https://s3-alpha-sig.figma.com/img/a38b/d5dc/c031fea76734f0f683bcae5c273362b6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNAFxgwyiq40~o0mAx70zi5x4xQB~lzAz9WkY5A5l~caSQAqcdk~2o2~RBC4Gg790-Zmt0eqU7ARq5xMS4z7VQee1F5uzdqR3l40mh3R90Dvsw8-92Wc--ALnMk8Y0GQnB-zIqlbBxwZI3gghO0C5DLln6kcnRIeDZZRp02n0LCdDygTyVGICjfqOxlaguvEjeCWKdW7fuKKnxw~8qDs4idjkFjF1qQRXCB5-GvKyGp5mtFvvuVtigMC2Vqf3gQq9yUGriri00y5dvELXq5nxqoWNcQk5VuILocidU91xDvBOLq~fXWZnHhYBDcK5bV0lTM~8tr2lL8tQzfKFHgwXQ__',
  'https://s3-alpha-sig.figma.com/img/cab6/3a73/c8117c8e2024f296d497ab7af95ae206?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cQYkLZ3Ytu1XJIAkI14YRCDM3a3HrdsWeqrbmTFa11b~ld~RFRG36EcQP-48Az8cUhrBg1EXARYcjOikF066xdVkH7LMJdwoYnXSt32bIEnXhGeWkn0KiV~N3~rXJ0TeXOC52xC~5FIC2ra3xXeB95wE-bi3-ORkxhI~DUlRW21NXd04u7XdUFmQKwhnu7nfUWSDF8d-Ydz1A3oy06PpKVap4tEvp7SkUbC4NlEe~KJS5Hrx6IPe9EOe1IIbO0eorj-1kG0qDgBrT7NKYgKpcIQewyXU-mfpKbnoc0fk-BY2dLhQSpgLk27Uedt-3oh2fKE-XD23qzhvuIHImTFjPA__',
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className='gallery-content'
      >
        <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      </div>
      
      <div className="gallery-grid">
        {imagePaths.map((path, index) => (
           <div   className="gallery-item"  id={`Galleryitem${index + 1}`}>
         <div className='Gcontent' id={`Galleryitem${index + 1}`}>
          <div className='GcontenDetials' > 
          <h1>Lorem Ipsum is simply</h1>
          <p>
          Lorem Ipsum is simply lorem Ipsum is simply
          </p>
          </div >
         
         </div >
          <img
            key={index}
            src={path}
            alt={`Gallery item ${index + 1}`}
            >
       
          </img>
         
          </div >
          
        ))}
      </div>
    </div>
  );
};

export default Gallery;
