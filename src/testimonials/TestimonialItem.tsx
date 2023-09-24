import React from 'react';

type TestimonialProps = {
  title: string;
  text: string;
  authorName: string;
  authorDescription: string;
};

const TestimonialItem: React.FC<TestimonialProps> = ({
  title,
  text,
  authorName,
  authorDescription,
}) => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <img className="h-8 w-8 mr-2" src="https://cdn.teamwave.com/ws/static/img/quote.png" alt="Quote" />
        <span className="font-semibold">{title}</span>
      </div>
      <p className="italic mb-4">"{text}"</p>
      <div>
        <h4 className="font-semibold text-xl">{authorName}</h4>
        <h6 className="text-gray-500">{authorDescription}</h6>
      </div>
    </div>
  );
};

export default TestimonialItem;