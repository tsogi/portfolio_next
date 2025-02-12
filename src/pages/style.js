import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'

export default {
  Jptf03: css`
    background-color: #060606;
    color: #fff;
    min-height: 100vh;
    padding: 4rem 0;

    ._section-title {
      font-size: 3.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #5587ff, #3772ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-bottom: 0.5rem;

      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 2.5rem;
      }
    }

    ._section-description {
      font-size: 1.2rem;
      color: #94a3b8;
      text-align: center;
      margin-bottom: 4rem;
      
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 1rem;
        margin-bottom: 3rem;
      }
    }

    .articles {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 90%;
      max-width: 1400px;
      margin: 0 auto;
      gap: 2rem;
    }

    .profile {
      margin: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 2.5rem;
      width: 320px;
      background-color: rgba(27, 32, 40, 0.8);
      border-radius: 24px;
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      text-align: center;
      color: #f1f3f3;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px -10px rgba(55, 114, 255, 0.2);
        border-color: rgba(55, 114, 255, 0.3);
      }
    }

    .profile-image {
      border-radius: 20px;
      overflow: hidden;
      width: 200px;
      height: 200px;
      position: relative;
      margin-bottom: 1.5rem;
      border: 3px solid rgba(55, 114, 255, 0.3);
      box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.5);

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }

    .profile-username {
      font-size: 1.4rem;
      font-weight: 600;
      margin: 0 0 1.5rem;
      color: #fff;
      letter-spacing: 0.5px;
    }

    .profile-actions {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .btn--primary {
      padding: 0.8em 1.8em;
      font-size: 0.95rem;
      font-weight: 500;
      border-radius: 12px;
      background: linear-gradient(135deg, #5587ff, #3772ff);
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease;
      border: none;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 15px -3px rgba(55, 114, 255, 0.2);

      &:hover {
        background: linear-gradient(135deg, #3772ff, #2961ff);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px -3px rgba(55, 114, 255, 0.3);
      }

      &:active {
        transform: translateY(0);
      }
    }

    .facebookGroup {
      font-size: 1.1rem;
      text-align: center;
      margin: 5rem 0 2rem;
      padding: 2rem;
      background: rgba(27, 32, 40, 0.5);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;

      span {
        color: #94a3b8;
        margin-right: 0.5rem;
      }

      a {
        color: ${theme().primary};
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;

        &:hover {
          color: #5587ff;
          text-decoration: underline;
        }
      }

      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 0.9rem;
        margin: 3rem 1rem 2rem;
        padding: 1.5rem;
      }
    }
  `,
} 