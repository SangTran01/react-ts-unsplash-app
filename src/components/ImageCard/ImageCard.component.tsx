import { render } from 'node-sass';
import React from 'react';
import ImageDetail from '../../Model/ImageDetail';
import './ImageCard.Style.scss';

interface IProps {
  imageDetail: ImageDetail;
}

interface IState {
  spans: number;
}

// let imageRef2: React.MutableRefObject<HTMLImageElement>;

export default class ImageCard extends React.Component<IProps, IState> {
  private imageRef2 = React.createRef<HTMLImageElement>();

  constructor(props: IProps) {
    super(props);

    this.state = {
      spans: 0,
    };
  }

  componentDidMount() {
    this.imageRef2.current?.addEventListener('load', this.setSpans);
  }

  setSpans = async () => {
    const height = await this.imageRef2.current?.height;
    console.log(height);
    if (height) {
      const spans = Math.ceil(height / 10);
      this.setState({
        spans: spans,
      });
    }
  };

  render() {
    const { altDescription, urls } = this.props.imageDetail;

    return (
      <img
        ref={this.imageRef2}
        alt={altDescription}
        src={urls.small}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      />
    );
  }
}
