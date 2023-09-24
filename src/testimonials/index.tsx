import React from 'react';
import styles from './styles.module.css';
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
  const testimonialsData = [
    {
      title: '5 Hours to 20 mins',
      text: 'With Finance-Flash, tasks that took 5 hours now take just 20 minutes. Moreover, the feature highlighting both positive and negative statements is invaluable. It simplifies our process of gathering supporting documents for our investment thesis',
      authorName: 'Partner',
      authorDescription: 'Sandhill Investment Management',
    },
    {
        title: 'Insights we couldnot have found ourselvs',
        text: 'Our analysts can now efficiently monitor 30+ additional companies using AI smart summaries of transcripts and key details. This offers significant value in generating Alpha',
        authorName: 'Co-founder',
        authorDescription: 'Gotbit Hedge Fund',
      },
      {
        title: '75% workload to be supported by AI',
        text: 'About one-third of companies expect 51% to 75% of their workloads to be supported by AI technologies in five years time. ',
        authorName: 'Economic Intelligence Unit',
        authorDescription: 'The Economist',
      },
      {
        title: 'Need to manage unstructured data',
        text: '95% of businesses cite the need to manage unstructured data as a problem for their business.',
        authorName: 'Tech Jury Survey',
        authorDescription: 'Tech Jury',
      },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Words from Industry & our users</h2>
        
        <div className="flex -mx-2"> 
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="w-1/4 px-2 flex flex-col">
              <div className="border p-4 rounded shadow h-full">
                <TestimonialItem {...testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;





