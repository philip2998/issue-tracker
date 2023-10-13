import "react-loading-skeleton/dist/skeleton.css";

import { Card, Flex, Heading, Box } from "@radix-ui/themes";

import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Skeleton from "react-loading-skeleton";

const LoadingIssueDetailPage = () => {
  return (
    <>
      <div>Loading...</div>
      <Box className="max-w-xl">
        <Skeleton />
        <Flex className="space-x-3" my="2">
          <Skeleton width="5rem" />
          <Skeleton width="8rem" />
        </Flex>
        <Card className="prose" mt="4">
          <Skeleton count={3} />
        </Card>
      </Box>
    </>
  );
};

export default LoadingIssueDetailPage;
