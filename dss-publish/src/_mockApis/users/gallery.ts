// project imports
import mock from '../mockAdapter';
// assets
import image1 from '@/assets/images/profile/img-gal-1.png';
import image2 from '@/assets/images/profile/img-gal-2.png';
import image3 from '@/assets/images/profile/img-gal-3.png';
import image4 from '@/assets/images/profile/img-gal-4.png';
import image5 from '@/assets/images/profile/img-gal-5.png';
import image6 from '@/assets/images/profile/img-gal-6.png';
import image7 from '@/assets/images/profile/img-gal-7.png';
import image8 from '@/assets/images/profile/img-gal-8.png';
import image9 from '@/assets/images/profile/img-gal-9.png';
import image10 from '@/assets/images/profile/img-gal-10.png';
import image11 from '@/assets/images/profile/img-gal-11.png';
import image12 from '@/assets/images/profile/img-gal-12.png';

// types
export type KeyedObject = {
  [key: string]: string | number | KeyedObject;
};

// gallery components

const gallery: KeyedObject[] = [
  {
    id: '#1Gallery',
    image: image1,
    title: '1080p_table_denar.pdf',
    dateTime: 'Tue Aug 24 2021'
  },
  {
    id: '#2Gallery',
    image: image2,
    title: 'handmade.mp2',
    dateTime: 'Fri Apr 30 2021'
  },
  {
    id: '#3Gallery',
    image: image3,
    title: 'granite_cheese.wav',
    dateTime: 'Fri Jun 25 2021'
  },
  {
    id: '#4Gallery',
    image: image4,
    title: 'invoice.mpg',
    dateTime: 'Sat Oct 23 2021'
  },
  {
    id: '#5Gallery',
    image: image5,
    title: 'benchmark_forge.m1v',
    dateTime: 'Fri Jan 21 2022'
  },
  {
    id: '#6Gallery',
    image: image6,
    title: 'violet_withdrawal.png',
    dateTime: 'Wed Sep 22 2021'
  },
  {
    id: '#7Gallery',
    image: image7,
    title: 'web_readiness.mpeg',
    dateTime: 'Mon Jul 12 2021'
  },
  {
    id: '#8Gallery',
    image: image8,
    title: 'zimbabwe.htm',
    dateTime: 'Sat Mar 20 2021'
  },
  {
    id: '#9Gallery',
    image: image9,
    title: 'circuit.m3a',
    dateTime: 'Tue Jan 18 2022'
  },
  {
    id: '#10Gallery',
    image: image10,
    title: 'data_red.png',
    dateTime: 'Sun Apr 04 2021'
  },
  {
    id: '#11Gallery',
    image: image11,
    title: 'handcrafted.html',
    dateTime: 'Tue May 25 2021'
  },
  {
    id: '#12Gallery',
    image: image12,
    title: 'hacking_games.pdf',
    dateTime: 'Tue Oct 19 2021'
  }
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/gallery/list').reply(200, { gallery });
