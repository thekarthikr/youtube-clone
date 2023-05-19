import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import CardSkeleton from "./CardSkeleton";

function Videos({ videos, direction }) {
  if (!videos?.length) return <CardSkeleton direction={direction} />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
