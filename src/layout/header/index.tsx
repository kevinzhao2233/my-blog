import React from 'react';
import classnames from 'classnames';
import anime from 'animejs';
import './index.scss';

interface P{}
interface S{
  isOpenExtra: boolean
}

export default class Header extends React.Component<P, S> {
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

  state = {
    isOpenExtra: false,
  }

  handleRxtraBtn() {
    this.setState((state: S) => ({
      isOpenExtra: !state.isOpenExtra,
    }));
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
      <div className="app-header">
        <div className="logo" />
        <ul className="nav-box">
          <li className="nav-item cursor-p">导航1</li>
          <li className="nav-item cursor-p">导航2</li>
        </ul>
        <div className="extra">
          <div
            className={classnames('extra-btn', { 'is-open': this.state.isOpenExtra })}
            onClick={this.handleRxtraBtn.bind(this)}
          >
            <div ref={this.exLineTL} className="line btn-tl" />
            <div ref={this.exLineTR} className="line btn-tr" />
            <div ref={this.exLineBL} className="line btn-bl" />
            <div ref={this.exLineBR} className="line btn-br" />
          </div>
        </div>
      </div>
    );
  }
}
