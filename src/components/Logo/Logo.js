import { createElement } from "../../utils";
import anime from "animejs/lib/anime.es";
import DHtml from './D.svg';
import AndHtml from './And.svg';
import RHtml from './R.svg';
import './Logo.css';

const Logo = createElement('div', 'logo');
Logo.append(createElement(DHtml, 'D'));
Logo.append(createElement(AndHtml, 'And'));
Logo.append(createElement(RHtml, 'R'));

let animationD, animationR, animationAnd, animationAndPath;
Logo.addEventListener('mouseenter', () => {
  animationD = anime({
    targets: '#D',
    translateX: 100,
    rotate: 10,
    easing: 'spring',
  });
  animationR = anime({
    targets: '#R',
    translateX: -100,
    rotate: -10,
    easing: 'spring',
  });
  animationAnd = anime({
    targets: '#And',
    opacity: 0.7,
    scale: Math.random() + 1,
    easing: 'spring',
    fill: '#E86C60',
  });
  animationAndPath = anime({
    targets: '#AndPath',
    d: [
      'M128.794009,291.582493 C120.510306,295.013793 110.038454,294.233952 106.443639,289.944828 C105.193269,288.385146 105.11512,287.293369 105.505861,281.522546 C105.896602,275.361804 106.83438,261.012732 109.413269,219.915119 C110.038454,210.712997 110.351046,203.070557 110.272898,202.914589 C110.116602,202.758621 106.912528,205.877984 103.083269,209.855172 C92.2988241,221.084881 75.1843796,236.603714 66.3536389,243.232361 C56.897713,250.328912 46.89475,255.709814 38.9236389,258.127321 C24.7788241,262.416446 14.3851204,257.893369 8.36771296,244.870027 C5.31993519,238.241379 3.91326852,232.782493 2.11586111,219.915119 C-0.853768519,199.249337 -0.697472222,179.363395 2.58475,166.184085 C5.16363889,155.422281 12.5095648,142.398939 20.4025278,134.600531 C31.577713,123.448806 43.9251204,118.535809 61.117713,118.535809 C68.1510463,118.535809 71.1988241,118.925729 76.6691944,120.485411 C91.6736389,124.85252 99.097713,130.935279 103.630306,142.476923 C105.11512,146.142175 105.11512,145.440318 105.193269,77.7501326 L105.193269,9.2801061 L107.22512,7.40848806 C110.741787,4.1331565 119.416231,1.48169761 129.575491,0.467904509 L134.029935,0 L133.639194,23.1612732 C132.857713,70.0297082 131.998083,132.962865 132.15438,133.196817 C132.232528,133.274801 135.749194,130.467374 140.047343,126.95809 C164.585861,106.448276 189.749565,92.801061 202.800306,92.801061 C206.629565,92.801061 207.879935,93.1129973 209.208454,94.4387268 C211.865491,97.0901857 211.005861,102.783024 206.707713,109.879576 C201.159194,119.237666 176.073639,144.192573 152.707343,163.61061 C149.03438,166.729973 145.752157,169.849337 145.439565,170.629178 C143.798454,174.840318 143.251417,186.148011 142.782528,230.832891 L142.313639,280.352785 L140.59438,283.160212 C138.562528,286.35756 134.889565,288.931034 128.794009,291.582493 Z',
      'M112,185 C107,189.666667 106.333333,190.166667 110,186.5 C108,188.166667 107,189 107,189 C107,189 108,187.5 108,187.5 C108,187.5 108,188 107,189 C106,190 107.5,189 103.5,189.5 C101.790075,189.713741 98.6234081,186.547074 94,180 C96,182.333333 93.3333333,179.833333 86,172.5 C74.9352425,161.435243 79,168 70,158 C65.320028,152.800031 66,157 54,141.5 C42,126 41.5,128 33,119.5 C29,111.5 15,108.5 8.5,93 C1.89678509,77.2538721 -1,75.5 1,45 C1.5635272,36.4062103 24.5,11 31.5,8 C46.0616038,1.75931264 82.467407,-0.541644 87,11 C88.484814,14.665252 83.5,6 104.5,24.5 L108.5,20 L112,16.5 C115.516667,13.2246684 120.84074,7.0137931 131,6 L138.5,3.5 L144.5,3 C144.5,3.5 168.5,-10.5 194,23.5 C219.5,57.5 208.5,55.5 208,73 C207.5,90.5 208,79.5 201,93 C194,106.5 192.671481,99.1742705 194,100.5 C196.657037,103.151459 186.298148,106.903448 182,114 C176.451481,123.35809 162.866296,136.081963 139.5,155.5 C135.827037,158.619363 134.312592,161.220159 134,162 C132.358889,166.21114 134,163 126,170 C118,177 126.5,169 119.5,177.5 Z'],
    easing: 'spring',
  });
});
Logo.addEventListener('mouseleave', () => {
  animationD.reset();
  animationR.reset();
  animationAnd.reset();
  animationAndPath.reset();
});

export default Logo;