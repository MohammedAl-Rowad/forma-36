import React from 'react';
import { Flex } from '@contentful/f36-components';
import { TextLink } from '@contentful/f36-text-link';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

const styles = {
  footer: css`
    display: flex;
    width: 960px;
    margin: 0 auto;
    min-height: 150px;
    padding: ${tokens.spacingL};
    align-items: center;
  `,

  links: css`
    flex: 1 1 0;
  `,

  svg: css`
    height: 30px;
    width: auto;
  `,
};

const Footer = () => (
  <footer className={styles.footer}>
    <Flex className={styles.links}>
      <Flex marginRight="spacingXs">
        <TextLink
          href="https://github.com/contentful/forma-36"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </TextLink>
      </Flex>
      <Flex marginRight="spacingXs">
        <TextLink
          href="https://www.contentful.com/legal/de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imprint / Legal
        </TextLink>
      </Flex>
      <Flex marginRight="spacingXs">
        <TextLink
          href="https://www.contentful.com/legal/de/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </TextLink>
      </Flex>
      <Flex marginRight="spacingXs">
        <TextLink
          href="https://www.contentful.com/security/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Security
        </TextLink>
      </Flex>
    </Flex>

    <div className={styles.logo}>
      <a
        href="https://www.contentful.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="66"
          viewBox="0 0 320 66"
          className={styles.svg}
        >
          <g fill="none" fillRule="evenodd" transform="translate(0 .126)">
            <g fillRule="nonzero">
              <path
                fill="#FFD85F"
                d="M20.091954,45.7931034 C16.8275862,42.4827586 14.7586207,37.8850575 14.8045977,32.8735632 C14.8045977,27.816092 16.8735632,23.2643678 20.183908,20 C22.9885057,17.1954023 23.0344828,12.6896552 20.2298851,9.88505747 C17.4252874,7.08045977 12.9195402,7.03448276 10.0689655,9.83908046 C4.18390805,15.6781609 0.505747126,23.816092 0.459770115,32.8275862 C0.413793103,41.8390805 4.04597701,49.9770115 9.93103448,55.908046 C12.7356322,58.7126437 17.2413793,58.7586207 20.091954,55.954023 C22.8505747,53.1494253 22.8965517,48.5977011 20.091954,45.7931034 Z"
              />
              <path
                fill="#3BB4E7"
                d="M20.183908,20 C23.4942529,16.7356322 28.091954,14.6666667 33.1034483,14.7126437 C38.1609195,14.7126437 42.7126437,16.7816092 45.9770115,20.091954 C48.7816092,22.8965517 53.2873563,22.9425287 56.091954,20.137931 C58.8965517,17.3333333 58.9425287,12.8275862 56.137931,9.97701149 C50.2528736,4.04597701 42.1149425,0.367816092 33.1494253,0.32183908 C24.183908,0.32183908 16,3.90804598 10.1149425,9.79310345 C7.31034483,12.5977011 7.26436782,17.1034483 10.0689655,19.954023 C12.8275862,22.7586207 17.3793103,22.7586207 20.183908,20 Z"
              />
              <path
                fill="#ED5C68"
                d="M45.9310345,45.8850575 C42.6206897,49.1494253 38.0229885,51.2183908 33.0114943,51.1724138 C27.954023,51.1724138 23.4022989,49.1034483 20.137931,45.7931034 C17.3333333,42.9885057 12.8275862,42.9425287 10.0229885,45.7471264 C7.2183908,48.5517241 7.17241379,53.0574713 9.97701149,55.908046 C15.862069,61.8390805 24,65.5172414 32.9655172,65.5632184 C41.9770115,65.6091954 50.1149425,61.9770115 56.045977,56.091954 C58.8505747,53.2873563 58.8965517,48.7816092 56.091954,45.9310345 C53.2413793,43.1264368 48.7356322,43.0804598 45.9310345,45.8850575 Z"
              />
              <path
                fill="#308BC5"
                d="M20.183908,20 C17.3793103,22.8045977 12.8275862,22.7586207 10.0229885,19.954023 C7.2183908,17.1494253 7.26436782,12.5977011 10.0689655,9.83908046 C12.8735632,7.03448276 17.4252874,7.08045977 20.2298851,9.88505747 C23.0344828,12.6436782 22.9885057,17.1954023 20.183908,20 Z"
              />
              <path
                fill="#D5465F"
                d="M20.045977,55.908046 C17.2413793,58.7126437 12.6896552,58.6666667 9.88505747,55.862069 C7.08045977,53.0574713 7.12643678,48.5057471 9.93103448,45.7471264 C12.7356322,42.9425287 17.2873563,42.9885057 20.091954,45.7931034 C22.8965517,48.5977011 22.8505747,53.1494253 20.045977,55.908046 Z"
              />
            </g>
            <path
              fill="#2A3039"
              d="M88.091954,39.908046 C90.1609195,38.3448276 90.4367816,39.2183908 92.183908,40.9655172 C93.0574713,41.8390805 95.4482759,43.3563218 93.8850575,44.6436782 C90.6206897,47.3103448 87.6781609,48.5057471 83.4942529,48.5057471 C74.0689655,48.4597701 67.4022989,41.4252874 67.954023,32.091954 C68.183908,27.908046 69.8390805,23.954023 73.1034483,21.2413793 C76.091954,18.7126437 79.816092,17.6091954 83.7241379,17.7011494 C85.7011494,17.7471264 87.4482759,18.0229885 89.2873563,18.8045977 C90.4827586,19.2643678 91.6321839,19.816092 92.6436782,20.5977011 C94.7126437,22.2068966 93.7471264,23.1264368 92.137931,24.7356322 C91.7701149,25.1034483 91.4022989,25.4712644 91.0804598,25.8390805 C90.2528736,26.6666667 89.7011494,27.2643678 88.5977011,26.4827586 C86.4827586,25.0114943 83.816092,24.2298851 81.2873563,24.8735632 C73.1494253,26.9425287 73.5172414,41.4252874 83.4942529,41.4712644 C85.0574713,41.5172414 86.8045977,40.8735632 88.091954,39.908046 Z M314.298851,48.6896552 C312.91954,48.6896552 311.816092,47.5862069 311.816092,46.2068966 L311.954023,14.1149425 C311.954023,12.7356322 313.057471,11.6321839 314.436782,11.6321839 L317.103448,11.6321839 C318.482759,11.6321839 319.586207,12.7356322 319.586207,14.1149425 L319.448276,46.2068966 C319.448276,47.5862069 318.344828,48.6896552 316.965517,48.6896552 L314.298851,48.6896552 Z M300.321839,44.9655172 C297.425287,47.6781609 294.666667,49.1034483 290.574713,49.1034483 C282.298851,49.0574713 278.344828,42.2068966 278.344828,34.5287356 L278.390805,21.4712644 C278.390805,20.091954 279.494253,18.9885057 280.873563,18.9885057 L283.54023,18.9885057 C284.91954,18.9885057 286.022989,20.091954 286.022989,21.4712644 L285.977011,34.5287356 C285.977011,38.8045977 288.275862,42.1609195 292.781609,42.1609195 C297.241379,42.1609195 300.045977,38.3908046 300.091954,34.1609195 L300.091954,29.5172414 C300.045977,29.3333333 300.045977,29.1494253 300.045977,28.9655172 L300.091954,21.5632184 C300.091954,20.183908 301.195402,19.0804598 302.574713,19.0804598 L305.241379,19.0804598 C306.62069,19.0804598 307.724138,20.183908 307.724138,21.5632184 L307.632184,46.2068966 C307.632184,47.5402299 306.528736,48.6436782 305.149425,48.6436782 L302.896552,48.6436782 C301.517241,48.6436782 300.551724,47.4942529 300.45977,46.2068966 L300.321839,44.9655172 Z M268.597701,19.0804598 L273.747126,19.0804598 C275.126437,19.0804598 276.183908,20.2298851 276.183908,21.6091954 L276.183908,23.3103448 C276.183908,24.6436782 275.08046,25.7931034 273.701149,25.7931034 L268.551724,25.7931034 L268.45977,46.0689655 C268.45977,47.4482759 267.356322,48.5517241 265.977011,48.5517241 L263.310345,48.5517241 C261.931034,48.5517241 260.827586,47.4482759 260.827586,46.0689655 L260.91954,18.0229885 C260.91954,11.908046 264.413793,7.08045977 270.666667,6.52873563 C270.850575,6.52873563 270.988506,6.48275862 271.172414,6.48275862 C271.54023,6.43678161 271.908046,6.48275862 272.275862,6.48275862 L274.666667,6.48275862 C276.045977,6.48275862 277.103448,7.63218391 277.103448,9.01149425 L277.103448,10.5747126 C277.103448,11.908046 276,13.0574713 274.62069,13.0574713 L272.873563,13.0574713 C272.827586,13.0574713 272.781609,13.0574713 272.689655,13.0574713 C269.747126,13.0574713 268.505747,15.3103448 268.45977,18.0689655 L268.597701,19.0804598 Z M250.114943,18.9885057 L255.770115,18.9885057 C257.103448,18.9885057 258.206897,20.091954 258.206897,21.4712644 L258.206897,23.1724138 C258.206897,24.5057471 257.103448,25.6091954 255.724138,25.6091954 L250.068966,25.6091954 L250.022989,38.0229885 C250.022989,40.4137931 251.172414,41.7931034 253.563218,41.7931034 L254.712644,41.7931034 C256.045977,41.7931034 257.149425,42.8965517 257.149425,44.2758621 L257.149425,45.9770115 C257.149425,47.3103448 256.045977,48.4137931 254.666667,48.4137931 L252.505747,48.4137931 C252.091954,48.4137931 251.724138,48.4137931 251.310345,48.3678161 C245.195402,47.954023 242.482759,44 242.482759,38.0229885 C242.528736,29.9770115 242.528736,21.9770115 242.574713,13.9310345 C242.574713,12.5977011 243.678161,11.4942529 245.057471,11.4942529 L247.678161,11.4942529 C249.011494,11.4942529 250.114943,12.5977011 250.114943,13.9770115 L250.114943,18.9885057 Z M168.321839,18.6666667 L173.977011,18.6666667 C175.310345,18.6666667 176.413793,19.7701149 176.413793,21.1494253 L176.413793,22.8505747 C176.413793,24.183908 175.310345,25.2873563 173.931034,25.2873563 L168.275862,25.2873563 L168.275862,37.7011494 C168.275862,40.091954 169.425287,41.4712644 171.816092,41.4712644 L172.965517,41.4712644 C174.298851,41.4712644 175.402299,42.5747126 175.402299,43.954023 L175.402299,45.6551724 C175.402299,46.9885057 174.298851,48.091954 172.91954,48.091954 L171.218391,48.091954 C164.551724,48.045977 160.689655,45.1954023 160.689655,37.7011494 C160.735632,29.6551724 160.735632,21.6551724 160.781609,13.6091954 C160.781609,12.2758621 161.885057,11.1724138 163.264368,11.1724138 L165.885057,11.1724138 C167.218391,11.1724138 168.321839,12.2758621 168.321839,13.6551724 L168.321839,18.6666667 Z M135.126437,22.1609195 C137.83908,19.6321839 140.781609,18.0229885 144.597701,18.0229885 C152.873563,18.0689655 157.149425,24.8275862 157.103448,32.5977011 L157.057471,45.6551724 C157.057471,47.0344828 155.954023,48.137931 154.574713,48.137931 L151.908046,48.137931 C150.528736,48.137931 149.425287,47.0344828 149.425287,45.6551724 L149.471264,32.6896552 C149.471264,28.4137931 147.172414,25.0574713 142.666667,25.0574713 C138.206897,25.0574713 135.402299,28.7816092 135.356322,33.0114943 L135.310345,45.6551724 C135.310345,46.9885057 134.206897,48.091954 132.827586,48.091954 L130.206897,48.091954 C128.873563,48.091954 127.770115,46.9885057 127.770115,45.6091954 C127.816092,37.7471264 127.816092,29.8390805 127.862069,21.9770115 L127.862069,20.9195402 C127.862069,19.5862069 128.965517,18.4827586 130.344828,18.4827586 L132.597701,18.4827586 C133.977011,18.4827586 134.942529,19.6321839 135.034483,20.9195402 L135.126437,22.1609195 Z M217.057471,22.4827586 C219.770115,19.954023 222.712644,18.3448276 226.528736,18.3448276 C234.804598,18.3908046 239.08046,25.1494253 239.034483,32.9195402 L238.988506,45.9770115 C238.988506,47.3563218 237.885057,48.4597701 236.505747,48.4597701 L233.83908,48.4597701 C232.45977,48.4597701 231.356322,47.3563218 231.356322,45.9770115 L231.402299,33.0114943 C231.402299,28.7356322 229.103448,25.3793103 224.597701,25.3793103 C220.137931,25.3793103 217.333333,29.1034483 217.287356,33.3333333 L217.241379,45.9770115 C217.241379,47.3103448 216.137931,48.4137931 214.758621,48.4137931 L212.137931,48.4137931 C210.804598,48.4137931 209.701149,47.3103448 209.701149,45.9310345 L209.793103,21.2413793 C209.793103,19.908046 210.896552,18.8045977 212.275862,18.8045977 L214.528736,18.8045977 C215.908046,18.8045977 216.873563,19.954023 216.965517,21.2413793 L217.057471,22.4827586 Z M110.114943,17.7931034 C101.149425,17.7471264 94.8045977,24.2298851 94.7586207,33.1494253 C94.7126437,42.1609195 100.965517,48.5517241 110.022989,48.5977011 C119.08046,48.6436782 125.425287,42.2988506 125.471264,33.2413793 C125.517241,24.3678161 119.034483,17.8390805 110.114943,17.7931034 Z M184.551724,36.2298851 C185.195402,40.3678161 189.149425,42.0689655 193.011494,42.1149425 C194.850575,42.1149425 196.965517,41.6551724 198.62069,40.8735632 C198.896552,40.7356322 199.172414,40.6436782 199.448276,40.4597701 C200.367816,39.954023 201.195402,39.6321839 202.022989,40.4597701 C202.482759,40.9195402 202.896552,41.3793103 203.356322,41.7931034 C203.770115,42.2068966 204.183908,42.6206897 204.551724,43.1264368 C205.793103,44.6896552 204.91954,45.0574713 203.494253,46.0229885 C200.45977,48.045977 196.505747,49.0574713 192.873563,49.0574713 C183.126437,49.0114943 176.689655,43.0804598 176.689655,33.2413793 C176.735632,23.954023 183.172414,17.7931034 192.45977,17.8390805 C201.931034,17.8850575 207.310345,23.4482759 207.448276,32.9195402 C207.494253,35.4942529 207.586207,36.3218391 204.91954,36.3218391 L184.551724,36.2298851 Z M110.114943,24.7356322 C114.758621,24.7356322 117.83908,28.7816092 117.83908,33.2413793 C117.83908,37.8850575 114.942529,41.6091954 110.068966,41.6091954 C105.195402,41.6091954 102.344828,37.8390805 102.344828,33.1954023 C102.390805,28.5977011 105.287356,24.7356322 110.114943,24.7356322 Z M184.735632,29.8390805 L200,29.8850575 C199.448276,26.0689655 196.275862,24.5517241 192.643678,24.5517241 C189.011494,24.5517241 185.885057,26.2528736 184.735632,29.8390805 Z"
            />
          </g>
        </svg>
      </a>
    </div>
  </footer>
);

export default Footer;
