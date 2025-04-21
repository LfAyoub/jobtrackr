import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PropTypes from "prop-types";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Container, Typography, Box } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

function ApplicationsStats({ data }) {
  const [chartData, setChartData] = useState(transformData(data));

  function transformData(data) {
    const statusColors = {
      Pending: "rgba(255, 152, 0, 0.5)",
      Offer: "rgba(76, 175, 80, 0.5)",
      Interview: "rgba(33, 150, 243, 0.5)",
      Rejected: "rgba(244, 67, 54, 0.5)",
    };
    const statusCount = data.reduce((acc, application) => {
      acc[application.status] = (acc[application.status] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(statusCount);
    const counts = Object.values(statusCount);
    const colors = labels.map((status) => statusColors[status]);

    return {
      labels,
      datasets: [
        {
          data: counts,
          backgroundColor: colors.slice(0, labels.length),
          borderWidth: 1,
        },
      ],
    };
  }

  function applicationsCount(chartData) {
    if (!chartData) {
      return 0;
    }

    return chartData.datasets[0].data.reduce((acc, count) => acc + count, 0);
  }

  return (
    <Container className="homeContainer" sx={{ height: "410px" }}>
      <Typography variant="h4" component="h3" sx={{ mb: 3 }} gutterBottom>
        Applications overview
      </Typography>
      <Box sx={{ height: "300px", display: "flex", justifyContent: "center" }}>
        {chartData && (
          <Typography variant="h6" component="h6" gutterBottom>
            Total: {applicationsCount(chartData)}
          </Typography>
        )}
        {chartData && <Doughnut data={chartData} />}
      </Box>
    </Container>
  );
}

ApplicationsStats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default ApplicationsStats;
