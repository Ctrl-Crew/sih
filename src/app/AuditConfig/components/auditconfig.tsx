import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem } from '@mantine/core';
import classes from './auditconfig.module.css';

const data = [
  {
    id: '1',
    name: 'CIS Benchmark 1',
    lastaudit: '12/02/2005',
    system: 'Windows',
  },
  {
    id: '2',
    name: 'CIS Benchmark 2',
    lastaudit: '24/03/2022',
    system: 'Ubuntu',
  },
  {
    id: '3',
    name: 'CIS Benchmark 3',
    lastaudit: '03/04/2023',
    system: 'RHEL',
  },
  {
    id: '4',
    name: 'CIS Benchmark 4',
    lastaudit: '11/11/2011',
    system: 'Ubuntu',
  },
  {
    id: '5',
    name: 'CIS Benchmark 5',
    lastaudit: '22/02/2022',
    system: 'Windows',
  },
  {
    id: '6',
    name: 'CIS Benchmark 66',
    lastaudit: '12/02/2005',
    system: 'Windows',
  },
  {
    id: '7',
    name: 'CIS Benchmark 41',
    lastaudit: '24/03/2022',
    system: 'Ubuntu',
  },
  {
    id: '8',
    name: 'CIS Benchmark 32',
    lastaudit: '03/04/2023',
    system: 'RHEL',
  },
  {
    id: '9',
    name: 'CIS Benchmark 14',
    lastaudit: '11/11/2011',
    system: 'Ubuntu',
  },
  {
    id: '10',
    name: 'CIS Benchmark 25',
    lastaudit: '22/02/2022',
    system: 'Windows',
  },
];

export function AuditSelection() {
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.system}</Table.Td>
        <Table.Td>{item.lastaudit}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
              />
            </Table.Th>
            <Table.Th>Audit</Table.Th>
            <Table.Th>System</Table.Th>
            <Table.Th>Last Audited</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}