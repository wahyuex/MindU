import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Settings({width,height,color}){
  return(
<Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none">
  <Path fill={color} d="M19.0073 13.8263c-1.3407 0-2.5962.4926-3.5469 1.393-.9461.9004-1.4707 2.0896-1.4707 3.3594 0 1.2699.5246 2.4591 1.4707 3.3595.9507.8961 2.2062 1.393 3.5469 1.393s2.5962-.4969 3.5468-1.393c.9462-.9004 1.4708-2.0896 1.4708-3.3595 0-1.2698-.5246-2.459-1.4708-3.3594-.4643-.4431-1.0169-.7945-1.6258-1.0336-.6089-.2392-1.2619-.3613-1.921-.3594Zm18.4875 10.0018-2.9325-2.3741c.139-.8069.2107-1.6309.2107-2.4506 0-.8196-.0717-1.6478-.2107-2.4505l2.9325-2.3741c.2216-.1796.3801-.4189.4546-.6859.0745-.2671.0614-.5493-.0375-.8091l-.0404-.1104c-.8071-2.1376-2.0164-4.11898-3.5693-5.84819l-.0807-.08919c-.1886-.21001-.4399-.36097-.7208-.433-.281-.07202-.5784-.06173-.8531.02953l-3.641 1.2274c-1.3452-1.04478-2.8428-1.8687-4.466-2.44206l-.704-3.60574c-.0531-.27164-.1923-.521532-.3989-.716492-.2066-.194959-.471-.325754-.758-.375005l-.1211-.021236c-2.3317-.3992228-4.7889-.3992228-7.1206 0l-.121.021236c-.287.049251-.5514.180046-.758.375005-.2067.19496-.3458.444852-.3989.716492l-.7085 3.62273c-1.6078.57792-3.1056 1.39986-4.43467 2.43356L5.34902 6.23255c-.27458-.09198-.5722-.10265-.85333-.03058-.28113.07207-.53245.22346-.72056.43405l-.08071.08919C2.14427 8.45627.935284 10.4372.125153 12.5734l-.0403556.1104c-.2017804.5309-.0358719 1.1255.4170126 1.495l2.96841 2.3996c-.139.7984-.20626 1.6139-.20626 2.4208 0 .8154.06726 1.6309.20626 2.4208L.510778 23.8196c-.221529.1796-.38008.4189-.4545708.6859-.0744904.2671-.06139053.5492.037558.8091l.0403558.1104c.811605 2.1363 2.008829 4.1111 3.569269 5.8482l.08071.0892c.18857.21.4399.3609.72086.433.28096.072.57837.0617.85303-.0296l3.66791-1.2359c1.3362 1.0406 2.8249 1.8645 4.4347 2.4336l.7085 3.6227c.0531.2717.1922.5216.3988.7165.2067.195.471.3258.758.375l.1211.0213c2.3546.4013 4.766.4013 7.1206 0l.1211-.0213c.287-.0492.5513-.18.758-.375.2066-.1949.3457-.4448.3988-.7165l.704-3.6057c1.6232-.5776 3.1209-1.3973 4.4661-2.4421l3.641 1.2274c.2746.092.5722.1027.8533.0306.2812-.072.5325-.2234.7206-.434l.0807-.0892c1.5604-1.7456 2.7577-3.7119 3.5693-5.8482l.0403-.1104c.1928-.5267.0269-1.117-.426-1.4865Zm-18.4875 2.217c-4.354 0-7.8829-3.3425-7.8829-7.4664 0-4.1239 3.5289-7.4663 7.8829-7.4663s7.8829 3.3424 7.8829 7.4663c0 4.1239-3.5289 7.4664-7.8829 7.4664Z"/>
</Svg>

  );
}
export default Settings;