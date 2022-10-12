import React from 'react';
import Container from 'components/ui/Container';
import Explanation from './Explanation';

export default function MissingEvents({
  background = 'bg-background',
  padding = 'py-12',
}) {
  return (
    <div className={`${background} ${padding}`}>
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <Explanation></Explanation>
          </div>
          <div className="flex-1">
            <p className="text-2xl">No upcomming events, check back later!</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
