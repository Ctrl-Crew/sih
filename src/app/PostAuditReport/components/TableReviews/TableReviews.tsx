"use client"
import { Table, Progress, Anchor, Text, Group } from "@mantine/core";
import classes from "./TableReviews.module.css";

const data = [
  {
    name: "Audit Om",
    status: "Completed",
    time: 2.3,
    reviews: { positive: 2223, negative: 259 },
  },
  {
    name: "Audit Pandit",
    status: "Pending",
    time: 4.6,
    reviews: { positive: 5677, negative: 1265 },
  },
  {
    name: "Audit Mariam",
    status: "Completed",
    time: 0.9,
    reviews: { positive: 3487, negative: 1845 },
  },
  {
    name: "Audit Tanmay",
    status: "Completed",
    time: 0.7,
    reviews: { positive: 8576, negative: 663 },
  },
  {
    name: "Audit Ritankar",
    status: "Terminated",
    time: 7.2,
    reviews: { positive: 6631, negative: 993 },
  },
  {
    name: "Audit Rohan",
    status: "Progressing",
    time: 7.4,
    reviews: { positive: 8124, negative: 1847 },
  },
];

export function TableReviews() {
  const rows = data.map((row) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    // Determine the CSS class for the status
    const statusClass = row.status.toLowerCase();

    return (
      <tr key={row.name} className={classes.tableRow}>
        <td>
          <Anchor component="button" fz="md" className={classes.tableAnchor}>
            {row.name}
          </Anchor>
        </td>
        <td className={classes.centerText}>{row.time}</td>
        <td className={classes.centerText}>
          <span className={`${classes.status} ${classes[statusClass]}`}>
            {row.status}
          </span>
        </td>
        <td className={classes.centerText}>
          {Intl.NumberFormat().format(totalReviews)}
        </td>
        <td>
          <Group justify="space-between">
            <Text fz="sm" c="teal" fw={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="sm" c="red" fw={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root className={classes.progressBarRoot}>
            <Progress.Section
              className={classes.progressSection}
              value={positiveReviews}
              color="teal"
            />
            <Progress.Section
              className={classes.progressSection}
              value={negativeReviews}
              color="red"
            />
          </Progress.Root>
        </td>
      </tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={1000} className={classes.tableContainer}>
      <Table
        verticalSpacing="md"
        horizontalSpacing="lg"
        className={classes.table}
      >
        <thead className={classes.tableHeader}>
          <tr>
            <th>Audit Name</th>
            <th>Time Taken</th>
            <th>Status</th>
            <th>Packages</th>
            <th>Packages Distribution</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
