import { Skeleton, Box, Stack } from "@mui/material";

const VideoDeailsSkeleton = () => {
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: "column", md: "row" }} sx={{ p: "1.5rem" }}>
        <Box flex={1}>
          <Box
            sx={{ width: "100%", position: "sticky", top: "86px", zIndex: "1" }}
          >
            <Skeleton
              sx={{ bgcolor: "#282828" }}
              variant='regtancular'
              width='80%'
              height='400px'
            />
            <Skeleton sx={{ bgcolor: "#282828" }} width='80%' varian='text' />
            <Skeleton sx={{ bgcolor: "#282828" }} width='80%' varian='text' />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDeailsSkeleton;
