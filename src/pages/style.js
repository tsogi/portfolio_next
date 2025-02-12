import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'

export default {
  Jptf03: css`
    background-color: #060606;
    color: #fff;
    min-height: 100vh;

    .articles {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
    }

    .profile {
      margin: 30px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 3rem;
      width: 90%;
      max-width: 300px;
      background-color: #1b2028;
      border-radius: 16px;
      position: relative;
      border: 3px solid transparent;
      background-clip: padding-box;
      text-align: center;
      color: #f1f3f3;
      background-image: linear-gradient(135deg, rgba(117, 46, 124, 0.35), rgba(115, 74, 88, 0.1) 15%, #1b2028 20%, #1b2028 100%);

      &:after {
        content: "";
        display: block;
        top: -3px;
        left: -3px;
        bottom: -3px;
        right: -3px;
        z-index: -1;
        position: absolute;
        border-radius: 16px;
        background-image: linear-gradient(135deg, #752e7c, #734a58 20%, #1b2028 30%, #2c333e 100%);
      }
    }

    .profile-image {
      border-radius: 50%;
      overflow: hidden;
      width: 175px;
      height: 175px;
      position: relative;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }
    }

    .profile-username {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 1.5rem;
    }

    .profile-actions {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .btn--primary {
      border-radius: 99em;
      background-color: ${theme().primary};
      background-image: linear-gradient(135deg, #5587ff, #3772ff);
      color: #fff;
      padding: 0.8em 1.375em;
      text-decoration: none;
      transition: 0.15s ease;

      &:hover {
        background-size: 150%;
      }
    }

    .facebookGroup {
      font-size: 1.3rem;
      text-align: center;
      margin: 99px 0 150px;

      a {
        color: ${theme().primary};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `,
} 