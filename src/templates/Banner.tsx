import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Adopting new technology feels like a major shift"
      subtitle="It doesn't have to be."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Book a consultation (No strings attached)</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
