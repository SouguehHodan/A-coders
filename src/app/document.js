// src/pages/index.js
import Head from 'next/head';
import TrandingSlider from '@/components/swiper/swiper';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fody Slider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <TrandingSlider />
    </div>
  );
}