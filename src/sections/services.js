import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard_1 from 'components/cards/service-card';
import ServiceCard_2 from 'components/cards/service-card_2';
import Image1 from 'assets/image-1.png';
import Image2 from 'assets/image-2.png';
import Image3 from 'assets/image-3.png';
import Image4 from 'assets/image-4.png';
import Image5 from 'assets/image-5.png';
import Image6 from 'assets/image-6.png';

const SERVICES_DATA_1 = [
  {
    image: Image1,
    text:
      "Trade securities tokens using Decentralized Exchange.",
    heading: 'DEX',
    path: 'https://app.levinswap.org',
  },
  {
    image: Image2,
    text:
      "Lend out/borrow against securities assets with ease.",
    heading: 'Lending (TBD)',
    path: 'https://app.aave.com/',
  },
  {
    image: Image3,
    text:
    "Deposit securities into vaults with strategies that yield high APR.",
    heading: 'Vaults (TBD)',
    path: 'https://yearn.finance/vaults',
  },
  {
    image: Image4,
    text:
    "Farm LEVIN token by providing liquidity to Levinswap.",
    heading: 'Farming',
    path: 'https://farm.levinswap.org',
  },
  {
    image: Image5,
    text:
    "Stake LEVIN & earn portion of fees generated by the ecosystem.",
    heading: 'Staking',
    path: 'https://stake.levinswap.org',
  },
  {
    image: Image6,
    text:
    "Become part of the ecosystem. One DAO to rule them all.",
    heading: 'DAO (TBD)',
    path: '#',
  },
];

const SERVICES_DATA_2 = [
  {
    heading: "150+",
    text:
      "Securities Assets Listed",
  },
  {
    heading: "#1",
    text:
      "Leading Protocol in Securities",
  },
  {
    heading: "L2",
    text:
      "Protocol Powered by xDai",
  },
]

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="DeFi Protocols & Products"
          text="New way of experiencing DeFi"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA_1.map(({ image, text, heading, path }, index) => (
            <ServiceCard_1
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>

        <Grid sx={styles.grid2}>
          {SERVICES_DATA_2.map(({ heading, text}, index) => (
            <ServiceCard_2
              heading={heading}
              text={text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '50px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
  grid2: {
    gridGap: '250px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
    mt: '100px',
    mb: '-50px',
  }
};
