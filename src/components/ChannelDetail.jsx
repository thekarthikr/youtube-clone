import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  const channelBanner =
    channelDetail?.brandingSettings?.image?.bannerExternalUrl;

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        {channelBanner ? (
          <CardMedia
            image={channelBanner}
            sx={{
              height: "200px",
              width: "100%",
            }}
          />
        ) : (
          <div
            style={{
              background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />
        )}

        <ChannelCard channelDetail={channelDetail} marginTop='-60px' />
      </Box>

      <Box p={5}>
        <Typography
          variant='h5'
          sx={{ color: "#f1f1f1", mb: "20px", textAlign: "center" }}
        >
          Recent Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
