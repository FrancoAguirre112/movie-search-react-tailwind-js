import fullStarImg from '../assets/icons/fullStar.svg';
import halfStarImg from '../assets/icons/halfStar.svg';

export default function RenderStars({rating}) {
    const roundedRating = Math.round(Number(rating) * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating - fullStars === 0.5;
  
    let stars = [];
  
    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`full-${i}`} src={fullStarImg} />);
    }
  
    // Render half star
    if (halfStar) {
        stars.push(<img key="half" src={halfStarImg} />);
    }
    return ( <div className='flex'> {stars} </div>)
  }