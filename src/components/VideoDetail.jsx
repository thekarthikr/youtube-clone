import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import {
  CheckCircle,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Spinner from "./Spinner";
import VideoComments from "./VideoComments";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);

  const [videos, setVideos] = useState(null);
  const [showMoreTags, setShowMoreTags] = useState(false);
  const [showMoreDesc, setShowMoreDesc] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Spinner />;

  const {
    snippet: { publishedAt, channelId, title, description, channelTitle, tags },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: "column", md: "row" }} sx={{ p: "1.5rem" }}>
        <Box flex={1}>
          <Box
            sx={{ width: "100%", position: "sticky", top: "86px", zIndex: "1" }}
          >
            <ReactPlayer
              width='100%'
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography
              color='#fff'
              variant='h5'
              fontWeight='bold'
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link
                to={`/channel/${channelId}`}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Box>
                  <Typography
                    display='flex'
                    alignItems='center'
                    color='gray'
                    fontWeight='bold'
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Box>
              </Link>

              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography
                  variant='body1'
                  sx={{
                    opacity: 0.7,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    p: ".5rem",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {Number(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    opacity: 0.7,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    p: ".5rem",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <ThumbUpOutlined
                    sx={{
                      fontSize: "20px",
                      color: "gray",
                      ml: "5px",
                    }}
                  />
                  {Number(likeCount).toLocaleString()} {""}
                  {"|"}
                  {""}
                  <ThumbDownOutlined
                    sx={{
                      fontSize: "20px",
                      color: "gray",
                      ml: "5px",
                    }}
                  />
                </Typography>
              </Stack>
            </Stack>
            {/* Description */}
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "30px",
                p: "15px",
                marginTop: "10px",
              }}
            >
              <Box sx={{ color: "gray" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Published at {publishedAt}
                </Typography>

                {tags.map((tag) =>
                  tags.length > 10 ? (
                    <Typography
                      sx={{ display: "inline-block", color: "#3366CC" }}
                    >
                      {showMoreTags ? tag : `#${tag.substring(0, 5)}`}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{ display: "inline-block", color: "#3366CC" }}
                    >
                      # {tags}
                    </Typography>
                  )
                )}
                {tags.length > 10 && (
                  <button
                    style={{
                      outline: "none",
                      border: "none",
                      display: "inline",
                      fontSize: "14px",
                      backgroundColor: "transparent",
                      color: "#3366CC",
                    }}
                    onClick={() => setShowMoreTags(!showMoreTags)}
                  >
                    {showMoreTags ? "Show less" : "..."}
                  </button>
                )}

                <Typography
                  sx={{
                    color: "#fff",

                    overflow: "auto",
                  }}
                >
                  {showMoreDesc
                    ? description
                    : `${description.substring(0, 250)}`}
                  <button
                    style={{
                      outline: "none",
                      border: "none",
                      fontSize: "14px",
                      backgroundColor: "transparent",
                      color: "rgba(255,255,255,.8)",
                    }}
                    onClick={() => setShowMoreDesc(!showMoreDesc)}
                  >
                    {showMoreDesc ? "Show less" : "Show more"}
                  </button>
                </Typography>
              </Box>
            </Box>
            {/* Comments section */}
            <Typography sx={{ color: "#f1f1f1", my: "1rem", mx: "1rem" }}>
              {" "}
              Comments
            </Typography>
            <VideoComments id={id} />
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
