// import Link from 'next/link';
// import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

// const Hero = () => (
//   <Background color="bg-gray-100">
//     <Section yPadding="py-6">
//       <NavbarTwoColumns logo={<Logo xl />}>
//         <li>
//           <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
//             GitHub
//           </Link>
//         </li>
//         <li>
//           <Link href="/">Sign in</Link>
//         </li>
//       </NavbarTwoColumns>
//     </Section>

//     <Section yPadding="pt-20 pb-32">
//       <div className="flex">
        
//         {/* Content & Button (60% width) */}
//         <div className="w-6/10 p-4">
//           <HeroOneButton
//             title={
//               <>
//                 {'Tailored AI & Automation solutions for Boutique Investment Mgmt. & Research firms\n'}
//                 <span className="text-primary-500">Achieve More in Less time</span>
//               </>
//             }
//             description="Curious to discover a solution precisely crafted for your needs?"
//             button={
//               <Link href="https://creativedesignsguru.com/category/nextjs/">
//                 <Button xl>Book a consultation (No strings attached)</Button>
//               </Link>
//             }
//           />
//         </div>
        
//         {/* Image (40% width) */}
//         <div className="w-4/10 flex items-center p-4">
//           <img 
//               src="/assets/images/semantic.png" 
//               alt="Product Image" 
//               className="w-full h-full object-contain"
//           />
//         </div>
        
//       </div>
//     </Section>
//   </Background>
// );

// export { Hero };



import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://finance-flash.com">
            Finance Flash
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <div className="flex w-full">

        {/* Content & Button (60% width) */}
        <div className="w-7/10 text-right"> {/* Temporary width and background color */}
          <HeroOneButton
            title={
              <>
                {'Tailored AI & Automation solutions for Boutique Investment Mgmt. & Research firms\n'}
                <span className="text-primary-500">Achieve More in Less time</span>
              </>
            }
            description="Curious to discover a solution precisely crafted for your needs?"
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <Button xl>Book a consultation (No strings attached)</Button>
              </Link>
            }
          />
        </div>
        
        {/* Single Image (40% width) */}
        <div className="w-3/10 flex items-center justify-center p-4">
            <img 
                src="/assets/images/semantic.png" 
                alt="Product Image" 
                className="w-full h-full object-contain"
            />
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
