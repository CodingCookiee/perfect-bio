import localFont from 'next/font/local';

export const nunitoSans = localFont({
  variable: '--font-nunito-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  src: [
    {
      path: '../../../public/fonts/nunito-sans/NunitoSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal'  
    },
    {
      path: '../../../public/fonts/nunito-sans/NunitoSans-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/nunito-sans/NunitoSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/nunito-sans/NunitoSans-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/nunito-sans/NunitoSans-Bold.ttf',
      weight: '700',  
      style: 'normal'
    },
    {
      path: '../../../public/fonts/nunito-sans/NunitoSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    }
  ]
});

export const audioWide = localFont({
  variable: '--font-audio-wide',
  display: 'swap',
  fallback: ['cursive', 'serif'],
  src: [
    {
      path: '../../../public/fonts/audio-wide/Audiowide-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
});