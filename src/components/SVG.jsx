/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { width as twWidth } from '../../tailwind';

const myCoolBg = 'linear-gradient( to bottom,#46C9E5 0%,#D26AC2 100% )';

const Wrapper = styled.div`
  position: relative;
  @supports (transform: translate3d(0,0,0)) or (-webkit-transform: translate3d(0,0,0)) {
    @supports (height: 100vh){
      transform: translate3d(${props => props.left}vw, ${props => props.top}vh, 0);
    }
    @supports not (height: 100vh){
      left:${props => props.left}%;
      top: ${props => props.top}%;
    }
  }
  @supports not (transform: translate3d(0,0,0)) or (-webkit-transform: translate3d(0,0,0)){
    left:${props => props.left}%;
    top: ${props => props.top}%;
  }
`;

const WrapperTransform = styled.svg`
  ${tw('stroke-current absolute')};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  @supports (transform: translate3d(0,0,0)) or (-webkit-transform: translate3d(0,0,0)) {
      transform: translate3d(${props => props.originOffsetX}, ${props => props.originOffsetY}, 0);
  }
  @supports not (transform: translate3d(0,0,0)) or (-webkit-transform: translate3d(0,0,0)){
    left: ${props => props.originOffsetX};
    top: ${props => props.originOffsetY};
  }
`;

const icontTypes = ['triangle', 'circle', 'arrowUp', 'upDown', 'box', 'hexa', 'badge', 'imac', 'ps4', 'smartphone', 'puzzle', 'pencilcase', 'flask', 'cube', 'bubble', 'cloud', 'network' , 'star', 'usb', 'pokeball', 'pin', 'plane', 'key', 'flash', 'blub', 'usbSimple', 'error404', 'bug', 'shield', 'sword', 'coin'];

