import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import { enquireScreen } from 'enquire-js';
import { currentScrollTop } from '../utils';
import IMG_D from './img'
TweenOne.plugins.push(SvgDrawPlugin);

export default class Demo extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string,
  };

  static defaultProps = {
    image: IMG_D};


  constructor(props) {
    super(props);
    this.state = {};
    this.interval = null;
    this.gather = true;
    this.intervalTime = 9000;
    this.width = 265;
    this.height = 290;
    this.tickerOut = null;
    this.scale = 1;
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);
    this.tickerOut = ticker.timeout(this.createPointData, 1400);
  }

  componentWillUnmount() {
    this.remInterval();
  }

  onResize = () => {
    enquireScreen((bool) => {
      this.scale = bool ? 0.7 : 1;
      if (!this.tickerOut) {
        const children = this.resizeData(this.state.children);
        this.setState({ children }, () => {
          if (!this.gather) {
            this.updateTweenData();
          }
          ticker.clear(this.interval);
          this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
        });
      }
    }, 'only screen and (max-width: 414px)');
  };

  onMouseEnter = () => {
    // !this.gather && this.updateTweenData();
    if (!this.gather) {
      this.updateTweenData();
    }
    this.remInterval();
  };

  onMouseLeave = () => {
    // this.gather && this.updateTweenData();
    if (this.gather) {
      this.updateTweenData();
    }
    this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
  };

  setDataToDom(data, w, h) {
    this.pointArray = [];
    const number = Math.round(w / 11);
    for (let i = 0; i < w; i += number) {
      for (let j = 0; j < h; j += number) {
        if (data[((i + j * w) * 4) + 3] > 150) {
          this.pointArray.push({ x: i, y: j, r: Math.random() * 18 + 12 });
        }
      }
    }

    let children = [];
    this.pointArray.forEach((item, i) => {
      const b = Math.random() * 0.4 + 0.1;
      children.push(
        <TweenOne className="point-wrapper" key={i.toString()} style={{ left: item.x, top: item.y }}>
          <TweenOne
            className="point"
            style={{
              width: item.r,
              height: item.r,
              opacity: b,
              backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
            }}
            animation={{
              y: (Math.random() * 2 - 1) * 10 || 5,
              x: (Math.random() * 2 - 1) * 5 || 2.5,
              delay: Math.random() * 1000,
              repeat: -1,
              duration: 3000,
              yoyo: true,
              ease: 'easeInOutQuad',
            }}
          />
        </TweenOne>
      );
    });
    this.pointArray.push({ x: 75, y: 180, r: 40 });
    children = this.resizeData(children);
    this.setState({
      children,
      end: true,
    }, () => {
      this.onResize();
      this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
    });
  }

  resizeData = (children) => children.map((item, i) => {
    const child = item.props.children;
    const childrenProps = {
      ...child.props,
      style: {
        ...child.props.style,
        width: this.pointArray[i].r * this.scale,
        height: this.pointArray[i].r * this.scale,
      },
    };
    const props = {
      key: i,
      style: { left: this.pointArray[i].x * this.scale, top: this.pointArray[i].y * this.scale },
    };
    return React.cloneElement(item, props, React.cloneElement(child, childrenProps));
  });

  remInterval = () => {
    ticker.clear(this.interval);
    this.interval = null;
  }

  createPointData = () => {
    this.tickerOut = null;
    const w = this.width;
    const h = this.height;
    const canvas = document.createElement('canvas');
    this.dom.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    canvas.width = w;
    canvas.height = h;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      this.imgData = ctx.getImageData(0, 0, w, h).data;
      this.setDataToDom(this.imgData, w, h);
      this.dom.removeChild(canvas);
    };
    img.crossOrigin = 'anonymous';
    img.src = this.props.image;
  };

  gatherData = () => {
    const children = this.state.children.map((item) => React.cloneElement(item, {
      animation: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        delay: Math.random() * 500,
        duration: 800,
        ease: 'easeInOutQuint',
      },
    }));
    this.setState({ children });
  };

  disperseData = () => {
    const rect = document.getElementById('banner').getBoundingClientRect();// this.dom.getBoundingClientRect();
    const sideRect = document.getElementById('J-Side').getBoundingClientRect();
    const sideTop = sideRect.top + currentScrollTop();
    const children = this.state.children.map((item) => React.cloneElement(item, {
      animation: {
        x: Math.random() * document.body.clientWidth - sideRect.left - item.props.style.left,
        y: Math.random() * rect.height - sideTop - item.props.style.top,
        opacity: Math.random() * 0.4 + 0.1,
        scale: Math.random() * 2.4 + 0.1,
        duration: Math.random() * 500 + 500,
        ease: 'easeInOutQuint',
      },
    }));

    this.setState({
      children,
    });
  };

  updateTweenData = () => {
    this.dom = ReactDOM.findDOMNode(this);
    ((this.gather && this.disperseData) || this.gatherData)();
    this.gather = !this.gather;
  };

  render() {
    return (
      <TweenOneGroup
        enter={{ opacity: 0, type: 'from', duration: 800 }}
        leave={{ opacity: 0, duration: 800 }}
        className="logo-demo"
      >
        {!this.state.end ? (
          <div key="line">
            <svg
              className="right-side"
              viewBox="0,0,300,400"
            >
              <TweenOne
                d="m79.5,39.45313c0,0 0,0 0,1c0,3 0,8 0,15c0,8 -0.92987,17.00908 -2,25c-0.93857,7.0085 -2,14 -3,20c-1,6 -2.21772,12.96135 -3,18c-1.38926,8.94818 -2.54893,14.81401 -4,20c-1.63903,5.85777 -2,11 -3,17c-1,6 -2.49755,10.9258 -3,16c-0.59122,5.97079 -0.08099,9.10701 -1,13c-0.51374,2.17625 -1,5 -1,7c0,2 -1,4 -1,5c0,1 0,2 0,3l0,0l0,0l0,0"
                component="path"
                animation={[
                  {
                    opacity: 0, type: 'from', delay: 600, duration: 0,
                  },
                  {
                    SVGDraw: 0, type: 'from', duration: 100, ease: 'linear',
                  },
                ]}
              />
              <TweenOne
                d="m77.5,41.45313c0,0 1.12703,0.32138 4,-1c5.29749,-2.4365 9.07844,-4.78985 12,-6c6.19757,-2.56712 9.92767,-4.23173 16,-6c7.91735,-2.30554 13.90778,-2.49623 18,-3c3.97003,-0.48873 9,0 12,0c4,0 8,0 13,0c5,0 11,1 15,2c4,1 7,2 10,3c3,1 7,2 10,4c3,2 7.21167,5.71412 10,8c2.18735,1.79319 3.71413,5.21167 6,8c2.68979,3.28101 5,6 7,11c2,5 4.19028,8.88152 6,12c1.12234,1.934 2.14429,4.93414 3,7c1.21014,2.92156 1,5 1,8c0,2 0,6 0,9c0,2 0.30745,4.186 -1,6c-1.65381,2.29454 -3.31021,4.71899 -6,8c-2.28587,2.78832 -5.31021,7.71899 -8,11c-2.28587,2.78832 -3.297,5.61383 -6,8c-1.67633,1.47984 -3.86325,3.1468 -6,5c-3.77727,3.27602 -6,6 -9,8c-3,2 -6.186,3.69255 -8,5c-2.29454,1.65381 -4,3 -6,4c-2,1 -5.07843,2.78986 -8,4c-2.06586,0.85571 -4,3 -6,4c-2,1 -4.186,2.69255 -6,4c-3.4418,2.48071 -4.69255,4.186 -6,6c-1.65381,2.29454 -4,3 -5,4c-2,2 -4.09789,3.82443 -6,5c-4.25325,2.62866 -6.21168,3.71413 -9,6c-2.18734,1.7932 -4.76108,3.41589 -8,5c-2.84072,1.38936 -6.07844,2.78986 -9,4c-4.13171,1.71141 -6,3 -8,4c-2,1 -3.82375,1.48625 -6,2c-1.9465,0.4595 -2.82375,1.48625 -5,2c-0.97325,0.22975 -3,1 -4,1c-2,0 -1.82375,0.48625 -4,1c-0.97325,0.22975 -2,0 -3,0c-1,0 -2,0 -2,0c-1,0 -1.07612,-0.38269 -2,0c-1.30656,0.5412 -1,1 -2,1c-1,0 -2,0 -2,0c-1,0 -1,0 -1,0c-1,0 -1,0 -1,0c-1,0 -1,0 -1,0c-1,0 -1,0 -1,0c0,0 -1,0 -1,0c0,0 0,0 -1,0c0,0 0,0 -1,0c0,0 -1,0 -1,-1c0,0 -1.29289,0.70711 -2,0c-0.70711,-0.70711 -1,-1 -1,-1c0,0 0,-1 -1,-1c0,0 0,0 0,0c0,-1 -1,-1 -1,-1l0,0l0,0"
                component="path"
                animation={[
                  {
                    opacity: 0, type: 'from', delay: 800, duration: 0,
                  },
                  {
                    SVGDraw: 0, type: 'from', duration: 250, ease: 'linear',
                  },
                ]}
              />
            </svg>
          </div>
        ) : (
          <div
            key="box"
            className="right-side blur"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            id="J-Side"
          >
            {this.state.children}
          </div>
        )}
      </TweenOneGroup>
    );
  }
}
