import React from 'react';
import classnames from 'classnames';
import anime from 'animejs';
import './index.scss';

interface P{
  onChange: (e: boolean) => void
}
interface S{
  isOpenExtra: boolean
}

export default class Header extends React.Component<P, S> {
  // eslint-disable-next-line no-useless-constructor
  // constructor(props: P) {
  //   super(props);
  // }

  private animeCount:number = 0

  private extraBtnAnime:anime.AnimeTimelineInstance = anime.timeline({
    duration: 200,
    direction: 'alternate',
    loop: true,
    autoplay: false,
    easing: 'easeInOutSine',
  });

  private exLineTL = React.createRef<HTMLDivElement>()

  private exLineTR = React.createRef<HTMLDivElement>()

  private exLineBL = React.createRef<HTMLDivElement>()

  private exLineBR = React.createRef<HTMLDivElement>()

  state: S = {
    isOpenExtra: false,
  }

  handleRxtraBtn() {
    this.setState((state: S) => ({
      isOpenExtra: !state.isOpenExtra,
    }), () => {
      this.props.onChange(this.state.isOpenExtra);
    });
    if (this.animeCount === 0) {
      this.extraBtnAnime
        .add({
          targets: this.exLineTL.current,
          width: '8px',
        }, 0)
        .add({
          targets: this.exLineTR.current,
          width: '8px',
        }, 0)
        .add({
          targets: this.exLineBL.current,
          width: '8px',
        }, 0)
        .add({
          targets: this.exLineBR.current,
          width: '8px',
        }, 0)
        .add({
          targets: this.exLineTL.current,
          width: '24px',
          rotate: '16.8deg',
          duration: 300,
        }, 240)
        .add({
          targets: this.exLineTR.current,
          width: '24px',
          rotate: '-16.8deg',
          duration: 300,
        }, 240)
        .add({
          targets: this.exLineBL.current,
          width: '24px',
          rotate: '-16.8deg',
          duration: 300,
        }, 240)
        .add({
          targets: this.exLineBR.current,
          width: '24px',
          rotate: '16.8deg',
          duration: 300,
        }, 240);
    }
    this.animeCount++;
    this.extraBtnAnime.play();
    this.extraBtnAnime.loopComplete = () => {
      this.extraBtnAnime.pause();
    };
  }

  render() {
    return (
      <div
        className={classnames('extra-btn', { 'is-open': this.state.isOpenExtra })}
        onClick={this.handleRxtraBtn.bind(this)}
      >
        <div ref={this.exLineTL} className="line btn-tl" />
        <div ref={this.exLineTR} className="line btn-tr" />
        <div ref={this.exLineBL} className="line btn-bl" />
        <div ref={this.exLineBR} className="line btn-br" />
      </div>
    );
  }
}
