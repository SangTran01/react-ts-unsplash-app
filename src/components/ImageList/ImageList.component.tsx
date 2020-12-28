import React from 'react';
import ImageDetail from '../../Model/ImageDetail';
import ImageCard from '../ImageCard/ImageCard.component';
import './ImageList.style.scss';

interface IProps {
  images?: ImageDetail[];
}

const ImageList: React.FC<IProps> = ({ images }) => {
  return (
    <div className='image-list'>
      {images?.map((x) => {
        return <ImageCard key={x.id} imageDetail={x} />;
      })}
    </div>
  );
};

export default ImageList;