const icons = {
  triangle: {
    shape: (
      <defs>
        <path id="original-triangle" strokeLinejoin="round" d="M14.921,2.27 28.667,25.5 1.175,25.5 z"
        />
      </defs>
    ),
    viewBox: '0 0 30 30',
    duplication: (<use xlinkHref="#original-triangle" />),
  },
  circle: {
    shape: (
      <defs>
        <path id="original-circle" d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
      </defs>
    ),
    viewBox: '0 0 30 30',
    duplication: (<use xlinkHref="#original-circle" />),
  },
  arrowUp: {
    shape: (
      <defs>
        <path id="original-arrow1" d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path id="original-arrow2" d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </defs>
    ),
    viewBox: '0 0 30 42',
    duplication: (<React.Fragment><use xlinkHref="#original-arrow1" /><use xlinkHref="#original-arrow2" /></React.Fragment>),
  },
  upDown: {
    shape: (
      <defs>
        <path id="original-up" d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path id="original-down" d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </defs>
      ),
    viewBox: '0 0 30 44.58',
    duplication: (<React.Fragment><use xlinkHref="#original-up" /><use xlinkHref="#original-down" /></React.Fragment>),
  },
  box: {
    shape: (
      <defs>
        <path id="original-box" d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
      </defs>
    ),
    viewBox: '0 0 30 30',
    duplication: (<use xlinkHref="#original-box" />),
  },
  hexa: {
    shape: (
      <defs>
        <polygon
          id ="original-hexa"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        />
      </defs>
      ),
    viewBox: '0 0 30 30',
    duplication: (<use xlinkHref="#original-hexa" />),
  },
  //Todo improve
  badge: {
    shape: (
      <path id="original-badge" d="M32.2429453,24.8287318 L30.8198574,23.4056439 C31.8729184,22.0509601 32.5,20.3487115 32.5,18.5 C32.5,14.081722 28.918278,10.5 24.5,10.5 C20.081722,10.5 16.5,14.081722 16.5,18.5 C16.5,22.918278 20.081722,26.5 24.5,26.5 C26.3487115,26.5 28.0509601,25.8729184 29.4056439,24.8198574 L30.8287318,26.2429453 C29.1048612,27.6536347 26.9012702,28.5 24.5,28.5 C18.9771525,28.5 14.5,24.0228475 14.5,18.5 C14.5,12.9771525 18.9771525,8.5 24.5,8.5 C30.0228475,8.5 34.5,12.9771525 34.5,18.5 C34.5,20.9012702 33.6536347,23.1048612 32.2429453,24.8287318 Z M18,33.2413215 L15.7631397,33.9461524 L14.5127753,28.3109857 C14.3764962,28.172274 14.2430846,28.030736 14.1126362,27.8864677 L9.05,26.7631397 L10.3866585,22.5211036 L6,18.5 L10.5024747,14.3727315 L9.05,9.76313972 L14.4740676,8.55961523 L15.7631397,2.75 L20.5861017,4.26970729 L24.5,0 L28.3077335,4.15389109 L32.7631397,2.75 L33.9699099,8.18869535 C34.0854066,8.2948234 34.1991153,8.40286683 34.3109857,8.51277529 L39.9461524,9.76313972 L38.49454,14.369995 L43,18.5 L38.6103562,22.5238402 L39.9461524,26.7631397 L35.1193075,27.8341489 L33.7631397,33.9461524 L31,33.0754917 L31,48 L24.5,42.7058824 L18,48 L18,33.2413215 Z M29,32.445295 L28.7479488,32.3658741 L24.5,37 L20.369995,32.49454 L20,32.6111248 L20,44.2781941 L24.5,40.3076059 L29,44.2781941 L29,32.445295 Z M33.318195,10.3411309 L32.9093374,9.93944348 C32.8133412,9.84513077 32.7157762,9.75242733 32.6166872,9.66137605 L32.153622,9.23587284 L31.2832469,5.31324949 L27.694047,6.44420043 L24.5,2.95978556 L21.1997882,6.56001663 L17.2430325,5.31324949 L16.1506904,10.236238 L11.6132495,11.2430325 L12.7927841,14.9864181 L8.95978556,18.5 L12.6769679,21.9074171 L11.6132495,25.2832469 L15.1684246,26.0720904 L15.5961176,26.5450942 C15.7080289,26.6688615 15.822498,26.7903043 15.9394435,26.9093374 L16.3411309,27.318195 L17.2430325,31.3829029 L20.9836815,30.2042306 L24.5,34.0402144 L28.1342622,30.0755647 L32.2832469,31.3829029 L33.4426847,26.1575261 L37.3829029,25.2832469 L36.3200468,21.9101536 L40.0402144,18.5 L36.2042306,14.9836815 L37.3829029,11.2430325 L33.318195,10.3411309 Z"
      />
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-badge" />),
  },
  imac: {
    shape: (
      <defs>
        <path id="original-imac" d="M28.2 38l3 5a2 2 0 0 1-1.7 3h-11a2 2 0 0 1-1.7-3l3-5H6a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H28.2zM27 36h15a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h21zM2 28h44v2H2v-2zM2 8h44v2H2V8zm16.5 36h11l-3.6-6H22l-3.6 6zM24 34a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
      </defs>
      ),
    viewBox: '-18 -18 84 84',
    duplication: (<use href="#original-imac" xlinkHref="#original-imac" />),
  },
  ps4: {
    shape: (
      <defs>
        <path id="original-ps4" d="M27 20h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-5 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-10-2h2v2h-2v2h-2v-2H8v-2h2v-2h2v2zm6-4.5h12c2-2.33 4.33-3.5 7-3.5 7 0 11 13 11 19 0 3.97-2.68 7-6 7-2.78 0-5.78-2-9-6-1.46.67-2.8 1-4 1-1.2 0-2.54-1-4-3h-2c-1.46 2-2.8 3-4 3-1.2 0-2.54-.33-4-1-3.22 4-6.22 6-9 6-3.32 0-6-3.03-6-7 0-6 4-19 11-19 2.67 0 5 1.17 7 3.5zm12.92 2H17.08l-.6-.7C14.85 12.9 13.06 12 11 12c-4.44 0-9 9.74-9 17 0 2.89 1.82 5 4 5 2.05 0 4.57-1.68 7.44-5.25l.97-1.21 1.42.64c1.22.56 2.28.82 3.17.82.4 0 1.26-.65 2.39-2.18l.6-.82H26l.6.82C27.74 28.35 28.6 29 29 29c.9 0 1.95-.26 3.17-.82l1.42-.64.97 1.2C37.43 32.33 39.95 34 42 34c2.18 0 4-2.11 4-5 0-7.26-4.56-17-9-17-2.06 0-3.85.9-5.48 2.8l-.6.7zm-12.42 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm11-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM37 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-ps4" />),
  },
  smartphone: {
    shape: (
      <defs>
        <path id="original-smartphone" d="M26,6 L22,6 C21.4477153,6 21,5.55228475 21,5 C21,4.44771525 21.4477153,4 22,4 L26,4 C26.5522847,4 27,4.44771525 27,5 C27,5.55228475 26.5522847,6 26,6 Z M14,0 L34,0 C37.3137085,-6.08718376e-16 40,2.6862915 40,6 L40,42 C40,45.3137085 37.3137085,48 34,48 L14,48 C10.6862915,48 8,45.3137085 8,42 L8,6 C8,2.6862915 10.6862915,6.08718376e-16 14,0 Z M14,2 C11.790861,2 10,3.790861 10,6 L10,42 C10,44.209139 11.790861,46 14,46 L34,46 C36.209139,46 38,44.209139 38,42 L38,6 C38,3.790861 36.209139,2 34,2 L14,2 Z M24,44 C23.4477153,44 23,43.5522847 23,43 C23,42.4477153 23.4477153,42 24,42 C24.5522847,42 25,42.4477153 25,43 C25,43.5522847 24.5522847,44 24,44 Z M10,38 L38,38 L38,40 L10,40 L10,38 Z M10,8 L38,8 L38,10 L10,10 L10,8 Z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-smartphone" />),
  },
  puzzle: {
    shape: (
      <defs>
        <path id="original-puzzle" d="M33 12h14c.6 0 1 .4 1 1v16h-4l-.6-.8A3 3 0 0 0 38 30a3 3 0 0 0 5.4 1.8l.6-.8h4v16c0 .6-.4 1-1 1H31v-4l.8-.6A3 3 0 0 0 30 38a3 3 0 0 0-1.8 5.4l.8.6v4H13a1 1 0 0 1-1-1V33h-1a5 5 0 1 1 0-6h1V13c0-.6.4-1 1-1h14v-1a5 5 0 1 1 6 0v1zm0 2H14v32h13v-1a5 5 0 1 1 6 0v1h13V33h-1a5 5 0 1 1 0-6h1V14H33zM14 29h-4l-.6-.8A3 3 0 0 0 4 30a3 3 0 0 0 5.4 1.8l.6-.8h4v-2zm17-15v-4l.8-.6A3 3 0 0 0 30 4a3 3 0 0 0-1.8 5.4l.8.6v4h2z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-puzzle" />),
  },
  //Todo imporve
  pencilcase: {
    shape: (
      <path d="M15,15 C15.5522847,15 16,15.4477153 16,16 C16,16.5522847 15.5522847,17 15,17 L12,17 L12,15 L15,15 Z M15,7 C15.5522847,7 16,7.44771525 16,8 C16,8.55228475 15.5522847,9 15,9 L12,9 L12,7 L15,7 Z M13,11 C13.5522847,11 14,11.4477153 14,12 C14,12.5522847 13.5522847,13 13,13 L12,13 L12,18 L19,18 L19,2 L12,2 L12,3 L13,3 C13.5522847,3 14,3.44771525 14,4 C14,4.55228475 13.5522847,5 13,5 L12,5 L12,11 L13,11 Z M26,14 L26,18 L30,18 L30,14 L26,14 Z M26,12 L30,12 L30,9 C30,7.8954305 29.1045695,7 28,7 C26.8954305,7 26,7.8954305 26,9 L26,12 Z M24,18 L24,9 C24,6.790861 25.790861,5 28,5 C30.209139,5 32,6.790861 32,9 L32,18 L34,18 C35.1045695,18 36,18.8954305 36,20 L36,25 L39,25 C41.209139,25 43,26.790861 43,29 L43,37 C43,39.209139 41.209139,41 39,41 L36,41 L36,42 C36,45.3137085 33.3137085,48 30,48 L12,48 C8.6862915,48 6,45.3137085 6,42 L6,20 C6,18.8954305 6.8954305,18 8,18 L10,18 L10,1 C10,0.44771525 10.4477153,1.01453063e-16 11,0 L20,0 C20.5522847,-1.01453063e-16 21,0.44771525 21,1 L21,18 L24,18 Z M24,20 L21,20 L10,20 L8,20 L8,42 C8,44.209139 9.790861,46 12,46 L30,46 C32.209139,46 34,44.209139 34,42 L34,41 L34,25 L34,20 L32,20 L24,20 Z M36,27 L36,39 L39,39 C40.1045695,39 41,38.1045695 41,37 L41,29 C41,27.8954305 40.1045695,27 39,27 L36,27 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  flask: {
    shape: (
      <defs>
        <path id="original-flask" d="M17.5 31.1l.2.2A6.3 6.3 0 0 0 22 33c1 0 1.4-.2 2.5-.9A5.8 5.8 0 0 1 28 31c1 0 1.8.2 2.7.5l-2.7-5V16h-8v10.5l-2.5 4.6zm-1 1.8L11 43a2 2 0 0 0 1.7 3h22.6a2 2 0 0 0 1.7-3l-4.4-8-.3-.2A6.4 6.4 0 0 0 28 33c-.9 0-1.4.2-2.4.8A5.9 5.9 0 0 1 22 35c-2 0-3.9-.7-5.5-2.1zM30 16v10l8.8 16a4 4 0 0 1-3.5 6H12.7a4 4 0 0 1-3.5-6L18 26V16h-2a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2h-2zM24 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </defs>
      ),
    viewBox: '-18 -18 84 84',
    duplication: (<use xlinkHref="#original-flask" />),
    },
  cube: {
    shape: (
      <defs>
        <path id="original-cube" d="M9 38.6l-3.5 2.2a1 1 0 0 1-1-1.6L8 36.9V18.6c0-.4.2-.7.6-.9L23 10.5V5a1 1 0 0 1 2 0v5.5l14.4 7.2c.4.2.6.5.6 1v18.2l3.5 2.3a1 1 0 0 1-1 1.6L39 38.6l-14.5 9a1 1 0 0 1-1 0L9 38.7zm1-3l8.5-5.4a1 1 0 0 1 1 1.6L11 37.4 23 45V28.6l-13-7.8v14.8zm28 0V20.8l-13 7.8V45l12.1-7.6-8.6-5.6a1 1 0 0 1 1-1.6l8.5 5.4zM23 12.7L10.7 19l13.3 8 13.3-8L25 12.7V22a1 1 0 0 1-2 0v-9.3zM46 43a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM24 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM2 43a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-cube" />),
  },
  bubble: {
    shape: (
      <path d="M16,18 C13.790861,18 12,16.209139 12,14 C12,11.790861 13.790861,10 16,10 C18.209139,10 20,11.790861 20,14 C20,16.209139 18.209139,18 16,18 Z M16,16 C17.1045695,16 18,15.1045695 18,14 C18,12.8954305 17.1045695,12 16,12 C14.8954305,12 14,12.8954305 14,14 C14,15.1045695 14.8954305,16 16,16 Z M32,24 C28.6862915,24 26,21.3137085 26,18 C26,14.6862915 28.6862915,12 32,12 C35.3137085,12 38,14.6862915 38,18 C38,21.3137085 35.3137085,24 32,24 Z M32,22 C34.209139,22 36,20.209139 36,18 C36,15.790861 34.209139,14 32,14 C29.790861,14 28,15.790861 28,18 C28,20.209139 29.790861,22 32,22 Z M18,40 C13.581722,40 10,36.418278 10,32 C10,27.581722 13.581722,24 18,24 C22.418278,24 26,27.581722 26,32 C26,36.418278 22.418278,40 18,40 Z M18,38 C21.3137085,38 24,35.3137085 24,32 C24,28.6862915 21.3137085,26 18,26 C14.6862915,26 12,28.6862915 12,32 C12,35.3137085 14.6862915,38 18,38 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  cloud: {
    shape: (
      <defs>
        <path id="original-cloud" d="M38.81 22c-5.5.09-7.81 3.83-7.81 8h-2c0-1.76.51-3.96 1.65-5.78 1.51-2.42 3.93-3.93 7.3-4.18a11 11 0 0 0-19.66-5.76l-.06.07a6.97 6.97 0 0 1 .37 8.85L17 22a5 5 0 1 0-8.26-.37C4.25 23.17 2 25.96 2 30c0 3.17 1.23 5.42 3.69 6.74A7.96 7.96 0 0 0 10 38h28a8 8 0 0 0 1.58-15.84l-.77-.16zM48 30a10 10 0 0 1-10 10H10a10 10 0 0 1-3.78-19.26 7.01 7.01 0 0 1 10.49-7.68 13 13 0 0 1 23.27 7.13A10 10 0 0 1 48 30z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-cloud" />),
  },
  network: {
    shape: (
      <path id="original-network" d="M20.8 28.6l-9.63 9.64a5 5 0 1 1-1.41-1.41l9.63-9.64a6.97 6.97 0 0 1 .46-8.93l-5.82-5.81a4 4 0 1 1 1.41-1.41l5.97 5.95a6.97 6.97 0 0 1 7.78.4l8.64-8.63a5 5 0 1 1 1.41 1.41l-8.63 8.64a6.97 6.97 0 0 1 .74 7.13l6.62 6.61a4 4 0 1 1-1.41 1.41l-6.33-6.31A6.99 6.99 0 0 1 26 29.93v7.17a5 5 0 1 1-2 0v-7.17a6.96 6.96 0 0 1-3.2-1.32zM25 28a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM42 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm28 27a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 44a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm18 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-network" />),
  },
  //Todo improve
  star: {
    shape: (
      <path id="original-star" d="M8.5 2.5a.7.7 0 0 1 1 0l2 2a.7.7 0 0 1-1 1l-2-2a.7.7 0 0 1 0-1zM7.03 18.82a89.82 89.82 0 0 0 6.8 6.43l.5.42-.2.62a76.78 76.78 0 0 0-2.5 9.86c-.3 1.9-.2 2.94-.15 2.97.28.16 2.37-.78 5.65-2.67l.45-.27c4.85-2.81 5.55-3.18 6.6-3.18 1.06 0 1.64.32 6.39 3.2l.54.32c3.12 1.87 5.09 2.76 5.44 2.59.6-.3-.01-4.94-2.33-12.83l-.18-.6.47-.42a87.83 87.83 0 0 0 6.54-6.42c1.17-1.34 1.82-2.31 1.93-2.73a1.7 1.7 0 0 0-.26-.17 9.19 9.19 0 0 0-2.15-.72c-2.08-.48-5.24-.9-9.47-1.22l-.6-.05-.24-.55C27.08 6.03 24.67 2 24 2c-.65 0-2.94 4.03-5.9 11.37l-.22.58-.62.05c-4.35.33-7.6.74-9.74 1.23a9.67 9.67 0 0 0-2.23.72 1.8 1.8 0 0 0-.27.17c.12.4.8 1.38 2.01 2.7zM3 16c0-2.22 4.17-3.21 13.49-3.95C19.83 3.8 22.03 0 24 0c1.95 0 4.27 3.8 7.86 12.05C40.92 12.8 45 13.8 45 16c0 1.73-2.8 4.94-8.68 10.32 2.62 9.04 3.16 13.56 1.13 14.57-1.36.68-3.22-.16-7.37-2.66l-.55-.33c-3.82-2.31-4.89-2.9-5.35-2.9-.47 0-1.64.62-5.6 2.91l-.45.27c-4.49 2.6-6.32 3.4-7.61 2.7-1.89-1.04-1.24-5.5 1.52-14.55C5.9 20.95 3 17.74 3 16zM36.5 5.5a.7.7 0 0 1 0-1l2-2a.7.7 0 0 1 1 1l-2 2a.7.7 0 0 1-1 0zM.63 29.68l2.74-1.36a.98.98 0 0 1 1.13.18.51.51 0 0 1-.13.82l-2.74 1.36A.98.98 0 0 1 .5 30.5a.51.51 0 0 1 .13-.82zm46.74 0a.51.51 0 0 1 .13.82c-.3.3-.75.37-1.13.18l-2.74-1.36a.51.51 0 0 1-.13-.82c.3-.3.75-.37 1.13-.18l2.74 1.36zM31.5 44.5a.58.58 0 0 1 .9.09l1.2 1.82c.24.34.2.8-.1 1.09a.58.58 0 0 1-.9-.09l-1.2-1.82a.86.86 0 0 1 .1-1.09zm-15 0c.3.3.34.75.1 1.09l-1.2 1.82a.58.58 0 0 1-.9.09.86.86 0 0 1-.1-1.09l1.2-1.82a.58.58 0 0 1 .9-.09z"
      />
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-star" />),
  },
  usb: {
    shape: (
      <defs>
        <path id="original-usb" d="M21.5 9.5l1-1a2 2 0 0 1 3 0L46 29c1.3 1.3 2 2.8 2 4.5 0 1.7-.7 3.2-2 4.5l-7 8a6.2 6.2 0 0 1-4.5 2c-1.7 0-3.2-.7-4.5-2L8.5 25.4a2 2 0 0 1 0-2.8l1-1.1L0 12 12 0l9.5 9.5zM20 11l-8-8.1-9.1 9L11 20l9-9zM10 24l21.4 20.6c1 1 2 1.4 3.1 1.4s2-.4 3-1.4l7-8c1-1 1.5-2 1.5-3.1s-.4-2.1-1.3-3L24 10 10 24zm0-16l1-1 4 4-1 1-4-4zm-3 3l1-1 4 4-1 1-4-4z"
        />
      </defs>
      ),
    viewBox: '-18 -18 84 84',
    duplication: (<use xlinkHref="#original-usb" />),
  },
  pokeball: {
    shape: (
      <defs>
        <path id="original-pokeball" d="M39.97 25H32v-2h7.97a16 16 0 0 0-31.94 0H16v2H8.03a16 16 0 0 0 31.94 0zM24 42a18 18 0 1 1 0-36 18 18 0 0 1 0 36zm0-10a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-pokeball" />),
  },
  pin: {
    shape: (
      <defs>
        <path id="original-pin" d="M24 46C21 46 8 26.84 8 18a16 16 0 1 1 32 0c0 8.84-13 28-16 28zm.26-2.37a18.1 18.1 0 0 0 1.98-2.06 61.96 61.96 0 0 0 5.18-7.3C35.38 27.82 38 21.54 38 18a14 14 0 1 0-28 0c0 3.54 2.62 9.82 6.58 16.27a61.96 61.96 0 0 0 5.18 7.3A18.1 18.1 0 0 0 24 43.84l.26-.21zM24 26a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-pin" />),
  },
  plane: {
    shape: (
      <path d="M9.53409054,11.1780302 L22.038025,26.5674879 L11.851299,32.3884742 L10.8,31.6 C8.45902921,29.8442719 6.77048539,29 6,29 C5.52731816,29 4.75794153,29.378793 3.7604556,30.1884469 L8.70569409,36.122733 L6.64360904,38.1848181 C7.74236484,39.0895708 9.57134866,39.4150213 12.3205571,39.0731434 L44.7465163,19.4210469 C45.6192551,18.5034094 46,17.7025342 46,17 C46,16.7144764 44.3924281,16 42,16 C40.5171214,16 36.3434562,17.926307 30.0289915,21.7149859 L28.8365222,22.4304674 L13.5240982,10.1805283 L9.53409054,11.1780302 Z M17.2401378,27.0056355 L17.447772,27.2611853 L17.5260228,26.8422727 L19,26 L17.9294713,24.6824263 L18.0077221,24.2635137 L17.7218372,24.4268765 L6,10 L14,8 L29,20 C35.6666667,16 40,14 42,14 C45,14 48,15 48,17 C48,18.3333333 47.3333333,19.6666667 46,21 L13,41 C8.33333333,41.6666667 5.33333333,40.6666667 4,38 L6,36 L1,30 C3,28 4.66666667,27 6,27 C7.33333333,27 9.33333333,28 12,30 L17.2401378,27.0056355 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  key: {
    shape: (
      <path d="M27.5,28.5 L9,47 L3,47 C1.8954305,47 1,47.1045695 1,46 L1,40 L7,36 L7,33 L13,29 L13,25 L19.4166667,20.4166667 L16.2754626,17.2754626 C15.5507555,16.5507555 15.4911597,15.3954958 16.1374482,14.6000638 L26.601617,1.72108683 C27.2981503,0.863814975 28.5577584,0.733510697 29.4150302,1.43004408 C29.4683774,1.47338867 29.5194546,1.51945462 29.5680585,1.56805852 L46.4319415,18.4319415 C47.2129901,19.2129901 47.2129901,20.47932 46.4319415,21.2603686 C46.3833376,21.3089725 46.3322604,21.3550385 46.2789132,21.398383 L33.3999362,31.8625518 C32.6045042,32.5088403 31.4492445,32.4492445 30.7245374,31.7245374 L27.5,28.5 Z M17.6896762,15.861249 L32.138751,30.3103238 L45.0177279,19.846155 L28.153845,2.98227208 L17.6896762,15.861249 Z M24,13 L29,7 L41,19 L35,24 L24,13 Z M26.7056941,12.877267 L35.122733,21.2943059 L38.0371762,18.8656033 L29.1343967,9.96282383 L26.7056941,12.877267 Z M26,27 L21,22 L15,26.0292358 L15,30 L9,34.0703675 L9,37 L3,41.1606451 L3,45 L8,45 L26,27 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  flash: {
    shape: (
      <defs>
        <path id="original-flash" d="M32 4H14.8l-2.6 24H21v15l15.4-25H26l6-14zm-3 12h11L20.9 47a1 1 0 0 1-1.9-.5V30h-9l3-28h22l-6 14z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-flash" />),
  },
  blub: {
    shape: (
      <defs>
        <path id="original-blub" d="M29 39H19v2h10v-2zm0-2v-5.2a11 11 0 1 0-10 0V37h10zm-.5 6h-9l1.5 3h6l1.5-3zM17 33a13 13 0 1 1 14 0v10l-3 5h-8l-3-5V33zM7 7l1-1 5 5-1 1-5-5zm6 28l-5 5-1-1 5-5 1 1zM42 7l-5 5-1-1 5-5 1 1zm-6 28l1-1 5 5-1 1-5-5zM23 1h1.5v6H23V1zm17 21h6v1.5h-6V22zM2 22h6v1.5H2V22z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-blub" />),
  },
  usbSimple: {
    shape: (
      <defs>
        <path id="original-simple-usb" d="M23 29V7h2v16h7c2 0 4-2 4-4v-8h2v8c0 3-3 6-6 6h-7v14h-2v-8h-7c-3 0-6-3-6-6V15h2v10c0 2 2 4 4 4h7zm1 19a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-40a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm13 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-26 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </defs>
      ),
    viewBox: '0 0 48 48',
    duplication: (<use xlinkHref="#original-simple-usb" />),
  },
  error404: {
    shape: (
      <path d="M8,8 L40,8 C44.418278,8 48,12.0933966 48,17.1428571 L48,30.8571429 C48,35.9066034 44.418278,40 40,40 L8,40 C3.581722,40 5.41083001e-16,35.9066034 0,30.8571429 L0,17.1428571 C-5.41083001e-16,12.0933966 3.581722,8 8,8 Z M8,10 C4.6862915,10 2,13.1340068 2,17 L2,31 C2,34.8659932 4.6862915,38 8,38 L40,38 C43.3137085,38 46,34.8659932 46,31 L46,17 C46,13.1340068 43.3137085,10 40,10 L8,10 Z M14,33 L11,33 L11,30 L4,30 L4,27 L11,16 L14,16 L14,28 L16,28 L16,30 L14,30 L14,33 Z M24,33 C19.728,33 18,30.096 18,24.624 C18,19.152 19.728,16 24,16 C28.272,16 30,19.152 30,24.624 C30,30.096 28.272,33 24,33 Z M42,33 L39,33 L39,30 L32,30 L32,27 L39,16 L42,16 L42,28 L44,28 L44,30 L42,30 L42,33 Z M11,20 L7,27.072 L11,27.072 L11,20 Z M24,30.5 C26.136,30.5 27,28.76 27,26 L27,23 C27,20.24 26.136,18.5 24,18.5 C21.864,18.5 21,20.24 21,23 L21,26 C21,28.76 21.864,30.5 24,30.5 Z M39,20 L35,27.072 L39,27.072 L39,20 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  bug: {
    shape: (
      <path d="M28.4827364,42.137894 L24,34.6666667 L19.5172636,42.137894 C20.8744255,42.6895728 22.4007663,43 24,43 C25.5992337,43 27.1255745,42.6895728 28.4827364,42.137894 Z M30.0201088,41.366848 C32.4207537,39.9084703 34,37.604699 34,35 L34,18 C34,16.8954305 33.1045695,16 32,16 L16,16 C14.8954305,16 14,16.8954305 14,18 L14,35 C14,37.604699 15.5792463,39.9084703 17.9798912,41.366848 L23,33 L25,33 L30.0201088,41.366848 Z M26.278698,6.29097649 C29.8699041,7.22800712 32.5874681,10.3275317 32.9570605,14.1152205 C34.7040332,14.5441505 36,16.1207306 36,18 L36,18.2490118 L39.9987441,15 L39.9987441,7 C39.9987441,6.44771525 40.4464593,6 40.9987441,6 C41.5510288,6 41.9987441,6.44771525 41.9987441,7 L41.9987441,17 L36.0011132,21.0023691 L36,21.000211 L36,25 L46,31 L44,33 L36,28 L36,33.0021581 L36.0011132,33 L41.9987441,37.0023691 L41.9987441,47.0023691 C41.9987441,47.5546538 41.5510288,48.0023691 40.9987441,48.0023691 C40.4464593,48.0023691 39.9987441,47.5546538 39.9987441,47.0023691 L39.9987441,39.0023691 L35.9700523,35.7290246 C35.5071438,41.3218234 29.7535719,45 24,45 C18.2461002,45 12.4922004,41.3214041 12.0298686,35.7280684 L8,39.0023691 L8,47.0023691 C8,47.5546538 7.55228475,48.0023691 7,48.0023691 C6.44771525,48.0023691 6,47.5546538 6,47.0023691 L6,37.0023691 L11.9976309,33 L12,33.0045929 L12,28 L4,33 L2,31 L12,25 L12,20.9977761 L11.9976309,21.0023691 L6,17 L6,7 C6,6.44771525 6.44771525,6 7,6 C7.55228475,6 8,6.44771525 8,7 L8,15 L12,18.2500322 L12,18 C12,16.1207306 13.2959668,14.5441505 15.0429395,14.1152205 C15.4125319,10.3275317 18.1300959,7.22800712 21.721302,6.29097649 L16,2 L18,0 L24,6 L30,0 L32,2 L26.278698,6.29097649 Z M30.9291111,14 C30.4438815,10.6077059 27.5264719,8 24,8 C20.4735281,8 17.5561185,10.6077059 17.0708889,14 L30.9291111,14 Z M23,16 L25,16 L25,33 L23,33 L23,16 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  shield: {
    shape: (
      <path d="M23,8.33655663 L11,11.5365566 L11,26.8451077 C11.0452913,26.9742243 11.1237364,27.1551973 11.2331617,27.3770666 C11.4805622,27.8786923 11.855706,28.5289417 12.3272668,29.2689293 C13.3489731,30.8722223 14.7193965,32.739176 16.1614426,34.4696312 C18.8119403,37.6502285 21.3745742,39.9452338 23,40.7166611 L23,8.33655663 Z M25,8.33655663 L25,40.7166611 C26.6254258,39.9452338 29.1880597,37.6502285 31.8385574,34.4696312 C33.2806035,32.739176 34.6510269,30.8722223 35.6727332,29.2689293 C36.144294,28.5289417 36.5194378,27.8786923 36.7668383,27.3770666 C36.8762636,27.1551973 36.9547087,26.9742243 36.9990964,26.8476103 C36.9993155,26.8469853 36.9996167,21.7433007 37,11.5365566 L25,8.33655663 Z M4,6 L24,0 L44,6 L44,28 C44,32 31,48 24,48 C17,48 4,32 4,28 L4,6 Z M6,7.4880613 L6,28 C6,28.4623778 6.65386911,29.9154203 7.82215366,31.7296975 C9.11292414,33.7341881 10.8987133,36.020629 12.8493083,38.1485507 C17.2038365,42.8989452 21.5763238,46 24,46 C26.4236762,46 30.7961635,42.8989452 35.1506917,38.1485507 C37.1012867,36.020629 38.8870759,33.7341881 40.1778463,31.7296975 C41.3461309,29.9154203 42,28.4623778 42,28 L42,7.4880613 L24,2.0880613 L6,7.4880613 Z M9,10 L24,6 L39,10 L39,27 C39,29 28,43 24,43 C20,43 9,29 9,27 L9,10 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  sword: {
    shape: (
      <path d="M8.91421356,37.9142136 L6.91421356,39.9142136 L8.08578644,41.0857864 L10.0857864,39.0857864 L8.91421356,37.9142136 Z M9.91421356,36.9142136 L11.0857864,38.0857864 L12.1715729,37 L11,35.8284271 L9.91421356,36.9142136 Z M5.91421356,40.9142136 L4.45345409,42.374973 C4.94517998,42.6478194 5.35218058,43.05482 5.62502697,43.5465459 L7.08578644,42.0857864 L5.91421356,40.9142136 Z M5.99791238,45.1129668 C5.93851306,46.7174777 4.61903109,48 3,48 C1.34314575,48 7.10542736e-15,46.6568542 7.10542736e-15,45 C7.10542736e-15,43.3809689 1.28252225,42.0614869 2.88703323,42.0020876 L9.52941176,34.5294118 L7.41421356,32.4142136 C6.63316498,31.633165 6.63316498,30.366835 7.41421356,29.5857864 L8.58578644,28.4142136 C9.36683502,27.633165 10.633165,27.633165 11.4142136,28.4142136 L11.9090909,28.9090909 L36,0 L48,0 L48,12 L19.0909091,36.0909091 L19.5857864,36.5857864 C20.366835,37.366835 20.366835,38.633165 19.5857864,39.4142136 L18.4142136,40.5857864 C17.633165,41.366835 16.366835,41.366835 15.5857864,40.5857864 L13.4705882,38.4705882 L5.99791238,45.1129668 Z M16.4142136,32.5857864 L18.122733,34.2943059 L46,11.0632501 L46,2 L36.9367499,2 L13.7056941,29.877267 L15.4142136,31.5857864 L33,14 L34,15 L16.4142136,32.5857864 Z M8.82842712,31 L17,39.1715729 L18.1715729,38 L10,29.8284271 L8.82842712,31 Z M3,46.5 C3.82842712,46.5 4.5,45.8284271 4.5,45 C4.5,44.1715729 3.82842712,43.5 3,43.5 C2.17157288,43.5 1.5,44.1715729 1.5,45 C1.5,45.8284271 2.17157288,46.5 3,46.5 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
  coin: {
    shape: (
      <path d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,46 C36.1502645,46 46,36.1502645 46,24 C46,11.8497355 36.1502645,2 24,2 C11.8497355,2 2,11.8497355 2,24 C2,36.1502645 11.8497355,46 24,46 Z M24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 Z M24,42 C33.9411255,42 42,33.9411255 42,24 C42,14.0588745 33.9411255,6 24,6 C14.0588745,6 6,14.0588745 6,24 C6,33.9411255 14.0588745,42 24,42 Z M24,12 C26.209139,12 28,13.790861 28,16 L28,32 C28,34.209139 26.209139,36 24,36 C21.790861,36 20,34.209139 20,32 L20,16 C20,13.790861 21.790861,12 24,12 Z M24,14 C22.8954305,14 22,14.8954305 22,16 L22,32 C22,33.1045695 22.8954305,34 24,34 C25.1045695,34 26,33.1045695 26,32 L26,16 C26,14.8954305 25.1045695,14 24,14 Z"
      />
      ),
    viewBox: '0 0 48 48',
  },
};

//const SVG = ({ stroke, fill, width, icon, left, top, className }) => (
export class SVG extends React.PureComponent {
  render(){
    return (
      <React.Fragment>
        {this.props.useSelfAlign ? (
          <WrapperTransform
          id={this.props.id}
          viewBox={icons[this.props.icon].viewBox}
          stroke={this.props.stroke}
          fill={this.props.fill}
          svgWidth={twWidth[`${this.props.width}`]}
          left={this.props.useSelfAlign ? 0 : this.props.left}
          top={this.props.useSelfAlign ? 0 : this.props.top}
          className={this.props.className}
          originOffsetX={this.props.scaleFromLeft ? '0': '-50%'}
          originOffsetY={this.props.scaleFromTop ? '0': '-50%'}
          >
          {icons[this.props.icon].duplication}
          </WrapperTransform>
        ) : (
          <Wrapper
            left={this.props.useSelfAlign ? 0 : this.props.left}
            top={this.props.useSelfAlign ? 0 : this.props.top}
          >
            <WrapperTransform
            id={this.props.id}
            viewBox={icons[this.props.icon].viewBox}
            stroke={this.props.stroke}
            fill={this.props.fill}
            svgWidth={twWidth[`${this.props.width}`]}
            left={this.props.useSelfAlign ? 0 : this.props.left}
            top={this.props.useSelfAlign ? 0 : this.props.top}
            className={this.props.className}
            originOffsetX={this.props.scaleFromLeft ? '0': '-50%'}
            originOffsetY={this.props.scaleFromTop ? '0': '-50%'}
            >
            {icons[this.props.icon].duplication}
            </WrapperTransform>
          </Wrapper>
        )}
      </React.Fragment>
    );
  }
}

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.oneOf(icontTypes).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  scaleFromTop: PropTypes.bool,
  scaleFromLeft: PropTypes.bool,
  useSelfAlign: PropTypes.bool,
};

SVG.defaultProps = {
  stroke: 'transparent',
  width: '8',
  fill: 'none',
  left: '0',
  top: '0',
  className: 'fancy-icon',
  scaleFromTop: false,
  scaleFromLeft: false,
  useSelfAlign: false,
};

export class SVGOriginal extends React.PureComponent {
  render(){
    return (
      <svg viewBox={icons[this.props.icon].viewBox}>
        {icons[this.props.icon].shape}
      </svg>
    );
  }
}

SVGOriginal.propTypes = {
  icon: PropTypes.oneOf(icontTypes).isRequired,
};
