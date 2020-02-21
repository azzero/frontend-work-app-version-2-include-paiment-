import React from 'react';
import { Pagination, Dropdown } from 'semantic-ui-react';
const Paginationn = ({ postsPerPage, totalPosts, paginate, drop }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const options = [
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4', value: 4 },
    { key: 5, text: '5', value: 5 },
    { key: 6, text: '6', value: 6 },
    { key: 7, text: '7', value: 7 },
    { key: 8, text: '8', value: 8 },
    { key: 9, text: '9', value: 9 },
    { key: 10, text: '10', value: 10 }
  ];
  return (
    <nav style={{ textAlign: 'center' }}>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={'<<'}
        lastItem={'>>'}
        siblingRange={1}
        totalPages={pageNumbers.length}
        onPageChange={(event, data) => {
          paginate(data.activePage);
        }}
      />{' '}
      <Dropdown
        defaultValue={5}
        options={options}
        selection
        onChange={(event, data) => {
          drop(data.value);
        }}
      />
    </nav>
  );
};

export default Paginationn;
