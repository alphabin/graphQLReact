import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
    const { data, error } = useQuery(FEED_QUERY);
    return (
        <div>
            {!error && data.feed.links.map((link) => (
                <Link key={link.id} link={link} />
            ))}
        </div>
    );
};

export default LinkList;