import React from 'react';

interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
  return null;
};

const Component: React.FC = () => {
  return (
    <>
      <Table
        items={[{ id: '1', firstName: 'Mike' }]}
        renderItem={(item) => {
          return null;
        }}
      />

      <Table
        items={[{ id: '1', petName: 'Junior' }]}
        renderItem={(item) => {
          return null;
        }}
      />
    </>
  );
};

export default Component;
