import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import Link from 'next/link';
// eslint-disable-next-line
// @ts-ignore
import pkg from '../../forma-36-react-components/package.json';

export const TopbarHeight = '70px';

const styles = {
  header: css`
    display: flex;
    background-color: ${tokens.blue700};
    color: #fff;
    padding: 0 ${tokens.spacingXl};
    height: ${TopbarHeight};
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  `,
  logoLink: css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  `,
  logoText: css`
    font-weight: ${tokens.fontWeightDemiBold};
    font-size: ${tokens.fontSizeXl};
    margin-left: ${tokens.spacingL};
  `,
  versionText: css`
    font-weight: ${tokens.fontWeightDemiBold};
    font-size: ${tokens.fontSizeL};
    margin-left: ${tokens.spacingM};
  `,
  searchNavContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  `,
  navList: css`
    list-style: none;
    padding: 0;
    display: flex;
  `,
  navListItem: css`
    margin-left: ${tokens.spacingM};
    font-size: ${tokens.fontSizeL};
  `,
  navListLink: css`
    color: #fff;
    text-decoration: none;

    &:hover {
      color: ${tokens.gray200};
    }
  `,
};

const Logo = () => (
  <svg
    x="0px"
    y="0px"
    width="32px"
    height="32px"
    viewBox="0 0 90 90"
    enableBackground="new 0 0 90 90"
  >
    <circle fill="#ffffff" cx="45" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="10" r="10" />
    <circle fill="#ffffff" cx="80" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="45" r="10" />
    <circle fill="#ffffff" cx="45" cy="45" r="10" />
    <circle fill="#ffffff" cx="10" cy="80" r="10" />
  </svg>
);

export const Topbar = () => (
  <header className={styles.header}>
    <Link href="/" passHref>
      <a className={styles.logoLink} href="/">
        <Logo />
        <div className={styles.logoText}>Forma 36</div>
      </a>
    </Link>
    <div className={styles.versionText}>v{pkg.version}</div>

    <div className={styles.searchNavContainer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/playground" passHref>
              <a className={styles.navListLink} href="/playground">
                Playground
              </a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <a
              className={styles.navListLink}
              href="https://github.com/contentful/forma-36"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className={styles.navListItem}>
            <a
              className={styles.navListLink}
              href="https://medium.com/contentful-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li className={styles.navListItem}>
            <a
              className={styles.navListLink}
              href="https://www.contentful.com/developers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the community
            </a>
          </li>
          <li className={styles.navListItem}>
            <a
              className={styles.navListLink}
              href="https://forms.gle/qC7LLbiy4CcF5HPLA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give us feedback
            </a>
          </li>
          <li className={styles.navListItem}>
            <a
              className={styles.navListLink}
              href="https://v3.f36.contentful.com/"
            >
              Forma 36 v3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
